const pets = [
  {
    name: 'Katrine',
    img: 'src/img/pets-katrine.png',
    breed: 'Cat - British',
    description: 'Katrine is a gentle 1-year-old calico cat who loves curling up in sunny windowsills. She\'s independent but won\'t turn down a chin scratch or a cozy lap in the evening. Katrine would do best in a calm home where she can observe the world at her own pace.',
    age: '1 year',
    inoculations: false,
    diseases: false,
    parasites: false 
  },
  {
    name: 'Jennifer',
    img: 'src/img/pets-jennifer.png',
    breed: 'Dog - Labrador',
    description: 'Jenifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hestitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: false,
    diseases: false,
    parasites: false 
  },
  {
    name: 'Woody',
    img: 'src/img/pets-woody.png',
    breed: 'Dog - Retriever',
    description: 'Woody is a cheerful 4-year-old Golden Retriever mix who loves every person he meets. He enjoys long walks and playing fetch in the yard but is just as happy resting his head on your knee. Woody is house-trained and would make a loyal family companion.',
    age: '4 years',
    inoculations: 'Rabies',
    diseases: false,
    parasites: false 
  },
  {
    name: 'Sophia',
    img: 'src/img/sophia.png',
    breed: 'Dog - Bichon Frise',
    description: 'Sophia is a sweet 2-year-old Beagle with a nose for adventure. She loves sniffing around the garden and following interesting scents. Sophia is full of personality — she\'s gentle with kids and will happily curl up beside you after a good day of exploring.',
    age: '2 years',
    inoculations: 'DHPP',
    diseases: false,
    parasites: false 
  },
  {
    name: 'Jennifer',
    img: 'src/img/pets-jennifer.png',
    breed: 'Dog - Labrador',
    description: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hestitate to play up a storm in the house if she has all of her favorite toys.',
    age: '2 months',
    inoculations: false,
    diseases: false,
    parasites: false 
  },
  {
    name: 'Timmy',
    img: 'src/img/timmy.png',
    breed: 'Cat - British',
    description: 'Timmy is a playful 8-month-old tabby with endless curiosity. He\'s known for chasing feather toys and pouncing on anything that moves. Timmy gets along well with other friendly cats and would thrive in an active household ready to keep up with his kitten energy.',
    age: '8 months',
    inoculations: false,
    diseases: false,
    parasites: false 
  },
  {
    name: 'Charly',
    img: 'src/img/charly.png',
    breed: 'Dog - Beagle',
    description: 'Charly is an energetic 1.5-year-old Border Collie mix who needs room to run and a job to do. He learns tricks quickly and adores puzzle toys. Charly would thrive with an active owner who can provide daily exercise and mental stimulation.',
    age: '1.5 years',
    inoculations: 'Parvovirus',
    diseases: false,
    parasites: false 
  },
  {
    name: 'Scarlett',
    img: 'src/img/scarlet.png',
    breed: 'Dog - Beagle',
    description: 'Scarlett is a loving 5-month-old Staffordshire mix with a big heart and an even bigger smile. She loves squeaky toys and being included in family activities. Scarlett is loyal, affectionate, and ready to be your shadow — whether you\'re going for a hike or just watching TV on the couch.',
    age: '5 months',
    inoculations: 'Parainfluenza',
    diseases: false,
    parasites: false 
  },
  {
    name: 'Freddie',
    img: 'src/img/freddie.png',
    breed: 'Cat - British',
    description: 'Freddie is a laid-back 3-year-old black-and-white cat who enjoys long naps and gentle attention. He\'s the perfect companion for a quiet evening with a book. Freddie is fully litter-trained and loves watching birds from behind a safe screen.',
    inoculations: 'Rabies',
    diseases: false,
    parasites: false 
  },
]

function setupBurger() {
  const burgerButton = document.querySelector('.burger-container');
  const burgerOverlay = document.querySelector('.burger-menu');
  const body = document.querySelector('body');
  const ourPets = document.querySelector('.burger-menu :nth-child(2)');
  const helpTheShelter = document.querySelector('.burger-menu :nth-child(3)');
  const contacts = document.querySelector('.burger-menu :last-child');
  const overlay = document.querySelector('.overlay');
  const buttons = [ourPets, helpTheShelter, contacts, overlay];

  burgerButton.onclick = function() {
    burgerButton.classList.toggle('active-burger');
    burgerOverlay.classList.toggle('active-burger-menu');
    body.classList.toggle('body-disabled');

    buttons.forEach((item) => {
      item.onclick = function(){
        burgerButton.classList.remove('active-burger');
        burgerOverlay.classList.remove('active-burger-menu');
        body.style.overflowY = 'visible';
        body.classList.remove('body-disabled');
      }
    });

    if(burgerButton.classList.contains('active-burger')) body.style.overflowY = 'hidden';
    else body.style.overflowY = 'visible';
  }

}

setupBurger();

function createListPets() {
  const katrineContainer = document.getElementById('katrine');
  const jenniferContainer = document.getElementById('jennifer');
  const woodyContainer = document.getElementById('woody');

  const arrPets = [katrineContainer, jenniferContainer, woodyContainer];

  arrPets.forEach((item, index) => {

    const imgBlock = document.createElement('div');
    imgBlock.className = 'looking-cards-block-img-container';
    const img = document.createElement('img');
    img.src = pets[index].img;
    imgBlock.append(img);

    const textBlock = document.createElement('div');
    textBlock.className = 'looking-cards-block-name-container';
    const p = document.createElement('p');
    p.textContent = pets[index].name;
    textBlock.append(p);

    const buttonBlock = document.createElement('div');
    buttonBlock.className = 'looking-cards-block-button-container';
    const button = document.createElement('button');
    button.className = 'looking-cards-block-button white-button';
    button.textContent = 'Learn more';
    buttonBlock.append(button);

    item.append(imgBlock);
    item.append(textBlock);
    item.append(buttonBlock);
  })
}

createListPets();