/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.RadioGroup.Changed
 * @param {string} id
 *
 *@typedef  mui.RadioGroupOptions
 * @property {boolean} vertical
 * @property {mui.IEntityCollection} items
 * @property {mui.RadioGroup.Changed} onChanged
 *
 * RadioGroup
 * @class mui.RadioGroup
 * @augments mui.Element
 * @param { mui.RadioGroupOptions} options
 *
 */
mui.RadioGroup = function(){
    var RadioGroup = function(options){
        if(options==null){
            options = {};
        }
        mui.Element.call(this,options);
        this._onChanged = options['onChanged'];
        this.addClass('mui-radio-group');
        if(options['vertical']){
            this.addClass('mui-radio-group--ver');
        }else{
            this.addClass('mui-radio-group--hor');
        }
        this.setItems (options['items']);
    };
    mui.inherits(RadioGroup,mui.Element);

    /**
     * @inheritDoc
     */
    RadioGroup.prototype.dispose = function(){
        if(this._cachedBtn){
            this._cachedBtn.forEach(function(act){
                act.dispose();
            }.bind(this));
            this._cachedBtn = null;
        }
        this._onChanged = null;
        this._onButtonClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    RadioGroup.prototype._handleBtnClick = function(id){
        if(this._onButtonClick){
            this._onButtonClick(this,id);
            return;
        }
        this.setActive(id);
    };
    /**
     * Set Items
     * @param {mui.IEntityCollection} items
     * @return {mui.RadioGroup}
     */
    RadioGroup.prototype.setItems = function(items){
        this._items = items;
        var it = items.getChildren();
        var cached = new Map();
        var frag = document.createFrag();
        while(it.hasNext()) {
            var act = it.next();
            var id = items.getId(act);
            this.create({'className':'mui-radio-group__btn','type':'button'}).add(

            )

            var btn = new mui.Button({
                'label': items.getName(act),
                'icon': this._selected ===id ? 'mui-radio-group__btn-icon-selected' : 'mui-radio-group__btn-icon-empty',
                'className': 'mui-radio-group__btn ' + (this._selected === id ? 'mui-radio-group__btn--selected' : ''),
                'onClick': this._handleBtnClick.bind(this, id)
            });
            btn.attachTo(this.getElement());
            cached.set(id, btn);
        }
        this._cachedBtn = cached;
    };

    /**
     * Set Active
     * @param {string} id
     * @return {mui.RadioGroup}
     */
    RadioGroup.prototype.setActive = function(id){
        if(this._selected===id)return;
        if(this._cachedBtn && this._cachedBtn.get(this._selected)){
            this._cachedBtn.get(this._selected).setIcon('mui-radio-group__btn-icon-empty');
            this._cachedBtn.get(this._selected).removeClass('mui-radio-group__btn--selected');

        }
        this._selected = id;
        if(this._cachedBtn && this._cachedBtn.get(id)) {
            this._cachedBtn.get(id).setIcon('mui-radio-group__btn-icon-selected');
            this._cachedBtn.get(id).addClass('mui-radio-group__btn--selected');
        }
        if(this._onChanged){
            this._onChanged(id);
        }
        return this;
    };
    return RadioGroup;
}();
