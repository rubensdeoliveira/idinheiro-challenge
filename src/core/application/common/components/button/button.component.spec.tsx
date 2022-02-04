import { act, screen } from '@testing-library/react'

import { Button, ButtonProps } from '@/core/application/common/components'
import { RenderWithProviders } from '@/core/application/common/helpers'
import { mockButtonProps } from '@/core/application/common/components/button/mocks'

const makeSut = (props: ButtonProps = mockButtonProps()): void => {
  RenderWithProviders(() => Button(props))
}

describe('Button', () => {
  describe('Render button', () => {
    test('Should render correct list length', async () => {
      const props = mockButtonProps()
      await act(async () => makeSut(props))
      const listContainer = screen.getByTestId(`button-container`)
      expect(listContainer).toBeTruthy()
    })
  })
})
