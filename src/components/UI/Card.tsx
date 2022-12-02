import { CardContainer } from './Card.style';

type Props = {
  children: React.ReactNode;
};

const Card = (props: Props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
