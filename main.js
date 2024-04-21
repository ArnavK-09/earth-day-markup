/**
 * Website elements access
 */
const hero = document.getElementsByTagName("header")[0];
const body = document.body;


/**
 * Adding ground to hero
 */
{
  const ground = document.createElement("section");
  hero.append(ground);
}
