'use strict';

var paths = {
    'bower': './bower_components/'
};

var Path = {
    get: function(folder) {
        if (typeof paths[folder] === 'undefined') {
            throw new Error('Unknown folder: ' + folder);
        }
        return paths[folder];
    }
};

module.exports = Path;