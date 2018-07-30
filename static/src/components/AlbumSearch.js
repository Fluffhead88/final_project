import React, { Component } from 'react';
import './AlbumSearch.css';

class AlbumSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistSearch: '',
      albumSearch: ''
    }
  this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(event) {
    let obj =  {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (

      // search for albums to add to users collection - search takes album and artist
      <div className="row" onSubmit={(event)=>{event.preventDefault(); this.props.getSearchResults(this.state)}}>
        <form className="col s12">
          <div className="row artistSearch">
            <div className="input-field col s6">
              <input id="input_text_1" type="text" placeholder="" data-length="120" value={this.state.artistSearch} name='artistSearch' onChange={this._handleInput}/>
              <label htmlFor="input_text">Artist Search</label>
            </div>
          </div>
          <div className="row albumSearch" onSubmit={(event)=>{event.preventDefault(), this.props.search(this.state.params)}} >
            <div className="input-field col s6">
              <input id="input_text_2" type="text" placeholder="" data-length="120" value={this.state.albumSearch} name='albumSearch' onChange={this._handleInput} required/>
              <label htmlFor="input_text">Album Search</label>
            </div>
          </div>
          <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Search</button>
        </form>
      </div>
    );
  }
}

export default AlbumSearch;
