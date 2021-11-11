class View extends Component {

    components = []

    constructor(externalConfiguration) {
        super(externalConfiguration);
        this.addComponents();
    }

    addComponents() {}

    addComponent(component) {
        this.components.push(component);
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

    defineTemplate() {
        return new Template(this.templateName());
    }

    defaultConfiguration() {
        return Utils.Merge(super.defaultConfiguration(), {
            element: App.ViewElement()
        })
    }

}