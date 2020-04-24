/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
/**
 *
 * ActionsBar container
 * @constructor
 * @class mui.ActionsBar
 * @implements {mui.IActionsBar}
 * @augments mui.Element
 *
 */
mui.ActionsBar = function(){
    var ActionsBar = function(options){
        mui.Element.call(this,options);
        this.addClass('mui-actions-bar');
    };
    mui.inherits(ActionsBar,mui.Element);

    /**
     * @inheritDoc
     */
    ActionsBar.prototype.dispose = function(){

        mui.Element.prototype.dispose.call(this);
    };
    return ActionsBar;
}();
