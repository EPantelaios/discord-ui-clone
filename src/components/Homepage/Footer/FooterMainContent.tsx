import FooterText from '../../../utils/footerText';
import {
  FooterMainContentContainer,
  FooterColumn,
  FooterColumnTitle,
  FooterColumnItem,
} from './FooterMainContent.style';

function FooterMainContent() {
  const columnsContent = FooterText.map((item, index) => {
    return (
      <FooterColumn key={index}>
        <FooterColumnTitle>{item.title}</FooterColumnTitle>
        {item.items.map((item, index) => {
          return <FooterColumnItem key={index}>{item}</FooterColumnItem>;
        })}
      </FooterColumn>
    );
  });

  return (
    <FooterMainContentContainer>{columnsContent}</FooterMainContentContainer>
  );
}

export default FooterMainContent;
