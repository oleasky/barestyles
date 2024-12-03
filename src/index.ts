import plugin from 'tailwindcss/plugin';
import { base } from './base';
import { utilities } from './utilities';
import { components } from './components';

export default plugin(function (options) {
  base(options);
  utilities(options);
  components(options);
});
