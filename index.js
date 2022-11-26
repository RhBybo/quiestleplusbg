// L'adresse de la page du projet(site)
const POST = 3000
const HOST = 'localhost'

// Appeler express
const express = require('express')
const app = express()

// Appeler d'autres modules ici :
const http = require('http')
//------------------------------

// Connecter un moteur de template
app.set('view engine', 'ejs')

// Ajouter le fichier main.css dans nos pages html/ejs
app.use(express.static(__dirname + '/public'))

// Ajouter des liens pour chaque fichier page html/ejs
app.get('/', (req, res) => {
    res.render('index') //Récuperer les données de ce fichier
})

// Créer un localhost/serveur
app.listen(POST, () => {
    console.log('Votre serveur est lancé : http://' + HOST + ':' + POST)
})