import { InputProps } from '@/core/application/common/components'
import { Container } from '@/core/application/common/components/input/styles'

export function Input({ ...rest }: InputProps) {
  return <Container data-testid="input-container" {...rest} />
}
