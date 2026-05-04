# CREDLIBER Prototype Map

## Stack
- React
- TypeScript
- Vite
- MUI
- Emotion

## Main Entry
- `src/main.tsx`
- `src/App.tsx`
- `src/components/PrototypeShell.tsx`

## Current Screen Families

### Public flows
- `login.*`
- `registrationStepOne.*`
- `registrationStepTwo.*`
- `registrationStepThree.*`
- `registrationSuccess.sent`
- `emailConfirmed.confirmed`
- `passwordRecoveryRequest.*`
- `passwordRecoveryMessages.*`
- `passwordRecoveryNewPassword.*`

### Logged area
- `commercialDashboard.*`
- `completeRegistrationDocument.*`
- `completeRegistrationBank.*`
- `completeRegistrationBiometry.*`
- `completeRegistrationFeedback.*`

### Profile
- `profileAccount.*`
- `profileBankData.*`
- `profilePlaceholder.*`

### Future placeholders
- `placeholderRoute.crm`
- `placeholderRoute.operations`
- `placeholderRoute.team`
- `placeholderRoute.supportMaterial`
- `placeholderRoute.transactions`
- `placeholderRoute.wallet`
- `placeholderRoute.reports`
- `placeholderRoute.campaigns`
- `placeholderRoute.newOperation`

## Main Components

### Shell / system
- `src/components/appShell/AppTopbar.tsx`
- `src/components/appShell/MainSidebar.tsx`
- `src/components/appShell/SidebarSection.tsx`
- `src/components/appShell/UserProfileMenu.tsx`
- `src/components/appShell/LoggedAppShell.tsx`
- `src/components/appShell/CompleteRegistrationBanner.tsx`
- `src/components/appShell/DashboardBreadcrumb.tsx`
- `src/components/appShell/FirstAccessModal.tsx`

### Common
- `src/components/common/PlaceholderPage.tsx`

### Profile
- `src/components/profile/ProfileSidebar.tsx`
- `src/components/profile/ProfileHeaderCard.tsx`
- `src/components/profile/ProfileSectionCard.tsx`
- `src/components/profile/ProfileTextField.tsx`
- `src/components/profile/ProfileBankDataCard.tsx`
- `src/components/profile/BiometryStatusCard.tsx`
- `src/components/profile/ProfileSaveButton.tsx`
- `src/components/profile/ProfileToast.tsx`
- `src/components/profile/ChangePhotoModal.tsx`
- `src/components/profile/RemovePhotoModal.tsx`
- `src/components/profile/UnsavedChangesModal.tsx`

### Complete registration modal
- `src/components/completeRegistration/CompleteRegistrationModal.tsx`
- `src/components/completeRegistration/CompleteRegistrationStepper.tsx`
- `src/components/completeRegistration/DocumentIdentificationStep.tsx`
- `src/components/completeRegistration/BankDataStep.tsx`
- `src/components/completeRegistration/FacialBiometryStep.tsx`
- `src/components/completeRegistration/CompleteRegistrationFeedback.tsx`
- `src/components/completeRegistration/MockQrCode.tsx`
- `src/components/completeRegistration/SecurityNote.tsx`

## Page Components
- `src/pages/commercial/CommercialDashboard.tsx`
- `src/pages/profile/ProfileAccountPage.tsx`
- `src/pages/profile/ProfileBankDataPage.tsx`
- `src/pages/profile/ProfilePlaceholderPage.tsx`
- `src/pages/PlaceholderRoutePage.tsx`

## Prototype Sidebar Groups
- Login
- Login _ Cadastro 1
- Login _ Cadastro 2
- Login _ Cadastro 3
- Login _ Confirmacao de Cadastro
- Login _ Confirmacao de E-mail
- Login _ Recuperar Senha
- Login _ Recuperar Senha _ Verifique suas mensagens
- Login _ Recuperar Senha _ Criar nova senha
- Comercial _ Dashboard
- Cadastro Completo Etapa 2 _ Parte 1 Documento
- Cadastro Completo Etapa 2 _ Parte 2 Banco
- Cadastro Completo Etapa 2 _ Parte 3 Biometria
- Cadastro Completo Etapa 2 _ Feedback
- Perfil _ Minha Conta
- Perfil _ Minha Conta _ Foto
- Perfil _ Minha Conta _ Feedbacks
- Perfil _ Dados Bancarios

## Central Navigation Registry
- `src/data/navigationRegistry.ts`

### Main sidebar items
- `dashboard` -> `commercialDashboard.expanded`
- `crm` -> `placeholderRoute.crm`
- `operations` -> `placeholderRoute.operations`
- `team` -> `placeholderRoute.team`
- `supportMaterial` -> `placeholderRoute.supportMaterial`
- `transactions` -> `placeholderRoute.transactions`
- `wallet` -> `placeholderRoute.wallet`
- `reports` -> `placeholderRoute.reports`
- `campaigns` -> `placeholderRoute.campaigns`

### Profile sidebar items
- `account` -> `profileAccount.biometryApproved`
- `bank` -> `profileBankData.pending`
- `settings` -> `profilePlaceholder.settings`
- `security` -> `profilePlaceholder.security`
- `history` -> `profilePlaceholder.history`

## Main Flows

### Login
- Valid login -> `commercialDashboard.firstAccess`
- Register button -> `registrationStepOne.empty`
- Forgot password -> `passwordRecoveryRequest.empty`

### Initial registration
- Step 1 valid -> Step 2 empty
- Step 2 valid -> Step 3 empty
- Step 3 valid -> registration success
- Success -> login
- Simulated email link -> email confirmed -> login

### Password recovery
- Request valid -> messages screen by channel
- Simulated link -> new password
- Valid new password -> success animation -> login

### Dashboard
- Logo -> dashboard
- New operation -> `placeholderRoute.newOperation`
- Notifications -> mock popover
- User menu -> account or logout
- Banner conclude registration -> complete registration modal step 1
- First access modal -> complete registration modal step 1

### Complete registration modal
- Document valid -> bank empty
- Bank valid -> biometry waiting
- Biometry waiting -> analyzing
- Biometry analyzing / success -> feedback confirmed
- Feedback -> dashboard

### Profile
- User menu -> `profileAccount.biometryApproved`
- Secondary profile sidebar swaps between account, bank and profile placeholders
- Unsaved changes in account or bank block navigation until confirmation

## Placeholder Screens Reserved
- CRM
- Operacoes
- Equipe
- Material de Apoio
- Transacoes
- Carteira
- Relatorios
- Campanhas
- Nova Operacao
- Configuracoes
- Seguranca
- Historico

## Known Pending Areas
- Real React Router is not used; navigation remains state-driven in `PrototypeShell`
- Settings, Security, History, CRM, Operations, Team, Support Material, Transactions, Wallet, Reports and Campaigns are placeholders only
- Notifications popover is mock data only
- New Operation is placeholder only
- No backend, persistence, upload or API validation
