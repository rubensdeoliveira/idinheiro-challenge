import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
  gap: 0.8rem;
  margin-top: 1.6rem;

  button:first-child {
    margin-left: 0.8rem;
  }
`
