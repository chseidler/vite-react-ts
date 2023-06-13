import axios from 'axios';
import { HttpClientAxios, HttpRequestParamsInterface, HttpRequestType } from '../../../../http-client';

const mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: 'path/to/a/get/api/endpoint',
  requiresToken: false,
};

describe('HttpClient: axios-client: request: get', () => {
  const httpClient = new HttpClientAxios();

  it('should execute get request succesfully', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(async () => Promise.resolve({
        data: `request completed: ${mockRequestParams.endpoint}`
      }));

    httpClient
      .request(mockRequestParams)
      .then(response => {
        expect(response).toEqual(`request completed: ${mockRequestParams.endpoint}`);
      })
      .catch(err => {
        console.info('AxiosClient.request.get.test.ts: error', err);
      });
  });

  it('should throw error on rejection', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(async () => Promise.reject({
        data: `request completed: ${mockRequestParams.endpoint}`
      }));

    httpClient.request(mockRequestParams).catch(err => {
      expect(err).toBeDefined();
      expect(err.toString()).toEqual('Error: HttpClientAxios: exception');
    });
  });
});