import React from 'react';
import {IUser} from '../models/User';
import ContactItem from './ContactItem';

const contacts: IUser[] = [{
  avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
  username: '马云',
},
{
  avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
  username: '马化腾',
},
{
  avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
  username: '李彦宏',
},
{
  avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
  username: '刘强东',
}];
export default class ContactList extends React.PureComponent {
  render() {
    return contacts.map((user: IUser) => (
      <ContactItem user={user}/>
    ))
  }
}
