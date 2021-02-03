import development from './development';
import production from './production';
import defaultConfig from './defaultConfig';

const configMap = {
  development,
  production,
};

export default Object.assign(defaultConfig, configMap['development']);
