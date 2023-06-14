import { ItemsApiClientOptions } from '../../api-client/models/items';
import { HttpClientConfigInterface } from '../../http-client';

export interface ConfigInterface {
    global: {
        version: number
    },
    httpClient: HttpClientConfigInterface,
    apiClient: {
        type: string
    },
    items: {
        apiClientOptions: ItemsApiClientOptions
    }
}