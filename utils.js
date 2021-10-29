class Utils {

    static IsString(x) {
        return (typeof x === "string");
    }

    static IsFunction(x) {
        return (typeof x === "function");
    }

    static HasValue(x) {
        return (x != undefined && x != null);
    }

    static Merge(...params) {
        return $.extend(true, {}, ...params);
    }

    static Capitalize(s) {
        return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    }

    static Evaluate(x) {
        if (this.IsFunction(x)) {
            return x();
        } else {
            return x;
        }
    }

    static ToggleVisibility(element) {
        const isVisible = element.css("display") != "none";
        if (isVisible) {
            element.hide();
        } else {
            element.show()
        }
    }

}