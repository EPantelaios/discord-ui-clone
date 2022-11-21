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
  isOdd?: boolean;
};

function MainContentItem(props: Props) {
  return (
    <MainContentItemContainer backgroundColor={props.backgroundColor}>
      <MainContentItemWrapper isOdd={props.isOdd}>
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
