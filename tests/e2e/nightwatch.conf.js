import { DEV_SERVER } from '../../build/utils';

module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: 'tests/e2e/reports',

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
      desiredCapabilities: {
        javascriptEnabled: true,
        acceptSslCerts: true,
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

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: ['headless', 'disable-gpu', 'disable-dev-shm-usage', 'no-sandbox'],
        },
      },
    },

    ie9: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '9',
        // allowBlockedContent: true,
        // ignoreProtectedModeSettings: true,
      },
    },

    ie10: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '10',
        // allowBlockedContent: true,
        // ignoreProtectedModeSettings: true,
      },
    },

    ie11: {
      desiredCapabilities: {
        browserName: 'internet explorer',
        version: '11',
        //allowBlockedContent: true,
        //ignoreProtectedModeSettings: true,
      },
    },
  },
};
