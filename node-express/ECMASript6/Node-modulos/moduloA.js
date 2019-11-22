let texto = () => console.log('Texto del Modulo A');


module.exports.texto = texto;

let json = () => {
    console.log('Retornando JSON');

    let personas = [
        {
            "nombres:": "Julia",
            "apellidos": "Ocampo Sanchez"
        },
        {
            "nombres:": "Luis",
            "apellidos": "Torres Trello"
        }
    ]

    for (let i = 0; i < personas.length; i++) {
        let objeto = personas[i];
        for(let key in objeto) {
            let valor = objeto[key];
            console.log("clave del objeto : "+ key + ",valor : "+valor);
        }
        
    }
}

module.exports.json = json;