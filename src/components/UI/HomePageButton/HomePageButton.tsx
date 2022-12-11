import { HomePageButtonStyled } from './HomePageButton.style';

type Props = {
  fontSize?: string;
  color?: string;
  colorHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  children: React.ReactNode;
};

function HomePageButton(props: Props) {
  return (
    <HomePageButtonStyled {...props}>{props.children}</HomePageButtonStyled>
  );
}

export default HomePageButton;
