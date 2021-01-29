const initialState = {annonces:[{
    id:1,
        title: 'ballon-algérie',
        description: 'Je vends ce ballon acheté il ya 15 jours mais jamais utilié',
        location: 'Bordeaux',
        postalCode: '33000',
        price: '15',
        date: 'Aujourd\'hui a 20:00',
        linkPicture: require('E:/React/go/resources/ballons/ballon_algerie.png')
    },
    {
        id:2,
        title: 'Maillot Psg',
        description: 'Ici c\'est Paris',
        location: 'Merignac',
        postalCode: '33700',
        date: 'Lundi à 14:22',
        linkPicture: require('E:/React/go/resources/maillots/maillot_psg.png')
    },
    {
        id:3,
        title: 'ballon-france',
        description: 'Je vends ce ballon qui a été offert par mon père mais que je n\'aime pas',
        location: 'Pessac',
        postalCode: '33600',
        price: '35',
        date: 'Hier à 08:42',
        linkPicture: require('E:/React/go/resources/ballons/ballon_france.png')
    },
    {
        id:4,
        title: 'Maillot Millan',
        description: 'Maillot de millanc Ac nicquel.',
        location: 'Gradignan',
        postalCode: '33170',
        date: 'Jeudi à 8:49',
        linkPicture: require('E:/React/go/resources/maillots/maillot_Millan/maillot_AcMillan1.png')
    },
    {
        id:5,
        title: 'ballon-premier_league',
        description: 'Ballon du meilleur des championnats',
        location: 'Villenave d\'ornon',
        postalCode: '33140',
        date: 'Samedi à 15:18',
        linkPicture: require('E:/React/go/resources/ballons/ballon_nike_premierLeague.png')
    },
    {
        id:6,
        title: 'Maillot Juventus',
        description: 'Le vrai, pour les amoureux de la vielle dame',
        location: 'Gradignan',
        postalCode: '33170',
        date: 'Dimanche à 7:39',
        linkPicture: require('E:/React/go/resources/maillots/maillot_juventus.jpg')
    }
]}
function ListAnnonce(state=initialState, action)
{
    switch (action.type) {
        default:
            return state;
    }

}

export default ListAnnonce;