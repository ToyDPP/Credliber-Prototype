import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import type { AppUserProfile } from '../../data/appNavigation'

interface UserProfileMenuProps {
  open: boolean
  user: AppUserProfile
  onLogout: () => void
}

export function UserProfileMenu({
  open,
  user,
  onLogout,
}: UserProfileMenuProps) {
  if (!open) {
    return null
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 62,
        right: 16,
        width: 280,
        bgcolor: '#FFFFFF',
        border: '1px solid #E8ECF2',
        borderRadius: '8px',
        boxShadow: '0 18px 34px rgba(15, 23, 42, 0.12)',
        overflow: 'hidden',
        zIndex: 30,
      }}
    >
      <Stack direction="row" spacing={1.4} sx={{ p: 2 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: 'rgba(242, 10, 91, 0.10)',
            color: '#F20A5B',
            fontSize: '0.9rem',
            fontWeight: 700,
          }}
        >
          {user.initials}
        </Avatar>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#20212A' }}>
            {user.fullName}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.92rem',
              color: '#64748B',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {user.email}
          </Typography>
        </Box>
      </Stack>

      <Divider />

      <Stack spacing={0} sx={{ py: 0.8 }}>
        <Stack
          direction="row"
          spacing={1.25}
          sx={{
            alignItems: 'center',
            px: 2,
            py: 1.35,
          }}
        >
          <PersonOutlineRoundedIcon sx={{ color: '#41536A', fontSize: 22 }} />
          <Box>
            <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#20212A' }}>
              Minha Conta
            </Typography>
            <Typography sx={{ fontSize: '0.92rem', color: '#64748B' }}>
              Editar perfil e dados pessoais
            </Typography>
          </Box>
        </Stack>

        <Divider />

        <Stack
          direction="row"
          spacing={1.25}
          onClick={onLogout}
          sx={{
            alignItems: 'center',
            px: 2,
            py: 1.45,
            color: '#EF4444',
            cursor: 'pointer',
          }}
        >
          <LogoutRoundedIcon sx={{ fontSize: 22 }} />
          <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
            Sair da conta
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}
