class Alumno extends FormListView {

    static DefineDataSource() {
        //        return new AlumnoDataSource({ path: "alumno/curso", data: { cursoId: undefined, añoLectivo: undefined } }).configuration()
    }

    labelExtraConfiguration() {
        return {
            text: "Alumnos"
        }
    }

    formExtraConfiguration() {
        return {
            formData: {
                año: new Date().getFullYear()
            },
            items: [
                Curso.Lookup({
                    colSpan: 2,
                }),
                {
                    dataField: "año",
                    validationRules: Form.Required()
                }
            ],
            colCount: 4
        }
    }

    listExtraConfiguration() {
        return {
            columns: [
                { dataField: "apellido" },
                { dataField: "nombres" }
            ],
            editing: Grid.PopupEditing({
                popup: {
                    title: "Alumno",
                    height: 400
                },
                form: {
                    items: [
                        { dataField: "apellido", validationRules: Form.Required() },
                        { dataField: "nombres", validationRules: Form.Required() },
                        {
                            dataField: "curso.id",
                            visible: false
                        }, {
                            dataField: "curso.descripcion",
                            editorOptions: Form.ReadOnly(),
                            label: {
                                text: "Curso"
                            }
                        }
                    ],
                    onContentReady: e => e.component.updateData({ "curso.descripcion": this.form().getEditorText("curso") })
                }
            })
        }
    }

}