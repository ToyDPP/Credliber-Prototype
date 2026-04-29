import { Box, Button, Stack, Typography } from '@mui/material'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

interface CompleteRegistrationBannerProps {
  onClick: () => void
}

export function CompleteRegistrationBanner({
  onClick,
}: CompleteRegistrationBannerProps) {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing={2}
      sx={{
        alignItems: { xs: 'stretch', lg: 'center' },
        justifyContent: 'space-between',
        px: { xs: 2, sm: 2.5, lg: 3 },
        py: 2.1,
        borderRadius: '8px',
        border: '1px solid #E5A22C',
        backgroundColor: '#FFF8EA',
      }}
    >
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
        <WarningAmberRoundedIcon sx={{ color: '#B7791F', fontSize: 26, mt: 0.1 }} />
        <Box>
          <Typography
            sx={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#A16207',
              mb: 0.25,
            }}
          >
            Conclua seu cadastro
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#A16207' }}>
            Para efetuar o saque das suas comissões, conclua seu cadastro e
            finalize a validação das informações necessárias.
          </Typography>
        </Box>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardRoundedIcon />}
        onClick={onClick}
        sx={{
          minHeight: 46,
          px: 2.4,
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          alignSelf: { xs: 'flex-start', lg: 'center' },
        }}
      >
        Concluir Cadastro
      </Button>
    </Stack>
  )
}
