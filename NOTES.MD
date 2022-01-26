- Pourquoi tester lorsque l’on fait du développement?
```angular2html
S'assurer que l'application fonctionne toujours comme prévu malgré des évolutions dans le code
```

- Quels sont les différents types de tests en développement?
```angular2html
    - Les tests unitaires sont en général très simples à mettre en œuvre (à condition de ne pas attendre que le code soit complètement endetté).
Fonctionnant en isolation, l’environnement d’exécution est relativement simple à mettre en place (stubs / mocks). Très proches du code, ils
sont ensuite naturellement maintenus (à l’aide du refactoring).

    - Les tests d’intégration sont assez simples également (on parle de tests d’intégration au sein d’une application, pas entre applications).
On s’affranchit des contraintes majeures (IHM, certaines dépendances). Il sont également assez proches du code, ce qui facilite leur refactoring. 
Cependant, ils couvrent un spectre plus large de code et de ce fait, ont davantage de risques d’être impactés par une modification.

    - Les tests de bout en bout ou d’IHM sont plus complexes à mettre en œuvre, car ils nécessitent le déploiement d’un environnement complet.
La présence des dépendances et les jeux de données sont généralement un casse-tête : instabilités dues à des rechargements depuis la (pré)prod,
modifications par d’autres équipes, … Ces éléments rendent ce type de test très fragile et induisent un coût de maintenance important 
(analyse des builds en erreur, maintien de l’environnement et des données).
```

- Qu’est ce que la pyramide des tests ?
```angular2html
Rappelle aux développeurs de construire leurs tests sur différents niveaux de granularité. (aide précieuse dans la définition de votre stratégie de test.)
Elle prend plusieurs facteurs : la quantitée de tests, son cout et sa précision/fiabilité/rapidité
```

- Que sont l’intégration continue et le déploiement continu ?
```angular2html
C'est le fait de vérifié le bon fonctionnement du code à chaque étapes de developpement
pour s'assurer le bon fonctionnement.
```