/* .adding in the fact gen. */
var factList = [
  "Nylon fabric takes 30-40 years to decompose fully ",/*0*/
  "When left out in the ocean to rot away and decompose, most fast fashion clothing pieces will start to disintegrate into microplastics, which marine life consume. ",/*1*/
  "Fabric dye and treatments account for over 20% of wastewater worldwide. ",/*2*/
  "Most clothes are made with polyester, which is a type of plastic often used to make fabrics. Polyester takes over 500 years to decomposel",/*3*/
  "35% of all microplastics found in the ocean come from synthetic textiles  ",/*4*/
  "Textile dyes are the world’s 2nd largest ocean polluter ",/*5*/
  "Pesticides used to grow cotton also are harmful for the planet  ",/*6*/
  "It takes 2,700 liters of water to make one shirt (about 17x a regular bathtub) (bathtubs are usually 160 liters at most)",/*7*/
  "The average american throws away 81 pounds of clothing a year ",/*8*/
  "When small animals like plankton consume microplastics, they lose the ability to eat as well as reproduce. ",/*9*/
  "The textile industry contributes to climate change more than both the aviation and shipping industry combined",/*10*/
  "3 out 5 fast fashion clothing pieces end up in the trash",/*11*/
  "63% of textile fibers are made from petrochemicals",/*12*/
  "The global fast fashion market is expected to grow from 30 billion to 39 billion in 2025",/*13*/
  "In Uzbekistan, cotton farming required so much water that the Aral Sea has dried out after only 50 years of use. ",/*14*/
  "Due to fast fashion, clothing is 7 times cheaper than it was 70 years ago",/*15*/
  "In LA, 85% of fast fashion producing factories violate California labour laws",/*16*/
  "Over 8,000 chemicals are used in fast fashion production",/*17*/
  "Every year, fast fashion emits 1.2 billion tons of Co2 into the atmosphere",/*18*/
  "Each year, 53 million tonnes of fiber is made for the fashion industry, 70% is wasted",/*19*/
  "Clothing production requires over 79 billion cubic meters of water per year. It is the 2nd most water intensive industry in the world behind agriculture. "/*20*/
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}