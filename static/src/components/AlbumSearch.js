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

      <div class="row">
        <form class="col s12">
          <div class="row UserSearch" onSubmit={(event)=>{event.preventDefault(),this.props.search(this.state.params)}} >
            <div class="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.artistSearch} onChange={this._handleInput}/>
              <label for="input_text">Artist Search</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.albumSearch} onChange={this._handleInput} required/>
              <label for="input_text">Album Search</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light red lighten-2 btn">Search</button>
        </form>
      </div>


    );
  }
}

export default AlbumSearch;
