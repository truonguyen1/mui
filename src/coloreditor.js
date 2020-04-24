/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPickerEditor.Changed
 * @pram {string} color
 *
 * @typedef mui.ColorPickerEditorOptions
 * @param {mui.ColorPickerEditor.Changed} onChanged
 *
 * Color Picker editor
 * @constructor
 * @class mui.ColorEditor
 * @augments mui.Element
 * @param {mui.ColorPickerEditorOptions} options
 *
 */
mui.ColorEditor = function(){
    var ColorEditor = function(options){
        if(options==null){
            options = {};
        }
        mui.Element.call(this,options);
        this.addClass('mui-color-editor');

        this._onChanged = options['onChanged'];
        var _pickerBtn = this.create();

        this.add(_pickerBtn);
        var _picker = Pickr.create({
            'el': _pickerBtn,
            'useAsButton':true,
            'inline':true,
            'autoReposition':false,
            'showAlways':true,
            'container':this.getElement(),
            'theme': 'monolith', // or 'monolith', or 'nano',
            'swatches': [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],
            'components': {
                // Main components
                'preview': true,
                'opacity': true,
                'hue': true,

                // Input / output Options
                'interaction': {
                    'input': true,
                    'clear': false,
                    'save': false
                }
            }
        });
        this._changeHandler = function(evt){
            if(  this._onChanged ){
                var color =evt['toRGBA']().toString();
                this._onChanged (color);
            }
            // console.log(evt);
        }.bind(this);
        this._swatchSelectHandler = function(evt){
            // console.log(evt);
        }.bind(this);
        this._saveHandler = function(evt){
            // console.log(evt);
            var color =evt['toRGBA']().toString();
            _picker['addSwatch'](color);
        }.bind(this);
        _picker.on("change",this._changeHandler);
        _picker.on("swatchselect",this._swatchSelectHandler);
        _picker.on("save",this._saveHandler);
        this._picker = _picker;
        _pickerBtn.style.display='none';


        // _picker['getRoot']()['app'].appendChild(_pickerBtn);
    };
    mui.inherits(ColorEditor,mui.Element);
    /**
     * @inheritDoc
     */
    ColorEditor.prototype.dispose = function(){
        this._picker.off("change",this._changeHandler);
        this._picker.off("swatchselect",this._swatchSelectHandler);
        this._picker.off("save",this._saveHandler);
        this._changeHandler =null;
        this._onChanged = null;
        this._swatchSelectHandler = null;
        this._saveHandler = null;
        this._onChanged = null;
        this._picker['destroy']();
        this._picker = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Changed Callback
     * @param {mui.ColorPickerEditor.Changed} fn
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.onChanged = function(fn){
        this._onChanged = fn;
        return this;

    };
    /**
     * Get color
     * @return {string}
     */
    ColorEditor.prototype.getColor = function(){
        return this._picker.getColor();
    };

    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.setColor = function(color){
        if(color==null){
            color = 'black';
        }
        this._picker.setColor(color,true);
        return this;
    };
    return ColorEditor;
}();
