export interface LocalizationApiClientEndpoints {
    fetchTranslation: string
}

export interface LocalizationApiClientOptions {
    mockDelay?: number,
    endpoints: LocalizationApiClientEndpoints
}