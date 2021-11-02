class Materia extends ListView {

    static DefineDataSource() {
        return Ds({ path: "materia" })
    }

    labelExtraConfiguration() {
        return {
            text: "Materias"
        }
    }

    listExtraConfiguration() {
        return {
            columns: [{
                    dataField: "id",
                    visible: false
                },
                "nombre"
            ],
            editing: Grid.PopupEditing({
                popup: {
                    title: "Materia"
                },
                form: {
                    items: this.formItems()
                }
            })
        }
    }

    formItems() {
        return [{
                dataField: "id",
                visible: false
            },
            {
                dataField: "nombre",
                validationRules: Form.Required()
            }
        ]
    }

}