import React, { Component } from 'react';

import './AlbumSearch.css';

class AlbumSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: ''
    }

    this._handleInput = this._handleInput.bind(this)
  }

  _handleInput(event) {
    let data = event.target.value;
    if (event.target.name === "params") {
      this.setState({params: data});
    }
  }

  render() {
    return (
      <form onSubmit={(event)=>{event.preventDefault(),this.props.search(this.state.params)}} className="AlbumSearch">
        <div className="AlbumSearch">

          <label htmlFor="artistSearch">Enter Artist</label>
          <input name="artistSearch" type="text" className="form-control" id="artistSearch" placeholder="Artist" value={this.state.artistSearch} onChange={this._handleInput}/>


          <label htmlFor="albumSearch">Enter Album</label>
          <input name="albumSearch" type="text" className="form-control" id="albumSearch" placeholder="Album" value={this.state.albumSearch} onChange={this._handleInput} required/>

        </div>

          <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }
}

export default AlbumSearch;
