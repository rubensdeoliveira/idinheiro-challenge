import { screen, act, fireEvent } from '@testing-library/react'
import { name } from 'faker'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import {
  CharactersGrid,
  CharactersGridProps,
} from '@/core/application/characters/components'
import {
  RenderWithProviders,
  RenderWithProvidersProps,
} from '@/core/application/common/helpers'
import { mockCharactersGridProps } from '@/core/application/characters/components/characters-grid/mocks'
import { mockListEntitiesModel } from '@/core/domain/common/mocks'
import { CharacterModel } from '@/core/domain/characters/entities'
import { mockNextRouter } from '@/core/application/common/mocks'

const router = mockNextRouter({})

const makeSut = async (
  props: CharactersGridProps,
): Promise<RenderWithProvidersProps> =>
  await RenderWithProviders(() => (
    <RouterContext.Provider value={router}>
      <CharactersGrid {...props} />
    </RouterContext.Provider>
  ))

describe('CharactersGrid', () => {
  describe('Behaviour', () => {
    test('Should render characters grid component', async () => {
      const props = mockCharactersGridProps()
      await makeSut(props)
      screen.getByTestId(`characters-grid-container`)
    })

    test('Should render expected text if characters is empty and search is not provided', async () => {
      const props = mockCharactersGridProps()
      props.characters = mockListEntitiesModel<CharacterModel>()
      props.characters.number_of_page_results = 0
      props.search = ''
      await makeSut(props)
      const text = screen.getByTestId(`characters-grid-empty-list-text`)
      expect(text.textContent).toBe('Nāo há personagens para serem exibidos')
    })

    test('Should render expected text if characters is empty and search is provided', async () => {
      const props = mockCharactersGridProps()
      props.characters = mockListEntitiesModel<CharacterModel>()
      props.characters.number_of_page_results = 0
      props.search = name.findName()
      await makeSut(props)
      const text = screen.getByTestId(`characters-grid-empty-list-text`)
      expect(text.textContent).toBe('A sua pesquisa nāo retornou resultados')
    })

    test('Should render back button with correct text', async () => {
      const props = mockCharactersGridProps()
      props.characters = mockListEntitiesModel<CharacterModel>()
      props.characters.number_of_page_results = 0
      await makeSut(props)
      const button = screen.getByTestId(`characters-grid-back-button`)
      expect(button.textContent).toBe('Voltar')
    })

    test('Should go back to previous route on click in back button', async () => {
      const props = mockCharactersGridProps()
      props.characters = mockListEntitiesModel<CharacterModel>()
      props.characters.number_of_page_results = 0
      await makeSut(props)
      const button = screen.getByTestId(`characters-grid-back-button`)
      const backSpy = jest.spyOn(router, 'back')
      await act(async () => {
        fireEvent.click(button)
      })
      expect(backSpy).toHaveBeenCalled()
    })
  })

  describe('Styles', () => {
    test('Should render characters grid styles', async () => {
      const props = mockCharactersGridProps()
      await makeSut(props)
      const container = screen.getByTestId(`characters-grid-container`)
      expect(container).toHaveStyle(`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 560px;
        justify-content: space-between;
      `)
    })
  })
})
