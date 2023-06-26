import { useElement, useLayout, useStaleLayout } from '@nebula.js/stardust';
import createDataDefinition from './qae/data-definition';
import properties from './qae/initial-properties';
import ext from './ext';
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties,
      data: createDataDefinition(galaxy),
    },
    ext: ext(galaxy),
    component() {
      const staleLayout = useStaleLayout();
      const layout = useLayout();

      console.log(staleLayout.qHyperCube.qPivotDataPages[0], 'stale layout datapages');
      console.log(layout.qHyperCube.qPivotDataPages[0], 'layout datapages');

      const element = useElement();
      element.innerHTML = "<div>Hello!</div>"; // eslint-disable-line
    },
  };
}
