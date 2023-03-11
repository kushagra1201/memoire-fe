const cardContainer = document.querySelector('.card-container');

const cardData = [
  {heading: "Heading 1", content: "This is the content", id: 1}, 
  {heading: "Heading 2", content: "This is the second content", id: 2}
];

const createNotes = (array) => {
  array.forEach(cardObj => {
    const {heading, content, id} = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insidehtml = `<div class="card-header"><div class="card-heading">${heading}</div><div class="edit-note"><img src="../../assets/edit-note-icon.png" alt="Edit"></div></div><div class="card-content">${content}</div>`;

    card.innerHTML = insidehtml;

    cardContainer.appendChild(card);
  })
};

createNotes(cardData);