import React from 'react';
import timeago from 'timeago.js';
import {IMoment} from '../models/Moment';

interface IProps {
  moment: IMoment;
}
export default class Moment extends React.Component<IProps> {
  renderImages() {
    return this.props.moment.images.map((imageUrl, index) => (
      <img key={`moment-image-${index}`} src={imageUrl} />
    ));
  }

  renderText() {
    return <p>{this.props.moment.text}</p>;
  }
  renderDateTime() {
    return (
      <span className="weui-media-box__info__meta">
        {timeago().format(this.props.moment.dateTime, 'zh_CN')}
      </span>
    );
  }
  render() {
    return (
      <a href="javascript:;" className="weui-media-box weui-media-box_appmsg">
        <div className="weui-media-box__hd">
          <img
            className="weui-media-box__thumb"
            src={this.props.moment.user.avatar}
            alt={this.props.moment.user.username}
          />
        </div>
        <div className="weui-media-box__bd">
          <h4 className="weui-media-box__title">
            {this.props.moment.user.username}
          </h4>
          {this.props.moment.text && (
            <div className="weui-media-box__desc">{this.renderText()}</div>
          )}
          {this.props.moment.images && this.renderImages()}
          <div className="weui-media-box__info">
            <span>{this.renderDateTime()}</span>
            <span>
              <i className="weui-icon-search" />
            </span>
          </div>
        </div>
      </a>
    );
  }
}
