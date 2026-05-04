import type {
  ProfileBankDataState,
  PrototypeFieldState,
} from '../types/prototype'

function field(
  value: string,
  options?: Partial<PrototypeFieldState>,
): PrototypeFieldState {
  return {
    value,
    ...options,
  }
}

const baseState: Omit<
  ProfileBankDataState,
  | 'id'
  | 'label'
  | 'stateKey'
  | 'collapsed'
  | 'showProfileMenu'
  | 'showUnsavedChangesModal'
  | 'hasUnsavedChanges'
  | 'toast'
  | 'notice'
  | 'bank'
  | 'accountType'
  | 'branch'
  | 'account'
> = {
  screenId: 'profileBankData',
}

function buildProfileBankState(
  overrides: Partial<Omit<ProfileBankDataState, 'screenId'>> & {
    id: ProfileBankDataState['id']
    label: string
    stateKey: ProfileBankDataState['stateKey']
  },
): ProfileBankDataState {
  const { id, label, stateKey, ...rest } = overrides

  return {
    ...baseState,
    id,
    label,
    stateKey,
    collapsed: false,
    showProfileMenu: false,
    showUnsavedChangesModal: false,
    hasUnsavedChanges: false,
    toast: undefined,
    notice: undefined,
    bank: field('', { placeholder: 'Selecione', selectLike: true }),
    accountType: field('', { placeholder: 'Selecione', selectLike: true }),
    branch: field('', { placeholder: '0000' }),
    account: field('', { placeholder: '000000-0' }),
    ...rest,
  }
}

export const profileBankStates: ProfileBankDataState[] = [
  buildProfileBankState({
    id: 'profileBankData.new',
    label: 'Usuario NEW',
    stateKey: 'new',
    notice: {
      type: 'info',
      message: 'Informe uma conta bancaria para receber suas comissoes.',
    },
  }),
  buildProfileBankState({
    id: 'profileBankData.pending',
    label: 'Usuario PENDING',
    stateKey: 'pending',
    notice: {
      type: 'warning',
      message: 'Conta aguardando confirmacao.',
    },
    bank: field('341 - Itau Unibanco S.A.', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0111'),
    account: field('03222-3'),
  }),
  buildProfileBankState({
    id: 'profileBankData.empty',
    label: 'Campos vazios',
    stateKey: 'empty',
  }),
  buildProfileBankState({
    id: 'profileBankData.invalid',
    label: 'Campos invalidos',
    stateKey: 'invalid',
    bank: field('Banco inexistente', {
      error: 'Selecione um banco valido.',
      showAlertIcon: true,
      selectLike: true,
    }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('1', {
      error: 'Informe uma agencia valida.',
      showAlertIcon: true,
    }),
    account: field('ABC', {
      error: 'Informe uma conta valida.',
      showAlertIcon: true,
    }),
  }),
  buildProfileBankState({
    id: 'profileBankData.valid',
    label: 'Dados corretos',
    stateKey: 'valid',
    bank: field('341 - Itau Unibanco S.A.', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0111'),
    account: field('03222-3'),
  }),
  buildProfileBankState({
    id: 'profileBankData.saved',
    label: 'Alteracoes salvas',
    stateKey: 'saved',
    bank: field('341 - Itau Unibanco S.A.', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0111'),
    account: field('03222-3'),
    toast: {
      type: 'success',
      message: 'Alteracoes salvas com sucesso.',
    },
  }),
  buildProfileBankState({
    id: 'profileBankData.invalidSave',
    label: 'Dados invalidos ao salvar',
    stateKey: 'invalidSave',
    bank: field('Banco inexistente', {
      error: 'Selecione um banco valido.',
      showAlertIcon: true,
      selectLike: true,
    }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('1', {
      error: 'Informe uma agencia valida.',
      showAlertIcon: true,
    }),
    account: field('ABC', {
      error: 'Informe uma conta valida.',
      showAlertIcon: true,
    }),
    toast: {
      type: 'warning',
      message: 'Confira os dados e tente novamente.',
    },
  }),
  buildProfileBankState({
    id: 'profileBankData.saveError',
    label: 'Erro ao salvar',
    stateKey: 'saveError',
    bank: field('341 - Itau Unibanco S.A.', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0111'),
    account: field('03222-3'),
    toast: {
      type: 'error',
      message: 'Nao foi possivel salvar as alteracoes.',
    },
  }),
  buildProfileBankState({
    id: 'profileBankData.unsaved',
    label: 'Alteracoes nao salvas',
    stateKey: 'unsaved',
    hasUnsavedChanges: true,
    bank: field('104 - Caixa Economica Federal', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0202'),
    account: field('99881-2'),
  }),
  buildProfileBankState({
    id: 'profileBankData.unsavedConfirm',
    label: 'Pop-up ao sair sem salvar',
    stateKey: 'unsavedConfirm',
    hasUnsavedChanges: true,
    showUnsavedChangesModal: true,
    bank: field('104 - Caixa Economica Federal', { selectLike: true }),
    accountType: field('Conta Corrente', { selectLike: true }),
    branch: field('0202'),
    account: field('99881-2'),
  }),
]
