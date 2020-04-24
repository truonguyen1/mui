/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Number.Changed
 *
 * @typedef mui.NumberOptions
 * @property {mui.Number.Changed} onChanged
 * @property {boolean} showControlButton
 * @property {string} placeholder
 * @property {number} value
 * @property {number} step
 * @property {function} onWillChange
 *
 * Number control
 * @constructor
 * @class mui.Number
 * @constructor
 * @augments mui.Element
 * @param {mui.NumberOptions} options
 *
 */
mui.Number = function(){
    var Number = function(options){
        mui.Element.call(this,options);
        this._showControlButtons = options['showControlButton']!=null?options['showControlButton']:true;
        this._onChanged = options['onChanged'];
        this.addClass('mui-number');
        this._inputE = this.create({'type':'input','className':'mui-number__input'});
        this._value =options['value'];
        if(options['placeholder']){
            this._inputE.setAttribute('placeholder',options['placeholder']);
        }
        this._incrE = this.create({'type':'button','className':'mui-number__incr mui-number__incr-icon'});
        this._decrE = this.create({'type':'button','className':'mui-number__decr mui-number__decr-icon'});
        this._step = Math.abs(options['step']|| 1);
        this._incrClickHandler = function(evt){
            if(options['onWillChange']){
                evt =new mui.Event(this,null,evt);
                options['onWillChange'](evt);
                if(evt.isStopped()){
                    return;
                }
            }
            this.setValue(this._value+this._step);
        }.bind(this);
        this._decrClickHandler = function(evt){
            if(options['onWillChange']){
                evt =new mui.Event(this,null,evt);
                options['onWillChange'](evt);
                if(evt.isStopped()){
                    return;
                }
            }
            this.setValue(this._value-this._step);
        }.bind(this);
        this._inputHandler = function(evt){
            this.setValue(this._inputE.value);
        }.bind(this);
        this._inputE.addEventListener('input',this._inputHandler);
        this._incrE.addEventListener('click',this._incrClickHandler);
        this._decrE.addEventListener('click',this._decrClickHandler);
        this.setValue(options['value']);
        this.update();

    };
    mui.inherits(Number,mui.Element);
    /**
     * @inheritDoc
     */
    Number.prototype.dispose = function(){
        this._incrE.removeEventListener('click',this._incrClickHandler);
        this._decrE.removeEventListener('click',this._decrClickHandler);
        this._incrClickHandler = null;
        this._decrClickHandler = null;
        this._onChanged = null;
        this._incrE=null;
        this._decrE = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Enable Controls
     * @param {boolean} bool
     * @return {mui.Number}
     */
    Number.prototype.enableControls = function(bool){
        this._showControlButtons = bool;
        this.update();
        return this;
    };
    /**
     * Set value
     * @param {number} val
     * @return {mui.Number}
     */
    Number.prototype.setValue = function(val){
        var num=+val;
        if(isNaN(num) && val!=='-'){
            num = this._value?this._value:0;
            this._value =num;
            this._inputE.value = num;
        }else{
            this._value = num;
            this._inputE.value = val;
        }
        if(this._onChanged){
            this._onChanged();
        }
        return this;

    };

    /**
     * Get Value
     * @return {number}
     */
    Number.prototype.getValue = function(){
        return this._value;
    };

    /**
     * Update
     * @return {mui.Number}
     */
    Number.prototype.update =function(){
        this.clear();
        if(this._showControlButtons){
            this.add(this._decrE);
        }
        this._inputE.value = this._value;
        this.add(this._inputE);
        if(this._showControlButtons){
            this.add(this._incrE);
        }
        return this;
    };

    return Number;
}();
