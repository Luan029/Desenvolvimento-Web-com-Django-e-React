import React from "react";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '', password: '' };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChange(event) {
        this.setState({ login: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <h2>Pagina Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Login:
                        <input type="text" value={this.state.login} onChange={this.handleChange} />
                    </label> <br />
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        );
    }
}
export default Login