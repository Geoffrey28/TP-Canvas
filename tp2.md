# Manipulation du canvas

[Documentation](https://developer.mozilla.org/fr/docs/Web/API/Canvas_API/Tutorial)

## Objectifs

* Manipuler l'api html *canvas*
* Utiliser la programmation orientée objet

## Instructions

L'exercice consistera à dessiner des rectangles et des cercles de couleurs différentes et de dimensions différentes dans le canvas.

### Création des classes

Créer les classes *Rectangle* et *Circle* qui hériteront d'une classe mère *Shape* qui contiendra toutes les propriétés communes entre ces classes (couleur et position x/y sur le canvas).

### Méthode draw

Créer dans les classes *Rectangle* et *Circle* une méthode *draw* qui permet de dessiner la forme dans le canvas.

### Créer des instances de Rectangle et de Circle

Créer manuellement quelques instances de Rectangle et Circle à des positions libres sur le canvas puis les dessiner.

### Fonction aléatoire

Dans un fichier *random.js*, créer une fonction *getRandomNumber* qui renvoie un nombre aléatoire compris entre un minimum et un maximum. Cette fonction doit être exportée puis importée là où on en a besoin.

### Créer des formes à des positions aléatoires

Lorsque l'on clique sur le canvas, créer une forme (Rectangle ou Circle) de dimensions et couleur aléatoires à la position correspondante à la souris.

### [BONUS] Formulaire de création

Créer un formulaire à côté du canvas qui permet de définir la forme (soit rectangle soit cercle), les dimensions (largeur/hauteur ou rayon) et la couleur de la forme. Lorsque l'on clique sur le canvas, une forme correspondant à tous ces paramètres doit être dessinée.