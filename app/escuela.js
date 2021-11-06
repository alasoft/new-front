class Escuela extends ListView {

    static DefineDataSource() {
        return Ds({ path: "escuela" })
    }

    labelExtraConfiguration() {
        return {
            text: "Escuelas"
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
                    title: "Escuela"
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