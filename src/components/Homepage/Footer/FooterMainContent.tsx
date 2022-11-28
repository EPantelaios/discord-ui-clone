import { Link } from 'react-router-dom';
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
        {item.items.map((item) => {
          return (
            <Link key={item} to={item.replace(/\s/g, '').toLowerCase()}>
              <FooterColumnItem>{item}</FooterColumnItem>
            </Link>
          );
        })}
      </FooterColumn>
    );
  });

  return (
    <FooterMainContentContainer>{columnsContent}</FooterMainContentContainer>
  );
}

export default FooterMainContent;
