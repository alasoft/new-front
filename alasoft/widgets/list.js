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
                scrolling: {
                    //mode: "infinite"
                },
                height: 0
            }
        )
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