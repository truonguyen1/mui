/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(44);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
window.geotoolkit = window.geotoolkit ||  {};
window.ivaap = {};
window.ivaap.ui = {};
window.ivaap.ui.defaultv2 = {};

geotoolkit.inherits =function(childClass,parentClass){
    if (parentClass == null) {
        throw new Error('parentClass should not be undefined');
    }
    /**
     *
     * @private
     */
    function TemporaryClass () {
    }

    TemporaryClass.prototype = parentClass.prototype;
    childClass._super = parentClass.prototype;
    childClass.getSuperClass = function () {
        return childClass._super;
    };
    childClass.prototype = new TemporaryClass();
    childClass.prototype.constructor = childClass;

    childClass.prototype.getClassName = function () {
        return childClass._className;
    };

    childClass.prototype.getSuperClass = function () {
        return childClass._super;
    };
    childClass.parent = parentClass;
    return childClass;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

mui = {};

mui.inherits = function(childClass,parentClass){
    if (parentClass == null) {
        throw new Error('parentClass should not be undefined');
    }
    /**
     *
     * @private
     */
    function TemporaryClass () {
    }

    TemporaryClass.prototype = parentClass.prototype;
    childClass._super = parentClass.prototype;
    childClass.getSuperClass = function () {
        return childClass._super;
    };
    childClass.prototype = new TemporaryClass();
    childClass.prototype.constructor = childClass;

    childClass.parent = parentClass;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Iterator Interface
 * @interface mui.IIterator
 */
mui.IIterator = (function () {
    var IIterator = function () {};

    /**
     * @abstract
     * @function
     * @return {boolean}
     */
    IIterator.prototype.hasNext = function(){
        throw "must implement";
    };
    /**
     * Next
     * @abstract
     * @function
     * @return {*}
     */
    IIterator.prototype.next = function(){
        throw "must implement";
    };

    return IIterator;
})();


/**
 * Entity interface.
 *
 * @interface
 */
mui.IEntity = (function () {
    var IEntity = function () {

    };

    /**
     * Get Id
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getId = geotoolkit.abstractMethod;


    /**
     * Get Name
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getName = geotoolkit.abstractMethod;


    /**
     * Get Description
     *
     * @function
     * @abstract
     *
     * @return {string}
     */
    IEntity.prototype.getDescription = geotoolkit.abstractMethod;

    /**
     * Get icon
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getIcon = geotoolkit.abstractMethod;

    /**
     * Check if resource has been loaded
     *
     * @function
     * @abstract
     *
     * @return {boolean}
     */
    IEntity.prototype.isLoaded = geotoolkit.abstractMethod;

    /**
     * Get Type
     * @function
     * @abstract
     * @return {string}
     */
    IEntity.prototype.getType = geotoolkit.abstractMethod;

    /**
     * Get property
     * @function
     * @abstract
     * @return {string} prop
     * @return {*}
     */
    IEntity.prototype.getProperty = geotoolkit.abstractMethod;

    /**
     * Get create a clone with customize properties
     * @function
     * @abstract
     * @return {object} props
     * @return {mui.IEntity}
     */
    IEntity.prototype.assign = geotoolkit.abstractMethod;
    return IEntity;
})();
/**
 * Base Entity
 * @class mui.Entity
 * @constructor
 * @implements mui.IEntity
 */
mui.Entity = function(){
    var counter = 0;
    var Entity = function(opts){
        this._opts = opts;
        this._id = opts['id']?opts['id']: 'item-'+(++counter);
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getId = function(){
        return this._id;
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getIcon = function () {
        return this._opts['icon'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getName = function () {
        return this._opts['name'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getType = function () {
        return this._opts['type'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.getDescription = function () {
        return this._opts['description'];
    };
    /**
     * @inheritDoc
     */
    Entity.prototype.assign = function () {
        throw "not yet implemented";
    };

    /**
     * @inheritDoc
     */
    Entity.prototype.getProperty = function (prop) {
        return this._opts[prop];
    };
    return Entity;
}();

/**
 * Collection Interface
 * @interface mui.ICollection
 */
mui.ICollection = (function () {
    var ICollection = function () {};

    /**
     * Get children iterator
     * @abstract
     * @function
     * @param {?mui.IEntity} entity
     * @return {mui.IIterator}
     */
    ICollection.prototype.getChildren = geotoolkit.abstractMethod;

    return ICollection;
})();


/**
 * Entity Collection Interface
 * @interface mui.IEntityCollection
 * @augments mui.ICollection
 */
mui.IEntityCollection = (function () {
    var IEntityCollection = function () {};

    /**
     * Get entity name
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getName = function(entity){
        throw "must implement";
    };


    /**
     * Get entity type
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getType = function(entity){
        throw "must implement";
    };
    /**
     * Get entity icon
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getIcon = function(entity){
        throw "must implement";
    };
    /**
     * Get entity description
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getDescription = function(entity){
        throw "must implement";
    };
    /**
     * Get entity id
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {string}
     */
    IEntityCollection.prototype.getId = function(entity){
        throw "must implement";
    };

    /**
     * If entity is a parent
     * @function
     * @abstract
     * @param {mui.IEntity} entity
     * @return {boolean}
     */
    IEntityCollection.prototype.isParent = function(entity){
        throw "must implement";
    };
    return IEntityCollection;
})();



/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Entity collection interface
 * @interface mui.IImageEntityCollection
 * @augments mui.IEntityCollection
 */
mui.IImageEntityCollection = function(){
    var IImageEntityCollection = function(){};

    /**
     * Get entity's image
     * @abstract
     * @function
     * @param {mui.IEntity} entity
     */
    IImageEntityCollection.prototype.getImage = function(entity){
        throw "must implement";
    };
    return IImageEntityCollection;
}();


/**
 * Array collection
 * @class mui.EntityCollection
 * @implements {mui.IEntityCollection }
 *
 */
mui.EntityCollection = function(){
    var EntityCollection = function(children){
        this._children = children;
    };

    EntityCollection.prototype.getName = function(entity){
        return entity.getName();
    };
    EntityCollection.prototype.getIcon = function(entity){
        return entity.getIcon();
    };
    EntityCollection.prototype.getDescription = function(entity){
        return entity.getDescription();
    };
    EntityCollection.prototype.getType = function(entity){
        return entity.getType();
    };
    EntityCollection.prototype.getId = function(entity){
        return entity.getId();
    };
    EntityCollection.prototype.isParent = function(entity){
        return Array.isArray(entity.getProperty('children'));
    };
    /**
     * @inheritDoc
     */
    EntityCollection.prototype.getChildren = function(parent){
        return new mui.ArrayIterator(parent==null?this._children.slice(0):parent.getProperty('children'));
    };
    return EntityCollection;
}();


/**
 * Array collection
 * @class mui.ImageEntityCollection
 * @implements {mui.IImageEntityCollection }
 * @augments mui.EntityCollection
 *
 */
mui.ImageEntityCollection = function(){
    var ImageEntityCollection = function(children){
        mui.EntityCollection.call(this,children);
    };
    mui.inherits(ImageEntityCollection,mui.EntityCollection);

    /**
     * @inheritDoc
     */
    ImageEntityCollection.prototype.getImage = function(entity){
        return entity.getProperty('image');
    };

    return ImageEntityCollection;
}();


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Array collection
 * @class mui.ArrayCollection
 * @implements mui.ICollection
 */
mui.ArrayCollection = function(){
    var ArrayCollection = function(children){
        this._children = children;
    };
    /**
     * @override
     * @return {mui.ArrayIterator}
     */
    ArrayCollection.prototype.getChildren = function(){
        return new mui.ArrayIterator(this._children.slice(0));
    };
    return ArrayCollection;
}();

/**
 * Array iterator
 * @class mui.ArrayIterator
 * @implements mui.IIterator
 */
mui.ArrayIterator = function(){
    var ArrayIterator = function(arr){
        this._arr = arr?arr:[];
        this._idx = -1;
        this._length = this._arr.length;
    };
    /**
     * @inheritDoc
     */
    ArrayIterator.prototype.hasNext = function(){
        return this._idx+1< this._length;
    };
    /**
     * @override
     * @param {number} skip
     * @return {*}
     */
    ArrayIterator.prototype.next = function(skip){
        if(skip==null){
            skip = 1;
        }
        this._idx = this._idx+skip;
        return this._arr[this._idx];
    };
    return ArrayIterator;

}();


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Create element with class name & type
 * @param {?string} type node type
 * @param {?string} className
 * @return {HTMLElement}
 */
Document.prototype.createWithClassName = function(type,className){
    if(type==null){
        type = 'DIV';
    }
    var element = this.createElement(type);
    if(className){
        element.className = className;
    }
    return element;
};
/**
 * Create document fragment
 * @type {() => DocumentFragment}
 */
Node.prototype.createFrag = Document.prototype.createDocumentFragment;

Node.prototype.clear = function(){
    while(this.lastChild){
        this.removeChild(this.lastChild);
    }
    return this;
};

/**
 * Append children to node
 * @return {...Node}
 */
Node.prototype.add = function(){
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]!=null) {
            this.appendChild(arguments[i]);
        }
    }
    return this;
};
Node.prototype.removeFromParent = function(){
    if(this.parentNode){
        this.parentNode.removeChild(this);
    }
    return this;
};
/**
 * Create child and append to Element
 * @param {?string} type Tag Name
 * @param {?string} className
 * @return {HTMLElement}
 */
Element.prototype.createChild = function(type,className){
    var child = this.ownerDocument.createWithClassName(type,className);
    this.appendChild(child);
    return child;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
mui.BuildContext = function(){
    var BuildContext = function (el){
        this._el = el;
    };

    return BuildContext;

}();
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
        var elm =  document.createElement(options['type']?options['type']:'DIV');
        if(options['className']){
            elm.className = options['className'];
        }
        this._el = elm;
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

        if( options['fitToParent']){
            this.addClass('mui-el--fit-to-parent');
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
    Element.prototype._initialize = function (){
        var node = this.build(new mui.BuildContext(this));
        if(node){
            node.attachTo(this._el);
        }
    };

    /**
     * @virtual
     * @param {} context
     */
    Element.prototype.build = function(context){


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
     * @protected
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
     * @protected
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
     * @protected
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


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback  mui.Button.Click
 * @param {mui.Button}
 *
 * @typedef {Object} mui.ButtonOptions
 * @property  {string} icon
 * @property  {boolean} isDropdown
 * @property {mui.AbstractMenu.ItemClickCallback} onMenuItemClick
 * @property  {string} label
 * @property  {string} description
 * @property  {function} onClick
 *
 * Button
 *
 * @class mui.Button
 * @param {mui.ButtonOptions} options
 * @augments mui.Element
 *
 */
mui.Button = function(){
    var Button = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this.addClass('mui-button');
        this._onMenuItemClick = options['onMenuItemClick'];
        this._iconE = this.create('mui-button__icon');
        this._labelE = this.create('mui-button__label');
        this._descE = this.create('mui-button__desc');
        this._carretE = this.create('mui-button__caret mui-button__caret-icon');
        this._leftContainer = this.create('mui-button__left-container');
        this._leftContainer.add(this._labelE,this._descE);

        this._iconClass = options['icon'];
        this._isDropDown = options['isDropdown'];
        this._label = options['label'];
        this._desc = options['description'];
        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
            }
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this._update();


    };
    mui.inherits(Button,mui.Element);

    /**
     * @inheritDoc
     */
    Button.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = 0;
        }
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this.closeMenu();
        this._onMenuItemClick = null;
        this._onClick = null;
        this._leftContainer =  null;
        this._iconE = null;
        this._labelE = null;
        this._descE =null;
        this._carretE = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Close dropdown menu
     * @return {mui.Button}
     */
    Button.prototype.closeMenu = function(){
        if(this._menu){
            mui.Element.closePopup(this._menu);
        }
        return this;
    };


    /**
     * @typedef {object} mui.ShowButtonDropdownOptions
     * @property {string} horizontalAlign left or right
     * @property {string} verticalAlign top or bottom

     * Show dropdown menu
     * @param {mui.IEntityCollection} items
     * @param {mui.ShowButtonDropdownOptions} options
     * @return {mui.Button}
     */
    Button.prototype.showMenu = function(items,options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        if(this._menu==null){
            this._menu = new mui.Menu({
                'onItemClick':this._onMenuItemClick
            });
        }
        this._menu.setItems(items);
        mui.Element.showPopupRelativeToElement(this._menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * Set Label
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setLabel = function(text){
        this._label = text;
        this._update();
        return this;
    };

    /**
     * Set description
     * @param {string} text
     * @return {mui.Button}
     */
    Button.prototype.setDescription = function(text){
        this._desc = text;
        this._update();
        return this;
    };

    /**
     * Set icon
     * @param {string} icon
     * @return {mui.Button}
     */
    Button.prototype.setIcon = function(icon){
        this._iconClass = icon;
        this._update();
        return this;
    };

    Button.prototype._update = function(){
        this.clear();
        if(this._iconClass){
            this._iconE.className = 'mui-button__icon '+ this._iconClass;
            this.add(this._iconE);
        }
        if(this._desc) {
            this._descE.textContent = this._desc;
        }
        if(this._label) {
            this._labelE.textContent = this._label;
        }
        if(this._desc || this._label){
            this.add(this._leftContainer);
        }
        if(this._isDropDown){
            this.add(this._carretE);
        }
    };
    return Button;
}();


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @callback mui.AbstractDropdown.ItemClick
 * @param {*} item
 *
 * @typedef mui.AbstractDropdownOptions
 * @property {mui.IEntityCollection} items
 * @property {mui.AbstractDropdown.ItemClick} onItemClick
 * @property {string} selected
 *
 *
 * Abstract Dropdown
 * @abstract
 * @class mui.AbstractDropdown
 * @augments mui.Element
 * @param {mui.AbstractDropdownOptions} options
 */
mui.AbstractDropdown = function(){
    var AbstractDropdown = function(options){
        if(options==null){
            options = {};
        }
        if(options['type']==null){
            options['type']='button';
        }
        mui.Element.call(this,options);
        this.addClass('mui-dropdown');
        this._onItemClick = options['onItemClick'];
        this.setSelected(options['selected']);
        this._clickHandler = function(evt){
            this.showMenu();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this.setItems(options['items']);
    };
    mui.inherits(AbstractDropdown,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractDropdown.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler = null;
        this._onItemClick = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Get Items
     * @protected
     * @return {mui.IEntityCollection}
     */
    AbstractDropdown.prototype.getItems = function(){
        throw "must implement";
    };
    /**
     * Set items
     * @protected
     * @param {mui.IEntityCollection} items
     */
    AbstractDropdown.prototype.setItems = function(items){
        throw "must implement";
    };

    /**
     * Set selected
     * @param {*} item
     */
    AbstractDropdown.prototype.setSelected = function(item){
        this._selected = item;
        this.updateDisplay();
    };
    /**
     * Get selected
     * @return {*}
     */
    AbstractDropdown.prototype.getSelected = function(){
        return this._selected;

    };
    AbstractDropdown.prototype._handleMenuItemClick = function(item){
        if(this._onItemClick){
            this._onItemClick(item);
            return;
        }
        this.setSelected(item);
    };

    /**
     * Show dropdown menu
     * @param {Object} options
     * @param {string} horizontalAlign left or right
     * @param {string} verticalAlign top or bottom
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.showMenu = function(options){
        if(options==null)options = {};
        var horAlign = options['horizontalAlign'];
        var verAlign = options['verticalAlign'];

        var menu = this.getMenu();
        menu.onItemClick(this._handleMenuItemClick.bind(this));
        menu.setItems(this.getItems());
        mui.Element.showPopupRelativeToElement(menu,this.getElement(),horAlign,verAlign);
        return this;
    };
    /**
     * @abstract
     * @function
     * @return {mui.AbstractMenu}
     */
    AbstractDropdown.prototype.getMenu = function(){
        throw "must implement";

    };
    /**
     * @abstract
     * @function
     */
    AbstractDropdown.prototype.createDisplay = function(){
        throw "must implement";
    };
    /**
     * Update display
     * @return {mui.AbstractDropdown}
     */
    AbstractDropdown.prototype.updateDisplay = function(){
        this.clear();
        var elm = this.createDisplay();
        elm.classList.add('mui-dropdown__display');
        this.add(elm);
        this._caret = this.create('mui-dropdown__caret-icon');
        this.add(this._caret);
        return this;
    };
    return AbstractDropdown;
}();

/**
 *
 * Dropdown
 * @class mui.Dropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions } options
 *
 */
mui.Dropdown = function(){
    var Dropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(Dropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    Dropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Dropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.Menu();
        }
        return this._menu;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.setItems = function(items){
        this._items = items;
    };

    /**
     * @inheritDoc
     */
    Dropdown.prototype.createDisplay = function(){
        var label = this.create('mui-dropdown__label');
        if(this.getSelected()==null){
            label.textContent = ('select...');
            return label;
        }
        label.textContent =  this.getItems().getName(this.getSelected());
        return label;

    };
    return Dropdown;
}();


/**
 * @class mui.ImageDropdown
 * @augments mui.AbstractDropdown
 * @param {mui.AbstractDropdownOptions} options
 *
 */
mui.ImageDropdown = function(){
    var ImageDropdown = function(options){
        mui.AbstractDropdown.call(this,options);
    };
    mui.inherits(ImageDropdown,mui.AbstractDropdown);
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.dispose = function(){
        if(this._menu){
            this._menu.dispose();
            this._menu = null;
        }
        this._items = null;
        mui.AbstractDropdown.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getMenu = function(){
        if(this._menu==null) {
            this._menu = new mui.ImageMenu();
        }
        return this._menu;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.getItems = function(){
        return this._items;
    };

    /**
     * @override
     * @param {mui.IImageEntityCollection} items
     */
    ImageDropdown.prototype.setItems = function(items){
        this._items = items;
    };
    /**
     * @inheritDoc
     */
    ImageDropdown.prototype.createDisplay = function(){
        var img = this.create('mui-dropdown__image');
        if(this.getSelected()){
            var url =this.getItems().getImage(this.getSelected());
            img.style.backgroundImage ='url("'+url+'")';
        }else{
            img.textContent = 'select...';
        }

        return img;

    };
    return ImageDropdown;
}();


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Checkbox.Click
 * @param {mui.Checkbox}
 *
 * @callback mui.Checkbox.Selected
 * @param {boolean}
 * @param {mui.Checkbox}
 *
 * @typedef mui.CheckboxOptions
 * @property {mui.Checkbox.Selected} onSelected
 * @property {mui.Checkbox.Click} onClick
 * @property {?boolean} horizontal
 * @property {boolean} selected
 * @property {string} label
 *
 * Checkbox
 * @class mui.Checkbox
 * @augments mui.Element
 * @constructor
 * @param {mui.CheckboxOptions} options
 *
 */
mui.Checkbox = function(){
    var Checkbox = function(options){
        if(options==null){
            options = {};
        }
        options['type']='button';
        mui.Element.call(this,options);
        this._onSelected = options['onSelected'];
        this.addClass('mui-checkbox');
        if(options['horizontal']){
            this.addClass('mui-checkbox--hor');
        }
        this.addClass('mui-checkbox');
        this._iconE = this.create('mui-checkbox__icon');

        this.add(this._iconE);

        this._onClick = options['onClick'];

        this._clickHandler =function(evt){
            if(this._onClick){
                this._onClick(this);
                return;
            }
            this.toggleSelected();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['selected']){
            this.setSelected(true);
        }
        if(options['label']){
            this.setLabel(options['label']);
        }
    };
    mui.inherits(Checkbox,mui.Element);

    /**
     * @inheritDoc
     */
    Checkbox.prototype.dispose = function(){
        if(this._clickHandler){
            this.getElement().removeEventListener('click',this._clickHandler);
            this._clickHandler = null;
        }
        this._onSelected=null;
        this._onClick =null;
        this._iconE = null;
        this._labelE = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Selected
     * @param {boolean] }bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setSelected = function(bool){
        if(this._selected===bool)return this;
        this._selected = bool;
        this._iconE.className = 'mui-checkbox__icon '+(bool?'mui-checkbox__icon--selected':'');
        if(bool){
            this.addClass('mui-checkbox--selected');
        }else{
            this.removeClass('mui-checkbox--selected');
        }
        if(this._onSelected){
            this._onSelected(bool,this);
        }
        return this;
    };
    /**
     * Toggle selected
     * @param {boolean} bool
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.toggleSelected = function(bool){
        this.setSelected(!this._selected);
        return this;
    };

    /**
     * Get selected
     * @return {boolean}
     */
    Checkbox.prototype.getSelected = function(){
        return this._selected;

    };

    /**
     * Set label
     * @param {string} text
     * @return {mui.Checkbox}
     */
    Checkbox.prototype.setLabel = function(text){
        if(this._labelE==null) {
            this._labelE = this.create('mui-checkbox__label');
            this.add(this._labelE);
        }
        this._labelE.textContent = text;
        return this;
    };

    return Checkbox;
}();


/***/ }),
/* 25 */
/***/ (function(module, exports) {

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


/***/ }),
/* 26 */
/***/ (function(module, exports) {

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


/***/ }),
/* 27 */
/***/ (function(module, exports) {

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
        this.addClass('mui-text');
        this._onLeftIconClick = options['onLeftIconClick'];
        this._onRightIconClick = options['onRightIconClick'];
        this._textContainer = this.create('mui-text__input-container');
        this._input = this.create({'type':options['multiline']?'textarea':'input','className':'mui-text__input'});
        this._rightContainer = this.create('mui-text__right-container');
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
            this._leftIconE = this.create({'type':'button','className':'mui-text__left-icon'});
            this._leftIconClickHandler = this._handleLeftIconClick.bind(this);
            this._leftIconE.addEventListener('click', this._leftIconClickHandler);

        }
        this._leftIconE.className = 'mui-text__left-icon '+icon;
        if(this._leftIconE.parentNode==null){
            this._textContainer.add(this._leftIconE);
        }
        this._input.classList.add("mui-text__left-icon--visible");
        return this;
    };

    /**
     * Hide left icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideLeftIcon = function(){
        if(this._leftIconE==null)return this;
        this._input.classList.remove("mui-text__left-icon--visible");
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
            this._rightIconE = this.create({'type':'button','className':'mui-text__right-icon'});
            this._rightIconClickHandler = this._handleRightIconClick.bind(this);
            this._rightIconE.addEventListener('click', this._rightIconClickHandler);

        }
        this._rightIconE.className = 'mui-text__right-icon '+icon;
        if(this._rightIconE.parentNode==null){
            this._rightContainer.add(this._rightIconE);
        }
        this._input.classList.add("mui-text__right-icon--visible");
        return this;
    };
    /**
     * Hide right icon
     * @return {mui.TextField}
     */
    TextField.prototype.hideRightIcon = function(){
        if(this._rightIconE==null)return this;
        this._rightIconE.removeFromParent();
        this._input.classList.remove("mui-text__right-icon--visible");
        return this;
    };

    /**
     * Set assistive text
     * @param {string} text
     * @return {mui.TextField}
     */
    TextField.prototype.setAssistiveText = function(icon,message){
        if(this._assisstiveIconE==null){
            this._assisstiveIconE = this.create('mui-text__assistive-icon');
        }
        if(icon){
            this._assisstiveIconE.className = 'mui-text__assistive-icon '+icon;
        }
        if(this._assisstiveIconE.parentNode==null){
            this._rightContainer.insertBefore(this._assisstiveIconE,this._rightContainer.lastChild);
        }
        this._input.classList.add("mui-text__assistive-icon--visible");
        if(this._assistiveTextE ==null){
            this._assistiveTextE = this.create('mui-text__assistive-text');
        }
        if(this._assistiveTextE.parentNode==null){
            this.add(this._assistiveTextE);
        }
        this._assistiveTextE.textContent = message;
        this.addClass("mui-text__assistive-text--visible");
        return this;
    };
    /**
     * Hide assistive text
     * @return {mui.TextField}
     */
    TextField.prototype.hideAssistiveText = function(){
        if(this._assistiveTextE==null)return this;
        this._assistiveTextE.removeFromParent();
        this.removeClass("mui-text__assistive-text--visible");
        return this;
    };

    /**
     * Set error
     * @param {string} message
     * @return {mui.TextField}
     */
    TextField.prototype.setError = function(message){
        this.setAssistiveText('mui-text__error-icon',message);
        this.addClass('mui-text--error');
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
        this.removeClass('mui-text--error');
        return this;
    };
    return TextField;
}();


/***/ }),
/* 28 */
/***/ (function(module, exports) {

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


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPickerEditor.Changed
 * @pram {string} color
 *
 * @typedef mui.ColorPickerEditorOptions
 * @param {mui.ColorPickerEditor.Changed} onChanged
 *
 * Color Picker editor
 * @constructor
 * @class mui.ColorEditor
 * @augments mui.Element
 * @param {mui.ColorPickerEditorOptions} options
 *
 */
mui.ColorEditor = function(){
    var ColorEditor = function(options){
        if(options==null){
            options = {};
        }
        mui.Element.call(this,options);
        this.addClass('mui-color-editor');

        this._onChanged = options['onChanged'];
        var _pickerBtn = this.create();

        this.add(_pickerBtn);
        var _picker = Pickr.create({
            'el': _pickerBtn,
            'useAsButton':true,
            'inline':true,
            'autoReposition':false,
            'showAlways':true,
            'container':this.getElement(),
            'theme': 'monolith', // or 'monolith', or 'nano',
            'swatches': [
                'rgba(244, 67, 54, 1)',
                'rgba(233, 30, 99, 0.95)',
                'rgba(156, 39, 176, 0.9)',
                'rgba(103, 58, 183, 0.85)',
                'rgba(63, 81, 181, 0.8)',
                'rgba(33, 150, 243, 0.75)',
                'rgba(3, 169, 244, 0.7)',
                'rgba(0, 188, 212, 0.7)',
                'rgba(0, 150, 136, 0.75)',
                'rgba(76, 175, 80, 0.8)',
                'rgba(139, 195, 74, 0.85)',
                'rgba(205, 220, 57, 0.9)',
                'rgba(255, 235, 59, 0.95)',
                'rgba(255, 193, 7, 1)'
            ],
            'components': {
                // Main components
                'preview': true,
                'opacity': true,
                'hue': true,

                // Input / output Options
                'interaction': {
                    'input': true,
                    'clear': false,
                    'save': false
                }
            }
        });
        this._changeHandler = function(evt){
            if(  this._onChanged ){
                var color =evt['toRGBA']().toString();
                this._onChanged (color);
            }
            // console.log(evt);
        }.bind(this);
        this._swatchSelectHandler = function(evt){
            // console.log(evt);
        }.bind(this);
        this._saveHandler = function(evt){
            // console.log(evt);
            var color =evt['toRGBA']().toString();
            _picker['addSwatch'](color);
        }.bind(this);
        _picker.on("change",this._changeHandler);
        _picker.on("swatchselect",this._swatchSelectHandler);
        _picker.on("save",this._saveHandler);
        this._picker = _picker;
        _pickerBtn.style.display='none';


        // _picker['getRoot']()['app'].appendChild(_pickerBtn);
    };
    mui.inherits(ColorEditor,mui.Element);
    /**
     * @inheritDoc
     */
    ColorEditor.prototype.dispose = function(){
        this._picker.off("change",this._changeHandler);
        this._picker.off("swatchselect",this._swatchSelectHandler);
        this._picker.off("save",this._saveHandler);
        this._changeHandler =null;
        this._onChanged = null;
        this._swatchSelectHandler = null;
        this._saveHandler = null;
        this._onChanged = null;
        this._picker['destroy']();
        this._picker = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set Changed Callback
     * @param {mui.ColorPickerEditor.Changed} fn
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.onChanged = function(fn){
        this._onChanged = fn;
        return this;

    };
    /**
     * Get color
     * @return {string}
     */
    ColorEditor.prototype.getColor = function(){
        return this._picker.getColor();
    };

    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPickerEditor}
     */
    ColorEditor.prototype.setColor = function(color){
        if(color==null){
            color = 'black';
        }
        this._picker.setColor(color,true);
        return this;
    };
    return ColorEditor;
}();


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.ColorPicker.Click
 * @param {}
 * @callback mui.ColorPicker.ColorSelected
 * @param {}
 * @callback mui.ColorPicker.Changed
 * @param {}
 *
 * @typedef mui.ColorPickerOptions
 * @property {mui.ColorPicker.Click} onClick
 * @property {mui.ColorPicker.ColorSelected} onColorSelected
 * @property {mui.ColorPicker.Changed} onChanged
 * @property {string} color
 *
 *
 * Color Picker
 * @constructor
 * @class mui.ColorPicker
 * @augments mui.Element
 * @param {mui.ColorPickerOptions} options
 *
 */
mui.ColorPicker = function(){
    var _picker,_pickerBtn;
    var ColorPicker = function(options){
        if(options==null){
            options = {};
        }
        options['type'] = 'button';
        mui.Element.call(this,options);
        this.addClass('mui-colorpicker');
        this._onChanged = options['onChanged'];
        this._onColorSelected = options['onColorSelected'];
        this._transImg = this.create("mui-colorpicker__trans-img");
        this._bgContainer = this.create("mui-colorpicker__bg");
        this.add(this._transImg,this._bgContainer);
        this._onClick = options['onClick'];
        this._clickHandler = function(evt){
            if(this._onClick){
                this._onClick();
                return;
            }
            this.toggle();
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        if(options['color']){
            this.setColor(options['color']);
        }
    };
    mui.inherits(ColorPicker,mui.Element);
    /**
     * @inheritDoc
     */
    ColorPicker.prototype.dispose = function(){
        this._removeEvtPicker();
        if(this._clickHandler) {
            this.getElement().removeEventListener('click', this._clickHandler);
            this._clickHandler = null;
        }

        this._onColorSelected = null;

        this._onClick = null;
        this._transImg = null;
        this._onChanged = null;
        this._bgContainer = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Check if picker editor is open
     * @return {boolean}
     */
    ColorPicker.prototype.isOpen = function(){
        return _picker && _picker.getElement().parentNode;
    };

    /**
     * Open editor
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.open = function() {
        if (this.isOpen()) return this;
        if (_picker == null) {
            _picker = new mui.ColorEditor();
        }
        _picker.onChanged(function(color){
            if(this._onColorSelected){
                this._onColorSelected(color);
                return;
            }
            this.setColor(color);
        }.bind(this));
        _picker.setColor(this._color);
        mui.Element.showPopupRelativeToElement(_picker, this.getElement(), 'left', 'bottom', 'right');
        return this;
    };

    /**
     * Close editor
     */
    ColorPicker.prototype.close = function(){
        if(!this.isOpen())return this;
        mui.Element.closePopup(_picker);
        return this;

    };
    /**
     * Toggle editor
     * @return {mui.ColorPicker }
     */
    ColorPicker.prototype.toggle = function(){

        if(this.isOpen()){
            this.close();
        }else{
            this.open();
        }
        return this;
    };
    /**
     * Get Color
     * @return {string}
     */
    ColorPicker.prototype.getColor = function(){
        return this._color;
    };
    /**
     * Set Color
     * @param {string} color
     * @return {mui.ColorPicker}
     */
    ColorPicker.prototype.setColor = function(color){
        this._color = color;
        this._bgContainer.style.background= color;
        if(this._onChanged){
            this._onChanged(color);
        }
        return this;
    };
    return ColorPicker;
}();


/***/ }),
/* 31 */
/***/ (function(module, exports) {

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
        this.addClass('mui-datetime-picker');
        this._onClick = options['onClick'];
        this._input = this.create({'type':'input','className':'mui-datetime-picker__input flatpickr '});
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


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * @typedef mui.AbstractCardOptions
 * @property {?mui.IEntityCollection} headerSettingItems
 * @property {?mui.IEntityCollection} footerSettingItems
 * @property {mui.AbstractMenu.ItemClickCallback} onHeaderSettingItemClick
 * @property {mui.AbstractMenu.ItemClickCallback} onFooterSettingItemClick
 * @property {?string} headerIcon
 * @property {?boolean} bodyVisible
 * @property {?boolean} footerVisible
 * @property {?boolean} footerSettingsVisible
 * @property {?boolean} headerSettingsVisible
 * @property {?string} titled
 * @property {?string} titleDescription
 * @property {?mui.IEntityCollection} footerActions
 * @property {?mui.IEntityCollection} headerActions
 *
 *
 *
 * Abstract Card
 * @abstract
 * @class mui.AbstractCard
 * @augments mui.Element
 * @param {mui.AbstractCardOptions} options
 *
 */
mui.AbstractCard = function(){
    var AbstractCard = function(options){
        if(options==null){
            options = {};
        }
        this._headerSettingItems = options['headerSettingItems'];
        this._footerSettingItems = options['footerSettingItems'];
        this._onHeaderSettingItemClick = options['onHeaderSettingItemClick'];
        this._onFooterSettingItemClick = options['onFooterSettingItemClick'];

        mui.Element.call(this,options);
        this.addClass('mui-card');

        this._primaryTitle = this.create('mui-card__primary-title');
        this._secondTitle = this.create('mui-card__second-title');
        this._headerActionsE = this.create('mui-card__header-actions');
        this._header =this.create("mui-card__header").add(
            options['headerIcon']?this.create('mui-card__header-icon '+options['headerIcon']):null,
            this.create('mui-card__header-body').add(
                this._primaryTitle,this._secondTitle
            ),
            this._headerActionsE
        );


        if(options['bodyVisible']) {
            this._body = this.create('mui-card__body');
            this._body.style.backgroundImage='url("alt_holder.svg")';
        }
        if(options['footerVisible']) {
            this._footer = this.create('mui-card__footer');
        }

        this._footerSettingVisible = options['footerSettingsVisible'];
        this._headerSettingsVisible = options['headerSettingsVisible'];

        this.doLayout({
            'header':this._header,
            'body':this._body,
            'footer':this._footer
        });
        if(options['title']){
            this.setTitle(options['title']);
        }
        if(options['titleDescription']){
            this.setTitleDescription(options['titleDescription']);
        }
        if(options['footerActions']) {
            this.setFooterActions(options['footerActions']);
        }
        this.setHeaderActions(options['headerActions']);

        this._clickHandler = function(evt){
            var found;
            if(options['onHeaderSettingItemClick']){
                found = this.closest(evt.target,'mui-card__header-settings');
                if(found){
                    this.openHeaderSettings();
                    return;
                }
            }
            if(options['onFooterSettingItemClick']){
                found = this.closest(evt.target,'mui-card__footer-settings');
                if(found){
                    this.openFooterSettings();
                    return;
                }
            }

        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);


    };
    mui.inherits(AbstractCard,mui.Element);

    /**
     * @inheritDoc
     */
    AbstractCard.prototype.dispose = function(){
        this.getElement().removeEventListener('click',this._clickHandler);
        this._headerActions = null;
        this._footerActions = null;

        this._clickHandler =null;
        this._headerSettingBtn = null;
        this._footerSettingBtn=null;


        this._headerSettingItems = null;
        this._footerSettingItems = null;
        this._onHeaderSettingItemClick = null;
        this._onFooterSettingItemClick = null;
        this._primaryTitle =null;
        this._secondTitle = null;
        this._headerActionsE = null;
        this._header =null;
        this._body = null;
        this._footer =null;
        this._footerSettingVisible =null;
        this._headerSettingsVisible = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set header icon
     * @param {string} icon
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setHeaderIcon =function(icon){
        this._header.childNodes[0].className='mui-card__header-icon '+icon;
        return this;
    };
    /**
     * Set header actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setHeaderActions =function(actions){
        this._headerActions = actions;
        this.updateHeaderActions();
        return this;
    };
    var _menu=null;
    /**
     * Open header setting menu
     * @param {?mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.openHeaderSettings =function(actions){
        if(_menu ==null){
            _menu = new mui.Menu({});
        }
        _menu.setItems(actions?actions:this._headerSettingItems);
        _menu.onItemClick(this._onHeaderSettingItemClick);
        mui.Element.showPopupRelativeToElement(_menu,this._headerSettingBtn,'right','bottom');
        return this;

    };
    /**
     * Open footer setting menu
     * @param {?mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.openFooterSettings =function(actions){
        if(_menu ==null){
            _menu = new mui.Menu({});
        }
        _menu.setItems(this._footerSettingItems);
        _menu.onItemClick(this._onFooterSettingItemClick);
        mui.Element.showPopupRelativeToElement(_menu,this._footerSettingBtn,'right','bottom');
        return this;
    };

    /**
     * Update header actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.updateHeaderActions =function(){
        var frag = document.createFrag();
        if(this._headerActions) {
            var it = this._headerActions.getChildren();
            while (it.hasNext()) {
                var act = it.next();
                var id = this._headerActions.getId(act);
                var icon = this._headerActions.getIcon(act);
                var name = this._headerActions.getName(act);
                var actE = this.create({'type': 'button', 'className': 'mui-card__header-action'}).add(
                    icon ? this.create('mui-card__action-icon ' + icon) : null,
                    name ? this.create({'className': 'mui-card__action-label', 'text': name}) : null
                );
                actE.__id = id;
                frag.add(actE);
            }
        }
        if(this._headerSettingsVisible){
            this._headerSettingBtn =this.create('mui-card__header-settings');
            frag.add(this._headerSettingBtn);
        }
        this._headerActionsE.clear().add(frag);
        return this;
    };
    /**
     * Update footer actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.updateFooterActions =function(){
        var it = this._footerActions.getChildren();
        var frag = document.createFrag();
        while(it.hasNext()){
            var act = it.next();
            var id = this._footerActions.getId(act);
            var icon = this._footerActions.getIcon(act);
            var name = this._footerActions.getName(act);
            var actE = this.create({'type':'button','className':'mui-card__footer-action'}).add(
                icon?this.create('mui-card__action-icon '+icon):null,
                name?this.create({'className':'mui-card__action-label','text':name}):null
            );
            actE.__id = id;
            frag.add(actE);
        }
        if(this._footerSettingVisible){
            this._footerSettingBtn =this.create('mui-card__footer-setting');
            frag.add(this._footerSettingBtn);
        }
        this._footer.clear().add(frag);
        return this;
    };

    /**
     * Set footer actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setFooterActions =function(actions){
        this._footerActions = actions;
        this.updateFooterActions();
        return this;
    };

    /**
     * Do layout
     * @protected
     * @abstract
     * @function
     */
    AbstractCard.prototype.doLayout =function(){
        throw "Must implement";
    };


    /**
     * Set title description
     * @param {string} txt
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setTitleDescription =function(txt){
        this._secondTitle.textContent =txt;
        return this;
    };
    /**
     * Set title
     * @param {string} txt
     * @return {mui.AbstractCard}
     */
    AbstractCard.prototype.setTitle =function(txt){
        this._primaryTitle.textContent = txt;
        return this;

    };
    return AbstractCard;
}();

/**
 * @typedef {mui.AbstractCardOptions & {headerFirst: boolean}} mui.CardOptions
 *
 * @class mui.Card
 * @augments mui.AbstractCard
 * @param {mui.CardOptions} options
 */
mui.Card = function(){
    var VCard = function(options){
        if(options==null){
            options = {};
        }
        this._headerFirst = options['headerFirst'];
        mui.AbstractCard.call(this,options);
        this.addClass('mui-card--ver');

    };
    mui.inherits(VCard,mui.AbstractCard);

    /**
     * @inheritDoc
     */
    VCard.prototype.doLayout = function (components) {
        if(this._headerFirst){
            this.add(components['header'],components['body'],components['footer']);
        }else {
            this.add(components['body'], components['header'], components['footer']);
        }
    };
    return VCard;
}();


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * Content container
 * @constructor
 * @class mui.Content
 * @augments mui.AbstractSingleChildContainer
 * @param {mui.AbstractSingleChildContainerOptions} options
 *
 */
mui.Content = function(){
    var Content = function(options){
        mui.AbstractSingleChildContainer.call(this,options);
        this.addClass('mui-content');
    };
    mui.inherits(Content, mui.AbstractSingleChildContainer);

    /**
     * @inheritDoc
     */
    Content.prototype.dispose = function(){
        this.setContent(null);
        if(this._notification) {
            this._notification.detach();
            this._notification.dispose();
            this._notification = null;
        }
        mui.SingleChildContainer.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Content.prototype.setChild = function(child){
        this.detachAllChildren();
        if(child){
            child.attachTo(this.getElement());
        }
        return this;
    };
    /**
     * Set loading state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setLoading = function(message){
        this.showMessage(message,'mui-content__loading-icon');
        return this;
    };

    /**
     * Set error state
     * @param {string} message
     * @return {mui.Content}
     */
    Content.prototype.setError = function(message){
        this.showMessage(message,'mui-content__error-icon');
        return this;
    };

    /**
     * Hide message
     * @return {mui.Content}
     */
    Content.prototype.hideMessage = function(){
        this.setChild(this._content);
        this.removeClass('mui-content--notification-visible');
        return this;
    };

    /**
     * Show message
     * @param {string} message
     * @param {string} icon
     * @return {mui.Content}
     */
    Content.prototype.showMessage = function(message,icon){
        if(this._notification==null){
            this._notification = new mui.Element({
                'className':'mui-notification'
            });
            this._notificationIcon = this.create();
            this._notificationMessage = this.create('mui-notification__message');
            this._notification.add(this._notificationIcon,this._notificationMessage);
        }
        if(icon==null){
            icon = 'mui-content__info';
        }
        this._notificationIcon.className = 'mui-notification__icon '+icon;
        this._notificationMessage.textContent = message;
        this.addClass('mui-content--notification-visible');
        this.setChild(this._notification);
        return this;

    };
    return Content;
}();


/***/ }),
/* 34 */
/***/ (function(module, exports) {

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
        this.addClass('mui-menu');
        this._ul = this.create({'type':'ul','className':'mui-menu__item-container'});
        this.add(this._ul);
        this._items = options['items'];
        this._parentEntity = options['parentEntity'];
        this._onItemClick = options['onItemClick'];
        this.setItems(options['items']);
        this._liClickHandler =function(evt){
            var found =this.closest(evt.target,'mui-menu__item');
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
            elm.classList.remove('mui-menu__item--selected');
        }
        this._selectedId = id;
        elm =this._cachedElements.get(id);
        if(elm){
            elm.classList.add('mui-menu__item--selected');
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
            elm.classList.add('mui-menu__item');
            elm.__id = id;
            if(elm.__id===this._selectedId){
                elm.classList.add('mui-menu__item--selected');
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
        if(itemElement.classList.contains('mui-menu__item--parent')){
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
            var iconE = this.create('mui-menu__item-icon ' + icon);
            elm.add(iconE);
        }
        var nameE = this.create('mui-menu__item-label');
        nameE.textContent = data.getName(item);
        elm.add(nameE);

        if (isParent) {
            var expandIcon = this.create("mui-menu__item-parent-icon");
            elm.add(expandIcon);
            elm.classList.add('mui-menu__item--parent');
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
        var imageE = this.create('mui-menu__item-image');
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



/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

mui.ViewportRenderContext = function(){
    var ViewportRenderContext = function(left,right,top,bottom){
        this._left = left;
        this._right = right;
        this._bottom = bottom;
        this._top = top;
    };
    ViewportRenderContext.prototype.getLeft = function(){
        return this._left;
    };
    ViewportRenderContext.prototype.getRight = function(){
        return this._right;
    };
    ViewportRenderContext.prototype.getTop = function(){
        return this._top;
    };
    ViewportRenderContext.prototype.getBottom = function(){
        return this._bottom;
    };

    return ViewportRenderContext;

}();
/**
 * @callback mui.LazyList.ViewPositionChanged
 * @param {number} scrollTop
 *
 * @callback mui.LazyList.ScrollbarWidthChanged
 * @param {}
 *
 * @callback mui.LazyList.NodeVisible
 * @param {mui.IEntity}
 * @return {boolean}
 *
 * @typedef mui.AbstractLazyViewportOptions
 * @property {mui.LazyList.ViewPositionChanged} onViewPositionChanged
 * @property {mui.LazyList.ScrollbarWidthChanged} onScrollbarWidthChanged
 * @property {boolean} scrollbarSizeUpdate
 *
 * Abstract Lazy List
 * @abstract
 * @function
 * @class mui.AbstractLazyList
 * @augments mui.Element
 * @param {mui.AbstractLazyViewportOptions} options
 */
mui.AbstractLazyViewport = function(){
    var AbstractLazyViewport =function(options){
        mui.Element.call(this,options);
        this.addClass('mui-lazy-viewport');
        this._onViewPositionChanged = options['onViewPositionChanged'];
        this._scrollbarSizeUpdate = options['scrollbarSizeUpdate']!=null?options['scrollbarSizeUpdate']:false;
        this._onScrollbarVisibilityChanged = options['onScrollbarWidthChanged'];
        this._scrollTop =null;
        this._scrollLeft =null;
        this._scrollHandler = this._requestRender.bind(this);
        this.getElement().addEventListener('scroll',this._scrollHandler);
    };
    mui.inherits(AbstractLazyViewport, mui.Element);

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.dispose = function(){
        this.getElement().removeEventListener('scroll',this._scrollHandler);
        this._scrollHandler = null;
        this._onViewPositionChanged =null;
        this._scrollbarSizeUpdate = null;
        this._onScrollbarVisibilityChanged = null;
        this._viewPortHeight = 0;
        this._scrollTop =null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.wasVisible =function() {
        this._updatePosAndHeight();
    };


    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.getScrollTop =function() {
        return this._scrollTop;
    };

    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.wasAttached =function() {
        this._updatePosAndHeight();
    };



    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.getScrollbarWidth = function(){
        return this._scrollbarWidth;
    };
    AbstractLazyViewport.prototype._requestRender = function(){
        if(this._rendering){
            return;
        }
        this._rendering = true;
        this._updatePosAndHeight();
        requestAnimationFrame(function(){
            this.willRender();

            var  viewPortHeight = this._viewPortHeight;
            var  viewportWidth = this._viewportWidth;
            var  scrollTop = this._scrollTop;
            var  scrollLeft = this._scrollLeft;

            var bottomLimit =viewPortHeight + scrollTop;
            var rightLimit =viewportWidth + scrollLeft;

            var context = new mui.ViewportRenderContext (scrollLeft,rightLimit,scrollTop,bottomLimit);

            this.renderContent(context);
            this._rendering = false;

            if(this._scrollbarSizeUpdate) {
                var newScrollbarWidth = this._viewportWidth - this._content.offsetWidth;
                var newScrollbarHeight = this._viewPortHeight - this._content.offsetHeight;
                var scrollbarWidthChanged = this._scrollbarWidth !== newScrollbarWidth || newScrollbarHeight!==this._scrollbarHeight;

                this._scrollbarWidth = newScrollbarWidth;
                this._scrollbarHeight = newScrollbarHeight;

                if (this._onScrollbarVisibilityChanged && scrollbarWidthChanged) {
                    this._onScrollbarVisibilityChanged();
                }
            }
            this.wasRendered();
        }.bind(this));

    };
    /**
     * @protected
     * @virtual
     * @function
     */
    AbstractLazyViewport.prototype.willRender = function(){};

    /**
     * @protected
     * @virtual
     * @function
     */
    AbstractLazyViewport.prototype.renderContent = function(){};

    /**
     * @protected
     * @function
     * @virtual
     */
    AbstractLazyViewport.prototype.wasRendered = function(){

    };
    /**
     * @inheritDoc
     */
    AbstractLazyViewport.prototype.update = function(){
        this._requestRender();
        return this;
    };

    AbstractLazyViewport.prototype._updatePosAndHeight = function() {
        var lastScrollTop = this._scrollTop;
        var lastScrollLeft = this._scrollLeft;

        this._viewPortHeight = this._el.offsetHeight;
        this._scrollTop = this._el.scrollTop;
        this._scrollLeft = this._el.scrollLeft;
        this._viewportWidth = this._el.offsetWidth;
        if(lastScrollTop !==this._scrollTop && this._onViewPositionChanged && lastScrollLeft!==this._scrollLeft){
            this._onViewPositionChanged(this._scrollTop);
        }
    };
    return AbstractLazyViewport;
}();


/**
 *
 * @callback mui.LazyList.NodeVisible
 * @param {mui.IEntity}
 * @return {boolean}
 *
 * @typedef mui.AbstractLazyListOptions
 * @property {number} rowHeight
 * @property {mui.IEntityCollection} data
 *
 * Abstract Lazy List
 * @abstract
 * @function
 * @class mui.AbstractLazyList
 * @augments mui.Element
 * @param {mui.AbstractLazyListOptions} options
 */
mui.AbstractLazyList = function(){
    var AbstractLazyList =function(options){
        mui.AbstractLazyViewport .call(this,options);
        this.addClass('mui-lazy-list');
        this._rowHeight = options['rowHeight'] || 35;

        this._content = this.create({'type':'ul','className':'mui-lazy-list__content'});
        this.add(this._content);
    };
    mui.inherits(AbstractLazyList,mui.AbstractLazyViewport );

    /**
     * @inheritDoc
     */
    AbstractLazyList.prototype.dispose = function(){
        this._rowHeight =null;
        this._content = null;
        mui.AbstractLazyViewport.prototype.dispose.call(this);
    };

    /**
     * @function
     * @abstract
     */
    AbstractLazyList.prototype.getChildrenIterator = function(){
        throw "must implement";
    };


    /**
     * @inheritDoc
     */
    AbstractLazyList.prototype.renderContent = function(context){
        var  minTop = context.getTop();

        var topHeight = 0;
        var bottomHeight = 0;

        var bottomLimit =context.getBottom();

        var runningHeight = 0;

        var visibleFragment = document.createDocumentFragment();

        var rowHeight = this._rowHeight;

        var it = this.getChildrenIterator();
        var renderedNodes = new Set();
        var  viewPortHeight = bottomLimit-minTop;
        while(it.hasNext() && viewPortHeight>0){
            var nodeData = it.next();
            var rHeight = typeof rowHeight=='function'?rowHeight(nodeData):rowHeight;
            if(runningHeight>bottomLimit){
                bottomHeight+=rHeight;
                this.onSkipRender(it);
                continue;
            }
            runningHeight +=rHeight;
            if(runningHeight+rowHeight<minTop){
                topHeight+=rHeight;
                this.onSkipRender(it);
                continue;
            }
            renderedNodes.add(nodeData);
            var rowElement = this.createRow(nodeData,it);
            if(rowElement==null)continue;
            rowElement.style.height = rHeight+'px';
            rowElement.style.lineHeight = rHeight+'px';
            visibleFragment.appendChild(rowElement);
        }
        var topSpacerElm = this.create({'className':'mui-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'className':'mui-lazy-list__bottom-spacer'});
        bottomSpacerElm.style.height = bottomHeight+'px';
        this._content.clear();
        this._content.add(topSpacerElm,visibleFragment,bottomSpacerElm);

    };
    /**
     * Generate row element
     * @protected
     * @abstract
     * @function
     * @param {*} dataNode
     * @param {number} height
     * @returns {HTMLElement}
     */
    AbstractLazyList.prototype.createRow = function(dataNode,height) {
        throw "must implement";
    };
    /**
     * @protected
     * @function
     * @virtual
     */
    AbstractLazyList.prototype.onSkipRender = function(){}
    return AbstractLazyList;
}();


/***/ }),
/* 36 */
/***/ (function(module, exports) {

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
                elm = this.closest(evt.target, 'mui-lazy-list__setting-icon');
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
                elm = this.closest(evt.target,'mui-lazy-list__action');
                if(elm) {
                    args = new mui.Event(this,{'actionId':elm.__actId,'itemId':this._idToNodeMappings.get(elm.__nodeId)},evt);
                    options['onActionClick'](args);
                    if(args.isStopped()){
                        return;
                    }
                }
            }
            if(options['onItemClick']){
                elm = this.closest(evt.target,'mui-lazy-list__item');
                if(elm==null)return;
                args = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onItemClick'](args);
            }

        }.bind(this);
        this._itemDblClickHandler = function(evt) {
            if(options['onDoubleClick']){
                var elm = this.closest(evt.target,'mui-lazy-list__item');
                if(elm==null)return;
                evt = new mui.Event(this,this._idToNodeMappings.get(elm.__id),evt);
                options['onDoubleClick'](elm.__id);
            }
        }.bind(this);

        this._content.addEventListener('click',this._itemClickHandler);
        this._content.addEventListener('dblclick',this._itemDblClickHandler);

        this._data = options['data'];
        this.update();
    };
    mui.inherits(LazyList,mui.AbstractLazyList);

    /**
     * @inheritDoc
     */
    LazyList.prototype.dispose = function(){
        this._content.removeEventListener('click',this._itemClickHandler);
        this._content.removeEventListener('dblclick',this._itemDblClickHandler);
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

    LazyList.prototype.getChildrenIterator=function(){
        return this._data.getChildren();
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
            prev.classList.remove('mui-lazy-list__item--selected');
        }
        if(this._cachedSelectedRowActContainer){
            this._cachedSelectedRowActContainer.removeFromParent();
            this._cachedSelectedRowActContainer = null;
        }
        this._selected =id;
        var elm = this._idToRenderedElement.get(id);
        if(elm){
            elm.classList.add('mui-lazy-list__item--selected');
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
            var actE =  this.create({'type': 'button', 'className': 'mui-lazy-list__action'});
            if(iconClass){
                actE.add(this.create('mui-lazy-list__action-icon '+iconClass));
            }
            if(label){
                actE.add(this.create({'className':'mui-lazy-list__action-label','text':label}));
            }
            actE.__actId = collection.getId(act);
            actE.__nodeId = nodeId;
            frag.add(actE);

        }
        return this.create('mui-lazy-list__action-container').add(frag);
    };
    /**
     * @inheritDoc
     */
    LazyList.prototype.createRow=function(dataNode) {
        var icon;
        var listData= this._data;
        if(this._itemTemplate==null) {
            var item = this.create({
                'type':'li',
                'className':'mui-lazy-list__item'
            });
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'mui-lazy-list__item-icon'
                });
                if(this._iconType!=='avatar'){
                    icon.style.backgroundImage = 'url(' + this._altHolder + ')';
                }
                item.add(icon);
            }
            var textContainer = this.create({'className':'mui-lazy-list__text-container'});
            var txtPrimary = this.create({'className': "mui-lazy-list__item-title"});
            var txtSecond = this.create({'className': "mui-lazy-list__item-desc"});
            textContainer.add(txtPrimary);
            textContainer.add(txtSecond);

            item.add(textContainer);
            this._itemTemplate = item;
        }
        var id = listData.getId(dataNode);
        var newItem = this._itemTemplate.cloneNode(true); //cloning is faster by 50%
        if(id ==this._selected){
            newItem.classList.add('mui-lazy-list__item--selected');
        }

        var iconItem = this._iconVisible?newItem.childNodes[0]:null;
        var textElement = this._iconVisible?newItem.childNodes[1]:newItem.childNodes[0];
        var descElement = textElement.childNodes[1];
        var nameElement = textElement.childNodes[0];


        if(iconItem) {
            if(this._iconType=='avatar') {
                icon = listData.getIcon(dataNode);
                if (icon != null) {
                    iconItem.className = 'mui-lazy-list__item-icon '+icon;
                }
            }else{
                var thumbnail = null;//TODO
                iconItem.classList.add('mui-lazy-list__item-icon-thumbnail');
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
            var setting = this.create({'type':'button','className':'mui-lazy-list__setting-icon'});
            setting.__id  = id;
            newItem.add(setting);
        }
        newItem.__id =id;
        this._idToNodeMappings.set(dataNode.getId(),dataNode);
        this._idToRenderedElement.set(dataNode.getId(),newItem);
        return newItem;
    };    return LazyList;
}();


/***/ }),
/* 37 */
/***/ (function(module, exports) {

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
        this.addClass('mui-lazy-tree');
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
        this._expandIcon = options['expandIcon'] || 'mui-lazy-tree__item-expand-icon--expanded';
        this._collapseIcon = options['collapseIcon'] || 'mui-lazy-tree__item-expand-icon--collapsed';
        this._showExpandIcon = options['showExpandIcon'];

        this._parentIcon = options['parentIcon'] || 'mui-lazy-tree__item-parent-icon';
        this._childIcon = options['childIcon'] || 'mui-lazy-tree__item-child-icon';

        this.addClass('mui-lazy-tree__lazy-list');
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
            found = this.closest(target, 'mui-lazy-tree__item-expand-icon');
            if (found) {
                args = new mui.Event(this,this._idToItemMappings.get( found.__id),evt);
                this._onExpandIconClick(args);
                if(args.isStopped()){
                    return;
                }
            }

        }
        if(this._onItemSettingClick){

            found = this.closest(target, 'mui-lazy-tree__setting-icon');
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
            found = this.closest(target, 'mui-lazy-tree__item');
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
                'className': 'mui-lazy-tree__item'
            });

            if(this._iconVisible) {
                var icon = this.create({
                    'className': 'mui-lazy-tree__item-icon'
                });
                icon.style.padding = ICON_PADDING+'px';
                item.appendChild(icon);
            }

            var text = this.create({
                'className': 'mui-lazy-tree__item-display mui-lay-tree__item-display--clickable'
            });
            if (this._descVisible) {
                var txtPrimary = this.create({
                    'className': "mui-lazy-tree__label"
                });
                var txtSecond = this.create({
                    'className': "mui-lazy-tree__desc"
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
                'className': 'mui-lazy-tree__item'
            });
            if(this._showExpandIcon!==false) {
                expandIcon = this.create({
                    'className': 'mui-lazy-tree__item-expand-icon'
                });
                expandIcon.style.padding = (EXPAND_ICON_PADDING)+'px';
                item.appendChild(expandIcon);
                this._parentOffset += EXPAND_ICON_SIZE + (EXPAND_ICON_PADDING*2);
            }
            if(this._iconVisible) {
                icon = this.create({
                    'className': 'mui-lazy-tree__item-icon'
                });
                var padLeft = this._showExpandIcon!==false?ICON_PADDING:ICON_PADDING*2;
                icon.style.paddingLeft = padLeft+'px';
                // icon.style.marginRight = ICON_MARGIN_RIGHT+'px';
                item.appendChild(icon);
                this._parentOffset+=ICON_SIZE+padLeft;
            }

            var text = this.create({
                'className': 'mui-lazy-tree__item-display mui-lay-tree__item-display--clickable'
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
            newItem.classList.add('mui-lazy-tree__item--selected');
        }

        var descElement = newItemObj['desc'];
        var nameElement = newItemObj['title'];
        var expandElement = newItemObj['expand'];
        var iconElement =newItemObj['icon'];

        if(expandElement) {
            expandElement.__id = nodeId;
            if (listData.isError(dataNode)) {
                expandElement.classList.add('mui-lazy-tree__item-expand-icon--error');

            } else if (listData.isLoading(dataNode)) {
                // newItem.childNodes[0].textContent = 'replay'
                expandElement.classList.add('mui-lazy-tree__item-expand-icon--spin');
            } else if (isParent) {
                expandElement.classList.add(listData.isExpanded(nodeId) ? this._expandIcon : this._collapseIcon);
            }
        }

        if(iconElement) {
            var iconClass = listData.getIcon(dataNode);
            var clssNm ='mui-lazy-tree__item-icon '+ (iconClass == null ?( isParent?this._parentIcon:this._childIcon ): iconClass);
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
            var settingIcon = this.create({'type':'button','className':'mui-lazy-tree__setting-icon'});
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


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * Column collection data
 * @interface mui.IColumnData
 * @augments mui.IEntityCollection
 */
mui.IColumnData = function(){
    var IColumnData = function(){

    };
    /**
     * Can be sorted
     * @abstract
     * @function
     * @param {mui.IEntity}
     *
     */
    IColumnData.prototype.canSort = function(entity){
        throw "must implemented";
    };
    return IColumnData;
}();

/**
 * Grid data
 * @interface mui.IDataGridData
 * @augments mui.IEntityCollection
 */
mui.IDataGridData = function(){
    var IDataGridData = function(){

    };
    /**
     * Get cell name
     * @abstract
     * @function
     * @param {*} rowData
     * @param {*} colData
     * @return {string}
     *
     */
    IDataGridData.prototype.getCellName = function(){
        throw "must implemented";
    };
    return IDataGridData;
}();
/**
 * @callback mui.DataGrid.SortClick
 * @param {string} column id
 * @callback mui.DataGrid.CheckAllClick
 * @param {}
 * @callback mui.DataGrid.CheckBoxClick
 * @param {mui.Event}
 * @callback mui.DataGrid.RowClick
 * @param {mui.Event}
 *
 * @typedef mui.DataGridOptions
 * @property {} onSortClick
 * @property {} onCheckAllClick
 * @property {} onCheckBoxClick
 * @property {} onRowClick
 * @property {bool} checkBoxVisible
 * @property {bool} stripped
 * @property {bool} checkBoxVisible
 * @property {bool} sortEnabled
 * @property {mui.IDataGridData} data
 * @property {mui.IColumnData} columns
 *
 *
 * DataGrid view
 * @class mui.DataGrid
 * @augments mui.Element
 * @param {mui.DataGridOptions} options
 */

mui.DataGrid = function(){
    var DataGrid = function(options){
        if(options==null)options = {};
        mui.Element.call(this,options);
        this.addClass('mui-datagrid');

        this._header = new GridHeader({
            'checkBoxVisible':options['checkBoxVisible'],
            'sortEnabled':options['sortEnabled'],
            'onSortClick':options['onSortClick'],
            'onCheckAllClick':options['onCheckAllClick']
        });
        this._list = new GridList({
            'data':options['data'],
            'scrollbarSizeUpdate':true,
            'onCheckBoxClick':options['onCheckBoxClick'],
            'checkBoxVisible':options['checkBoxVisible'],
            'onRowClick':options['onRowClick'],
            'stripped':options['stripped'],
            'onScrollbarWidthChanged':function(){
                var w = this._list.getScrollbarWidth();
                this._header.setScrollbarWidth(w);
            }.bind(this),
            'onViewPositionChanged':function(top){
                this._header.enableBottomShadow(!!top);
            }.bind(this)
        });
        this._content = this.create('mui-datagrid__content');
        this.add(this._content);
        this._header.attachTo(this._content);
        this._list.attachTo(this._content);

        if(options['columns']){
            this.setColumns(options['columns']);
        }

    };
    mui.inherits(DataGrid,mui.Element );

    /**
     * @override
     */
    DataGrid.prototype.dispose = function(){
        this._header.dispose();
        this._header = null;
        this._list.dispose();
        this._list = null;

        this._content = null;
        mui.Element.prototype.dispose.call(this);
    };
    /**
     * Set selected
     * @param {string} id
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.setSelected = function(id){
        this._list.setSelected(id);
        return this;

    };
    /**
     * Toggle Check all
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.toggleAll = function(){
        this._header.toggleAllChecked();
        return this;
    };
    /**
     * Toggle Checked
     * @param {string} id
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.toggleChecked = function(id){
        this._list.toggleChecked(id);
        return this;
    };

    /**
     * Update header
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.updateHeader = function(){
        this._header.update();
        return this;

    };

    /**
     * Update
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.update = function(){
        this._list.update();

    };

    /**
     * Set Columns
     * @param {mui.IColumnData} cols
     * @return {mui.DataGrid}
     */
    DataGrid.prototype.setColumns= function (cols) {
        this._header.setColumns(cols);
        this._list.setColumns(cols);
        return this;
    };

    /**
     * Internal list adapter
     * @private
     * @param options
     * @constructor
     */
    var GridList = function(options){
        if(options==null)options = {};
        mui.AbstractLazyViewport .call(this,options);
        this._rowHeight = options['rowHeight'] || 50;
        this.addClass('mui-lazy-list');
        this.addClass('mui-lazy-grid-list');
        this._checkBoxVisible = options['checkBoxVisible'];
        this._checkBoxWidth = options['checkBoxWidth'] || 40;
        this._stripped = options['stripped'];
        this._clickHandler = function(evt){
            var found,args;
            if(options['onCheckBoxClick']){
                found = this.closest(evt.target, 'mui-lay-grid-list__checkbox-icon');
                if (found) {
                    args = new mui.Event(this, this._idToNodeMappings.get(found.__id),evt);
                    options['onCheckBoxClick'](args);
                    if (args.isStopped()) {
                        return;
                    }
                }

            }
            if(options['onRowClick']) {
                found = this.closest(evt.target, 'mui-lazy-grid-list__row');
                if (found) {
                    args = new mui.Event(this,this._idToNodeMappings.get(found.__id),evt);
                    options['onRowClick'](args);
                    if (args.isStopped()) {
                        return;
                    }
                }
            }

        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);
        this._selected = null;
        this._checked = new Set();
        this._content = this.create({'type':'table','className':'mui-lazy-grid-list__table'});
        this.add(this._content);
        this._data = options['data'];
        this.update();

    };
    mui.inherits(GridList,mui.AbstractLazyViewport );

    GridList.prototype.dispose = function(){
        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler=null;
        this._idToNodeMappings =null;
        this._idToElementMappings = null;
        this._checked=null;
        this._data = null;
        this._content = null;
        mui.AbstractLazyViewport.prototype.dispose.call(this);
    };

    GridList.prototype.setColumns = function(col){
        this._columns = col;
        this.update();
    };

    GridList.prototype.willRender = function(){
        this._idToNodeMappings =new Map();
        this._idToElementMappings = new Map();
        this._counter=0;
    };
    GridList.prototype.removeChecked = function(id){
        this._checked.delete(id);
        var elm = this._idToElementMappings.get(id);
        if(elm==null)return;
        elm.childNodes[0].childNodes[0].classList.remove('mui-lay-grid-list__checkbox-icon--checked');
    };
    GridList.prototype.addChecked = function(id){
        this._checked.add(id);
        var elm = this._idToElementMappings.get(id);
        if(elm==null)return;
        elm.childNodes[0].childNodes[0].classList.add('mui-lay-grid-list__checkbox-icon--checked');
    };
    GridList.prototype.toggleChecked = function(id){
        if(this._checked.has(id)){
            this.removeChecked(id);
        }else {
            this.addChecked(id);
        }
    };
    GridList.prototype.setSelected = function(id){
        if(this._selected===id)return;
        var elm = this._idToElementMappings.get(this._selected);
        if(elm){
            elm.classList.remove('mui-lazy-grid-list__row--selected');
        }
        this._selected = id;

        elm = this._idToElementMappings.get(this._selected);
        if(elm){
            elm.classList.add('mui-lazy-grid-list__row--selected');
        }

    };
    GridList.prototype.getSelected = function(){
        return this._selected;
    };
    GridList.prototype.wasRendered = function(){
        var group =this.create({'type':'colgroup'});
        var columnIt = this._columns.getChildren();

        var idx=0;
        while(columnIt.hasNext()) {
            var col = columnIt.next();
            var colE = this.create({'type':'col'});
            if(idx==0 && this._checkBoxVisible){
                colE.style.width = this._checkBoxWidth+'px';
            }
            group.add(colE);
            idx++;
        }
        this._content.insertBefore(group,this._content.firstChild);
    };

    /**
     * @inheritDoc
     */
    GridList.prototype.renderContent = function(context){


        var  minTop = context.getTop();

        var topHeight = 0;
        var bottomHeight = 0;

        var bottomLimit =context.getBottom();

        var runningHeight = 0;

        var visibleFragment = document.createDocumentFragment();

        var rowHeight = this._rowHeight;

        var  viewPortHeight = bottomLimit-minTop;

        var it = this._data.getChildren();
        var renderedNodes = new Set();
        while(it.hasNext() && viewPortHeight>0){
            var nodeData = it.next();
            var rHeight = typeof rowHeight=='function'?rowHeight(nodeData):rowHeight;
            if(runningHeight>bottomLimit){
                bottomHeight+=rHeight;
                this._counter++;
                continue;
            }
            runningHeight +=rHeight;
            if(runningHeight+rowHeight<minTop){
                topHeight+=rHeight;
                this._counter++;
                continue;
            }
            renderedNodes.add(nodeData);
            var rowElement = this.createRow(nodeData,it);
            if(rowElement==null)continue;
            rowElement.style.height = rHeight+'px';
            rowElement.style.lineHeight = rHeight+'px';
            visibleFragment.appendChild(rowElement);
        }
        var topSpacerElm = this.create({'type':'tr','className':'mui-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'type':'tr','className':'mui-lazy-list__bottom-spacer'});
        bottomSpacerElm.style.height = bottomHeight+'px';
        this._content.clear();
        this._content.add(topSpacerElm,visibleFragment,bottomSpacerElm);
    };


    GridList.prototype.createRow = function(rowData,it){
        var data = this._data;
        if(data==null){
            return ;
        }
        var id = data.getId(rowData);
        this._idToNodeMappings.set(id,rowData);
        var row = this._template;

        var columnIt;
        if(row==null) {
            row = this.create({
                'className': 'mui-lazy-grid-list__row',
                'type':'tr'
            });

            var rowFragment = document.createFrag();
            var cellElement = null;

            if(this._checkBoxVisible) {
                rowFragment.add(
                    this.create({'className': 'mui-lazy-grid-list__cell mui-lazy-grid-list__left-corner-cell','type': 'span'}).add(
                        this.create({'className':'mui-lay-grid-list__checkbox-icon','type':'button'})
                    )
                );
            }


            var i=0;
            columnIt = this._columns.getChildren();

            while(columnIt.hasNext()){
                var col = columnIt.next();
                cellElement = this.create({
                    'className': 'mui-lazy-grid-list__cell mui-lazy-grid-list__data-cell',
                    'type':'td'
                });
                if(i==0){
                    var icon = this.create({
                        "className":'mui-lazy-grid-list__cell-icon',
                        'type':'span'
                    });
                    cellElement.appendChild(icon);
                }
                var cellName = this.create({
                    'className':'mui-lazy-grid-list__cell-name',
                    'type':'span'
                });
                cellName.textContent = data.getCellName(rowData,col);
                cellElement.appendChild(cellName);

                rowFragment.appendChild(cellElement);
                i++;
            }
            row.appendChild(rowFragment);
            // row.style.gridTemplateColumns ='40px '+ data.getColumnsCssTemplate();
            this._template = row;
        }
        row = this._template.cloneNode(true);
        var counter = 0;
        var idx = 0;
        columnIt = this._columns.getChildren();

        while(columnIt.hasNext()) {
            var col = columnIt.next();
            //skip one for checkbox
            if(this._checkBoxVisible) {
                idx = ++counter;
            }
            if(idx==1){
                //icon
                var icon = data.getIcon(rowData);
                if(icon) {
                    row.childNodes[idx].firstChild.classList.add(icon);
                }
            }
            row.childNodes[idx].lastChild.textContent = (data.getCellName(rowData,col));
        }
        row.__id = id;
        if(this._selected===id){
            row.classList.add('mui-lazy-grid-list__row--selected');
        }
        if(this._checkBoxVisible){
            row.childNodes[0].childNodes[0].__id = id;
            if(this._checked.has(id)){
                row.childNodes[0].childNodes[0].classList.add('mui-lay-grid-list__checkbox-icon--checked');
            }
        }
        if(this._stripped){
            row.classList.add(this._counter%2==0?'mui-lazy-grid-list__row--even':'mui-lazy-grid-list__row--odd');
        }
        this._counter++;
        this._idToElementMappings.set(id,row);
        return row;
    };

    var GridHeader = function(options){
        mui.Element.call(this,{
            'type':'table',
            'className':'mui-lazy-grid-header'
        });
        this._row = this.create({'type':'tr','className':'mui-lazy-grid-header__row'});
        this.add(this._row);
        this._columnSizes = new Map();
        this._checkBoxVisible = options['checkBoxVisible'];
        this._checkBoxWidth = options['checkBoxWidth'] || 40;
        this._scrollbarWidth = options['scrollbarWidth'];
        this._sortEnabled = options['sortEnabled'];
        this._isAllChecked = options['isAllChecked'];


        this._clickHandler = function(evt){
            var found;
            if(options['onCheckAllClick']){
                found = this.closest(evt.target,'mui-lazy-grid-header__checkbox-icon');
                if(found){
                    options['onCheckAllClick']();
                    return;
                }

            }
            if(this._sortEnabled===true && options['onSortClick']) {
                found = this.closest(evt.target, 'mui-lazy-grid-header__sort-btn');
                if (found) {
                    options['onSortClick'](found.__id);
                }
            }
        }.bind(this);
        this.getElement().addEventListener('click',this._clickHandler);

    };
    mui.inherits(GridHeader,mui.Element);
    GridHeader.prototype.dispose = function(){

        this.getElement().removeEventListener('click',this._clickHandler);
        this._clickHandler=null;

        this._columns=null;
        this._row=null;
        this._columnSizes=null;

        mui.Element.prototype.dispose.call(this);

    };
    GridHeader.prototype.setScrollbarWidth = function(w){
        this._scrollbarWidth = w;
        this.update();
        return this;

    };
    GridHeader.prototype.update = function(){
        var columns = this._columns;
        var it = columns.getChildren();
        this._row.clear();
        if(this._checkBoxVisible){
            var cb =this.create({'type':'span','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__left-corner-cell'}).add(
                this.create({'type':'button','className':'mui-lazy-grid-header__checkbox-icon '+(this._isAllChecked?'mui-lazy-grid-header__checkbox-icon--checked':'')})
            );
            cb.style.width = this._checkBoxWidth+'px';
            this._row.add(cb);
        }
        while(it.hasNext()){
            var col = it.next();
            var id = columns.getId(col);
            var columnName = columns.getName(col);
            var canSort = columns.canSort(col);
            var td = this.create({'type':'td','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__data-cell '});
            if(canSort){
                var sortDir = columns.getSortDirection(col);
                var sortBtn = this.create({'type':'button','className':'mui-lazy-grid-header__sort-btn '+(sortDir=='asc'?'mui-lazy-grid-header__sort-btn--asc':'mui-lazy-grid-header__sort-btn--dsc')});
                sortBtn.__id = id;
                td.add(
                    this.create('mui-lazy-grid-header__container').add(
                        this.create({'type':'span','className':'mui-lazy-grid-header__label','text':columnName}),
                        sortBtn
                    )
                );
            }else{
                td.textContent = columnName;
            }
            td.__id = id;
            this._row.add(td);
        }
        if(this._scrollbarWidth){
            var scrollbar =this.create({'type':'span','className':'mui-lazy-grid-header__cell mui-lazy-grid-header__right-corner-cell'});
            scrollbar.style.width = this._scrollbarWidth+'px';
            this._row.add(scrollbar);
        }
    };
    GridHeader.prototype.toggleAllChecked= function(){
        this._isAllChecked = !this._isAllChecked;
        this.update();

    };
    GridHeader.prototype.enableBottomShadow= function(bool){
        if(this._bottomShadow===bool){
            return;
        }
        this._bottomShadow = bool;
        if(bool){
            this.addClass('mui-lazy-grid-header--shadow');
        }else{
            this.removeClass('mui-lazy-grid-header--shadow');
        }
    };
    GridHeader.prototype.setColumns = function(columns){
        this._columns = columns;
        this.update();
    };


    GridHeader.prototype.setColumnSize = function(id,size){
        this._columnSizes.set(id,size);
    };


    return DataGrid;

}();


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * @typedef mui.SplitContainerOptions
 * @property {string} position north, west, south or east
 * @property {number} subWidth
 * @property {number} subHeight
 * @property {boolean} subResizable
 * @property {mui.Element} mainContent
 * @property {mui.Element} subContent
 * @property {function} onSizeChanged
 *
 * SplitContainer layout
 * @class mui.SplitContainer
 * @augments mui.Element
 * @param {mui.SplitContainerOptions} options
 */
mui.SplitContainer = (function () {
    var resizierLocationMappings = {
        'north':'south',
        'south':'north',
        'west':'east',
        'east':'west'
    };
    var marginLocationMappings = {
        'north':'marginTop',
        'south':'marginBottom',
        'west':'marginRight',
        'east':'marginLeft'
    };

    var SplitContainer = function (options) {
        if(options==null){
            options = {};
        }
        mui.Element.call(this, options);
        this._pos = options['position'] || 'west';
        this._onSizeChanged = options['onSizeChanged'];
        this._animClass = 'mui-split-container__sub--anim';

        this.addClass('mui-split-container');
        this.addClass(this._pos=='north' || this._pos=='south'?'mui-v-container':'mui-h-container')
        this._main = this.create('mui-split-container__main');
        this.add(this._main);

        this._sub = new mui.ResizableContainer({
            'width':options['subWidth'],
            'height':options['subHeight'],
            'position':resizierLocationMappings[this._pos],
            'resizable':options['subResizable'],
            'parentBoundGetter':function(){
                return this.getElement().getBoundingClientRect();
            }.bind(this),
            'onChanged':function(sub){
                if(this._pos=='north'){

                }
            }.bind(this)
        });
        this._sub.addClass('mui-split-container__sub');
        this._sub.addClass('mui-split-container__sub--'+this._pos);
        // this._sub.attachTo(this.getElement());

        if(options['subVisible']==false){
            this.hideSub(false);
        }else {
            this.showSub(false);
        }
        if(options['mainContent']){
            this.setMainContent(options['mainContent']);
        }
        if(options['subContent']){
            this.setSubContent(options['subContent']);
        }

    };
    mui.inherits(SplitContainer, mui.Element);

    /**
     * @override
     */
    SplitContainer.prototype.dispose = function () {
        if(this._onAnimFinished){
            this.getElement().removeEventListener(this.getTransitionName(),this._onAnimFinished);
            this._onAnimFinished = null;
        }
        if(this._mainContent){
            this._mainContent.detach();
            this._mainContent = null;
        }
        if(this._subContent){
            this._subContent.detach();
            this._subContent = null;

        }
        this._sub.dispose();
        this._onSizeChanged = null;
        this._sub = null;
        this._main = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Get Main Content
     * @return {mui.Element}
     */
    SplitContainer.prototype.getMainContent = function(){
        return this._mainContent;

    };

    /**
     * Get Sub Content
     * @return {mui.Element}
     */
    SplitContainer.prototype.getSubContent = function(){
        return this._subContent;
    };

    /**
     * Set Main Content
     * @param {mui.Element} child
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.setMainContent = function(child){
        if(this._mainContent){
            this._mainContent.detach();
        }
        child.attachTo(this._main);
        this._mainContent = child;
        return this;
    };

    /**
     * Set Sub Content
     * @param {mui.Element} child
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.setSubContent = function(child){
        if(this._subContent){
            this._subContent.detach();
        }
        child.attachTo(this._sub);
        this._subContent = child;
        return this;

    };

    /**
     * Toggle sub visible
     * @param {boolean} bool
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.toggleSub = function(bool){
        if(bool==null){
            bool = !this.isSubVisible();
        }
        if(bool){
            this.showSub();
        }else{
            this.hideSub();
        }
        return this;
    };
    SplitContainer.prototype._startAnim = function(callback){
        if(this._animEnd){
            this.getElement().removeEventListener(this.getTransitionName(), this._animEnd);
            this._animEnd = null;
        }
        this._animEnd = function(evt){
            if(!evt.target.classList.contains(this._animClass))return;
            this._sub.removeClass(this._animClass);
            this.getElement().removeEventListener(this.getTransitionName(),this._animEnd);
            this._animEnd = null;
            if(callback){
                callback();
            }
        }.bind(this);
        this.getElement().addEventListener(this.getTransitionName(), this._animEnd);
        this._sub.addClass(this._animClass);
    };

    /**
     * Is Sub Visible
     * @return {boolean}
     */
    SplitContainer.prototype.isSubVisible = function(){
        return this._sub.getParent();
    };
    /**
     * Hide Sub
     * @param {boolean} anim
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.hideSub = function(anim){
        if(this._sub.getParent()==null)return this;
        if(anim===false){
            this._sub.detach();
            if(this._onSizeChanged){
                this._onSizeChanged();
            }
            return this;
        }
        this._sub.getElement().style[marginLocationMappings[this._pos]] = '-'+(this._pos=='north' || this._pos=='south'?this._sub.getHeight():this._sub.getWidth())+'px';
        this._startAnim(function(){
            this._sub.detach();
            if(this._onSizeChanged) {
                this._onSizeChanged();
            }
        }.bind(this));
        return this;


    };

    /**
     * Show Sub
     * @param {boolean} anim
     * @return {mui.SplitContainer}
     */
    SplitContainer.prototype.showSub = function(anim){
        if(this._sub.getParent())return this;
        this._sub.attachTo(this.getElement()); //has parent now
        if(anim===false){
            if(this._onSizeChanged){
                this._onSizeChanged();
            }
            return  this;
        }
        //Need 3 frames for animation,this is the only way to sync animation (using margin)
        //1. add to dom, 2.calculate amount to animate. 3. animate to screen
        requestAnimationFrame(function(){
            var dim = (this._pos=='north' || this._pos=='south'?this._sub.getHeight():this._sub.getWidth());
            this._sub.getElement().style[marginLocationMappings[this._pos]] = '-'+dim+'px';
            requestAnimationFrame(function(){
                this._sub.getElement().style[marginLocationMappings[this._pos]] = '0px';
                this._startAnim(function(){
                    if(this._onSizeChanged) {
                        this._onSizeChanged();
                    }
                }.bind(this));

            }.bind(this));

        }.bind(this));
        return this;

    };

    return SplitContainer;
})();

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * ResizableContainer
 * @class mui.ResizableContainer
 * @augments mui.Element
 * @param {Object} options
 * @param {number} options.minSize
 * @param {string} options.position top,left,right,bottom
 * @param {function} parentBoundGetter
 */
mui.ResizableContainer = (function () {
    var MIN_SIZE = 30;
    var ResizableContainer = function (options) {
        if(options==null){
            options = {};
        }
        this._minSize = MIN_SIZE|| options['minSize'];
        mui.Element.call(this, options);
        this.addClass('mui-resizable');
        if(options['position']){
            this.setResizerLocation(options['position']);
        }
        this._parentBoundGetter = options['parentBoundGetter'];

    };
    mui.inherits(ResizableContainer, mui.Element);

    /**
     * @override
     */
    ResizableContainer.prototype.dispose = function () {
        this.detachEvent(this._north);
        this.detachEvent(this._west);
        this.detachEvent(this._east);
        this.detachEvent(this._south);
        this._parentBoundGetter = null;
        this._north =null;
        this._west = null;
        this._south = null;
        this._east = null;
        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Disable resizer
     */
    ResizableContainer.prototype.disableResizer = function(){
        this._resizer.removeFromParent();

    };


    /**
     * Enable resizer
     */
    ResizableContainer.prototype.enableResizer = function(){
        if(this._resizer && this._resizer.parentNode==null){
            this.add(this._resizer);
        }
    };

    /**
     * Set resizer location
     * @param {string} pos top,left,bottom,right
     */
    ResizableContainer.prototype.setResizerLocation = function(pos){
        if(this._resizer && this._resizer.__position==pos){
            return;
        }
        var className = 'mui-resizable__resizer mui-resizable__'+pos+'-resizer';
        if(this._resizer==null){
            this._resizer = this.create(className);
            this.add(this._resizer);
        }else{
            this._resizer.className = className;
            this.detachEvent(this._resizer);
        }
        this._resizer.__position = pos;

        if(pos =='north') {
            this._initializeNorth(this._resizer);
        }
        if(pos =='west') {
            this._initializeWest(this._resizer);
        }
        if(pos =='east') {
            this._initializeEast(this._resizer);
        }
        if(pos=='south') {
            this._initializeSouth(this._resizer);
        }
    };

    ResizableContainer.prototype._initializeNorth = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._max = evt.rect.bottom;
                this._min = this._parentBoundGetter?this._parentBoundGetter().top:-Math.Infinity;
                this._offset = (evt.clientY -evt.resizerRect.top );
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientY>this._max-this._minSize || evt.clientY<this._min+this._minSize){
                    return;
                }
                this.setHeight(this._max-evt.clientY+ this._offset);
            }.bind(this)
        });

    };
    ResizableContainer.prototype._initializeWest = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._min = evt.rect.left;
                this._max = this._parentBoundGetter?this._parentBoundGetter().right:Math.Infinity;
                this._offset = (evt.resizerRect.right - evt.clientX);
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientX<this._min+this._minSize || evt.clientX>this._max-this._minSize){
                    return;
                }
                this.setWidth(evt.clientX - this._min + this._offset);
            }.bind(this)
        });
    };
    ResizableContainer.prototype._initializeEast = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._max = evt.rect.right;
                this._min = this._parentBoundGetter?this._parentBoundGetter().left:-Math.Infinity;
                this._offset = evt.clientX -evt.resizerRect.left;
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientX>this._max-this._minSize || evt.clientX<this._min+this._minSize){
                    return;
                }
                this.setWidth(this._max - evt.clientX + this._offset);
            }.bind(this)
        });

    };
    ResizableContainer.prototype._initializeSouth = function (ele) {
        this.attachEvent(ele,{
            'onActivated':function(evt){
                this._min = evt.rect.top;
                this._max = this._parentBoundGetter?this._parentBoundGetter().bottom:Math.Infinity;
                this._offset =(evt.resizerRect.bottom - evt.clientY);
            }.bind(this),
            'onChanged':function(evt){
                if(evt.clientY<this._min+this._minSize || evt.clientY>this._max-this._minSize){
                    return;
                }
                this.setHeight(evt.clientY - this._min + this._offset);
            }.bind(this)
        });
    };
    ResizableContainer.prototype.detachEvent = function (resizer) {
        if(resizer.__mouseDownHandler==null)return;
        resizer.removeEventListener('mousedown',resizer.__mouseDownHandler);
        resizer.__mouseDownHandler = null;
    };
    ResizableContainer.prototype.attachEvent = function (resizer,options) {
        var handler = function(evt){
            if(resizer._activated)return;
            resizer._activated = true;

            this._onMouseMove =function(evt){
                if(!resizer._activated)return;
                if(options['onChanged']){
                    options['onChanged'](evt);
                }
            }.bind(this);
            this._onMouseUp =function(evt){
                if(!resizer._activated)return;
                resizer._activated = false;
                document.removeEventListener('mousemove', this._onMouseMove);
                document.removeEventListener('mouseup', this._onMouseUp);
                this._onMouseMove = null;
                this._onMouseUp = null;
                if(options['onDeactivated']){
                    options['onDeactivated']();
                }
            }.bind(this);

            document.addEventListener('mousemove', this._onMouseMove);
            document.addEventListener('mouseup', this._onMouseUp);
            if(options['onActivated']){
                var resizerRect = resizer.getBoundingClientRect();
                var rect = this.getElement().getBoundingClientRect();
                options['onActivated']({
                    resizerRect:resizerRect,
                    rect:rect,
                    clientX:evt.clientX,
                    pageX:evt.pageX,
                    clientY:evt.clientY,
                    pageY:evt.pageY
                });
            }
        }.bind(this);
        resizer.addEventListener('mousedown',handler);
        resizer.__mouseDownHandler = handler;
        return handler;

    };

    return ResizableContainer;
})();


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Panel.HeaderActionClick
 * @param {string} id
 *
 * @callback mui.Panel.FooterActionClick
 * @param {string} id
 *
 * @callback mui.Panel.Close
 *
 * @typedef mui.PanelOptions
 * @property {mui.Panel.HeaderActionClick} onHeaderActionClick
 * @property {mui.Panel.FooterActionClick} onFooterActionClick
 * @property {mui.Panel.Close} onClose
 * @property {boolean} footerVisible
 * @property {mui.IEntityCollection} headerActions
 * @property {mui.IEntityCollection} footerActions
 * @property {mui.Element} content
 *
 * @property {string} title
 * @property {string} titleDescription
 * @property {string} headerIcon
 * @property {boolean} showDropdown
 * @property {mui.Style} headerStyle
 *
 *
 * Panel
 * @constructor
 * @class mui.Panel
 * @augments mui.Element
 * @param {mui.PanelOptions} options
 *
 */
mui.Panel = function(){
    var btnTypeToClass = {
        'alert':'mui-button-alert',
        'primary':'mui-button-primary',
        'accent':'mui-button-accent',
        'link':'mui-button-link'
    };
    var Panel = function(options){
        mui.Element.call(this,options);
        this.addClass('mui-panel');
        this._headerActionClickHandler = options['onHeaderActionClick'];
        this._footerActionClickHandler = options['onFooterActionClick'];

        this._header = this.create('mui-panel__header');
        this._leftContainer = this.create('mui-panel__left-header');
        this._titleBtn = new mui.Button({
            'className':'mui-button-link',
            'label':options['title'],
            'description':options['titleDescription'],
            'icon':options['headerIcon'],
            'isDropdown':options['showDropdown']
        });
        if(options['headerStyle']){
            options['headerStyle'].apply(this._header);
        }

        this._rightActionContainer = this.create('mui-panel__right-actions');
        this._header.add(this._leftContainer,this._rightActionContainer);


        this._body = new mui.Content({
            'className':'mui-panel__body'
        });
        this.add(this._header);
        this._body.attachTo(this.getElement());

        if(options['onClose']){
            this._closeBtn = new  mui.Button({
                'icon':'mui-panel__close-icon',
                'className':'mui-panel__header-close-btn  mui-button-link',
                'onClick':options['onClose'].bind(null,this)
            });
            this._closeBtn.attachTo(this._header);
        }

        this._titleBtn.attachTo(this._leftContainer);

        if(options['footerVisible']){
            this._footer = this.create('mui-panel__footer');
            this.add(this._footer);
        }
        if(options['title']){
            this.setTitle(options['title']);
        }
        if(options['titleDescription']){
            this.setTitleDescription(options['titleDescription']);
        }
        if(options['headerActions']){
            this.setHeaderActions(options['headerActions']);
        }
        if(options['footerActions']){
            this.setFooterActions(options['footerActions']);
        }
        if(options['content']){
            this.setContent(options['content']);
        }else {
            this._body.showMessage('Empty');
        }
    };
    mui.inherits(Panel,mui.Element);

    /**
     * @inheritDoc
     */
    Panel.prototype.dispose = function(){
        if(this._closeBtn) {
            this._closeBtn.detach();
            this._closeBtn.dispose();
            this._closeBtn = null;
        }
        if(this._titleBtn){
            this._titleBtn.detach();
            this._titleBtn.dispose();
            this._titleBtn = null;
        }
        this._body.detach();
        this._body.dispose();
        this._body = null;
        this._headerActionClickHandler = null;
        this._footerActionClickHandler = null;
        this._header =null;
        this._leftContainer = null;
        this._rightActionContainer = null;
        this._footer =null;

        mui.Element.prototype.dispose.call(this);
    };
    /**
     * @inheritDoc
     */
    Panel.prototype.setTitle = function(text){
        this._titleBtn.setLabel(text);
        return this;
    };
    /**
     * Set title description
     * @param {string} text
     * @return {mui.Panel}
     */
    Panel.prototype.setTitleDescription = function(text){
        this._titleBtn.setDescription(text);
        return this;
    };
    /**
     * Set content
     * @param { mui.Element} content
     * @return {mui.Panel}
     */
    Panel.prototype.setContent = function(content){
        this._body.setChild(content);
        return this;
    };

    /**
     * Set Header Actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.Panel}
     */
    Panel.prototype.setHeaderActions = function(actions){
        this._headerActions = actions;
        this.updateHeaderActions();
        return this;
    };
    /**
     * Update header actions
     * @return {mui.Panel}
     */
    Panel.prototype.updateHeaderActions = function(){
        this._clearHeaderCachedActions();
        var actions = this._headerActions;
        var it = actions.getChildren();
        var arr = [];
        while(it.hasNext()){
            var act = it.next();
            var btn = new mui.Button({
                'label':actions.getName(act),
                'icon':actions.getIcon(act),
                'className':'mui-panel__header-btn  mui-button-link',
                'onClick':this._handleHeaderActionClick.bind(this,actions.getId(act))
            });
            btn.attachTo(this._rightActionContainer);
            arr.push(btn);
        }
        this._cachedHeaderActions = arr;
        return this;
    };
    Panel.prototype._clearHeaderCachedActions = function(){
        if(this._cachedHeaderActions){
            this._cachedHeaderActions.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedHeaderActions =null;
        }
    };
    Panel.prototype._handleHeaderActionClick = function(id){
        if(this._headerActionClickHandler){
            this._headerActionClickHandler(id);
        }
    };
    /**
     * Set footer Actions
     * @param {mui.IEntityCollection} actions
     * @return {mui.Panel}
     */
    Panel.prototype.setFooterActions = function(actions){
        this._footerActions = actions;
        this.updateFooterActions();
        return this;

    };

    /**
     * Update footer actions
     * @return {mui.Panel}
     */
    Panel.prototype.updateFooterActions = function(){
        if(this._footer==null)return this;
        this._clearFooterCachedActions();
        var actions = this._footerActions;
        var it = actions.getChildren();
        var arr = [];
        while(it.hasNext()){
            var act = it.next();
            var classN = btnTypeToClass[actions.getType(act)];
            var btn = new mui.Button({
                'label':actions.getName(act),
                'icon':actions.getIcon(act),
                'className':'mui-panel__footer-btn  '+classN,
                'onClick':this._handleFooterClick.bind(this,actions.getId(act))
            });
            btn.attachTo(this._footer);
            arr.push(btn);

        }
        this._cachedFooterActions = arr;
        return this;
    };
    Panel.prototype._clearFooterCachedActions = function(){
        if(this._cachedFooterActions){
            this._cachedFooterActions.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedFooterActions = null;
        }
    };
    Panel.prototype._handleFooterClick = function(id){
        if(this._footerActionClickHandler){
            this._footerActionClickHandler(id);
        }
    };
    return Panel;
}();


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 * @callback mui.Tab.Factory
 * @param {string} id
 *
 * @callback mui.Tab.HeaderItemClick
 * @param {mui.Event} evt
 *
 * Tab
 * @typedef mui.TabOptions
 * @property {string} active
 * @property {string} headerClassName
 * @property {boolean} stretchHeader *
 * @property {mui.IEntityCollection} items
 * @property {mui.Tab.Factory} factory
 * @property {...mui.Element} leftChildren
 * @property {...mui.Element} rightChildren
 * @property {} headerStyle
 * @property {mui.Tab.HeaderItemClick} onHeaderItemClick
 *
 * @class mui.Tab
 * @augments mui.Element
 * @param {mui.TabOptions} options
 *
 */
mui.Tab = function(){
    var Tab = function(options){
        mui.Element.call(this,options);
        this._active = options['active'];
        this._onHeaderItemClick = options['onHeaderItemClick'];
        this._factories = options['factory'];
        this._cachedContents = new Map();
        this._cachedHeaders = new Map();

        this.addClass('mui-tab');
        this._headerE = this.create('mui-tab__header '+(options['headerClassName']?options['headerClassName']:''));
        this._leftHeaderE = this.create('mui-tab__left-header-container');
        this._rightHeaderE = this.create('mui-tab__right-header-container');
        this._itemsContainer = this.create('mui-tab__items-container '+(options['stretchHeader']?'mui-tab__items-container--stretch':''));
        this._headerE.add(this._itemsContainer);
        this._bodyE = new mui.Content({
            'className':'mui-tab__body'
        });
        this.add(this._headerE);
        this._bodyE.attachTo(this.getElement());
        if(options['items']){
            this.setItems(options['items']);
        }
        if(options['leftChildren']){
            this.showLeftContent.apply(this,options['leftChildren']);
        }
        if(options['rightChildren']){
            this.showRightContent.apply(this,options['rightChildren']);
        }
        if(options['headerStyle']){
            options['headerStyle'].apply(this._headerE);
        }

    };
    mui.inherits(Tab,mui.Element);

    /**
     * @inheritDoc
     */
    Tab.prototype.dispose = function(){
        this._clear();
        this._bodyE.detach();
        this._bodyE.dispose();
        this._bodyE = null;

        this._onHeaderItemClick = null;
        this._factory = null;
        this._cachedContents = null;
        this._cachedHeaders = null;

        this._headerE =null;
        this._leftHeaderE = null;
        this._rightHeaderE = null;
        this._itemsContainer = null;

        mui.Element.prototype.dispose.call(this);
    };

    /**
     * Set Items
     * @param {mui.IEntityCollection} iCollection
     * @return {mui.Tab}
     */
    Tab.prototype.setItems = function(iCollection){
        this._items = iCollection;
        this.update();
        return this;
    };

    /**
     * Set Active
     * @param {string} id
     * @return {mui.Tab}
     */
    Tab.prototype.setActive = function(id){
        this._hideError();
        var activeE =this._cachedHeaders.get(this._active);
        if(activeE){
            activeE.removeClass('mui-tab__header-item--active');
        }
        activeE = this._cachedHeaders.get(id);
        if(activeE){
            activeE.addClass('mui-tab__header-item--active');
        }
        activeE = this._cachedContents.get(this._active);
        if(activeE){
            activeE.detach();
        }
        activeE = this._cachedContents.get(id);
        if(activeE==null && this._factories){
            activeE = this._factories(id);
        }
        if(activeE) {
            this._bodyE.setChild(activeE);
        }else{
            this._showMessage("Empty");
        }
        this._cachedContents.set(id,activeE);
        this._active = id;
        return this;
    };

    /**
     * Set Left Content
     * @param {...mui.Element} content
     * @return {mui.Tab}
     */
    Tab.prototype.showLeftContent = function(content){
        if(this._leftHeaderE.parentNode==null){
            this._headerE.insertBefore(this._leftHeaderE,this._itemsContainer);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._leftHeaderE);
        }
        return this;
    };

    /**
     * Set Right Content
     * @param {...mui.Element}
     * @return {mui.Tab}
     */
    Tab.prototype.showRightContent = function(content){
        if(this._rightHeaderE.parentNode==null){
            this._headerE.add(this._rightHeaderE);
        }
        for(var i=0;i<arguments.length;i++) {
            arguments[0].attachTo(this._rightHeaderE);
        }
        return this;
    };


    Tab.prototype._clear = function(){
        if(this._cachedHeaders){
            this._cachedHeaders.forEach(function(btn){
                btn.detach();
                btn.dispose();
            });
            this._cachedHeaders = new Map();
        }
        if(this._cachedContents){
            this._cachedContents.forEach(function(iElement){
                iElement.detach();
            });
            this._cachedContents = new Map();
        }
    };

    /**
     * Update
     * @return {mui.Tab}
     */
    Tab.prototype.update = function(){
        this._clear();
        var data = this._items;
        var it = this._items.getChildren();
        var item;
        var cachedHeaders = new Map();
        while(it.hasNext()){
            item = it.next();
            var id = data.getId(item);
            var btn = new mui.Button({
                'icon':data.getIcon(item),
                'label':data.getName(item),
                'onClick':this._handleHeaderItemClick.bind(this,id),
                'className':'mui-tab__header-item'
            });
            btn.attachTo(this._itemsContainer);
            cachedHeaders.set(id,btn);
        }
        this._cachedHeaders = cachedHeaders;
        var headerE = cachedHeaders.get(this._active);
        if(headerE){
            headerE.addClass('mui-tab__header-item--active');
        }
        if(this._factory==null)return this;
        var view= this._factory(this._active);
        if(view) {
            view.attachTo(this._body);
        }else{
            this._showMessage("Empty");
        }
        return this;
    };
    Tab.prototype._hideError = function(){
        this._bodyE.hideMessage();
    };
    Tab.prototype._showMessage = function(message,icon){
        this._bodyE.showMessage(message,icon);

    };
    Tab.prototype._handleHeaderItemClick = function(id,evt){
        if(this._onHeaderItemClick){
            var arg = new mui.Event(this,null,evt);
            this._onHeaderItemClick(arg);
            if(arg.isStopped()){
                return;
            }
        }
        this.setActive(id);

    };
    return Tab;
}();


/***/ }),
/* 42 */
/***/ (function(module, exports) {

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


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * @interface mui.IStyle
 */
mui.IStyle = function(){
    var IStyle = function () {

    };
    /**
     * Apply style to element
     * @function
     * @abstract
     * @param {HTMLElement} ielement
     */
    IStyle.prototype.apply =function(ielement){
        throw "must implements";
    };
    return IStyle;
}();

/**
 * Style class
 * @class mui.Style
 * @implements {mui.IStyle}
 * @param {object} styles ex. {display:none,padding:10px}
 * @param {Array.<string>} classes
 */
mui.Style = function(){
    var Style = function(styles,classes){
        this._styles = styles==null?{}:styles;
        this._classes = classes?classes:[];
    };
    /**
     * Row based flex container
     * @return {mui.Style}
     */
    Style.prototype.flexRow = function(){
        this._classes.push('mui-flex--ver');
        return this;
    };
    /**
     * Column based flex container
     * @return {mui.Style}
     */
    Style.prototype.flexColumn = function(){
        this._classes.push('mui-flex--hor');
        return this;
    };
    /**
     * Growing flex item
     * @return {mui.Style}
     */
    Style.prototype.flexChildAuto = function(){
        this._classes.push('mui-flex-item--scaled');
        return this;
    };

    /**
     * Align flex items cross axis
     * @param {string} align center,start,end
     * @return {mui.Style}
     */
    Style.prototype.flexContainerCrossAxisAlign = function(align){
        this._classes.push('mui-flex-align__container-cross-axis--'+align);
        return this;
    };
    /**
     * Align flex items main axis
     * @param {string} align center,start,end
     * @return {mui.Style}
     */
    Style.prototype.flexContainerMainAxisAlign = function(align){
        this._classes.push('mui-flex-align__container-main-axis--'+align);
        return this;
    };

    /**
     * Expand child to closes parent who has size
     * @param {string} offsetLeft
     * @param {string} offsetTop
     * @param {string} offsetRight
     * @param {string} offsetBottom
     * @return {mui.Style}
     */
    Style.prototype.expandToParent = function(offsetLeft,offsetTop,offsetRight,offsetBottom){
        this._styles['position'] = 'absolute';
        this._styles['left'] = offsetLeft?offsetLeft:'0px';
        this._styles['right'] = offsetRight?offsetRight:'0px';
        this._styles['bottom'] = offsetBottom?offsetBottom:'0px';
        this._styles['top'] = offsetTop?offsetTop:'0px';
        return this;
    };
    /**
     * Expand child to window
     * @param {string} offsetLeft
     * @param {string} offsetTop
     * @param {string} offsetRight
     * @param {string} offsetBottom
     * @return {mui.Style}
     */
    Style.prototype.expandToViewport = function(offsetLeft,offsetTop,offsetRight,offsetBottom){
        this._styles['position'] = 'fixed';
        this._styles['left'] = offsetLeft?offsetLeft:'0px';
        this._styles['right'] = offsetRight?offsetRight:'0px';
        this._styles['bottom'] = offsetBottom?offsetBottom:'0px';
        this._styles['top'] = offsetTop?offsetTop:'0px';
        return this;
    };
    /**
     * Border
     * @param {string} width
     * @param {string} style
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.border = function(width,style,color){
        if(width!=null) {
            this._styles['borderWidth'] = width;
        }
        if(style!=null) {
            this._styles['borderStyle'] = style;
        }
        if(style!==null) {
            this._styles['borderColor'] = color;
        }
        return this;
    };
    /**
     * Text color
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.color = function(color){
        this._styles['color'] = color;
        return this;
    };
    /**
     * Background
     * @param {string} color
     * @return {mui.Style}
     */
    Style.prototype.background = function(color){
        this._styles['background'] = color;
        return this;
    };
    /**
     * Border radius
     * @param {string | number}number
     * @param {string} where topLeft,topRight,bottomLeft,bottomRight
     * @return {mui.Style}
     */
    Style.prototype.corner = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'topLeft':
                this._styles['borderTopLeftRadius'] = number;
            case 'topRight':
                this._styles['borderTopRightRadius'] = number;
            case 'bottomLeft':
                this._styles['borderBottomLeftRadius'] = number;
            case 'bottomRight':
                this._styles['borderBottomRightRadius'] = number;
            default:
                this._styles['borderRadius'] = number;
        }
        return this;
    };
    /**
     * Padding
     * @param {string | number} number
     * @param {string} where top,left,right,bottom
     * @return {mui.Style}
     */
    Style.prototype.padding = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'right':
                this._styles['paddingRight'] = number;
            case 'left':
                this._styles['paddingLeft'] = number;
            case 'bottom':
                this._styles['paddingBottom'] = number;
            case 'top':
                this._styles['paddingTop'] = number;
            default:
                this._styles['padding'] = number;
        }
        return this;
    };

    /**
     * Margin
     * @param {string | number} number
     * @param {string} where top,left,right,bottom
     * @return {mui.Style}
     */
    Style.prototype.margin = function(number,where){
        number =typeof number=='number'?number+'px':number;
        switch (where){
            case 'right':
                this._styles['marginRight'] = number;
            case 'left':
                this._styles['marginLeft'] = number;
            case 'bottom':
                this._styles['marginBottom'] = number;
            case 'top':
                this._styles['marginTop'] = number;
            default:
                this._styles['margin'] = number;
        }
        return this;
    };

    /**
     * Width
     * @param {number} number
     * @return {mui.Style }
     */
    Style.prototype.width = function(w){
        this._styles['width'] = typeof w=='number'?w+'px':w;
        return this;
    };
    /**
     * Height
     * @param {number} number
     * @return {mui.Style }
     */
    Style.prototype.height = function(h){
        this._styles['height'] = typeof h=='number'?h+'px':h;
        return this;
    };
    /**
     * Background Image
     * @param {string} url
     * @param {string} pos css background position
     * @param {string} size css background size
     * @param {string} repeat css repeat
     * @return {mui.Style }
     */
    Style.prototype.backgroundImage = function(url,pos,size,repeat){
        this._styles['backgroundImage'] ='url("'+ url+'")';
        this._styles['backgroundPosition'] = pos==null?'center':pos;
        this._styles['backgroundSize'] = size==null?'100%':size;
        this._styles['backgroundRepeat'] = repeat==null?'no-repeat':repeat;
        return this;
    };


    /**
     * Class Name
     * @param {string} string
     * @return {mui.Style}
     */
    Style.prototype.addClass = function(string){
        this._classes.push(string);
        return this;
    };

    /**
     * @inheritDoc
     */
    Style.prototype.apply = function(element){
        for (var key in this._styles){
            if(!this._styles.hasOwnProperty(key))continue;
            element.style[key] = this._styles[key];
        }
        element.className = element.className +' '+this._classes.join(" ");
        return this;
    };
    return Style;
}();



