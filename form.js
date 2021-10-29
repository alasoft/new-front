class Form extends Widget {

    widgetName() {
        return "dxForm";
    }

    defaultConfiguration() {
        return {
            formData: {},
            labelLocation: "left",
        }
    }

    static Lookup(parameters) {
        return {
            dataField: parameters.dataField,
            label: {
                text: parameters.label
            },
            editorType: "dxSelectBox",
            editorOptions: {
                dataSource: parameters.dataSource,
                displayExpr: parameters.displayExpr || App.DISPLAY_EXPR_DEFAULT,
                valueExpr: "id",
                searchEnabled: true
            },
            validationRules: parameters.required == true ? [{
                type: "required"
            }] : undefined
        }
    }

    static Required() {
        return [{ type: "required" }]
    }

    static UpperCase() {
        return {
            inputAttr: {
                style: "text-transform: uppercase"
            }
        }
    }

    static ReadOnly() {
        return {
            readOnly: true,
            focusStateEnabled: false
        }
    }

}