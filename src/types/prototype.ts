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
  | 'commercialDashboard'
  | 'completeRegistrationDocument'
  | 'completeRegistrationBank'
  | 'completeRegistrationBiometry'
  | 'completeRegistrationFeedback'
  | 'profileAccount'
  | 'profileBankData'
  | 'placeholderRoute'
  | 'profilePlaceholder'

export type PrototypeGroupId = string

export type RecoveryChannel = 'whatsapp' | 'email' | 'sms'
export type AppNavigationItemId =
  | 'dashboard'
  | 'crm'
  | 'operations'
  | 'team'
  | 'supportMaterial'
  | 'transactions'
  | 'wallet'
  | 'reports'
  | 'campaigns'
export type ProfileNavigationItemId =
  | 'account'
  | 'bank'
  | 'settings'
  | 'security'
  | 'history'

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
export type CommercialDashboardStateKey =
  | 'expanded'
  | 'firstAccess'
  | 'profileMenu'
  | 'collapsed'
export type CompleteRegistrationDocumentStateKey = RegistrationFormStateKey
export type CompleteRegistrationBankStateKey = RegistrationFormStateKey
export type CompleteRegistrationBiometryStateKey =
  | 'waiting'
  | 'analyzing'
  | 'success'
  | 'error'
export type CompleteRegistrationFeedbackStateKey =
  | 'emailConfirmed'
  | 'emailNotConfirmed'
export type ProfileAccountStateKey =
  | 'menuExpanded'
  | 'sidebarCollapsed'
  | 'fieldsOpen'
  | 'fieldsLocked'
  | 'biometryApproved'
  | 'biometryPending'
  | 'biometryRejected'
  | 'biometryRetry'
  | 'changePhoto'
  | 'photoChanged'
  | 'removePhoto'
  | 'removePhotoConfirm'
  | 'saved'
  | 'invalid'
  | 'saveError'
  | 'unsavedConfirm'
export type ProfileBankDataStateKey =
  | 'new'
  | 'pending'
  | 'empty'
  | 'invalid'
  | 'valid'
  | 'saved'
  | 'invalidSave'
  | 'saveError'
  | 'unsaved'
  | 'unsavedConfirm'
export type PlaceholderRouteStateKey =
  | 'crm'
  | 'operations'
  | 'team'
  | 'supportMaterial'
  | 'transactions'
  | 'wallet'
  | 'reports'
  | 'campaigns'
  | 'newOperation'
export type ProfilePlaceholderStateKey = 'settings' | 'security' | 'history'

export type LoginPrototypeViewId = `login.${LoginPrototypeStateKey}`
export type RegistrationStepOneViewId =
  `registrationStepOne.${RegistrationFormStateKey}`
export type RegistrationStepTwoViewId =
  `registrationStepTwo.${RegistrationFormStateKey}`
export type RegistrationStepThreeViewId =
  `registrationStepThree.${RegistrationFormStateKey}`
export type RegistrationSuccessViewId =
  `registrationSuccess.${RegistrationSuccessStateKey}`
export type EmailConfirmedViewId = `emailConfirmed.${EmailConfirmedStateKey}`
export type PasswordRecoveryRequestViewId =
  `passwordRecoveryRequest.${PasswordRecoveryRequestStateKey}`
export type PasswordRecoveryMessagesViewId =
  `passwordRecoveryMessages.${PasswordRecoveryMessagesStateKey}`
export type PasswordRecoveryNewPasswordViewId =
  `passwordRecoveryNewPassword.${PasswordRecoveryNewPasswordStateKey}`
export type CommercialDashboardViewId =
  `commercialDashboard.${CommercialDashboardStateKey}`
export type CompleteRegistrationDocumentViewId =
  `completeRegistrationDocument.${CompleteRegistrationDocumentStateKey}`
export type CompleteRegistrationBankViewId =
  `completeRegistrationBank.${CompleteRegistrationBankStateKey}`
export type CompleteRegistrationBiometryViewId =
  `completeRegistrationBiometry.${CompleteRegistrationBiometryStateKey}`
export type CompleteRegistrationFeedbackViewId =
  `completeRegistrationFeedback.${CompleteRegistrationFeedbackStateKey}`
export type ProfileAccountViewId = `profileAccount.${ProfileAccountStateKey}`
export type ProfileBankDataViewId = `profileBankData.${ProfileBankDataStateKey}`
export type PlaceholderRouteViewId =
  `placeholderRoute.${PlaceholderRouteStateKey}`
export type ProfilePlaceholderViewId =
  `profilePlaceholder.${ProfilePlaceholderStateKey}`

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
  | CommercialDashboardViewId
  | CompleteRegistrationDocumentViewId
  | CompleteRegistrationBankViewId
  | CompleteRegistrationBiometryViewId
  | CompleteRegistrationFeedbackViewId
  | ProfileAccountViewId
  | ProfileBankDataViewId
  | PlaceholderRouteViewId
  | ProfilePlaceholderViewId

export type PasswordChecklistStatus = 'neutral' | 'success' | 'error'

