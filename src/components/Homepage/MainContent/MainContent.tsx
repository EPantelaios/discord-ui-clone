import {
  MainContentItemsText,
  MainContentLastItemText,
  MainContentFooterText,
} from '../../../utils/mainContentItemsText';
import { MainContentWrapper } from './MainContent.style';
import MainContentFooter from './MainContentFooter';
import MainContentItem from './MainContentItem';
import MainContentItemFooter from './MainContentLastItem';

type ItemProps = {
  backgroundColor: string;
  src: string;
  title: string;
  paragraph: string;
};

function MainContent() {
  const mainContentItems = MainContentItemsText.map(
    (item: ItemProps, index) => {
      return (
        <MainContentItem
          key={index}
          backgroundColor={item.backgroundColor}
          src={item.src}
          title={item.title}
          paragraph={item.paragraph}
          isOdd={(index + 1) % 2 === 1}
        />
      );
    }
  );

  const mainContentLastItem = MainContentLastItemText.map(
    (item: ItemProps, index) => {
      return (
        <MainContentItemFooter
          key={index}
          backgroundColor={item.backgroundColor}
          src={item.src}
          title={item.title}
          paragraph={item.paragraph}
        />
      );
    }
  );

  // const mainContentFooter = MainContentFooterText.map(
  //   (item: ItemProps, index) => {
  //     return <MainContentFooter />;
  //   }
  // );

  return (
    <MainContentWrapper>
      {mainContentItems}
      {mainContentLastItem}
      {/* {mainContentFooter} */}
    </MainContentWrapper>
  );
}

export default MainContent;
