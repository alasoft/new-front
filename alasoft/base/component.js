class Component extends BaseObject {

    constructor(externalConfiguration) {
        super();
        this._externalConfiguration = externalConfiguration;
    }

    element() {
        if (this._element == undefined) {
            this._element = this.defineElement();
        }
        return this._element;
    }

    defineElement() {
        return this.configuration().element;
    }

    configuration() {
        if (this._configuration == undefined) {
            this._configuration = this.defineConfiguration();
        }
        return this._configuration;
    }

    defineConfiguration() {
        return Utils.Merge(
            this.defaultConfiguration(),
            this.extraConfiguration(),
            this._externalConfiguration
        );
    }

    defaultConfiguration() {}

    extraConfiguration() {}

    static Render() {
        this.Instance().render();
    }

}