class StoreConfigurationBase extends BaseObject {

    constructor(parameters) {
        super();
        this.parameters = parameters;
        this.url = App.Url(parameters.path);
    }

    defaultConfiguration() {
        return {
            key: "id",
            loadMode: "raw",
            cacheRawData: true
        }
    }

    listConfiguration() {
        return {
            load: searchData => Ajax.Promise({
                url: this.urlWithSearchData(searchData),
                type: "GET",
                headers: this.class().headers
            }),
            byKey: id => Ajax.Promise({
                url: this.urlWithId(id),
                type: "GET",
                headers: this.headers
            }),
            onLoaded: data => this.parameters.onLoaded ? this.parameters.onLoaded(data) : undefined
        }
    }

    restConfiguration() {
        return {
            insert: (data) => Ajax.Promise({
                url: this.url,
                type: "POST",
                data: JSON.stringify(this.transformData(data)),
                headers: this.headers
            }),
            update: (id, data) => Ajax.Promise({
                url: this.urlWithId(id),
                type: "PUT",
                data: JSON.stringify(this.transformData(data)),
                headers: this.headers
            }),
            remove: id => Ajax.Promise({
                url: this.urlWithId(id),
                type: "DELETE",
                headers: this.headers
            })
        }
    }

    urlWithSearchData(searchData) {
        if (searchData && searchData.searchValue) {
            return this.url + "/filter?" + searchData.searchExpr + "=" + searchData.searchValue;
        } else {
            return this.url;
        }
    }

    urlWithId(id) {
        return this.url + "/" + encodeURIComponent(id);
    }

    transformData(data) {
        if (this.parameters.transformData !== undefined) {
            return this.parameters.transformData(data)
        } else {
            return data;
        }
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

}

class StoreListConfiguration extends StoreConfigurationBase {

    configuration() {
        return Utils.Merge(super.defaultConfiguration(), super.listConfiguration());
    }

}

class StoreRestListConfiguration extends StoreConfigurationBase {

    configuration() {
        return Utils.Merge(super.defaultConfiguration(), super.listConfiguration(), super.restConfiguration());
    }

}

function DsList(parameters) {
    return new DevExpress.data.CustomStore(new StoreListConfiguration(parameters).configuration())
}

function DsRestList(parameters) {
    return new DevExpress.data.CustomStore(new StoreRestListConfiguration(parameters).configuration());
}

function Ds(parameters) {
    return DsRestList(parameters);
}