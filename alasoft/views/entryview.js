class EntryView extends PopupView {

    addComponents() {
        super.addComponents();
        this.addComponent(this.toolbar());
    }

    toolbar() {
        if (this._toolbar == undefined) {
            this._toolbar = this.defineToolbar();
        }
        return this._toolbar;
    }

    defineToolbar() {
        return new Toolbar(this.configuration().toolbar);
    }

    buttonSaveConfiguration() {
        return {
            widget: "dxButton",
            location: "after",
            options: {
                icon: "save",
                text: "Graba",
                onClick: e => this.save()
            }
        }
    }

    buttonCancelConfiguration() {
        return {
            widget: "dxButton",
            location: "after",
            options: {
                icon: "close",
                text: "Cancela",
                onClick: e => this.cancel()
            }
        }
    }

    save() {}

    cancel() {
        this.close()
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            toolbar: {
                element: this.template().find("-toolbar"),
                items: [
                    this.buttonSaveConfiguration(),
                    this.buttonCancelConfiguration()
                ],
            },
        })
    }

}