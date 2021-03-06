import Aurelia, { RouterConfiguration, StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import shared from './shared.scss';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  .register(RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
