function contarVocalesConTilde(palabra) {
    const vocalesConTilde = ['á', 'Á', 'é', 'É', 'í', 'Í', 'ó', 'Ó', 'ú', 'Ú'];
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
      if (vocalesConTilde.includes(palabra[i])) {
        contador++;
      }
    }
    return contador;
  }

  const palabra=("Párásáúríó"); //ejemplo de palabra, aunque también sirve para frases
  const numeroDeVocalesConTilde = contarVocalesConTilde(palabra);
  console.log(`La palabra "${palabra}" tiene ${numeroDeVocalesConTilde} vocales con tilde.`);
