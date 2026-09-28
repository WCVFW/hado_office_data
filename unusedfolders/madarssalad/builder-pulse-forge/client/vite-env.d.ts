/// <reference types="vite/client" />

declare global {
  interface Window {
    apiUnavailableLogged?: boolean;
  }
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
