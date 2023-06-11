import { HttpRequestParamsInterface } from './HttpRequestParams.interface';

export interface HttpClientConfigInterface {
    tokenKey: string,
    clientType: string,
}

export interface HttpClientInterface {
    request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R>
}