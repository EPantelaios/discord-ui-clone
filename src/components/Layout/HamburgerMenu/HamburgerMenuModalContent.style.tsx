import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../../assets/close_icon.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/download_button_icon.svg';

import colors from '../../../config/colors';
import NavBarLogo from '../NavBarContent/NavBarLogo';

export const ContainerWrapper = styled.div`
  height: 90vh;
  padding: 1.5rem 3rem 7.5rem 1.5rem;
`;

export const HamburgerMenuLogo = styled(NavBarLogo)`
  color: ${(props) => props?.color};
`;

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 1px;
  background: #ebedef;
  margin-top: 24px;
  margin-bottom: 16px;
  color: ${colors.grey};
`;

export const HamburgerMenuItemsWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  a {
    text-decoration: none;
    width: 100%;
  }

  a:focus {
    border-radius: 8px;
    outline: 3px solid ${colors.lightblue};
  }

  a:active,
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

type Props = {
  isSelected: boolean;
};

export const HamburgerMenuItem = styled.span<Props>`
  display: flex;
  direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: ${colors.black};
  font-family: 'Whitney Light';
  font-weight: 100;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${(props) => props?.isSelected && colors.lighter};
  color: ${(props) => props?.isSelected && colors.lightblue};

  :hover,
  :active {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  padding: 1.5rem;
  margin-bottom: 3rem;
`;

export const DownloadButtonIcon = styled(DownloadIcon)``;

export const DownloadButton = styled.button`
  position: block;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  writing-mode: horizontal-tb !important;
  border: none;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  background-color: ${colors.blurple};
  color: ${colors.white};
  transition: all 0.2s ease-in-out;

  :hover,
  :active {
    cursor: pointer;
    background-color: hsl(235, 86.1%, 71.8%);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;
