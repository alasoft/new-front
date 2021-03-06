class Popup extends Widget {

    widgetName() {
        return "dxPopup";
    }

    defaultConfiguration() {
        return {
            showTitle: true,
            resizeEnabled: true,
            contentTemplate: e => this.contentTemplate(e)
        }
    }

    contentTemplate(e) {
        this.view().renderComponents();
        e.append(this.view().template().element());
        e.addClass("vertical")
            //        e.css("background-color", "green")
            //        e.css("margin", "-10px")
            //        e.parent().css("padding", "0px")
            //        e.parent().css("background-color", "thistle");
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

    setTitle(title) {
        this.setProperty("title", title);
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
            .addClass("vertical")
            .css("height", "100%")
            .css("padding", "5px");

    }

}