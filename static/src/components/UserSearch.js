import React, { Component } from 'react';

import './UserSearch.css';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: '',
      albumSearch: '',
    }

    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(event) {
    let data = event.target.value;

    let obj =  {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);
  }
  _getUserResults(searchParams) {
    let self = this;


    fetch(`http://localhost:8000/album/proxy/?artist=${searchParams.artistSearch}&album=${searchParams.albumSearch}`)
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then(function(responseJSON){
      console.log('response', responseJSON)
      self.setState({album: responseJSON.album});
    })
    .catch(function(error){
      console.log('Looks like there was a problem: \n', error);
    });
  }

  _getAlbumResults(searchParams) {
    let self = this;


    fetch(`http://localhost:8000/album/proxy/?artist=${searchParams.artistSearch}&album=${searchParams.albumSearch}`)
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      return response.json()
    })
    .then(function(responseJSON){
      console.log('response', responseJSON)
      self.setState({album: responseJSON.album});
    })
    .catch(function(error){
      console.log('Looks like there was a problem: \n', error);
    });
  }

  render() {
    return (
      <div className="row" onSubmit={(event)=>{event.preventDefault(); this.props.getSearchResults(this.state)}}>
        <form className="col s12">
          <div className="row userSearch" onSubmit={(event)=>{event.preventDefault(), this.props.search(this.state.params)}}>
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.userSearch} name='userSearch' onChange={this._handleInput}/>
              <label htmlFor="input_text">User Search</label>
            </div>
                <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Search</button>
          </div>

          <div className="row" onSubmit={(event)=>{event.preventDefault(); this.props.getSearchResults(this.state)}}>
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.albumSearch} name='albumSearch' onChange={this._handleInput}/>
              <label htmlFor="input_text">Album Search</label>
            </div>
              <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Search</button>
          </div>

        </form>
      </div>
    );
  }
}

export default UserSearch;
