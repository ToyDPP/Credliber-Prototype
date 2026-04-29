import { useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { loginStates, prototypeNavigation } from '../data/loginStates'
import type { LoginPrototypeStateId } from '../types/prototype'
import { LoginScreen } from './LoginScreen'
import { PrototypeSidebar } from './PrototypeSidebar'

export function PrototypeShell() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedStateId, setSelectedStateId] = useState<LoginPrototypeStateId>(
    loginStates[0].id,
  )
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const currentState =
    loginStates.find((state) => state.id === selectedStateId) ?? loginStates[0]

  const renderScreen = () => {
    switch (currentState.screenId) {
      case 'login':
        return <LoginScreen key={currentState.id} state={currentState} />
      default:
        return null
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <PrototypeSidebar
        sections={prototypeNavigation}
        selectedStateId={selectedStateId}
        onSelect={setSelectedStateId}
      />

      <Box component="main" sx={{ flex: 1, minWidth: 0, position: 'relative' }}>
        {isMobile ? (
          <>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: 'fixed',
                top: 16,
                left: 16,
                zIndex: 1200,
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                onClick={() => setMobileSidebarOpen(true)}
                startIcon={<MenuRoundedIcon />}
                sx={{
                  minHeight: 44,
                  borderRadius: 999,
                  px: 2.1,
                  color: 'text.primary',
                  bgcolor: 'rgba(255,255,255,0.94)',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.14)',
                  '&:hover': {
                    bgcolor: '#FFFFFF',
                  },
                }}
              >
                Estados
              </Button>
              <Chip
                label={currentState.label}
                sx={{
                  maxWidth: 180,
                  bgcolor: 'rgba(255,255,255,0.88)',
                  color: 'text.primary',
                  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.1)',
                  '& .MuiChip-label': {
                    px: 1.6,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
              />
            </Stack>

            <PrototypeSidebar
              mobile
              open={mobileSidebarOpen}
              onClose={() => setMobileSidebarOpen(false)}
              sections={prototypeNavigation}
              selectedStateId={selectedStateId}
              onSelect={setSelectedStateId}
            />
          </>
        ) : null}

        {renderScreen()}
      </Box>
    </Box>
  )
}
