import { CharacterGender } from '@/core/domain/characters/constants'

export type CharacterModel = {
  id: number
  name: string
  image: {
    thumb_url: string
    medium_url: string
  }
  gender: CharacterGender
  real_name: string
  birth: Date
  description: string
  aliases: string
}
