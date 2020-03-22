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
        this.addClass('ivaap-card');

        this._primaryTitle = this.create('ivaap-card__primary-title');
        this._secondTitle = this.create('ivaap-card__second-title');
        this._headerActionsE = this.create('ivaap-card__header-actions');
        this._header =this.create("ivaap-card__header").add(
            options['headerIcon']?this.create('ivaap-card__header-icon '+options['headerIcon']):null,
            this.create('ivaap-card__header-body').add(
                this._primaryTitle,this._secondTitle
            ),
            this._headerActionsE
        );


        if(options['bodyVisible']) {
            this._body = this.create('ivaap-card__body');
            this._body.style.backgroundImage='url("alt_holder.svg")';
        }
        if(options['footerVisible']) {
            this._footer = this.create('ivaap-card__footer');
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
                found = this.closest(evt.target,'ivaap-card__header-settings');
                if(found){
                    this.openHeaderSettings();
                    return;
                }
            }
            if(options['onFooterSettingItemClick']){
                found = this.closest(evt.target,'ivaap-card__footer-settings');
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
        this._header.childNodes[0].className='ivaap-card__header-icon '+icon;
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
                var actE = this.create({'type': 'button', 'className': 'ivaap-card__header-action'}).add(
                    icon ? this.create('ivaap-card__action-icon ' + icon) : null,
                    name ? this.create({'className': 'ivaap-card__action-label', 'text': name}) : null
                );
                actE.__id = id;
                frag.add(actE);
            }
        }
        if(this._headerSettingsVisible){
            this._headerSettingBtn =this.create('ivaap-card__header-settings');
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
            var actE = this.create({'type':'button','className':'ivaap-card__footer-action'}).add(
                icon?this.create('ivaap-card__action-icon '+icon):null,
                name?this.create({'className':'ivaap-card__action-label','text':name}):null
            );
            actE.__id = id;
            frag.add(actE);
        }
        if(this._footerSettingVisible){
            this._footerSettingBtn =this.create('ivaap-card__footer-setting');
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
        this.addClass('ivaap-card--ver');

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
