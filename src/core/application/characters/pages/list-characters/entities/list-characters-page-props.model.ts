import { CharacterModel } from '@/core/domain/characters/entities'
import { ListEntitiesModel } from '@/core/domain/common/entities'

export type ListCharactersPageProps = {
  characters?: ListEntitiesModel<CharacterModel>
}
