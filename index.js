let data;

function setData(d) {
  data = d;
}

function loadData() {
  fetch("data.json")
    .then(res => res.json())
    .then(_data => setData(_data))
    .then(createCard);
}

function createCard() {
  const root = document.getElementById("root"); // get the root node to insert into
  data.forEach(element => {
    console.log(element);
    const {id, title, description, example} = element;
    //
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.id = `card-${id}`;

    //
    const header = document.createElement("h3");
    header.innerText = `Command: ${title}`;

    //
    const paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = `Example command: <b>${example}</b>`;

    const descText = document.createElement('p');
    descText.innerText = `Details: ${description}`


    //
    cardContainer.appendChild(header);
    cardContainer.append(descText)
    cardContainer.append(paragraphElement);

    root.appendChild(cardContainer);
  });
}




function search(){
  
}