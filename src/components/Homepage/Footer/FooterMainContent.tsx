import React from 'react';

import { Link } from 'react-router-dom';

import {
  FooterMainContentContainer,
  FooterColumn,
  FooterColumnTitle,
  FooterColumnItem,
} from './FooterMainContent.style';
import FooterText from '../../../utils/footerText';

function FooterMainContent() {
  const columnsContent = React.Children.toArray(
    FooterText.map((item) => {
      return (
        <FooterColumn>
          <FooterColumnTitle>{item.title}</FooterColumnTitle>
          {React.Children.toArray(
            item.items.map((item) => {
              return (
                <Link to={item.replace(/\s/g, '').toLowerCase()}>
                  <FooterColumnItem>{item}</FooterColumnItem>
                </Link>
              );
            })
          )}
        </FooterColumn>
      );
    })
  );

  return (
    <FooterMainContentContainer>{columnsContent}</FooterMainContentContainer>
  );
}

export default FooterMainContent;
