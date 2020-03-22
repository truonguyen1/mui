/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 * INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */

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
