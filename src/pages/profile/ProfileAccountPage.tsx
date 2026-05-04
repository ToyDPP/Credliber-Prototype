import { useState } from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { appUserProfile } from '../../data/appNavigation'
import {
  getAppNavigationTarget,
  getProfileNavigationTarget,
} from '../../data/navigationRegistry'
import { mockProfilePhoto } from '../../data/profileStates'
import type {
  AppNavigationItemId,
  ProfileAccountState,
  PrototypeViewId,
} from '../../types/prototype'
import { LoggedAppShell } from '../../components/appShell/LoggedAppShell'
import { BiometryStatusCard } from '../../components/profile/BiometryStatusCard'
import { ChangePhotoModal } from '../../components/profile/ChangePhotoModal'
import { ProfileHeaderCard } from '../../components/profile/ProfileHeaderCard'
import { ProfileSaveButton } from '../../components/profile/ProfileSaveButton'
import { ProfileSectionCard } from '../../components/profile/ProfileSectionCard'
import {
  ProfileSidebar,
  type ProfileSidebarItemId,
} from '../../components/profile/ProfileSidebar'
import { ProfileTextField } from '../../components/profile/ProfileTextField'
import { ProfileToast } from '../../components/profile/ProfileToast'
import { RemovePhotoModal } from '../../components/profile/RemovePhotoModal'
import { UnsavedChangesModal } from '../../components/profile/UnsavedChangesModal'

interface ProfileAccountPageProps {
  state: ProfileAccountState
  onBackToLogin: () => void
  onGoToDashboard: () => void
  onNavigate: (viewId: PrototypeViewId) => void
}

type PendingDestination = PrototypeViewId | 'dashboard'

