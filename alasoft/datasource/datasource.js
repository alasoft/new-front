class DataSource {

    constructor(parameters) {
        this.path = parameters.path;
        this.url = App.Url(this.path);
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    configuration() {
        return {
            key: "id",
            load: searchData => this.promise({
                verb: "list",
                data: searchData ? { descripcion: searchData.searchValue } : undefined
            }),
            byKey: key => this.promise({ verb: "id", data: { id: key } }),
            insert: data => this.promise({ verb: "add", data: data }),
            update: (key, data) => this.promise({ verb: "update", data: Utils.Merge(data, { id: key }) }),
            delete: key => this.promise({ verb: "delete", data: { id: key } })
        }
    }

    promise(parameters) {
        return Ajax.Promise({
            url: this.url + "/" + parameters.verb,
            headers: this.headers,
            type: "POST",
            data: JSON.stringify(this.transformData(parameters))
        })
    }

    transformData(parameters) {
        return parameters.data;
    }

}

class Ajax {

    static Promise(parameters) {
        return new Promise(
            (resolve, reject) => {
                $.ajax({
                    url: parameters.url,
                    headers: parameters.headers,
                    type: parameters.type,
                    data: parameters.data,
                    success: response => resolve(response),
                    error: error => reject(error)
                })
            }
        )
    }

}

function Ds(parameters) {
    return new DataSource(parameters).configuration();
}