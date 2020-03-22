/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Tab.Factory
 * @param {string} id
 *
 * @callback mui.Tab.HeaderItemClick
 * @param {mui.Event} evt
 *
 * Tab
 * @typedef mui.TabOptions
 * @property {string} active
 * @property {string} headerClassName
 * @property {boolean} stretchHeader *
 * @property {mui.IEntityCollection} items
 * @property {mui.Tab.Factory} factory
 * @property {...mui.Element} leftChildren
 * @property {...mui.Element} rightChildren
 * @property {} headerStyle
 * @property {mui.Tab.HeaderItemClick} onHeaderItemClick
 *
 * @class mui.Tab
 * @augments mui.Element
 * @param {mui.TabOptions} options
 *
 */
mui.Tab = function(){
    var Tab = function(options){
        mui.Element.call(this,options);
        this._active = options['active'];
        this._onHeaderItemClick = options['onHeaderItemClick'];
        this._factories = options['factory'];
        this._cachedContents = new Map();
        this._cachedHeaders = new Map();

        this.addClass('ivaap-tab');
        this._headerE = this.create('ivaap-tab__header '+(options['headerClassName']?options['headerClassName']:''));
        this._leftHeaderE = this.create('ivaap-tab__left-header-container');
        this._rightHeaderE = this.create('ivaap-tab__right-header-container');
        this._itemsContainer = this.create('ivaap-tab__items-container '+(options['stretchHeader']?'ivaap-tab__items-container--stretch':''));
        this._headerE.add(this._itemsContainer);
        this._bodyE = new mui.Content({
            'className':'ivaap-tab__body'
        });
        this.add(this._headerE);
        this._bodyE.attachTo(this.getElement());
        if(options['items']){
            this.setItems(options['items']);
        }
        if(options['leftChildren']){
            this.showLeftContent.apply(this,options['leftChildren']);
        }
        if(options['rightChildren']){
            this.showRightContent.apply(this,options['rightChildren']);
        }
        if(options['headerStyle']){
            options['headerStyle'].apply(this._headerE);
        }

    };
    mui.inherits(Tab,mui.Element);

    /**
     * @inheritDoc
     */
    Tab.prototype.dispose = function(){
        this._clear();
        this._bodyE.detach();
        this._bodyE.dispose();
        this._bodyE = null;

        this._onHeaderItemClick = null;
        this._factory = null;
        this._cachedContents = null;
        this._cachedHeaders = null;

        this._headerE =null;
        this._leftHeaderE = null;
        this._rightHeaderE = null;
        this._itemsContainer = null;

        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Set Items
     * @param {mui.IEntityCollection} iCollection
     * @return {mui.Tab}
     */
    Tab.prototype.setItems = function(iCollection){
        this._items = iCollection;
        this.update();
        return this;
    };

    /**
     * Set Active
     * @param {string} id
     * @return {mui.Tab}
     */
    Tab.prototype.setActive = function(id){
        this._hideError();
        var activeE =this._cachedHeaders.get(this._active);
        if(activeE){
            activeE.removeClass('ivaap-tab__header-item--active');
        }
        activeE = this._cachedHeaders.get(id);
        if(activeE){
            activeE.addClass('ivaap-tab__header-item--active');
        }
        activeE = this._cachedContents.get(this._active);
        if(activeE){
            activeE.detach();
        }
        activeE = this._cachedContents.get(id);
        if(activeE==null && this._factories){
            activeE = this._factories(id);
        }
        if(activeE) {
            this._bodyE.setChild(activeE);
        }else{
            this._showMessage("Empty");
        }
        this._cachedContents.set(id,activeE);
        this._active = id;
        return this;
    };

    /**
     * Set Left Content
     * @param {...mui.Element} content
     * @return {mui.Tab}
     */
    Tab.prototype.showLeftContent = function(content){
        if(this._leftHeaderE.parentNode==null){
            this._headerE.insertBefore(this._leftHeaderE,this._itemsContainer);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._leftHeaderE);
        }
        return this;
    };

    /**
     * Set Right Content
     * @param {...mui.Element}
     * @return {mui.Tab}
     */
    Tab.prototype.showRightContent = function(content){
        if(this._rightHeaderE.parentNode==null){
            this._headerE.add(this._rightHeaderE);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._rightHeaderE);
        }
        return this;
    };


    Tab.prototype._clear = function(){
        if(this._cachedHeaders){
            this._cachedHeaders.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedHeaders = new Map();
        }
        if(this._cachedContents){
            this._cachedContents.forEach(function(iElement){
                iElement.detach();
            });
            this._cachedContents = new Map();
        }
    };

    /**
     * Update
     * @return {mui.Tab}
     */
    Tab.prototype.update = function(){
        this._clear();
        var data = this._items;
        var it = this._items.getChildren();
        var item;
        var cachedHeaders = new Map();
        while(it.hasNext()){
            item = it.next();
            var id = data.getId(item);
            var btn = new mui.Button({
                'icon':data.getIcon(item),
                'label':data.getName(item),
                'onClick':this._handleHeaderItemClick.bind(this,id),
                'className':'ivaap-tab__header-item'
            });
            btn.attachTo(this._itemsContainer);
            cachedHeaders.set(id,btn);
        }
        this._cachedHeaders = cachedHeaders;
        var headerE = cachedHeaders.get(this._active);
        if(headerE){
            headerE.addClass('ivaap-tab__header-item--active');
        }
        if(this._factory==null)return this;
        var view= this._factory(this._active);
        if(view) {
            view.attachTo(this._body);
        }else{
            this._showMessage("Empty");
        }
        return this;
    };
    Tab.prototype._hideError = function(){
        this._bodyE.hideMessage();
    };
    Tab.prototype._showMessage = function(message,icon){
        this._bodyE.showMessage(message,icon);

    };
    Tab.prototype._handleHeaderItemClick = function(id,evt){
        if(this._onHeaderItemClick){
            var arg = new mui.Event(this,null,evt);
            this._onHeaderItemClick(arg);
            if(arg.isStopped()){
                return;
            }
        }
        this.setActive(id);

    };
    return Tab;
}();
