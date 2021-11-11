class RestView extends EntryView {

    refreshPopupTitle() {
        this.popup().setTitle(this.title())
    }

    title() {
        if (this.isAdding()) {
            return "Agrega " + this.originalTitle();
        } else if (this.isUpdating()) {
            return "Modifica " + this.originalTitle();
        } else {
            return this.originalTitle();
        }
    }

    id() {
        this.data().id
    }

    isAdding() {
        return this.id() == undefined;
    }

    setData(data, saveData = false) {
        this.propagateDataChanges = false;
        try {
            if (data) {
                this.setWidgetsData()
            }
            if (saveData == true) {
                this.saveData();
            }
            this.refreshState();
        } finally {
            this.propagateDataChanges = true;
        }
    }

    setWidgetsData() {}

    saveData() {}

    async get(id) {
        await this.rest().get(id).then(data => this.setData(data, true));
    }

    async save() {
        if (await this.validate()) {
            if (this.isAdding()) {
                await this.add()
            } else {
                await this.update()
            }
            this.close(this.dataHasChanged())
        }
    }

    async add() {
        await this.rest().add().then(data => this.setId(data.id))
    }

    async update() {
        await this.rest().update(this.dataToUpdate())
    }

    cancel() {
        if (this.isAdding()) {
            this.close(false)
        } else {
            this.restoreOriginalData();
        }
    }

    close(refreshMasterList) {
        if (this.configuration().masterList) {
            if (refreshMasterList) {
                this.configuration().masterList.refresh(this.id())
            }
            this.configuration.masterList.focus()
        }
        super.close();
    }

    rest() {
        if (this._rest == undefined) {
            this._rest = this.defineRest();
        }
        return this._rest;
    }

    defineRest() {
        return new Rest({ url: App.Url(this.path) })
    }

}

class Rest {

    constructor(parameters) {
        this.parameters = parameters;
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    get(id) {
        return this.promise({ verb: "id", data: { id: id } })
    }

    add(data) {
        return this.promise({ verb: "add", data: data })
    }

    update(data) {
        return this.promise({ verb: "update", data: data })
    }

    promise(parameters) {
        return Ajax.Promise({
            url: this.parameters.url + "/" + parameters.verb,
            headers: this.headers,
            type: "POST",
            data: parameters.data
        })
    }

}