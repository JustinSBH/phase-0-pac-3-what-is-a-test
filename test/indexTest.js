require ( './root.js' );

const expect = require('expect');
const { name, height, message } = require("../index.js");

//trav person Importation de chai
const chai = require('chai');
//const expect = chai.expect;
//*****************/

// Fonction de calcul de la factorielle
function factorielle(n) {
  if (n === 0) return 1;
console.log('Factorielle de '+n+' est :' + n * (n - 1));
}
factorielle(3);


// Test Mocha
function maxTableau(arr) {
  if (arr.length === 0) return undefined;
console.log(Math.max(arr));
}
maxTableau(20);


//Fonction famille
describe("famille(string)", function () {
  it("Afficher les membres de la famille de Justin Repnior", function () {
    expect(famille("justin")).toEqual("justin");
    //famille("justin");
  });
});

//inverser du texte
function inverser(chaine) {
  console.log(chaine.split('').reverse().join(''));
}
inverser("Mon test");





function addition(a, b) {
  //return a + b;
  console.log(a+b);
}
describe('Fonction addition', function() {
  it('devrait retourner la somme de deux nombres positifs', function() {
    const result = addition(2, 3);
    expect(result).to.equal(5);
  });

  it('devrait retourner la somme d\'un nombre positif et d\'un nombre négatif', function() {
    const result = addition(2, -3);
    expect(result).to.equal(-1);
  });

  it('devrait retourner la somme de deux nombres négatifs', function() {
    const result = addition(-2, -3);
    expect(result).to.equal(-5);
  });  
});


// Définition de la fonction maxTableau (si ce n'est pas déjà fait)
// function maxTableau(tab) {
//   if (tab.length === 0) {
//     return undefined;
//   }
//   return Math.max(tab);
// }

// describe('Fonction maxTableau', function() {
//   it('devrait retourner le plus grand élément du tableau', function() {
//       const result = maxTableau([1, 2, 3, 4, 5]);
//       expect(result).to.equal(5);
//   });

//   it('devrait retourner undefined pour un tableau vide', function() {
//       const result = maxTableau([]);
//       expect(result).to.equal(undefined);
//   });
// });


// The code below ensures that students who are using CodeGrade will get credit 
// for the code-along in Canvas; you can disregard it.
describe('', () => {
  describe('', () => {
    it('', () => {
      return true;
    })
  })
})
