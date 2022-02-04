import { CharacterModel } from '@/core/domain/characters/entities'
import { ListEntitiesModel } from '@/core/domain/common/entities'
import { ListEntitiesDTO } from '@/core/domain/common/dtos'

export interface ListCharactersContract {
  list: (
    filter: ListCharactersContract.Input,
  ) => Promise<ListCharactersContract.Output>
}

export namespace ListCharactersContract {
  export type Input = ListEntitiesDTO
  export type Output = ListEntitiesModel<CharacterModel> | undefined
}

export interface GetCharacterContract {
  get: (id: GetCharacterContract.Input) => Promise<GetCharacterContract.Output>
}

export namespace GetCharacterContract {
  export type Input = string
  export type Output = CharacterModel | undefined
}
