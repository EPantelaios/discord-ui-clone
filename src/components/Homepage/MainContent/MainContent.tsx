import { memo } from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

import {
  MainContentItemsText,
  MainContentLastItemText,
  MainContentFooterText,
} from '../../../utils/mainContentItemsText';
import { MainContentWrapper } from './MainContent.style';
import MainContentFooter from './MainContentFooter';
import MainContentItem from './MainContentItem';
import MainContentItemFooter from './MainContentLastItem';
import 'animate.css/animate.min.css';

type ItemProps = {
  backgroundColor: string;
  src: string;
  title: string;
  paragraph: string;
};

type ItemFooterProps = {
  backgroundColor: string;
  src: string;
  title: string;
};

function MainContent() {
  const mainContentItems = MainContentItemsText.map(
    (item: ItemProps, index) => {
      return (
        <div key={index}>
          <AnimationOnScroll
            animateIn="animate__slideInUp"
            duration={0.8}
            offset={100}
            initiallyVisible={false}
            animatePreScroll
            animateOnce
          >
            <MainContentItem
              backgroundColor={item.backgroundColor}
              src={item.src}
              title={item.title}
              paragraph={item.paragraph}
              isOdd={(index + 1) % 2 === 1}
            />
          </AnimationOnScroll>
        </div>
      );
    }
  );

  const mainContentLastItem = MainContentLastItemText.map(
    (item: ItemProps, index) => {
      return (
        <div key={index}>
          <AnimationOnScroll
            animateIn="animate__slideInUp"
            duration={0.8}
            offset={100}
            initiallyVisible={false}
            animatePreScroll
            animateOnce
          >
            <MainContentItemFooter
              backgroundColor={item.backgroundColor}
              src={item.src}
              title={item.title}
              paragraph={item.paragraph}
            />
          </AnimationOnScroll>
        </div>
      );
    }
  );

  const mainContentFooter = MainContentFooterText.map(
    (item: ItemFooterProps, index) => {
      return (
        <MainContentFooter
          key={index}
          backgroundColor={item.backgroundColor}
          src={item.src}
          title={item.title}
        />
      );
    }
  );

  return (
    <MainContentWrapper>
      {mainContentItems}
      {mainContentLastItem}
      {mainContentFooter}
    </MainContentWrapper>
  );
}

export default memo(MainContent);
