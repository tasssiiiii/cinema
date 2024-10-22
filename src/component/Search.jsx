import React, { Component } from "react";

class Search extends Component {

    state = {
        search: '',
        type: 'all',
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchFilm(this.state.search, this.state.type)
        }
    }
  render() {
    return (
      <div className="row">
        <div className="col s12" style={{display: "flex", alignItems: "center"}}>
          <input 
          className="validate" 
          placeholder="Search" 
          type="search" 
          value={this.state.search}
          onChange={(e) => this.setState({search:e.target.value})}
          onKeyDown={this.handleKey}
          />

          {/* кнопка поиска  */}

        <button className="btn_search"
            onClick={() => this.props.searchFilm(this.state.search, this.state.type)}>
            Search
        </button>
        </div>
        <div>
            <label>
                <input class="with-gap" 
                name="group3" 
                type="radio" checked />
                <span>All</span>
            </label>
            <label>
                <input class="with-gap" 
                name="group3" 
                type="radio" checked />
                <span>Movies</span>
            </label>
            <label>
                <input class="with-gap" 
                name="group3" 
                type="radio" checked />
                <span>Series</span>
            </label>
        </div>
        </div>
    );
  }
}

export { Search };
