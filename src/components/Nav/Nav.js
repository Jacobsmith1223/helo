import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Nav.css'


class Nav extends Component {
    constructor(){
        super()
        
        this.state = {

        }
    }
    

    
    render() {
        console.log(this.props)
        if(this.props.pathname === '/'){
            return null
        }else{
        return (
            <div className="nav">
                <p>{this.props.username}</p>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>
            </div>
        )
    }
}
}


function mapStateToProps(state){
    return state
    
}

export default connect(mapStateToProps)(Nav)