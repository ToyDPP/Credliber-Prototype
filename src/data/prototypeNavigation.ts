import {
  completeRegistrationBankStates,
  completeRegistrationBiometryStates,
  completeRegistrationDocumentStates,
  completeRegistrationFeedbackStates,
} from './completeRegistrationStates'
import { commercialDashboardStates } from './commercialDashboardStates'
import { profileBankStates } from './profileBankStates'
import { placeholderRouteStates, profilePlaceholderStates } from './placeholderStates'
import { loginStates } from './loginStates'
import { profileAccountStates } from './profileStates'
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
  ...completeRegistrationDocumentStates,
  ...completeRegistrationBankStates,
  ...completeRegistrationBiometryStates,
  ...completeRegistrationFeedbackStates,
  ...profileAccountStates,
  ...profileBankStates,
  ...placeholderRouteStates,
  ...profilePlaceholderStates,
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
    id: 'registration-step-1',
    label: 'Login _ Cadastro 1',
    children: registrationStepOneStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registration-step-2',
    label: 'Login _ Cadastro 2',
    children: registrationStepTwoStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registration-step-3',
    label: 'Login _ Cadastro 3',
    children: registrationStepThreeStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'registration-success',
    label: 'Login _ Confirmação de Cadastro',
    children: registrationSuccessStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'email-confirmed',
    label: 'Login _ Confirmação de E-mail',
    children: emailConfirmedStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'password-recovery-request',
    label: 'Login _ Recuperar Senha',
    children: passwordRecoveryRequestStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'password-recovery-messages',
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
    id: 'password-recovery-new-password',
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
    id: 'commercial-dashboard',
    label: 'Comercial _ Dashboard',
    children: commercialDashboardStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'complete-registration-document',
    label: 'Cadastro Completo Etapa 2 _ Parte 1 Documento',
    children: completeRegistrationDocumentStates.map(
      ({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      }),
    ),
  },
  {
    id: 'complete-registration-bank',
    label: 'Cadastro Completo Etapa 2 _ Parte 2 Banco',
    children: completeRegistrationBankStates.map(({ id, label, screenId }) => ({
      id,
      label,
      screenId,
    })),
  },
  {
    id: 'complete-registration-biometry',
    label: 'Cadastro Completo Etapa 2 _ Parte 3 Biometria',
    children: completeRegistrationBiometryStates.map(
      ({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      }),
    ),
  },
  {
    id: 'complete-registration-feedback',
    label: 'Cadastro Completo Etapa 2 _ Feedback',
    children: completeRegistrationFeedbackStates.map(
      ({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      }),
    ),
  },
  {
    id: 'profile-account',
    label: 'Perfil _ Minha Conta',
    children: profileAccountStates
      .filter(({ stateKey }) =>
        [
          'menuExpanded',
          'sidebarCollapsed',
          'fieldsOpen',
          'fieldsLocked',
          'biometryApproved',
          'biometryPending',
          'biometryRejected',
          'biometryRetry',
        ].includes(stateKey),
      )
      .map(({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      })),
  },
  {
    id: 'profile-photo',
    label: 'Perfil _ Minha Conta _ Foto',
    children: profileAccountStates
      .filter(({ stateKey }) =>
        ['changePhoto', 'photoChanged', 'removePhoto', 'removePhotoConfirm'].includes(
          stateKey,
        ),
      )
      .map(({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      })),
  },
  {
    id: 'profile-feedback',
    label: 'Perfil _ Minha Conta _ Feedbacks',
    children: profileAccountStates
      .filter(({ stateKey }) =>
        ['saved', 'invalid', 'saveError', 'unsavedConfirm'].includes(stateKey),
      )
      .map(({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      })),
  },
  {
    id: 'profile-bank',
    label: 'Perfil _ Dados Bancarios',
    children: profileBankStates
      .filter(({ stateKey }) =>
        [
          'new',
          'pending',
          'empty',
          'invalid',
          'valid',
          'saved',
          'invalidSave',
          'unsaved',
          'unsavedConfirm',
        ].includes(stateKey),
      )
      .map(({ id, label, screenId }) => ({
        id,
        label,
        screenId,
      })),
  },
]
