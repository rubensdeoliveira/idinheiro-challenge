import { CharacterModel } from '@/core/domain/characters/entities'
import { ListEntitiesModel } from '@/core/domain/common/entities'

export type CharactersGridProps = {
  characters?: ListEntitiesModel<CharacterModel> | undefined
  currentPage: number
  search: string
}
