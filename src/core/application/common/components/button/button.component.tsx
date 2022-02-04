import { ButtonProps, ButtonType } from '@/core/application/common/components'
import { Container } from '@/core/application/common/components/button/styles'

export function Button({
  label,
  buttonType = ButtonType.Text,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container data-testid="button-container" buttonType={buttonType} {...rest}>
      {label ?? children}
    </Container>
  )
}
