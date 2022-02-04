import styled from 'styled-components'

export const CharacterCardDetailsCharacterDetails = styled.div`
  width: 40%;
  height: auto;
  margin-left: 1.6rem;
  gap: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.gray100};
  max-height: 800px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 760px) {
    order: 0;
    margin-left: 0;
    margin-bottom: 3.2rem;
    width: 100%;
  }
`

export const CharacterCardDetailsCharacterDetailsRow = styled.div`
  width: 100%;
  display: flex;

  ul {
    width: 100%;

    li {
      display: flex;
      gap: 1.6rem;

      b {
        width: 140px;
      }
    }

    li + li {
      margin-top: 0.8rem;
    }
  }
`

export const CharacterCardDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
