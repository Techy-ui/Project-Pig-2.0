
const humanTraitsMap = {
  male:{
    image: "/match/male.png"
  },
  "Confident & Bold": {
    traits: "Natural leader, assertive, dominant.",
    message: "You don’t just love — you protect, lead, and light up their world."
  },
  "Wise & Observant": {
    traits: "Thinks deeply, quiet, calm decision maker.",
    message: "You love with patience, speak through actions, and always know what your partner needs."
  },
  "Loyal & Friendly": {
    traits: "Warm-hearted, dependable, trustworthy.",
    message: "You give love like a loyal friend — steady, true, and endlessly kind."
  },
  "Independent & Curious": {
    traits: "Free-spirited, clever, selective.",
    message: "Your love is adventurous, clever, and knows exactly who deserves your heart."
  },
  "Clever & Witty": {
    traits: "Sharp, humorous, adaptable.",
    message: "Your love is clever, charming, and makes life feel like a rom-com that never ends."
  },
  "Patient & Calm": {
    traits: "Grounded, peaceful, slow but steady.",
    message: "You love gently, stay steady, and create a home in your heart for someone special."
  },
  "Free-spirited & Hardworking": {
    traits: "Driven, explorer, strong will.",
    message: "You chase dreams and love with a heart that never stops fighting."
  },
  "Quirky & Cooperative": {
    traits: "Fun, social, team-oriented.",
    message: "Your love is a joyful dance — playful, supportive, and always in sync."
  },
  "Fierce & Passionate": {
    traits: "Bold, relentless, ambitious.",
    message: "Your love burns bright and fierce, unstoppable and unforgettable."
  },
  "Sensitive & Gentle": {
    traits: "Soft, empathetic, caring.",
    message: "You offer a gentle love — comforting, kind, and deeply true."
  }
};

const animals = {
  male: [
    {
      name: "Leo the Lion",
      traits: "Natural leader, assertive, dominant.",
      message: "Leo would fight the world for your heart — and purr for your touch.",
      personality: "Confident & Bold",
      image: "/match/lion.jpg"
    },
    {
      name: "Oliver the Owl",
      traits: "Thinks deeply, quiet, calm decision maker.",
      message: "Oliver sees the beauty in your soul — and will cherish your heart in silence.",
      personality: "Wise & Observant",
      image: "/match/owl.jpeg"
    },
    {
      name: "Max the Dog",
      traits: "Warm-hearted, dependable, trustworthy.",
      message: "Max is loyal to the core — a friend and lover you can always count on.",
      personality: "Loyal & Friendly",
      image: "/match/dog.jpg"
    },
    {
      name: "Charlie the Cat",
      traits: "Free-spirited, clever, selective.",
      message: "Charlie loves on his own terms — curious and fiercely independent.",
      personality: "Independent & Curious",
      image: "/match/cat.jpg"
    },
    {
      name: "Fiona the Fox",
      traits: "Sharp, humorous, adaptable.",
      message: "Fiona is witty and playful — always ready to make you smile.",
      personality: "Clever & Witty",
      image: "/match/fox.jpg"
    },
    {
      name: "Tommy the Turtle",
      traits: "Grounded, peaceful, slow but steady.",
      message: "Tommy believes steady love wins the race — patient and true.",
      personality: "Patient & Calm",
      image: "/match/turtle.jpg"
    },
    {
      name: "Hank the Horse",
      traits: "Driven, explorer, strong will.",
      message: "Hank runs wild with passion, never giving up on love or dreams.",
      personality: "Free-spirited & Hardworking",
      image: "/match/horse.jpg"
    },
    {
      name: "Perry the Penguin",
      traits: "Fun, social, team-oriented.",
      message: "Perry’s love is a joyful adventure — always playful and loyal.",
      personality: "Quirky & Cooperative",
      image: "/match/penguin.jpg"
    },
    {
      name: "Tyson the Tiger",
      traits: "Bold, relentless, ambitious.",
      message: "Tyson’s love is fierce and unstoppable — a fire that never dies.",
      personality: "Fierce & Passionate",
      image: "/match/tiger.jpg"
    },
    {
      name: "Benny the Rabbit",
      traits: "Soft, empathetic, caring.",
      message: "Benny’s love is gentle and sweet — a warm embrace on a cold day.",
      personality: "Sensitive & Gentle",
      image: "/match/rabbit.jpg"
    }
  ],
  female: [
    {
      name: "Leona the Lioness",
      traits: "Natural leader, assertive, dominant.",
      message: "Leona leads with grace and passion — a queen who loves fiercely.",
      personality: "Confident & Bold",
      image: "/match/lioness.jpg"
    },
    {
      name: "Luna the Owl",
      traits: "Thinks deeply, quiet, calm decision maker.",
      message: "Luna believes love doesn't need loud words — just soulful silence under moonlight.",
      personality: "Wise & Observant",
      image: "/match/owl2.jpg"
    },
    {
      name: "Bella the Dog",
      traits: "Warm-hearted, dependable, trustworthy.",
      message: "Bella is your forever loyal companion — loving with all her heart.",
      personality: "Loyal & Friendly",
      image: "/match/dog.jpg"
    },
    {
      name: "Cleo the Cat",
      traits: "Free-spirited, clever, selective.",
      message: "Cleo loves with curious eyes — selective, clever, and charming.",
      personality: "Independent & Curious",
      image: "/match/cat.jpg"
    },
    {
      name: "Fia the Fox",
      traits: "Sharp, humorous, adaptable.",
      message: "Fia charms and winks her way into your heart with clever wit.",
      personality: "Clever & Witty",
      image: "/match/fox.jpg"
    },
    {
      name: "Tina the Turtle",
      traits: "Grounded, peaceful, slow but steady.",
      message: "Tina’s love is steady and calm — the rock you can always lean on.",
      personality: "Patient & Calm",
      image: "/match/turtle.jpg"
    },
    {
      name: "Holly the Horse",
      traits: "Driven, explorer, strong will.",
      message: "Holly runs free and wild — a loving spirit with unstoppable drive.",
      personality: "Free-spirited & Hardworking",
      image: "/match/horse.jpg"
    },
    {
      name: "Penny the Penguin",
      traits: "Fun, social, team-oriented.",
      message: "Penny’s love is playful and warm — a friend and partner all in one.",
      personality: "Quirky & Cooperative",
      image: "/match/penguin.jpg"
    },
    {
      name: "Tigra the Tiger",
      traits: "Bold, relentless, ambitious.",
      message: "Tigra’s love is fierce and unforgettable — a flame that never fades.",
      personality: "Fierce & Passionate",
      image: "/match/tiger.jpg"
    },
    {
      name: "Ruby the Rabbit",
      traits: "Soft, empathetic, caring.",
      message: "Ruby’s love is gentle and pure — a comforting hug when you need it most.",
      personality: "Sensitive & Gentle",
      image: "/match/rabbit.jpg"
    }
  ]
};



