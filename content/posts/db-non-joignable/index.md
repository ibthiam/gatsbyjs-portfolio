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

Pour faire ce diagnostique, vous pouvez utiliser l'outil `sqlcmd` afin de vous connectez à la base de données en utilisant `Windows PowerShell`.

```shell
sqlcmd -S $ip\$instance,$port -U $utilisateur -P $motDePasse 

```

Si l'outil ne réussi pas à connecter, c'est que les identifiants de connexion que vous utilisez sont incorrectes.

### Accorder à l'utilisateur de droit DbCreator

Une fois que les identifiants sont corrects, et l'instance accessible. Il faut vous assurer que l'utilisateur dispose du privilège `dbCreator`. 

Cette information peut venir du responsable de l'environnement dans le cas d'un client. Dans le cas ou, le serveur de base de données est accessible,  vous pouvez le faire vous même.

