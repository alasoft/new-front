class FreeView extends Component {

    componentClasses = [Grid, Form, Label, TreeList];

    components() {
        if (this._components == undefined) {
            this._components = this.defineComponents();
        }
        return this._components;
    }

    defineComponents() {
        const components = [];
        const componentsConfiguration = this.configuration().components;
        Object.keys(componentsConfiguration).forEach(
            key => components.push(this.newComponent(key, componentsConfiguration[key]))
        )
        return components;
    }

    newComponent(name, configuration) {
        return new(this.componentClass(name, configuration))(this.componentConfiguration(name, configuration));
    }

    componentClass(name, configuration) {
        if (configuration.componentClass != undefined) {
            return configuration.componentClass;
        } else {
            return this.findComponentClass(name)
        }
    }

    findComponentClass(className) {
        let componentClass = this.componentClasses.find(
            componentClass => componentClass.ClassName().toUpperCase() == className.toUpperCase()
        )
        return componentClass;
    }

    componentConfiguration(name, configuration) {
        if (configuration.element == undefined) {
            configuration.element = this.template().findElementByClass("-" + name)
        }
        return configuration;
    }

    template() {
        if (this._template == undefined) {
            this._template = this.defineTemplate()
        }
        return this._template;
    }

    defineTemplate() {
        return Utils.Evaluate(this.configuration().template);
    }

    render() {
        this.renderComponents();
        this.renderTemplate();
    }

    renderComponents() {
        this.components().forEach(
            component => component.render()
        )
    }

    renderTemplate() {
        this.template().render(this.element());
    }

    defaultConfiguration() {
        return {
            element: App.ViewElement(),
        }
    }

}