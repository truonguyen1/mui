/*
 * Copyright: Copyright (c) 2013-2019 by INT, Inc.  All rights reserved.<br>
 * Company: INT, Inc. <br>
 *  INT PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */
window.Demo = function(){
    var Factory = mui.GUIFactory;
    var Theme = mui.Theme;
    var Collection = mui.EntityCollection;
    var Entity = mui.Entity;
    var Demo = function(parent){
        var app =Factory.createVBox({
            'style':new Theme().containerOf('background').addClass('ivaap-app')
        });
        app.makeMeAsRoot();
        app.attachTo(parent);
        createComponents(app);//initialize all components
    };
    function printCode(app,fn,runCode){
        var text = fn.toString();
        text = text.slice(text.indexOf("{") + 1, text.lastIndexOf("}"));
        var code = Factory.createElement({
            'type':'code','text':text,
            'style':new Theme().height(1000).width(1000)
        });

        var row = Factory.createHBox({
            'verticalAlign':'top',
            'children':[
                code
            ]
        });
        app.addChild(row);
        requestAnimationFrame(function() {
            var editor = ace.edit(code.getElement(), {
                maxLines: 100,
                wrap: true,
                autoScrollEditorIntoView: true
            });
            editor.setTheme("ace/theme/monokai");
            editor.session.setMode("ace/mode/javascript");
        });
        if(runCode===false)return;
        fn(row);

    }
    function createComponents(app){
        createTitle('App (root)','Top Level Component', app);
        printCode(app,Demo,false);

        createTitle('Buttons',null, app);
        printCode(app,initializeButtons);

        createTitle('Dropdown',null, app);
        printCode(app,initializeDropdown);

        createTitle('Buttons Group',null, app);
        printCode(app,initializeButtonGroup);

        createTitle('Radio Group',null, app);
        printCode(app,initializeRadioGroup);


        createTitle('Textfield',null, app);
        printCode(app,initializeText);

        createTitle('Checkbox',null, app);
        printCode(app,initializeCheckbox);

        createTitle('Number',null, app);
        printCode(app,initializeNumber);

        createTitle('Card',null, app);
        printCode(app,initializeCard);

        createTitle('Grid',null, app);
        printCode(app,initializeLazyGrid);

        createTitle('Menu',null, app);
        printCode(app,initializeMenu);

        createTitle('Color',null, app);
        printCode(app,initializeColor);

        createTitle('Datetime',null, app);
        printCode(app,initializeDatetime);

        createTitle('Panel',null, app);
        printCode(app,initializePanel);

        createTitle('Tab',null, app);
        printCode(app,initializeTab);

        createTitle('Lazy List','High performance list view', app);initializeLazyList
        printCode(app,initializeLazyList);

        createTitle('Lazy Tree','High performance tree view', app);
        printCode(app,initializeLazyTree);

        createTitle('Split Container','Resizable Container', app);
        printCode(app,initializeResizableContainer);

        createTitle("Dialog",null, app);
        printCode(app,initializeDialog);

        createTitle("Layout",null, app);
        printCode(app,initializeLayout);
    }
    function initializeCard(parent) {
        parent.addChild(
            Factory.createHBox({'children':[
                Factory.createCard({
                    'style':new Theme().width(350).height(300).marginOf('small'),
                    'title':'Title goes here',
                    'titleDescription':'Secondary Text',
                    'headerIcon':null,
                    'headerSettingsVisible':true,
                    'bodyVisible':true,
                    'footerVisible':true,
                    'footerActions':new mui.EntityCollection([
                        new mui.Entity({'name':'Close'}),
                        new mui.Entity({'name':'Open'})
                    ])
                }),
                Factory.createCard({
                    'style':new Theme().width(350).height(300).marginOf('small'),
                    'title':'Title goes here',
                    'titleDescription':'Secondary Text',
                    'headerIcon':null,
                    'headerSettingsVisible':true,
                    'bodyVisible':true,
                    'headerSettingItems':new mui.EntityCollection([
                        new mui.Entity({'name':'Close'}),
                        new mui.Entity({'name':'Open'})
                    ]),
                    'onHeaderSettingItemClick':function(evt){
                        console.log(evt);
                    }
                }),
                Factory.createCard({
                    'style':new Theme().width(350).height(300).marginOf('small'),
                    'title':'Title goes here',
                    'titleDescription':'Secondary Text',
                    'headerFirst':true,
                    'headerIcon':'ivp-icon-bars',
                    'headerSettingsVisible':true,
                    'bodyVisible':true,
                    'headerActions':new mui.EntityCollection([
                        new mui.Entity({'icon':'ivp-icon-file'}),
                        new mui.Entity({'icon':'ivp-icon-plus'})
                    ]),
                    'headerSettingItems':new mui.EntityCollection([
                        new mui.Entity({'name':'Close'}),
                        new mui.Entity({'name':'Open abc duhfeuf'}),
                        new mui.Entity({'name':'test abc duhfeuf'})
                    ]),
                    'onHeaderSettingItemClick':function(evt){
                        console.log(evt);
                    }
                })
            ]})
        );
    }
    function initializeDropdown(parent){
        parent.addChild(
            Factory.createHBox({'verticalAlign':'top','children':[
                Factory.createDropdown({
                    'style':new Theme().marginOf('medium'),
                    'items':new mui.EntityCollection([
                        new mui.Entity({'name':'Item1'}),
                        new mui.Entity({'name':'Item2'}),
                        new mui.Entity({'name':'Item3'}),
                    ])
                }),
                Factory.createImageDropdown({
                    'style':new Theme().marginOf('medium'),
                    'items':new mui.ImageEntityCollection([
                        new mui.Entity({'name':'Item1','image':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC'}),
                        new mui.Entity({'name':'Item2','image':'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'}),
                        new mui.Entity({'name':'Item3','image':'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'})
                    ])
                })
            ]})
        );
    }
    function initializeLayout(parent){
        var container = Factory.createSplitContainer({
            'position':'west',
            'style':new Theme().containerOf('surface').elevateAt(3).width(800),
            'subContent':Factory.createPanel({
                'title':'Settings',
                'style':new Theme().containerOf('background'),
                'content':Factory.createVBox({
                    // 'fitToParent':true,
                    'style':new Theme().marginOf('medium'),
                    'children':[
                        Factory.createHBox({'verticalAlign':'middle','children':[
                                Factory.createElement({'style': new Theme().marginOf('large','right').marginOf('medium','left'),'text':'Direction'}),
                                Factory.createRadioGroup({
                                    'crossAxisAlignSelf':'start',
                                    'vertical':false,'items':new Collection([
                                        new Entity({'id':'rad1','name':'Rad 1'}),
                                        new Entity({'id':'rad2','name':'Rad 2'}),
                                        new Entity({'id':'rad3','name':'Rad 3'})
                                    ])
                                }),
                            ]}),
                        Factory.createHBox({'verticalAlign':'middle','children':[
                            Factory.createElement({'style': new Theme().marginOf('large','right').marginOf('medium','left'),'text':'Auto Scales'}),
                            Factory.createCheckbox({'horizontal':true}),
                        ]}),
                        Factory.createHBox({'verticalAlign':'middle','children':[
                            Factory.createElement({'style': new Theme().marginOf('large','right').marginOf('medium','left'),'text':'Visible'}),
                            Factory.createCheckbox({'horizontal':true}),
                        ]}),
                        Factory.createHBox({'verticalAlign':'middle','children':[
                            Factory.createElement({'style': new Theme().marginOf('large','right').marginOf('medium','left'),'text':'Name'}),
                            Factory.createText({'expandedToParent':true,'placeholder':'testing'})
                        ]}),
                        Factory.createHBox({'verticalAlign':'middle','children':[
                            Factory.createElement({'style': new Theme().marginOf('large','right').marginOf('medium','left'),'text':'Name'}),
                            Factory.createNumber({'expandedToParent':true})
                        ],'style':new Theme().marginOf('large','top')})
                    ]
                }),
                'onClose':function(){
                    container.toggleSub();
                }
            }),
            'mainContent':Factory.createTab({
                // 'fitToParent':true,
                'items':new mui.EntityCollection([
                    new mui.Entity({'id':'reg','name':'Regular'}),
                    new mui.Entity({'id':'extended','name':'Extended'})
                ]),
                'factory':function(id){
                    if(id=='reg'){
                        return Factory.createCenter({
                            // 'fitToParent':true,
                            'child':Factory.createButton({
                                'label':'Button',
                                'style':new Theme().buttonOf('primary'),
                                'icon': 'ivp-icon-plus'
                            })
                        });
                    }
                }
            })

        }).attachTo(parent);
    }


    function initializeDialog(parent){
        Factory.createHBox({'children':[
                Factory.createButton({'label':"modal",'onClick':function(){
                    mui.Dialog.showModal({
                        'id':'test',
                        'style':new Theme().width(800),
                        'content':Factory.createPanel({
                            'style':new Theme().containerOf('background'),
                            // 'fitToParent':true,
                            'title':'TEst Panel',
                            'content':Factory.createCenter({
                                // 'fitToParent':true,
                                'style':new Theme().marginOf('large'),
                                'child': Factory.createMenu({
                                    'items':new mui.EntityCollection([
                                        new mui.Entity({'name':'Item 1','icon':'ivp-icon-folder'}),
                                        new mui.Entity({'name':'Item 2 - test description','icon':'ivp-icon-file'}),
                                        new mui.Entity({'name':'Item 3','icon':'ivp-icon-bars'})
                                    ]),
                                    'onItemClick':function(item){
                                    }.bind(this)
                                })
                            })
                        }),
                        'onClose':function(Dialog){
                            Dialog.close('test');
                        }
                    });
                }}),
                Factory.createButton({'label':"modaless",'onClick':function(){

                }})

            ]}
        ).attachTo(parent);
    }
    function initializeButtonGroup(parent){
        parent.addChild(
            Factory.createHBox({
                'children':[
                    Factory.createButtonGroup({
                        "crossAxisAlignSelf":"start",
                        'style':new Theme().marginOf('medium'),
                        'items':new Collection([
                            new Entity({'id':'btn1','name':"BUtton1",'icon':'ivp-icon-bars'}),
                            new Entity({'id':'btn3','name':"BUtton2",'icon':'ivp-icon-cross'}),
                            new Entity({'id':'btn2','name':"BUtton3",'icon':'ivp-icon-folder'})
                        ])
                    }),
                    Factory.createButtonGroup({
                        "crossAxisAlignSelf":"start",
                        'style':new Theme().marginOf('medium'),
                        'items':new Collection([
                            new Entity({'id':'btn1','icon':'ivp-icon-bars'}),
                            new Entity({'id':'btn3','icon':'ivp-icon-cross'}),
                            new Entity({'id':'btn2','icon':'ivp-icon-folder'})
                        ])
                    }),
                    Factory.createButtonGroup({
                        "crossAxisAlignSelf":"start",
                        'style':new Theme().marginOf('medium'),
                        'vertical':true,
                        'items':new Collection([
                            new Entity({'id':'btn1','name':"BUtton1",'icon':'ivp-icon-bars'}),
                            new Entity({'id':'btn3','name':"BUtton2",'icon':'ivp-icon-cross'}),
                            new Entity({'id':'btn2','name':"BUtton3",'icon':'ivp-icon-folder'})
                        ])
                    })
                ]
            })
        );
    }
    function initializeRadioGroup(parent){
        parent.addChild(
            Factory.createHBox({
                'children':[
                    Factory.createRadioGroup({
                        "crossAxisAlignSelf":"start",
                        'style':new Theme().marginOf('medium'),
                        'items':new Collection([
                            new Entity({'id':'btn1','name':"BUtton1"}),
                            new Entity({'id':'btn3','name':"BUtton2"}),
                            new Entity({'id':'btn2','name':"BUtton3"})
                        ])
                    }),
                    Factory.createRadioGroup({
                        "crossAxisAlignSelf":"start",
                        'style':new Theme().marginOf('medium'),
                        'vertical':true,
                        'items':new Collection([
                            new Entity({'id':'btn1','name':"BUtton1"}),
                            new Entity({'id':'btn3','name':"BUtton2"}),
                            new Entity({'id':'btn2','name':"BUtton3"})
                        ])
                    })
                ]
            })
        );

    }
    function initializeCheckbox(parent){
        Factory.createHBox({
            'children':[
                Factory.createCheckbox({
                    "crossAxisAlignSelf":"start",
                    'style':new Theme().marginOf('medium'),
                    'label':"test checkbox"
                }),
                Factory.createCheckbox({
                    "crossAxisAlignSelf":"start",
                    'style':new Theme().marginOf('medium'),
                }),
                Factory.createCheckbox({
                    "horizontal":true,
                    "label":"testing label abud",
                    "crossAxisAlignSelf":"start",
                    'style':new Theme().marginOf('medium'),
                })
            ]
        }).attachTo(parent);


    }
    function initializeResizableContainer(parent){
        Factory.createHBox({
            'children':[
                Factory.createSplitContainer({
                    'style':new Theme()
                        .addClass('demo-container')
                        .width(400)
                        .containerOf('surface')
                        .elevateAt(3),
                    'position':'north',
                    'expandedToParent':true,
                    'subHeight':70,
                    'subContent':Factory.createElement({
                        'style':new Theme().boldContainerOf('surface'),
                        'fitToParent':true
                    })
                }).attachTo(parent),
                Factory.createSplitContainer({
                    'style':new Theme()
                        .addClass('demo-container')
                        .width(400)
                        .containerOf('surface')
                        .elevateAt(3),
                    'position':'south',
                    'expandedToParent':true,
                    'subHeight':70,
                    'subContent':Factory.createElement({
                        'style':new Theme().boldContainerOf('surface'),
                        'fitToParent':true
                    })
                }).attachTo(parent),
                Factory.createSplitContainer({
                    'style':new Theme()
                        .addClass('demo-container')
                        .width(400)
                        .containerOf('surface')
                        .elevateAt(3),
                    'expandedToParent':true,
                    'position':'west',
                    'subWidth':100,
                    'subContent':Factory.createElement({
                        'style':new Theme().boldContainerOf('surface'),
                        'fitToParent':true
                    })
                }).attachTo(parent),
                Factory.createSplitContainer({
                    'style':new Theme()
                        .addClass('demo-container')
                        .width(400)
                        .containerOf('surface')
                        .elevateAt(3),
                    'position':'east',
                    'subWidth':100,
                    'expandedToParent':true,
                    'subContent':Factory.createElement({
                        'style':new Theme().boldContainerOf('surface'),
                        'fitToParent':true
                    })
                }).attachTo(parent),

            ]
        }).attachTo(parent);

    }
    function createTitle(title,desc,parent){
        var titleE = Factory.createElement({
            'style':new Theme().addClass('demo-title ivp-typo__h5'),
            'text':title
        });
        titleE.attachTo(parent);
        if(desc) {
            var descE = Factory.createElement({
                'style':new Theme().addClass('demo-desc'),
                'text': desc
            })
            descE.attachTo(parent);
        }
    }
    function initializeLazyGrid(app) {
        var GridData = function(){
            var parents = [];
            for(var i=0;i<6000;i++){
                parents.push(new mui.Entity({
                    'name':'item label '+i,
                    'col1':'Col1'+i,
                    'col2':'Cols'+i,
                    'col3':'Col3'+i,
                    'col4':'Col4'+i,
                }));
            }

            this._children =parents;

        };
        GridData.prototype.getId = function(entity){
            return entity.getId();
        };

        GridData.prototype.getChildren = function () {
            return new mui.ArrayIterator(this._children);
        };
        GridData.prototype.getName = function (entity) {
            return entity.getName();
        };
        GridData.prototype.getIcon = function (entity) {
            return 'ivp-icon-file';
        };
        GridData.prototype.getCellName = function(rowData,col){
            var colId = col.getId();
            return rowData.getProperty(colId);
        };

        var sortDir = {
            'col1':'asc',
            'col2':'dsc',
            'col3':'asc'
        };
        var ColumnCollection = function(children){
            mui.EntityCollection.call(this,children);
        };
        geotoolkit.inherits(ColumnCollection,mui.EntityCollection);
        ColumnCollection.prototype.canSort =function (entity) {
            return true;
        };
        ColumnCollection.prototype.getSortDirection =function (entity) {
            return sortDir[entity.getId()];
        };


        var grid = Factory.createLazyGrid({
            'data':new GridData(),
            'columns':new ColumnCollection([
                new mui.Entity({'id':'col1','name':'Col1'}),
                new mui.Entity({'id':'col2','name':'Col2'}),
                new mui.Entity({'id':'col3','name':'Col3'}),
            ]),
            'sortEnabled':true,
            'onSortClick':function(colId){
                var dir = sortDir[colId];
                if(dir=='asc'){
                    dir='dsc';
                }else{
                    dir = 'asc';
                }
                sortDir[colId] = dir;
                grid.updateHeader();
            },
            'checkBoxVisible':true,
            'onCheckAllClick':function(){
                grid.toggleAll();
            },
            'onCheckBoxClick':function(args){
                grid.toggleChecked(args.getTarget().getId());

            },
            'stripped':true,
            'onRowClick':function(args){
                grid.setSelected(args.getTarget().getId());
            },
            'style':new Theme()
                .addClass('demo-container')
                .containerOf('surface')
                .width(800)
                .elevateAt(3)
        });


        setTimeout(function(){
            grid.update();
        },100);
        app.addChild(
            Factory.createHBox({'children':[
                    grid
                ]})
        );

    }

    function initializeLazyTree(app) {
        var TreeData = function(){
            var parents = [];
            for(var i=0;i<10;i++){
                var arr = [];
                for(var j=0;j<6000;j++){
                    arr.push(new mui.Entity({
                        'name':'item label '+j,
                        // 'icon':'fas fa-address-book',
                        'description':'item description '+j
                    }));
                }
                parents.push(new mui.Entity({
                    'name':'parent '+i,
                    // 'icon':'fas fa-folder',
                    'children':arr
                }));
            }

            this._children =parents;

        };
        TreeData.prototype.getId = function(entity){
            return entity.getId();
        };
        TreeData.prototype.isParent = function (entity) {
            return entity.getProperty('children')!=null;
        };
        TreeData.prototype.getChildren = function (parent) {
            var arr = parent?parent.getProperty('children'):this._children;
            return new mui.ArrayIterator(arr);
        };
        TreeData.prototype.getName = function (entity) {
            return entity.getName();
        };
        TreeData.prototype.getDescription = function (entity) {
            return entity.getDescription();
        };
        TreeData.prototype.getIcon = function (entity) {
            return entity.getIcon();
        };
        TreeData.prototype.isError = function (entity) {
            return false;
        };
        TreeData.prototype.isLoading = function (entity) {
            return false;

        };

        var tree = Factory.createLazyTree({
            'data':new TreeData(),
            'onItemClick':function(evt){
                var ref = evt.getTarget();
                if(ref.getProperty('children')!=null){
                    tree.toggleExpanded(ref);
                }

            },
            'style':new Theme()
                .addClass('demo-container')
                .containerOf('surface')
                .width(300)
                .elevateAt(3)
        });
        var tree2 = Factory.createLazyTree({
            'data':new TreeData(),
            'onItemClick':function(evt){
                var ref = evt.getTarget();
                if(ref.getProperty('children')!=null){
                    tree2.toggleExpanded(ref);
                }

            },
            'itemSettings':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-bars','name':'Setting 1'}),
                new mui.Entity({'icon':'ivp-icon-plus','name':'Setting 2'})
            ]),
            'onItemSettingClick':function(item,setting){
                console.log(item,setting);
            },
            'descriptionVisible':true,
            'hasSettings':true,
            'style':new Theme()
                .addClass('demo-container')
                .width(300)
                .containerOf('surface')
                .elevateAt(3)
        });
        var tree3 = Factory.createLazyTree({
            'data':new TreeData(),
            'onItemClick':function(evt){
                var ref = evt.getTarget();
                if(ref.getProperty('children')!=null){
                    tree3.toggleExpanded(ref);
                }

            },
            'itemSettings':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-bars','name':'Setting 1'}),
                new mui.Entity({'icon':'ivp-icon-plus','name':'Setting 2'})
            ]),
            'onItemSettingClick':function(item,setting){
                console.log(item,setting);
            },
            'descriptionVisible':true,
            'showExpandIcon':false,
            'hasSettings':true,
            'style':new Theme()
                .addClass('demo-container')
                .containerOf('surface')
                .width(300)
                .elevateAt(3)
        });

        setTimeout(function(){
            tree.update();
            tree2.update();
            tree3.update();
        },100);
        app.addChild(
            Factory.createHBox({'children':[
                tree,
                tree2,
                tree3
            ]})
        );

    }
    function initializeLazyList(app) {
        var ListData = function(){
            var arr = [];
            for(var i=0;i<60000;i++){
                arr.push(new mui.Entity({
                    'name':'item label '+i,
                    'icon':'ivp-icon-file',
                    'description':'item description '+i
                }));
            }
            this._children = arr;
        };
        ListData.prototype.getName = function(entity){
            return entity.getName();
        };
        ListData.prototype.getDescription = function(entity){
            return entity.getDescription();
        };
        ListData.prototype.getIcon = function(entity){
            return entity.getIcon();
        };
        ListData.prototype.getId = function(entity){
            return entity.getId();
        };
        ListData.prototype.getChildren = function(){
            return new mui.ArrayIterator(this._children);
        };

        var lazyList = Factory.createLazyList({
            'style':new Theme().addClass('demo-container').containerOf('surface').elevateAt(3).width(400),
            'emptyThumbnail':'alt_holder.svg',
            'iconVisible':true,
            'iconType':'avatar',
            'hasSettings':true,
            'itemSettings':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-bars','name':'Setting 1'}),
                new mui.Entity({'icon':'ivp-icon-plus','name':'Setting 2'})
            ]),
            'onItemSettingClick':function(item,setting){
                console.log(item,setting);
            },
            'rowActions':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-bars','name':'Act 1'}),
                new mui.Entity({'icon':'ivp-icon-plus','name':'Act 2'})
            ]),
            'onActionClick':function(evt){
                console.log(evt.getTarget());
            },
            'onItemClick':function(evt){
                lazyList.setSelected(evt.getTarget());
            }.bind(this),
            'data':new ListData()
        });

        var lazyList2 = Factory.createLazyList({
            'style':new Theme().addClass('demo-container').containerOf('surface').elevateAt(3).width(400),
            'emptyThumbnail':'alt_holder.svg',
            'iconVisible':true,
            'iconType':'thumbnail',
            'rowActions':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-folder'}),
                new mui.Entity({'icon':'ivp-icon-bars'}),
                new mui.Entity({'icon':'ivp-icon-info'}),
            ]),
            'onActionClick':function(evt){
                console.log(evt.getTarget());
            },
            'onItemClick':function(evt){
                lazyList2.setSelected(evt.getTarget());
            }.bind(this),
            'data':new ListData()
        });

        var lazyList3 = Factory.createLazyList({
            'style':new Theme().addClass('demo-container').containerOf('surface').elevateAt(3).width(400),
            'emptyThumbnail':'alt_holder.svg',
            'iconVisible':false,
            'iconType':'thumbnail',
            'onActionClick':function(evt){
                console.log(evt.getTarget());
            },
            'selectedRowActions':new mui.EntityCollection([
                new mui.Entity({'icon':'ivp-icon-folder'}),
                new mui.Entity({'icon':'ivp-icon-bars'}),
                new mui.Entity({'icon':'ivp-icon-info'}),
            ]),
            'onItemClick':function(evt){
                lazyList3.setSelected(evt.getTarget().getId());
            }.bind(this),
            'data':new ListData()
        });



        setTimeout(function () {
            lazyList.update();
            lazyList2.update();
            lazyList3.update();
        },100);

        app.addChild(
            Factory.createHBox({'children':[
                lazyList,
                lazyList2,
                lazyList3
            ]})

        );

    }
    function initializeDatetime(app){
        var dpicker = Factory.createDateTimePicker({
            'style':new Theme().marginOf('medium')
        });
        dpicker.attachTo(app);
        var dpicker2 = Factory.createDateTimePicker({
            'style':new Theme().marginOf('medium')
        });
        dpicker2.attachTo(app);
    }
    function initializeTab(app) {
        var tab1 = Factory.createTab({
            'style':new Theme().addClass('demo-container').containerOf('surface'),
            'stretchHeader':true,
            'items':new mui.EntityCollection ([
                new mui.Entity({'name':'Tab 1','icon':'ivp-icon-folder'}),
                new mui.Entity({'name':'test description','icon':'ivp-icon-bars'}),
                new mui.Entity({'name':'tab 3','icon':'ivp-icon-file'})
            ])
        });
        tab1.attachTo(app);
    }
    function initializePanel(app) {
        var panel = Factory.createPanel({
            'title':'Test panel',
            'titleDescription':'Testing',
            'style':new Theme().addClass('demo-container').containerOf('surface').elevateAt(3),
            'footerVisible':true,
            'showDropdown':true,
            'headerIcon':'ivp-icon-folder',
            'headerActions':new  mui.EntityCollection([
                new mui.Entity({'id':'add','name':"Add"}),
                new mui.Entity({'id':'remove','name':"Remove"}),
                new mui.Entity({'id':'don','icon':"ivp-icon-bars"})
            ]),
            'onClose':function(){

            },
            'onFooterActionClick':function(id){
                if(id=='add'){
                    panel.updateFooterActions();
                }
                if(id=='remove'){
                    panel.updateHeaderActions();
                }
            },
            'footerActions':new  mui.EntityCollection([
                new mui.Entity({'id':'add','name':"Add",'type':'accent'}),
                new mui.Entity( {'id':'remove','name':"Remove",'type':'link'}),
                new mui.Entity({'id':'close','name':"Close",'type':'link'})
            ])
        });
        panel.attachTo(app);
    }
    function initializeColor(app) {
        app.addChild(
            Factory.createColorPicker({
                'style':new Theme().marginOf('medium')
            }),
            Factory.createColorPicker({
                'style':new Theme().marginOf('medium')
            })
        );
    }
    function initializeButtons(app) {
        var buttonContainers =Factory.createHBox({
            'verticalAlign':'top',
            'children':[
                Factory.createButton({
                    'label':'Primary',
                    'icon':'ivp-icon-folder',
                    'style':new Theme().buttonOf('primary').marginOf('medium'),
                    'onClick':function(){}
                }),
                Factory.createButton({
                    'label':'Accent',
                    'icon':'ivp-icon-file',
                    'style':new Theme().buttonOf('accent').marginOf('medium'),
                    'onClick':function(){}
                }),
                Factory.createButton({
                    'label':'Link',
                    'icon':'ivp-icon-folder',
                    'style':new Theme().buttonOf('link').marginOf('medium'),

                }),
                Factory.createButton({
                    'label':'Alert',
                    'icon':'ivp-icon-folder',
                    'style':new Theme().buttonOf('alert').marginOf('medium'),

                }),
                Factory.createButton({
                    'label':'Dropdown',
                    'description':'testing',
                    'style':new Theme().buttonOf('link').marginOf('medium'),
                    'isDropdown':true,
                    'icon':'ivp-icon-folder',
                    'onClick':function(btn){
                        btn.showMenu(new mui.EntityCollection([
                            new mui.Entity({'name':'Item 1','icon':'ivp-icon-folder'}),
                            new mui.Entity({'name':'Item 2 - test description','icon':'ivp-icon-bars'}),
                            new mui.Entity({'name':'Item 3','icon':'ivp-icon-file'})
                        ]));
                    }
                })
            ]
        });
        buttonContainers.attachTo(app);
    }
    function initializeText(app) {
        app.addChild(
            Factory.createHBox({
                'children':[
                    Factory.createText({
                        'style':new Theme().marginOf('medium'),
                        "rightIcon":'ivp-icon-bars',
                        "leftIcon":'ivp-icon-bars'
                    }).setError("input is invalid!!!"),
                    Factory.createText({
                        'style':new Theme().marginOf('medium'),
                        'multiline':true
                    }),
                    Factory.createText({
                        'style':new Theme().marginOf('medium'),
                    })
                ],
                'verticalAlign':'middle',
                'horizontalAlign':'center'
            })
        );
    }
    function initializeMenu(app) {
        var menu1 = Factory.createMenu({
            'style':new Theme().marginOf('medium'),
            'items':new mui.EntityCollection([
                new mui.Entity({'name':'Item 1','icon':'ivp-icon-folder'}),
                new mui.Entity({'name':'Item 2 - test description','icon':'ivp-icon-file'}),
                new mui.Entity({'name':'Item 3','icon':'ivp-icon-bars','children':[
                        new  mui.Entity({'name':'Item 3-1','icon':'ivp-icon'}),
                        new  mui.Entity({'name':'Item 3-2','icon':'ivp-icon','children':[
                                new  mui.Entity({'name':'Item 3-2-1','icon':'ivp-icon'}),
                                new  mui.Entity({'name':'Item 3-2-2','icon':'ivp-icon'}),
                                new  mui.Entity({'name':'Item 3-2-3','icon':'ivp-icon'})
                            ]}),
                        new  mui.Entity({'name':'Item 3-3','icon':'ivp-icon'})
                    ]})
            ]),
            'onItemClick':function(item){
                menu1.setSelected(item.getId());
            }.bind(this)
        });

        menu1.attachTo(app);

        var menu2 = Factory.createImageMenu({
            'style':new Theme().marginOf('medium'),
            'items':new mui.ImageEntityCollection([
                new mui.Entity({'name':'Item 1','image':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC'}),
                new mui.Entity({'name':'Item 2 - test description','image':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC'})
            ]),
            'onItemClick':function(item){
                menu2.setSelected(item.getId());
            }.bind(this)
        });

        menu2.attachTo(app);
    }
    function initializeNumber(app) {

        var num1 = Factory.createNumber({});

        num1.attachTo(app);
    }
    return Demo;

}();

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function(){
   var demo =  new Demo(document.getElementsByTagName('BODY')[0]);
});