/**
 * @class mui.Theme
 * @augments mui.Style
 *
 */
mui.Theme = function(){
    var Theme = function(styles,classes){
        mui.Style.call(this,styles,classes);
    };

    mui.inherits(Theme,mui.Style);
    /**
     * Theme padding
     * @param {string} type small,medium,large
     * @param {string} where left,right,bottom,all
     * @return {mui.Style}
     */
    Theme.prototype.paddingOf = function(type,where){
        if(where==null){
            where ='all';
        }
        this._classes.push('mui-padding__'+where+'--'+type);
        return this;
    };
    /**
     * Theme margin
     * @param {string} [type] small,medium,large
     * @param {string} where left,right,bottom,all
     * @return {mui.Style}
     */
    Theme.prototype.marginOf = function(type,where){
        if(where==null){
            where ='all';
        }
        this._classes.push('mui-margin__'+where+'--'+type);
        return this;
    };
    /**
     * Border radius
     * @param {string} type small,medium,large
     * @param {string} where topLeft,topRight,bottomLeft,bottomRight,all
     */
    Theme.prototype.cornerOf = function(type,where){
        switch (where){
            case 'topLeft':
                where = 'top-left';
                break;
            case 'topRight':
                where = 'top-right';
                break;
            case 'bottomLeft':
                where = 'bottom-left';
                break;
            case 'bottomRight':
                where = 'bottom-right';
                break;
            default:
                where = 'all';
        }
        this._classes.push('mui-corner__'+where+'--'+type);
    };
    /**
     * Button style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.buttonOf = function(type){
        this._classes.push('mui-button-'+type);
        return this;
    };
    /**
     * Container theme style (background & text)
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.containerOf = function(theme){
        this._classes.push('mui-container-of-'+theme);
        return this;
    };
    /**
     * Background theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.backgroundOf = function(theme){
        this._classes.push('mui-bg-of-'+theme);
        return this;
    };
    /**
     * Text theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.textOf = function(theme){
        this._classes.push('mui-txt-of-'+theme);
        return this;
    };
    /**
     * Border theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.borderOf = function(theme){
        this._classes.push('mui-border-of-'+theme);
        return this;
    };

    /**
     * Bold Container Theme style
     * @param {string} type
     * @return {mui.Style}
     */
    Theme.prototype.boldContainerOf = function(theme){
        this._classes.push('mui-container-bold-of-'+theme);
        return this;
    };

    /**
     * Text theme on background (reversed color)
     * @param theme
     * @return {mui.Style}
     */
    Theme.prototype.textOn = function(theme){
        this._classes.push('mui-text-on-'+theme);
        return this;
    };
    /**
     * border theme on background (reversed color)
     * @param theme
     * @return {mui.Style}
     */
    Theme.prototype.borderOn = function(theme){
        this._classes.push('mui-border-on-'+theme);
        return this;
    };
    /**
     * Typography
     * @param {string} heading h1,h2,h3,h4,h5,h6,subtitle,body,link,caption
     * @return {mui.Theme}
     */
    Theme.prototype.typographyOf = function(heading){
        this._classes.push('ivp-typo__'+heading);
        return this;
    };
    /**
     * Box shadow
     * @param {number} level (1 to 10)
     * @return {mui.Style}
     */
    Theme.prototype.elevateAt = function(level){
        this._classes.push('mui-elevate--z'+level);
        return this;
    };
    return Theme;
}();


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

