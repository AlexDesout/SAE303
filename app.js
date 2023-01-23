
const latMMI = 43.6189889;
const longMMI = 2.2604808;

// tp4 : création de la carte
//                      dans la div "carte"
//                      avec une liste d'options (ici son centre et son niveau de zoom) :
let cartePhotos = L.map('carte',
    {   center: [latMMI,longMMI],
        zoom:8 } );
// choix de fond de carte, par exemple OpenStreetMap
let fondCarte = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                            {
                            } );
fondCarte.addTo(cartePhotos);


const deplacementPromesse = fetch('json/deplacements-presidents-republique-et-premiers-ministres-depuis-1945.json');

// première réussite de la promesse photosPromesse :
deplacementPromesse.then(reponse => {
    // lecture du json :
    return reponse.json();
})

.then(deplacementJson => {
    // accès à une valeur :
    console.log('Lecture dans le json : ');
    console.log(deplacementJson[0]);
    console.log(deplacementJson[0].geometry);
    console.log(deplacementJson[0].geometry.coordinates[1]);

    let m=0;
    while(m<deplacementJson.length) {
        console.log(deplacementJson[m].geometry.coordinates);
        console.log(L);
    // tp4 : méthode marker et ses paramètres :
        let marqueur = L.marker(deplacementJson[m].geometry.coordinates);
        marqueur.addTo(cartePhotos);
        // tp4 : texte popup :
        // marqueur.bindPopup(`<img src="${deplacementJson[m].fichierImg}" style="height: 150px; width: 200px"> <br> ${deplacementJson[m].descImg.alt} `).openPopup();
        // marqueur.bindPopup( localStorage.getItem(m));
        m=m+1;
    }
    
});

