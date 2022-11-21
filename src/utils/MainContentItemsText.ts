import image3 from '../assets/fandom_landing.svg';
import image2 from '../assets/hanging_out_easy_landing.svg';
import image1 from '../assets/invite_only_landing.svg';
import lastImage from '../assets/just_chiling_landing.svg';
import colors from '../config/colors';

const MainContentItemsText = [
  {
    backgroundColor: colors.white,
    src: image1,
    title: 'Create an invite-only place where you belong',
    paragraph:
      'Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.',
  },
  {
    backgroundColor: colors.lighter,
    src: image2,
    title: 'Where hanging out is easy',
    paragraph:
      'Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.',
  },
  {
    backgroundColor: colors.white,
    src: image3,
    title: 'From few to a fandom',
    paragraph:
      'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.',
  },
];

const MainContentItemsFooter = [
  {
    backgroundColor: colors.lighter,
    src: lastImage,
    title: 'RELIABLE TECH FOR STAYING CLOSE',
    paragraph:
      'Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.',
  },
];

export { MainContentItemsText, MainContentItemsFooter };
