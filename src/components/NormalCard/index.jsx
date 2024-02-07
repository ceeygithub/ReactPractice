
import './normalcard.css';

const NormalCard = ({ variant, children}) => {
    return <div data-variant={variant} className="cardWrapper">
       {children}
    </div>
}

export default NormalCard;