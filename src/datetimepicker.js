/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.DateTimePicker.Click
 * @param {mui.DateTimePicker}
 *
 * @typedef mui.DateTimePickerOptions
 * @property {mui.DateTimePicker.Click} onClick
 * @property {string} date
 *
 * Date time Picker
 * @constructor
 * @class mui.DateTimePicker
 * @augments mui.Element
 * @param {mui.DateTimePickerOptions} options
 *
 */
mui.DateTimePicker = function(){
    var _input,_picker;

    var DateTimePicker = function(options){
        mui.Element.call(this,options);
        this.addClass('ivaap-datetime-picker');
        this._onClick = options['onClick'];
        this._input = this.create({'type':'input','className':'ivaap-datetime-picker__input flatpickr '});
        this.add(this._input);
        this._clickHandler = function(evt){
            if(this._onClick){
                this._onClick(this);
                return;
            }
            this.toggle();
        }.bind(this);
        this._input.addEventListener('click',this._clickHandler);
        if(options['date']){
            this.setDate(options['date']);
        }
    };
    mui.inherits(DateTimePicker,mui.Element);

    /**
     * @inheritDoc
     */
    DateTimePicker.prototype.dispose = function(){
        if(this._clickHandler) {
            this._input.removeEventListener('click', this._clickHandler);
            this._clickHandler = null;
        }
        this._onClick = null;
        this._input = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Toggle editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.toggle = function(){
        if(this.isOpen()){
            this.close();
        }else{
            this.open();
        }
        return this;
    };

    /**
     * If editor is open
     * @return {bool}
     */
    DateTimePicker.prototype.isOpen = function(){
        return _picker && _picker['isOpen'];
    };
    /**
     * Open editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.open = function(){
        if(this.isOpen())return this;
        if(_picker==null){
            _input = this.create( {'type':'input'});
            _picker = flatpickr(_input, {});
        }
        _picker['setDate'](this._value);
        _picker['open'](null,this._input);
        this._subscribeEvtPicker();
        return this;
    };
    /**
     * Close Editor
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.close = function(){
        if(!this.isOpen())return this;
        this._removeEvtPicker();
        _picker['close']();
        return this;
    };
    DateTimePicker.prototype._subscribeEvtPicker = function(){
        if(this._closeHandler)return;
        this._closeHandler = function(arrDates,dateStr,picker){
            this.setDate(arrDates[0]);
            this._removeEvtPicker();
        }.bind(this);
        _picker['config']['onClose'].push(this._closeHandler);
    };
    DateTimePicker.prototype._removeEvtPicker = function(){
        var idx;
        if(this._closeHandler){
            idx = _picker['config']['onClose'].indexOf(this._closeHandler);
            _picker['config']['onClose'].splice(idx,1);
            this._closeHandler = null;
        }

    };

    /**
     * Get date
     * @return {string}
     */
    DateTimePicker.prototype.getDate = function(){
        return this._value;

    };
    /**
     * Set date
     * @param {string} date
     * @return {mui.DateTimePicker}
     */
    DateTimePicker.prototype.setDate = function(date){
        var dateObj = _picker.parseDate(date);
        this._value = dateObj?date:null;
        this._input.value =this._value? (new Date(this._value)).toString():'';
        return this;
    };
    return DateTimePicker;
}();
