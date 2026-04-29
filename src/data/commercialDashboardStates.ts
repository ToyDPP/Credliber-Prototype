import type { CommercialDashboardState } from '../types/prototype'

export const commercialDashboardStates: CommercialDashboardState[] = [
  {
    id: 'commercialDashboard.expanded',
    screenId: 'commercialDashboard',
    stateKey: 'expanded',
    label: 'Sidebar expandida',
    collapsed: false,
    showFirstAccessModal: false,
    showProfileMenu: false,
    showBanner: true,
  },
  {
    id: 'commercialDashboard.firstAccess',
    screenId: 'commercialDashboard',
    stateKey: 'firstAccess',
    label: 'Primeiro acesso com pop-up',
    collapsed: false,
    showFirstAccessModal: true,
    showProfileMenu: false,
    showBanner: true,
  },
  {
    id: 'commercialDashboard.profileMenu',
    screenId: 'commercialDashboard',
    stateKey: 'profileMenu',
    label: 'Menu de perfil expandido',
    collapsed: false,
    showFirstAccessModal: false,
    showProfileMenu: true,
    showBanner: false,
  },
  {
    id: 'commercialDashboard.collapsed',
    screenId: 'commercialDashboard',
    stateKey: 'collapsed',
    label: 'Sidebar colapsada',
    collapsed: true,
    showFirstAccessModal: false,
    showProfileMenu: false,
    showBanner: true,
  },
]
