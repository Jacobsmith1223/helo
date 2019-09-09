import React, { Component } from 'react'
import Post from './../Post/Post'


export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts:[],
            search:'',
            myPosts:true,
            

        }
    }
    render() {

        const mappedPosts = this.state.posts.map((e, i) => {
            return <Post key = {i} posts = {e} />
        })

        return (
            <div>
                <input type="text" />
                <button>Search</button>
                <button>Reset</button>
                <input type = "checkbox">My Posts</input>
                {mappedPosts}
            </div>
        )
    }
}