function matchAnimal() {
  const params = new URLSearchParams(window.location.search);

  const name = params.get("name") || "You";
  const age = params.get("age");
  const food = params.get("food");
  const hobbies = params.get("hobbies");
  const personality = params.get("personality");
  const gender = params.get("gender")?.toLowerCase();
  const photoURL = params.get("photoURL"); 

  document.getElementById("userName").textContent = name;
  document.getElementById("userAge").textContent = age ? `Age: ${age}` : "";
  document.getElementById("userFood").textContent = food ? `Loves: ${food}` : "";
  document.getElementById("userHobbies").textContent = hobbies ? `Hobbies: ${hobbies}` : "";
  document.getElementById("userPersonality").textContent = personality ? `Personality: ${personality}` : "";

  const userPhoto = document.getElementById("userPhoto");
  if (photoURL) {
    userPhoto.src = photoURL;
  } else {
    userPhoto.src = gender === "female" ? "/match/female.png" : "/match/man.png";
  }

  const human = humanTraitsMap[personality];
  if (human) {
    document.getElementById("userTraits").textContent = "Traits: " + human.traits;
    document.getElementById("userMessage").textContent = human.message;
  } else {
    document.getElementById("userTraits").textContent = "Traits: Unique in every way.";
    document.getElementById("userMessage").textContent = "You’re unmatchable — in the best way possible!";
  }

 
  if (gender === "female") oppositeGender = "male";
  else if (gender === "male") oppositeGender = "female";

  const possibleAnimals = animals[oppositeGender] || [...animals.male, ...animals.female];

  let match = possibleAnimals.find(a => a.personality === personality);

  
  if (!match) {
    match = possibleAnimals[Math.floor(Math.random() * possibleAnimals.length)];
  }

  document.getElementById("animalName").textContent = match.name;
  document.getElementById("animalTraits").textContent = "Traits: " + match.traits;
  document.getElementById("animalMessage").textContent = match.message;
  document.getElementById("animalImg").src = match.image;

  addMatchButtons()
}

