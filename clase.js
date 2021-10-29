class Clase extends ListView {

    addComponents() {
        super.addComponents();
        this.addComponent(this.form())
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
            form: this.claseForm().configuration(),
            list: this.claseList().configuration(),
            label: {
                text: "Clase"
            }
        })
    }

    claseForm() {
        if (this._claseForm == undefined) {
            this._claseForm = new ClaseForm(this);
        }
        return this._claseForm;
    }

    claseList() {
        if (this._claseList == undefined) {
            this._claseList = new ClaseList(this);
        }
        return this._claseList;
    }

    listConfiguration() {}

    defineTemplate() {
        return new TemplateBuilder("padding-15")
            .addChild("-label margen-inferior-5")
            .addChild("-form blanco-claro padding-15 margen-inferior-15")
            .addChild("-list")
            .template();
    }

    static DefineDataSource() {
        const nombres = ["Jorge", "Joel", "Mario", "Jonathan", "Guillermo", "Jessica"]
        const apellidos = ["Gomez", "Perez", "Lopez", "Antunez", "Ramirez", "Achabal"]
        const dataSource = [];
        for (let i = 0; i < 30; i++) {
            dataSource.push({ id: i, nombres: nombres[(i + 1) % 6], apellido: apellidos[i % 6] });
        }
        return dataSource;
    }

}