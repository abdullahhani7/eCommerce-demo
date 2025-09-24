import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header/Header";
import { Container } from "react-bootstrap";
import Footer from "@components/common/Footer/Footer";

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
