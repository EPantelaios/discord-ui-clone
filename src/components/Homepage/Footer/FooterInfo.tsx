import { useRef, useState } from 'react';

import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import Languages, { defaultLanguage } from '../../../utils/languages';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
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
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    defaultLanguage.name
  );

  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useOnClickOutside(ref, () => setIsDropdownMenuOpen(false));

  const selectHandler = (item: string) => {
    setSelectedLanguage(item);
    setIsDropdownMenuOpen(false);
  };

  return (
    <Container>
      <Title>IMAGINE A PLACE</Title>
      {isDropdownMenuOpen && (
        <DropDownMenu
          data={Languages.map((language) => language.name)}
          onSelect={selectHandler}
          ref={ref}
        />
      )}
      <LanguageWrapper onClick={() => setIsDropdownMenuOpen(true)}>
        <LanguageIcon />
        <LanguageText>{selectedLanguage}</LanguageText>
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
