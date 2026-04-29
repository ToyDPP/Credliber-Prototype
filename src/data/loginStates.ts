import type { LoginPrototypeState } from '../types/prototype'

export const loginStates: LoginPrototypeState[] = [
  {
    id: 'login.empty',
    screenId: 'login',
    stateKey: 'empty',
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
    id: 'login.filled',
    screenId: 'login',
    stateKey: 'filled',
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
    id: 'login.required',
    screenId: 'login',
    stateKey: 'required',
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
    id: 'login.invalid',
    screenId: 'login',
    stateKey: 'invalid',
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
    id: 'login.passwordVisible',
    screenId: 'login',
    stateKey: 'passwordVisible',
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
    id: 'login.rememberMe',
    screenId: 'login',
    stateKey: 'rememberMe',
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
    id: 'login.loading',
    screenId: 'login',
    stateKey: 'loading',
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
    id: 'login.generalError',
    screenId: 'login',
    stateKey: 'generalError',
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
