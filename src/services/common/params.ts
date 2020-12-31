import { Constants } from 'src/environment';
import { IAlertContent } from 'src/interfaces';

export const getModalParams = (type) => {

}

export const getAlertParams = (type): IAlertContent => {
  let title: string = '';
  let message: string = '';

  switch (type) {
    case Constants.ALERT.SUCCESS:
      title = 'Success!';
      message = 'Your changes was successfully submitted!';
      break;
    case Constants.ALERT.SUCCESS_REMOVE:
      title = 'Success!';
      message = 'You have successfully removed the location!';
      break;
    case Constants.ALERT.GENERIC_ERROR:
      title = 'Error!';
      message = 'Something went wrong!';
      break;
  }

  return { title, message };
}