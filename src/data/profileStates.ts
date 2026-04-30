import type { ProfileAccountState, PrototypeFieldState } from '../types/prototype'

function field(value: string, options?: Partial<PrototypeFieldState>): PrototypeFieldState {
  return {
    value,
    ...options,
  }
}

const lockedField = (value: string, options?: Partial<PrototypeFieldState>) =>
  field(value, { locked: true, ...options })

const baseState: Omit<
  ProfileAccountState,
  | 'id'
  | 'label'
  | 'stateKey'
  | 'showProfileMenu'
  | 'collapsed'
  | 'hasPhoto'
  | 'showChangePhotoModal'
  | 'showRemovePhotoModal'
  | 'showUnsavedChangesModal'
  | 'hasUnsavedChanges'
  | 'fieldsOpen'
  | 'toast'
  | 'biometryStatus'
  | 'fullName'
  | 'cpf'
  | 'birthDate'
  | 'email'
  | 'whatsapp'
  | 'cep'
  | 'state'
  | 'city'
  | 'neighborhood'
  | 'address'
  | 'number'
  | 'complement'
  | 'documentType'
  | 'documentNumber'
  | 'issuingAgency'
  | 'issuingState'
  | 'issueDate'
  | 'expiryDate'
> = {
  screenId: 'profileAccount',
}

function buildProfileState(
  overrides: Partial<Omit<ProfileAccountState, 'screenId'>> & {
    id: ProfileAccountState['id']
    label: string
    stateKey: ProfileAccountState['stateKey']
  },
): ProfileAccountState {
  const { id, label, stateKey, ...rest } = overrides

  return {
    ...baseState,
    id,
    label,
    stateKey,
    collapsed: false,
    showProfileMenu: false,
    hasPhoto: false,
    showChangePhotoModal: false,
    showRemovePhotoModal: false,
    showUnsavedChangesModal: false,
    hasUnsavedChanges: false,
    fieldsOpen: true,
    toast: undefined,
    biometryStatus: 'approved',
    fullName: field('Matheus Dias Goncalves'),
    cpf: lockedField('933.332.789-44'),
    birthDate: field('14/03/2000'),
    email: field('matheus@credliber.com.br'),
    whatsapp: field('(44) 99319-0144'),
    cep: field('87103-102'),
    state: field('Parana', { selectLike: true }),
    city: field('Maringa', { selectLike: true }),
    neighborhood: field('Jd. Belo Horizonte'),
    address: field('Rua Sobral'),
    number: field('258'),
    complement: field('Casa azul'),
    documentType: field('CNH', { selectLike: true }),
    documentNumber: field('97567090407'),
    issuingAgency: field('SSP'),
    issuingState: field('PR', { selectLike: true }),
    issueDate: field('14/06/2023'),
    expiryDate: field('14/06/2028'),
    ...rest,
  }
}

