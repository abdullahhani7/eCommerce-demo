import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetProductsByCatPrefix from "@store/products/act/actGetProductsByCatPrefix";
import { useEffect } from "react";
import { productsCleanUp } from "@store/products/productsSlice";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : "there are no categories to show";

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
