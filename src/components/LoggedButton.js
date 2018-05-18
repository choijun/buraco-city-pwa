import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class LoggedButton extends Component{

    constructor(props) {
        super(props);

        console.log(this.props)
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={
                <IconButton><MoreVertIcon color='white'/></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" onClick={this.props.logout}/>
            </IconMenu>
        );
    }
}

export default LoggedButton;