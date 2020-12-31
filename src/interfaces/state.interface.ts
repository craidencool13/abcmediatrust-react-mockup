import { ILocationState } from './location.interface';
import { IModalState } from './modal.interface';
import { IAlertState } from './alert.interface';

export interface IAppState {
  location: ILocationState;
  modal: IModalState;
  alert: IAlertState;
}