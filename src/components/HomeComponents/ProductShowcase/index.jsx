import React from 'react'
import product from './product.module.css';
import Card from '../productCard/index';


const Product = ({background}) => {
  return (
    <div className={product.wrapper} style={{marginTop:'20px'}}>
<div className={product.sideImg} style={{ background: `url(${background})`
  }}>
  {/* Other content of your component */}
</div>


<div className={product.innerWrapper}>
<Card title="Soft chairs"  paragraph="From <br/> USD 19" img="https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg?auto=compress&cs=tinysrgb&w=600" />

<Card title="Sofa & chair" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" />


<Card title="Kitchen dishes" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/5447070/pexels-photo-5447070.jpeg?auto=compress&cs=tinysrgb&w=600" />


<Card title="Smart watches" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Kitchen mixer" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/6996330/pexels-photo-6996330.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Blenders" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/8805090/pexels-photo-8805090.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Home appliance" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=600" />
<Card title="Coffee maker" paragraph={`From <br/> USD 19`} img="https://images.pexels.com/photos/6032797/pexels-photo-6032797.jpeg?auto=compress&cs=tinysrgb&w=600" />

</div>



    </div>
  )
}

export default Product;