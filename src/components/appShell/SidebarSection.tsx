import { Box, Divider, Stack, Typography } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded'
import type {
  AppNavigationItem,
  AppNavigationSection,
} from '../../data/appNavigation'

interface SidebarSectionProps {
  section: AppNavigationSection
  collapsed: boolean
}

function getSidebarIcon(icon: AppNavigationItem['icon']) {
  switch (icon) {
    case 'dashboard':
      return <GridViewRoundedIcon fontSize="small" />
    case 'crm':
      return <AssignmentRoundedIcon fontSize="small" />
    case 'operations':
      return <AccountBalanceRoundedIcon fontSize="small" />
    case 'team':
      return <Groups2RoundedIcon fontSize="small" />
    case 'folder':
      return <FolderRoundedIcon fontSize="small" />
    case 'transactions':
      return <SyncAltRoundedIcon fontSize="small" />
    case 'wallet':
      return <AccountBalanceWalletRoundedIcon fontSize="small" />
    case 'reportAlt':
      return <StarsRoundedIcon fontSize="small" />
    case 'report':
    default:
      return <InsertDriveFileRoundedIcon fontSize="small" />
  }
}

export function SidebarSection({
  section,
  collapsed,
}: SidebarSectionProps) {
  if (collapsed) {
    return (
      <Stack spacing={1.15} sx={{ px: 1.3, py: 1.5 }}>
        {section.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '4px',
                color: item.active ? '#F20A5B' : '#2A3547',
                bgcolor: item.active ? 'rgba(242, 10, 91, 0.10)' : 'transparent',
                '&::before': item.active
                  ? {
                      content: '""',
                      position: 'absolute',
                      left: -10,
                      top: 8,
                      bottom: 8,
                      width: 3,
                      borderRadius: '4px',
                      backgroundColor: '#F20A5B',
                    }
                  : undefined,
              }}
            >
              {getSidebarIcon(item.icon)}
            </Box>
          </Box>
        ))}
        <Divider sx={{ borderColor: '#E8ECF2', mt: 0.75 }} />
      </Stack>
    )
  }

  return (
    <Box sx={{ borderBottom: '1px solid #EEF2F6' }}>
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          pt: 1.45,
          pb: 1.15,
        }}
      >
        <Typography
          sx={{
            fontSize: '0.95rem',
            fontWeight: 700,
            letterSpacing: '0.01em',
            color: '#41536A',
          }}
        >
          {section.label}
        </Typography>
        <ExpandMoreRoundedIcon sx={{ color: '#41536A', fontSize: 22 }} />
      </Stack>

      <Stack sx={{ pb: 1.5 }}>
        {section.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              minHeight: 54,
              px: 2,
              color: item.active ? '#1F2937' : '#2A3547',
              bgcolor: item.active ? 'rgba(242, 10, 91, 0.08)' : 'transparent',
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
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                color: item.active ? '#1F2937' : '#2A3547',
              }}
            >
              {getSidebarIcon(item.icon)}
            </Box>
            <Typography
              sx={{
                fontSize: '1rem',
                fontWeight: item.active ? 700 : 500,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
