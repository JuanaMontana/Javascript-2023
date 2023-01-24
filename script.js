function tienda() {
    alert("Bienvenido a Figuritas Coleccionables!");
    let userName = prompt("Ingrese su nombre: ")
    saludar(userName);



function saludar (userName){
    alert("Bienvenido " + userName + "! Aquí encontrara todo lo que necesita para su colección");
}



function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto(`Goku`,100000);
const producto2 = new Producto('Vegeta', 95000);
const producto3 = new Producto(`Eren Jaeger Titan de Ataque`, 150000);
const producto4 = new Producto(`Pikachu`, 65000);
let precio1 = `100.000`;
let precio2 = `95.000`;
let precio3 = `150.000`;
let precio4 = `65.000`;
let valor2 = 95000;
let valor3 = 150000;
let valor4 = 65000;
let total = 0;
let totalisimo = 0;

let listaCarrito = [];

function totalisimoo (num1, num2){
    let resultado = num1 + num2;
    alert('Su total es:', resultado);
    return resultado
}


let seleccion1 = "";
let seleccion2 = "";
let confirmacionCompra = prompt("Desea realizar una compra?");

while( confirmacionCompra== `si` || confirmacionCompra ==`no`|| confirmacionCompra==``){
    console.log("while grande" + confirmacionCompra)
    if(confirmacionCompra==`si`){
        seleccion1 = parseInt(prompt(`Debe selecionar un articulo\n`+`1  ` + producto1.nombre + ` $` + producto1.precio + `\n` + `2  ` + producto2.nombre + ` $`+ producto2.precio + `\n` + `3  ` + producto3.nombre + ` $`+ producto3.precio + `\n` + `4  ` + producto4.nombre + ` $`+ producto4.precio));
        while(seleccion1 == '1' || seleccion1 == '2' || seleccion1 == '3' || seleccion1 == '4'){
            console.log('entrando al while')
            switch(seleccion1){
                case 1:
                    seleccion2 = parseInt(prompt(`Usted seleccionó: \n` + producto1.nombre + ` Que tiene un valor de: $`+ producto1.precio + "\n Que cantidad desea?"));
                    total = seleccion2 * producto1.precio;
                    listaCarrito.push(` Figura: `+ producto1.nombre + `, Cantidad: `+ seleccion2 + `\n`) ;
                    console.log(listaCarrito);
                    console.log(total);
                    break
                case 2:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto2.nombre + ` Que tiene un valor de: $`+ producto2.precio + "\n Que cantidad desea?"));
                    total = seleccion2 * producto2.precio;
                    listaCarrito.push(` Figura: `+ producto2.nombre + `, Cantidad: `+ seleccion2 + `\n`) ;
                    console.log(listaCarrito);
                    console.log(total);
                    break
                case 3:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto3.nombre + ` Que tiene un valor de: $`+ producto3.precio + "\n Que cantidad desea?"));
                    total = seleccion2 * producto3.precio;
                    listaCarrito.push(` Figura: `+ producto3.nombre + `, Cantidad: `+ seleccion2 + `\n` ) ;
                    console.log(listaCarrito);
                    console.log(total);
                    break
                case 4:
                    seleccion2 = parseInt(prompt(`Usted seleccionó` + producto4.nombre + ` Que tiene un valor de: $`+ producto4.precio + "\n Que cantidad desea?"));
                    total = seleccion2 * producto4.precio;
                    listaCarrito.push(` Figura: `+ producto4.nombre + `, Cantidad: `+ seleccion2 + `\n`) ;
                    console.log(listaCarrito);
                    console.log(total);
                    break
                }
            seleccion1 = parseInt(prompt(`Desea comprar mas? Seleccione un articulo\n`+`1  ` + producto1.nombre + ` $` + producto1.precio + `\n` + `2  ` + producto2.nombre + ` $`+ producto2.precio + `\n` + `3  ` + producto3.nombre + ` $`+ producto3.precio + `\n` + `4  ` + producto4.nombre + ` $`+ producto4.precio + `\n` + `5  ` + ` para Salir`));

            if(seleccion1 == 5){
                confirmacionCompra = 'no';
            }
            totalisimo = totalisimo + total;
            }
        }


        if(confirmacionCompra==`no`){
            alert(`Su compra es:\n ${listaCarrito.join(" ")}`);
            alert(`Gracias por su visita, el total de su compra es: ${totalisimo}`);
            break;
        }
        if(confirmacionCompra ==``){
        alert(`...ERROR... \nDebe selecionar si o no`);
        confirmacionCompra = prompt("Desea realizar una compra?");
        }
    }

}