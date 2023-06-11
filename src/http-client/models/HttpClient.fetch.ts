import { HttpContentTypes, HttpRequestType, HttpRequestMethods } from './Constants';
import { HttpClientInterface } from './HttpClient.interface';
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { UrlUtils } from './UrlUtils';

export class HttpClientFetch implements HttpClientInterface {
  
  constructor() {
    // TODO
  }
  
  async request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R> {
    const { requestType, endpoint, requiresToken, payload, headers, mockDelay } = parameters;
    
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    console.log('HttpClientFetch: fullUrl: ', fullUrl, payload);

    const options: RequestInit = {
      credentials: 'include',
      redirect: 'follow',
      headers: {}
    };

    if (headers) {
      options.headers = {
        ...headers
      };
    }

    if (!options.headers?.hasOwnProperty('Content-Type')) {
      options.headers = {
        ...headers,
        'Content-Type': HttpContentTypes.applicationJson
      };
    }

    if (requiresToken && options.headers) {
      // TODO
    }

    let result!: R;

    const checkRedirect = async (resp: any) => {
      if (resp.redirected) {
        document.location = resp.url;
        return true;
      }
      return false;
    };

    try {
      switch (requestType) {
      case HttpRequestType.get: {
        options.method = HttpRequestMethods.get;
        const response = (await fetch(fullUrl, options)) as any;
        const redirected = await checkRedirect(response);
        if (!redirected) {
          result = (await response.json()) as R;
        }
        break;
      }
      case HttpRequestType.post: {
        options.method = HttpRequestMethods.post;
        options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
        const response = (await fetch(fullUrl, options)) as any;
        const redirected = await checkRedirect(response);
        if (!redirected) {
          result = (await response.json()) as R;
        }
        break;
      }
      case HttpRequestType.put: {
        options.method = HttpRequestMethods.put;
        options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
        const response = (await fetch(fullUrl, options)) as any;
        const redirected = await checkRedirect(response);
        if (!redirected) {
          result = (await response.json()) as R;
        }
        break;
      }
      case HttpRequestType.delete: {
        options.method = HttpRequestMethods.delete;
        const response = (await fetch(fullUrl, options)) as any;
        const redirected = await checkRedirect(response);
        if (!redirected) {
          result = (await response.json()) as R;
        }
        break;
      }
      case HttpRequestType.patch: {
        options.method = HttpRequestMethods.patch;
        options.body = typeof payload === 'string' ? payload : JSON.stringify(payload);
        const response = (await fetch(fullUrl, options)) as any;
        const redirected = await checkRedirect(response);
        if (!redirected) {
          result = (await response.json()) as R;
        }
        break;
      }    
      default: {
        console.warn('HttpClientFetch: invalid requestType argument');
      }
      }
    } catch (err) {
      throw Error('HttpClientFetch: exception');
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