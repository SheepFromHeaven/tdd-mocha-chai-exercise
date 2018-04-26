# TDD with Mocha and Chai

## What is TDD
![TDD Cicle](http://lewandowski.io/images/tdd_flow.gif)


## Setup
### 1. Node.js and NPM

**Node.js** is a JavaScript runtime which will allow us to run a host of tools.
**NPM** is the Node Package Manager and is used to install yarn.

1. Install as instructed on <http://nodejs.org>.
2. (On Windows if asked) choose to also install NPM and add Node.js to your path.
3. Check the installation of Node.js and NPM by running `node -v` or `npm -v` from your command line.

### 2. yarn
**yarn** is a Node Package Manager which will allow us to download and install required components for Node.js with ease
See <https://yarnpkg.com/> for details of this dependency manager

1. Run `npm install -g yarn` to install yarn dependency manager
1a. (On windows) You can also get the installer from <https://yarnpkg.com/en/docs/install>.


## Starting your tests
After your are finished with the step before and everything runs fine, run these steps to get your project on the road.

1. Open your command line / terminal / bash
2. Navigate to the project folder
3. Run `yarn install`
4. Run `add mocha`
5. To **start** the tests run `yarn test`

If you have an IDE which supports testing with mocha you only need to run `yarn install`. Afterwards you can immediately run your tests via the interface.