import plugin from 'tailwindcss/plugin';
import { base } from './base';
import { utilities } from './utilities';
import { components } from './components';
import { generateColorUtilities } from './colors';
import { themeExtend } from './theme';

export default plugin(function (options) {
    base(options);
    utilities(options);
    components(options);
    generateColorUtilities(options);
  }, {
    theme: {
      extend: themeExtend,
    }
  }
);
