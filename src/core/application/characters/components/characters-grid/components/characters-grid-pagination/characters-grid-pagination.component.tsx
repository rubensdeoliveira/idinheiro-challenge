import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { CharactersGridPaginationProps } from '@/core/application/characters/components'
import { Container } from '@/core/application/characters/components/characters-grid/components/characters-grid-pagination/styles'
import {
  Button,
  ButtonType,
  MyChevronLeftIcon,
  MyChevronRightIcon,
} from '@/core/application/common/components'

export function CharactersGridPagination({
  currentPage,
  totalPages,
  onChangePage,
  search,
}: CharactersGridPaginationProps) {
  const [disabled, setDisabled] = useState<boolean>(false)
  const router = useRouter()

  const navigateToPage = useCallback(
    async (page: number) => {
      setDisabled(true)
      onChangePage(true)
      await router.push(`/list-characters/${page}${search ? `/${search}` : ''}`)
      setDisabled(false)
      onChangePage(false)
    },
    [router, onChangePage],
  )

  return (
    <Container>
      Página {currentPage} de {totalPages}
      <Button
        onClick={async () => await navigateToPage(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        buttonType={ButtonType.Icon}
      >
        <MyChevronLeftIcon size={16} />
      </Button>
      <Button
        onClick={async () => await navigateToPage(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        buttonType={ButtonType.Icon}
      >
        <MyChevronRightIcon size={16} />
      </Button>
    </Container>
  )
}
