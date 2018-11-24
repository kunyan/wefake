import React from 'react';
import {Link} from 'react-router-dom';
import {IUser} from '../models/User';

interface IProps {
  user: IUser;
}
export default class ContactItem extends React.PureComponent<IProps> {
  render() {
    return (
      <Link to="" className="weui-cell weui-cell_access">
        <div className="weui-cell__hd">
          <img
            className="menu-icon"
            src={this.props.user.avatar}
            alt={this.props.user.username}
          />
        </div>
        <div className="weui-cell__bd">
          <p>{this.props.user.username}</p>
        </div>
      </Link>
    );
  }
}
