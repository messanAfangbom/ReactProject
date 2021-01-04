import React from 'react'

export class Login extends React.Component {
    state =
        {
            username: '',
            password: ''
        }
    // static propTypes = {
    //     /* typer attributs */
    // }
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUsername} />
                </p>

                <p>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" value={this.state.password} onChange={this.handlePassword} />
                </p>
                <p>
                    <button type="submit" onClick={this.SeConnecter}>Se connecter</button>
                </p>
            </div>
        )
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    SeConnecter = (event) => {
        if (this.state.username === 'test' && this.state.password === 'test1234') {

            document.location = '/Page_Accueil';
        }
    }
}