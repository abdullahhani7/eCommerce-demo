import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;
import type { TCategory } from "@customTypes/category";

const Category = ({ title, prefix, img }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
      </Link>

      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;
