import { Box, Divider, Stack, Typography } from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import type { ReactNode } from 'react'

interface ProfileSidebarProps {
  hasUnsavedChanges?: boolean
  onAttemptNavigate?: () => void
}

interface ProfileSidebarItem {
  id: string
  label: string
  subtitle: string
  icon: ReactNode
  active?: boolean
}

interface ProfileSidebarSection {
  id: string
  label: string
  items: ProfileSidebarItem[]
}

const sections: ProfileSidebarSection[] = [
  {
    id: 'profile',
    label: 'PERFIL',
    items: [
      {
        id: 'account',
        label: 'Minha Conta',
        subtitle: 'Perfil e dados pessoais',
        icon: <PersonOutlineRoundedIcon fontSize="small" />,
        active: true,
      },
      {
        id: 'bank',
        label: 'Dados Bancarios',
        subtitle: 'Conta para recebimento',
        icon: <AccountBalanceRoundedIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 'system',
    label: 'SISTEMA',
    items: [
      {
        id: 'settings',
        label: 'Configuracoes',
        subtitle: 'Notificacoes e preferencias',
        icon: <TuneRoundedIcon fontSize="small" />,
      },
      {
        id: 'security',
        label: 'Seguranca',
        subtitle: 'Senha, 2FA e sessoes',
        icon: <SecurityRoundedIcon fontSize="small" />,
      },
    ],
  },
  {
    id: 'account-area',
    label: 'CONTA',
    items: [
      {
        id: 'history',
        label: 'Historico',
        subtitle: 'Atividades e logs',
        icon: <HistoryRoundedIcon fontSize="small" />,
      },
    ],
  },
] as const

export function ProfileSidebar({
  hasUnsavedChanges = false,
  onAttemptNavigate,
}: ProfileSidebarProps) {
  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: '#FFFFFF',
        borderRight: '1px solid #E8ECF2',
      }}
    >
      {sections.map((section) => (
        <Box key={section.id}>
          <Typography
            sx={{
              px: 2,
              py: 1.25,
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#41536A',
            }}
          >
            {section.label}
          </Typography>

          <Stack sx={{ pb: 1 }}>
            {section.items.map((item) => (
              <Box
                key={item.id}
                onClick={() => {
                  if (!item.active && hasUnsavedChanges) {
                    onAttemptNavigate?.()
                  }
                }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.35,
                  px: 2,
                  py: 1.3,
                  bgcolor: item.active ? 'rgba(242, 10, 91, 0.08)' : 'transparent',
                  cursor: !item.active && hasUnsavedChanges ? 'pointer' : 'default',
                  '&::before': item.active
                    ? {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 4,
                        backgroundColor: '#F20A5B',
                      }
                    : undefined,
                }}
              >
                <Box sx={{ color: '#20212A', mt: 0.2 }}>{item.icon}</Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: item.active ? 700 : 600,
                      color: '#20212A',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.92rem',
                      color: '#64748B',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          <Divider sx={{ borderColor: '#EEF2F6' }} />
        </Box>
      ))}
    </Box>
  )
}
