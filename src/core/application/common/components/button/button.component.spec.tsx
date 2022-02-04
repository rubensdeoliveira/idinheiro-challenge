import { screen } from '@testing-library/react'

import {
  Button,
  ButtonProps,
  ButtonType,
} from '@/core/application/common/components'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'
import { mockButtonProps } from '@/core/application/common/components/button/mocks'

const makeSut = async (props: ButtonProps): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => <Button {...props} />)

describe('Button', () => {
  describe('Behaviour', () => {
    test('Should render button', async () => {
      const props = mockButtonProps()
      await makeSut(props)
      screen.getByTestId(`button-container`)
    })

    test('Should render button with correct label if passed', async () => {
      const props = mockButtonProps()
      await makeSut(props)
      const container = screen.getByTestId(`button-container`)
      expect(container.textContent).toBe(props.label)
    })
  })

  describe('Styles', () => {
    test('Should render button type text styles if button type is not provided', async () => {
      const props = mockButtonProps()
      delete props.buttonType
      const { theme } = await makeSut(props)
      const container = screen.getByTestId(`button-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        border: 0;
        background: ${theme.colors.blue500};
        color: ${theme.colors.white};
        padding: 0 1.6rem;
      `)
    })

    test('Should render button styles if button type is text', async () => {
      const props = mockButtonProps()
      props.buttonType = ButtonType.Text
      const { theme } = await makeSut(props)
      const container = screen.getByTestId(`button-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        border: 0;
        background: ${theme.colors.blue500};
        color: ${theme.colors.white};
        padding: 0 1.6rem;
      `)
    })

    test('Should render button styles if button type is icon', async () => {
      const props = mockButtonProps()
      props.buttonType = ButtonType.Icon
      const { theme } = await makeSut(props)
      const container = screen.getByTestId(`button-container`)
      expect(container).toHaveStyle(`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        border: 0;
        background: ${theme.colors.blue500};
        color: ${theme.colors.white};
        height: 32px;
        width: 32px;
        border-radius: 50%;
      `)
    })
  })
})
