import React, { Component } from 'react';

import './UserSearch.css';

const URL     = "http://127.0.0.1:8000/"
const URLPROD = "https://morning-beyond-85234.herokuapp.com/"

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSearch: '',
      albumSearch: '',
      album: {},
    }

    this._handleInput = this._handleInput.bind(this);
    this._getAlbumResults = this._getAlbumResults.bind(this);
    // this._getUserResults = this._getUserResults.bind(this);
  }

  _handleInput(event) {
    let obj =  {}
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);
  }

  // function to search users to show their collections - incomplete
  // _getUserResults(id) {
  //   let self = this;
  //   let user =
  //
  //   fetch('http://localhost:8000/album/')
  //   .then(function(response){
  //     if(!response.ok){
  //       throw Error(response.statusText);
  //     }
  //     return response.json()
  //   })
  //   .then(function(responseJSON){
  //     console.log('response', responseJSON)
  //     self.setState({users: responseJSON.users});
  //   })
  //   .catch(function(error){
  //     console.log('Looks like there was a problem: \n', error);
  //   });
  // }

// search for all albums - show what users have each album - incomplete
  _getAlbumResults(searchParams) {
    let self = this;
    fetch(`${URL}album/?artist=${searchParams.artistSearch}`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    })
    .then(function(response){
      if(!response.ok){
        throw Error(response.statusText);
      }
      // console.log(response.json())
      return response.json()
    })
    .then(function(responseJSON){
      console.log('response', responseJSON);
      self.setState({album: responseJSON.album})
    })
    .catch(function(error){
      console.log('Looks like there was a problem \n,', error)
    });
  }

  render() {
    return (

      // search users to show their collections
        <form className="col s12">
      {/* <div className="row" onSubmit={(event)=>{event.preventDefault(); this.props._getUserResults(this.state)}}>

          <div className="row userSearch" onSubmit={(event)=>{event.preventDefault(), this.props.search(this.state.params)}}>
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.userSearch} name='userSearch' onChange={this._handleInput}/>
              <label htmlFor="input_text">User Search</label>
            </div>
                <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Search</button>
          </div> */}

        {/* search all albums to show which users have the album */}
          <div className="row" onSubmit={(event)=>{event.preventDefault(), this.props.search(this.state.params), this.props._getAlbumResults(this.state)}}>
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.albumSearch} name='albumSearch' onChange={this._handleInput}/>
              <label htmlFor="input_text">Album Search</label>
            </div>
              <button type="submit" className="waves-effect waves-light red lighten-2 btn-small">Search</button>
          </div>


      {/* </div> */}
      </form>
    );
  }
}

export default UserSearch;
