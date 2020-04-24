/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @typedef  mui.ElementOptionsType
 * @property {boolean} fitToParent
 * @property {number} width
 * @property {height} height
 * @property {boolean} expandedToParent
 * @property {string} crossAxisAlignSelf
 * @property {mui.Style} style
 *
 * @typedef {mui.ElementOptionsType & mui.CreateElementOptions} mui.ElementOptions
 *
 * Wrapper of Dom element
 * @class mui.Element
 * @param {mui.ElementOptions} options
 * @implements {mui.IElement}
 * @constructor
 *
 */
mui.Element = function(){

    var ANIM_EVT_NAME = function () {
        var t,
            el = document.createElement("fakeelement");

        var animations = {
            "animation": "animationend",
            "OAnimation": "oAnimationEnd",
            "MozAnimation": "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        };

        for (t in animations) {
            if (!animations.hasOwnProperty(t)) continue;
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    }();
    var TRANS_EVT_NAME =  function () {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }();
    var counter = 0;
    var Element = function(options){
        if(options==null)options = {};
        this._children = [];
        this._el = this.create(options);
        var guid = options['guid']?options['guid']:'gui-id-'+(++counter);
        this._el.__GUID = guid;
        this._el.__ref = this;
        this._el.classList.add('mui-el');
        if(options['fitToParent']){
            this._el.classList.add('mui-el--fit-to-parent');
        }
        var w = options['width'];
        var h = options['height'];
        if(w!=null){
            this.setWidth(w);
        }
        if(h!=null){
            this.setHeight(h);
        }

        if( options['expandedToParent']){
            this.addClass('mui-flex-child--expanded');
        }
        if(options['crossAxisAlignSelf']){
            this.addClass('mui-flex__cross-axis-self--'+options['crossAxisAlignSelf']);
        }

        if(options['style']){
            options['style'].apply(this._el);
        }

    };
    Element.ANIM_EVT_NAME = ANIM_EVT_NAME;

    /**
     * @inheritDoc
     */
    Element.prototype.dispose = function(){
        while(this._children.length>0){
            this._children[this._children.length-1].detach();
        }
        this.detach();
        this._el.__ref = null;
        this._el = null;

    };

    /**
     * Get animation event name
     * @return {string}
     */
    Element.prototype.getAnimName = function(){
        return Element.ANIM_EVT_NAME;
    };
    /**
     * Get transition event name
     * @return {string}
     */
    Element.prototype.getTransitionName = function(){
        return TRANS_EVT_NAME;
    };

    /**
     * Make this instance  a root node
     * @return {mui.Element}
     */
    Element.prototype.makeMeAsRoot = function(){
        if(this._parent){
            throw "Please detach it first";
        }
        this._isRoot = true;
        return this;
    };

    /**
     * Get dom element
     * @return {mui.Element}
     */
    Element.prototype.getElement = function(){
        return this._el;
    };
    /**
     * Add Class
     * @param {string | Array.<string>} className
     * @param {mui.Element}
     */
    Element.prototype.addClass = function(className,el){
        if(el==null){
            el = this._el;
        }
        var arrList = el.classList;
        if(Array.isArray(className)) {
            className.forEach(function(name){
                if(arrList.contains(name))return;
                arrList.add(name);
            });
            return this;
        }
        arrList.add(className);
        return this;

    };
    /**
     * Set width
     * @param {number| string} w
     */
    Element.prototype.setWidth = function(w){
        this.getElement().style.width = typeof w=='number'?w+'px':w;
        this._cachedWidth = null;
        return this;
    };
    /**
     * Set height
     * @param {number| string}
     */
    Element.prototype.setHeight = function(h){
        this.getElement().style.height = typeof h=='number'?h+'px':h;
        this._cachedHeight = null;
        return this;
    };


    /**
     * Get width
     * @return {number}
     */
    Element.prototype.getWidth = function(){
        if(this._cachedWidth==null){
            this._cachedWidth = this.getElement().getBoundingClientRect().width;
        }
        return this._cachedWidth;
    };
    /**
     * Get height
     * @return {number}
     */
    Element.prototype.getHeight = function(){
        if(this._cachedHeight==null){
            this._cachedHeight = this.getElement().getBoundingClientRect().height;
        }
        return this._cachedHeight;
    };
    /**
     * Remove class
     * @param {string} className
     * @return {mui.Element}
     */
    Element.prototype.removeClass = function(className){
        var arrList = this._el.classList;
        if(Array.isArray(className)) {
            className.forEach(function(name){
                if(!arrList.contains(name))return;
                arrList.remove(name);
            });
            return this;
        }
        arrList.remove(className);
        return this;


    };

    /**
     * Is visible
     * @return {boolean}
     */
    Element.prototype.isVisible = function(){
        return !this._el.classList.contains('el--hidden');
    };

    /**
     * Set visibility
     * @param {boolean} bool
     * @param {boolean} removeFromDom
     * @return {mui.Element}
     */
    Element.prototype.setVisible = function(bool,removeFromDom){
        if(this.isVisible()===bool)return;
        if(bool) {
            this._el.classList.remove('el--hidden');
        }else{
            this._el.classList.remove('el--hidden');
        }
        this._onVisible();
        if(!bool && removeFromDom){
            this.detach();
        }
        return this;
    };

    Element.prototype._onVisible = function(){
        this.wasVisible();
        this._invokeVisibleChildren(this._onVisible);
    };

    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasVisible = function(){
    };

    /**
     * Add dom children at root level
     * @protected
     * @param {HTMLElement} element
     * @return {mui.Element}
     */
    Element.prototype.add = function(element){
        for(var i =0;i<arguments.length;i++){
            if(arguments[i]) {
                this._el.appendChild(arguments[i]);
            }
        }
        return this;
    };
    /**
     * Remove dom children
     * @protected
     * @param {HTMLElement} element
     * @return {mui.Element}
     */
    Element.prototype.remove = function(element){
        for(var i =0;i<arguments.length;i++){
            if(arguments[i].parentNode!==this._el)continue;
            this._el.removeChild(arguments[i]);
        }
        return this;
    };
    /**
     * Detach all virtual elements
     * @return {mui.Element}
     */
    Element.prototype.detachAllChildren = function(){
        this._children.forEach(function(child){
           child.detach();
        });
        return this;
    };

    /**
     * Clear all dom children
     * @protected
     * @return {mui.Element}
     */
    Element.prototype.clear = function(){
        var elm = this._el;
        while(elm.lastChild){
            elm.removeChild(elm.lastChild);
        }
        return this;
    };


    Element.prototype._invokeChildren = function(fn){
        this._children.forEach(function(child){
            fn.apply(child);
        });
    };
    Element.prototype._invokeVisibleChildren = function(fn){
        this._children.forEach(function (child){
            if(child.isVisible()) {
                fn.apply(child);
            }
        });
    };


    /**
     * Detach from parent
     * @return {mui.Element}
     */
    Element.prototype.detach = function(){
        if(!this._isRoot && !this._parent){
            return this;
        }
        if(this._el.parentNode==null){
            if(this._isRoot){
                return this;
            }
            throw "Illegal removed";

        }
        this._el.parentNode.removeChild(this._el);
        if(!this._isRoot) {
            var idx = this._parent._children.indexOf(this);
            if (idx == -1) {
                throw "child is not found";
            }
            this._parent._children.splice(idx, 1);
            this._parent = null;
        }
        this._onDetached();
        return this;
    };
    Element.prototype._onDetached = function(){
        this.wasDetached();
        this._invokeVisibleChildren(this._onDetached);
    };
    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasDetached = function(){

    };

    /**
     * Attach to another Element
     * @package
     * @param {HTMLElement | mui.Element} element
     * @return {mui.Element}
     */
    Element.prototype.attachTo = function(element){
        if(element instanceof Element){
            element = element._el;
        }
        if(element===this._el.parentNode)return this;
        var e = element;
        while(e && !e.__ref){
            e = e.parentNode;
        }
        if(e==null){
            if(this._isRoot){
                this.detach();
                element.add(this._el);
                this._onAttached();
                this.setVisible(true);
                this._onResize();
                return this;
            }

            throw "Cant attach to non Element node";
        }
        if(this._isRoot){
            throw "Cant assign root to another Element";
        }

        var ref = e.__ref;

        if(this._parent===ref){
            //Same parent, just move to a different container
            element.appendChild(this._el);
            this._onResize();
            return this;

        }
        //different parent
        this.detach();

        this._parent = ref;
        ref._children.push(this);
        element.appendChild(this._el);

        this.setVisible(true);
        this._onAttached();
        this._onResize();
        return this;
    };

    Element.prototype._onAttached = function(){
        this.wasAttached();
        this._invokeChildren(this._onAttached);
    };
    /**
     * @protected
     * @virtual
     * @function
     */
    Element.prototype.wasAttached = function(){

    };
    Element.prototype._onResize = function(){
        this.onResize();
        this._invokeVisibleChildren(this._onResize);
    };
    /**
     * @protected
     * @virtual
     * @virtual
     */
    Element.prototype.onResize = function(){

    };


    /**
     * Get Parent
     * @return {?mui.Element}
     */
    Element.prototype.getParent = function(){
        return this._parent;
    };


    /**
     * Find the closest parent element which has class name
     * @param {HTMLElement} target
     * @param {string} findClassName
     * @return {HTMLElement}
     */
    Element.prototype.closest = function(target,findClassName){
        return Element.closest(target,findClassName);

    };
    /**
     * Find the closest parent element which has class name
     * @static
     * @param {HTMLElement} target
     * @param {string} findClassName
     * @return {HTMLElement}
     */
    Element.closest = function(target,findClassName){
        var node = target;
        while(true){
            if(node && node.classList && node.classList.contains(findClassName)){
                return node;
            }
            node = node.parentNode;
            if(node==null){
                return;
            }
        }
    };


    /**
     * Create html element
     * @param {mui.CreateElementOptions} options
     * @return {HTMLElement}
     */
    Element.prototype.create = function(options){
        return Element.create(options);
    };

    /**
     * @typedef mui.CreateElementOptions
     * @property {string} className
     * @property {string} type
     * @property {string} text
     * @property {Array.<Object>} attributes
     *
     * Create DOM Element
     * @static
     * @param {mui.CreateElementOptions} options
     * @return  {HTMLElement}
     */
    Element.create = function(options){
        if(typeof options=='string'){
            options = {'className':options};
        }
        if(options==null){
            options = {};
        }
        var elm =  document.createElement(options['type']?options['type']:'DIV');
        if(options['className']){
            elm.className = options['className'];
        }

        if(options['text']){
            elm.textContent = options['text'];
        }
        if(options['attributes']){
            options['attributes'].forEach(function(attr){
                elm.setAttribute(attr['key'],attr['value']);
            });
        }
        return elm;

    };
    Element.offClickOutside = function(element){
        if(element.__mouseDownHandler){
            document.removeEventListener('mousedown',element.__mouseDownHandler,true);
            element.__mouseDownHandler = null;
        }
    };

    /**
     * Add handler to click event outside container
     * @static
     * @param {HTMLElement} element
     * @param {function} callback
     */
    Element.onClickOutside = function(element,callback){
        element.classList.add('mui-popup--open');
        element.__mouseDownHandler = function(evt){
            var found = Element.closest(evt.target,'mui-popup--open');
            if(found)return;
            var removed = callback();
            if(removed===false)return;
            document.removeEventListener('mousedown',element.__mouseDownHandler,true);
            element.__mouseDownHandler = null;

        }.bind(this);
        document.addEventListener('mousedown',element.__mouseDownHandler,true);
    };

    /**
     * Align two container relatively to each other
     * @static
     * @param {HTMLElement} targetElement
     * @param {HTMLElement} anchorElement
     * @param {string} hPoint left,right
     * @param {string} top,bottom vPoint
     * @param {string} hDirection lef,right
     * @param {string} vDirection top,bottom
     * @param {number} xOffset
     * @param {number} yOffset
     */
    Element.aligns = function(targetElement,anchorElement,hPoint,vPoint,hDirection,vDirection,xOffset,yOffset){
        var pWidth = document.documentElement.clientWidth
        var pHeight = document.documentElement.clientHeight;
        var anchorRect = anchorElement.getBoundingClientRect();
        targetElement.style.minWidth = anchorRect.width+'px';
        if(hPoint==null){
            hPoint = anchorRect.left>pWidth/2?'right':'left';
        }
        if(vPoint==null){
            vPoint = anchorRect.top>pHeight/2?'top':'bottom';
        }
        if(hDirection==null){
            hDirection = anchorRect.left<pWidth/2?'right':'left';
        }
        if(vDirection==null){
            vDirection = anchorRect.top>pHeight/2?'top':'bottom';
        }
        if(xOffset==null)xOffset=0;
        if(yOffset==null)yOffset=4;


        var x = anchorRect[hPoint];
        var y = anchorRect[vPoint];
        y = vDirection=='top'?y-yOffset:y+yOffset;
        Element.position(targetElement,x,y,hDirection,vDirection);

    };

    /**
     * Position container
     * @static
     * @param {HTMLElement} targetElement
     * @param {number} x
     * @param {number} y
     * @param {string} hDirection left,right
     * @param {string} vDirection top,bottom
     */
    Element.position = function(targetElement,x,y,hDirection,vDirection){
        var pWidth = document.documentElement.clientWidth
        var pHeight = document.documentElement.clientHeight;
        var targetRect = targetElement.getBoundingClientRect();

        if(hDirection=='left'){
            targetElement.style.right = (pWidth-x)+'px';
            targetElement.style.left = 'auto';
        }else if(targetRect.width+x>pWidth){
            targetElement.style.right = '0px';
            targetElement.style.left = 'auto';
        }else{
            targetElement.style.left = (x)+'px';
            targetElement.style.right = 'auto';
        }
        if(vDirection=='top'){
            targetElement.style.bottom = (pHeight-y)+'px';
            targetElement.style.top = 'auto';
        }else if(targetRect.height+y>pHeight){
            targetElement.style.bottom = '0px';
            targetElement.style.top = 'auto';
        }else{
            targetElement.style.top = y+'px';
            targetElement.style.bottom = 'auto';
        }
    };

    /**
     * Close popup
     * @static
     * @param {mui.Element} popupElement
     */
    Element.closePopup = function(popupElement){
        popupElement.detach();
        mui.Element.offClickOutside(popupElement.getElement());
        if(popupElement._windowScrollHandler){
            window.removeEventListener('scroll',popupElement._windowScrollHandler);
            popupElement._windowScrollHandler =null;
        }
    };
    /**
     * Show popup relatively to another element
     * @static
     * @param {mui.Element} popupElement
     * @param {HTMLElement} anchorElement
     * @param {string} hPoint left,right
     * @param {string} vPoint top,bottom
     * @param {string} xDir left,right
     * @param {string} yDir top,bottom
     * @param {number} xOffset
     * @param {number} yOffset
     */
    Element.showPopupRelativeToElement = function(popupElement,anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset){
        popupElement.detach();
        popupElement.makeMeAsRoot();
        popupElement.getElement().style.position='fixed';
        popupElement.getElement().style.zIndex='9999';
        popupElement.attachTo(document.getElementsByTagName('BODY')[0]);
        Element.aligns(popupElement.getElement(),anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset);
        Element.onClickOutside(popupElement.getElement(),function(){
            Element.closePopup(popupElement);
        });
        if(popupElement._windowScrollHandler==null){
            popupElement._windowScrollHandler = Element.aligns.bind(null,popupElement.getElement(),anchorElement,hPoint,vPoint,xDir,yDir,xOffset,yOffset);
            window.addEventListener('scroll',popupElement._windowScrollHandler);
        }

    };
    /**
     * Show popup at position
     * @static
     * @param {mui.Element} popupElement
     * @param {number} x
     * @param {number} y
     * @param {string} hAlign left,right
     * @param {string} vAlign top,bottom
     */
    Element.showPopupAt = function(popupElement,x,y,hAlign,vAlign){
        popupElement.detach();
        popupElement.makeMeAsRoot();
        popupElement.getElement().style.position='fixed';
        popupElement.getElement().style.zIndex='9999';
        popupElement.attachTo(document.getElementsByTagName('BODY')[0]);
        mui.Element.position(popupElement.getElement(),x,y,hAlign,vAlign);
        mui.Element.onClickOutside(popupElement.getElement(),function(){
            Element.closePopup(popupElement);
        });
    };

    /**
     * Inherit the prototype methods from one constructor into another.
     * Based on the Closure Library
     *
     * @param {Function} childClass Child class.
     * @param {Function} parentClass Parent class.
     */
    Element.inherits = function (childClass, parentClass) {
        mui.inherits(childClass,parentClass);

    };
    return Element;
}();

/**
 * Base event
 * @class mui.Event
 * @constructor
 * @param {mui.Element} src
 * @param {*} target
 * @param {Event} nativeEvt
 */
mui.Event = function() {
    var Event = function (src,target,nativeEvt) {
        this._src = src;
        this._target = target;
        this._nativeEvt = nativeEvt;
        this._stopped = false;
    };
    /**
     * Component stop propagation (not native stopPropagation)
     *
     */
    Event.prototype.stopPropagation = function () {
        this._stopped = true;
    };

    /**
     * Get Target
     * @return {*}
     */
    Event.prototype.getTarget = function () {
        return this._target;
    };

    /**
     * Get source
     * @return {mui.Element }
     *
     */
    Event.prototype.getSource = function () {
        return this._src;
    };
    /**
     * Is propagation stopped
     * @return {boolean}
     */
    Event.prototype.isStopped = function () {
        return this._stopped;
    };
    /**
     * Get native dom event
     * @return {Event}
     */
    Event.prototype.getNativeEvt = function () {
        return this._nativeEvt;
    };
    return Event;
}();

/**
 * Root Element
 * Cant be added to another element, must be topmost element in the tree structure
 * @class mui.Root
 * @param {mui.ElementOptions} options
 * @constructor
 */
mui.Root = function(){
    var Root = function(options){
        mui.Element.call(this,options);
        this.makeMeAsRoot();
    };
    mui.inherits(Root,mui.Element);
    return Root;
}();

/**
 *
 * Abstract Multiple Child Container
 * @class mui.MultipleChildContainer
 * @augments mui.Element
 * @param {mui.ElementOptions} options
 * @constructor
 */
mui.AbstractMultipleChildContainer = function(){
    var AbstractMultipleChildContainer = function(options){
        mui.Element.call(this,options);
    };
    mui.inherits(AbstractMultipleChildContainer,mui.Element);
    /**
     * Add Child
     * @abstract
     * @function
     * @param {mui.Element} child
     * @return {mui.AbstractMultipleChildContainer}
     */
    AbstractMultipleChildContainer.prototype.addChild = function(child){
        throw "must implement";
    };
    return AbstractMultipleChildContainer;
}();


/**
 * @typedef mui.MultipleChildContainerOptions
 * @property {Array.<mui.Element>} children
 *
 * Multiple Child Container with same parent dom
 * @class mui.MultipleChildContainer
 * @augments mui.AbstractMultipleChildContainer
 * @param {mui.MultipleChildContainerOptions} options
 * @constructor
 */
mui.MultipleChildContainer = function(){
    var MultipleChildContainer = function(options){
        mui.AbstractMultipleChildContainer .call(this,options);
        if(options['children']) {
            this.setChildren(options['children']);
        }
    };
    mui.inherits(MultipleChildContainer,mui.AbstractMultipleChildContainer );

    /**
     * @inheritDoc
     */
    MultipleChildContainer.prototype.addChild = function(child){
        if(child){
            child.attachTo(this.getElement());
        }
        return this;
    };
    /**
     * Set children
     * @param {Array.<mui.Element>} arr
     * @return {mui.MultipleChildContainer}
     */
    MultipleChildContainer.prototype.setChildren = function(arr){
        this.detachAllChildren();
        if(arr==null)return this;
        for (var i=0;i<arr.length;i++){
            arr[i].attachTo(this.getElement());
        }
        return this;
    };
    return MultipleChildContainer;
}();
/**
 * @typedef mui.AbstractSingleChildContainerOptions
 * @property {mui.Element} child
 *
 * Abstract Single Child Container
 * @class mui.AbstractSingleChildContainer
 * @augments mui.Element
 * @param {mui.AbstractSingleChildContainerOptions} options
 * @constructor
 */
mui.AbstractSingleChildContainer = function(){
    var AbstractSingleChildContainer = function(options){
        mui.Element.call(this,options);
        this.setChild(options['child']);
    };
    mui.inherits(AbstractSingleChildContainer,mui.Element);
    /**
     * Get Child
     * @return {mui.Element}
     */
    AbstractSingleChildContainer.prototype.getChild = function(){
        return this.getChildren()[0];
    };
    /**
     * Set Child
     * @abstract
     * @function
     * @param {mui.Element} child
     * @return {mui.AbstractSingleChildContainer }
     */
    AbstractSingleChildContainer.prototype.setChild = function(child){
        throw "must implement";

    };
    return AbstractSingleChildContainer;
}();

/**
 * Single Child Container
 * @class mui.SingleChildContainer
 * @augments mui.AbstractSingleChildContainer
 * @param {mui.AbstractSingleChildContainerOptions} options
 * @constructor
 */
mui.SingleChildContainer = function(){
    var SingleChildContainer = function(options){
        mui.AbstractSingleChildContainer.call(this,options);
        this.setChild(options['child']);
    };
    mui.inherits(SingleChildContainer,mui.AbstractSingleChildContainer);

    /**
     * @inheritDoc
     */
    SingleChildContainer.prototype.setChild = function(child){
        this.detachAllChildren();
        if(child) {
            child.attachTo(this.getElement());
        }
    };
    return SingleChildContainer;
}();


/**
 * @typedef {mui.SingleChildContainerOptions} mui.CenterOptions
 *
 * Container with content is center
 * @class mui.Center
 * @augments mui.SingleChildContainer
 * @param {mui.CenterOptions} options
 *ta
 */
mui.Center = function(){
    var Center = function(options){
        if(options==null){
            options = {};
        }
        mui.SingleChildContainer.call(this,options);
        this.addClass('mui-center');
    };
    mui.inherits(Center,mui.SingleChildContainer);

    return Center;
}();


/**
 * @typedef BoxOptions
 * @property {string} options.mainAxisAlign (start,end,center)
 * @property {string} options.crossAxisAlign (start,end,center)
 * @typedef {mui.MultipleChildContainer & BoxOptions} mui.Box.BoxOptions
 *
 * Flex box container
 * @class mui.Box
 * @augments mui.MultipleChildContainer
 * @param {mui.Box.BoxOptions} options
 */
mui.Box = function(){
    var Box = function(options){
        if(options==null){
            options = {};
        }
        mui.MultipleChildContainer.call(this,options);
        this.addClass('mui-box');
        if(options['mainAxisAlign']){
            this.addClass('mui-box__main-axis--'+options['mainAxisAlign']);
        }
        if(options['crossAxisAlign']){
            this.addClass('mui-box__cross-axis--'+options['crossAxisAlign']);
        }
    };
    mui.inherits(Box, mui.MultipleChildContainer);


    return Box;
}();

/**
 * @typedef VBoxOptions
 * @property {string} horizontalAlign (left,right,center)
 * @property {string} verticalAlign (top,bottom,center)
 * @typedef {mui.BoxOptions & VBoxOptions} mui.VBoxOptions
 *
 * VBox
 * @class mui.VBox
 * @augments mui.Box
 * @constructor
 * @param {mui.VBoxOptions} options
 *
 */
mui.VBox = function(){
    var HOR_ALIGN = {
        'left':'start',
        'right':'end',
        'center':'center',
    };
    var VER_ALIGN = {
        'top':'start',
        'bottom':'end',
        'middle':'center',
    };
    var VBox = function(options){
        if(options==null){
            options = {};
        }
        if(options['horizontalAlign']) {
            options['crossAxisAlign'] = HOR_ALIGN[options['horizontalAlign']];
        }
        if(options['verticalAlign']) {
            options['mainAxisAlign'] = VER_ALIGN[options['verticalAlign']];
        }
        mui.Box.call(this,options);
        this.addClass('mui-vbox');
    };
    mui.inherits(VBox,mui.Box);
    return VBox;
}();


/**
 *
 * @typedef HBoxOptions
 * @property {string} horizontalAlign (left,right,center)
 * @property {string} verticalAlign (top,bottom,center)
 * @typedef {mui.BoxOptions && HBoxOptions} mui.HBoxOptions
 *
 * HBox
 * @class mui.HBox
 * @augments mui.Box
 * @constructor
 * @param {mui.HBoxOptions} options
 *
 */
mui.HBox = function(){
    var VER_ALIGN = {
        'top':'start',
        'bottom':'end',
        'middle':'center',
    };
    var HOR_ALIGN = {
        'left':'start',
        'right':'end',
        'center':'center',
    };
    var VBox = function(options){
        if(options==null){
            options = {};
        }
        if(options['verticalAlign']) {
            options['crossAxisAlign'] = VER_ALIGN[options['verticalAlign']];
        }
        if(options['horizontalAlign']) {
            options['mainAxisAlign'] = HOR_ALIGN[options['horizontalAlign']];
        }

        mui.Box.call(this,options);
        this.addClass('mui-hbox');

    };
    mui.inherits(VBox,mui.Box);
    return VBox;
}();
