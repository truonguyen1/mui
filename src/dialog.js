/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.Dialog.BackgroundClick
 * @param {mui.Dialog}
 *
 * @typedef mui.DialogOptions
 * @property {mui.Element} content
 * @property {boolean} modal
 * @property {mui.Dialog.BackgroundClick} onBackgroundClick
 *
 * Dialog view
 * @class mui.Dialog
 * @augments mui.Element
 * @param {mui.DialogOptions} options
 */

mui.Dialog = function(){

    var Dialog = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass(['mui-dialog']);
        this._contentContainer = this.create('mui-dialog__content');
        if(options['modal']){
            this._background = this.create("mui-dialog__background");
            this.add(this._background);
            this._background.add(this._contentContainer);
            this._backgroundClickHandler =function(evt){
                if(this._onBackgroundClick){
                    this._onBackgroundClick();
                    return;
                }
            }.bind(this);
            this._background.addEventListener('click',this._backgroundClickHandler);
            this.addClass('mui-dialog--modal');

        }else{
            this.add(this._contentContainer);
        }
        if(options['content']){
            this.setContent(options['content']);
        }
        if(options['onBackgroundClick']){
            this._onBackgroundClick = options['onBackgroundClick'];
        }
        this._contentClickHandler =function(evt){
            evt.stopPropagation();
        }.bind(this);
        this._contentContainer.addEventListener('click',this._contentClickHandler);
    };
    mui.inherits(Dialog,mui.Element );

    /**
     * @override
     */
    Dialog.prototype.dispose = function(){
        this._contentContainer.removeEventListener('click',this._contentClickHandler);
        this._contentClickHandler = null;

        if(this._backgroundClickHandler) {
            this._background.removeEventListener('click', this._backgroundClickHandler);
            this._backgroundClickHandler =null;
        }
        this._onBackgroundClick = null;

        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Set background click callback
     * @param {mui.Dialog.BackgroundClick} fn
     * @return {mui.Dialog}
     */
    Dialog.prototype.onBackgroundClick = function(fn){
        this._onBackgroundClick = fn;
        return this;
    };
    /**
     * @typedef mui.Dialog.ContentOptions
     * @property {mui.Style} style
     *
     * Show dialog
     * @param {mui.Element} content
     * @param {mui.Dialog.ContentOptions} options
     * @return {mui.Dialog}
     */
    Dialog.prototype.setContent = function(content,options){
        if(options==null)options = {};
        if(this._content){
            this._content.detach();
        }
        this._content = content;
        if(this._content==null)return;

        if(options['style']){
            options['style'].apply(this._contentContainer);
        }
        this._content.attachTo(this._contentContainer);
        return this;
    };
    var _dialogs = new Map();
    var _dialogCounter  =0;

    /**
     * @typedef mui.DialogModalOptions
     * @property {?string} id  auto generated if empty
     * @property {?HTMLElement} parent
     * @property {?mui.Element} content
     * @property {?function} onclose
     * @property {?mui.Style } style
     *
     * Show modal dialog
     * @static
     * @param {mui.DialogModalOptions} options
     * @return {string} dialog id
     */
    Dialog.showModal = function(options){
        if(options==null){
            options = {};
        }
        var id = options['id'];
        var parent = options['parent'];
        var content = options['content'];
        if(id==null){
            id=='ivp-dialog-'+(++_dialogCounter);
        }
        var dialogInstance = _dialogs.get(id);
        if(dialogInstance==null){
            dialogInstance = new Dialog({
                'modal':true
            });
            _dialogs.set(id,dialogInstance);
        }
        dialogInstance.detach();
        if(parent==null){
            parent = document.getElementsByTagName('body')[0];
            dialogInstance.makeMeAsRoot();
            dialogInstance.attachTo(parent);
        }else{
            dialogInstance.attachTo(parent);
        }
        dialogInstance.onBackgroundClick(function () {
            if(options['onClose']){
                options['onClose'](Dialog);
                return;
            }
            Dialog.close(id);
        });
        dialogInstance.setContent(content,{
            'style':options['style']
        });
        return id;
    };

    /**
     * Close dialog
     * @static
     * @param {string} id
     */
    Dialog.close = function(id){
        var dialog = _dialogs.get(id);
        if(dialog){
            dialog.detach();
        }
    };
    return Dialog;

}();
