import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetCategories from "@store/categories/act/actGetCategories";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const categoriesList = records.map((record) => (
    <Col
      key={record.id}
      xs={6}
      md={3}
      className="d-flex justify-content-center mb-5 mt-2"
    >
      <Category {...record} />
    </Col>
  ));

  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
