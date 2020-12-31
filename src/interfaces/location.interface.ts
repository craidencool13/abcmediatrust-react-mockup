export interface ILocation {
  id?: number;
  location: string;
  description: string;
}

export interface ILocationResponse {
  locations: Array<ILocation>,
}

export interface IActiveLocationResponse {
  activeLocation: ILocation,
}

export interface ILocationState {
  locations: Array<ILocation>,
  activeLocation: ILocation,
  loading?: boolean,
  error?: any,
}
