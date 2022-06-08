import './Emoji.css';

export default function Emoji() {
    return (
        <ul>
            <li>
                <button onClick={event => alert(event.target.id)}>
                <span id="sourire">😀</span>
                </button>
            </li>
            <li>
                <button onClick={event => alert(event.target.id)}>
                <span id="animal">🦁</span>
                </button>
            </li>
            <li>
                <button onClick={event => alert(event.target.id)}>
                <span id="nouriture">🍉</span>
                </button>
            </li>
        </ul>
    )
};
