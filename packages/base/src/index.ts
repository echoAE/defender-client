export { createApi, createAuthenticatedApi } from './api/api';
export { authenticate } from './api/auth';
export { BaseApiClient } from './api/client';
export * from './utils/network';

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const VERSION = require('../package.json').version;