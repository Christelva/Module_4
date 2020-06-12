const superheroes = [
  {
  "name": "Batman",
  "publisher": "DC Comics",
  "alter_ego": "Bruce Wayne",
  "first_appearance": "Detective Comics #27",
  "weight": "210"
  },
  {
  "name": "Superman",
  "publisher": "DC Comics",
  "alter_ego": "Kal-El",
  "first_appearance": "Action Comics #1",
  "weight": "220"
  },
  {
  "name": "Flash",
  "publisher": "DC Comics",
  "alter_ego": "Jay Garrick",
  "first_appearance": "Flash Comics #1",
  "weight": "195"
  },
  {
  "name": "Green Lantern",
  "publisher": "DC Comics",
  "alter_ego": "Alan Scott",
  "first_appearance": "All-American Comics #16",
  "weight": "186"
  },
  {
  "name": "Green Arrow",
  "publisher": "DC Comics",
  "alter_ego": "Oliver Queen",
  "first_appearance": "All-American Comics #16",
  "weight": "195"
  },
  {
  "name": "Wonder Woman",
  "publisher": "DC Comics",
  "alter_ego": "Princess Diana",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "165"
  },
  {
  "name": "Blue Beetle",
  "publisher": "DC Comics",
  "alter_ego": "Dan Garret",
  "first_appearance": "Mystery Men Comics #1",
  "weight": "145"
  },
  {
  "name": "Spider Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Peter Parker",
  "first_appearance": "Amazing Fantasy #15",
  "weight": "167"
  },
  {
  "name": "Captain America",
  "publisher": "Marvel Comics",
  "alter_ego": "Steve Rogers",
  "first_appearance": "Captain America Comics #1",
  "weight": "220"
  },
  {
  "name": "Iron Man",
  "publisher": "Marvel Comics",
  "alter_ego": "Tony Stark",
  "first_appearance": "Tales of Suspense #39",
  "weight": "250"
  },
  {
  "name": "Thor",
  "publisher": "Marvel Comics",
  "alter_ego": "Thor Odinson",
  "first_appearance": "Journey into Myster #83",
  "weight": "200"
  },
  {
  "name": "Hulk",
  "publisher": "Marvel Comics",
  "alter_ego": "Bruce Banner",
  "first_appearance": "The Incredible Hulk #1",
  "weight": "1400"
  },
  {
  "name": "Wolverine",
  "publisher": "Marvel Comics",
  "alter_ego": "James Howlett",
  "first_appearance": "The Incredible Hulk #180",
  "weight": "200"
  },
  {
  "name": "Daredevil",
  "publisher": "Marvel Comics",
  "alter_ego": "Matthew Michael Murdock",
  "first_appearance": "Daredevil #1",
  "weight": "200"
  },
  {
  "name": "Silver Surfer",
  "publisher": "Marvel Comics",
  "alter_ego": "Norrin Radd",
  "first_appearance": "The Fantastic Four #48",
  "weight": "unknown"
  }
  ] 
const heroNames = superheroes.map(function(x) {return x.name;});
console.log(heroNames)

const lightWeight = superheroes.filter(x => parseInt(x.weight)< 190)
console.log(lightWeight);

const heavyHeroName = superheroes.filter(x => parseInt(x.weight)< 190).map(function(x) {return x.name;});
console.log(heavyHeroName);

const firstAppearances = superheroes.map(function(x) {return x.first_appearance})
console.log(firstAppearances);

const fromDc = superheroes.filter( x => x.publisher == "DC Comics");
console.log(fromDc);

const fromMarvel = superheroes.filter( x => x.publisher == "Marvel Comics");
console.log(fromMarvel);

const dcHeroesWeight = superheroes.filter( x => x.publisher == "DC Comics").map(function(x){return x.weight}).reduce((a,b) => parseInt(a + b));
//waar if statement invoeren voor unkown?
//Hoe maak ik deze functie werkend?

  console.log(dcHeroesWeight);

  const heaviestHero = superheroes.map(function(x){return parseInt(x.weight)}.reduce((prev, curr) => {
    return Math.max(prev, curr)
  }));

  console.log(heaviestHero);