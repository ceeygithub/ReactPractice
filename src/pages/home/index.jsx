
import HomeShowcase from "../../components/HomeComponents/HomeShowcase";
import FormComponent from "../../components/HomeComponents/FormComponent";
import styles from "./home.module.css"

const Home = () => {
 return <div className="container">
     <HomeShowcase />
     <FormComponent fatimah={styles.marginTop} />
 </div>
}

export default Home;
