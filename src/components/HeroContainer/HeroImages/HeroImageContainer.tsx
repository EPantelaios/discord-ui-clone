import BackgroundImage from './BackgroundImage';
import ForegroundImageLeft from './ForegroundImageLeft';
import ForegroundImageRight from './ForegroundImageRight';
import { HeroImageWrapper } from './HeroImageContainer.style';

function HeroImageContainer() {
  return (
    <HeroImageWrapper>
      <BackgroundImage />
      <ForegroundImageLeft />
      <ForegroundImageRight />
    </HeroImageWrapper>
  );
}

export default HeroImageContainer;
