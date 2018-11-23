import {IComment} from './Comment';
import {IUser} from './User';
import {ILike} from './Like';

export interface IMoment {
  user: IUser;
  text?: string;
  images?: string[];
  dateTime: any;
  comments?: IComment[];
  likes?: ILike[];
}
