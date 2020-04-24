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
