class Curso extends ListView {

    static DefineDataSource() {
        return Ds({
            path: "curso",
            transformData: data => {
                if (data.division != undefined) {
                    data.division = data.division.toUpperCase()
                }
                return data;
            }
        });
    }

    labelExtraConfiguration() {
        return {
            text: "Cursos",
        };
    }

    listExtraConfiguration() {
        return {
            columns: this.gridColumns(),
            editing: Grid.PopupEditing({
                popup: {
                    title: "Curso",
                    height: 600
                },
                form: {
                    items: this.formItems()
                }
            })
        }
    }

    gridColumns() {
        return [{
                dataField: "id",
                visible: false
            }, {
                dataField: "escuela.id",
                visible: false
            }, {
                dataField: "escuela.nombre",
                caption: "Escuela"
            }, {
                dataField: "modalidad.id",
                visible: false
            }, {
                dataField: "modalidad.nombre",
                caption: "Modalidad"
            },
            {
                dataField: "año",
                visible: false
            },
            {
                calculateDisplayValue: row => Año.Nombre(row.año),
                caption: "Año"
            },
            {
                dataField: "division"
            },
            {
                dataField: "turno",
                visible: false
            }, {
                calculateDisplayValue: row => Turno.Nombre(row.turno),
                caption: "Turno"
            },
        ]

    }

    formItems() {
        return [{
                dataField: "id",
                visible: false
            },
            Form.Lookup({
                dataField: "escuela.id",
                label: "Escuela",
                dataSource: Escuela.DataSource(),
                required: true
            }),
            Form.Lookup({
                dataField: "modalidad.id",
                label: "Modalidad",
                dataSource: Modalidad.DataSource(),
                required: true
            }),
            Form.Lookup({
                dataField: "año",
                label: "Año",
                dataSource: Año.DataSource(),
                required: true
            }),
            {
                dataField: "division",
                validationRules: Form.Required(),
                editorOptions: Form.UpperCase()
            },
            Form.Lookup({
                dataField: "turno",
                label: "Turno",
                dataSource: Turno.DataSource(),
                required: true
            })
        ]
    }

}