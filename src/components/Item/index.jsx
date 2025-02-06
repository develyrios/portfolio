import { Span } from "../../styles/Text";
import { Container } from "./style";

export const Item = ({ imgSrc, nome }) => {
  return (
    <Container className="b8">
      <img src={imgSrc} alt="" />
      <Span>{nome}</Span>
    </Container>
  );
};
