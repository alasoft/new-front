class PopupView extends View {

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
                view: this,
                onShown: e => this.focus()
            }
        })
    }

    close() {
        this.popup().close();
    }

    originalTitle() {
        return this.configuration().popup.title
    }


}