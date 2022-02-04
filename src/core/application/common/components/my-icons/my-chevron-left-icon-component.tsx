import React from 'react'
import { MdChevronLeft } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export const MyChevronLeftIcon: React.FC<MyIconProps> = (
  props: MyIconProps,
) => <MdChevronLeft data-testid={props.name} {...props} />
