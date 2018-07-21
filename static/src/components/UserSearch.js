import React, { Component } from 'react';

import './UserSearch.css';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      params: ''
    }

    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(event) {
    let data = event.target.value;
    if (event.target.name === "params") {
      this.setState({params: data});
    }
  }

  render() {
    return (
      <div>
      {/* <form onSubmit={(event)=>{event.preventDefault(),this.props.search(this.state.params)}} className="UserSearch">
        <div className="searchFormField">
          <label htmlFor="input">Input?</label>
          <input name="params" type="text" className="form-control" id="input" placeholder="params" value={this.state.params} onChange={this._handleInput} required/>
        </div>

          <button type="submit" className="btn btn-primary">Search</button>
      </form> */}


        <div class="row">
          <form class="col s12">
            <div class="row UserSearch" onSubmit={(event)=>{event.preventDefault(),this.props.search(this.state.params)}} >
              <div class="input-field col s6">
                <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.params} onChange={this._handleInput} required/>
                <label for="input_text">User Search</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="input_text" type="text" placeholder="" data-length="120" value={this.state.params} onChange={this._handleInput} required/>
                <label for="input_text">Album Search</label>
              </div>
            </div>
            <button type="submit" className="waves-effect waves-light red lighten-2 btn">Search</button>
          </form>
        </div>

</div>


// {/* <div>
//       <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
//
//       <div id="modal1" class="modal">
//         <div class="modal-content">
//
//       <div class="row">
//   <form class="col s12">
//     <div class="row">
//       <div class="input-field col s6">
//         <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
//         <label for="first_name">First Name</label>
//       </div>
//       <div class="input-field col s6">
//         <input id="last_name" type="text" class="validate"/>
//         <label for="last_name">Last Name</label>
//       </div>
//     </div>
//     <div class="row">
//       <div class="input-field col s12">
//         <input disabled value="I am not editable" id="disabled" type="text" class="validate"/>
//         <label for="disabled">Disabled</label>
//       </div>
//     </div>
//     <div class="row">
//       <div class="input-field col s12">
//         <input id="password" type="password" class="validate"/>
//         <label for="password">Password</label>
//       </div>
//     </div>
//     <div class="row">
//       <div class="input-field col s12">
//         <input id="email" type="email" class="validate"/>
//         <label for="email">Email</label>
//       </div>
//     </div>
//     <div class="row">
//       <div class="col s12">
//         This is an inline input field:
//         <div class="input-field inline">
//           <input id="email_inline" type="email" class="validate"/>
//           <label for="email_inline">Email</label>
//           <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
//         </div>
//       </div>
//     </div>
//   </form>
// </div>
//  </div>
//   <div class="modal-footer">
//  <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
// </div>
// </div>
// </div> */}

    );
  }
}

export default UserSearch;
