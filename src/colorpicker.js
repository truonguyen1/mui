/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPicker.Click
 * @param {}
 * @callback mui.ColorPicker.ColorSelected
 * @param {}
 * @callback mui.ColorPicker.Changed
 * @param {}
 *
 * @typedef mui.ColorPickerOptions
 * @property {mui.ColorPicker.Click} onClick
 * @property {mui.ColorPicker.ColorSelected} onColorSelected
 * @property {mui.ColorPicker.Changed} onChanged
 * @property {string} color
 *
 *
 * Color Picker
 * @constructor
 * @class mui.ColorPicker
 * @augments mui.Element
 * @param {mui.ColorPickerOptions} options
 *
 */
mui.ColorPicker = function(){
    var _picker,_pickerBtn;
    var ColorPicker = function(options){
        if(options==null){
            options = {};
        }
        options['type'] = 'button';
        mui.Element.call(this,options);
        this.addClass('ivaap-colorpicker');
        this._onChanged = options['onChanged'];
        this._onColorSelected = options['onColorSelected'];
        this._transImg = this.create("ivaap-colorpicker__trans-img");
        this._bgContainer = this.create("ivaap-colorpicker__bg");
        this.add(this._transImg,this._bgContainer);
        this._onClick = options['onClick'];
        this._clickHandler = function(evt){
            if(this._onClick){
                this._onClick();
                return;
            }
            this.toggle();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['color']){
            this.setColor(options['color']);
        }
    };
    mui.inherits(ColorPicker,mui.Element);
    /**
     * @inheritDoc
     */
    ColorPicker.prototype.dispose = function(){
        this._removeEvtPicker();
        if(this._clickHandler) {
            this.getElement().removeEventListener('click', this._clickHandler);
            this._clickHandler = null;
        }

        this._onColorSelected = null;

        this._onClick = null;
        this._transImg = null;
        this._onChanged = null;
        this._bgContainer = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Check if picker editor is open
     * @return {boolean}
     */
    ColorPicker.prototype.isOpen = function(){
        return _picker && _picker.getElement().parentNode;
    };

    /**
     * Open editor
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.open = function() {
        if (this.isOpen()) return this;
        if (_picker == null) {
            _picker = new mui.ColorEditor();
        }
        _picker.onChanged(function(color){
            if(this._onColorSelected){
                this._onColorSelected(color);
                return;
            }
            this.setColor(color);
        }.bind(this));
        _picker.setColor(this._color);
        mui.Element.showPopupRelativeToElement(_picker, this.getElement(), 'left', 'bottom', 'right');
        return this;
    };

    /**
     * Close editor
     */
    ColorPicker.prototype.close = function(){
        if(!this.isOpen())return this;
        mui.Element.closePopup(_picker);
        return this;

    };
    /**
     * Toggle editor
     * @return {mui.ColorPicker }
     */
    ColorPicker.prototype.toggle = function(){

        if(this.isOpen()){
            this.close();
        }else{
            this.open();
        }
        return this;
    };
    /**
     * Get Color
     * @return {string}
     */
    ColorPicker.prototype.getColor = function(){
        return this._color;
    };
    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.setColor = function(color){
        this._color = color;
        this._bgContainer.style.background= color;
        if(this._onChanged){
            this._onChanged(color);
        }
        return this;
    };
    return ColorPicker;
}();
