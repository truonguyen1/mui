/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Array collection
 * @class mui.ArrayCollection
 * @implements mui.ICollection
 */
mui.ArrayCollection = function(){
    var ArrayCollection = function(children){
        this._children = children;
    };
    /**
     * @override
     * @return {mui.ArrayIterator}
     */
    ArrayCollection.prototype.getChildren = function(){
        return new mui.ArrayIterator(this._children.slice(0));
    };
    return ArrayCollection;
}();

/**
 * Array iterator
 * @class mui.ArrayIterator
 * @implements mui.IIterator
 */
mui.ArrayIterator = function(){
    var ArrayIterator = function(arr){
        this._arr = arr?arr:[];
        this._idx = -1;
        this._length = this._arr.length;
    };
    /**
     * @inheritDoc
     */
    ArrayIterator.prototype.hasNext = function(){
        return this._idx+1< this._length;
    };
    /**
     * @override
     * @param {number} skip
     * @return {*}
     */
    ArrayIterator.prototype.next = function(skip){
        if(skip==null){
            skip = 1;
        }
        this._idx = this._idx+skip;
        return this._arr[this._idx];
    };
    return ArrayIterator;

}();
