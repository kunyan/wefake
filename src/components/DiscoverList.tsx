import React from 'react';
import {Link} from 'react-router-dom';
import IconApp from '../images/w-explore-app.svg';
import IconGame from '../images/w-explore-game.svg';
import IconMoment from '../images/w-explore-friend.svg';
import IconScan from '../images/w-explore-sao.svg';
import IconShop from '../images/w-explore-shop.svg';

export default class DiscoverList extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconMoment className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>朋友圈</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconScan className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>扫一扫</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            看一看
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconShop className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>购物</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
          <Link to="" className="weui-cell weui-cell_access">
          <div className="weui-cell__hd">
              <IconGame className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>游戏</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconApp className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>小程序</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
      </div>
    );
  }
}
