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
        this.addClass('ivaap-lazy-viewport');
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
        this.addClass('ivaap-lazy-list');
        this._rowHeight = options['rowHeight'] || 35;

        this._content = this.create({'type':'ul','className':'ivaap-lazy-list__content'});
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
        var topSpacerElm = this.create({'className':'ivaap-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'className':'ivaap-lazy-list__bottom-spacer'});
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
