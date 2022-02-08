import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
`;
const TopLink = styled.div<TopLinkStyleProps>`
  font-size: 15px;
  font-weight: bold;
  color: ${(props: TopLinkStyleProps) =>
    props.isSelected ? "black" : "darkgray"};
  padding: 5px 10px;
  cursor: pointer;
`;
const routes = [
  { name: "홈", path: "home" },
  { name: "쇼핑", path: "shop" },
  { name: "마이페이지", path: "mypage" },
];

interface TopLinkStyleProps {
  isSelected: boolean;
}

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const onClickToplink = (path: string): void => {
    navigate(path);
  };
  return (
    <Container>
      {routes.map((el, i) => (
        <TopLink
          key={`toplink_${el.path}`}
          isSelected={pathname.includes(el.path)}
          onClick={() => onClickToplink(el.path)}
        >
          {el.name}
        </TopLink>
      ))}
    </Container>
  );
}
