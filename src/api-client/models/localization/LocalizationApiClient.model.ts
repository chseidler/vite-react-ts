import { HttpRequestParamsInterface, HttpRequestType, httpClientFactory } from '../../../http-client';
import { LocalizationApiClientInterface } from './LocalizationApiClient.interface';
import { LocalizationApiClientEndpoints, LocalizationApiClientOptions } from './LocalizationApiClientOptions.interface';

export class LocalizationApiClientModel implements LocalizationApiClientInterface {
  private readonly endpoints!: LocalizationApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: LocalizationApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }
  fetchTranslation(namespace: string, key: string): Promise<{ [key: string]: string; }> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchTranslation,
      requiresToken: false,
      payload: {
        namespace,
        key,
      } as any,
      mockDelay: this.mockDelay
    };

    return httpClientFactory().request<{ [key: string]: string}>(requestParameters);
  }
}