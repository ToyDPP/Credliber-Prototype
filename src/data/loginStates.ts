import type {
  LoginPrototypeState,
  PrototypeNavigationSection,
} from '../types/prototype'

export const loginStates: LoginPrototypeState[] = [
  {
    id: 'empty',
    screenId: 'login',
    label: 'Campos vazios',
    email: {
      value: '',
    },
    password: {
      value: '',
    },
    passwordVisible: false,
    rememberMe: false,
    loading: false,
  },
  {
    id: 'filled',
    screenId: 'login',
    label: 'Campos preenchidos',
    email: {
      value: 'admin@credliber.com.br',
    },
    password: {
      value: 'senhaforte',
    },
    passwordVisible: false,
    rememberMe: false,
    loading: false,
  },
  {
    id: 'required',
    screenId: 'login',
    label: 'Campos não preenchidos',
    email: {
      value: '',
      error: 'Informe seus dados de acesso.',
      showAlertIcon: true,
    },
    password: {
      value: '',
      error: 'Informe sua senha de acesso.',
    },
    passwordVisible: false,
    rememberMe: false,
    loading: false,
  },
  {
    id: 'invalid',
    screenId: 'login',
    label: 'Campos preenchidos errados',
    email: {
      value: 'admin@credliber',
      error: 'Verifique os dados informados.',
      showAlertIcon: true,
    },
    password: {
      value: 'senha1234',
      error: 'Verifique os dados informados.',
    },
    passwordVisible: false,
    rememberMe: false,
    loading: false,
  },
  {
    id: 'passwordVisible',
    screenId: 'login',
    label: 'Senha visível',
    email: {
      value: 'admin@credliber.com.br',
    },
    password: {
      value: 'senha1234',
    },
    passwordVisible: true,
    rememberMe: false,
    loading: false,
  },
  {
    id: 'rememberMe',
    screenId: 'login',
    label: 'Manter conectado',
    email: {
      value: 'admin@credliber.com.br',
    },
    password: {
      value: 'senha1234',
    },
    passwordVisible: false,
    rememberMe: true,
    loading: false,
  },
  {
    id: 'loading',
    screenId: 'login',
    label: 'Carregando',
    email: {
      value: 'admin@credliber.com.br',
    },
    password: {
      value: 'senha1234',
    },
    passwordVisible: false,
    rememberMe: true,
    loading: true,
  },
  {
    id: 'generalError',
    screenId: 'login',
    label: 'Erro geral',
    email: {
      value: 'admin@credliber.com.br',
    },
    password: {
      value: 'senha1234',
    },
    passwordVisible: false,
    rememberMe: false,
    loading: false,
    generalError:
      'Não foi possível acessar sua conta. Verifique os dados e tente novamente.',
  },
]

export const prototypeNavigation: PrototypeNavigationSection[] = [
  {
    id: 'login',
    label: 'Login',
    items: loginStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
]