export function ProfileAccountPage({
  state,
  onBackToLogin,
  onGoToDashboard,
  onNavigate,
}: ProfileAccountPageProps) {
  const [collapsed, setCollapsed] = useState(state.collapsed)
  const [showProfileMenu, setShowProfileMenu] = useState(state.showProfileMenu)
  const [pendingDestination, setPendingDestination] =
    useState<PendingDestination | null>(null)

  const requestNavigation = (destination: PendingDestination) => {
    if (state.hasUnsavedChanges && !state.showUnsavedChangesModal) {
      setPendingDestination(destination)
      onNavigate('profileAccount.unsavedConfirm')
      return
    }

    if (destination === 'dashboard') {
      onGoToDashboard()
      return
    }

    if (destination === 'login.empty') {
      onBackToLogin()
      return
    }

    onNavigate(destination)
  }

  const handleSaveChanges = () => {
    if (state.stateKey === 'invalid') {
      onNavigate('profileAccount.invalid')
      return
    }

    if (state.stateKey === 'saveError') {
      onNavigate('profileAccount.saveError')
      return
    }

    onNavigate('profileAccount.saved')
  }

  const handleSidebarSelect = (itemId: ProfileSidebarItemId) => {
    requestNavigation(getProfileNavigationTarget(itemId))
  }

  const handleMainNavigationSelect = (itemId: AppNavigationItemId) => {
    requestNavigation(getAppNavigationTarget(itemId))
  }

  const handleCloseUnsavedModal = () => {
    setPendingDestination(null)
    onNavigate('profileAccount.fieldsOpen')
  }

  const handleConfirmUnsavedExit = () => {
    const destination = pendingDestination
    setPendingDestination(null)

    if (!destination || destination === 'dashboard') {
      onGoToDashboard()
      return
    }

    if (destination === 'login.empty') {
      onBackToLogin()
      return
    }

    onNavigate(destination)
  }

  return (
    <LoggedAppShell
      collapsed={collapsed}
      activeMainItemId="dashboard"
      showFirstAccessModal={false}
      showProfileMenu={showProfileMenu}
      onLogoClick={() => requestNavigation('dashboard')}
      onToggleSidebar={() => setCollapsed((current) => !current)}
      onToggleProfileMenu={() => setShowProfileMenu((current) => !current)}
      onCloseProfileMenu={() => setShowProfileMenu(false)}
      onMainNavigationSelect={handleMainNavigationSelect}
      onOpenNewOperation={() => requestNavigation('placeholderRoute.newOperation')}
      onCloseFirstAccessModal={() => undefined}
      onConcludeRegistration={() => undefined}
      onBackToLogin={() => requestNavigation('login.empty')}
      onOpenMyAccount={() => requestNavigation('profileAccount.biometryApproved')}
    >
      <Box sx={{ display: 'flex', minHeight: '100%' }}>
        <ProfileSidebar activeItem="account" onSelectItem={handleSidebarSelect} />

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            px: { xs: 2, md: 3, lg: 4 },
            pb: 12,
            pt: 2,
          }}
        >
          {state.toast ? <ProfileToast toast={state.toast} /> : null}

          <Stack spacing={2.2}>
            <ProfileHeaderCard
              user={appUserProfile}
              hasPhoto={state.hasPhoto}
              photoSrc={mockProfilePhoto}
              onChangePhoto={() => onNavigate('profileAccount.changePhoto')}
              onRemovePhoto={() => onNavigate('profileAccount.removePhotoConfirm')}
            />

            <ProfileSectionCard title="Informacoes Pessoais">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <ProfileTextField label="Nome completo" field={state.fullName} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="CPF" field={state.cpf} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField
                    label="Data de nascimento"
                    field={state.birthDate}
                  />
                </Grid>
              </Grid>
            </ProfileSectionCard>

            <ProfileSectionCard title="Contato">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="E-mail" field={state.email} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="WhatsApp" field={state.whatsapp} />
                </Grid>
              </Grid>
            </ProfileSectionCard>

            <ProfileSectionCard title="Endereco">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 2 }}>
                  <ProfileTextField label="CEP" field={state.cep} />
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <ProfileTextField label="Estado (UF)" field={state.state} />
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <ProfileTextField label="Cidade" field={state.city} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="Bairro" field={state.neighborhood} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="Endereco" field={state.address} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="Numero" field={state.number} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <ProfileTextField label="Complemento" field={state.complement} />
                </Grid>
              </Grid>
            </ProfileSectionCard>

            <ProfileSectionCard title="Documento de Identificacao">
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="Tipo de documento"
                    field={state.documentType}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="Numero do documento"
                    field={state.documentNumber}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="Orgao emissor"
                    field={state.issuingAgency}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="UF de emissao"
                    field={state.issuingState}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="Data de emissao"
                    field={state.issueDate}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <ProfileTextField
                    label="Data de validade"
                    field={state.expiryDate}
                  />
                </Grid>
              </Grid>
            </ProfileSectionCard>

            <ProfileSectionCard title="Biometria Facial">
              <BiometryStatusCard
                status={state.biometryStatus}
                onRetry={() => onNavigate('profileAccount.biometryRetry')}
              />
            </ProfileSectionCard>
          </Stack>

          <ProfileSaveButton onClick={handleSaveChanges} />
        </Box>
      </Box>

      <ChangePhotoModal
        open={state.showChangePhotoModal}
        onClose={() => onNavigate('profileAccount.biometryApproved')}
        onSelectPhoto={() => onNavigate('profileAccount.photoChanged')}
        onSave={() => onNavigate('profileAccount.photoChanged')}
      />

      <RemovePhotoModal
        open={state.showRemovePhotoModal}
        onClose={() => onNavigate('profileAccount.removePhoto')}
        onConfirm={() => onNavigate('profileAccount.fieldsOpen')}
      />

      <UnsavedChangesModal
        open={state.showUnsavedChangesModal}
        onClose={handleCloseUnsavedModal}
        onConfirmExit={handleConfirmUnsavedExit}
      />
    </LoggedAppShell>
  )
}
