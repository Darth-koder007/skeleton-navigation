import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { PLATFORM } from 'aurelia-pal';
import bootstrapper from 'aurelia-ssr-bootstrapper-webpack';

async function configure(aurelia) {
  aurelia.use
    .standardConfiguration();

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}

module.exports = bootstrapper(configure);