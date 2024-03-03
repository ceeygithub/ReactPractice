import React from 'react'
import card from './card.module.css'

const ProductCard = ({title,paragraph,img, children}) => {
  return (
    <div className={card.card}>
        <div className={card.innercard}>
            <h4 className={card.title}>{title }</h4>
           
              <p dangerouslySetInnerHTML={{ __html: paragraph }}  className={card.para}></p>
        </div>
     <img src={img}alt="Card Image"  className={card.Img} />

      

    </div>
  )
}

export default ProductCard;