// // var personnage1 = new Object();
// // personnage1.name = "Aragorne";
// // personnage1.house = "Gondor";
// // personnage1.weapon = "épée";

// // console.log(personnage1);
// // console.log(personnage1.name);
// // console.log(personnage1["name"]); // cette version est obligatoire pour les boucles

// // var personnage2 = {};
// // personnage2 = {
// //     "name": "Legolas", // pour le javascript les "" ne sont pas obligatoire mais comme on stock souvent les objets dans un fichier json on va les mettres d'office etant donné que le json à besoin de ces ""
// //     "house" : "Elronde",
// //     "weapon" : "Arc",
// // }

// // console.log(personnage2);

// // for(var key in personnage2){

// //     console.log(key + " : " + personnage2[key]);// le fait de mettre le nom de la variable(key) entre crochet et precedé de la variable fait qu'on obtient la valeur de la clé et pas seulement le nom de la clé

// // }
// var personnages = [personnage1, personnage2]
// // exo
// // afficher tout le contenu de personnages
// var personnage1 = {};
//     personnage1 = {
//         "name": "Aragorne",
//         "house": "Gondor",
//         "weapon": "épée",

//     }
// var personnage2 = {};
//     personnage2 = {
//         "name": "Legolas",
//         "house": "Elronde",
//         "weapon": "Arc",

//     }

// for(var key in personnage1, personnage2){
//     console.log(key + " : " + personnage1[key])
//     console.log(key + " : " + personnage2[key])

// }

// for (i=0;i<personnages.length; i++) {
//     console.log("mon perso "+personnages[i].name+"a les propriétés suivantes : ");
//     for (var key in personnages[i]) {
//         console.log(key+" "+personnages[i][key]);
//     }
// }
// for (i in personnages){
//     Object.values(personnages[i]).forEach(val => console.log(val));
// }

var DIList = {
    "stagiaires":[
        {
            "firstname":"Laurent",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Foued",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Jerome",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Sacha",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"Théo",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Manu",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Gaetan",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Lucas",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Pierre Henri",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Sebastien",
            "lastname":"Cardon",
            "age":26,
            "city":"Mons"
        },
        {
            "firstname":"Maxime",
            "lastname":"Godart-Hupet",
            "age":27,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};
