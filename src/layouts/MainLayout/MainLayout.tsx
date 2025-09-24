import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import { Container } from "react-bootstrap";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
