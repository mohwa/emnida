import { DEV_SERVER } from '../../build/utils';

module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: 'tests/e2e/reports',
  // custom_commands_path: ['tests/e2e/custom-commands'],

  test_runner: 'mocha',

  // Selenium Server is running locally and is managed by Nightwatch
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    cli_args: {
      'webdriver.gecko.driver': require('geckodriver').path,
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : '',
    },
  },

  test_settings: {
    default: {
      launch_url: `http://${DEV_SERVER.HOST}:${DEV_SERVER.PORT}`,
      silent: true,
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['headless', 'disable-gpu', 'disable-dev-shm-usage', 'no-sandbox'],
        },
      },
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
        args: ['headless', 'disable-gpu', 'disable-dev-shm-usage', 'no-sandbox'],
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['--headless'],
        },
      },
    },

    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '11',
        // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#safari-specific
        ignoreProtectedModeSettings: true,
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#safari-specific
        ignoreProtectedModeSettings: true,
      },
    },
  },
};
