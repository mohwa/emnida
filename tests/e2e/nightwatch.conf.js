module.exports = {
  src_folders: ['tests/e2e'],
  output_folder: 'tests/e2e/reports',

  test_runner: 'mocha',

  // Selenium Server is running locally and is managed by Nightwatch
  selenium: {
    start_process: true,
    host: '127.0.0.1',
    port: 4444,
    server_path: require('selenium-server').path,
    cli_args: {
      'webdriver.gecko.driver': require('geckodriver').path,
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.ie.driver': process.platform === 'win32' ? require('iedriver').path : '',
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:9999',
      selenium_host: 'localhost',
      selenium_port: 4444,
      //globals: {
      //waitForConditionTimeout: 5000, // sometimes internet is slow so wait.
      //},
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
          args: ['headless', '--no-sandbox'],
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
