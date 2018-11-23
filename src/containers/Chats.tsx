import React from 'react';
import ChatItemList from '../components/ChatItemList';
import {IChat} from '../models/Chat';
import SearchBar from '../components/SearchBar';

export default class Chats extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-navbar">
          <div className="weui-navbar__item">微信</div>
        </div>
        <div style={{paddingTop: '60px', backgroundColor: 'white'}}>
          <SearchBar />
          <ChatItemList />
        </div>
      </div>
    );
  }
}
