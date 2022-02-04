import { GetCharacterContract } from '@/core/domain/characters/contracts'

export type DetailCharacterPageStaticPropsModel = {
  id: string
  getCharacterUseCase: GetCharacterContract
}
