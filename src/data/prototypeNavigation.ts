import { commercialDashboardStates } from './commercialDashboardStates'
import { loginStates } from './loginStates'
import {
  passwordRecoveryMessagesStates,
  passwordRecoveryNewPasswordStates,
  passwordRecoveryRequestStates,
} from './passwordRecoveryStates'
import {
  emailConfirmedStates,
  registrationStepOneStates,
  registrationStepThreeStates,
  registrationStepTwoStates,
  registrationSuccessStates,
} from './registrationStates'
import type {
  PrototypeNavigationGroup,
  PrototypeScreenState,
  PrototypeViewId,
} from '../types/prototype'

export const prototypeStates: PrototypeScreenState[] = [
  ...loginStates,
  ...registrationStepOneStates,
  ...registrationStepTwoStates,
  ...registrationStepThreeStates,
  ...registrationSuccessStates,
  ...emailConfirmedStates,
  ...passwordRecoveryRequestStates,
  ...passwordRecoveryMessagesStates,
  ...passwordRecoveryNewPasswordStates,
  ...commercialDashboardStates,
]

export const prototypeStateMap = Object.fromEntries(
  prototypeStates.map((state) => [state.id, state]),
) as Record<PrototypeViewId, PrototypeScreenState>

export const prototypeNavigation: PrototypeNavigationGroup[] = [
  {
    id: 'login',
    label: 'Login',
    children: loginStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registrationStepOne',
    label: 'Login _ Cadastro 1',
    children: registrationStepOneStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registrationStepTwo',
    label: 'Login _ Cadastro 2',
    children: registrationStepTwoStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registrationStepThree',
    label: 'Login _ Cadastro 3',
    children: registrationStepThreeStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registrationSuccess',
    label: 'Login _ Confirmação de Cadastro',
    children: registrationSuccessStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'emailConfirmed',
    label: 'Login _ Confirmação de E-mail',
    children: emailConfirmedStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'passwordRecoveryRequest',
    label: 'Login _ Recuperar Senha',
    children: passwordRecoveryRequestStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'passwordRecoveryMessages',
    label: 'Login _ Recuperar Senha _ Verifique suas mensagens',
    children: passwordRecoveryMessagesStates.map(
      ({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      }),
    ),
  },
  {
    id: 'passwordRecoveryNewPassword',
    label: 'Login _ Recuperar Senha _ Criar nova senha',
    children: passwordRecoveryNewPasswordStates.map(
      ({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      }),
    ),
  },
  {
    id: 'commercialDashboard',
    label: 'Comercial _ Dashboard',
    children: commercialDashboardStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
]
