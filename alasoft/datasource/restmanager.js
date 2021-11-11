class RestManager {

    async save() {
        if (this.view().isAdding()) {
            await this.add();
        } else if (this.view().dataHasChanged()) {
            await this.update();
        }
    }

    async get(id) {
        await this.promise({ verb: "id", data: { id: id } }).then(data => this.view().setData(data))
    }

    async add() {
        await this.promise({ verb: "add", data: this.view().dataToAdd() }).then(
            data => this.setId(data.id)
        )
    }

    async update() {
        await this.promise({ verb: "update", data: this.view().dataToUpdate() })
    }

    async delete() {
        await this.promise({ verb: "delete", data: this.view().dataToDelete() })
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    promise(parameters) {
        return Ajax.Promise({
            url: this.url + "/" + parameters.verb,
            headers: this.headers,
            type: "POST",
            data: JSON.stringify(parameters.data)
        })
    }

}