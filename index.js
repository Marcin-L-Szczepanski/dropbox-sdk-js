'use strict';

// default entrypoint is the node module
// this is overriden by the `browser` field in package.json
// https://github.com/substack/node-browserify#browser-field
module.exports = require('./src/dropbox-api');
