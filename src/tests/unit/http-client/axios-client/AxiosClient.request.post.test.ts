import axios from 'axios';
import { HttpClientAxios, HttpRequestParamsInterface, HttpRequestType } from '../../../../http-client';

const mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.post,
  endpoint: 'path/to/a/post/api/endpoint',
  requiresToken: false,
  payload: {},
};

type P = typeof mockRequestParams.payload;

describe('HttpClient: axios-client: request: post', () => {
  const httpClient = new HttpClientAxios();

  it('should execute post request succesfully', () => {
    vitest
      .spyOn(axios, 'post')
      .mockImplementation(async () => Promise.resolve({
        data: `request completed: ${mockRequestParams.endpoint}`
      }));

    httpClient
      .request<string, P>(mockRequestParams)
      .then(response => {
        expect(response).toEqual(`request completed: ${mockRequestParams.endpoint}`);
      })
      .catch(err => {
        console.info('AxiosClient.request.post.test.ts: error', err);
      });
  });

  it('should throw error on rejection', () => {
    vitest
      .spyOn(axios, 'post')
      .mockImplementation(async () => Promise.reject({
        data: `request completed: ${mockRequestParams.endpoint}`
      }));

    httpClient
      .request<string, P>(mockRequestParams).catch(err => {
        expect(err).toBeDefined();
        expect(err.toString()).toEqual('Error: HttpClientAxios: exception');
      });
  });
});