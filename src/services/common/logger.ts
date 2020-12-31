import { SystemParams } from 'src/environment';
import { LogParams } from 'src/interfaces';

export const Logger = {
  log: (message, params = {}): LogParams => {

    if (!SystemParams.LOGGING) return;

    console.log(message, { ...params });
  },

  warn: (message, params = {}): LogParams => {

    if (!SystemParams.LOGGING) return;

    console.warn(message, { ...params });
  },

}