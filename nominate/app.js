const starsList = document.querySelector('#stars-list');

// create element & render campaign
function renderStar(doc){
    let li = document.createElement('li');
    let name = document.createElement('h4');
    let about = document.createElement('span');
    let coverImage = document.createElement('img');

    name.classList.add("name");
    about.classList.add("about");
    coverImage.classList.add("coverImage");

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    about.textContent = doc.data().about;
    coverImage.src = doc.data().image;

    li.appendChild(coverImage);
    li.appendChild(name);
    li.appendChild(description);

    campaignList.appendChild(li);
}

// getting data and updating data in realtime
db.collection('campaigns').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderCampaign(change.doc);
        } else if (change.type == 'removed'){
        }
    });
});
