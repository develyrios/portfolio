import { Span } from "../../styles/Text";
import { Container } from "./style";

export const Item = ({ imgSrc, imgAlt, nome }) => {
  return (
    <Container className="b8">
      <img src={imgSrc} alt={imgAlt} />
      <Span>{nome}</Span>
    </Container>
  );
};
