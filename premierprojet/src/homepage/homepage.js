import React from 'react'
export class Homepage extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p> Bienvenue sur notre page !! </p>
                <p>
                    <button type="button"  onClick={this.SeDeconnecter}>Se Deconnecter</button>
                </p>
            </div>
        )
    }

    SeDeconnecter = (event) => {
        document.location = '/';
    }

}