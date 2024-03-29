import React, { Component } from 'react';
import $ from 'jquery';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import './ProfileUpdateModal.css'
// import './ProfileUpdateModal.css';

// const URL     = "http://127.0.0.1:8000/"
const URL = "http://myrecordbin.com/"

class ProfileUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state={
      image:'',
      bio:''
    }

  // this._patchAddUserImage = this._patchAddUserImage.bind(this);
  this._handleInput = this._handleInput.bind(this);
  }
  _handleInput(event) {
  if (event.target.name === 'image'){
    let file = event.target.files[0];
    console.log('image_stuff1', file);
    this.setState({image:file});

    }
  }

  // _patchAddUserImage(event){
  //   event.preventDefault();
  //   let data = new FormData();
  //   // data.append('image', this.state.image);
  //   data.append('image', (this.state.image !== undefined ? this.state.image : ''));
  //   let token = sessionStorage.getItem('auth_token');
  //   let self = this;
  //   fetch(`${URL}users/${sessionStorage.getItem('auth_id')}/`,{
  //     method: 'PATCH',
  //     body: data,
  //     headers:{
  //       // 'Content-Type': 'multipart/form-data',
  //       'Authorization': token
  //     }
  //   })
  //   .then(function(response){
  //     console.log('image_stuff', response);
  //     self.setState({image: response.image});
  //     // console.log('IMAGE', this.user.image)
  //     // this.setState({'image': response.image})
  //   })
  //   .catch(function(error){
  //     console.log('Looks like there was a problem \n,', error)
  //   });
  // }

// allows modal to open and close
  componentDidMount(options) {
    var elems = document.querySelectorAll('.modal');
    var instances = Materialize.Modal.init(elems, options);
  }

  render() {
    return (
      <div>

      {/* // <!-- Modal Trigger --> */}
      {/* button that triggers modal for adding image */}
        <a href="#modal3" id="profile_update" className="add_pic waves-effect waves-light red lighten-2 btn-small modal-trigger">Add Pic</a>
         {/* // <!-- Modal Structure --> */}
         <div id="modal3" className="modal image_modal">
           <div className="row">
             <div className="modal-content">
               <form onSubmit={(event)=>{event.preventDefault();this.props.patchAddUserImage(this.state.image, this.state.preview)}} encType='multipart/form-data'>
                <input name="image" type="file" id="image" onChange={this._handleInput} />
                <button type="submit" className="modal-close waves-effect waves-light red lighten-2 btn-small">Submit</button>
               </form>
             </div>
           </div>
         </div>
       </div>
    )
  }
}

export default ProfileUpdateModal;
