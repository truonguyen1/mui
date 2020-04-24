/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.AbstractDropdown.ItemClick
 * @param {*} item
 *
 * @typedef mui.AbstractDropdownOptions
 * @property {mui.IEntityCollection} items
 * @property {mui.AbstractDropdown.ItemClick} onItemClick
 * @property {string} selected
 *
 *
 * Abstract Dropdown
 * @abstract
 * @class mui.AbstractDropdown
 * @augments mui.Element
 * @param {mui.AbstractDropdownOptions} options
 */
mui.AbstractDropdown = function(){
    var AbstractDropdown = function(options){
        if(options==null){
            options = {};
        }
        if(options['type']==null){
            options['type']='button';
        }
        mui.Element.call(this,options);
        this.addClass('mui-dropdown');
        this._onItemClick = options['onItemClick'];
        this.setSelected(options['selected']);
        this._clickHandler = function(evt){
            this.showMenu();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this.setItems(options['items']);
    };
    mui.inherits(AbstractDropdown,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractDropdown.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler = null;
        this._onItemClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Get Items
     * @protected
     * @return {mui.IEntityCollection}
     */
    AbstractDropdown.prototype.getItems = function(){
        throw "must implement";
    };
    /**
     * Set items
     * @protected
     * @param {mui.IEntityCollection} items
     */
    AbstractDropdown.prototype.setItems = function(items){
        throw "must implement";
    };

    /**
     * Set selected
     * @param {*} item
     */
    AbstractDropdown.prototype.setSelected = function(item){
        this._selected = item;
        this.updateDisplay();
    };
    /**
     * Get selected
     * @return {*}
     */
    AbstractDropdown.prototype.getSelected = function(){
        return this._selected;

    };
    AbstractDropdown.prototype._handleMenuItemClick = function(item){
        if(this._onItemClick){
            this._onItemClick(item);
            return;
        }
        this.setSelected(item);
    };

    /**
     * Show dropdown menu
     * @param {Object} options
     * @param {string} horizontalAlign left or right
     * @param {string} verticalAlign top or bottom
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.showMenu = function(options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        var menu = this.getMenu();
        menu.onItemClick(this._handleMenuItemClick.bind(this));
        menu.setItems(this.getItems());
        mui.Element.showPopupRelativeToElement(menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * @abstract
     * @function
     * @return {mui.AbstractMenu}
     */
    AbstractDropdown.prototype.getMenu = function(){
        throw "must implement";

    };
    /**
     * @abstract
     * @function
     */
    AbstractDropdown.prototype.createDisplay = function(){
        throw "must implement";
    };
    /**
     * Update display
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.updateDisplay = function(){
        this.clear();
        var elm = this.createDisplay();
        elm.classList.add('mui-dropdown__display');
        this.add(elm);
        this._caret = this.create('mui-dropdown__caret-icon');
        this.add(this._caret);
        return this;
    };
    return AbstractDropdown;
}();

/**
 *
 * Dropdown
 * @class mui.Dropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions } options
 *
 */
mui.Dropdown = function(){
    var Dropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(Dropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    Dropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Dropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.Menu();
        }
        return this._menu;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.setItems = function(items){
        this._items = items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.createDisplay = function(){
        var label = this.create('mui-dropdown__label');
        if(this.getSelected()==null){
            label.textContent = ('select...');
            return label;
        }
        label.textContent =  this.getItems().getName(this.getSelected());
        return label;

    };
    return Dropdown;
}();


/**
 * @class mui.ImageDropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions} options
 *
 */
mui.ImageDropdown = function(){
    var ImageDropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(ImageDropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.ImageMenu();
        }
        return this._menu;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @override
     * @param {mui.IImageEntityCollection} items
     */
    ImageDropdown.prototype.setItems = function(items){
        this._items = items;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.createDisplay = function(){
        var img = this.create('mui-dropdown__image');
        if(this.getSelected()){
            var url =this.getItems().getImage(this.getSelected());
            img.style.backgroundImage ='url("'+url+'")';
        }else{
            img.textContent = 'select...';
        }

        return img;

    };
    return ImageDropdown;
}();
