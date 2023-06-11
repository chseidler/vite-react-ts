import { HttpRequestType } from './Constants';

export interface HttpRequestParamsInterface<P = void> {
    requestType: HttpRequestType,
    endpoint: string,
    requiresToken: boolean,
    headers?: { [key: string]: string },
    payload?: P,
    mockDelay?: number,
}