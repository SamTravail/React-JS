import './CardProduit.css';

export default function CardProduit(props) {
    return (
       
        <div className='cardP'>
             <h1>Card Produit</h1>
            <figure>
            <img className='imgCard' src={props.image}></img>
            <figcaption>
                <h3>{props.titre}</h3>
                <p>'{props.description}'</p>
                <h4>{props.prix}</h4>
                <h5>{props.avis}</h5>
            </figcaption>
            </figure>
        </div>
        
    )
}