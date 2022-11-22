import styled from 'styled-components';

export const MainNavigationMenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

export const MainNavigationMenuItem = styled.li`
  font-weight: 600;
  padding: 0.6rem;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
