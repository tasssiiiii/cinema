import React, { Component } from "react"
import { List } from '../component/List'
import { Preloader } from "../component/Preloader"
import { Search } from "../component/Search"

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {
        list: [],
        loading: true,
    }

    componentDidMount (){
        fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=80b4806f&s=Spider-man`)
        .then (res => res.json())
        .then (data => this.setState ({list:data.Search, loading: false}))
    }

    searchFilm = (str) => {
        fetch (`https://www.omdbapi.com/?i=tt3896198&apikey=80b4806f&s=${str}`)
        .then (res => res.json())
        .then (data => this.setState ({list:data.Search, loading: false}))
    }

    render() {

        const {list, loading} =this.state
        return (
            <main className="content">
                <Search searchFilm={this.searchFilm}/>
                {
                loading.length ? 
                <Preloader/>:
                <List list={list}/>          
                } 
            </main>
        )
    }
}

export { Main }