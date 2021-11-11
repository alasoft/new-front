class FormView extends RestView {

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

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            form: {
                element: this.template().find("-form")
            },
        })
    }

    templateName() {
        return "form";
    }

    focus() {
        this.form().focus()
    }

    data() {
        return this.form().data();
    }

}