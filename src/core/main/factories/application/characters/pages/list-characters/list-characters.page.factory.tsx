import {
  getListCharactersPageStaticProps,
  ListCharactersPage,
  getListCharactersPageStaticPaths,
  ListCharactersPageProps,
} from '@/core/application/characters/pages'
import { makeRemoteListCharactersUseCase } from '@/core/main/factories/domain/characters/use-cases'

export class ListCharactersPageFactory {
  static getPage({ characters }: ListCharactersPageProps) {
    return <ListCharactersPage characters={characters} />
  }

  static async getStaticPaths() {
    return await getListCharactersPageStaticPaths()
  }

  static async getStaticProps(page: string, search: string | undefined) {
    return await getListCharactersPageStaticProps({
      page,
      search,
      listCharactersUseCase: makeRemoteListCharactersUseCase(),
    })
  }
}
