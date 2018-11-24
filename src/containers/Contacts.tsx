import React from 'react';

export default class Contacts extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-navbar">
          <div className="weui-navbar__item">通讯录</div>
        </div>
        <div style={{paddingTop: '60px', backgroundColor: 'white'}} />
      </div>
    );
  }
}
