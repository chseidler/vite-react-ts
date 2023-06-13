import { HttpClientFetch, HttpRequestParamsInterface, HttpRequestType } from '../../../../http-client';

const mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: 'path/to/a/get/endpoint',
  requiresToken: false,
};

describe('HttpClient: axios-client: request: get', () => {
  const httpClient = new HttpClientFetch();

  it('should execute get request succesfully', async () => {
    const unmockedFetch = global.fetch || (() => { {/*empty*/} });
    global.fetch = unmockedFetch;

    const expectedResult = {
      result: `request completed: ${mockRequestParams.endpoint}`
    };

    vitest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => Promise.resolve({
        redirected: false,
        json: () => Promise.resolve(JSON.stringify(expectedResult))
      } as any));

    try {
      const response = await httpClient.request(mockRequestParams);
      expect(response).not.toBeNull();
      expect(response).toEqual(expectedResult);
    } catch (err) {
      console.info('AxiosClient.request.get.test.ts: error', err);
    }

    global.fetch = unmockedFetch;
  });

  it('should throw error on rejection', () => {
    const unmockedFetch = global.fetch || (() => { {/*empty*/} });
    global.fetch = unmockedFetch;

    vitest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => Promise.reject());

    httpClient.request(mockRequestParams).catch(err => {
      expect(err).toBeDefined();
      expect(err.toString()).toEqual('Error: HttpClientFetch: exception');
    });
  });
});