/// <reference types="vite/client" />
/// <reference types="react" />

interface ImportMetaEnv {
    readonly VITE_API_CONFIG: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}