// Define human personality traits and messages
const humanTraitsMap = {
  "Mysterious & Calm": {
    traits: "Observant, introverted, deep thinker.",
    message: "You may not speak much, but your vibes are louder than words."
  },
  "Playful & Loyal": {
    traits: "Fun-loving, dependable, brings joy to others.",
    message: "You're the friend everyone wishes they had — and the partner everyone deserves."
  },
  "Lazy but Loving": {
    traits: "Chill, cozy, emotionally deep.",
    message: "Why run when we can cuddle and nap through life together?"
  },
  "Fiery & Passionate": {
    traits: "Energetic, expressive, intense.",
    message: "Your presence is a full-on firework show... every single day."
  },
  "Elegant & Sassy": {
    traits: "Stylish, clever, bold with grace.",
    message: "You don’t chase love. Love lines up politely and waits its turn."
  }
};

// Define list of animals to match with
const animals = [
  {
    name: "Luna the Owl",
    traits: "Wise, introverted, excellent listener.",
    message: "Luna believes deep connections are built in silence.",
    personality: "Mysterious & Calm",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Barn_owl_%28Tyto_alba%29_flight.jpg"
  },
  {
    name: "Gary the Giraffe",
    traits: "Tall, awkward, always looks out for others.",
    message: "Gary loves long walks and high views of the future.",
    personality: "Playful & Loyal",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg"
  },
  {
    name: "Sasha the Sloth",
    traits: "Relaxed, cuddly, loyal for life.",
    message: "Sasha says love is best when it's slow and sweet.",
    personality: "Lazy but Loving",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Bradypus.jpg"
  },
  {
    name: "Rocky the Raccoon",
    traits: "Curious, bold, night adventurer.",
    message: "Rocky says he may steal your food, but he’ll never steal your trust.",
    personality: "Fiery & Passionate",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Raccoon_procyon_lotor.jpg"
  },
  {
    name: "Bella the Bunny",
    traits: "Energetic, loving, shy but sweet.",
    message: "Bella says love is a field full of clovers and cuddles.",
    personality: "Elegant & Sassy",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Rabbit_in_montana.jpg"
  }
];

// Main function to fill data after page loads
function matchAnimal() {
  const params = new URLSearchParams(window.location.search);

  // Extract user input from form
  const name = params.get("name") || "You";
  const age = params.get("age");
  const food = params.get("food");
  const hobbies = params.get("hobbies");
  const personality = params.get("personality");

  // Fill human profile card (left)
  document.getElementById("userName").textContent = name;
  document.getElementById("userAge").textContent = age ? `Age: ${age}` : "";
  document.getElementById("userFood").textContent = food ? `Loves: ${food}` : "";
  document.getElementById("userHobbies").textContent = hobbies ? `Hobbies: ${hobbies}` : "";
  document.getElementById("userPersonality").textContent = personality ? `Personality: ${personality}` : "";

  // Add human traits & quote
  const human = humanTraitsMap[personality];
  if (human) {
    document.getElementById("userTraits").textContent = "Traits: " + human.traits;
    document.getElementById("userMessage").textContent = human.message;
  } else {
    document.getElementById("userTraits").textContent = "Traits: Unique in every way.";
    document.getElementById("userMessage").textContent = "You’re unmatchable — in the best way possible!";
  }

  // Match animal by same personality, else random one
  let match = animals.find(a => a.personality === personality);
  if (!match) {
    match = animals[Math.floor(Math.random() * animals.length)];
  }

  // Fill animal profile card (right)
  document.getElementById("animalName").textContent = match.name;
  document.getElementById("animalTraits").textContent = "Traits: " + match.traits;
  document.getElementById("animalMessage").textContent = match.message;
  document.getElementById("animalImg").src = match.image;
}

// Run on page load
window.onload = matchAnimal;
