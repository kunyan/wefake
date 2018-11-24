import React from 'react';
import {Link} from 'react-router-dom';
import IconAlbum from '../images/w-profile-album.svg';
import IconEmoj from '../images/w-profile-emoj.svg';
import IconCollection from '../images/w-profile-collection.svg';
import IconSetting from '../images/w-profile-setting.svg';
import IconVip from '../images/w-profile-vip.svg';
import IconWallet from '../images/w-profile-wallet.svg';

export default class MeList extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconWallet className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>钱包</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconCollection className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>收藏</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconAlbum className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>相册</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconVip className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>卡包</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconEmoj className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>表情</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
        <div className="weui-cells__title" />
        <div className="weui-cells">
          <Link to="" className="weui-cell weui-cell_access">
            <div className="weui-cell__hd">
              <IconSetting className="menu-icon" />
            </div>
            <div className="weui-cell__bd">
              <p>设置</p>
            </div>
            <div className="weui-cell__ft" />
          </Link>
        </div>
      </div>
    );
  }
}
