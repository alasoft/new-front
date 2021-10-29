class Label extends Component {

    constructor(extraConfiguration) {
        super();
        this._extraConfiguration = extraConfiguration;
    }

    render() {
        this.element().text(Utils.Evaluate(this.configuration().text));
    }

    extraConfiguration() {
        return this._extraConfiguration;
    }

}