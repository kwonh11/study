import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
export default function Woman() {
  const { itemId } = useParams();
  return <Container>{itemId}</Container>;
}
