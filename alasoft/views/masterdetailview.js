class MasterDetailView extends View {

    addComponents() {
        super.addComponents();
        this.addComponent(this.label());
        this.addComponent(this.toolbar());
        this.addComponent(this.master());
        this.addComponent(this.detail());
    }

    label() {
        if (this._label == undefined) {
            this._label = this.defineLabel();
        }
        return this._label;
    }

    defineLabel() {
        return new Label(this.configuration().label);
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

    master() {
        if (this._master == undefined) {
            this._master = this.defineMaster()
        }
        return this._master;
    }

    defineMaster() {
        return new ListView(this.configuration().master);
    }

    detail() {
        if (this._detail == undefined) {
            this._detail = this.defineDetail();
        }
        return this.defineDetail();
    }

    defineDetail() {
        return new ListView(this.configuration().detail)
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            label: {
                element: this.template().find("-label")
            },
            toolbar: {
                element: this.template().find("-toolbar")
            },
            master: {
                element: this.template().find("-master")
            },
            detail: {
                element: this.template().find("-detail")
            }
        })
    }

}