import styled from 'styled-components'

export const DetailCharacterPageWrapper = styled.div`
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 7rem 3rem;
  position: relative;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`

export const DetailCharacterPageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.6rem;
  }

  p {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  figure {
    display: none;
  }

  @media (max-width: 760px) {
    order: 1;
    width: 100%;
  }
`

export const DetailCharacterPageCharacterDetails = styled.div`
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

export const DetailCharacterPageCharacterDetailsRow = styled.div`
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

export const CharacterDetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
