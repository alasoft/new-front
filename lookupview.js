class LookupView extends ListView {

    addComponents() {
        super.addComponents();
        this.addComponent(this.buttonSelecciona());
    }

    buttonSelecciona() {
        if (this._buttonSelecciona == undefined) {
            this._buttonSelecciona = this.defineButtonSelecciona();
        }
        return this._buttonSelecciona;
    }

    defineButtonSelecciona() {
        return new Button(this.buttonSeleccionaConfiguration());
    }

    buttonSeleccionaConfiguration() {
        return Utils.Merge(this.buttonSeleccionaDefaultConfiguration(), this.buttonSeleccionaExtraConfiguration());
    }

    buttonSeleccionaDefaultConfiguration() {
        return {
            element: this.template().findElementByClass("-button-selecciona"),
            text: "Selecciona",
            width: 150,
            onClick: e => this.popup().close()
        }
    }

    buttonSeleccionaExtraConfiguration() {}

    render() {
        this.popup().show();
    }

    popup() {
        if (this._popup == undefined) {
            this._popup = this.definePopup();
        }
        return this._popup;
    }

    definePopup() {
        return new Popup(this.popupConfiguration());
    }

    popupConfiguration() {
        return Utils.Merge(this.popupDefaultConfiguration(), this.popupExtraConfiguration());
    }

    popupDefaultConfiguration() {
        return {
            view: this
        }
    }

    popupExtraConfiguration() {}

    listDefaultConfiguration() {
        return Utils.Merge(super.listDefaultConfiguration(), {
            onRowDblClick: e => this.popup().close()
        })
    }

    defineTemplate() {
        return new TemplateBuilder("lookup-view")
            .addChild("-label label")
            .addChild("-list list")
            .addChild("-button-selecciona margen-superior-10")
            .build();
    }

}