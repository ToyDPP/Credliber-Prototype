import { Avatar, Box, Button, Chip, Link, Stack, Typography } from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import type { AppUserProfile } from '../../data/appNavigation'

interface ProfileHeaderCardProps {
  user: AppUserProfile
  hasPhoto: boolean
  photoSrc?: string
  onChangePhoto: () => void
  onRemovePhoto: () => void
}

export function ProfileHeaderCard({
  user,
  hasPhoto,
  photoSrc,
  onChangePhoto,
  onRemovePhoto,
}: ProfileHeaderCardProps) {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        border: '1px solid #E8ECF2',
        borderRadius: '8px',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
        p: 2,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ justifyContent: 'space-between', alignItems: { md: 'center' } }}
      >
        <Stack direction="row" spacing={1.4} sx={{ alignItems: 'center' }}>
          <Avatar
            src={hasPhoto ? photoSrc : undefined}
            sx={{
              width: 94,
              height: 94,
              bgcolor: 'rgba(242, 10, 91, 0.10)',
              color: '#F20A5B',
              fontSize: '1.15rem',
              fontWeight: 500,
            }}
          >
            {!hasPhoto ? user.initials : undefined}
          </Avatar>
          <Box>
            <Typography
              sx={{ fontSize: '1.15rem', fontWeight: 700, color: '#20212A' }}
            >
              {user.name}
            </Typography>
            <Typography sx={{ fontSize: '0.98rem', color: '#53627A' }}>
              {user.email}
            </Typography>
            <Chip
              label={user.role}
              sx={{
                mt: 1,
                borderRadius: '999px',
                bgcolor: 'rgba(242, 10, 91, 0.08)',
                color: '#F20A5B',
                fontWeight: 500,
              }}
            />
          </Box>
        </Stack>

        <Stack spacing={1} sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
          <Button
            variant="outlined"
            startIcon={<CameraAltOutlinedIcon />}
            onClick={onChangePhoto}
            sx={{
              minHeight: 40,
              borderRadius: '8px',
              borderColor: '#74839D',
              color: '#41536A',
              px: 2.2,
            }}
          >
            Alterar foto
          </Button>
          {hasPhoto ? (
            <Link
              component="button"
              type="button"
              underline="none"
              onClick={onRemovePhoto}
              sx={{
                color: '#EF4444',
                fontSize: '0.98rem',
                fontWeight: 600,
              }}
            >
              Remover foto
            </Link>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  )
}
