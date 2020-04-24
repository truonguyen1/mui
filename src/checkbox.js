/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Checkbox.Click
 * @param {mui.Checkbox}
 *
 * @callback mui.Checkbox.Selected
 * @param {boolean}
 * @param {mui.Checkbox}
 *
 * @typedef mui.CheckboxOptions
 * @property {mui.Checkbox.Selected} onSelected
 * @property {mui.Checkbox.Click} onClick
 * @property {?boolean} horizontal
 * @property {boolean} selected
 * @property {string} label
 *
 * Checkbox
 * @class mui.Checkbox
 * @augments mui.Element
 * @constructor
 * @param {mui.CheckboxOptions} options
 *
 */
mui.Checkbox = function(){
    var Checkbox = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this._onSelected = options['onSelected'];
        this.addClass('mui-checkbox');
        if(options['horizontal']){
            this.addClass('mui-checkbox--hor');
        }
        this.addClass('mui-checkbox');
        this._iconE = this.create('mui-checkbox__icon');

        this.add(this._iconE);

        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
                return;
            }
            this.toggleSelected();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['selected']){
            this.setSelected(true);
        }
        if(options['label']){
            this.setLabel(options['label']);
        }
    };
    mui.inherits(Checkbox,mui.Element);

    /**
     * @inheritDoc
     */
    Checkbox.prototype.dispose = function(){
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this._onSelected=null;
        this._onClick =null;
        this._iconE = null;
        this._labelE = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Selected
     * @param {boolean] }bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setSelected = function(bool){
        if(this._selected===bool)return this;
        this._selected = bool;
        this._iconE.className = 'mui-checkbox__icon '+(bool?'mui-checkbox__icon--selected':'');
        if(bool){
            this.addClass('mui-checkbox--selected');
        }else{
            this.removeClass('mui-checkbox--selected');
        }
        if(this._onSelected){
            this._onSelected(bool,this);
        }
        return this;
    };
    /**
     * Toggle selected
     * @param {boolean} bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.toggleSelected = function(bool){
        this.setSelected(!this._selected);
        return this;
    };

    /**
     * Get selected
     * @return {boolean}
     */
    Checkbox.prototype.getSelected = function(){
        return this._selected;

    };

    /**
     * Set label
     * @param {string} text
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setLabel = function(text){
        if(this._labelE==null) {
            this._labelE = this.create('mui-checkbox__label');
            this.add(this._labelE);
        }
        this._labelE.textContent = text;
        return this;
    };

    return Checkbox;
}();
