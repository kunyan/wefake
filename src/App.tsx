import {createBrowserHistory} from 'history';
import React from 'react';
import {
  NavLink as Link,
  Route,
  Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import Chats from './containers/Chats';
import Contacts from './containers/Contacts';
import Discover from './containers/Discover';
import Me from './containers/Me';

import IconWechat from './images/w-icon-wechat.svg';
import IconContacts from './images/w-icon-contacts.svg';
import IconDiscover from './images/w-icon-discover.svg';
import IconProfile from './images/w-icon-profile.svg';

const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div className="container">
      <div className="page tabbar">
        <div className="page__bd" style={{height: '100%'}}>
          <div className="weui-tab">
            <div className="weui-tab__panel">
              <Switch>
                <Redirect path="/" exact={true} to="/chats" />
                <Route path="/chats" component={Chats} />
                <Route path="/contacts/" component={Contacts} />
                <Route path="/discover/" component={Discover} />
                <Route path="/me/" component={Me} />
              </Switch>
            </div>
            <div className="weui-tabbar">
              <Link
                to="/chats"
                className="weui-tabbar__item"
                activeClassName="weui-bar__item_on">
                <span style={{display: 'inline-block', position: 'relative'}}>
                  <IconWechat className="weui-tabbar__icon" />
                  <span
                    className="weui-badge"
                    style={{position: 'absolute', top: '-2px', right: '-13px'}}>
                    8
                  </span>
                </span>
                <p className="weui-tabbar__label">微信</p>
              </Link>
              <Link
                to="/contacts"
                className="weui-tabbar__item"
                activeClassName="weui-bar__item_on">
                <IconContacts className="weui-tabbar__icon" />
                <p className="weui-tabbar__label">通讯录</p>
              </Link>
              <Link
                to="/discover"
                className="weui-tabbar__item"
                activeClassName="weui-bar__item_on">
                <IconDiscover className="weui-tabbar__icon" />
                <p className="weui-tabbar__label">发现</p>
              </Link>
              <Link
                to="/me"
                className="weui-tabbar__item"
                activeClassName="weui-bar__item_on">
                <IconProfile className="weui-tabbar__icon" />
                <p className="weui-tabbar__label">我</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
