import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { DetailCharacterPageFactory } from '@/core/main/factories/application/characters/pages'
import { DetailCharacterPageProps } from '@/core/application/characters/pages'

type GetStaticPropsContextParams = ParsedUrlQuery & {
  id: string
}

export default function DetailCharacterPage(
  characters: DetailCharacterPageProps,
) {
  return DetailCharacterPageFactory.getPage(characters)
}

export const getStaticPaths: GetStaticPaths = async () => {
  return await DetailCharacterPageFactory.getStaticPaths()
}

export const getStaticProps: GetStaticProps<
  DetailCharacterPageProps
> = async context => {
  const { id } = context.params as GetStaticPropsContextParams
  return await DetailCharacterPageFactory.getStaticProps(id)
}
