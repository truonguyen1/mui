/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.LazyList.ActionClick
 * @param {mui.Event}
 * @callback mui.LazyList.ItemClick
 * @param {mui.Event}
 * @callback mui.LazyList.ItemDoubleClick
 * @param {mui.Event}
 *
 * @typedef LazyListType
 * @param {string} options.emptyThumbnail path to thumbnail image
 * @param {boolean} options.iconVisible
 * @param {string} options.iconType avatar or thumbnail
 * @param {boolean} options.hasSettings
 *
 * @param {mui.LazyList.ActionClick} onActionClick
 * @param {mui.AbstractMenu.ItemClickCallback} onItemSettingClick
 * @param {mui.LazyList.ItemClick} onItemClick
 * @param {mui.LazyList.ItemDoubleClick} onDoubleClick
 *
 * @param {mui.IEntityCollection}} data
 * @param {mui.IEntityCollection} options.itemSettings
 * @param {mui.IEntityCollection} options.itemActions
 * @param {mui.IEntityCollection} options.selectedRowActions
 *
 * @typedef {mui.AbstractLazyListOptions & LazyListType} mui.LazyListOptions
 *
 *
 * Lazy List
 * @constructor
 * @class mui.LazyList
 * @augments mui.AbstractLazyList
 * @param {mui.LazyListOptions} options
 *
 *
