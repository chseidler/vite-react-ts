import axios, { AxiosRequestConfig } from 'axios';
import { HttpClientInterface } from './HttpClient.interface';
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { UrlUtils } from './UrlUtils';
import { HttpRequestType } from './Constants';

export class HttpClientAxios implements HttpClientInterface {
    
  constructor() {
    // TODO
  }
    
  async request<R, P>(parameters: HttpRequestParamsInterface<P>): Promise<R> {
    const { requestType, endpoint, requiresToken, payload, headers, mockDelay } = parameters;
    
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    console.log('HttpClientAxios: fullUrl: ', fullUrl, payload);

    const options: AxiosRequestConfig = {
      headers: {},
      maxRedirects: 0
    };

    if (headers) {
      options.headers = {
        ...headers
      };
    }

    if (requiresToken && options.headers) {
      options.withCredentials = true;
    }

    let result!: R;

    try {
      switch(requestType) {
      case HttpRequestType.get: {
        const response = await axios.get(fullUrl, options);
        result = response?.data as R;
        break;
      }
      case HttpRequestType.post: {
        const response = await axios.post(fullUrl, payload, options);
        result = response?.data as R;
        break;
      }
      case HttpRequestType.put: {
        const response = await axios.put(fullUrl, payload, options);
        result = response?.data as R;
        break;
      }
      case HttpRequestType.delete: {
        const response = await axios.delete(fullUrl, options);
        result = response?.data as R;
        break;
      }
      case HttpRequestType.patch: {
        const response = await axios.patch(fullUrl, payload, options);
        result = response?.data as R;
        break;
      }
      default: {
        console.warn('HttpClientAxios: invalid requestType argument');
      }
      }
    } catch (err) {
      console.error('HttpClientAxios: excpetion', err);
      throw Error('HttpClientAxios: exception');
    }

    if ((mockDelay || 0) > 0) {
      return new Promise<R>(resolve => {
        setTimeout(() => {
          resolve(result);
        }, mockDelay);
      });
    }

    return result;
  }
    
}