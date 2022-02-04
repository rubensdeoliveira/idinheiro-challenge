import { screen } from '@testing-library/react'

import { Input } from '@/core/application/common/components'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'

const makeSut = async (): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => <Input />)

describe('Input', () => {
  describe('Behaviour', () => {
    test('Should render input', async () => {
      await makeSut()
      screen.getByTestId(`input-container`)
    })
  })

  describe('Styles', () => {
    test('Should render input type text styles if input type is not provided', async () => {
      const { theme } = await makeSut()
      const container = screen.getByTestId(`input-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(51,51,51,0.2);
        background: ${theme.colors.white};
        height: 32px;
        width: 300px;
        padding: 0 1.2rem;
      `)
    })
  })
})
