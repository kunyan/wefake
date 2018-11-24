import React from 'react';
import ContactList from '../components/ContactList';

export default class Contacts extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-navbar">
          <div className="weui-navbar__item">通讯录</div>
        </div>
        <div style={{paddingTop: '60px'}}>
          <ContactList />
        </div>
      </div>
    );
  }
}
