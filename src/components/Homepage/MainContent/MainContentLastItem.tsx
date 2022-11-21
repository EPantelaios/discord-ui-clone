import {
  MainContentItemFooterContainer,
  MainContentItemFooterWrapper,
  MainContentItemFooterParagraph,
  MainContentItemFooterText,
  MainContentItemFooterTitle,
  MainContentItemFooterImg,
} from './MainContentLastItem.style';

type Props = {
  backgroundColor?: string;
  src: string;
  title: string;
  paragraph: string;
};

function MainContentItemFooter(props: Props) {
  return (
    <MainContentItemFooterContainer backgroundColor={props.backgroundColor}>
      <MainContentItemFooterWrapper>
        <MainContentItemFooterText>
          <MainContentItemFooterTitle>{props.title}</MainContentItemFooterTitle>
          <MainContentItemFooterParagraph>
            {props.paragraph}
          </MainContentItemFooterParagraph>
        </MainContentItemFooterText>
        <MainContentItemFooterImg src={props.src} />
      </MainContentItemFooterWrapper>
    </MainContentItemFooterContainer>
  );
}

export default MainContentItemFooter;
