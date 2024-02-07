import styles from "./categorylist.module.css";

const CategoryList = ({
    categories = []
}) => {
    console.log(categories, 'this is th')
    return <ul>
        {
         categories?.map((category) => {
            return <li className={styles.categoryItem} key={category.id}>{category.title}</li>
         })
        }
    </ul>
}

export default CategoryList;
