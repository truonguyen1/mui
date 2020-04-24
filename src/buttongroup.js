/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ButtonGroup.ButtonClick
 * @param {}
 *
 * @callback mui.ButtonGroup.ActiveChanged
 * @param {string} id
 * @param {mui.ButtonGroup} source
 *
 * @callback mui.ButtonGroup.SelectedChanged
 * @param {string} id
 * @param {mui.ButtonGroup} source
 *
 *
 * @typedef mui.ButtonGroupOptions
 * @property {mui.IEntityCollection} items
 * @property {mui.ButtonGroup.ButtonClick} onButtonClick
 * @property {mui.ButtonGroup.ActiveChanged} onActiveChanged
 * @property {mui.ButtonGroup.SelectedChanged} onSelectedChanged
 *
 * Button Group
 * @class mui.ButtonGroup
 * @augments mui.Element
 * @param {mui.ButtonGroupOptions} options
 * @constructor
 *
 */
mui.ButtonGroup = function(){
    var ButtonGroup = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button-group';
        mui.Element.call(this,options);
        this._onButtonClick = options['onButtonClick'];
        this._onActiveChanged = options['onActiveChanged'];
        this._onSelectedChanged = options['onSelectedChanged'];
        this._active = [];
        this.addClass('mui-button-group');
        if(options['vertical']){
            this.addClass('mui-button-group--ver');
        }else{
            this.addClass('mui-button-group--hor');
        }
        this.setItems (options['items']);
    };
    mui.inherits(ButtonGroup,mui.Element);

    /**
     * @inheritDoc
     */
    ButtonGroup.prototype.dispose = function(){
        if(this._cachedBtn){
            this._cachedBtn.forEach(function(act){
                act.dispose();
            }.bind(this));
            this._cachedBtn = null;
        }
        this._items = null;
        this._onActiveChanged = null;
        this._onSelectedChanged = null;
        this._onButtonClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    ButtonGroup.prototype._handleBtnClick = function(id){
        if(this._onButtonClick){
            this._onButtonClick(this,id);
            return;
        }
        this.setSelected(id);
    };
    /**
     * Set items
     * @param {mui.EntityCollection} items
     * @reutrn {mui.ButtonGroup}
     */
    ButtonGroup.prototype.setItems = function(items){
        this._items = items;
        var cached = new Map();
        var it = items.getChildren();
        while(it.hasNext()){
            var act = it.next();
            var id = items.getId(act);
            var btn = new mui.Button({
                'label':items.getName(act),
                'icon':items.getIcon(act),
                'className':'mui-button-group__btn',
                'onClick':this._handleBtnClick.bind(this,id)
            });
            if(this._active.indexOf(id)!==-1){
                btn.addClass('mui-button-group__btn--active');
            }
            if(this._selected==id){
                btn.addClass('mui-button-group__btn--selected');
            }
            btn.attachTo(this.getElement());
            cached.set(id,btn);
        }
        this._cachedBtn = cached;
        return this;
    };
    /**
     * Get Active
     * @return {Array.<string>}
     */
    ButtonGroup.prototype.getActive = function(){
        return this._active.slice(0);
    };
    /**
     * Get selected
     * @return {?string}
     */
    ButtonGroup.prototype.getSelected = function(){
        return this._selected;
    };
    /**
     * Set selected
     * @param {string} id
     * @return {mui.ButtonGroup}
     */
    ButtonGroup.prototype.setSelected = function(id){
        if(this._selected===id)return this;
        if(this._cachedBtn && this._cachedBtn.get(this._selected)){
            this._cachedBtn.get(this._selected).removeClass('mui-button-group__btn--selected');
        }
        this._selected = id;
        if(this._cachedBtn && this._cachedBtn.get(id)){
            this._cachedBtn.get(id).addClass('mui-button-group__btn--selected');
        }
        if(this._onSelectedChanged){
            this._onSelectedChanged(id,this);
        }
        return this;
    };
    /**
     * Toggle active
     * @param {string} id
     * @return {mui.ButtonGroup}
     */
    ButtonGroup.prototype.toggleActive = function(id){
        var idx =this._active.indexOf(id);
        if(idx!==-1){
            this._active.splice(idx,1);
            if(this._cachedBtn&& this._cachedBtn.get(id)){
                this._cachedBtn.get(id).removeClass('mui-button-group__btn--active');
            }
        }else{
            this._active.push(id);
            if(this._cachedBtn&& this._cachedBtn.get(id)){
                this._cachedBtn.get(id).addClass('mui-button-group__btn--active');
            }
        }
        if(this._onActiveChanged){
            this._onActiveChanged(id,this);
        }
    };
    return ButtonGroup;
}();
