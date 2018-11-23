import {IUser} from './User';

export interface IChat {
  user: IUser;
  content: string;
  dateTime: any;
}
