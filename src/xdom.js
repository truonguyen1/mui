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
