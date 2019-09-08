import React, { Component } from 'react'
import './Auth.css'
import axios from 'axios'



export default class Auth extends Component {
    constructor(){
        super()

        this.state = {
            display:true,
            username: '',
            password: '',
            profile_pic: '',
            error:false,
            errorMessage:''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    login = () => {
        const {username,password} = this.state;

        axios.post('/auth/login', {username,password}).then(response => {
            if(this.state.error !== true)
            this.props.history.push('/dashboard')
        })
        .catch((err) => {
            this.setState({
                error:true,
            
            })
            setTimeout(() => {this.setState({
                error:false,
                errorMessage:'',
            })},3000)
        })
    }


    register = () => {
        const {username,password} = this.state;

        axios.post('/auth/register', {username,password}).then(res => {
            this.props.history.push('/dashboard')
            console.log(this.props.history)
        })
        .catch((err) => {
           this.setState({
               error:true,
               errorMessage:err.response.data
           })
           setTimeout(() => {this.setState({
            error:false,
            errorMessage:'',
        })},3000)
           
        })
    }

    render() {
        return (
            <div className="auth-page">
                {
                    this.state.error ?
                    (
                        <div className="error">
                            {this.state.errorMessage}
                        </div>
                    )
                    :
                    null
                }
                <div className="stuff-border">
                    <h1>Helo</h1>
                    <div>
                     <label>Username:</label>
                     <input name = "username"
                             type = 'text'
                             value = {this.state.username}
                            onChange = {this.handleChange} />
                    </div>
                    <div>
                        <label>Password:</label>
                         <input name = "password"
                             type = 'password'
                             value = {this.state.password}
                            onChange = {this.handleChange} />
                    </div>
                    <div className="buttons">
                        <button className="btn" onClick={this.login}>Login</button>

                        <button className="btn" onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}
