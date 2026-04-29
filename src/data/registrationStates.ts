import type {
  EmailConfirmedState,
  RegistrationStepOneState,
  RegistrationStepThreeState,
  RegistrationStepTwoState,
  RegistrationSuccessState,
} from '../types/prototype'

export const registrationStepOneStates: RegistrationStepOneState[] = [
  {
    id: 'registrationStepOne.empty',
    screenId: 'registrationStepOne',
    stateKey: 'empty',
    label: 'Campos vazios',
    cpf: {
      value: '',
      placeholder: '000.000.000-00',
    },
    fullName: {
      value: '',
      placeholder: 'Como está no seu documento',
    },
    birthDate: {
      value: '',
      placeholder: 'DD/MM/AAAA',
    },
    email: {
      value: '',
      placeholder: 'nome@exemplo.com',
    },
    whatsapp: {
      value: '',
      placeholder: '(00) 00000-0000',
    },
  },
  {
    id: 'registrationStepOne.required',
    screenId: 'registrationStepOne',
    stateKey: 'required',
    label: 'Campos não preenchidos',
    cpf: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    fullName: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    birthDate: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    email: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    whatsapp: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
  },
  {
    id: 'registrationStepOne.invalid',
    screenId: 'registrationStepOne',
    stateKey: 'invalid',
    label: 'Campos inválidos',
    cpf: {
      value: '123.465',
      error: 'Informe um dado válido.',
      showAlertIcon: true,
    },
    fullName: {
      value: 'Luan',
      error: 'Verifique o dado informado.',
      showAlertIcon: true,
    },
    birthDate: {
      value: '10/03/2005',
      error: 'Você deve ter 18 anos ou mais e informar uma data válida.',
      showAlertIcon: true,
    },
    email: {
      value: 'luan.theo@',
      error: 'Verifique o dado informado.',
      showAlertIcon: true,
    },
    whatsapp: {
      value: '(44) 99301',
      error: 'Informe um número válido.',
      showAlertIcon: true,
    },
  },
  {
    id: 'registrationStepOne.valid',
    screenId: 'registrationStepOne',
    stateKey: 'valid',
    label: 'Dados corretos',
    cpf: {
      value: '123.456.789-10',
    },
    fullName: {
      value: 'Luan Theo Santos',
      placeholder: 'Como está no seu documento',
    },
    birthDate: {
      value: '10/03/2001',
    },
    email: {
      value: 'luan.theo@gmail.com',
    },
    whatsapp: {
      value: '(44) 99301-3971',
    },
  },
]

export const registrationStepTwoStates: RegistrationStepTwoState[] = [
  {
    id: 'registrationStepTwo.empty',
    screenId: 'registrationStepTwo',
    stateKey: 'empty',
    label: 'Campos vazios',
    cep: {
      value: '',
      placeholder: '00000-000',
    },
    state: {
      value: '',
      placeholder: 'Selecione',
      selectLike: true,
    },
    city: {
      value: '',
      placeholder: 'Selecione',
      selectLike: true,
    },
    neighborhood: {
      value: '',
      placeholder: 'Seu bairro',
    },
    address: {
      value: '',
      placeholder: 'Rua, avenida, travessa...',
    },
    number: {
      value: '',
    },
    complement: {
      value: '',
      placeholder: 'Apto, bloco, casa...',
    },
  },
  {
    id: 'registrationStepTwo.required',
    screenId: 'registrationStepTwo',
    stateKey: 'required',
    label: 'Campos não preenchidos',
    cep: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    state: {
      value: '',
      error: 'Preencha este campo.',
      selectLike: true,
    },
    city: {
      value: '',
      error: 'Preencha este campo.',
      selectLike: true,
    },
    neighborhood: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    address: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    number: {
      value: '',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    complement: {
      value: '',
      placeholder: 'Apto, bloco, casa...',
    },
  },
  {
    id: 'registrationStepTwo.invalid',
    screenId: 'registrationStepTwo',
    stateKey: 'invalid',
    label: 'Campos inválidos',
    cep: {
      value: '81010',
      error: 'Informe um CEP válido.',
      showAlertIcon: true,
    },
    state: {
      value: 'Santa Catarina',
      error: 'Selecione uma opção.',
      selectLike: true,
    },
    city: {
      value: 'Florianópolis',
      error: 'Selecione uma opção.',
      selectLike: true,
    },
    neighborhood: {
      value: 'Lindóia',
      error: 'Verifique o dado informado.',
      showAlertIcon: true,
    },
    address: {
      value: 'Rua',
      error: 'Verifique o dado informado.',
      showAlertIcon: true,
    },
    number: {
      value: 'A',
      error: 'Preencha este campo.',
      showAlertIcon: true,
    },
    complement: {
      value: '',
      placeholder: 'Apto, bloco, casa...',
    },
  },
  {
    id: 'registrationStepTwo.valid',
    screenId: 'registrationStepTwo',
    stateKey: 'valid',
    label: 'Dados corretos',
    cep: {
      value: '81010-105',
    },
    state: {
      value: 'Paraná',
      selectLike: true,
    },
    city: {
      value: 'Curitiba',
      selectLike: true,
    },
    neighborhood: {
      value: 'Lindóia',
    },
    address: {
      value: 'Rua Jardinete João Barão',
    },
    number: {
      value: '249',
    },
    complement: {
      value: 'Casa',
    },
  },
]

export const registrationStepThreeStates: RegistrationStepThreeState[] = [
  {
    id: 'registrationStepThree.empty',
    screenId: 'registrationStepThree',
    stateKey: 'empty',
    label: 'Campos vazios',
    password: {
      value: '',
      placeholder: 'Digite sua senha',
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
    id: 'registrationStepThree.required',
    screenId: 'registrationStepThree',
    stateKey: 'required',
    label: 'Campos não preenchidos',
    password: {
      value: '',
      error: 'Preencha este campo.',
    },
    confirmPassword: {
      value: '',
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
    id: 'registrationStepThree.invalid',
    screenId: 'registrationStepThree',
    stateKey: 'invalid',
    label: 'Campos inválidos',
    password: {
      value: 'Senhaabc',
      error: 'A senha não atende aos critérios.',
    },
    confirmPassword: {
      value: 'Senha12',
      error: 'Os dados informados não coincidem.',
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
    id: 'registrationStepThree.valid',
    screenId: 'registrationStepThree',
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

export const registrationSuccessStates: RegistrationSuccessState[] = [
  {
    id: 'registrationSuccess.sent',
    screenId: 'registrationSuccess',
    stateKey: 'sent',
    label: 'E-mail enviado',
    countdown: '01:32',
  },
]

export const emailConfirmedStates: EmailConfirmedState[] = [
  {
    id: 'emailConfirmed.confirmed',
    screenId: 'emailConfirmed',
    stateKey: 'confirmed',
    label: 'Link confirmado',
  },
]
