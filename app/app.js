class App {

    static TEMPLATE_TAG_DEFAULT = "<div>";
    static DISPLAY_EXPR_DEFAULT = "nombre";
    static LIST_CLASS_PATH_DEFAULT = "list";
    static LABEL_CLASS_PATH_DEFAULT = "label";
    static POPUP_PREFFIX_ID = "app-popup";
    static APP_ID = "app";
    static POPUP_BACKGROUND_COLOR = "thistle";

    static ViewElement() {
        return $("#app-view");
    }

    static ToolbarElement() {
        return $("#app-toolbar");
    }

    static ItemsElement() {
        return $("#app-items");
    }

    static ButtonItemsElement() {
        return $("#app-button-items");
    }

    static Start() {
        AppToolbar.Render();
        AppItems.Render();
        Año.Load();
        Turno.Load();
    }

    static ToggleItemsVisibility() {
        Utils.ToggleVisibility(this.ItemsElement());
    }

    static Url(path) {
        return this.BaseUrl() + "/" + path;
    }

    static BaseUrl() {
        return "http://localhost:9090/escuelas";
    }

}