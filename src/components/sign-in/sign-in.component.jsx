import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your account</span>

                <form onSubmit={() => this.handleSubmit} >
                    <input name="email" type="email"
                    value={this.state.email} required 
                    onChange={this.handleChange}/>
                     <label>Email</label>
                    <input name="password" type="password"
                     value={this.state.password}
                     onChange={this.handleChange} />
                     <label>password</label>
                    
                     <input type="submit" value="submit Form"/>
                </form>

            </div>
        );
    }
}

export default SignIn;