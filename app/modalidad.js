class Modalidad extends ListView {

    static DefineDataSource() {
        return Ds({ path: "modalidad" })
    }

    labelExtraConfiguration() {
        return {
            text: "Modalidades"
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
                    title: "Modalidad"
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