import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import DOMPurify from 'isomorphic-dompurify'

import {
  DetailCharacterPageProps,
  DetailCharacterPageStaticPropsModel,
} from '@/core/application/characters/pages'
import {
  DetailCharacterPageWrapper,
  DetailCharacterPageContainer,
} from '@/core/application/characters/pages/detail-character/styles'
import {
  Button,
  ButtonType,
  Loading,
  MyChevronLeftIcon,
} from '@/core/application/common/components'
import { CharacterCardDetails } from '@/core/application/characters/components'

export function DetailCharacterPage({ character }: DetailCharacterPageProps) {
  const router = useRouter()

  const handleCharacterDescription = useMemo(
    () =>
      character?.description
        ? DOMPurify.sanitize(character?.description)
        : DOMPurify.sanitize('Nāo há descriçāo para ser exibida no momento'),
    [character],
  )

  return (
    <DetailCharacterPageWrapper>
      {router.isFallback ? (
        <Loading />
      ) : (
        <>
          <Button buttonType={ButtonType.Icon} onClick={router.back}>
            <MyChevronLeftIcon />
          </Button>
          <DetailCharacterPageContainer
            dangerouslySetInnerHTML={{ __html: handleCharacterDescription }}
          />
          <CharacterCardDetails character={character} />
        </>
      )}
    </DetailCharacterPageWrapper>
  )
}

export const getDetailCharacterPageStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getDetailCharacterPageStaticProps = async ({
  id,
  getCharacterUseCase,
}: DetailCharacterPageStaticPropsModel) => {
  const character = await getCharacterUseCase.get(id)
  if (!character) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {
      character,
    },
    revalidate: 60,
  }
}
