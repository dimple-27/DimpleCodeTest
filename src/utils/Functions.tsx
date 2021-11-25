import Moment from 'moment';

export const timeConvert = (timeStamp: string,format:string) => {
  let time = Moment(timeStamp).format(format);
  return time;
};