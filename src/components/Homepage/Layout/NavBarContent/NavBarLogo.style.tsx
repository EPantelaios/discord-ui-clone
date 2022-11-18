import styled from 'styled-components';

import { ReactComponent as discordLogo } from '../../../../assets/discord_main_logo.svg';

export const NavBarLogoIcon = styled(discordLogo)`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  color: ${(props) => props?.color || 'white'};

  :hover {
    cursor: pointer;
  }
`;
