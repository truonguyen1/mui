/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
window.geotoolkit = window.geotoolkit ||  {};
window.ivaap = {};
window.ivaap.ui = {};
window.ivaap.ui.defaultv2 = {};

geotoolkit.inherits =function(childClass,parentClass){
    if (parentClass == null) {
        throw new Error('parentClass should not be undefined');
    }
    /**
     *
     * @private
     */
    function TemporaryClass () {
    }

    TemporaryClass.prototype = parentClass.prototype;
    childClass._super = parentClass.prototype;
    childClass.getSuperClass = function () {
        return childClass._super;
    };
    childClass.prototype = new TemporaryClass();
    childClass.prototype.constructor = childClass;

    childClass.prototype.getClassName = function () {
        return childClass._className;
    };

    childClass.prototype.getSuperClass = function () {
        return childClass._super;
    };
    childClass.parent = parentClass;
    return childClass;
};
