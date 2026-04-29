import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material'
import type { RecoveryChannel } from '../../types/prototype'

interface RecoveryChannelOptionsProps {
  value: RecoveryChannel
  onChange: (channel: RecoveryChannel) => void
}

const channelOptions: Array<{ value: RecoveryChannel; label: string }> = [
  { value: 'whatsapp', label: 'Receber por WhatsApp' },
  { value: 'email', label: 'Receber por e-mail' },
  { value: 'sms', label: 'Receber por SMS' },
]

export function RecoveryChannelOptions({
  value,
  onChange,
}: RecoveryChannelOptionsProps) {
  return (
    <RadioGroup
      value={value}
      onChange={(event) => onChange(event.target.value as RecoveryChannel)}
    >
      <Stack spacing={0.25}>
        {channelOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            sx={{
              m: 0,
              color: 'text.primary',
              '& .MuiTypography-root': {
                fontSize: '1rem',
              },
            }}
          />
        ))}
      </Stack>
    </RadioGroup>
  )
}
