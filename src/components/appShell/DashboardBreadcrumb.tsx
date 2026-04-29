import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded'

export function DashboardBreadcrumb() {
  const actionButtonSx = {
    minWidth: 0,
    minHeight: 40,
    px: 1.6,
    borderRadius: '8px',
    borderColor: '#E8ECF2',
    color: '#41536A',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
  }

  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Stack direction="row" spacing={1.1} sx={{ alignItems: 'center' }}>
          <HomeRoundedIcon sx={{ color: '#64748B', fontSize: 22 }} />
          <Typography sx={{ color: '#94A3B8', fontWeight: 600 }}>{'>'}</Typography>
          <Typography sx={{ color: '#41536A', fontSize: '1rem' }}>
            Comercial
          </Typography>
          <Typography sx={{ color: '#94A3B8', fontWeight: 600 }}>{'>'}</Typography>
          <Typography sx={{ color: '#20212A', fontSize: '1rem', fontWeight: 700 }}>
            Dashboard
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<TuneRoundedIcon />}
            sx={actionButtonSx}
          >
            Filtro
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...actionButtonSx,
              px: 1.1,
              width: 40,
            }}
          >
            <KeyboardArrowDownRoundedIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              ...actionButtonSx,
              px: 1.1,
              width: 40,
            }}
          >
            <OpenInFullRoundedIcon />
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ mt: 2, borderColor: '#EEF2F6' }} />
    </Box>
  )
}
