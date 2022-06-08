import './Emoji.css';

// const montrerEmoji =event => alert(event.target.id);

// export default function Emoji() {
//     return (
//         <ul>
//             <li>
//                 <button onClick={event => alert(event.target.id)}>
//                 <span role="omg" id="sourire">😀</span>
//                 </button>
//             </li>
//             <li>
//                 <button onClick={montrerEmoji}>
//                 <span role="omg" id="animal">🦁</span>
//                 </button>
//             </li>
//             <li>
//                 <button onClick={event => alert(event.target.id)}>
//                 <span role="omg" id="nouriture">🍉</span>
//                 </button>
//             </li>
//         </ul>
//     )
// };

const emojis = [
    {
    emoji: "😀",
    name: "sourire"
    },
    {
    emoji: "🦁",
    name: "animal"    
    },
    {
        emoji: "🍉",
        name: "nouriture"    
        },
];

const montrerEmoji =event => alert(event.target.id);
export default function Emoji() {
    return(
        <>
        <ul>
            {
                emojis.map(emoji => (
                        <li key={emoji.emoji}>
                            <button onClick={montrerEmoji}>
                            <span role="img" id={emoji.name}>🦁</span>
                            </button>
                        </li>
                ))
            }
        </ul>
        </>
    )
}
// const planetes = [
//     "Terre",
//     "Saturne",
//     "Pluton"
// ];

// export default function Emoji() {
//     return(
//         <>
//         {planetes.map(planete => <div key={planete}>{planete}</div>)}
//         </>
//     )
// }