export const mockProfilePhoto =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#B7D14E"/>
          <stop offset="100%" stop-color="#7CA53C"/>
        </linearGradient>
      </defs>
      <rect width="220" height="220" fill="url(#g)"/>
      <circle cx="110" cy="95" r="34" fill="#F2D0B6"/>
      <rect x="72" y="132" width="76" height="58" rx="28" fill="#D9E2F1"/>
      <path d="M76 89c8-36 59-45 73-3-9 4-16 5-23 5-12 0-24-4-35-11-2 3-6 5-15 9z" fill="#B28C5B"/>
      <rect x="92" y="118" width="36" height="18" rx="8" fill="#E8C2A8"/>
      <circle cx="98" cy="96" r="4" fill="#5B4638"/>
      <circle cx="122" cy="96" r="4" fill="#5B4638"/>
      <path d="M100 110c8 6 13 6 20 0" stroke="#8C5E3C" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="78" y="82" width="22" height="17" rx="6" fill="none" stroke="#E8EEF6" stroke-width="3"/>
      <rect x="120" y="82" width="22" height="17" rx="6" fill="none" stroke="#E8EEF6" stroke-width="3"/>
      <path d="M100 90h20" stroke="#E8EEF6" stroke-width="3"/>
    </svg>
  `)

export const profileAccountStates: ProfileAccountState[] = [
  buildProfileState({
    id: 'profileAccount.menuExpanded',
    label: 'Menu expandido',
    stateKey: 'menuExpanded',
    showProfileMenu: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.sidebarCollapsed',
    label: 'Sidebar geral colapsada',
    stateKey: 'sidebarCollapsed',
    collapsed: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.fieldsOpen',
    label: 'Campos abertos',
    stateKey: 'fieldsOpen',
    fieldsOpen: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.fieldsLocked',
    label: 'Campos bloqueados',
    stateKey: 'fieldsLocked',
    fieldsOpen: false,
    fullName: lockedField('Matheus Dias Goncalves'),
    cpf: lockedField('933.332.789-44'),
    birthDate: lockedField('14/03/2000'),
    email: lockedField('matheus@credliber.com.br'),
    documentType: lockedField('CNH', { selectLike: true }),
    documentNumber: lockedField('97567090407'),
    issuingAgency: lockedField('SSP'),
    issuingState: lockedField('PR', { selectLike: true }),
    issueDate: lockedField('14/06/2023'),
    expiryDate: lockedField('14/06/2028'),
  }),
  buildProfileState({
    id: 'profileAccount.biometryApproved',
    label: 'Biometria aprovada',
    stateKey: 'biometryApproved',
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.biometryPending',
    label: 'Biometria pendente',
    stateKey: 'biometryPending',
    biometryStatus: 'pending',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.biometryRejected',
    label: 'Biometria reprovada',
    stateKey: 'biometryRejected',
    biometryStatus: 'rejected',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.biometryRetry',
    label: 'Refazer biometria',
    stateKey: 'biometryRetry',
    biometryStatus: 'retry',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.changePhoto',
    label: 'Alterar foto',
    stateKey: 'changePhoto',
    showChangePhotoModal: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.photoChanged',
    label: 'Foto alterada',
    stateKey: 'photoChanged',
    hasPhoto: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.removePhoto',
    label: 'Remover foto',
    stateKey: 'removePhoto',
    hasPhoto: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.removePhotoConfirm',
    label: 'Confirmacao para remover foto',
    stateKey: 'removePhotoConfirm',
    hasPhoto: true,
    showRemovePhotoModal: true,
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
  }),
  buildProfileState({
    id: 'profileAccount.saved',
    label: 'Alteracoes salvas',
    stateKey: 'saved',
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
    toast: {
      type: 'success',
      message: 'Alteracoes salvas com sucesso.',
    },
  }),
  buildProfileState({
    id: 'profileAccount.invalid',
    label: 'Dados invalidos ao salvar',
    stateKey: 'invalid',
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
    toast: {
      type: 'warning',
      message: 'Confira os dados e tente novamente.',
    },
    whatsapp: field('(44) 9', {
      error: 'Informe um numero valido.',
      showAlertIcon: true,
    }),
    cep: field('8710', {
      error: 'Informe um CEP valido.',
      showAlertIcon: true,
    }),
    issueDate: field('32/13/2026', {
      error: 'Informe uma data valida.',
      showAlertIcon: true,
    }),
  }),
  buildProfileState({
    id: 'profileAccount.saveError',
    label: 'Alteracoes nao salvas',
    stateKey: 'saveError',
    biometryStatus: 'approved',
    email: lockedField('matheus@credliber.com.br'),
    toast: {
      type: 'error',
      message: 'Nao foi possivel salvar as alteracoes.',
    },
  }),
  buildProfileState({
    id: 'profileAccount.unsavedConfirm',
    label: 'Pop-up ao sair sem salvar',
    stateKey: 'unsavedConfirm',
    biometryStatus: 'approved',
    showUnsavedChangesModal: true,
    hasUnsavedChanges: true,
    email: lockedField('matheus@credliber.com.br'),
  }),
]
