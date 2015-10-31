'use strict';

import mathjs from 'mathjs';

class MyMath {
  /**
   * @param {string} stringValue
   * @return {number}
   */
  static toInt(stringValue) {
    return parseInt(stringValue, 10);
  }

  /**
   * @param {number} number
   * @return {number}
   */
  static sqrt(number) {
    return mathjs.sqrt(number);
  }


}

export default MyMath;
