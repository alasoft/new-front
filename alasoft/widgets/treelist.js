class TreeList extends List {

    widgetName() {
        return "dxTreeList";
    }

    defaultConfiguration() {
        return Utils.Merge(
            super.defaultConfiguration(), {
                dataStructure: "plain",
                parentIdExpr: "parent",
                autoExpandAll: true,
                showColumnHeaders: false,
            },
            List.SmallFont()
        )
    }

}