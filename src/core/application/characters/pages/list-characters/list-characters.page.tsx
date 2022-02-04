import { useRouter } from 'next/router'

import {
  ListCharactersPageProps,
  ListCharactersPageStaticPropsModel,
} from '@/core/application/characters/pages'
import { ListCharactersPageWrapper } from '@/core/application/characters/pages/list-characters/styles'
import { CharactersGrid } from '@/core/application/characters/components'
import { Loading } from '@/core/application/common/components'

type ParamsQuery = {
  params: string[]
}

export function ListCharactersPage({ characters }: ListCharactersPageProps) {
  const router = useRouter()
  const { params } = router.query as ParamsQuery

  return (
    <ListCharactersPageWrapper>
      {router.isFallback ? (
        <Loading />
      ) : (
        <CharactersGrid
          characters={characters}
          currentPage={Number(params[0])}
          search={params[1]}
        />
      )}
    </ListCharactersPageWrapper>
  )
}

export const getListCharactersPageStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getListCharactersPageStaticProps = async ({
  page,
  search,
  listCharactersUseCase,
}: ListCharactersPageStaticPropsModel) => {
  const characters = await listCharactersUseCase.list({
    page: Number(page),
    search,
    results_per_page: 12,
  })
  if ((!characters || characters.number_of_page_results === 0) && !search) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {
      characters,
    },
    revalidate: 60,
  }
}
