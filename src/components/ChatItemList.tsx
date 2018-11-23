import React from 'react';
import ChatItem from '../components/ChatItem';
import {IChat} from '../models/Chat';

const chats: IChat[] = [
  {
    content: 'Today is a good day',
    dateTime: new Date(),
    user: {
      avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
      username: 'Jim',
    },
  },
  {
    content: 'Today is a good day',
    dateTime: new Date(),
    user: {
      avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
      username: 'Tom',
    },
  },
  {
    content: 'Today is a good day',
    dateTime: new Date(),
    user: {
      avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
      username: 'Mike',
    },
  },
];
export default class ChatItemList extends React.PureComponent {
  render() {
    return chats.map((chat: IChat, index: number) => (
      <ChatItem key={`chat-${index}`} chat={chat} />
    ));
  }
}
