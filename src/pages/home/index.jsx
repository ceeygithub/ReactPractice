
import HomeShowcase from "../../components/HomeComponents/HomeShowcase";
import ProductShowcase from "../../components/HomeComponents/ProductShowcase";
import ProductShowcase2 from "../../components/HomeComponents/product2/ProductShowcase2";
import FormComponent from "../../components/HomeComponents/FormComponent";
import styles from "./home.module.css"


const Home = () => {
   
 return <div className="container">
      <HomeShowcase />
          <ProductShowcase background={ 'https://images.pexels.com/photos/1046348/pexels-photo-1046348.jpeg?auto=compress&cs=tinysrgb&w=600'}  />
             <ProductShowcase2 
  background={'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600'} 
  style={{
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}
/>

     <FormComponent fatimah={styles.marginTop} />
 </div>
}

export default Home;
