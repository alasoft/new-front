class TreeItems extends Widget {

    widgetName() {
        return "dxTreeList";
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            keyExpr: "id",
            dataStructure: "tree",
            focusedRowEnabled: true,
            focusedRowIndex: 0,
            autoExpandAll: true,
            showColumnHeaders: false,
            columns: [
                "text"
            ]
        })
    }

}

class TreeItem {

    constructor(configuration) {
        this.items = [];
        Object.keys(configuration).forEach(
            key => this[key] = configuration[key]
        )
        if (this.id == undefined) {
            this.id = this.parent ? this.parent.id + "_" + this.parent.items.length : "1";
        }
    }

    addChild(configuration) {
        this.add(configuration);
        return this;
    }

    add(configuration) {
        return this.items[
            this.items.push(
                new TreeItem(
                    Utils.Merge({ parent: this },
                        configuration
                    )
                )
            ) - 1
        ]
    }

    upLevel() {
        return this.parent;
    }

}