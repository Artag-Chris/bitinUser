export const servicioData = [{
    ID_SERVICIO: 1, //campo automatico 
    FECHA_INSERCION: "2020-01-01",//este campo es un timestamp
    FECHA_ENTREGA: "2020-02-20",
    ID_MENSAJERO:1,//seleccionaran su mensajero?
    ID_ORDEN:"123456789",// se llena
    COPAGO:"",//se llena
    ID_DIRECCION:"calle tal",//se llena
    FECHA_ESPERADA_ENTREGA: "2020-02-20",
    ESTADO: "PENDIENTE",//deberia ser automatico
    ID_USUARIO: 1,//este campo es el que comunica con la tabla de usuario
    ID_EPS: "Medimas", //nombre de la eps
    ID_ESTABLECIMIENTO: 1, //nome queda claro
    CICLO_FORMULA_ACTUAL: 1, //en que ciclo de la formamedica esta
    CICLO_FORMULA_TOTAL: 1, //el ciclototal de la formula medica
},
{
    ID_SERVICIO: 2,
    FECHA_INSERCION: "2020-01-01",
    FECHA_ENTREGA: "2020-02-20",
    ID_MENSAJERO:1,
    ID_ORDEN:1,
    COPAGO:0,
    ID_DIRECCION:1,
    FECHA_ESPERADA_ENTREGA: "2020-02-20",
    ESTADO: "PENDIENTE",
    ID_USUARIO: 1,
    ID_EPS: "Medimas",
    ID_ESTABLECIMIENTO: 1,
    CICLO_FORMULA_ACTUAL: 1,
    CICLO_FORMULA_TOTAL: 1,
},
]

export const ordenData = [{
    id: 1,
    ID_ORDEN: 1, //campo automatico
    NUMERO_ORDEN: "123456789",
    FECHA_ESPERADA_ORDEN: "2020-02-20",
    CIE_10:"CIE 10",
    DIAGNOSTICO:"Diagnostico",
    PROFESIONAL:"Juan Galliard",
    FECHA_ORDEN: "2020-02-20",
    FECHA_VENCIMIENTO_ORDEN: "2020-03-20",
    TIPO_ORDEN :"ORDEN DE SERVICIO",
    
},{
    id: 2,
    ID_ORDEN: 2,
    NUMERO_ORDEN: "123456789",
    FECHA_ESPERADA_ORDEN: "2020-02-20",
    CIE_10:"CIE 10",
    DIAGNOSTICO:"Diagnostico",
    PROFESIONAL:"Juan Galliard",
    FECHA_ORDEN: "2020-02-20",
    FECHA_VENCIMIENTO_ORDEN: "2020-03-20",
    TIPO_ORDEN :"ORDEN DE SERVICIO",

}
]
export const detalleOrdenData = [{
    ID_PRESCRIPCION: 1,//campo automatico
    NOMBRE: "Acetamenufen",
    AUTORIZACION: true,
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    TIPO:"PRESCRIPCION",
    ID_ORDEN:1,
},{
    ID_PRESCRIPCION: 2,
    NOMBRE: "Acetamenufen",
    AUTORIZACION: true,
    FORMA_FARMACEUTICA:"Tableta",
    CANTIDAD:1,
    TIPO:"PRESCRIPCION",
    ID_ORDEN:2,
}
]