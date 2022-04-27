---
title: LDAP Configuration
description: Configuration de la synchronisation LDAP
date: 2022-04-23
draft: false
slug: '/pensieve/ldap-configuration'
tags:
  - eSAW
  - LDAP
---

## Information

Ici, il est question de la version `21.31.0.1504` de la solution.

La synchronisation LDAP avec un AD pour une récupération en temps réel des utilisateurs, de leurs profils et de leurs identifiants avec la solution eSAW se fait, comme pour plusieurs autres configurations, avec le fichier `manifest.xml`.

Afin d'appliquer cette configuration, il faut accéder au fichier `manifest.xml`, trouver le noeud `versions` puis y placer la configuration suivante:
```xml:title=manifest.xml
<versions>
  ...
	<Plugins_AD_GroupsVersion>1.0.848.12229</Plugins_AD_GroupsVersion>
</versions>
```
Ensuite, trouver le noeud `OnPremise`, juste après le noeud `installProxy`, placer la configuration suivante:
```xml:title=manifest.xml
<OnPremise>
  ...
	<ActiveDirectoryPlugin> 
		<targetOrganizationName>example</targetOrganizationName> 
		<syncUniqueKey>email</syncUniqueKey> 
		<!-- valid values are email, username or sid --> 
		<ConnectionString>LDAP://example.example.net</ConnectionString> 
		<!-- <ConnectionString>LDAP://192.168.1.26</ConnectionString> --> 
		<Username>example\username</Username> 
		<Password>password</Password> 
		<ActiveDirectoryFilterQuery>OU=000,OU=000,OU=000,OU=000,DC=EXAMPLE,DC=EXAMPLE,DC=NET</ActiveDirectoryFilterQuery> 
		<PowerUserGroups>PowerUsersGroup</PowerUserGroups> 
		<UserManagerGroups>UserManagerGroup</UserManagerGroups> 
		<RegisteredSignerGroups>RegisteredSignerGroup</RegisteredSignerGroups> 
	</ActiveDirectoryPlugin>
  </OnPremise>
```


[À compléter]
