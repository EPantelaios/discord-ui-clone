import {
  MainContentItemContainer,
  MainContentItemImg,
  MainContentItemParagraph,
  MainContentItemText,
  MainContentItemTitle,
  MainContentItemWrapper,
} from './MainContentItem.style';

type Props = {
  backgroundColor?: string;
  src: string;
  title: string;
  paragraph: string;
  isEven: boolean;
};

function MainContentItem(props: Props) {
  return (
    <MainContentItemContainer backgroundColor={props.backgroundColor}>
      <MainContentItemWrapper isEven={props.isEven}>
        <MainContentItemImg src={props.src} />
        <MainContentItemText>
          <MainContentItemTitle>{props.title}</MainContentItemTitle>
          <MainContentItemParagraph>{props.paragraph}</MainContentItemParagraph>
        </MainContentItemText>
      </MainContentItemWrapper>
    </MainContentItemContainer>
  );
}

export default MainContentItem;
