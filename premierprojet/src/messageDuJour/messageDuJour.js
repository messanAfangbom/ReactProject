import React, { useState} from 'react';


export function MessageDuJour() {
    const [Orateur, setOrateur] = useState('');
    const [texteBase, setTexteBase] = useState('');
    const [message, setMessage] = useState('');
    const [titreMessage, setTitreMessage] = useState('');
    const [ready, setReady] = useState(false);

    return (
        <div>
            <div>
                <p>
                    <label htmlFor="orateur">Orateur du jour</label>
                    <input id="orateur" type="text" onChange={(e) => setOrateur(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="titreMessage">Titre du message</label>
                    <input type="text" id="titreMessage" onChange={(e) => setTitreMessage(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="texteBase">Texte de Base</label>
                    <input type="text" id="texteBase" onChange={(e) => setTexteBase(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <input id="message" type="text" onChange={(e) => setMessage(e.target.value)} />
                </p>
                <p>
                    <button type="submit" onClick={
                        () => {
                            setReady(true);
                        }
                    }>Publier</button>
                </p>
            </div>
            {
                ready &&
                <div id="affichageDuMessage">
                    <p> Notre orateur du jour est  <span>{Orateur}</span></p>.
                    <p>Le titre de son message est {titreMessage} et il est basé sur ce passage: {texteBase}. </p>
                    <div> Voici son message : {message}</div>
                </div>
            }
        </div>

    )
}