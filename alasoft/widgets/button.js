class Button extends Widget {

    widgetName() {
        return "dxButton";
    }

}

class ButtonItems extends Button {

    defaultConfiguration() {
        return {
            element: App.ButtonItemsElement(),
            icon: "menu",
            onClick: e => this.onClick(e)
        }
    }

    onClick(e) {
        Utils.ToggleVisibility(App.ItemsElement())
    }

}