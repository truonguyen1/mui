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
