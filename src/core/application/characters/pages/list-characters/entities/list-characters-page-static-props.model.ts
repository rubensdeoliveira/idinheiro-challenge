import { ListCharactersContract } from '@/core/domain/characters/contracts'

export type ListCharactersPageStaticPropsModel = {
  page: string
  search: string | undefined
  listCharactersUseCase: ListCharactersContract
}
