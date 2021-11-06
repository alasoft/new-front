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
            text: "Escuelas",
            onClick: e => Escuela.Render()
        })
        itemDatos.addChild({
            text: "Modalidades",
            onClick: e => Modalidad.Render()
        })
        itemDatos.addChild({
            text: "Materias",
            onClick: e => Materia.Render()
        })
        itemEvaluaciones.addChild({
            text: "Cursos",
            onClick: e => Curso.Render()
        })
        itemEvaluaciones.addChild({
            text: "Alumnos",
            onClick: e => Alumno.Render()
        })
        return [itemDatos, itemEvaluaciones];

    }
}