/**
 * Gui factory
 * @class mui.GUIFactory
 * @implements {mui.IUiFactory}
 */
mui.GUIFactory = function(){
    var GUIFactory = function(){

    };
    /**
     * Create dialog
     * @param { mui.DialogOptions} options
     * @return {mui.Dialog}
     */
    GUIFactory.prototype.createDialog = function (options) {
        return new mui.Dialog(options);
    };

    /**
     * Create card
     * @param {mui.CardOptions} options
     * @return {mui.Card}
     */
    GUIFactory.prototype.createCard = function (options) {
        return new mui.Card(options);
    };

    /**
     * Create dropdown
     * @param {mui.AbstractDropdownOptions} options
     * @return {mui.Dropdown}
     */
    GUIFactory.prototype.createDropdown = function (options) {
        return new mui.Dropdown(options);
    };

    /**
     * Create image dropdown
     * @param {mui.AbstractDropdownOptions} options
     * @return {mui.ImageDropdown}
     */
    GUIFactory.prototype.createImageDropdown = function (options) {
        return new mui.ImageDropdown(options);
    };

    /**
     * Create container with content centered
     * @param {mui.CenterOptions} options
     * @return {mui.Center }
     */
    GUIFactory.prototype.createCenter = function (options) {
        return new mui.Center(options);
    };

    /**
     * Create split container with main & sub area
     * @param {mui.SplitContainerOptions} options
     * @return {mui.SplitContainer}
     */
    GUIFactory.prototype.createSplitContainer = function (options) {
        return new mui.SplitContainer(options);
    };
    /**
     * Create checkbox
     * @param {mui.CheckboxOptions} options
     * @return {mui.Checkbox}
     */
    GUIFactory.prototype.createCheckbox = function (options) {
        return new mui.Checkbox(options);
    };
    /**
     * Create button group
     * @param {mui.ButtonGroupOptions} options
     * @return {mui.ButtonGroup}
     */
    GUIFactory.prototype.createButtonGroup = function (options) {
        return new mui.ButtonGroup(options);
    };
    /**
     * Create radio group
     * @param {mui.RadioGroupOptions} options
     * @return {mui.RadioGroup}
     */
    GUIFactory.prototype.createRadioGroup = function (options) {
        return new mui.RadioGroup(options);
    };

    /**
     * Create VBox
     * @param {mui.VBoxOptions} options
     * @return {mui.VBox}
     */
    GUIFactory.prototype.createVBox = function (options) {
        return new mui.VBox(options);
    };
    /**
     * Create Hbox
     * @param {mui.HBoxOptions} options
     * @return {mui.HBox}
     */
    GUIFactory.prototype.createHBox = function (options) {
        return new mui.HBox(options);
    };

    /**
     * Create button
     * @param {mui.ButtonOptions} options
     * @return {mui.Button}
     */
    GUIFactory.prototype.createButton = function (options) {
        return new mui.Button(options);
    };

    /**
     * Create Text
     * @param {mui.TextFieldOptions} options
     * @return {mui.TextField}
     */
    GUIFactory.prototype.createText = function (options) {
        return new mui.TextField(options);
    };

    /**
     * Create tab
     * @param {mui.TabOptions} options
     * @return {mui.Tab}
     */
    GUIFactory.prototype.createTab = function (options) {
        return new mui.Tab(options);
    };

    /**
     * Create panel
     * @param {mui.PanelOptions} options
     * @return {mui.Panel}
     */
    GUIFactory.prototype.createPanel = function (options) {
        return new mui.Panel(options);
    };

    /**
     * Create element
     * @param {mui.ElementOptions} options
     * @return { mui.Element}
     */
    GUIFactory.prototype.createElement = function (options) {
        return  new mui.Element(options);
    };
    /**
     * Create number
     * @param {mui.NumberOptions} options
     * @return {mui.Number}
     */
    GUIFactory.prototype.createNumber = function (options) {
        return new mui.Number(options);
    };

    /**
     *
     * @param {mui.LazyListOptions} options
     * @return {mui.LazyList}
     */
    GUIFactory.prototype.createLazyList = function (options) {
        return new mui.LazyList(options);
    };

    /**
     * Create lazy tree
     * @param {mui.LazyTreeOptions} options
     * @return {mui.LazyTree}
     */
    GUIFactory.prototype.createLazyTree = function (options) {
        return new mui.LazyTree(options);
    };
    /**
     * Lazy grid
     * @param {mui.DataGridOptions} options
     * @return {mui.DataGrid}
     */
    GUIFactory.prototype.createLazyGrid = function (options) {
        return new mui.DataGrid(options);
    };

    /**
     * Color picker
     * @param {mui.ColorPickerOptions} options
     * @return {mui.ColorPicker}
     */
    GUIFactory.prototype.createColorPicker = function (options) {
        return new mui.ColorPicker(options);
    };

    /**
     * Date time picker
     * @param {mui.DateTimePickerOptions} options
     * @return {mui.DateTimePicker}
     */
    GUIFactory.prototype.createDateTimePicker = function (options) {
        return new mui.DateTimePicker(options);
    };
    /**
     * Menu
     * @param {mui.AbstractMenuOptions} options
     * @return {mui.Menu}
     */
    GUIFactory.prototype.createMenu = function (options) {

        return new mui.Menu(options);
    };
    /**
     * Create image menu
     * @param {mui.ImageMenuOptions} options
     * @return {mui.ImageMenu}
     */
    GUIFactory.prototype.createImageMenu = function (options) {
        return new mui.ImageMenu(options);
    };
    return new GUIFactory();

}();


/***/ })
/******/ ]);