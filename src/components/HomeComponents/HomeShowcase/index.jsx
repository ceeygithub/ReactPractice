import { useEffect, useState } from 'react';

import styles from "./homeshowcase.module.css";
import Button from "../../Button";
import CategoryList from "../../CategoryList";
import { fetchCategories } from '../../../apiRequests/categories';
import NormalCard from "../../NormalCard";
import UserAvatarComponent from '../../UserAvatar';

const HomeShowcase = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const getCategories = async () => {
      const data = await fetchCategories();
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
      <div className={styles.cards}>
        <NormalCard size="small" >
          <div className={styles.card}>
<UserAvatarComponent />
<Button fullWidth>
  Join now  
</Button>
<Button fullWidth variant='secondary'>
  Log in  
</Button>

          </div>
        </NormalCard>
        <NormalCard variant="secondary">
        Get US $10 off with a new supplier
        </NormalCard>
        <NormalCard variant="primary">
        Send quotes with supplier preferences        </NormalCard>
      </div>
    </div>
  );
};

export default HomeShowcase;
