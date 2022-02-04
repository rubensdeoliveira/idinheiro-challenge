import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import {
  CharactersGridProps,
  CharactersGridItem,
  CharactersGridPagination,
  CharactersGridSearch,
} from '@/core/application/characters/components'
import {
  CharactersGridContainer,
  CharactersGridItemsContainer,
} from '@/core/application/characters/components/characters-grid/styles'
import {
  Button,
  ButtonType,
  Loading,
} from '@/core/application/common/components'

export function CharactersGrid({
  characters,
  currentPage,
  search,
}: CharactersGridProps) {
  const router = useRouter()
  const [loadingCharacters, setLoadingCharacters] = useState<boolean>(false)

  const handleCharacterItems = useMemo(
    () =>
      characters &&
      characters.number_of_page_results > 0 && (
        <>
          {characters.results.map(character => (
            <CharactersGridItem character={character} key={character.id} />
          ))}
        </>
      ),
    [characters],
  )

  const handleCharactersGridContent = useMemo(() => {
    if (loadingCharacters) {
      return <Loading />
    }
    if ((!characters || characters.number_of_page_results === 0) && search) {
      return (
        <>
          <p>A sua pesquisa nāo retornou resultados</p>
          <Button
            buttonType={ButtonType.Text}
            label="Voltar"
            onClick={router.back}
          />
        </>
      )
    }
    return (
      <>
        <CharactersGridSearch />
        <CharactersGridItemsContainer>
          {handleCharacterItems}
        </CharactersGridItemsContainer>
        <CharactersGridPagination
          currentPage={currentPage}
          totalPages={characters ? characters.total_pages : 0}
          search={search}
          onChangePage={setLoadingCharacters}
        />
      </>
    )
  }, [characters, search, loadingCharacters, currentPage])

  return (
    <CharactersGridContainer>
      {handleCharactersGridContent}
    </CharactersGridContainer>
  )
}
