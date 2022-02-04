import { datatype, name } from 'faker'

import { CharactersGridProps } from '@/core/application/characters/components'
import { mockListEntitiesModel } from '@/core/domain/common/mocks'
import { CharacterModel } from '@/core/domain/characters/entities'

export const mockCharactersGridProps = (): CharactersGridProps => ({
  currentPage: datatype.number(),
  search: name.findName(),
  characters: mockListEntitiesModel<CharacterModel>(),
})
