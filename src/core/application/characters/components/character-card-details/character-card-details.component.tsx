import { useCallback, useMemo } from 'react'

import {
  CharacterCardDetailsProps,
  CharacterGenderTranslations,
} from '@/core/application/characters/components'
import { CharacterGender } from '@/core/domain/characters/constants'
import {
  CharacterCardDetailsTextContainer,
  CharacterCardDetailsCharacterDetails,
  CharacterCardDetailsCharacterDetailsRow,
} from '@/core/application/characters/components/character-card-details/styles'
import Image from 'next/image'

export function CharacterCardDetails({ character }: CharacterCardDetailsProps) {
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

  const handleCharacterCardDetails = useCallback(
    (title: string, value?: string) => (
      <>
        <b>{title}:</b>
        <CharacterCardDetailsTextContainer>
          {value ?? ''}
        </CharacterCardDetailsTextContainer>
      </>
    ),
    [],
  )

  const handleCharacterCardDetailsWithLines = useCallback(
    (title: string, lines?: string[]) => (
      <>
        <b>{title}:</b>
        <CharacterCardDetailsTextContainer>
          {lines?.length &&
            lines.map((line, index) => index < 5 && <p key={line}>{line}</p>)}
        </CharacterCardDetailsTextContainer>
      </>
    ),
    [],
  )

  const handleCharacterCardDetailssRow = useMemo(
    () => (
      <CharacterCardDetailsCharacterDetailsRow>
        <ul>
          <li>{handleCharacterCardDetails('Nome', character?.name)}</li>
          <li>
            {handleCharacterCardDetails('Nome real', character?.real_name)}
          </li>
          <li>
            {handleCharacterCardDetailsWithLines(
              'Apelidos',
              character?.aliases?.split(/\n/),
            )}
          </li>
          <li>{handleCharacterCardDetails('Gênero', handleCharacterGender)}</li>
          <li>
            {handleCharacterCardDetails(
              'Data de nascimento',
              handleCharacterbirthdate,
            )}
          </li>
        </ul>
      </CharacterCardDetailsCharacterDetailsRow>
    ),
    [],
  )

  return (
    <CharacterCardDetailsCharacterDetails>
      <Image
        src={String(character?.image?.medium_url)}
        alt={character?.name}
        width={600}
        height={800}
      />
      {handleCharacterCardDetailssRow}
    </CharacterCardDetailsCharacterDetails>
  )
}
