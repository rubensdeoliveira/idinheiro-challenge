import {
  getDetailCharacterPageStaticProps,
  DetailCharacterPage,
  getDetailCharacterPageStaticPaths,
  DetailCharacterPageProps,
} from '@/core/application/characters/pages'
import { makeRemoteGetCharacterUseCase } from '@/core/main/factories/domain/characters/use-cases'

export class DetailCharacterPageFactory {
  static getPage({ character }: DetailCharacterPageProps) {
    return <DetailCharacterPage character={character} />
  }

  static async getStaticPaths() {
    return await getDetailCharacterPageStaticPaths()
  }

  static async getStaticProps(id: string) {
    return await getDetailCharacterPageStaticProps({
      id,
      getCharacterUseCase: makeRemoteGetCharacterUseCase(),
    })
  }
}
