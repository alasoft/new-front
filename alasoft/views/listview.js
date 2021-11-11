class ListView extends View {

    addComponents() {
        super.addComponents();
        this.addComponent(this.label());
        this.addComponent(this.list());
        this.addComponent(this.contextMenu());
    }

    label() {
        if (this._label == undefined) {
            this._label = this.defineLabel();
        }
        return this._label;
    }

    defineLabel() {
        return new Label(this.configuration().label);
    }

    list() {
        if (this._list == undefined) {
            this._list = this.defineList();
        }
        return this._list;
    }

    defineList() {
        return new(this.listClass())(this.configuration().list);
    }

    listClass() {
        return Grid;
    }

    contextMenu() {
        if (this._contextMenu == undefined) {
            this._contextMenu = this.defineContextMenu();
        }
        return this._contextMenu;
    }

    defineContextMenu() {
        return new ContextMenu(this.configuration().contextMenu);
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            label: {
                element: this.template().find("-label")
            },
            list: {
                element: this.template().find("-list"),
                dataSource: this.class().DataSource(),
                onContentReady: e => this.listOnContentReady(e),
                onToolbarPreparing: e => this.listOnToolbarPreparing(e),
                onRowDblClick: e => this.listOnRowDblClick(e)
            },
            contextMenu: {
                element: this.template().find("-context-menu")
            },
            operations: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: false
            }
        })
    }

    listSetToolbarItems(e) {
        var items = e.toolbarOptions.items;
        this.toolbarItems().forEach(
            item => items.unshift(item))
    }

    toolbarItems() {
        return Utils.ArrayNoNulls(
            [this.buttonAdd()]
        )
    }

    buttonAdd() {
        if (this.allowAdding()) {
            return {
                widget: "dxButton",
                location: "before",
                options: {
                    icon: "add",
                    hint: "Agrega",
                    onClick: e => this.add(),
                }
            }
        }
    }

    setContextMenuItems(e) {
        this.contextMenu().setItems(this.contextMenuItems());
    }

    contextMenuItems() {
        return Utils.ArrayNoNulls(
            [
                this.itemAdd(),
                this.itemEdit(),
                this.itemDelete(),
            ]
        )
    }

    itemAdd() {
        if (this.allowAdding()) {
            return {
                text: "Agrega",
                onClick: e => this.add(),
            }
        }
    }

    itemEdit() {
        if (this.allowEditing()) {
            return {
                text: "Modifica",
                onClick: e => this.edit(),
            }
        }
    }

    itemDelete() {
        if (this.allowDeleting()) {
            return {
                text: "Delete",
                onClick: e => this.delete(),
            }
        }
    }

    allowAdding() {
        return Utils.Evaluate(this.operations().allowAdding) == true;
    }

    allowEditing() {
        return Utils.Evaluate(this.operations().allowEditing) == true && this.list().hasRows();
    }

    allowDeleting() {
        return Utils.Evaluate(this.operations().allowDeleting) == true && this.list().hasRows();
    }

    operations() {
        return this.configuration().operations;
    }

    add() {}

    edit() {}

    templateName() {
        return "list";
    }

    listOnContentReady(e) {
        this.setContextMenuItems();
    }

    listOnToolbarPreparing(e) {
        this.listSetToolbarItems(e);
    }

    listOnRowDblClick(e) {
        if (this.allowEditing(e)) {
            this.edit();
        }
    }

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {

    }

}