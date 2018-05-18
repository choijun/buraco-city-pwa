import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
    color: 'white'
}

class LoginButton extends Component{

    render() {
        return (
          <FlatButton {...this.props} style={style} label="Login" />
        );
    }  

}

export default LoginButton;