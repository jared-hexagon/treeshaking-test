# Treeshaking test

A test of webpack treeshaking.

1. Build the NPM module.
2. Install the NPM module into the CRA (create-react-app).
3. Run.
4. See render output.

## Setup

Two components: the NPM module to be treeshaken and the CRA app that packs and installs it.

    cd treeshaking-test-module
    npm i
    npm run build

    cd treeshaking-test-app
    npm i
    npm run install-module
    npm start
