export enum ErrorCode {
  Network_Error = 'Network_Error',
  Unexpected_Error = 'Unexpected_Error',
}

export enum Language {
  VIETNAMESE = 'vn',
  ENGLISH = 'en',
}
export enum CommonButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum CommonInputType {}

export enum SyncStatus {
  NOT_SYNC = 0,
  COMPLETED = 1,
  INPROGRESS = 2,
}

export enum RoutePath {
  ROOT = '/*',
  AUTH = '/auth',
  GUEST = '/guest',
  LOGIN = '/login',
  SIGN_UP = '/sign-up',
  FORGOT_PASSWORD = '/forgot-password',
  SPLASH = '/splash',
  SETUP_PIN = '/pin',
  SETUP_ACCOUNT = '/account/:step',
}
