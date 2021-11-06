class View extends Component {

    components = [];

    constructor(externalConfiguration) {
        super(externalConfiguration);
        this.addComponents();
    }

    addComponents() {
        this.addComponent(this.toolbar());
    }

    addComponent(component) {
        this.components.push(component);
    }

    toolbar() {
        if (this._toolbar == undefined) {
            this._toolbar = this.defineToolbar();
        }
        return this._toolbar;
    }

    defineToolbar() {
        return new Toolbar(this.configuration().toolbar)
    }

    render() {
        this.renderComponents();
        this.renderTemplate();
    }

    renderComponents() {
        this.components.forEach(
            component => component.render()
        )
    }

    renderTemplate() {
        this.template().render(this.element());
    }

    template() {
        if (this._template == undefined) {
            this._template = this.defineTemplate();
        }
        return this._template;

    }

    defineTemplate() {}

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            element: App.ViewElement(),
            toolbar: {
                element: this.template().findElementByClass("-toolbar"),
                visible: false
            }
        })
    }

}