class AppItemsView extends ListView {

    addComponents() {
        super.addComponents();
        //        this.addComponent(this.buttonItems());
    }

    buttonItems() {
        if (this._buttonItems == undefined) {
            this._buttonItems = this.defineButtonItems();
        }
        return this._buttonItems;
    }

    defineButtonItems() {
        return new ButtonItems(this.configuration().buttonItems);
    }

    listClass() {
        return TreeItems;
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            element: App.ItemsElement(),
            label: {
                text: "Opciones"
            },
            list: Utils.Merge({
                onFocusedRowChanged: e => this.onFocusedRowChanged(e)
            }, List.SmallFont())
        })
    }

    defineTemplate() {
        return new TemplateBuilder("padding-15")
            .addChild("-label margen-inferior-5")
            .addChild("-list")
            .template();
    }


    onFocusedRowChanged(e) {
        if (e.row.data.onClick) {
            e.row.data.onClick();
        }
    }

    static DefineDataSource() {
        return [];
    }

}