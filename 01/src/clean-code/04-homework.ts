(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  const fruitsColorRed : string[] = ['manzana', 'cereza', 'ciruela'];
  function isRedFruit( fruit: string ): boolean {      
      return fruitsColorRed.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor( color: FruitColor ): string[] {
    const fruitsByColors = {
      red : ['manzana', 'fresa'],
      yellow : ['piña', 'banana'],
      purple : ['mora', 'uvas']
  }
      // switch (color) {
      //     case 'red':
      //         return fruitsByColors.red;
      //     case 'yellow':
      //         return fruitsByColors.yellow;
      //     case 'purple':
      //         return fruitsByColors.purple;
      // }
      if (!Object.keys(fruitsByColors).includes(color)){  
        throw new Error('Color no valido');
      }

      return fruitsByColors[color];
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
      // if( isFirstStepWorking === true ) {
      //     if( isSecondStepWorking === true ) {
      //         if( isThirdStepWorking === true ) {
      //             if( isFourthStepWorking === true ) {
      //                 return 'Working properly!';
      //             }
      //             else {
      //                 return 'Fourth step broken.';
      //             }
      //         }
      //         else {
      //             return 'Third step broken.';
      //         }
      //     }
      //     else {
      //         return 'Second step broken.';
      //     }
      // }
      // else {
      //     return 'First step broken.';
      // }
      if (!isFirstStepWorking) return 'First step broken.';
      if (!isSecondStepWorking) return 'Second step broken.';
      if (!isThirdStepWorking) return 'Third step broken.';
      if (!isFourthStepWorking) return 'Fourth step broken.';
      
      return 'Working properly!'; 
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
