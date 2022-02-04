import React from 'react'
import { MdChevronRight } from 'react-icons/md'

import { MyIconProps } from '@/core/application/common/components'

export const MyChevronRightIcon: React.FC<MyIconProps> = (
  props: MyIconProps,
) => <MdChevronRight data-testid={props.name} {...props} />
