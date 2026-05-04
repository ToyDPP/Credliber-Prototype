import type {
  AppNavigationItemId,
  ProfileNavigationItemId,
  ProfilePlaceholderViewId,
  PrototypeViewId,
} from '../types/prototype'

export interface AppNavigationRegistryItem {
  id: AppNavigationItemId
  label: string
  section: string
  icon: string
  implemented: boolean
  targetViewId: PrototypeViewId
  description: string
}

export interface ProfileNavigationRegistryItem {
  id: ProfileNavigationItemId
  label: string
  section: string
  description: string
  icon: string
  implemented: boolean
  targetViewId?: PrototypeViewId
}

export interface NavigationSidebarItem {
  id: string
  label: string
  subtitle?: string
  icon: string
  active: boolean
}

export interface NavigationSidebarSection {
  id: string
  label: string
  items: NavigationSidebarItem[]
}

export const appNavigationItems: AppNavigationRegistryItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    section: 'COMERCIAL',
    icon: 'dashboard',
    implemented: true,
    targetViewId: 'commercialDashboard.expanded',
    description: 'Visao geral comercial',
  },
  {
    id: 'crm',
    label: 'CRM',
    section: 'COMERCIAL',
    icon: 'crm',
    implemented: false,
    targetViewId: 'placeholderRoute.crm',
    description: 'A tela de CRM sera adicionada em breve ao prototipo.',
  },
  {
    id: 'operations',
    label: 'Operacoes',
    section: 'COMERCIAL',
    icon: 'operations',
    implemented: false,
    targetViewId: 'placeholderRoute.operations',
    description: 'A tela de Operacoes sera adicionada em breve ao prototipo.',
  },
  {
    id: 'team',
    label: 'Equipe',
    section: 'COMERCIAL',
    icon: 'team',
    implemented: false,
    targetViewId: 'placeholderRoute.team',
    description: 'A tela de Equipe sera adicionada em breve ao prototipo.',
  },
  {
    id: 'supportMaterial',
    label: 'Material de Apoio',
    section: 'COMERCIAL',
    icon: 'folder',
    implemented: false,
    targetViewId: 'placeholderRoute.supportMaterial',
    description:
      'A area de Material de Apoio sera adicionada em breve ao prototipo.',
  },
  {
    id: 'transactions',
    label: 'Transacoes',
    section: 'FINANCEIRO',
    icon: 'transactions',
    implemented: false,
    targetViewId: 'placeholderRoute.transactions',
    description:
      'A tela de Transacoes sera adicionada em breve ao prototipo.',
  },
  {
    id: 'wallet',
    label: 'Carteira',
    section: 'FINANCEIRO',
    icon: 'wallet',
    implemented: false,
    targetViewId: 'placeholderRoute.wallet',
    description: 'A tela de Carteira sera adicionada em breve ao prototipo.',
  },
  {
    id: 'reports',
    label: '------',
    section: 'RELATORIO',
    icon: 'report',
    implemented: false,
    targetViewId: 'placeholderRoute.reports',
    description: 'A area de Relatorios sera adicionada em breve ao prototipo.',
  },
  {
    id: 'campaigns',
    label: '------',
    section: 'RELATORIO',
    icon: 'reportAlt',
    implemented: false,
    targetViewId: 'placeholderRoute.campaigns',
    description: 'A area futura sera adicionada em breve ao prototipo.',
  },
]

export const profileNavigationItems: ProfileNavigationRegistryItem[] = [
  {
    id: 'account',
    label: 'Minha Conta',
    section: 'PERFIL',
    description: 'Perfil e dados pessoais',
    icon: 'account',
    implemented: true,
    targetViewId: 'profileAccount.biometryApproved',
  },
  {
    id: 'bank',
    label: 'Dados Bancarios',
    section: 'PERFIL',
    description: 'Conta para recebimento',
    icon: 'bank',
    implemented: true,
    targetViewId: 'profileBankData.pending',
  },
  {
    id: 'settings',
    label: 'Configuracoes',
    section: 'SISTEMA',
    description: 'Notificacoes e preferencias',
    icon: 'settings',
    implemented: false,
    targetViewId: 'profilePlaceholder.settings',
  },
  {
    id: 'security',
    label: 'Seguranca',
    section: 'SISTEMA',
    description: 'Senha, 2FA e sessoes',
    icon: 'security',
    implemented: false,
    targetViewId: 'profilePlaceholder.security',
  },
  {
    id: 'history',
    label: 'Historico',
    section: 'CONTA',
    description: 'Atividades e logs',
    icon: 'history',
    implemented: false,
    targetViewId: 'profilePlaceholder.history',
  },
]

export function getAppNavigationTarget(
  itemId: AppNavigationItemId,
): PrototypeViewId {
  return (
    appNavigationItems.find((item) => item.id === itemId)?.targetViewId ??
    'commercialDashboard.expanded'
  )
}

export function getProfileNavigationTarget(
  itemId: ProfileNavigationItemId,
): PrototypeViewId {
  return (
    profileNavigationItems.find((item) => item.id === itemId)?.targetViewId ??
    'profileAccount.biometryApproved'
  )
}

export function getProfilePlaceholderTargets(): ProfilePlaceholderViewId[] {
  return profileNavigationItems
    .filter((item) => !item.implemented)
    .map((item) => item.targetViewId as ProfilePlaceholderViewId)
}

export function getAppNavigationSections(
  activeItemId: AppNavigationItemId,
): NavigationSidebarSection[] {
  const sections = ['COMERCIAL', 'FINANCEIRO', 'RELATORIO']

  return sections.map((section) => ({
    id: section.toLowerCase(),
    label: section,
    items: appNavigationItems
      .filter((item) => item.section === section)
      .map((item) => ({
        id: item.id,
        label: item.label,
        icon: item.icon,
        active: item.id === activeItemId,
      })),
  }))
}

export function getProfileNavigationSections(
  activeItemId: ProfileNavigationItemId,
): NavigationSidebarSection[] {
  const sections = ['PERFIL', 'SISTEMA', 'CONTA']

  return sections.map((section) => ({
    id: section.toLowerCase(),
    label: section,
    items: profileNavigationItems
      .filter((item) => item.section === section)
      .map((item) => ({
        id: item.id,
        label: item.label,
        subtitle: item.description,
        icon: item.icon,
        active: item.id === activeItemId,
      })),
  }))
}
