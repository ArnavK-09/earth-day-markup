/**
 * Website elements access
 */
const hero = document.getElementsByTagName("header")[0];
const body = document.body;
const hero_text = hero.getElementsByTagName("h1")[0];

/**
 * Adding ground to hero
 */
{
  const ground = document.createElement("section");
  // for (let i = 5; i > 4; i++) {
  //   const plant = document.createElement("img");
  //   plant.src = "//fav.farm/🌵";
  //   plant.alt = "plant";
  //   plant.classList.add("plant");
  //   ground.append(plant)
  // }
  ground.setAttribute("data-aos", "fade-up");
  ground.setAttribute("data-aos-duration", "200");
  hero.append(ground);
}

/**
 * Hero text typing effect
 */
{
  var typewriter = new Typewriter(hero_text, {
    delay: 44,
  });

  typewriter.typeString("Welcome to Our Earth Day Celebration!").start();
}

/**
 * Special on view effects
 */
{
  AOS.init();
}

