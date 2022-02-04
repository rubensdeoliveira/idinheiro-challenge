import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { Container } from '@/core/application/characters/components/characters-grid/components/characters-grid-search/styles'
import { Button, Input } from '@/core/application/common/components'

export function CharactersGridSearch() {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const handleSearch = useCallback(async () => {
    if (search === undefined) {
      return undefined
    }
    if (search === '') {
      await router.push(`/list-characters/1`)
    }
    await router.push(`/list-characters/1/${search.trim()}`)
  }, [search])

  return (
    <Container>
      <Input value={search} onChange={e => setSearch(e.target.value)} />
      <Button label="Ver resultados" onClick={handleSearch} />
    </Container>
  )
}
