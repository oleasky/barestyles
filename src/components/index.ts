import { container } from './containermax';
import { button } from './button';
import { card } from './card';
import { content } from './content';
import { videoContainer } from './videoContainer';
import { hero } from './hero';
import { highlight } from './highlight';

export const components = (pluginAPI: any) => {
  container(pluginAPI);
  button(pluginAPI);
  card(pluginAPI);
  content(pluginAPI);
  videoContainer(pluginAPI);
  hero(pluginAPI);
  highlight(pluginAPI);
};