// import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const style = {
  width: '100%',
  height: 300,
  borderWidth: 3,
  borderColor: '#bbb',
  borderStyle: 'dashed',
  borderRadius: 5,
  textAlign: 'center',
  lineHeight: '300px',
  fontSize: '40px',
  color: '#bbb',
  fontFamily: 'sans',
  letterSpacing: '2px'
};

export default React.createClass({
  getInitialState: function () {
    return {
      files: []
    };
  },
  onDrop: function (files) {
    console.log('Received files: ', files);
    this.setState({
      files: files
    });
    files.forEach(f => {
      console.log(f);
      var req = request.post(this.props.uploadUrl);
      files.forEach((file) => {
        req.attach('file', file);
      });
      req.end((err)=>{
        this.setState({files: []});
        console.log(err);
        console.log(arguments);
      });
    });
  },

  render: function () {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} multiple={false} style={style}>
          {
            this.state.files.length > 0 ?
            <div>{this.state.files.length} coming up...</div> :
            <div>Dropzone</div>
          }
        </Dropzone>
      </div>
    );
  }
});


// export default window.Dropage;

//React.render(<DropzoneDemo />, document.body);
