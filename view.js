class View extends Component {

    components = [];

    constructor() {
        super();
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

    defineTemplate() {}

    defaultConfiguration() {
        return {
            element: App.ViewElement()
        }
    }

}