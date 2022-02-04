import styled from 'styled-components'

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background: ${({ theme }) => theme.colors.white};
  height: 32px;
  width: 300px;
  padding: 0 1.2rem;
`
