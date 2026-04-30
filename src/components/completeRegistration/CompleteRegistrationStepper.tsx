import { Box, Stack, Typography } from '@mui/material'

interface CompleteRegistrationStepperProps {
  currentStep: 1 | 2 | 3
}

const steps = [
  { id: 1, label: 'Documento de Identificação' },
  { id: 2, label: 'Dados Bancários' },
  { id: 3, label: 'Biometria Facial' },
] as const

export function CompleteRegistrationStepper({
  currentStep,
}: CompleteRegistrationStepperProps) {
  const progressWidth =
    currentStep === 1 ? '33.333%' : currentStep === 2 ? '66.666%' : '100%'

  return (
    <Box
      sx={{
        width: '100%',
        mt: { xs: 1, md: 1.2 },
        mb: { xs: 0.5, md: 0.8 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          alignItems: 'center',
          columnGap: { xs: 1, md: 2 },
          rowGap: 1,
          mb: 1.4,
        }}
      >
        {steps.map((step) => (
          <Stack
            key={step.id}
            direction="row"
            spacing={1}
            sx={{
              alignItems: 'center',
              minWidth: 0,
              justifyContent:
                step.id === 1
                  ? 'flex-start'
                  : step.id === 2
                    ? 'center'
                    : 'flex-end',
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '999px',
                display: 'grid',
                placeItems: 'center',
                bgcolor: '#F20A5B',
                color: '#FFFFFF',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              {step.id}
            </Box>
            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontSize: { sm: '0.92rem', md: '0.98rem' },
                fontWeight: 700,
                color: '#20212A',
                lineHeight: 1.25,
                textAlign:
                  step.id === 1
                    ? 'left'
                    : step.id === 2
                      ? 'center'
                      : 'right',
                whiteSpace: { md: 'nowrap' },
              }}
            >
              {step.label}
            </Typography>
          </Stack>
        ))}
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '2px',
          bgcolor: '#E8ECF2',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: progressWidth,
            height: '2px',
            bgcolor: '#F20A5B',
            transition: 'width 200ms ease',
          }}
        />
      </Box>
    </Box>
  )
}
