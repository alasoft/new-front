class Template {

    constructor(name) {
        this._name = name;
    }

    element() {
        if (this._element == undefined) {
            this._element = this.defineElement();
        }
        return this._element;
    }

    defineElement() {
        return $($("#template-" + this._name).html());
    }

    find(className) {
        return this.element().find("." + className);
    }

    render(parent) {
        parent.append(this.element());
    }

    html() {
        return this.element().html();
    }

}