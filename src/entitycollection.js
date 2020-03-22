/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Entity collection interface
 * @interface mui.IImageEntityCollection
 * @augments mui.IEntityCollection
 */
mui.IImageEntityCollection = function(){
    var IImageEntityCollection = function(){};

    /**
     * Get entity's image
     * @abstract
     * @function
     * @param {mui.IEntity} entity
     */
    IImageEntityCollection.prototype.getImage = function(entity){
        throw "must implement";
    };
    return IImageEntityCollection;
}();


/**
 * Array collection
 * @class mui.EntityCollection
 * @implements {mui.IEntityCollection }
 *
 */
mui.EntityCollection = function(){
    var EntityCollection = function(children){
        this._children = children;
    };

    EntityCollection.prototype.getName = function(entity){
        return entity.getName();
    };
    EntityCollection.prototype.getIcon = function(entity){
        return entity.getIcon();
    };
    EntityCollection.prototype.getDescription = function(entity){
        return entity.getDescription();
    };
    EntityCollection.prototype.getType = function(entity){
        return entity.getType();
    };
    EntityCollection.prototype.getId = function(entity){
        return entity.getId();
    };
    EntityCollection.prototype.isParent = function(entity){
        return Array.isArray(entity.getProperty('children'));
    };
    /**
     * @inheritDoc
     */
    EntityCollection.prototype.getChildren = function(parent){
        return new mui.ArrayIterator(parent==null?this._children.slice(0):parent.getProperty('children'));
    };
    return EntityCollection;
}();


/**
 * Array collection
 * @class mui.ImageEntityCollection
 * @implements {mui.IImageEntityCollection }
 * @augments mui.EntityCollection
 *
 */
mui.ImageEntityCollection = function(){
    var ImageEntityCollection = function(children){
        mui.EntityCollection.call(this,children);
    };
    mui.inherits(ImageEntityCollection,mui.EntityCollection);

    /**
     * @inheritDoc
     */
    ImageEntityCollection.prototype.getImage = function(entity){
        return entity.getProperty('image');
    };

    return ImageEntityCollection;
}();
