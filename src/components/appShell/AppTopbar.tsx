import { Avatar, Badge, Box, Button, Stack, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded'
import logoCredliberDark from '../../assets/brand/logo-credliber-dark.svg'
import simboloCredliber from '../../assets/brand/simbolo-credliber.svg'
import type { AppUserProfile } from '../../data/appNavigation'

interface AppTopbarProps {
  collapsed: boolean
  user: AppUserProfile
  onLogoClick: () => void
  onToggleSidebar: () => void
  onNewOperation: () => void
  onToggleNotifications: () => void
  onToggleProfileMenu: () => void
}

export function AppTopbar({
  collapsed,
  user,
  onLogoClick,
  onToggleSidebar,
  onNewOperation,
  onToggleNotifications,
  onToggleProfileMenu,
}: AppTopbarProps) {
  return (
    <Box
      sx={{
        height: 56,
        display: 'flex',
        alignItems: 'stretch',
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid #E8ECF2',
      }}
    >
      <Box
        onClick={onLogoClick}
        sx={{
          width: collapsed ? 72 : 240,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          px: collapsed ? 0 : 2.2,
          borderRight: '1px solid #E8ECF2',
          transition: 'width 220ms ease',
          cursor: 'pointer',
        }}
      >
        <Box
          component="img"
          src={collapsed ? simboloCredliber : logoCredliberDark}
          alt="Credliber"
          sx={{
            width: collapsed ? 28 : 132,
            height: 'auto',
            display: 'block',
          }}
        />
      </Box>

      <Stack
        direction="row"
        sx={{
          flex: 1,
          minWidth: 0,
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          gap: 2,
        }}
      >
        <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
          <Box
            onClick={onToggleSidebar}
            sx={{
              width: 32,
              height: 32,
              display: 'grid',
              placeItems: 'center',
              color: '#20212A',
              cursor: 'pointer',
            }}
          >
            <ViewSidebarRoundedIcon />
          </Box>

          <Button
            color="inherit"
            startIcon={<AddRoundedIcon />}
            onClick={onNewOperation}
            sx={{
              minHeight: 40,
              px: 1,
              borderRadius: '8px',
              color: '#20212A',
              fontSize: '0.98rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'rgba(15, 23, 42, 0.04)',
              },
            }}
          >
            Nova Operacao
          </Button>
        </Stack>

        <Stack direction="row" spacing={1.6} sx={{ alignItems: 'center' }}>
          <Box
            onClick={onToggleNotifications}
            sx={{
              width: 32,
              height: 32,
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Badge
              badgeContent={user.notifications}
              color="primary"
              sx={{
                '& .MuiBadge-badge': {
                  minWidth: 18,
                  height: 18,
                  px: 0.5,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  top: 3,
                  right: -1,
                },
              }}
            >
              <NotificationsNoneRoundedIcon sx={{ color: '#20212A' }} />
            </Badge>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            onClick={onToggleProfileMenu}
            sx={{ alignItems: 'center', cursor: 'pointer' }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: 'rgba(242, 10, 91, 0.10)',
                color: '#F20A5B',
                fontSize: '0.88rem',
                fontWeight: 700,
              }}
            >
              {user.initials}
            </Avatar>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#20212A',
                  lineHeight: 1.1,
                }}
              >
                {user.name}
              </Typography>
              <Typography
                sx={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.2 }}
              >
                {user.role}
              </Typography>
            </Box>

            <KeyboardArrowDownRoundedIcon
              sx={{ color: '#41536A', fontSize: 22 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
