import './CardProduit.css';

export default function CardProduit(props) {
    return (
       
        <div className='cardP'>
            <figure>
            <img className='imgCard' alt={props.titre} src={props.image}></img>
            <figcaption>
                <h3>{props.titre}</h3>
                <p>'{props.description}'</p>
                <h4>{props.prix}</h4>
                <h5>{props.star} ({props.avis})</h5>
            </figcaption>
            </figure>
        </div>
        
    )
}