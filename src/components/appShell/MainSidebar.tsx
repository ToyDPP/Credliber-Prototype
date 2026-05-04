import { Box, Stack } from '@mui/material'
import { getAppNavigationSections } from '../../data/navigationRegistry'
import type { AppNavigationItemId } from '../../types/prototype'
import { SidebarSection } from './SidebarSection'

interface MainSidebarProps {
  collapsed: boolean
  activeItemId: AppNavigationItemId
  onSelectItem: (itemId: AppNavigationItemId) => void
}

export function MainSidebar({
  collapsed,
  activeItemId,
  onSelectItem,
}: MainSidebarProps) {
  const sections = getAppNavigationSections(activeItemId)

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
        {sections.map((section) => (
          <SidebarSection
            key={section.id}
            section={section}
            collapsed={collapsed}
            onSelectItem={onSelectItem}
          />
        ))}
      </Stack>
    </Box>
  )
}
