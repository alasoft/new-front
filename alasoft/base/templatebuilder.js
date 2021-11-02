class TemplateBuilder {

    constructor(parameters) {
        this._root = new TemplateItem(parameters)
    }

    addChild(parameters) {
        return this._root.addChild(parameters);
    }

    add(parameters) {
        return this._root.add(parameters);
    }

}

class TemplateItem {

    constructor(parameters = {}) {
        if (Utils.IsString(parameters)) {
            parameters = { cssClassNames: parameters }
        }
        this._items = [];
        this._parent = parameters.parent;
        this._tag = parameters.tag || App.TEMPLATE_TAG_DEFAULT;
        this._cssClassNames = parameters.cssClassNames;
    }

    addChild(parameters) {
        this.add(parameters);
        return this;
    }

    add(parameters) {
        if (Utils.IsString(parameters)) {
            parameters = { cssClassNames: parameters }
        }
        return this._items[this._items.push(new TemplateItem({ parent: this, cssClassNames: parameters.cssClassNames })) - 1];
    }

    up() {
        return this._parent;
    }

    element() {
        let element = $(this._tag).addClass(this._cssClassNames);
        this._items.forEach(
            item => element.append(item.element())
        )
        return element;
    }

    root() {
        let root = this;
        while (root.parent != undefined) {
            root = root.parent;
        }
        return root;
    }

    build() {
        return new Template(this.root().element());
    }

}