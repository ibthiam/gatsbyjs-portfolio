---
title: Base de données non joignable
description: Détection & correction de l'erreur "Database not found" lors de l'installation de eSAW
date: 2022-04-23
draft: false
slug: /pensieve/db-non-joignable
tags:
  - eSAW
  - MSSQL
---

## Problème

Ici, il est question de la version `21.31.0.1504` de la solution.

Lors de l'exécution du fichier `manifest.xml` pour une installation ou une mise à jour, il est possible de faire face aux retours suivants:

```bash
...
```

Cela implique tout simplement que la base de données n'est actuellement pas joignable ou que l'utilisateur via lequel la solution utilise pour se connecter au serveur de DB ne dispose pas du rôle `dbCreator`. 

## Solution

En fonction de la nature du problème, plusieurs possibilité de diagnostic sont utilisable.

### Vérifier que la base de données est accessible

[À compléter]

### Accorder à l'utilisateur de droit DbCreator

[À compléter]