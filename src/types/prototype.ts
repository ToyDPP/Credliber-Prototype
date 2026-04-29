export type PrototypeScreenId =
  | 'login'
  | 'registrationStepOne'
  | 'registrationStepTwo'
  | 'registrationStepThree'
  | 'registrationSuccess'
  | 'emailConfirmed'
  | 'passwordRecoveryRequest'
  | 'passwordRecoveryMessages'
  | 'passwordRecoveryNewPassword'

export type RecoveryChannel = 'whatsapp' | 'email' | 'sms'

export type LoginPrototypeStateKey =
  | 'empty'
  | 'filled'
  | 'required'
  | 'invalid'
  | 'passwordVisible'
  | 'rememberMe'
  | 'loading'
  | 'generalError'

export type RegistrationFormStateKey =
  | 'empty'
  | 'required'
  | 'invalid'
  | 'valid'

export type RegistrationSuccessStateKey = 'sent'
export type EmailConfirmedStateKey = 'confirmed'

export type PasswordRecoveryRequestStateKey =
  | 'empty'
  | 'whatsapp'
  | 'email'
  | 'sms'
  | 'required'
  | 'blocked'

export type PasswordRecoveryMessagesStateKey = RecoveryChannel
export type PasswordRecoveryNewPasswordStateKey = RegistrationFormStateKey

export type LoginPrototypeViewId = `login.${LoginPrototypeStateKey}`
export type RegistrationStepOneViewId =
  `registrationStepOne.${RegistrationFormStateKey}`
export type RegistrationStepTwoViewId =
  `registrationStepTwo.${RegistrationFormStateKey}`
export type RegistrationStepThreeViewId =
  `registrationStepThree.${RegistrationFormStateKey}`
export type RegistrationSuccessViewId =
  `registrationSuccess.${RegistrationSuccessStateKey}`
export type EmailConfirmedViewId =
  `emailConfirmed.${EmailConfirmedStateKey}`
export type PasswordRecoveryRequestViewId =
  `passwordRecoveryRequest.${PasswordRecoveryRequestStateKey}`
export type PasswordRecoveryMessagesViewId =
  `passwordRecoveryMessages.${PasswordRecoveryMessagesStateKey}`
export type PasswordRecoveryNewPasswordViewId =
  `passwordRecoveryNewPassword.${PasswordRecoveryNewPasswordStateKey}`

export type PrototypeViewId =
  | LoginPrototypeViewId
  | RegistrationStepOneViewId
  | RegistrationStepTwoViewId
  | RegistrationStepThreeViewId
  | RegistrationSuccessViewId
  | EmailConfirmedViewId
  | PasswordRecoveryRequestViewId
  | PasswordRecoveryMessagesViewId
  | PasswordRecoveryNewPasswordViewId

export type PasswordChecklistStatus = 'neutral' | 'success' | 'error'

export interface PrototypeFieldState {
  value: string
  placeholder?: string
  error?: string
  showAlertIcon?: boolean
  selectLike?: boolean
}

export interface PasswordChecklistItem {
  id: string
  label: string
  status: PasswordChecklistStatus
}

interface PrototypeBaseState {
  id: PrototypeViewId
  screenId: PrototypeScreenId
  label: string
}

export interface LoginPrototypeState extends PrototypeBaseState {
  id: LoginPrototypeViewId
  screenId: 'login'
  stateKey: LoginPrototypeStateKey
  email: PrototypeFieldState
  password: PrototypeFieldState
  passwordVisible: boolean
  rememberMe: boolean
  loading: boolean
  generalError?: string
}

export interface RegistrationStepOneState extends PrototypeBaseState {
  id: RegistrationStepOneViewId
  screenId: 'registrationStepOne'
  stateKey: RegistrationFormStateKey
  cpf: PrototypeFieldState
  fullName: PrototypeFieldState
  birthDate: PrototypeFieldState
  email: PrototypeFieldState
  whatsapp: PrototypeFieldState
}

export interface RegistrationStepTwoState extends PrototypeBaseState {
  id: RegistrationStepTwoViewId
  screenId: 'registrationStepTwo'
  stateKey: RegistrationFormStateKey
  cep: PrototypeFieldState
  state: PrototypeFieldState
  city: PrototypeFieldState
  neighborhood: PrototypeFieldState
  address: PrototypeFieldState
  number: PrototypeFieldState
  complement: PrototypeFieldState
}

export interface RegistrationStepThreeState extends PrototypeBaseState {
  id: RegistrationStepThreeViewId
  screenId: 'registrationStepThree'
  stateKey: RegistrationFormStateKey
  password: PrototypeFieldState
  confirmPassword: PrototypeFieldState
  passwordVisible: boolean
  confirmPasswordVisible: boolean
  checklist: PasswordChecklistItem[]
}

export interface RegistrationSuccessState extends PrototypeBaseState {
  id: RegistrationSuccessViewId
  screenId: 'registrationSuccess'
  stateKey: RegistrationSuccessStateKey
  countdown: string
}

export interface EmailConfirmedState extends PrototypeBaseState {
  id: EmailConfirmedViewId
  screenId: 'emailConfirmed'
  stateKey: EmailConfirmedStateKey
}

export interface PasswordRecoveryRequestState extends PrototypeBaseState {
  id: PasswordRecoveryRequestViewId
  screenId: 'passwordRecoveryRequest'
  stateKey: PasswordRecoveryRequestStateKey
  identifier: PrototypeFieldState
  selectedChannel: RecoveryChannel
}

export interface PasswordRecoveryMessagesState extends PrototypeBaseState {
  id: PasswordRecoveryMessagesViewId
  screenId: 'passwordRecoveryMessages'
  stateKey: PasswordRecoveryMessagesStateKey
  selectedChannel: RecoveryChannel
}

export interface PasswordRecoveryNewPasswordState extends PrototypeBaseState {
  id: PasswordRecoveryNewPasswordViewId
  screenId: 'passwordRecoveryNewPassword'
  stateKey: PasswordRecoveryNewPasswordStateKey
  password: PrototypeFieldState
  confirmPassword: PrototypeFieldState
  passwordVisible: boolean
  confirmPasswordVisible: boolean
  checklist: PasswordChecklistItem[]
}

export type PrototypeScreenState =
  | LoginPrototypeState
  | RegistrationStepOneState
  | RegistrationStepTwoState
  | RegistrationStepThreeState
  | RegistrationSuccessState
  | EmailConfirmedState
  | PasswordRecoveryRequestState
  | PasswordRecoveryMessagesState
  | PasswordRecoveryNewPasswordState

export interface PrototypeNavigationChild {
  id: PrototypeViewId
  label: string
  screenId: PrototypeScreenId
}

export interface PrototypeNavigationGroup {
  id: PrototypeScreenId
  label: string
  children: PrototypeNavigationChild[]
}
