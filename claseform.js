class ClaseForm extends ClaseConfiguration {

    configuration() {
        return {
            element: this.template().findElementByClass("-form"),
            items: this.items(),
            labelMode: "floating"
        }
    }

    items() {

        return [{
                itemType: "group",
                colCount: 2,
                items: [{
                        dataField: "curso",
                    },
                    {
                        itemType: "button",
                        horizontalAlignment: "left",
                        buttonOptions: {
                            icon: "search",
                            type: "default",
                            focusStateEnabled: false,
                            hint: "Busca Clase"
                        }
                    },
                ]
            },
            {
                itemType: "group",
                colCount: 5,
                items: [
                    "añoLectivo",
                    {
                        dataField: "periodo",
                        label: {
                            text: "Período"
                        }
                    },
                    "materia",
                    {},
                    {
                        editorType: "dxDropDownButton",
                        editorOptions: {
                            icon: "export",
                            text: "Exporta",
                            items: ["Excel", "Pdf"]
                        }
                    },

                ]
            }
        ]

    }

}