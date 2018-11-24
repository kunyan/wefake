import React from 'react';
import DiscoverList from '../components/DiscoverList';

export default class Discover extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-navbar">
          <div className="weui-navbar__item">发现</div>
        </div>
        <div style={{paddingTop: '60px'}}>
          <DiscoverList />
        </div>
      </div>
    );
  }
}
