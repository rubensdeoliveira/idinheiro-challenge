import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 24px rgba(9, 110, 221, 0.13);
  border-radius: 4px;
  width: 100%;
  max-width: 272px;
  height: 160px;
  padding: 1.6rem;
  gap: 1.6rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 16px 80px rgba(9, 110, 221, 0.32);
  }

  @media (max-width: 599px) {
    max-width: 288px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 100%;
  flex-shrink: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  ul {
    list-style: none;

    li {
      font-size: 1.2rem;
      line-height: 2rem;
      color: ${({ theme }) => theme.colors.gray300};
    }
  }
`

export const NameContainer = styled.div`
  h1 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.white};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.blue500};
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
