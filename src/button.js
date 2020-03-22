/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback  mui.Button.Click
 * @param {mui.Button}
 *
 * @typedef {Object} mui.ButtonOptions
 * @property  {string} icon
 * @property  {boolean} isDropdown
 * @property {mui.AbstractMenu.ItemClickCallback} onMenuItemClick
 * @property  {string} label
 * @property  {string} description
 * @property  {function} onClick
 *
 * Button
 *
 * @class mui.Button
 * @param {mui.ButtonOptions} options
 * @augments mui.Element
 *
 */
mui.Button = function(){
    var Button = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this.addClass('ivaap-button');
        this._onMenuItemClick = options['onMenuItemClick'];
        this._iconE = this.create('ivaap-button__icon');
        this._labelE = this.create('ivaap-button__label');
        this._descE = this.create('ivaap-button__desc');
        this._carretE = this.create('ivaap-button__caret ivaap-button__caret-icon');
        this._leftContainer = this.create('ivaap-button__left-container');
        this._leftContainer.add(this._labelE,this._descE);

        this._iconClass = options['icon'];
        this._isDropDown = options['isDropdown'];
        this._label = options['label'];
        this._desc = options['description'];
        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
            }
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this._update();


    };
    mui.inherits(Button,mui.Element);

    /**
     * @inheritDoc
     */
    Button.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = 0;
        }
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this.closeMenu();
        this._onMenuItemClick = null;
        this._onClick = null;
        this._leftContainer =  null;
        this._iconE = null;
        this._labelE = null;
        this._descE =null;
        this._carretE = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Close dropdown menu
     * @return {mui.Button}
     */
    Button.prototype.closeMenu = function(){
        if(this._menu){
            mui.Element.closePopup(this._menu);
        }
        return this;
    };


    /**
     * @typedef {object} mui.ShowButtonDropdownOptions
     * @property {string} horizontalAlign left or right
     * @property {string} verticalAlign top or bottom

     * Show dropdown menu
     * @param {mui.IEntityCollection} items
     * @param {mui.ShowButtonDropdownOptions} options
     * @return {mui.Button}
     */
    Button.prototype.showMenu = function(items,options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        if(this._menu==null){
            this._menu = new mui.Menu({
                'onItemClick':this._onMenuItemClick
            });
        }
        this._menu.setItems(items);
        mui.Element.showPopupRelativeToElement(this._menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * Set Label
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setLabel = function(text){
        this._label = text;
        this._update();
        return this;
    };

    /**
     * Set description
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setDescription = function(text){
        this._desc = text;
        this._update();
        return this;
    };

    /**
     * Set icon
     * @param {string} icon
     * @return {mui.Button}
     */
    Button.prototype.setIcon = function(icon){
        this._iconClass = icon;
        this._update();
        return this;
    };

    Button.prototype._update = function(){
        this.clear();
        if(this._iconClass){
            this._iconE.className = 'ivaap-button__icon '+ this._iconClass;
            this.add(this._iconE);
        }
        if(this._desc) {
            this._descE.textContent = this._desc;
        }
        if(this._label) {
            this._labelE.textContent = this._label;
        }
        if(this._desc || this._label){
            this.add(this._leftContainer);
        }
        if(this._isDropDown){
            this.add(this._carretE);
        }
    };
    return Button;
}();
