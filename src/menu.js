/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.AbstractMenu.ItemClickCallback
 * @param {mui.IEntity} item
 *
 * @typedef {Object} mui.AbstractMenuOptions
 * @property  {?mui.IEntityCollection} items
 * @property  {?mui.IEntity} parentEntity
 * @property  {mui.AbstractMenu.ItemClickCallback} onItemClick

 * Abstract Menu
 * @abstract
 * @class {mui.AbstractMenu}
 * @augments mui.Element
 * @param {mui.AbstractMenuOptions} options
 */
mui.AbstractMenu = function(){
    var AbstractMenu = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass('ivaap-menu');
        this._ul = this.create({'type':'ul','className':'ivaap-menu__item-container'});
        this.add(this._ul);
        this._items = options['items'];
        this._parentEntity = options['parentEntity'];
        this._onItemClick = options['onItemClick'];
        this.setItems(options['items']);
        this._liClickHandler =function(evt){
            var found =this.closest(evt.target,'ivaap-menu__item');
            if(found==null){
                return;
            }
            var item = this._cachedItems.get(found.__id);
            var stop = this.handleItemClick(found.__id,item,found,evt);
            if(stop===false)return;
            this.triggerItemClick(item);
        }.bind(this);
        this.getElement().addEventListener('click',this._liClickHandler);
    };
    mui.inherits(AbstractMenu,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractMenu.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._liClickHandler);
        this._liClickHandler =null;

        this._ul = null;
        this._items = null;
        this._parentEntity = null;
        this._cachedItems = null;
        this._cachedElements = null;
        this._onItemClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    AbstractMenu.prototype.handleItemClick= function(){


    };

    /**
     * Set selected
     * @param {string} id
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setSelected = function(id){
        var elm = this._cachedElements.get(this._selectedId);
        if(elm){
            elm.classList.remove('ivaap-menu__item--selected');
        }
        this._selectedId = id;
        elm =this._cachedElements.get(id);
        if(elm){
            elm.classList.add('ivaap-menu__item--selected');
        }
        return this;
    };

    /**
     * Get Selected
     * @return {string}
     */
    AbstractMenu.prototype.getSelected = function(){
        return this._selectedId;
    };
    /**
     * @protected
     * @param {mui.IEntity} item
     */
    AbstractMenu.prototype.triggerItemClick = function(item){
        if(this._onItemClick){
            this._onItemClick(item);
        }
    };
    /**
     * Set item click callback
     * @param {mui.AbstractMenu.ItemClickCallback} fn
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.onItemClick = function(fn){
        this._onItemClick = fn;
        return this;
    };

    /**
     * Set parent entity
     * @param {mui.IEntity} item
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setParentEntity = function(item){
        this._parentEntity = item;
        this.updateItems();
        return this;
    };

    /**
     * Set items
     * @param {mui.IEntityCollection} items
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.setItems = function(items){
        this._items = items;
        this.updateItems();
        return this;
    };

    /**
     * Get cached item by id
     * @param {string} id
     * @return {?mui.IEntity}
     */
    AbstractMenu.prototype.getItem = function(id){
        return this._cachedItems.get(id);

    };

    /**
     * Create item
     * @abstract
     * @function
     * @param {mui.IEntityCollection} data
     * @param {mui.IEntity} item
     * @return {HTMLElement}
     */
    AbstractMenu.prototype.createItem = function(data,item){
        throw "must implement";
    };

    /**
     * @function
     * @virtual
     */
    AbstractMenu.prototype.willRender = function(){
    };
    /**
     * Update Items
     * @return {mui.AbstractMenu}
     */
    AbstractMenu.prototype.updateItems = function(){
        this.willRender();
        this._ul.clear();
        if(this._items==null)return this;
        var data = this._items;
        var items = data.getChildren(this._parentEntity);
        var elm,item;
        var frag = document.createFrag();
        this._cachedItems = new Map();
        this._cachedElements = new Map();
        while(items.hasNext()){
            item = items.next();
            var id = data.getId(item);
            elm = this.createItem(data,item);
            elm.classList.add('ivaap-menu__item');
            elm.__id = id;
            if(elm.__id===this._selectedId){
                elm.classList.add('ivaap-menu__item--selected');
            }
            frag.add(elm);
            this._cachedItems.set(id,item);
            this._cachedElements.set(id,elm);
        }
        this._ul.add(frag);
        return this;
    };
    return AbstractMenu;
}();

/**
 * Menu
 * @constructor
 * @class mui.Menu
 * @augments mui.AbstractMenu
 * @param {mui.AbstractMenuOptions} options
 *
 */
