class FixedTable extends BaseObject {

    static DataSource() {
        if (this._DataSource == undefined) {
            this._DataSource = this.DefineDataSource();
        }
        return this._DataSource;
    }

    static DefineDataSource() {
        return new DsList({
            path: this.Path(),
            onLoaded: data => this.OnLoaded(data)
        })
    }

    static Path() {
        return this.ClassName().toLowerCase();
    }

    static OnLoaded(data) {
        this._data = data;
    }

    static Load() {
        this.DataSource().load();
    }

    static Data() {
        return this._data;
    }

    static Nombre(id) {
        let item = this.Data().find(
            item => item.id == id
        )
        return item ? item.nombre : "";
    }

}