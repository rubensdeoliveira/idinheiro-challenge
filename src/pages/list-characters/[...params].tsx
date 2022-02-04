import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { ListCharactersPageFactory } from '@/core/main/factories/application/characters/pages'
import { ListCharactersPageProps } from '@/core/application/characters/pages'

type GetStaticPropsContextParams = ParsedUrlQuery & {
  params: string
}

export default function ListCharactersPage(
  characters: ListCharactersPageProps,
) {
  return ListCharactersPageFactory.getPage(characters)
}

export const getStaticPaths: GetStaticPaths = async () => {
  return await ListCharactersPageFactory.getStaticPaths()
}

export const getStaticProps: GetStaticProps<
  ListCharactersPageProps
> = async context => {
  const { params } = context.params as GetStaticPropsContextParams
  const [page, search] = params
  return await ListCharactersPageFactory.getStaticProps(page, search)
}
