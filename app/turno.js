class Turno extends ArrayDataSource {

    static DefineItems() {
        return [
            { id: "M", nombre: "Mañana" },
            { id: "T", nombre: "Tarde" },
            { id: "V", nombre: "Vespertino" },
            { id: "N", nombre: "Noche" },
        ]
    }
}