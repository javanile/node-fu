'use strict';

const fu = require('../index')
    , chai = require('chai')

chai.use(require('chai-fs'))
fu.mkdir('temp')

describe('Testing .copy()', function () {

    it('Single file', function () {
        fu.writeFile('temp/oldFile.txt', 'Hello World!')
        fu.copy('temp/oldFile.txt', 'temp/newFile.txt')
        //chai.assert.notIsFile('temp/oldFile.txt')
        chai.assert.isFile('temp/newFile.txt')
    });

});
