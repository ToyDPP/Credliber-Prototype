import { Box, Divider, Stack, Typography } from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import type { ReactNode } from 'react'
import { getProfileNavigationSections } from '../../data/navigationRegistry'

export type ProfileSidebarItemId =
  | 'account'
  | 'bank'
  | 'settings'
  | 'security'
  | 'history'

interface ProfileSidebarProps {
  activeItem: ProfileSidebarItemId
  onSelectItem?: (itemId: ProfileSidebarItemId) => void
}

function getProfileIcon(icon: string): ReactNode {
  switch (icon) {
    case 'bank':
      return <AccountBalanceRoundedIcon fontSize="small" />
    case 'settings':
      return <TuneRoundedIcon fontSize="small" />
    case 'security':
      return <SecurityRoundedIcon fontSize="small" />
    case 'history':
      return <HistoryRoundedIcon fontSize="small" />
    case 'account':
    default:
      return <PersonOutlineRoundedIcon fontSize="small" />
  }
}

export function ProfileSidebar({
  activeItem,
  onSelectItem,
}: ProfileSidebarProps) {
  const sections = getProfileNavigationSections(activeItem)

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
            {section.items.map((item) => {
              const isActive = activeItem === item.id

              return (
                <Box
                  key={item.id}
                  onClick={() => {
                    if (isActive) {
                      return
                    }

                    onSelectItem?.(item.id as ProfileSidebarItemId)
                  }}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.35,
                    px: 2,
                    py: 1.3,
                    bgcolor: isActive ? 'rgba(242, 10, 91, 0.08)' : 'transparent',
                    cursor: isActive ? 'default' : 'pointer',
                    '&::before': isActive
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
                  <Box sx={{ color: '#20212A', mt: 0.2 }}>
                    {getProfileIcon(item.icon)}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: isActive ? 700 : 600,
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
              )
            })}
          </Stack>

          <Divider sx={{ borderColor: '#EEF2F6' }} />
        </Box>
      ))}
    </Box>
  )
}
