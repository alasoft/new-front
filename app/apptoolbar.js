class AppToolbar extends Toolbar {

    defaultConfiguration() {
        return {
            element: App.ToolbarElement(),
            items: [
                this.itemsButton()
            ]
        }
    }

    itemsButton() {
        return {
            widget: "dxButton",
            location: "before",
            options: {
                icon: "menu",
                onClick: e => App.ToggleItemsVisibility()
            }
        }
    }
}