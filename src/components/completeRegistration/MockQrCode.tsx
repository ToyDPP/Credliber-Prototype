import { Box } from '@mui/material'

const cells = [
  '111001100',
  '101001010',
  '111000110',
  '000110000',
  '011101101',
  '001101001',
  '111001101',
  '101001001',
  '111000111',
]

export function MockQrCode() {
  return (
    <Box
      sx={{
        width: 136,
        height: 136,
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gap: '3px',
        mx: 'auto',
      }}
    >
      {cells.join('').split('').map((cell, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: cell === '1' ? '#1E293B' : '#FFFFFF',
            border: cell === '1' ? 'none' : '1px solid #E2E8F0',
          }}
        />
      ))}
    </Box>
  )
}
