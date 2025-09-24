import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common";
import { Container } from "react-bootstrap";

import styles from "./styles.module.css";
const { container } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
