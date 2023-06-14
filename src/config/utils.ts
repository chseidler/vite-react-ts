export function getAppConfigKey() {
  return (import.meta.env.VITE_API_CONFIG || '').trim();
}