import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 1.6rem;
  gap: 0.8rem;

  @media (max-width: 599px) {
    flex-wrap: wrap;

    button {
      width: 100%;
      max-width: 288px;
    }

    input {
      width: 100%;
      max-width: 288px;
    }
  }
`
