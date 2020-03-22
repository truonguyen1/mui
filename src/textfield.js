/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @typedef {Object} mui.TextFieldOptions
 * @property  {?function} onRightIconClick
 * @property {?function} onLeftIconClick
 * @property {?boolean} multiline
 * @property {?string} placeholder
 * @property {?function} onInput
 * @property {?string} leftIcon
 * @property {?string} rightIcon
 * @property {?string} value
 *
 *Text Field interface.
 *
 * @class mui.TextField
 * @augments mui.Element
 * @param {mui.TextFieldOptions} options
 *
 */
mui.TextField = function(){
    var TextField =function(options){
        if(options==null)options =  {};
        mui.Element.call(this,options);
        this.addClass('ivaap-text');
        this._onLeftIconClick = options['onLeftIconClick'];
        this._onRightIconClick = options['onRightIconClick'];
        this._textContainer = this.create('ivaap-text__input-container');
        this._input = this.create({'type':options['multiline']?'textarea':'input','className':'ivaap-text__input'});
        this._rightContainer = this.create('ivaap-text__right-container');
        this._textContainer.add(this._input,this._rightContainer);
        this.add(this._textContainer);

        if(options['placeholder']) {
            this._input.setAttribute('placeholder', options['placeholder']);
        }
        if(options['onInput']){
            this._inputHandler = options['onInput'];
            this._input.addEventListener('input',this._inputHandler);
        }
        if(options['leftIcon']){
            this.setLeftIcon(options['leftIcon']);
        }
        if(options['rightIcon']){
            this.setRightIcon(options['rightIcon']);
        }
        if(options['value']){
            this.setValue(options['value']);
        }
    };
    mui.inherits(TextField,mui.Element);

    /**
     * @inheritDoc
     */
    TextField.prototype.dispose = function(){
        if(this._rightIconClickHandler) {
            this._rightIconE.removeEventListener('click', this._rightIconClickHandler);
            this._rightIconClickHandler = null;
        }
        if(this._leftIconClickHandler) {
            this._leftIconE.removeEventListener('click', this._leftIconClickHandler);
            this._leftIconClickHandler = null;
        }
        if(this._inputHandler){
            this._input.removeEventListener('input',this._inputHandler);
            this._inputHandler = null;
        }
        this._onRightIconClick = null;
        this._onLeftIconClick = null;
        this._assisstiveIconE = null;
        this._assistiveTextE = null;
        this._rightIconE = null;
        this._rightContainer = null;
        this._input = null;
        this._textContainer =  null;
        this._onLeftIconClick = null;
        this._onRightIconClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    TextField.prototype._handleLeftIconClick = function(evt) {
        if(this._onLeftIconClick) {
            this._onLeftIconClick();
        }
    };

    TextField.prototype._handleRightIconClick = function(evt) {
        if(this._onRightIconClick) {
            this._onRightIconClick();
        }
    };

    /**
     * Set value
     * @param {string} text
     * @return {mui.TextField}
     */
    TextField.prototype.setValue = function(text){
        this._input.value = text;
        return this;
    };
    /**
     * Get value
     * @return {string}
     */
    TextField.prototype.getValue = function(){
        return this._input.value;
    };


    /**
     * Set left icon
     * @param {string} leftIcon
     * @return {mui.TextField }
     */
    TextField.prototype.setLeftIcon = function(icon){
        if(this._leftIconE==null){
            this._leftIconE = this.create({'type':'button','className':'ivaap-text__left-icon'});
            this._leftIconClickHandler = this._handleLeftIconClick.bind(this);
            this._leftIconE.addEventListener('click', this._leftIconClickHandler);

        }
        this._leftIconE.className = 'ivaap-text__left-icon '+icon;
        if(this._leftIconE.parentNode==null){
            this._textContainer.add(this._leftIconE);
        }
        this._input.classList.add("ivaap-text__left-icon--visible");
        return this;
    };

    /**
     * Hide left icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideLeftIcon = function(){
        if(this._leftIconE==null)return this;
        this._input.classList.remove("ivaap-text__left-icon--visible");
        this._leftIconE.removeFromParent();
        return this;

    };
    /**
     * Set placeholder text
     * @param {string} placeholder
     * @return {mui.TextField}
     */
    TextField.prototype.setPlaceHolderText = function(placeHolder){
        this._input.setAttribute('placeholder', placeHolder);
        return this;
    };


    /**
     * Set right icon
     * @param {string} rightIcon
     * @return {mui.TextField}
     */
    TextField.prototype.setRightIcon = function(icon){
        if(this._rightIconE==null){
            this._rightIconE = this.create({'type':'button','className':'ivaap-text__right-icon'});
            this._rightIconClickHandler = this._handleRightIconClick.bind(this);
            this._rightIconE.addEventListener('click', this._rightIconClickHandler);

        }
        this._rightIconE.className = 'ivaap-text__right-icon '+icon;
        if(this._rightIconE.parentNode==null){
            this._rightContainer.add(this._rightIconE);
        }
        this._input.classList.add("ivaap-text__right-icon--visible");
        return this;
    };
    /**
     * Hide right icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideRightIcon = function(){
        if(this._rightIconE==null)return this;
        this._rightIconE.removeFromParent();
        this._input.classList.remove("ivaap-text__right-icon--visible");
        return this;
    };

    /**
     * Set assistive text
     * @param {string} text
     * @return {mui.TextField}
     */
    TextField.prototype.setAssistiveText = function(icon,message){
        if(this._assisstiveIconE==null){
            this._assisstiveIconE = this.create('ivaap-text__assistive-icon');
        }
        if(icon){
            this._assisstiveIconE.className = 'ivaap-text__assistive-icon '+icon;
        }
        if(this._assisstiveIconE.parentNode==null){
            this._rightContainer.insertBefore(this._assisstiveIconE,this._rightContainer.lastChild);
        }
        this._input.classList.add("ivaap-text__assistive-icon--visible");
        if(this._assistiveTextE ==null){
            this._assistiveTextE = this.create('ivaap-text__assistive-text');
        }
        if(this._assistiveTextE.parentNode==null){
            this.add(this._assistiveTextE);
        }
        this._assistiveTextE.textContent = message;
        this.addClass("ivaap-text__assistive-text--visible");
        return this;
    };
    /**
     * Hide assistive text
     * @return {mui.TextField}
     */
    TextField.prototype.hideAssistiveText = function(){
        if(this._assistiveTextE==null)return this;
        this._assistiveTextE.removeFromParent();
        this.removeClass("ivaap-text__assistive-text--visible");
        return this;
    };

    /**
     * Set error
     * @param {string} message
     * @return {mui.TextField}
     */
    TextField.prototype.setError = function(message){
        this.setAssistiveText('ivaap-text__error-icon',message);
        this.addClass('ivaap-text--error');
        return this;
    };

    /**
     * Remove error
     * @return {mui.TextField}
     */
    TextField.prototype.hideError = function(){
        this.hideAssistiveText();
        if(this._assisstiveIconE){
            this._assisstiveIconE.removeFromParent();
        }
        this.removeClass('ivaap-text--error');
        return this;
    };
    return TextField;
}();