mui.Menu = function(){
    var Menu = function(options){
        mui.AbstractMenu.call(this,options);
    };
    mui.inherits(Menu,mui.AbstractMenu);

    /**
     * @inheritDoc
     */
    Menu.prototype.dispose = function(){
        if(this._windowScrollHandler){
            window.removeEventListener('scroll',this._windowScrollHandler);
            this._windowScrollHandler = null;
        }
        if(this._subMenu){
            this._subMenu.detach();
            this._subMenu.dispose();
            this._subMenu = null;
        }

        mui.AbstractMenu.prototype.dispose.call(this);
    };
    Menu.prototype.handleItemClick = function(id,item,itemElement,evt){
        if(itemElement.classList.contains('ivaap-menu__item--parent')){
            this.toggleSubMenu(id);
            return false;
        }
        if(this.isSubMenuOpen()){
            this.closeSubMenu();
        }
    };
    /**
     * If submenu is open
     * @return {boolean}
     */
    Menu.prototype.isSubMenuOpen = function(){
        return this._subMenu && this._subMenu.getElement().parentNode;
    };
    /**
     * Open submenu
     * @param {string} parentId
     * @return {mui.Menu}
     */
    Menu.prototype.openSubMenu = function(parentId){
        if(parentId==null)return this;
        if(this._subMenu==null){
            this._subMenu = new Menu({
                'items':this._items,
                'onItemClick':this.triggerItemClick.bind(this)
            });
        }
        this._subMenu.setParentEntity(this.getItem(parentId));
        this._subMenu.__parentId = parentId;
        var parentEl = this._cachedItemElements.get(this._subMenu.__parentId);
        mui.Element.showPopupRelativeToElement(this._subMenu,parentEl,'right','top','right');
        return this;
        //todo: onclose destroy the submenu
    };
    /**
     * Close submenu
     * @return {mui.Menu}
     */
    Menu.prototype.closeSubMenu = function(){
        if(this._subMenu==null)return this;
        mui.Element.closePopup(this._subMenu);
        this._subMenu.dispose();
        this._subMenu = null;
        return this;
    };

    /**
     * Toggle submenu
     * @param {string} parentId
     * @return {mui.Menu}
     */
    Menu.prototype.toggleSubMenu = function(parentId){
        if(this.isSubMenuOpen()){
            this.closeSubMenu();
        }else{
            this.openSubMenu(parentId);
        }
        return this;

    };
    /**
     * @inheritDoc
     */
    Menu.prototype.willRender = function(){
        this._cachedItemElements = new Map();
    };
    /**
     * @inheritDoc
     */
    Menu.prototype.createItem = function(data,item){
        var icon = data.getIcon(item);
        var isParent = data.isParent(item);
        var id = data.getId(item);

        var elm = this.create({'type': 'li'});
        if (icon) {
            var iconE = this.create('ivaap-menu__item-icon ' + icon);
            elm.add(iconE);
        }
        var nameE = this.create('ivaap-menu__item-label');
        nameE.textContent = data.getName(item);
        elm.add(nameE);

        if (isParent) {
            var expandIcon = this.create("ivaap-menu__item-parent-icon");
            elm.add(expandIcon);
            elm.classList.add('ivaap-menu__item--parent');
        }
        this._cachedItemElements.set(id,elm);
        return elm;
    };



    return Menu;
}();

/**
 * @typedef ImageMenuOptions
 * @property {number} options.imageWidth
 * @property {number} options.imageHeight
 *
 * @typedef {mui.AbstractMenuOptions && ImageMenuOptions} mui.ImageMenuOptions
 *
 * Image Menu
 * @class {mui.ImageMenu}
 * @augments mui.AbstractMenu
 * @param {mui.ImageMenuOptions} options
 */
mui.ImageMenu = function(){
    var ImageMenu = function(options){
        if(options==null){
            options = {};
        }
        mui.AbstractMenu.call(this,options);
        this._imageWidth = options['imageWidth'];
        this._imageHeight = options['imageHeight'];
    };
    mui.inherits(ImageMenu,mui.AbstractMenu);

    /**
     * @inheritDoc
     */
    ImageMenu.prototype.dispose = function(){
        mui.AbstractMenu.prototype.dispose.call(this);
    };

    /**
     * @inheritDoc
     */
    ImageMenu.prototype.createItem = function(data,item){
        var id = data.getId(item);
        var image = data.getImage(item);
        var name = data.getName(item);

        var elm = this.create({'type': 'li'});
        elm.setAttribute('title',name);
        var imageE = this.create('ivaap-menu__item-image');
        imageE.style.backgroundImage = 'url("'+image+'")';
        if(this._imageWidth) {
            imageE.style.width = this._imageWidth;
        }
        if(this._imageHeight){
            imageE.style.height = this._imageHeight;
        }
        elm.add(imageE);
        elm.__id = id;
        return elm;
    };

    return ImageMenu;
}();

