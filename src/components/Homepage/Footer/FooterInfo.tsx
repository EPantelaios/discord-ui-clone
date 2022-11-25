import {
  Container,
  Title,
  LanguageWrapper,
  LanguageIcon,
  LanguageText,
  LanguageArrow,
  SocialMediaIcons,
  TwitterLink,
  TwitterIcon,
  InstagramLink,
  InstagramIcon,
  FacebookLink,
  FacebookIcon,
  YoutubeLink,
  YoutubeIcon,
} from './FooterInfo.style';

function FooterSymbols() {
  return (
    <Container>
      <Title>IMAGINE A PLACE</Title>
      <LanguageWrapper>
        <LanguageIcon />
        <LanguageText>English, USA</LanguageText>
        <LanguageArrow />
      </LanguageWrapper>
      <SocialMediaIcons>
        <TwitterLink>
          <TwitterIcon />
        </TwitterLink>
        <InstagramLink>
          <InstagramIcon />
        </InstagramLink>
        <FacebookLink>
          <FacebookIcon />
        </FacebookLink>
        <YoutubeLink>
          <YoutubeIcon />
        </YoutubeLink>
      </SocialMediaIcons>
    </Container>
  );
}

export default FooterSymbols;
