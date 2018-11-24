import React from 'react';
import MeList from '../components/MeList';

export default class Me extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-navbar">
          <div className="weui-navbar__item">我</div>
        </div>
        <div style={{paddingTop: '60px', backgroundColor: 'white'}}>
          <MeList />
        </div>
      </div>
    );
  }
}
