import React from 'react';
import $ from 'jquery';
import Upload from './Upload';

export default class PictureUploader extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      picture: false,
      src: false
    }
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src     = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src
    });
  }

  renderPreview() {
    if(this.state.src) {
      return (
        <img style={{width: 150, height: 150}} src={this.state.src}/>
      );
    } else {
      return (
        <p>
          No Preview
        </p>
      );
    }
  }

  upload() {
    var formData = new FormData();

    formData.append("file", this.state.picture);

    $.ajax({
      url: "/some/api/endpoint",
      method: "POST",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        // Code to handle a succesful upload
      }
    });
  }

  render() {
    return (
      <div style={{paddingLeft:500, margin: 20,}}>
          
        <h5>Picture Uploader</h5>

        <input
          type="file"
          onChange={this.handlePictureSelected.bind(this)}
        />
        <br/>
        <div>
        {this.renderPreview()}
        </div>
        
        <label>Name</label>
                    <input style={{margin:21, width:315,marginLeft: 85}}
                        placeholder=''
                        type="text"
                    />
                    <br/>
                    <label>SurName</label>
                    <input  style={{margin:10, width:315,marginLeft: 65}}
                        placeholder=''
                        type="text"
                    />
                    <br/>
                    <label>Email</label>
                    <input style={{margin:10, marginLeft: 95, width:315}}
                        placeholder=''
                        type="text"
                    />
                    <br/>
        {/* <button
          onClick={this.upload.bind(this)}                   
        >
          Upload    
        </button> */}
        <Upload/>   
      </div>
    );
  }
}