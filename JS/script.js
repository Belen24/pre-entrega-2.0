
//PROCESO INTERNO DE INGRESO PRODUCTOS

class Productos {

    constructor (nombre , dimension , material , precio , stock) {

        this.nombre = nombre ;
        this.dimension = dimension ;
        this.material = material ;
        this.precio = precio;
        this.stock = stock ;


    }

    get_dato_producto (){
        console.log ("<----   Detalle producto  ---->")
        console.log ("Producto: " , this.nombre);
        console.log ("Precio: " , this.dimension);
        console.log ("Unidades: " , this.material);
        console.log ("Precio neto: " , this.precio)
        console.log ("Stock disponible: " , this.stock);
        console.log ("")

    }



}

let lista_productos = [];

//SE DEJA INGRESADO DE ESTA FORMA PARA EVITAR EN LA REVISIÓN VOLVER A INGRESAR LOS DATOS EN EL CICLO FOR

lista_productos.push (new Productos ("Aros", "Largo 4 cm" , "Plata 925" , 5000 , 25));
lista_productos.push (new Productos ("Anillo", "Medidas : 17 - 20 - 23" , "Plata 925" , 10500 , 25));
lista_productos.push (new Productos ("Cadena", "Largo 50 cm , grosor 2 mm" , "Plata 925" , 17000 , 25));
lista_productos.push (new Productos ("Colgante", "Largo 18 mm , ancho 14mm" , "Plata 925" , 5500 , 25));
lista_productos.push (new Productos ("Pulsera", "Largo 19 cm" , "Plata 925" , 7500 , 25));
lista_productos.push (new Productos ("Tobillera", "Largo 26 cm" , "Plata 925" , 8000 , 25));



//CICLO DE AUTOMATIZACIÓN INGRESO PRODUCTO

/*for (let i = 0; i <6 ; i = i + 1){

    let nombre = prompt ("Ingrese nombre producto");
    let dimension = prompt ("Ingresar detalles del producto");
    let material = prompt ("Ingrese material del producto");
    let precio = prompt ("Ingrese precio neto del producto");
    let stock = prompt ("Ingrese número de unidades disponibles")

    let nuevo_producto = new Productos ( nombre , dimension, material , precio , stock)

    lista_productos.push (nuevo_producto);

}*/



// VISUALIZACIÓN DE LOS PRODUCTOS EN CONSOLA

 for (let producto of lista_productos){

    producto.get_dato_producto()

 }




// PROCESO SIMULADOR CLIENTE: COMPRA

// FUNCIONES:

function agregar_iva (producto){

    let iva = producto.precio * 0.19;
   

    return{
        nombre: producto.seleccion_prod,
        unidades: producto.unidades,
        precio: producto.precio + iva, 
        
    
    }
   
    
}



// BIENVENIDA A LA TIENDA

alert ("BIENVENIDO A NUESTRA TIENDA VIRTUAL");

let usuario = prompt ("Hola!!! Por favor ingresa tu nombre: ");

let consulta = prompt ("Deseas realizar alguna compra: si o no");


// CICLO PARA INGRESO

while (consulta == "no" || consulta == "NO" || consulta == "No" || consulta == ""){
    alert ("Muchas gracias por tu visita")
    usuario = prompt ("Hola!!! Por favor ingresa tu nombre: ");
    consulta = prompt ("Deseas realizar alguna compra: si o no");
}


// SE DECLARA LA VARIABLE PARA SIMULAR UN CARRO DE COMPRAS
let carro_compras = []



// CICLO DE COMPRA

while ( consulta == "si" || consulta == "SI" || consulta == "Si"){
    
// SE UTILIZA METODO FIND PARA COMFIRMAR QUE EL PRODUCTO INGRESADO ESTE EN NUESTRA LISTA DE PRODUCTOS

    function buscar_producto (producto){

        return producto.nombre == seleccion_prod
    
    }
    

    let seleccion_prod = prompt ("Ingresa por favor el nombre del producto");

    let busqueda_prod = lista_productos.find( buscar_producto );



    
// RESULTADO POSITIVO DE METODO FIND

    if ( busqueda_prod != undefined && seleccion_prod == "Aros" || seleccion_prod == "Anillo" || seleccion_prod == "Cadena" || seleccion_prod == "Colgante" || seleccion_prod == "Pulsera" || seleccion_prod == "Tobillera"){
        switch (seleccion_prod){
            case "Aros":
            precio = 5000;
            break
            case "Anillo":
            precio = 10500;
            break
            case "Cadena":
            precio = 17000;
            break
            case "Colgante":
            precio = 5500;
            break
            case "Pulsera":
            precio = 7500;
            break
            case "Tobillera":
            precio = 8000;
            break
            default:
            break
        }
        

       
// METODO PUSH PARA IR INGRESANDO LOS PRODUCTOS Y UNIDADES AL CARRO DE COMPRAS

        let unidades = parseInt (prompt ("Ingrese por favor el N° de unidades que desea comprar: "))
       
        carro_compras.push ({ seleccion_prod, unidades , precio})

        //console.log(carro_compras)
 
    }


    

    else{
// RESPUESTA EN CASO QUE PRODUCTO INGRESADO NO SEA ENCONTRADO

        alert ("Producto NO se encuentra disponible en nuestro listado")

        

    }


    consulta = prompt ("Deseas seguir comprando: si o no");

    // BUCLE INTERNO QUE PERMITE AL CLIENTE UNA VEZ FINALIZADA LA COMPRA, VISUALIZAR LOS PRODUCTOS EN EL CARRO, PRECIO Y TOTAL A PAGAR

    while (consulta == "no" || consulta == "No" || consulta == "NO"){

        console.log ("Muchas gracias por tu compra")

     
    // SE UTILIZA METODO MAP PARA GENERAR UN NUEVO ARREGLO APLICANDO EL IVA 19% A LOS PRODUCTOS
        carro_final = carro_compras.map (agregar_iva)
        console.log (carro_final)

    console.log(usuario, ": Por favor revisa tu carrito de compras")  
    
    // SE UTILIZA METODO forEach PARA RECORRER EL CARRO DE COMPRAS Y REALIZAR LA SUMA DE LOS PRODUCTOS

        carro_final.forEach((carro_total)=> {
            console.log (`Producto: ${carro_total.nombre}, Unidades: ${carro_total.unidades}, Total a pagar por producto ${carro_total.unidades * carro_total.precio}`)
            
        });

        
     
       
        break
    }
   

}


// METODO REDUCE PARA REALIZAR EL CALCULO TOTAL DE LOS PRODUCTOS EN EL CARRO

let total = carro_final.reduce ((acc, el) => acc + el.precio * el.unidades, 0)

console.log ("El total de tu compra es: ", total)

