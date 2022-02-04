import { ButtonHTMLAttributes } from 'react'

import { ButtonType } from '@/core/application/common/components'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  buttonType?: ButtonType
}
