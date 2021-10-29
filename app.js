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

    static ItemsElement() {
        return $("#app-items");
    }

    static ButtonItemsElement() {
        return $("#app-button-items");
    }

}