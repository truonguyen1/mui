/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Entity Collection Interface
 * @interface mui.IEntityCollection
 * @augments mui.ICollection
 */
mui.IEntityCollection = (function () {
    var IEntityCollection = function () {};

    /**
     * Get entity name
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getName = function(entity){
        throw "must implement";
    };


    /**
     * Get entity type
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getType = function(entity){
        throw "must implement";
    };
    /**
     * Get entity icon
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getIcon = function(entity){
        throw "must implement";
    };
    /**
     * Get entity description
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getDescription = function(entity){
        throw "must implement";
    };
    /**
     * Get entity id
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getId = function(entity){
        throw "must implement";
    };

    /**
     * If entity is a parent
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {boolean}
     */
    IEntityCollection.prototype.isParent = function(entity){
        throw "must implement";
    };
    return IEntityCollection;
})();
