import './Produit.css';
import CardProduit from '../CardProduit/CardProduit';

// const produits = [
//     { name: 'Pomme', id: 1},
//     { name: 'Poire', id: 2},
//     { name: 'Kiwi', id: 3},
// ]

// export default function Produit() {
    
//     const listeProduits = produits.map(produit => (
//         <li key={produit.id}>
//             {produit.name}
//         </li>
//     ));
    
    
//     return (
//         <div className='produit'>
//             <ul>
//                {listeProduits}
//             </ul>
//         </div>
//     )    
// }

// Creer un tableaux produits :
// image , titre , description , id , prix , avis
// le composant produit devra afficher une card avec les informations de chaque produit
// creer un autre composant CardProduit qui devra afficher les informations de chaque produit qui lui sont passés en props

const produits = [
    {
      image: 'https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712',
      id: 1,
      titre: 'Echo Dot',
      prix: '30€',
      description: 'Enceinte Bluetooth compacte avec Alexa | Son riche et puissant | Anthracite ',
      avis: 450,
      star: '🌟⭐⭐⭐⭐'
    },
    {
      image: 'https://live.staticflickr.com/1701/24066310330_b7bfcd0c0a_n.jpg',
      id: 2,
      titre: 'Fire TV',
      prix: '70€',
      description: 'Tuner TV usb',
      avis: 784120,
      star: '🌟🌟🌟🌟⭐'
    },
    {
      image:
        'https://www.bhphotovideo.com/images/images2500x2500/fitbit_fb507rgpk_versa_2_health_1501923.jpg',
      id: 3,
      titre: 'Fitbit Versa ',
      prix: '120€',
      description: 'Montre connecté',
      avis: 4125,
      star: '🌟🌟🌟⭐⭐'
    },
  ];

export default function Produit() {
    const listeProduits = produits.map((produit) => (
        <CardProduit 
            key={produit.id}
            image={produit.image}
            prix={produit.prix}
            titre={produit.titre}
            description={produit.description}
            avis={produit.avis}
            star={produit.star}
            />
    ))
    return <div><div className='cardCont'>{listeProduits}</div><div className='cardCont'>{listeProduits}</div></div>;

}

