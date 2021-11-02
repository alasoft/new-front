class AppItems extends AppItemsView {
    static DefineDataSource() {
        const itemDatos = new TreeItem({
            id: "1",
            text: "Datos"
        });
        const itemEvaluaciones = new TreeItem({
            id: "2",
            text: "Evaluaciones"
        });
        itemDatos.addChild({
            text: "Escuelas"
        })
        itemDatos.addChild({
            text: "Modalidades"
        })
        itemDatos.addChild({
            text: "Materias"
        })
        itemDatos.addChild({
            text: "Cursos"
        })
        itemEvaluaciones.addChild({
            text: "Períodos"
        })
        itemEvaluaciones.addChild({
            text: "Clase"
        })
        return [itemDatos, itemEvaluaciones];
    }
}