import {
  MainContentItemsText,
  MainContentItemsFooter,
} from '../../../utils/MainContentItemsText';
import { MainContentWrapper } from './MainContent.style';
import MainContentItem from './MainContentItem';

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

  return <MainContentWrapper>{mainContentItems}</MainContentWrapper>;
}

export default MainContent;
