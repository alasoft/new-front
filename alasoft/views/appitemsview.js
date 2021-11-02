class AppItemsView extends ListView {

    addComponents() {
        super.addComponents();
    }

    listClass() {
        return TreeItems;
    }

    labelDefaultConfiguration() {
        return Utils.Merge(super.labelDefaultConfiguration(), {
            text: "Opciones"
        })
    }

    listDefaultConfiguration() {
        return Utils.Merge(super.listDefaultConfiguration(), {
            onFocusedRowChanged: e => this.onFocusedRowChanged(e)
        })
    }

    defaultConfiguration() {
        return {
            element: App.ItemsElement()
        }
    }

    defineTemplate() {
        return new TemplateBuilder("app-items-view")
            .addChild("-label label")
            .addChild("-list list")
            .build();
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