import { configFilesMap } from '../../../config/config-files-map';

describe('configFilesMap', () => {

  it('instance should have \'dev\' key', () => {
    expect(configFilesMap.has('dev')).toBe(true);
  });

  it('instance should have \'localapis\' key', () => {
    expect(configFilesMap.has('localapis')).toBe(true);
  });

  it('instance should have \'beta\' key', () => {
    expect(configFilesMap.has('beta')).toBe(true);
  });

  it('instance should have \'production\' key', () => {
    expect(configFilesMap.has('production')).toBe(true);
  });
});