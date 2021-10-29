class View {

    components() {
        const components = this.configuration().components;
        Object.keys(components).forEach(
            key => components[key]
        )
    }

    newComponent(className, configuration) {
        new [className]()
    }


    defaultConfiguration() {
        return {
            components: {
                labelForm: {
                    text: "Persona"
                },
                form: {

                },

                labelGrid: {

                },
                grid: {

                }
            }
        }
    }


}