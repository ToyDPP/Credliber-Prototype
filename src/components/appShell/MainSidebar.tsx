import { Box, Stack } from '@mui/material'
import { appNavigationSections } from '../../data/appNavigation'
import { SidebarSection } from './SidebarSection'

interface MainSidebarProps {
  collapsed: boolean
}

export function MainSidebar({ collapsed }: MainSidebarProps) {
  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? 72 : 240,
        flexShrink: 0,
        bgcolor: '#FFFFFF',
        borderRight: '1px solid #E8ECF2',
        transition: 'width 220ms ease',
        overflow: 'hidden',
      }}
    >
      <Stack sx={{ height: '100%' }}>
        {appNavigationSections.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            collapsed={collapsed}
          />
        ))}
      </Stack>
    </Box>
  )
}
