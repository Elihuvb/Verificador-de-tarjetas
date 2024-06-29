// Crear un programa que valide si una tarjeta de credito es real o no con el metodo LUHN



const cardValidator = (n) => {

  let m = 0;
  let cardNumberArr = [];

  // 1. Invertir el orden de los numeros

  let n2 = n.split("").reverse();

  // 2. Multiplicar por dos cada primer digito comenzando por el digito 0

  for (let i = 0; i < n2.length; i++) {
    const element = n2[i];
    if (i % 2 != 0) {
      let num = parseInt(n2[i]) * 2;

      // 3. En caso de que el resultado de uno de de los numero sea de dos digitos sumarlos entre si

      if (num >= 10) {
        let n = num.toString();
        let num1 = n.split("");
        let num2 = num1[0];
        let num3 = num1[1];
        let num4 = num2[0] + num3[1];
        let c = cardNumberArr.push(num4);
      }
      let c = cardNumberArr.push(num);
    } else {
      let c = cardNumberArr.push(parseInt(n2[i]));
    }
  }

  let n3 = cardNumberArr.reduce((a, b) => parseInt(a) + parseInt(b), 0)

  // 4. Si el resultado termina en 0, es válida
  
  if (n3 % 10 === 0) {
    cardNumberArr = []
    let art = document.createElement("ARTICLE");
    art.innerHTML = `<p>La tarjeta es valida</p>`;
    art.classList.add("valido");
    document.querySelector(".information").appendChild(art)
    setTimeout(() => {
      art.style.opacity = 0;
      art.style.display = "none";
      document.querySelector(".btn").setAttribute("disabled", true)
      document.querySelector(".btn").style.backgroundColor = "var(--color4)";
    }, 3000)
  } else {
    cardNumberArr = []
    let art = document.createElement("ARTICLE");
    art.innerHTML = `<p>La tarjeta no es valida</p>`;
    art.classList.add("invalido");
    document.querySelector(".information").appendChild(art)
    setTimeout(() => {
      art.style.opacity = 0;
      art.style.display = "none";
      document.querySelector(".btn").setAttribute("disabled", true)
      document.querySelector(".btn").style.backgroundColor = "var(--color4)";
    }, 3000)
  }
}

document.querySelector(".btn").addEventListener("click", () => {
  let inputN = document.getElementById("cardNumbers");
  let val = inputN.value;

  if (val == "") {
    let art = document.createElement("ARTICLE");
    art.innerHTML = `<p>Escribe un número</p>`;
    art.classList.add("invalido");
    document.querySelector(".information").appendChild(art)
    setTimeout(() => {
      art.style.opacity = 0;
      art.style.display = "none";
    }, 3000)
  } else {
    cardValidator(val);
  }
  document.getElementById("cardNumbers").value = "";
})

document.getElementById("cardNumbers").addEventListener("keyup", () => {
  document.querySelector(".btn").removeAttribute("disabled")
  document.querySelector(".btn").style.backgroundColor = "var(--color5)";
  if (document.getElementById("cardNumbers").value == "") {
    document.querySelector(".btn").setAttribute("disabled", true)
    document.querySelector(".btn").style.backgroundColor = "var(--color4)";
  }
})