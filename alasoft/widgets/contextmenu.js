class ContextMenu extends Widget {

    widgetName() {
        return "dxContextMenu";
    }

    setItems(items) {
        this.setProperty("items", items)
    }
}