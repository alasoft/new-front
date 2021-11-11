class Label extends Component {

    constructor(extraConfiguration) {
        super();
        this._extraConfiguration = extraConfiguration;
    }

    render() {
        this.element().text(Utils.Evaluate(this.configuration().text)).css("font-size", "small");
    }

    extraConfiguration() {
        return this._extraConfiguration;
    }

}