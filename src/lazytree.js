/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @interface mui.ILazyTreeData
 * @augments mui.IEntityCollection
 */
mui.ILazyTreeData = function(){
    var ILazyTreeData = function(){

    };
    ILazyTreeData.prototype.isError = function(){
        throw "must implement";
    };
    ILazyTreeData.prototype.isLoading = function(){
        throw "must implement";

    };
    return ILazyTreeData;

}();
/**
 * @callback mui.LazyTree.CustomDisplayStrategy
 * @param {HTMLElement} displayElement
 * @param {*} nodeData
 *
 * @typedef mui.LazyTreeOptions
 * @property {mui.ILazyTreeData} data
 * @property {boolean} hasSettings
 * @property {boolean} descriptionVisible
 * @property {boolean} showExpandIcon
 * @property {mui.IEntityCollection} itemSettings
 * @property {mui.AbstractMenu.ItemClickCallback} onItemSettingClick
 * @property {mui.LazyTree.CustomDisplayStrategy} customDisplayStrategy
 *
 * Lazy tree
 * @constructor
 * @class mui.LazyTree
 * @augments mui.Element
 * @param {mui.LazyTreeOptions} options
 *
*/
mui.LazyTree = function(){
    var EXPAND_ICON_SIZE = 16;
    var EXPAND_ICON_PADDING = 8;
    var NODE_LEFT_PADDING = 8;

    var ICON_PADDING=4;
    var ICON_SIZE = 16; /**also from css*/


    /**
     * @constructor
     * @param {mui.LazyTreeOptions} options
     */
    var LazyTree =function(options){
        mui.Element.call(this,options);
        this.addClass('ivaap-lazy-tree');
        //Collection adapter for lazy list
        this._listData = new ListData({
            'data':options['data']
        });
        this._view = new LazyTreeList({
            'hasSettings':options['hasSettings'],
            'data':this._listData,
            'onItemClick':options['onItemClick'],
            'descriptionVisible':options['descriptionVisible'],
            'customDisplayStrategy':options['customDisplayStrategy'],
            'showExpandIcon':options['showExpandIcon'],
            'onItemSettingClick':options['onItemSettingClick'],
            'itemSettings':options['itemSettings']
        });
        this._view.attachTo(this);
    };
    mui.inherits(LazyTree,mui.Element);

    LazyTree.prototype.dispose = function(){
        this._view.dispose();
        this._view = null;
        this._listData = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set data
     * @param {mui.ILazyTreeData} data
     * @return {mui.LazyTree}
     */
    LazyTree.prototype.setData = function(data){
        this._listData.setData(data);
        this._view.update();
        return this;
    };
    /**
     * Set selected
     * @param {string} item
     * @return {mui.LazyTree}
     */
    LazyTree.prototype.setSelected = function(item){
        this._listData.setSelected(item);
        this._view.update();
        return this;
    };
    /**
     * Get selected
     * @return {string}
     */
    LazyTree.prototype.getSelected = function(){
        return this._listData.getSelected();
    };

    /**
     * Toggle expanded
     * @param {string} id
     */
    LazyTree.prototype.toggleExpanded = function(id){
        this._listData.toggleExpanded(id);
        this._view.update();
    };
    /**
     * @inheritDoc
     */
    LazyTree.prototype.update = function(){
        this._view.update();
    };


    /**
     * @private
     */
    var LazyTreeList = function(options){
        mui.AbstractLazyList.call(this,options);


        this._iconVisible=true;
        this._descVisible = options['descriptionVisible'];
        this._customDisplayStrategy = options['customDisplayStrategy'];
        this._onItemClick = options['onItemClick'];
        this._hasSettings = options['hasSettings'];
        this._onItemSettingClick = options['onItemSettingClick'];
        this._itemSettings = options['itemSettings'];
        this._onExpandIconClick = options['onExpandIconClick'];
        this._expandIcon = options['expandIcon'] || 'ivaap-lazy-tree__item-expand-icon--expanded';
        this._collapseIcon = options['collapseIcon'] || 'ivaap-lazy-tree__item-expand-icon--collapsed';
        this._showExpandIcon = options['showExpandIcon'];

        this._parentIcon = options['parentIcon'] || 'ivaap-lazy-tree__item-parent-icon';
        this._childIcon = options['childIcon'] || 'ivaap-lazy-tree__item-child-icon';

        this.addClass('ivaap-lazy-tree__lazy-list');
        this.getElement().addEventListener('click',this._handleClick.bind(this));
        this._data = options['data'];
        this.update();
    };
    mui.inherits(LazyTreeList,mui.AbstractLazyList);


    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.dispose = function(){
        this._idToItemMappings = null;
        this._onExpandIconClick = null;
        this._onItemSettingClick = null;
        this._itemSettings = null;
        this._onItemClick = null;
        this._childItemTemplate = null;
        this._parentItemTemplate = null;
        this._hasSettings= null;
        this._data =null;
        this._customDisplayStrategy = null;
        mui.AbstractLazyList.prototype.dispose.call(this);
    };

    LazyTreeList.prototype._handleClick = function(evt){
        var target = evt.target;
        var found=null;
        var args = null;
        if(this._onExpandIconClick) {
            found = this.closest(target, 'ivaap-lazy-tree__item-expand-icon');
            if (found) {
                args = new mui.Event(this,this._idToItemMappings.get( found.__id),evt);
                this._onExpandIconClick(args);
                if(args.isStopped()){
                    return;
                }
            }

        }
        if(this._onItemSettingClick){

            found = this.closest(target, 'ivaap-lazy-tree__setting-icon');
            if (found) {
                if(this._menu==null) {
                    this._menu = new mui.Menu({
                        'items':this._itemSettings
                    });
                }
                this._menu.onItemClick(function(setting){
                    var item = this._idToItemMappings.get(found.__id);
                    this._onItemSettingClick(item,setting);
                }.bind(this));
                mui.Element.showPopupRelativeToElement(this._menu,found,'right','top','right','bottom',0,0);
                return this;
            }


        }

        if(this._onItemClick) {
            found = this.closest(target, 'ivaap-lazy-tree__item');
            if (found) {
                args = new mui.Event(this,this._idToItemMappings.get( found.__id),evt);
                this._onItemClick(args);
            }

        }
    };

    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.willRender=function() {
        this._idToItemMappings = new Map();
        this._idToElementsMappings = new Map();
    };


    /**
     * Get visible node
     * @param {string} id
     * @return {*}
     */
    LazyTreeList.prototype.getRenderedNodeById=function(id){
        return this._idToItemMappings.get(id);
    };

    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.getChildrenIterator =function(){
        return this._data.getChildren();
    };

    LazyTreeList.prototype.getChildTemplate = function(dataNode,it){
        if (this._childItemTemplate == null) {
            var item = this.create({
                'className': 'ivaap-lazy-tree__item'
            });

            if(this._iconVisible) {
                var icon = this.create({
                    'className': 'ivaap-lazy-tree__item-icon'
                });
                icon.style.padding = ICON_PADDING+'px';
                item.appendChild(icon);
            }

            var text = this.create({
                'className': 'ivaap-lazy-tree__item-display ivaap-lay-tree__item-display--clickable'
            });
            if (this._descVisible) {
                var txtPrimary = this.create({
                    'className': "ivaap-lazy-tree__label"
                });
                var txtSecond = this.create({
                    'className': "ivaap-lazy-tree__desc"
                });
                text.appendChild(txtPrimary);
                text.appendChild(txtSecond);
            }
            item.appendChild(text);
            this._childItemTemplate = item;
        }
        var newItem = this._childItemTemplate.cloneNode(true);
        return {
            'element':newItem,
            'icon':this._iconVisible?newItem.childNodes[0]:null,
            'desc':this._descVisible?newItem.childNodes[1].childNodes[1]:null,
            'title':this._descVisible?newItem.childNodes[1].childNodes[0]:newItem.childNodes[1]
        };
    };
    LazyTreeList.prototype.getParentTemplate = function(dataNode,it){
        if (this._parentItemTemplate == null) {
            this._parentOffset = 0;
            var expandIcon,icon,title,desc;
            var item = this.create({
                'className': 'ivaap-lazy-tree__item'
            });
            if(this._showExpandIcon!==false) {
                expandIcon = this.create({
                    'className': 'ivaap-lazy-tree__item-expand-icon'
                });
                expandIcon.style.padding = (EXPAND_ICON_PADDING)+'px';
                item.appendChild(expandIcon);
                this._parentOffset += EXPAND_ICON_SIZE + (EXPAND_ICON_PADDING*2);
            }
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'ivaap-lazy-tree__item-icon'
                });
                var padLeft = this._showExpandIcon!==false?ICON_PADDING:ICON_PADDING*2;
                icon.style.paddingLeft = padLeft+'px';
                // icon.style.marginRight = ICON_MARGIN_RIGHT+'px';
                item.appendChild(icon);
                this._parentOffset+=ICON_SIZE+padLeft;
            }

            var text = this.create({
                'className': 'ivaap-lazy-tree__item-display ivaap-lay-tree__item-display--clickable'
            });
            if (this._descVisible) {
                title = this.create({
                    'className': "mdc-list-item__primary-text"
                });
                desc = this.create({
                    'className': "mdc-list-item__secondary-text"
                });
                text.appendChild(title);
                text.appendChild(desc);
            }
            item.appendChild(text);
            this._parentItemTemplate = item;


        }
        var newItem = this._parentItemTemplate.cloneNode(true);

        var expandE = this._showExpandIcon!==false?newItem.childNodes[0]:null;
        var iconE = this._iconVisible?(this._showExpandIcon!==false?newItem.childNodes[1]:newItem.childNodes[0]):null;
        var displayE = newItem.childNodes[newItem.childNodes.length-1];
        var descE = this._descVisible?(displayE.childNodes[1]):null;
        var titleE = this._descVisible?displayE.childNodes[0]:displayE;
        return {
            'element':newItem,
            'icon':iconE,
            'desc':descE,
            'title':titleE,
            'expand':expandE
        };
    };


    /**
     * @inheritDoc
     */
    LazyTreeList.prototype.createRow = function(dataNode,it){
        var listData = this._data;
        if(listData==null)return;
        var nodeId = listData.getId(dataNode);

        this._idToItemMappings.set(nodeId,dataNode);

        var isParent = listData.isParent(dataNode);

        var newItemObj = isParent?this.getParentTemplate():this.getChildTemplate();
        var newItem = newItemObj['element'];
        // var className = dataNode.getAttribute('className');
        // if (className != null) {
        //     newItem.classList.add(className);
        // }
        if(listData.isSelected(dataNode)){
            newItem.classList.add('ivaap-lazy-tree__item--selected');
        }

        var descElement = newItemObj['desc'];
        var nameElement = newItemObj['title'];
        var expandElement = newItemObj['expand'];
        var iconElement =newItemObj['icon'];

        if(expandElement) {
            expandElement.__id = nodeId;
            if (listData.isError(dataNode)) {
                expandElement.classList.add('ivaap-lazy-tree__item-expand-icon--error');

            } else if (listData.isLoading(dataNode)) {
                // newItem.childNodes[0].textContent = 'replay'
                expandElement.classList.add('ivaap-lazy-tree__item-expand-icon--spin');
            } else if (isParent) {
                expandElement.classList.add(listData.isExpanded(nodeId) ? this._expandIcon : this._collapseIcon);
            }
        }

        if(iconElement) {
            var iconClass = listData.getIcon(dataNode);
            var clssNm ='ivaap-lazy-tree__item-icon '+ (iconClass == null ?( isParent?this._parentIcon:this._childIcon ): iconClass);
            iconElement.className = clssNm;
        }

        if(this._customDisplayStrategy){
            this._customDisplayStrategy(nameElement,dataNode);
        }else {
            var name = listData.getName(dataNode);
            var desc = listData.getDescription(dataNode);
            if (descElement && desc) {
                descElement.textContent = desc;
                // newItem.style.height = height + 'px';
            }
            if (name) {
                nameElement.textContent = name;
            }
        }
        if(this._hasSettings===true || (typeof this._hasSettings=='function' && this._hasSettings(dataNode))){
            var settingIcon = this.create({'type':'button','className':'ivaap-lazy-tree__setting-icon'});
            settingIcon.__id = nodeId;
            newItem.appendChild(settingIcon);
        }
        newItem.__id = nodeId;
        var lvl = it.getLevel(dataNode);
        var left = Math.max(lvl*this._parentOffset+NODE_LEFT_PADDING,NODE_LEFT_PADDING);
        newItem.style.paddingLeft = left+'px';
        return newItem;
    };

    /**
     * List adapter iterator
     * @private
     * @param {function} getChildrenGetter
     * @param {function} isExpandedGetter
     * @implements {mui.IIterator}
     * @constructor
     */
    var ListIterator = function (getChildrenGetter,isExpandedGetter) {
        this._isExpandedGetter = isExpandedGetter;
        this._getChildrenGetter = getChildrenGetter;
        this._curIt = getChildrenGetter();
        this._curIt.__level = 0;
        this._stackedIt = [];
        this._levelMap = new Map();


    };
    ListIterator.prototype.getLevel = function(node){
        return node.__level;
        return this._levelMap.get(node);
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.next = function(){
        if (!this._curIt) {
            return;
        }
        var cur = this._curIt.next();
        if(cur) {
            cur.__level = this._curIt.__level;
            // this._levelMap.set(cur,this._curIt.__level);
        }
        if (this._isExpandedGetter(cur)) {
            var it = this._getChildrenGetter(cur);
            it.__level = this._curIt.__level + 1;
            if (this._curIt && this._curIt.hasNext()) {
                this._stackedIt.push(this._curIt);
            }
            this._curIt = it;
        }

        if (this._curIt && !this._curIt.hasNext()) {
            this._curIt = this._stackedIt.pop();
        }
        return cur;
    };
    /**
     * @inheritDoc
     */
    ListIterator.prototype.hasNext = function(){
        return this._curIt && this._curIt.hasNext();
    };

    /**
     * List Data Adapter
     * @private
     * @param options
     * @constructor
     * @implements {mui.ILazyListData}
     */
    var ListData = function(options){
        this._expanded = new Set();
        this._data = options['data'];

    };

    /**
     * Toggle expanded
     * @param {string} id
     */
    ListData.prototype.toggleExpanded=function(id) {

        if (this._expanded.has(id)) {
            this._expanded.delete(id);
        } else {
            this._expanded.add(id);
        }
    };
    /**
     * Is expanded
     * @param {string} id
     * @return {boolean}
     */
    ListData.prototype.isExpanded=function(id) {
        return this._expanded.has(id);
    };



    /**
     * Check if node is selected
     * @param {DataNode} node
     * @return {boolean}
     */
    ListData.prototype.isSelected=function(node){
        var id = this._data.getId(node);
        return this._selected === id;
    };

    /**
     * Get selected
     * @return {DataNode}
     */
    ListData.prototype.getSelected=function(){
        return this._selected;
    };
    /**
     * Set selected
     * @param {} node
     */
    ListData.prototype.setSelected=function(node){
        this._selected =  this._data.getId(node);
        return this;
    };
    /**
     * Is parent
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isParent = function(entity){
        return this._data.isParent(entity);

    };
    /**
     * Is error
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isError = function(entity){
        return this._data.isError(entity);

    };
    /**
     * Is loading
     * @param {*} entity
     * @return {boolean}
     */
    ListData.prototype.isLoading = function(entity){
        return this._data.isLoading(entity);

    };

    /**
     * @inheritDoc
     */
    ListData.prototype.getId = function(entity){
        return entity.getId();
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getName = function(entity){
        return this._data.getName(entity);
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getDescription = function(entity){
        return this._data.getDescription(entity);
    };
    /**
     * @inheritDoc
     */
    ListData.prototype.getIcon = function(entity){
        return this._data.getIcon(entity);
    };

    /**
     * @inheritDoc
     */
    ListData.prototype.getChildren = function(){
        return new ListIterator(this._data.getChildren.bind(this._data),this.isExpanded.bind(this));
    };



    return LazyTree;
}();
