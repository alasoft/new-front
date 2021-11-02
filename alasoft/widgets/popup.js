class Popup extends Widget {

    widgetName() {
        return "dxPopup";
    }

    defaultConfiguration() {
        return {
            showTitle: true,
            resizeEnabled: true,
            width: 400,
            height: 600,
            contentTemplate: e => this.contentTemplate(e)
        }
    }

    contentTemplate(e) {
        this.view().renderComponents();
        e.append(this.view().template().element());
        e.parent().css("background-color", "thistle");
    }

    view() {
        return this.configuration().view;
    }

    defineElement() {
        var element;
        var i = 1;
        while ($("#" + App.POPUP_PREFFIX_ID + "-" + i).length) {
            i++
        }
        element = $("<div id='" + App.POPUP_PREFFIX_ID + "-" + i + "'>").dxPopup(this.configuration());
        $("#" + App.APP_ID).append(element);
        return element;
    }

    show() {
        this.instance().show();
    }

    hide() {
        this.instance().hide();
    }

    close() {
        this.element().remove();
    }

}

class Style {

    static Popup(e) {

        e.parent()
            .css("background-color", App.POPUP_BACKGROUND_COLOR);

        e
            .addClass("contenido-vertical")
            .css("height", "100%")
            .css("padding", "5px");

    }

}