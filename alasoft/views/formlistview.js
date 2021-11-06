class FormListView extends ListView {

    addComponents() {
        super.addComponents()
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

    defineTemplate() {
        return new TemplateBuilder("list-view")
            .addChild("-label label")
            .addChild("-form form")
            .addChild("-list list")
            .build();
    }

    defaultConfiguration() {
        return {
            element: this.template().findElementByClass("-form")
        }
    }

}