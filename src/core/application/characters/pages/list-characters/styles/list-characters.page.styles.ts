import styled from 'styled-components'

export const ListCharactersPageWrapper = styled.div`
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;

  @media (max-width: 1175px) {
    max-width: 888px;
  }

  @media (max-width: 887px) {
    max-width: 600px;
  }

  @media (max-width: 599px) {
    max-width: 320px;
    padding: 4.2rem 1.6rem;
  }
`
