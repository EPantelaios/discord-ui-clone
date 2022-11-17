import styled from 'styled-components';

export const MainNavigationMenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MainNavigationMenuItem = styled.li`
  font-weight: 600;
  margin: 0.6rem;
  padding: 0.6rem;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
