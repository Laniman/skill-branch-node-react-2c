import { it, describe, before, after } from 'mocha';
import assert from 'assert';

import parseUsername from '../src/parseUsername.js';

describe('parseUsername.js', () => {
  it('isFunction', () => {
    assert.isFunction(parseUsername);
  });
  
  describe('Should work', () => {
    const urlUsername1 = 'https://vk.com/skillbranch';
    it(urlUsername1, () => {
      assert.equal(parseUsername(urlUsername1), '@skillbranch');
    });
    
    const urlUsername2 = '//vk.com/skillbranch';
    it(urlUsername2, () => {
      assert.equal(parseUsername(urlUsername2), '@skillbranch');
    });
  });

  describe('Returns "Invalid username" for incorrect data', () => {
    const urlUsername1 = '\'\'';
    it(urlUsername1, () => {
      assert.equal(parseUsername(urlUsername1), 'Invalid username');
    });

    const urlUsername2 = '\?';
    it(urlUsername2, () => {
      assert.equal(parseUsername(urlUsername2), 'Invalid username');
    });
  });
});


