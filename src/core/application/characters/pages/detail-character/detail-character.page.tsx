import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'

import {
  DetailCharacterPageProps,
  DetailCharacterPageStaticPropsModel,
} from '@/core/application/characters/pages'
import {
  DetailCharacterPageWrapper,
  DetailCharacterPageContainer,
  DetailCharacterPageCharacterDetails,
  DetailCharacterPageCharacterDetailsRow,
  CharacterDetailTextContainer,
} from '@/core/application/characters/pages/detail-character/styles'
import {
  Button,
  ButtonType,
  Loading,
  MyChevronLeftIcon,
} from '@/core/application/common/components'
import { CharacterGender } from '@/core/domain/characters/constants'
import { CharacterGenderTranslations } from '@/core/application/characters/components'

export function DetailCharacterPage({ character }: DetailCharacterPageProps) {
  const router = useRouter()

  const handleCharacterDescription = useMemo(
    () =>
      character?.description
        ? DOMPurify.sanitize(character?.description)
        : DOMPurify.sanitize('Nāo há descriçāo para ser exibida no momento'),
    [character],
  )

  const handleCharacterbirthdate = useMemo(
    () =>
      character?.birth &&
      new Date(character.birth).toLocaleString('pt-br', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    [character],
  )

  const handleCharacterGender = useMemo(() => {
    if (!character || !character?.birth) {
      return undefined
    }
    switch (character.gender) {
      case CharacterGender.Male:
        return CharacterGenderTranslations.Male
      case CharacterGender.Female:
        return CharacterGenderTranslations.Female
      default:
        return CharacterGenderTranslations.Other
    }
  }, [character])

  const handleCharacterDetail = useCallback(
    (title: string, value?: string) => (
      <>
        <b>{title}:</b>
        <CharacterDetailTextContainer>
          {value ?? ''}
        </CharacterDetailTextContainer>
      </>
    ),
    [],
  )

  const handleCharacterDetailWithLines = useCallback(
    (title: string, lines?: string[]) => (
      <>
        <b>{title}:</b>
        <CharacterDetailTextContainer>
          {lines?.length &&
            lines.map((line, index) => index < 5 && <p key={line}>{line}</p>)}
        </CharacterDetailTextContainer>
      </>
    ),
    [],
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
          <DetailCharacterPageCharacterDetails>
            <Image
              src={String(character.image?.medium_url)}
              alt={character.name}
              width={600}
              height={800}
            />
            <DetailCharacterPageCharacterDetailsRow>
              <ul>
                <li>{handleCharacterDetail('Nome', character?.name)}</li>
                <li>
                  {handleCharacterDetail('Nome real', character?.real_name)}
                </li>
                <li>
                  {handleCharacterDetailWithLines(
                    'Apelidos',
                    character?.aliases?.split(/\n/),
                  )}
                </li>
                <li>
                  {handleCharacterDetail('Gênero', handleCharacterGender)}
                </li>
                <li>
                  {handleCharacterDetail(
                    'Data de nascimento',
                    handleCharacterbirthdate,
                  )}
                </li>
              </ul>
            </DetailCharacterPageCharacterDetailsRow>
          </DetailCharacterPageCharacterDetails>
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
