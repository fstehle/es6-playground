'use strict';

class MyMath {
    /**
     * @param {string} stringValue
     * @return {number}
     */
    static toInt(stringValue) {
        return parseInt(stringValue, 10);
    }
}

module.exports = MyMath;