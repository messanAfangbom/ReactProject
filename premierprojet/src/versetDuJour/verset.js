import React from 'react'


export class Verset extends React.Component {

    constructor(props) {
        super(props);
        this.state = { verset: 'Matthieu 6:11 - Donne nous aujourd\'hui notre pain quotidien' };
    }

    componentDidMount() {
        this.versetID = setInterval(
            () => this.getVerset(),
            10000
        );
    }
    componentWillUnmount() {
        clearInterval(this.versetID);
    }

    render() {
        return (
            <div>
                <h1> Voici le verset du jour !!</h1>
                <div>
                    <p>{this.state.verset}</p>
                </div>
            </div>

        )
    }

    getVerset() {
        this.setState({
            verset: this.getNewVerset()
        })
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getNewVerset() {
        let listeVerset = [
            'Jean 3:16 - Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.',
            'Jean 3:36 - Celui qui croit au Fils a la vie éternelle; celui qui ne croit pas au Fils ne verra point la vie, mais la colère de Dieu demeure sur lui.',
            'Romains 10:10 - En effet, c\'est avec le cœur que l\'on croit et parvient à la justice, et c\'est avec la bouche que l\'on affirme une conviction et parvient au salut, comme le dit l\'Ecriture.',
            'Luc 19:10 - En effet, le Fils de l\'homme est venu chercher et sauver ce qui était perdu.',
            'Marc 16:16 - Celui qui croira et qui sera baptisé sera sauvé, mais celui qui ne croira pas sera condamné',
            'Hebreux 9:28 - De même, Christ s\'est offert une seule fois pour porter les péchés de beaucoup d\'hommes, puis il apparaîtra une seconde fois, sans rapport avec le péché, à ceux qui l\'attendent pour leur salut.',
            '1 Corinthiens 15:22 -Et comme tous meurent en Adam, de même aussi tous revivront en Christ.',
            'Romains 5:10 - En effet, si nous avons été réconciliés avec Dieu grâce à la mort de son Fils lorsque nous étions ses ennemis, nous serons à bien plus forte raison sauvés par sa vie maintenant que nous sommes réconciliés.',
            'Jeremie 31:3 - De loin l\'Eternel se montre à moi: Je t\'aime d\'un amour éternel; C\'est pourquoi je te conserve ma bonté.'
        ];
        let i = this.getRandomIntInclusive(0, listeVerset.length);
        return listeVerset[i];
    }
}
