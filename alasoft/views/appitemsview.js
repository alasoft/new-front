class AppItemsView extends ListView {

    addComponents() {
        super.addComponents();
    }

    listClass() {
        return TreeItems;
    }


    defineTemplate() {
        return new TemplateBuilder("app-items-view")
            .addChild("-label label")
            .addChild("-list list")
            .build();
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            element: App.ItemsElement(),
            label: {
                text: "Opciones"
            },
            list: {
                onFocusedRowChanged: e => this.onFocusedRowChanged(e)
            }
        })
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