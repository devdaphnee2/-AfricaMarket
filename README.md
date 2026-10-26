# AfriMarket

Site vitrine qui présente des produits africains (épices, miel, cosmétiques naturels, textile) avec leur origine, leur catégorie et un prix indicatif.

Projet pédagogique réalisé dans le cadre du TP Git en équipe : versionning avec Git et GitHub (commits, push, pull, résolution de conflit, tags et releases).

## Aperçu

Le site est statique (HTML, CSS, JavaScript, sans serveur) et évolue en trois versions :

| Version | Contenu |
|---------|---------|
| v1.0.0 | Vitrine de 3 pages : accueil, produits, contact |
| v2.0.0 | Catalogue dynamique chargé depuis un fichier JSON, avec recherche et filtre |
| v3.0.0 | Site adaptatif (mobile), formulaire validé, mini-panier et mise en ligne |

Le détail des changements est dans [CHANGELOG.md](CHANGELOG.md).

## Équipe

| Membre | Rôle | Responsabilités |
|--------|------|-----------------|
| [Awa] ([@pseudo-github](https://github.com/pseudo-github)) | Chef de projet | Dépôt, structure, README, versions et étiquettes |
| [Brice] ([@pseudo-github](https://github.com/pseudo-github)) | Contenu et données | Page produits, fichier JSON, affichage dynamique, panier |
| [Carine] ([@pseudo-github](https://github.com/pseudo-github)) | Design et contact | Feuille de style, page contact, filtres, adaptation mobile |

## Lancer le site

### Cloner le dépôt

```bash
git clone https://github.com/[NOM_DU_PROPRIETAIRE]/afrimarket.git
cd afrimarket
```

### Version 1.0.0

Ouvrez simplement `index.html` dans votre navigateur.

### Versions 2.0.0 et suivantes

Le chargement du fichier JSON avec `fetch` ne fonctionne pas en ouvrant le fichier directement (`file://`). Deux solutions :

- l'extension **Live Server** de Visual Studio Code ;
- ou un petit serveur local :

```bash
python -m http.server 8000
```

puis ouvrez http://localhost:8000.

## Site en ligne

[À ajouter à la v3.0.0 : https://nom-utilisateur.github.io/afrimarket/]

## Structure du projet

```
afrimarket/
├── index.html
├── produits.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── produits.js
│   ├── recherche.js
│   ├── filtre.js
│   ├── panier.js
│   └── contact.js
├── data/
│   └── produits.json
├── images/
├── README.md
├── CHANGELOG.md
└── .gitignore
```

## Convention des messages de commit

Messages en français, au présent, de moins de 70 caractères, avec un préfixe : `feat:`, `fix:`, `style:`, `docs:`, `chore:`.

## Crédits

Images libres de droits (par exemple Wikimedia Commons).