export interface ApiResponse<T = unknown> {
  data?: T;
  error?: ApiError;
  meta?: PaginationMeta;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

export interface PaginationMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface BuildConfig {
  name: string;
  type: 'web' | 'server' | 'desktop';
  framework?: string;
  env?: Record<string, string>;
}

export interface DeployConfig {
  platform: string;
  appId: string;
  env?: Record<string, string>;
}
