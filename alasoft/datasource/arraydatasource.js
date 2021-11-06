class ArrayDataSource {

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {
        return new DevExpress.data.DataSource({
            store: {
                type: "array",
                key: "id",
                data: this.Items()
            }
        })
    }

    static Items() {
        if (this._Items == undefined) {
            this._Items = this.DefineItems();
        }
        return this._Items;
    }

    static DefineItems() {
        return [];
    }

    static Nombre(id) {
        const item = this.Items().find(
            item => item.id == id
        )
        return item ? item.nombre : "";
    }

}