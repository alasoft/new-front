class Rest {

    static Get(path, id) {
        return Ajax.Promise({
            url: App.Url(path + "/get"),
            type: "POST",
            data: { ID: id }
        })
    }

    static Add(path, data) {
        return Ajax.Promise({
            url: App.Url(path + "/add"),
            type: "POST",
            data: { data: data }
        })
    }

    static Update(path, id, data) {
        return Ajax.Promise({
            url: App.Url(path + "/update"),
            type: "POST",
            data: { ID: id, data: data }
        })
    }

    static Delete(path, id) {
        return Ajax.Promise({
            url: App.Url(path + "/delete"),
            type: "POST",
            data: { ID: id }
        })
    }

}