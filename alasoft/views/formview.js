class FormView extends PopupView {

    addComponents() {
        super.addComponents();
        this.addComponent(this.form());
    }

    form() {
        if (this._form == undefined) {
            this._form = this.defineForm();
        }
        return this._form;
    }

    defineForm() {
        return new Form(this.configuration().form);
    }

    buttonSave() {
        return {
            widget: "dxButton",
            location: "after",
            options: {
                icon: "save",
                text: "Graba",
                onClick: e => this.onButtonSaveClick()
            }
        }
    }

    buttonCancel() {
        return {
            widget: "dxButton",
            location: "after",
            options: {
                icon: "close",
                text: "Cancela",
                onClick: e => this.onButtonCancelaClick()
            }
        }
    }

    defineTemplate() {
        return new TemplateBuilder("form-view")
            .addChild("-form form")
            .addChild("-toolbar toolbar top-margin-0")
            .build();
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            toolbar: {
                element: this.template().findElementByClass("-toolbar"),
                items: [
                    this.buttonSave(),
                    this.buttonCancel()
                ],
                visible: true
            },
            form: {
                element: this.template().findElementByClass("-form")
            },
        })
    }

}