*/
mui.LazyList = function(){
    var LazyList = function(options){
        mui.AbstractLazyList.call(this,options);

        //TODO improve this alt holder path
        this._altHolder = options['emptyThumbnail'];
        this._iconVisible = options['iconVisible'];
        this._iconType = options['iconType'] || 'avatar';
        this._hasSettings = options['hasSettings'];
        this._itemSettings = options['itemSettings'];
        this._itemActions = options['itemActions'];
        this._selectedRowActions =options['selectedRowActions'];
        this._itemClickHandler = function(evt){
            var elm,args;
            if( options['onItemSettingClick']) {
                elm = this.closest(evt.target, 'ivaap-lazy-list__setting-icon');
                if (elm) {
                    if(this._menu==null) {
                        this._menu = new mui.Menu({
                            'items':this._itemSettings
                        });
                    }
                    var item = this._idToNodeMappings.get(elm.__id);
                    this._menu.onItemClick(function(setting){
                        options['onItemSettingClick'](item,setting);
                    });
                    mui.Element.showPopupRelativeToElement(this._menu,elm,'right','top','right','bottom',0,0);
                    return this;
                }
            }
            if(options['onActionClick']){
                elm = this.closest(evt.target,'ivaap-lazy-list__action');
                if(elm) {
                    args = new mui.Event(this,{'actionId':elm.__actId,'itemId':this._idToNodeMappings.get(elm.__nodeId)},evt);
                    options['onActionClick'](args);
                    if(args.isStopped()){
                        return;
                    }
                }
            }
            if(options['onItemClick']){
                elm = this.closest(evt.target,'ivaap-lazy-list__item');
                if(elm==null)return;
                args = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onItemClick'](args);
            }

        }.bind(this);
        this._itemDblClickHandler = function(evt) {
            if(options['onDoubleClick']){
                var elm = this.closest(evt.target,'ivaap-lazy-list__item');
                if(elm==null)return;
                evt = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onDoubleClick'](elm.__id);
            }
        }.bind(this);

        this._content.addEventListener('click',this._itemClickHandler);
        this._content.addEventListener('dblclick',this._itemDblClickHandler);
        this.setData(options['data']);
    };
    mui.inherits(LazyList,mui.AbstractLazyList);

    /**
     * @inheritDoc
     */
    LazyList.prototype.dispose = function(){
        this._content.removeEventListener('click',this._itemClickHandler);
        this._content.removeEventListener('dblclick',this._itemDblClickHandler);
        this._content = null;
        this._itemClickHandler = null;
        this._itemDblClickHandler = null;
        this._idToNodeMappings = null;
        this._idToRenderedElement = null;

        this._itemSettings = null;
        this._hasSettings = null;
        this._itemActions = null;
        this._selectedRowActions = null;

        this._itemTemplate = null;
        this._iconVisible = null;
        this._iconType = null;
        mui.AbstractLazyList.prototype.dispose.call(this);
    };

    /**
     * @inheritDoc
     */
    LazyList.prototype.createContent=function(node){
        return this.create({'type':'ul','className':'ivaap-lazy-list__content'});
    };
    /**
     * Is selected
     * @param {string} node
     * @return {boolean}
     */
    LazyList.prototype.isSelected=function(id){
        return this._selected === id;

    };

    /**
     * Set selected
     * @param id
     * @return {mui.LazyList}
     */
    LazyList.prototype.setSelected=function(id){
        var prev = this._idToRenderedElement.get(this._selected);
        if(prev){
            prev.classList.remove('ivaap-lazy-list__item--selected');
        }
        if(this._cachedSelectedRowActContainer){
            this._cachedSelectedRowActContainer.removeFromParent();
            this._cachedSelectedRowActContainer = null;
        }
        this._selected =id;
        var elm = this._idToRenderedElement.get(id);
        if(elm){
            elm.classList.add('ivaap-lazy-list__item--selected');
        }
        if(this._selectedRowActions) {
            this._cachedSelectedRowActContainer =this.createRowAction(this._selectedRowActions,id);
            elm.add(this._cachedSelectedRowActContainer);
        }

        return this;

        // this._idToNodeMappings
        // this._requestRender();
    };

    /**
     * Set text filter
     * @param {string} txt
     * @return {mui.LazyList}
     */
    LazyList.prototype.setTextFilter=function(txt){
        this._textFilter = txt;
        this.update();
        return this;
    };

    /**
     * @inheritDoc
     */
    LazyList.prototype.isNodeHidden=function(node){
        if(!this._textFilter)return false;
        return node.getName().toLowerCase().indexOf(this._textFilter.toLowerCase())==-1;

    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.wasVisible =function() {
        mui.AbstractLazyList.prototype.wasVisible.call(this);
        this.update();
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.willRender=function() {
        this._idToNodeMappings = new Map();
        this._idToRenderedElement = new Map();
    };
    /**
     * @private
     * @param collection
     * @param nodeId
     * @return {*}
     */
    LazyList.prototype.createRowAction=function(collection,nodeId) {
        var iconClass,label;
        var frag = document.createFrag();
        var it = collection.getChildren();
        while(it.hasNext()){
            var act = it.next();
            iconClass =collection.getIcon(act);
            label = collection.getName(act);
            var actE =  this.create({'type': 'button', 'className': 'ivaap-lazy-list__action'});
            if(iconClass){
                actE.add(this.create('ivaap-lazy-list__action-icon '+iconClass));
            }
            if(label){
                actE.add(this.create({'className':'ivaap-lazy-list__action-label','text':label}));
            }
            actE.__actId = collection.getId(act);
            actE.__nodeId = nodeId;
            frag.add(actE);

        }
        return this.create('ivaap-lazy-list__action-container').add(frag);
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.createRow=function(dataNode) {
        var icon;
        var listData= this.getData();
        if(this._itemTemplate==null) {
            var item = this.create({
                'type':'li',
                'className':'ivaap-lazy-list__item'
            });
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'ivaap-lazy-list__item-icon'
                });
                if(this._iconType!=='avatar'){
                    icon.style.backgroundImage = 'url(' + this._altHolder + ')';
                }
                item.add(icon);
            }
            var textContainer = this.create({'className':'ivaap-lazy-list__text-container'});
            var txtPrimary = this.create({'className': "ivaap-lazy-list__item-title"});
            var txtSecond = this.create({'className': "ivaap-lazy-list__item-desc"});
            textContainer.add(txtPrimary);
            textContainer.add(txtSecond);

            item.add(textContainer);
            this._itemTemplate = item;
        }
        var id = listData.getId(dataNode);
        var newItem = this._itemTemplate.cloneNode(true); //cloning is faster by 50%
        if(id ==this._selected){
            newItem.classList.add('ivaap-lazy-list__item--selected');
        }

        var iconItem = this._iconVisible?newItem.childNodes[0]:null;
        var textElement = this._iconVisible?newItem.childNodes[1]:newItem.childNodes[0];
        var descElement = textElement.childNodes[1];
        var nameElement = textElement.childNodes[0];


        if(iconItem) {
            if(this._iconType=='avatar') {
                icon = listData.getIcon(dataNode);
                if (icon != null) {
                    iconItem.className = 'ivaap-lazy-list__item-icon '+icon;
                }
            }else{
                var thumbnail = null;//TODO
                iconItem.classList.add('ivaap-lazy-list__item-icon-thumbnail');
                if(thumbnail) {
                    iconItem.style.backgroundImage = 'url(' + thumbnail + ')';
                }

            }
        }

        if(descElement){
            var desc = listData.getDescription(dataNode);
            if (desc) {
                descElement.textContent = desc;
            }

        }
        if(nameElement){
            var name = listData.getName(dataNode);
            if(name) {
                nameElement.textContent = name;
            }
        }

        if(this._selected ===id && this._selectedRowActions){
            this._cachedSelectedRowActContainer = this.createRowAction(this._selectedRowActions,id);
            newItem.add(this._cachedSelectedRowActContainer);
        }
        if(this._itemActions){
           newItem.add(this.createRowAction(this._itemActions,id));
        }

        if(this._hasSettings===true || typeof this._hasSettings=='function' && this._hasSettings(dataNode)){
            var setting = this.create({'type':'button','className':'ivaap-lazy-list__setting-icon'});
            setting.__id  = id;
            newItem.add(setting);
        }
        newItem.__id =id;
        this._idToNodeMappings.set(dataNode.getId(),dataNode);
        this._idToRenderedElement.set(dataNode.getId(),newItem);
        return newItem;
    };

    return LazyList;
}();
