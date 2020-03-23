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
        this.addClass('ivaap-datagrid');

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
        this._content = this.create('ivaap-datagrid__content');
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
        this.addClass('ivaap-lazy-list');
        this.addClass('ivaap-lazy-grid-list');
        this._checkBoxVisible = options['checkBoxVisible'];
        this._checkBoxWidth = options['checkBoxWidth'] || 40;
        this._stripped = options['stripped'];
        this._clickHandler = function(evt){
            var found,args;
            if(options['onCheckBoxClick']){
                found = this.closest(evt.target, 'ivaap-lay-grid-list__checkbox-icon');
                if (found) {
                    args = new mui.Event(this, this._idToNodeMappings.get(found.__id),evt);
                    options['onCheckBoxClick'](args);
                    if (args.isStopped()) {
                        return;
                    }
                }

            }
            if(options['onRowClick']) {
                found = this.closest(evt.target, 'ivaap-lazy-grid-list__row');
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
        this._content = this.create({'type':'table','className':'ivaap-lazy-grid-list__table'});
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
        elm.childNodes[0].childNodes[0].classList.remove('ivaap-lay-grid-list__checkbox-icon--checked');
    };
    GridList.prototype.addChecked = function(id){
        this._checked.add(id);
        var elm = this._idToElementMappings.get(id);
        if(elm==null)return;
        elm.childNodes[0].childNodes[0].classList.add('ivaap-lay-grid-list__checkbox-icon--checked');
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
            elm.classList.remove('ivaap-lazy-grid-list__row--selected');
        }
        this._selected = id;

        elm = this._idToElementMappings.get(this._selected);
        if(elm){
            elm.classList.add('ivaap-lazy-grid-list__row--selected');
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
        var topSpacerElm = this.create({'type':'tr','className':'ivaap-lazy-list__top-spacer'});
        topSpacerElm.style.height = topHeight+'px';
        var bottomSpacerElm = this.create({'type':'tr','className':'ivaap-lazy-list__bottom-spacer'});
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
                'className': 'ivaap-lazy-grid-list__row',
                'type':'tr'
            });

            var rowFragment = document.createFrag();
            var cellElement = null;

            if(this._checkBoxVisible) {
                rowFragment.add(
                    this.create({'className': 'ivaap-lazy-grid-list__cell ivaap-lazy-grid-list__left-corner-cell','type': 'span'}).add(
                        this.create({'className':'ivaap-lay-grid-list__checkbox-icon','type':'button'})
                    )
                );
            }


            var i=0;
            columnIt = this._columns.getChildren();

            while(columnIt.hasNext()){
                var col = columnIt.next();
                cellElement = this.create({
                    'className': 'ivaap-lazy-grid-list__cell ivaap-lazy-grid-list__data-cell',
                    'type':'td'
                });
                if(i==0){
                    var icon = this.create({
                        "className":'ivaap-lazy-grid-list__cell-icon',
                        'type':'span'
                    });
                    cellElement.appendChild(icon);
                }
                var cellName = this.create({
                    'className':'ivaap-lazy-grid-list__cell-name',
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
            row.classList.add('ivaap-lazy-grid-list__row--selected');
        }
        if(this._checkBoxVisible){
            row.childNodes[0].childNodes[0].__id = id;
            if(this._checked.has(id)){
                row.childNodes[0].childNodes[0].classList.add('ivaap-lay-grid-list__checkbox-icon--checked');
            }
        }
        if(this._stripped){
            row.classList.add(this._counter%2==0?'ivaap-lazy-grid-list__row--even':'ivaap-lazy-grid-list__row--odd');
        }
        this._counter++;
        this._idToElementMappings.set(id,row);
        return row;
    };

    var GridHeader = function(options){
        mui.Element.call(this,{
            'type':'table',
            'className':'ivaap-lazy-grid-header'
        });
        this._row = this.create({'type':'tr','className':'ivaap-lazy-grid-header__row'});
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
                found = this.closest(evt.target,'ivaap-lazy-grid-header__checkbox-icon');
                if(found){
                    options['onCheckAllClick']();
                    return;
                }

            }
            if(this._sortEnabled===true && options['onSortClick']) {
                found = this.closest(evt.target, 'ivaap-lazy-grid-header__sort-btn');
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
            var cb =this.create({'type':'span','className':'ivaap-lazy-grid-header__cell ivaap-lazy-grid-header__left-corner-cell'}).add(
                this.create({'type':'button','className':'ivaap-lazy-grid-header__checkbox-icon '+(this._isAllChecked?'ivaap-lazy-grid-header__checkbox-icon--checked':'')})
            );
            cb.style.width = this._checkBoxWidth+'px';
            this._row.add(cb);
        }
        while(it.hasNext()){
            var col = it.next();
            var id = columns.getId(col);
            var columnName = columns.getName(col);
            var canSort = columns.canSort(col);
            var td = this.create({'type':'td','className':'ivaap-lazy-grid-header__cell ivaap-lazy-grid-header__data-cell '});
            if(canSort){
                var sortDir = columns.getSortDirection(col);
                var sortBtn = this.create({'type':'button','className':'ivaap-lazy-grid-header__sort-btn '+(sortDir=='asc'?'ivaap-lazy-grid-header__sort-btn--asc':'ivaap-lazy-grid-header__sort-btn--dsc')});
                sortBtn.__id = id;
                td.add(
                    this.create('ivaap-lazy-grid-header__container').add(
                        this.create({'type':'span','className':'ivaap-lazy-grid-header__label','text':columnName}),
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
            var scrollbar =this.create({'type':'span','className':'ivaap-lazy-grid-header__cell ivaap-lazy-grid-header__right-corner-cell'});
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
            this.addClass('ivaap-lazy-grid-header--shadow');
        }else{
            this.removeClass('ivaap-lazy-grid-header--shadow');
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
