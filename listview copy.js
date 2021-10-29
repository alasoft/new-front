class ListView extends View {

    addComponents() {
        this.addComponent(this.label());
        this.addComponent(this.list());
    }

    label() {
        if (this._label == undefined) {
            this._label = this.defineLabel();
        }
        return this._label;
    }

    defineLabel() {
        if (this.labelConfiguration().text != undefined) {
            return new Label(this.labelConfiguration());
        }
    }

    labelConfiguration() {
        return this.configuration().label;
    }

    list() {
        if (this._list == undefined) {
            this._list = this.defineList();
        }
        return this._list;
    }

    defineList() {
        return new(this.listClass())(this.configuration().list);
    }

    listClass() {
        return Grid;
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            label: {
                element: this.template().findElementByClass("-label")
            },
            list: {
                element: this.template().findElementByClass("-list"),
                dataSource: this.class().DataSource(),
            }
        })
    }

    defineTemplate() {
        return new TemplateBuilder("padding-10")
            .addChild("-label margen-inferior-5")
            .addChild("-list llena-contenido alto-100pct")
            .template();
    }

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {}

}