export interface PrototypeFieldState {
  value: string
  placeholder?: string
  error?: string
  showAlertIcon?: boolean
  selectLike?: boolean
  locked?: boolean
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

export interface CommercialDashboardState extends PrototypeBaseState {
  id: CommercialDashboardViewId
  screenId: 'commercialDashboard'
  stateKey: CommercialDashboardStateKey
  collapsed: boolean
  showFirstAccessModal: boolean
  showProfileMenu: boolean
  showBanner: boolean
}

export interface CompleteRegistrationDocumentState extends PrototypeBaseState {
  id: CompleteRegistrationDocumentViewId
  screenId: 'completeRegistrationDocument'
  stateKey: CompleteRegistrationDocumentStateKey
  documentType: PrototypeFieldState
  documentNumber: PrototypeFieldState
  issuingAgency: PrototypeFieldState
  issuingState: PrototypeFieldState
  issueDate: PrototypeFieldState
  expiryDate: PrototypeFieldState
}

export interface CompleteRegistrationBankState extends PrototypeBaseState {
  id: CompleteRegistrationBankViewId
  screenId: 'completeRegistrationBank'
  stateKey: CompleteRegistrationBankStateKey
  bank: PrototypeFieldState
  accountType: PrototypeFieldState
  branch: PrototypeFieldState
  account: PrototypeFieldState
}

export interface CompleteRegistrationBiometryState extends PrototypeBaseState {
  id: CompleteRegistrationBiometryViewId
  screenId: 'completeRegistrationBiometry'
  stateKey: CompleteRegistrationBiometryStateKey
}

export interface CompleteRegistrationFeedbackState extends PrototypeBaseState {
  id: CompleteRegistrationFeedbackViewId
  screenId: 'completeRegistrationFeedback'
  stateKey: CompleteRegistrationFeedbackStateKey
}

export type ProfileToastType = 'success' | 'warning' | 'error'
export type ProfileBiometryStatus =
  | 'approved'
  | 'pending'
  | 'rejected'
  | 'retry'
export type ProfileInlineNoticeType = 'info' | 'warning'

export interface ProfileToastState {
  type: ProfileToastType
  message: string
}

export interface ProfileInlineNoticeState {
  type: ProfileInlineNoticeType
  message: string
}

export interface ProfileAccountState extends PrototypeBaseState {
  id: ProfileAccountViewId
  screenId: 'profileAccount'
  stateKey: ProfileAccountStateKey
  collapsed: boolean
  showProfileMenu: boolean
  hasPhoto: boolean
  showChangePhotoModal: boolean
  showRemovePhotoModal: boolean
  showUnsavedChangesModal: boolean
  hasUnsavedChanges: boolean
  fieldsOpen: boolean
  toast?: ProfileToastState
  biometryStatus: ProfileBiometryStatus
  fullName: PrototypeFieldState
  cpf: PrototypeFieldState
  birthDate: PrototypeFieldState
  email: PrototypeFieldState
  whatsapp: PrototypeFieldState
  cep: PrototypeFieldState
  state: PrototypeFieldState
  city: PrototypeFieldState
  neighborhood: PrototypeFieldState
  address: PrototypeFieldState
  number: PrototypeFieldState
  complement: PrototypeFieldState
  documentType: PrototypeFieldState
  documentNumber: PrototypeFieldState
  issuingAgency: PrototypeFieldState
  issuingState: PrototypeFieldState
  issueDate: PrototypeFieldState
  expiryDate: PrototypeFieldState
}

export interface ProfileBankDataState extends PrototypeBaseState {
  id: ProfileBankDataViewId
  screenId: 'profileBankData'
  stateKey: ProfileBankDataStateKey
  collapsed: boolean
  showProfileMenu: boolean
  showUnsavedChangesModal: boolean
  hasUnsavedChanges: boolean
  toast?: ProfileToastState
  notice?: ProfileInlineNoticeState
  bank: PrototypeFieldState
  accountType: PrototypeFieldState
  branch: PrototypeFieldState
  account: PrototypeFieldState
}

export interface PlaceholderRouteState extends PrototypeBaseState {
  id: PlaceholderRouteViewId
  screenId: 'placeholderRoute'
  stateKey: PlaceholderRouteStateKey
  mainItemId: AppNavigationItemId
  title: string
  description: string
  actionLabel?: string
}

export interface ProfilePlaceholderState extends PrototypeBaseState {
  id: ProfilePlaceholderViewId
  screenId: 'profilePlaceholder'
  stateKey: ProfilePlaceholderStateKey
  collapsed: boolean
  showProfileMenu: boolean
  profileItemId: ProfileNavigationItemId
  title: string
  description: string
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
  | CommercialDashboardState
  | CompleteRegistrationDocumentState
  | CompleteRegistrationBankState
  | CompleteRegistrationBiometryState
  | CompleteRegistrationFeedbackState
  | ProfileAccountState
  | ProfileBankDataState
  | PlaceholderRouteState
  | ProfilePlaceholderState

export interface PrototypeNavigationChild {
  id: PrototypeViewId
  label: string
  screenId: PrototypeScreenId
}

export interface PrototypeNavigationGroup {
  id: PrototypeGroupId
  label: string
  children: PrototypeNavigationChild[]
}
