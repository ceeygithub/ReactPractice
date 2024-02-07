import { useEffect, useState } from 'react';

import styles from "./homeshowcase.module.css";
import Button from "../../Button";
import CategoryList from "../../CategoryList";
import { fetchCategories } from '../../../apiRequests/categories';

const HomeShowcase = (props) => {

  const [categories, setCategories] = useState([]);




  useEffect(() => {

    const getCategories = async () => {
      const data = await fetchCategories();
      console.log(data, 'this is the categories')
      setCategories(data.categories)
    }
  
    getCategories()

  }, [])


  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        <CategoryList categories={categories} />
      </div>
      <div className={styles.main}>
        <h3 className={styles.mainHeading}>
          <span>Latest trending</span>
          Electronic Items
        </h3>
        <div className={styles.mainBtnWrapper}>

        <Button variant="secondary">
            Learn More
     </Button>
        </div>
      </div>
      <div>right side</div>
    </div>
  );
};

export default HomeShowcase;
