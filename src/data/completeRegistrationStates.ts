import type {
  CompleteRegistrationBankState,
  CompleteRegistrationBiometryState,
  CompleteRegistrationDocumentState,
  CompleteRegistrationFeedbackState,
  PrototypeFieldState,
} from '../types/prototype'

function requiredField(
  placeholder: string,
  error = 'Preencha este campo.',
  selectLike = false,
): PrototypeFieldState {
  return {
    value: '',
    placeholder,
    error,
    showAlertIcon: !selectLike,
    selectLike,
  }
}

function emptyField(
  placeholder: string,
  selectLike = false,
): PrototypeFieldState {
  return {
    value: '',
    placeholder,
    selectLike,
  }
}

export const completeRegistrationDocumentStates: CompleteRegistrationDocumentState[] =
  [
    {
      id: 'completeRegistrationDocument.empty',
      screenId: 'completeRegistrationDocument',
      stateKey: 'empty',
      label: 'Campos vazios',
      documentType: emptyField('Selecione', true),
      documentNumber: emptyField('Digite o número'),
      issuingAgency: emptyField('Ex.: SSP'),
      issuingState: emptyField('Selecione', true),
      issueDate: emptyField('DD/MM/AAAA'),
      expiryDate: emptyField('DD/MM/AAAA (se houver)'),
    },
    {
      id: 'completeRegistrationDocument.required',
      screenId: 'completeRegistrationDocument',
      stateKey: 'required',
      label: 'Campos não preenchidos',
      documentType: requiredField('Selecione', 'Preencha este campo.', true),
      documentNumber: requiredField('Digite o número'),
      issuingAgency: requiredField('Ex.: SSP'),
      issuingState: requiredField('Selecione', 'Preencha este campo.', true),
      issueDate: requiredField('DD/MM/AAAA'),
      expiryDate: emptyField('DD/MM/AAAA (se houver)'),
    },
    {
      id: 'completeRegistrationDocument.invalid',
      screenId: 'completeRegistrationDocument',
      stateKey: 'invalid',
      label: 'Campos inválidos',
      documentType: { value: 'RG', selectLike: true },
      documentNumber: {
        value: '12',
        error: 'Informe um número de documento válido.',
        showAlertIcon: true,
      },
      issuingAgency: {
        value: 'SS',
        error: 'Verifique o órgão emissor.',
        showAlertIcon: true,
      },
      issuingState: {
        value: 'XX',
        error: 'Selecione uma UF válida.',
        selectLike: true,
      },
      issueDate: {
        value: '32/13/2026',
        error: 'Informe uma data válida.',
        showAlertIcon: true,
      },
      expiryDate: {
        value: '01/01/2020',
        error: 'A validade deve ser posterior à data atual.',
        showAlertIcon: true,
      },
    },
    {
      id: 'completeRegistrationDocument.valid',
      screenId: 'completeRegistrationDocument',
      stateKey: 'valid',
      label: 'Dados corretos',
      documentType: { value: 'RG', selectLike: true },
      documentNumber: { value: '12.345.678-9' },
      issuingAgency: { value: 'SSP' },
      issuingState: { value: 'PR', selectLike: true },
      issueDate: { value: '10/03/2018' },
      expiryDate: { value: '' },
    },
  ]

export const completeRegistrationBankStates: CompleteRegistrationBankState[] = [
  {
    id: 'completeRegistrationBank.empty',
    screenId: 'completeRegistrationBank',
    stateKey: 'empty',
    label: 'Campos vazios',
    bank: emptyField('', true),
    accountType: emptyField('', true),
    branch: emptyField('0000'),
    account: emptyField('000000-0'),
  },
  {
    id: 'completeRegistrationBank.required',
    screenId: 'completeRegistrationBank',
    stateKey: 'required',
    label: 'Campos não preenchidos',
    bank: requiredField('', 'Preencha este campo.', true),
    accountType: requiredField('', 'Preencha este campo.', true),
    branch: requiredField('0000'),
    account: requiredField('000000-0'),
  },
  {
    id: 'completeRegistrationBank.invalid',
    screenId: 'completeRegistrationBank',
    stateKey: 'invalid',
    label: 'Campos inválidos',
    bank: {
      value: 'Banco inexistente',
      error: 'Selecione um banco válido.',
      selectLike: true,
    },
    accountType: {
      value: 'Conta Corrente',
      selectLike: true,
    },
    branch: {
      value: '1',
      error: 'Informe uma agência válida.',
      showAlertIcon: true,
    },
    account: {
      value: 'ABC',
      error: 'Informe uma conta válida.',
      showAlertIcon: true,
    },
  },
  {
    id: 'completeRegistrationBank.valid',
    screenId: 'completeRegistrationBank',
    stateKey: 'valid',
    label: 'Dados corretos',
    bank: {
      value: 'Banco do Brasil',
      selectLike: true,
    },
    accountType: {
      value: 'Conta Corrente',
      selectLike: true,
    },
    branch: { value: '1234' },
    account: { value: '123456-7' },
  },
]

export const completeRegistrationBiometryStates: CompleteRegistrationBiometryState[] =
  [
    {
      id: 'completeRegistrationBiometry.waiting',
      screenId: 'completeRegistrationBiometry',
      stateKey: 'waiting',
      label: 'Aguardando leitura',
    },
    {
      id: 'completeRegistrationBiometry.analyzing',
      screenId: 'completeRegistrationBiometry',
      stateKey: 'analyzing',
      label: 'Em análise',
    },
    {
      id: 'completeRegistrationBiometry.success',
      screenId: 'completeRegistrationBiometry',
      stateKey: 'success',
      label: 'Validação concluída',
    },
    {
      id: 'completeRegistrationBiometry.error',
      screenId: 'completeRegistrationBiometry',
      stateKey: 'error',
      label: 'Validação com erro',
    },
  ]

export const completeRegistrationFeedbackStates: CompleteRegistrationFeedbackState[] =
  [
    {
      id: 'completeRegistrationFeedback.emailConfirmed',
      screenId: 'completeRegistrationFeedback',
      stateKey: 'emailConfirmed',
      label: 'E-mail confirmado',
    },
    {
      id: 'completeRegistrationFeedback.emailNotConfirmed',
      screenId: 'completeRegistrationFeedback',
      stateKey: 'emailNotConfirmed',
      label: 'E-mail não confirmado',
    },
  ]
