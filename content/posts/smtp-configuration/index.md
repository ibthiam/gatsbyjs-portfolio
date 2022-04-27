---
title: SMTP Configuration
description: Configuration de la connexion SMTP
date: 2022-04-25
draft: false
slug: /pensieve/smtp-configuration
tags:
  - eSAW
  - SMTP
---

## Information

Ici, il est question de la version `21.31.0.1504` de la solution.

Il s'agit de la configuration du lien entre eSAW et un serveur de messagerie disponible et accessible.

Afin d'appliquer cette configuration, il faut accéder au fichier `manifest.xml`, trouver le noeud `...` puis y placer la configuration suivante:

```xml:title=.../manifest.xml
<Email>
  <administratorEMailAddressesSeparatedBySemicolon>example@example.com</administratorEMailAddressesSeparatedBySemicolon>
  <smtpfrom>noreply@example.com</smtpfrom>
  <smtpnetworkhost>example.example.net</smtpnetworkhost>
	<smtpnetworkport>25</smtpnetworkport>
  <smtpnetworkenableSsl>*0*</smtpnetworkenableSsl>
  <smtpnetworkauthenticationtype>none</smtpnetworkauthenticationtype>
  <smtpnetworkauthenticationbasicusername></smtpnetworkauthenticationbasicusername>
  <smtpnetworkauthenticationbasicpassword></smtpnetworkauthenticationbasicpassword>
</Email>
```

[À compléter]