function addMatchButtons() {
  if (document.getElementById("confirmBtn")) return;

  const animalCard = document.querySelector(".animal-card");

  const btnContainer = document.createElement("div");
  btnContainer.style.marginTop = "20px";
  btnContainer.style.textAlign = "center";

 
  const confirmBtn = document.createElement("button");
  confirmBtn.id = "confirmBtn";
  confirmBtn.textContent = "Confirm ❤️";
  confirmBtn.style.marginRight = "15px";
  confirmBtn.style.padding = "10px 20px";
  confirmBtn.style.cursor = "pointer";

  
  const dislikeBtn = document.createElement("button");
  dislikeBtn.id = "dislikeBtn";
  dislikeBtn.textContent = "Dislike ❌";
  dislikeBtn.style.padding = "10px 20px";
  dislikeBtn.style.cursor = "pointer";
  dislikeBtn.style.position = "relative";

  btnContainer.appendChild(confirmBtn);
  btnContainer.appendChild(dislikeBtn);
  animalCard.appendChild(btnContainer);

  
  confirmBtn.addEventListener("click", () => {
    alert("Match confirmed! ❤️ Congrats!");
  });


  let dislikeClickCount = 0;
  let isDodging = false;
  let lastMouseMoveTime = Date.now();

  dislikeBtn.addEventListener("click", () => {
    dislikeClickCount++;
    if (dislikeClickCount === 1) {
      alert("Take another chance! ❤️");
    }
  });


  
  function dodgeButton() {
    const parentRect = dislikeBtn.parentElement.getBoundingClientRect();
    const btnRect = dislikeBtn.getBoundingClientRect();

    const maxX = parentRect.width - btnRect.width;
    const maxY = parentRect.height - btnRect.height;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    dislikeBtn.style.position = "absolute";
    dislikeBtn.style.left = `${newX}px`;
    dislikeBtn.style.top = `${newY}px`;
  }

  dislikeBtn.addEventListener("mousemove", (e) => {
    lastMouseMoveTime = Date.now();

    if (dislikeClickCount < 2) return;

    if (!isDodging) {
      isDodging = true;
      dodgeButton();
    }
  });
  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMouseMoveTime = Date.now();
  });

  setInterval(() => {
    if (dislikeClickCount < 2) return;

    const now = Date.now();
    if (now - lastMouseMoveTime > 1000 && isDodging) {
      const parentRect = dislikeBtn.parentElement.getBoundingClientRect();

      let relativeX = mouseX - parentRect.left - dislikeBtn.offsetWidth / 2;
      let relativeY = mouseY - parentRect.top - dislikeBtn.offsetHeight / 2;

     
      relativeX = Math.max(0, Math.min(relativeX, parentRect.width - dislikeBtn.offsetWidth));
      relativeY = Math.max(0, Math.min(relativeY, parentRect.height - dislikeBtn.offsetHeight));

      dislikeBtn.style.left = `${relativeX}px`;
      dislikeBtn.style.top = `${relativeY}px`;
      dislikeBtn.style.position = "absolute";

      isDodging = false; 
    }
  }, 200);

}
let dislikeAttempts = 0;
    const dislikeBtn = document.getElementById("dislikeBtn");
    const confirmBtn = document.getElementById("confirmBtn");
    const messageBox = document.getElementById("dislikeMessage");

    let restoreTimeout;

    dislikeBtn.addEventListener("mouseenter", () => {
  if (dislikeAttempts >= 3) {
    const maxX = window.innerWidth - dislikeBtn.offsetWidth - 20;
    const maxY = window.innerHeight - dislikeBtn.offsetHeight - 20;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    dislikeBtn.style.position = "fixed"; 
    dislikeBtn.style.left = `${x}px`;
    dislikeBtn.style.top = `${y}px`;
  }
});

    dislikeBtn.addEventListener("click", () => {
  dislikeAttempts++;

  let alertMessage = "";

  if (dislikeAttempts === 1) {
    alertMessage = "Take another chance. You might regret skipping!";
  } else if (dislikeAttempts === 2) {
    alertMessage = "This button won’t let you give up so easily!";
  } else if (dislikeAttempts === 3) {
    alertMessage = "😏 Not so fast. Try clicking again!";
  } else if (dislikeAttempts >= 4) {
    alertMessage = "🔥 Roasted: Even the animals deserve better!";
    dislikeBtn.disabled = true;
  }

  alert(alertMessage);

  clearTimeout(restoreTimeout);
  restoreTimeout = setTimeout(() => {
    dislikeBtn.style.left = "0px";
    dislikeBtn.style.top = "0px";
  }, 3000);
});

confirmBtn.addEventListener("click", () => {
  alert("🎉 Match confirmed! Love is in the air!");
});


window.onload = matchAnimal;