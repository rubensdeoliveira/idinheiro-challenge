import Image from 'next/image'
import { useMemo } from 'react'
import Link from 'next/link'

import {
  CharactersGridItemProps,
  CharacterGenderTranslations,
} from '@/core/application/characters/components'
import {
  Container,
  ImageContainer,
  Content,
  NameContainer,
} from '@/core/application/characters/components/characters-grid/components/characters-grid-item/styles'
import { CharacterGender } from '@/core/domain/characters/constants'

export function CharactersGridItem({ character }: CharactersGridItemProps) {
  const handleCharacterbirthdate = useMemo(
    () =>
      new Date(character.birth).toLocaleString('pt-br', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    [character],
  )

  const handleCharacterGender = useMemo(() => {
    switch (character.gender) {
      case CharacterGender.Male:
        return CharacterGenderTranslations.Male
      case CharacterGender.Female:
        return CharacterGenderTranslations.Female
      default:
        return CharacterGenderTranslations.Other
    }
  }, [character])

  return (
    <Link
      as={`/detail-character/${character.id}`}
      href="/detail-character/[id]"
    >
      <Container>
        <ImageContainer>
          <Image
            src={character.image?.thumb_url}
            alt={character.name}
            width={80}
            height={120}
          />
        </ImageContainer>
        <Content>
          <NameContainer>
            <h1>{character.name}</h1>
            <h2>{character.real_name}</h2>
          </NameContainer>
          <ul>
            <li>{handleCharacterGender}</li>
            <li>{handleCharacterbirthdate}</li>
          </ul>
        </Content>
      </Container>
    </Link>
  )
}
