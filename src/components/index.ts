import { container } from './containermax';
import { button } from './button';
import { card } from './card';
import { content } from './content';
import { videoContainer } from './videoContainer';

export const components = (pluginAPI: any) => {
  container(pluginAPI);
  button(pluginAPI);
  card(pluginAPI);
  content(pluginAPI);
  // videoContainer(pluginAPI);
};

// import { PluginAPI } from 'tailwindcss/types/config';

// export const components = ({ addComponents, theme }: PluginAPI) => {
//   addComponents({




//     // Hero component
//     '.hero-image':{
//       borderTopColor: theme('colors.green.500', '#1E293B'),
//       borderTopWidth: '1rem'
//     },

//     '.hero figure::before': {
//       content: '""',
//       display: 'block',
//       position: 'absolute',
//       top: '0',
//       left: '0',
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgba(0, 0, 0, 0.7)',
//       zIndex: '1',
//     },

//     '.hero figure img': {
//       zIndex: '0',
//     },

//     '.hero figure+div':{
//       color: theme('colors.white', '#FFFFFF'),
//     }

//   });
// };
