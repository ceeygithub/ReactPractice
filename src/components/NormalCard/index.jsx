import './normalcard.css';

const NormalCard = ({ variant, children, size}) => {
    return <div data-size={size} data-variant={variant} className="cardWrapper">
       {children}
    </div>
}

export default NormalCard;