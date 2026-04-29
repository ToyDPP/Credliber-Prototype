export type PrototypeScreenId = 'login'

export type LoginPrototypeStateId =
  | 'empty'
  | 'filled'
  | 'required'
  | 'invalid'
  | 'passwordVisible'
  | 'rememberMe'
  | 'loading'
  | 'generalError'

export interface LoginFieldVisualState {
  value: string
  error?: string
  showAlertIcon?: boolean
}

export interface LoginPrototypeState {
  id: LoginPrototypeStateId
  screenId: 'login'
  label: string
  email: LoginFieldVisualState
  password: LoginFieldVisualState
  passwordVisible: boolean
  rememberMe: boolean
  loading: boolean
  generalError?: string
}

export interface PrototypeNavigationItem {
  id: LoginPrototypeStateId
  label: string
  screenId: PrototypeScreenId
}

export interface PrototypeNavigationSection {
  id: PrototypeScreenId
  label: string
  items: PrototypeNavigationItem[]
}
