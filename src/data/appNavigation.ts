export interface AppUserProfile {
  name: string
  fullName: string
  role: string
  email: string
  initials: string
  notifications: number
}

export interface AppNavigationItem {
  id: string
  label: string
  icon: string
  active?: boolean
}

export interface AppNavigationSection {
  id: string
  label: string
  items: AppNavigationItem[]
}

export const appUserProfile: AppUserProfile = {
  name: 'Matheus G.',
  fullName: 'Matheus Gonçalves',
  role: 'Vendedor',
  email: 'matheus@credliber.com.br',
  initials: 'MG',
  notifications: 3,
}

export const appNavigationSections: AppNavigationSection[] = [
  {
    id: 'commercial',
    label: 'COMERCIAL',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', active: true },
      { id: 'crm', label: 'CRM', icon: 'crm' },
      { id: 'operations', label: 'Operações', icon: 'operations' },
      { id: 'team', label: 'Equipe', icon: 'team' },
      { id: 'supportMaterial', label: 'Material de Apoio', icon: 'folder' },
    ],
  },
  {
    id: 'financial',
    label: 'FINANCEIRO',
    items: [
      { id: 'transactions', label: 'Transações', icon: 'transactions' },
      { id: 'wallet', label: 'Carteira', icon: 'wallet' },
    ],
  },
  {
    id: 'reports',
    label: 'RELATÓRIO',
    items: [
      { id: 'reportPlaceholderOne', label: '------', icon: 'report' },
      { id: 'reportPlaceholderTwo', label: '------', icon: 'reportAlt' },
    ],
  },
]
