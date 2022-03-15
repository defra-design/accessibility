# Defra Accessibility Resources 

This repository contains the code used to build the Defra accessibility resources site.

**For more information about creating resources and the technology used for this site, please visit the [wiki for the Defra Accessibility Resources site](https://github.com/defra-design/accessibility/wiki).**

## Building the site on a local machine

Clone this repository to a directory on your machine.

### Install Node and npm dependencies

Use the package manager npm by installing [Node](https://nodejs.org/en/download/).

Once you have npm installed, inside the `accessibility` folder that you cloned earlier, install the dependencies using the following command.

```bash
npm install
```

### Initiating a build

Once installed, you should be able to build the site locally using the following command.

```bash
npm run dev
```

This script will build 11ty and run it on a local BrowserSync server for you to access the build and visit the site within your browser.

[More information about 11ty can be found in the 11ty documentation website](https://www.11ty.dev/docs/).
