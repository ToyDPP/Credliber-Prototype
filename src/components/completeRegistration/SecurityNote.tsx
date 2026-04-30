import { Stack, Typography } from '@mui/material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'

interface SecurityNoteProps {
  text: string
}

export function SecurityNote({ text }: SecurityNoteProps) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7A8AA6',
      }}
    >
      <GppGoodOutlinedIcon sx={{ fontSize: 22 }} />
      <Typography
        sx={{
          fontSize: '0.98rem',
          textAlign: 'center',
        }}
      >
        {text}
      </Typography>
    </Stack>
  )
}
