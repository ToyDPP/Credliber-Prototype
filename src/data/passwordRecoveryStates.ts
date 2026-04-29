import type {
  PasswordRecoveryMessagesState,
  PasswordRecoveryNewPasswordState,
  PasswordRecoveryRequestState,
} from '../types/prototype'

export const passwordRecoveryRequestStates: PasswordRecoveryRequestState[] = [
  {
    id: 'passwordRecoveryRequest.empty',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'empty',
    label: 'Campos vazios',
    identifier: {
      value: '',
      placeholder: 'Digite seu e-mail ou CPF',
    },
    selectedChannel: 'whatsapp',
  },
  {
    id: 'passwordRecoveryRequest.whatsapp',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'whatsapp',
    label: 'Canal WhatsApp',
    identifier: {
      value: 'admin@credliber.com.br',
    },
    selectedChannel: 'whatsapp',
  },
  {
    id: 'passwordRecoveryRequest.email',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'email',
    label: 'Canal E-mail',
    identifier: {
      value: 'admin@credliber.com.br',
    },
    selectedChannel: 'email',
  },
  {
    id: 'passwordRecoveryRequest.sms',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'sms',
    label: 'Canal SMS',
    identifier: {
      value: 'admin@credliber.com.br',
    },
    selectedChannel: 'sms',
  },
  {
    id: 'passwordRecoveryRequest.required',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'required',
    label: 'Campo não preenchido',
    identifier: {
      value: '',
      placeholder: 'Digite seu e-mail ou CPF',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    selectedChannel: 'whatsapp',
  },
  {
    id: 'passwordRecoveryRequest.blocked',
    screenId: 'passwordRecoveryRequest',
    stateKey: 'blocked',
    label: 'Acesso bloqueado',
    identifier: {
      value: 'admin@credliber.com.br',
    },
    selectedChannel: 'whatsapp',
  },
]

export const passwordRecoveryMessagesStates: PasswordRecoveryMessagesState[] = [
  {
    id: 'passwordRecoveryMessages.whatsapp',
    screenId: 'passwordRecoveryMessages',
    stateKey: 'whatsapp',
    label: 'WhatsApp',
    selectedChannel: 'whatsapp',
  },
  {
    id: 'passwordRecoveryMessages.email',
    screenId: 'passwordRecoveryMessages',
    stateKey: 'email',
    label: 'E-mail',
    selectedChannel: 'email',
  },
  {
    id: 'passwordRecoveryMessages.sms',
    screenId: 'passwordRecoveryMessages',
    stateKey: 'sms',
    label: 'SMS',
    selectedChannel: 'sms',
  },
]

export const passwordRecoveryNewPasswordStates: PasswordRecoveryNewPasswordState[] =
  [
    {
      id: 'passwordRecoveryNewPassword.empty',
      screenId: 'passwordRecoveryNewPassword',
      stateKey: 'empty',
      label: 'Campos vazios',
      password: {
        value: '',
        placeholder: 'Digite sua nova senha',
      },
      confirmPassword: {
        value: '',
        placeholder: 'Digite novamente',
      },
      passwordVisible: false,
      confirmPasswordVisible: false,
      checklist: [
        {
          id: 'characters',
          label: 'pelo menos 8 caracteres',
          status: 'neutral',
        },
        {
          id: 'uppercase',
          label: '1 letra maiúscula',
          status: 'neutral',
        },
        {
          id: 'lowercase',
          label: '1 letra minúscula',
          status: 'neutral',
        },
        {
          id: 'number',
          label: '1 número',
          status: 'neutral',
        },
        {
          id: 'special',
          label: '1 caractere especial',
          status: 'neutral',
        },
      ],
    },
    {
      id: 'passwordRecoveryNewPassword.required',
      screenId: 'passwordRecoveryNewPassword',
      stateKey: 'required',
      label: 'Campos não preenchidos',
      password: {
        value: '',
        placeholder: 'Digite sua nova senha',
        error: 'Preencha este campo.',
      },
      confirmPassword: {
        value: '',
        placeholder: 'Digite novamente',
        error: 'Preencha este campo.',
      },
      passwordVisible: false,
      confirmPasswordVisible: false,
      checklist: [
        {
          id: 'characters',
          label: 'pelo menos 8 caracteres',
          status: 'error',
        },
        {
          id: 'uppercase',
          label: '1 letra maiúscula',
          status: 'error',
        },
        {
          id: 'lowercase',
          label: '1 letra minúscula',
          status: 'error',
        },
        {
          id: 'number',
          label: '1 número',
          status: 'error',
        },
        {
          id: 'special',
          label: '1 caractere especial',
          status: 'error',
        },
      ],
    },
    {
      id: 'passwordRecoveryNewPassword.invalid',
      screenId: 'passwordRecoveryNewPassword',
      stateKey: 'invalid',
      label: 'Campos inválidos',
      password: {
        value: 'Senhaabc',
        error: 'A senha não atende aos critérios.',
        showAlertIcon: true,
      },
      confirmPassword: {
        value: 'Senha12',
        error: 'Os dados informados não coincidem.',
        showAlertIcon: true,
      },
      passwordVisible: false,
      confirmPasswordVisible: false,
      checklist: [
        {
          id: 'characters',
          label: 'pelo menos 8 caracteres',
          status: 'success',
        },
        {
          id: 'uppercase',
          label: '1 letra maiúscula',
          status: 'success',
        },
        {
          id: 'lowercase',
          label: '1 letra minúscula',
          status: 'success',
        },
        {
          id: 'number',
          label: '1 número',
          status: 'error',
        },
        {
          id: 'special',
          label: '1 caractere especial',
          status: 'error',
        },
      ],
    },
    {
      id: 'passwordRecoveryNewPassword.valid',
      screenId: 'passwordRecoveryNewPassword',
      stateKey: 'valid',
      label: 'Dados corretos',
      password: {
        value: 'Senha12!',
      },
      confirmPassword: {
        value: 'Senha12!',
      },
      passwordVisible: false,
      confirmPasswordVisible: false,
      checklist: [
        {
          id: 'characters',
          label: 'pelo menos 8 caracteres',
          status: 'success',
        },
        {
          id: 'uppercase',
          label: '1 letra maiúscula',
          status: 'success',
        },
        {
          id: 'lowercase',
          label: '1 letra minúscula',
          status: 'success',
        },
        {
          id: 'number',
          label: '1 número',
          status: 'success',
        },
        {
          id: 'special',
          label: '1 caractere especial',
          status: 'success',
        },
      ],
    },
  ]
