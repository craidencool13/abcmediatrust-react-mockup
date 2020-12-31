export interface IModalContent {
  title?: Array<string>,
  content?: Array<string>,
  buttons?: Array<IModalButton>,
}

export interface IModalButton {
  label?: string,
  onClick(): any,
  variant: string,
}

export interface IModalParams {
  visible?: boolean,
  modalContent?: IModalContent,
}

export interface IModalState {
  visible: boolean,
  modalContent?: IModalContent,
}