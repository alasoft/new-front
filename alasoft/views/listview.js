class ListView extends View {

    addComponents() {
        super.addComponents();
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
        return new Label(this.labelConfiguration())
    }

    labelConfiguration() {
        return Utils.Merge(this.configuration().label);
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

    listExtraConfiguration() {}

    defineTemplate() {
        return new TemplateBuilder("list-view")
            .addChild("-label label")
            .addChild("-toolbar toolbar right-align bottom-margin-5")
            .addChild("-list list")
            .build();
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            label: {
                element: this.template().findElementByClass("-label")
            },
            list: {
                element: this.template().findElementByClass("-list"),
                dataSource: this.class().DataSource()
            }
        })
    }

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {}

}