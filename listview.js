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
        return new Label(this.labelConfiguration())
    }

    labelConfiguration() {
        return Utils.Merge(this.labelDefaultConfiguration(), this.labelExtraConfiguration());
    }

    labelDefaultConfiguration() {
        return {
            element: this.template().findElementByClass("-label")
        }
    }

    labelExtraConfiguration() {}

    list() {
        if (this._list == undefined) {
            this._list = this.defineList();
        }
        return this._list;
    }

    defineList() {
        return new(this.listClass())(this.listConfiguration());
    }

    listClass() {
        return Grid;
    }

    listConfiguration() {
        return Utils.Merge(this.listDefaultConfiguration(), this.listExtraConfiguration());
    }

    listDefaultConfiguration() {
        return {
            element: this.template().findElementByClass("-list"),
            dataSource: this.class().DataSource()
        }
    }

    listExtraConfiguration() {}

    defineTemplate() {
        return new TemplateBuilder("list-view")
            .addChild("-label label")
            .addChild("-list list")
            .build();
    }

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {}

}