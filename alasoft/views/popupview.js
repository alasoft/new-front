class PopupView extends View {

    addComponents() {
        super.addComponents();
    }

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
        return new Popup(this.configuration().popup);
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            popup: {
                view: this
            }
        })
    }

}