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
