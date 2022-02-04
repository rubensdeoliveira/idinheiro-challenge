import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { ButtonType } from '@/core/application/common/components'

type ContainerProps = {
  buttonType: ButtonType
}

const GetButtonStylesByType = (
  buttonType: ButtonType,
): FlattenSimpleInterpolation => {
  if (buttonType === ButtonType.Text) {
    return css`
      padding: 0 1.6rem;
    `
  }
  return css`
    height: 32px;
    width: 32px;
    border-radius: 50%;
  `
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border: 0;
  background: ${({ theme }) => theme.colors.blue500};
  color: ${({ theme }) => theme.colors.white};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  ${props => GetButtonStylesByType(props.buttonType)}
`
