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
