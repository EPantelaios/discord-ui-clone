import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../../../assets/close_icon.svg';
import { ReactComponent as DownloadIcon } from '../../../../assets/download_button_icon.svg';
import colors from '../../../../config/colors';
import HomePageButton from '../../../UI/HomePageButton';
import NavBarLogo from '../NavBarContent/NavBarLogo';

type Props = {
  isSelected: boolean;
};

export const ContainerWrapper = styled.div`
  height: 90vh;
  padding: 1.5rem 3rem 7.5rem 1.5rem;
  overflow-y: scroll;
  overflow-x: hidden;

  > a {
    display: inline-block;
    padding: 0.5rem;
    margin: -0.5rem;
  }
`;

export const HamburgerMenuLogo = styled(NavBarLogo)`
  color: ${(props) => props?.color};
`;

export const CloseButtonIcon = styled(CloseIcon)`
  position: absolute;
  top: 1.7rem;
  right: 1.5rem;
  z-index: 10000;
  width: 2.3rem;
  height: 2.3rem;
  margin: -0.5rem;
  padding: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 1px;
  background: #ebedef;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const HamburgerMenuItemsWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;

  a {
    width: 100%;
  }

  a:focus {
    border-radius: 8px;
    outline: 3px solid ${colors.lightblue};
  }
`;

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
  padding: 0.6rem 1rem;
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
  bottom: 0rem;
  padding: 1.5rem;
  overflow: hidden;
`;

export const DownloadButtonIcon = styled(DownloadIcon)``;

export const DownloadButton = styled(HomePageButton)`
  background-color: ${colors.blurple};
  color: ${colors.white};
  padding: 0.5rem 1rem;

  :hover,
  :active {
    background-color: ${colors.lightpurple};
  }
`;
