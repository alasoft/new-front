class Widget extends Component {

    render() {
        this.element()[this.widgetName()](this.configuration());
    }

    instance() {
        try {
            return this.element()[this.widgetName()]("instance");
        } catch (e) {
            return undefined;
        }
    }

    getProperty(propertyName) {
        return this.instance().option(propertyName);
    }

    setProperty(propertyName, value) {
        this.instance().option(propertyName, value);
    }

    focus() {
        this.instance().focus();
    }

    extraConfiguration() {
        return this._extraConfiguration;
    }

}