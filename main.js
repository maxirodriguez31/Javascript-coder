// La funcion permite iniciar sesion

document.addEventListener("DOMContentLoaded", () => {
  const usuarios = [
    { usuario: "Maximiliano", password: "1234" },
    { usuario: "Martina", password: "abcd" },
    { usuario: "Natalia", password: "1234" },
  ];

  const btnLogin = document.getElementById("btnLogin");

  btnLogin.addEventListener("click", () => {
    let nombreUsuario = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:");

    let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === nombreUsuario &&
        usuarios[i].password === contraseña
      ) {
        usuarioEncontrado = usuarios[i];
        break;
      }
    }

    if (usuarioEncontrado) {
      alert("Bienvenido, " + usuarioEncontrado.usuario);
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});

// La funcion realiza un pedido en el cual se indica el nombre del producto, su precio y su cantidad, retornando una alerta en base a los valores escritos por el usuario

document.addEventListener("DOMContentLoaded", () => {
  const botonPedido = document.getElementById("btnPedido");

  botonPedido.addEventListener("click", () => {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio unitario:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad:"));

    if (
      !producto ||
      isNaN(precio) ||
      isNaN(cantidad) ||
      precio <= 0 ||
      cantidad <= 0
    ) {
      alert("Por favor, ingrese datos válidos.");
      return;
    }

    let total = precio * cantidad;

    alert(
      "Producto: " +
        producto +
        "\nPrecio unitario: $" +
        precio.toFixed(2) +
        "\nCantidad: " +
        cantidad +
        "\nTotal: $" +
        total.toFixed(2)
    );
  });
});
