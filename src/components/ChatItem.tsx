import React from 'react';
import timeago from 'timeago.js';
import {IChat} from '../models/Chat';
interface IProps {
  chat: IChat;
}
export default class ChatItem extends React.Component<IProps> {
  renderContent() {
    if (this.props.chat.content) {
      return <p>{this.props.chat.content}</p>;
    }
  }
  render() {
    return (
      <a href="javascript:;" className="weui-media-box weui-media-box_appmsg">
        <div className="weui-media-box__hd">
          <img
            className="weui-media-box__thumb"
            src={this.props.chat.user.avatar}
            alt={this.props.chat.user.username}
          />
        </div>
        <div className="weui-media-box__bd">
          <h4 className="weui-media-box__title">
            {this.props.chat.user.username}
          </h4>
          {this.renderContent()}
        </div>
      </a>
    );
  }
}
