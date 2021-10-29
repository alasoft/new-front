class ClaseList extends ClaseConfiguration {

    configuration() {

        return Utils.Merge({
            keyExpr: "id",
            allowColumnResizing: false,
            allowColumnReordering: false,
            columns: this.columns(),
            searchPanel: {
                visible: false,
            },
            editing: {
                mode: "cell",
                allowUpdating: true,
                selectTextOnEditStart: true,
                startEditAction: "dblClick"
            },
            scrolling: {
                mode: "infinite"
            },
            wordWrapEnabled: true,
            showColumnLines: true,
            height: 460,
            onRowDblClick: e => this.onRowDblClick(e),
            onFocusedCellChanging: e => this.onFocusedCellChanging(e),
        }, List.SmallFont())

    }

    columns() {
        return [{
            dataField: "id",
            visible: false
        }, {
            caption: "Alumno",
            alignment: "center",
            columns: [{
                dataField: "apellido",
                width: 100,
                allowEditing: false,
            }, {
                dataField: "nombres",
                width: 100,
                allowEditing: false,
            }]
        }, {
            caption: "Trabajos Prácticos",
            alignment: "center",
            columns: this.columnasTrabajosPracticos()
        }]
    }

    columnasTrabajosPracticos() {
        return [{
                dataField: "tp-1",
                caption: "Algebra",
                allowSorting: false,
                width: 100,
            }, {
                dataField: "tp-2",
                caption: "Ecuación de la Recta",
                allowSorting: false,
                width: 100
            }, {
                dataField: "tp-3",
                caption: "Evaluación I",
                allowSorting: false,
                width: 100
            },
            {
                dataField: "tp-5",
                caption: "Evaluación III",
                allowSorting: false,
                width: 100
            },
            {
                dataField: "tp-6",
                caption: "Evaluación IV",
                allowSorting: false,
                width: 100
            },

            {
                dataField: "tp-7",
                caption: "Evaluación V",
                allowSorting: false,
                width: 100
            },

            {
                dataField: "tp-8",
                caption: "Evaluación VI",
                allowSorting: false,
                width: 100
            },

        ];
    }

    onFocusedCellChanging(e) {
        return e.newColumnIndex < 1 ? e.cancel = true : undefined
    }

    onRowDblClick(e) {
        grid.editRow(e.rowIndex);
    }

}