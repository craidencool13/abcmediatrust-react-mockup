export interface IAlertContent {
  title?: string,
  message?: string,
}

export interface IAlertParams {
  visible?: boolean,
  alertContent?: IAlertContent,
}

export interface IAlertState {
  visible: boolean,
  alertContent?: IAlertContent,
}