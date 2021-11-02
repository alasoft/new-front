class Ajax {

    static Promise(parameters) {
        return new Promise(
            (resolve, reject) => {
                $.ajax({
                    url: parameters.url,
                    dataType: "json",
                    type: parameters.type,
                    data: parameters.data,
                    headers: parameters.headers,
                    success: response => resolve(response),
                    error: error => reject(error)
                })
            }
        )
    }

}