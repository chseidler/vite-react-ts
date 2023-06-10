/**
 * @name ItemsApiClientEndpoints
 * @description Interface for the Items urls used to avoid hard-coded strings
 */
export interface ItemsApiClientEndpoints {
    fetchItems: string
}

/**
 * @name ItemsApiClientOptions
 * @description Interface for the Items api client options (include endpoints)
 */
export interface ItemsApiClientOptions {
    mockDelay?: number,
    endpoints: ItemsApiClientEndpoints
}