class LookupView extends PopupView {

    addComponents() {
        super.addComponents();
        this.addComponent(this.list());
        this.addComponent(this.buttonSelecciona());
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

    buttonSelecciona() {
        if (this._buttonSelecciona == undefined) {
            this._buttonSelecciona = this.defineButtonSelecciona();
        }
        return this._buttonSelecciona;
    }

    defineButtonSelecciona() {
        return new Button(this.configuration().buttonSelecciona);
    }

    defineTemplate() {
        return new TemplateBuilder("lookup-view")
            .addChild("-label label")
            .addChild("-list list")
            .addChild("-button-selecciona margen-superior-10")
            .build();
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            list: {
                element: this.template().findElementByClass("-list"),
                dataSource: this.class().DataSource(),
                onRowDblClick: e => this.listOnRowDblClick(e)
            },
            buttonSelecciona: {
                element: this.template().findElementByClass("-button-selecciona"),
                text: "Selecciona",
                width: 150,
                onClick: e => this.onButtonSeleccionaClick()
            }
        })
    }

    onRowDblClick(e) {
        this.close()
    }

    onButtonSeleccionaClick() {
        this.close();
    }

    close() {
        this.popup().close();
    }



}