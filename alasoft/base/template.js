class Template {

    constructor(element) {
        this._element = element;
    }

    findElementByClass(className) {
        return this._element.find("." + className);
    }

    render(parent) {
        parent.empty();
        this._element.appendTo(parent);
    }

    html() {
        return this._element.html();
    }

    element() {
        return this._element;
    }

}