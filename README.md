# LOMER Ewen - Ingésup B3

L'application a été developpé et testé sur le system Android
L'application est entièrement fonctionnelle uniquement sur smartphone Android elle n'a pas été testé sur le système IOS

Pour lancer l'application :

```bash
$ npm install
ou
$ ionic prepare
```

puis

```bash
ionic cordova run android
```

ou bien pour une version web (/!\ certaines fonctionnalités ne seront pas disponibles)

```bash
ionic Pizzaservice
```

### Le panier n'est pas encore fonctionnel



This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.
