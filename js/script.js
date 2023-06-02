function convertNumber() {
    var numero = document.getElementById("numero").value;
    var resultado = "";

    if (/[IVXLCDM]/i.test(numero)) {
      // Se o número fornecido é um número romano
      resultado = romanToArabic(numero.toUpperCase()).toString();
    } else {
      // Se o número fornecido é um número arábico
      resultado = arabicToRoman(parseInt(numero));
    }

    document.getElementById("resultado").textContent = resultado;
  }
 
 function romanToArabic(roman) {
      // Cria um objeto com os valores correspondentes aos símbolos romanos
      const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };

      let result = 0;

      // Itera pelos caracteres do número romano de trás para frente
      for (let i = roman.length - 1; i >= 0; i--) {
        const currentSymbol = roman[i];
        const currentValue = romanValues[currentSymbol];

        // Se o valor atual for menor que o próximo valor à direita, subtrai-se o valor atual
        if (i < roman.length - 1) {
          const nextSymbol = roman[i + 1];
          const nextValue = romanValues[nextSymbol];
          if (currentValue < nextValue) {
            result -= currentValue;
            continue;
          }
        }

        // Caso contrário, adiciona-se o valor atual ao resultado
        result += currentValue;
      }

      return result;
    }


    function arabicToRoman(arabic) {
        // Cria um objeto com os valores correspondentes aos símbolos romanos
        const romanValues = [
          M = { value: 1000, symbol: 'M' },
            CM = { value: 900, symbol: 'CM' },
            D = { value: 500, symbol: 'D' },
            CD = { value: 400, symbol: 'CD' },
            C = { value: 100, symbol: 'C' },
            XC = { value: 90, symbol: 'XC' },
            L = { value: 50, symbol: 'L' },
            XL = { value: 40, symbol: 'XL' },
            X = { value: 10, symbol: 'X' },
            IX = { value: 9, symbol: 'IX' },
            V = { value: 5, symbol: 'V' },
            IV = { value: 4, symbol: 'IV' },
            I = { value: 1, symbol: 'I' }

        ];
      
        let roman = '';
      
        // Itera pelos valores do objeto romanValues
        for (let i = 0; i < romanValues.length; i++) {
          const { value, symbol } = romanValues[i];
      
          // Enquanto o número arábico fornecido for maior ou igual ao valor romano atual
          while (arabic >= value) {
            // Adiciona o símbolo romano ao resultado
            roman += symbol;
            // Subtrai o valor romano do número arábico
            arabic -= value;
          }
        }
      
        return roman;
      }

    document.getElementById("converterForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      var numero = document.getElementById("numero").value;

    
      var resultadoRomano = '';
      var resultadoArabico = '';
    
     
      if (romanToArabic(numero)) {
        resultadoArabico = romanToArabic(numero);
        resultadoRomano = numero;
      } else {
        resultadoRomano = arabicToRoman(numero);
        resultadoArabico = numero;
      }
    
      document.getElementById("resultado").innerHTML = "Número Romano: " + resultadoRomano + "<br> Número Arábico: " + resultadoArabico;
    });



 

  // Exemplo de uso:
  //const romanNumber = "XIV";
  //const arabicNumber = romanToArabic(romanNumber);
 // console.log(arabicNumber); // Output: 14 