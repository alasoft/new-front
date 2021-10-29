class Grid extends List {

    widgetName() {
        return "dxDataGrid";
    }

    defaultConfiguration() {
        return Utils.Merge(
            super.defaultConfiguration(), {
                onInitialized: e => this.onInitialized(e),
                onRowDblClick: e => this.onRowDblClick(e),
                onInitNewRow: e => this.onInitNewRow(e),
                onEditingStart: e => this.onEditingStart(e),
                onRowInserted: e => this.onRowInserted(e),
                onKeyDown: e => this.onKeyDown(e),
            }
        )
    }

    add() {
        this.instance().addRow();
    }

    edit(rowIndex) {
        this.instance().editRow(rowIndex);
    }

    setDataSource(dataSource) {
        this.setProperty("dataSource", dataSource);
    }

    onInitialized(e) {
        this._originalTitle = this.getProperty("editing.popup.title")
    }

    onRowDblClick(e) {
        this.edit(e.rowIndex);
    }

    onEditingStart(e) {
        this.setProperty("editing.popup.title", "Modifica " + this._originalTitle)
    }

    onInitNewRow(e) {
        this.setProperty("editing.popup.title", "Agrega " + this._originalTitle);
    }

    onRowInserted(e) {
        this.setProperty("focusedRowIndex", this.instance().getRowIndexByKey(e.key));
    }

    onKeyDown(e) {
        if (e.event.key == "Insert") {
            this.add()
        }
    }

    static PopupEditing(extraConfiguration) {
        return Utils.Merge({
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true,
            mode: "popup",
            popup: {
                showTitle: true,
                resizeEnabled: true,
                width: 600,
                height: 300
            },
            form: {
                labelLocation: "left",
                colCount: 1
            },
        }, extraConfiguration)
    }

    static Calculate(formula) {
        return {
            calculateDisplayValue: formula,
            allowGrouping: true,
            allowSorting: true
        }
    }

}