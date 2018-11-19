import React from "react";
import { IMoment } from "../models/Moment";
import Moment from "./Moment";

interface IProps {
  moments: IMoment[];
}
export class Moments extends React.Component<IProps> {
  renderBody() {
    return this.props.moments.map((moment: IMoment, index: number) => (
      <Moment key={`moment-${index}`} moment={moment} />
    ));
  }
  render() {
    return (
      <div className="weui-panel weui-panel_access">
        <div className="weui-panel__bd">{this.renderBody()}</div>
      </div>
    );
  }
}
