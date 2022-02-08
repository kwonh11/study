import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export default function MyPage() {
  return <Container>MyPage</Container>;
}
