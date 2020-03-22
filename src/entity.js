/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Iterator Interface
 * @interface mui.IIterator
 */
mui.IIterator = (function () {
    var IIterator = function () {};

    /**
     * @abstract
     * @function
     * @return {boolean}
     */
    IIterator.prototype.hasNext = function(){
        throw "must implement";
    };
    /**
     * Next
     * @abstract
     * @function
     * @return {*}
     */
    IIterator.prototype.next = function(){
        throw "must implement";
    };

    return IIterator;
})();


/**
 * Entity interface.
 *
 * @interface
 */
mui.IEntity = (function () {
    var IEntity = function () {

    };

    /**
     * Get Id
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getId = geotoolkit.abstractMethod;


    /**
     * Get Name
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getName = geotoolkit.abstractMethod;


    /**
     * Get Description
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getDescription = geotoolkit.abstractMethod;

    /**
     * Get icon
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getIcon = geotoolkit.abstractMethod;

    /**
     * Check if resource has been loaded
     *
     * @function
     * @abstract
     *
     * @return {boolean}
     */
    IEntity.prototype.isLoaded = geotoolkit.abstractMethod;

    /**
     * Get Type
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getType = geotoolkit.abstractMethod;

    /**
     * Get property
     * @function
     * @abstract
     * @return {string} prop
     * @return {*}
     */
    IEntity.prototype.getProperty = geotoolkit.abstractMethod;

    /**
     * Get create a clone with customize properties
     * @function
     * @abstract
     * @return {object} props
     * @return {mui.IEntity}
     */
    IEntity.prototype.assign = geotoolkit.abstractMethod;
    return IEntity;
})();
/**
 * Base Entity
 * @class mui.Entity
 * @constructor
 * @implements mui.IEntity
 */
mui.Entity = function(){
    var counter = 0;
    var Entity = function(opts){
        this._opts = opts;
        this._id = opts['id']?opts['id']: 'item-'+(++counter);
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getId = function(){
        return this._id;
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getIcon = function () {
        return this._opts['icon'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getName = function () {
        return this._opts['name'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getType = function () {
        return this._opts['type'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getDescription = function () {
        return this._opts['description'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.assign = function () {
        throw "not yet implemented";
    };

    /**
     * @inheritDoc
     */
    Entity.prototype.getProperty = function (prop) {
        return this._opts[prop];
    };
    return Entity;
}();

/**
 * Collection Interface
 * @interface mui.ICollection
 */
mui.ICollection = (function () {
    var ICollection = function () {};

    /**
     * Get children iterator
     * @abstract
     * @function
     * @param {?mui.IEntity} entity
     * @return {mui.IIterator}
     */
    ICollection.prototype.getChildren = geotoolkit.abstractMethod;

    return ICollection;
})();


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

