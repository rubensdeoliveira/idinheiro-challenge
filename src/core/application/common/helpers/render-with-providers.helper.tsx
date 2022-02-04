import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { DefaultTheme } from '@/core/application/common/styles'

export const RenderWithProviders = (Component: React.FC): void => {
  render(
    <ThemeProvider theme={DefaultTheme}>
      <Component />
    </ThemeProvider>,
  )
}
