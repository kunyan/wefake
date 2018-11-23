import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import {Moments} from './components/Moments';
import {IMoment} from './models/Moment';
import {IUser} from './models/User';

import './styles/init.css'
import 'weui/dist/style/weui.css';
import './styles/main.css';

const user: IUser = {
  avatar: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2KriyDK.png',
  username: 'Jim',
};
const data: IMoment[] = [
  {
    dateTime: new Date('2018-11-18'),

    text:
      '早晨一女生背着一堆书出了图书馆，结果警报响了，大妈让女生看看是哪本书把警报弄响了，那女生把书倒出来，准备一本一本的测。大妈见状急了，把书分成两份，第一份过了一下，响了。又把这一份分成两份接着测，三回就找到了，大妈用鄙视的眼神看着女生，仿佛在说O(n)和O(logn)都分不清。',
    user,
  },
  {
    dateTime: new Date(),
    text: 'Hello world',
    user,
  },
];

const dom = document.getElementById('root');

if (dom) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
