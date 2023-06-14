import { ConfigInterface } from './models/Config.interface';

import configDev from './config-files/dev.json';
import configLocal from './config-files/localapis.json';
import configBeta from './config-files/beta.json';
import configProduction from './config-files/production.json';

export const configFilesMap: Map<string, ConfigInterface> = new Map<string, ConfigInterface>([
  ['dev', configDev],
  ['localapis', configLocal],
  ['beta', configBeta],
  ['production', configProduction],
]);