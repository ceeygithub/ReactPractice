import React from 'react'
import product from './product2.module.css';
import Card from '../productCard/index';


const Product = ({background, marginTop}) => {
  return (
    <div className={product.wrapper} style={{marginTop:'20px'}}>
<div className={product.sideImg} style={{ background: `url(${background})`
  }}>
  {/* Other content of your component */}
</div>


<div className={product.innerWrapper}>
<Card title="Smart watches"  paragraph="From <br/> USD 19" img="https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg?auto=compress&cs=tinysrgb&w=600" />

<Card title="Cameras" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/3989612/pexels-photo-3989612.jpeg?auto=compress&cs=tinysrgb&w=600" />


<Card title="Headphones" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600" />


<Card title="Smart watches" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Gaming set" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/4225229/pexels-photo-4225229.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Laptops " paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Smartphones" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Electric kettle" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/11255397/pexels-photo-11255397.jpeg?auto=compress&cs=tinysrgb&w=600" />

</div>



    </div>
  )
}

export default Product;