/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * Content container
 * @constructor
 * @class mui.Content
 * @augments mui.AbstractSingleChildContainer
 * @param {mui.AbstractSingleChildContainerOptions} options
 *
 */
mui.Content = function(){
    var Content = function(options){
        mui.AbstractSingleChildContainer.call(this,options);
        this.addClass('ivaap-content');
    };
    mui.inherits(Content, mui.AbstractSingleChildContainer);

    /**
     * @inheritDoc
     */
    Content.prototype.dispose = function(){
        this.setContent(null);
        if(this._notification) {
            this._notification.detach();
            this._notification.dispose();
            this._notification = null;
        }
        mui.SingleChildContainer.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Content.prototype.setChild = function(child){
        this.detachAllChildren();
        if(child){
            child.attachTo(this.getElement());
        }
        return this;
    };
    /**
     * Set loading state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setLoading = function(message){
        this.showMessage(message,'ivaap-content__loading-icon');
        return this;
    };

    /**
     * Set error state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setError = function(message){
        this.showMessage(message,'ivaap-content__error-icon');
        return this;
    };

    /**
     * Hide message
     * @return {mui.Content}
     */
    Content.prototype.hideMessage = function(){
        this.setChild(this._content);
        this.removeClass('ivaap-content--notification-visible');
        return this;
    };

    /**
     * Show message
     * @param {string} message
     * @param {string} icon
     * @return {mui.Content}
     */
    Content.prototype.showMessage = function(message,icon){
        if(this._notification==null){
            this._notification = new mui.Element({
                'className':'ivaap-notification'
            });
            this._notificationIcon = this.create();
            this._notificationMessage = this.create('ivaap-notification__message');
            this._notification.add(this._notificationIcon,this._notificationMessage);
        }
        if(icon==null){
            icon = 'ivaap-content__info';
        }
        this._notificationIcon.className = 'ivaap-notification__icon '+icon;
        this._notificationMessage.textContent = message;
        this.addClass('ivaap-content--notification-visible');
        this.setChild(this._notification);
        return this;

    };
    return Content;
}();
