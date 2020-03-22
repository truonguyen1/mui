mui = {};

mui.inherits = function(childClass,parentClass){
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

    childClass.parent = parentClass;
};
