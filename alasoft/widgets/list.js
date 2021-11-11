class List extends Widget {

    defaultConfiguration() {
        return Utils.Merge(
            super.defaultConfiguration(), {
                focusedRowEnabled: true,
                focusedRowIndex: 0,
                allowColumnResizing: true,
                allowColumnReordering: true,
                showBorders: true,
                searchPanel: {
                    visible: true,
                    searchVisibleColumnsOnly: true
                },
                height: 0
            }
        )
    }

    rows() {
        return this.instance().getVisibleRows();
    }

    rowCount() {
        return this.rows().length;
    }

    hasRows() {
        return 0 < this.rowCount();
    }

    refresh(id) {
        this.instance().refresh().then(
            () => id ? this.focusRowById(id) : undefined
        )
    }

    focusRowById(id) {
        this.setProperty("focusedRowKey", id);
        this.instance().navigateToRow(id);
    }

    static SmallFont() {
        return {
            onCellPrepared: o => o.cellElement
                .css("font-size", "small")
                .css("padding", "8px"),
            onRowPrepared: function(e) {
                e.rowElement
                    .css("height", "10")
            }
        }
    }

}