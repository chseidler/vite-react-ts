import { ItemsApiClientOptions } from '../../api-client/models/items';
import { LocalizationApiClientOptions } from '../../api-client/models/localization/LocalizationApiClientOptions.interface';
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
    localization: {
        apiClientOptions: LocalizationApiClientOptions,
        locales: {
            key: string,
            isDefault: boolean
        }[],
        localStorageCache: {
            enabled: boolean,
            expirationInMinutes: number,
        }
    }
}