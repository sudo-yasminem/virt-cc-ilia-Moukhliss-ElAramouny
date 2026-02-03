# Partie kubernetes
Ce dossier regroupe l'ensemble des manifestes YAML nécessaires au déploiement de la calculatrice Cloud Native dans le cluster.

L'application est segmentée en plusieurs microservices isolés dans le namespace `moukhliss-elaramouny`. 

## Composants déployés :
- Frontend : interface utilisateur
- Backend (API) : point d'entrée des calculs, communique avec Redis et RabbitMQ
- Consumer : effectue les calculs récupérés depuis la file d'attente
- Redis : base de données pour le stockage des résultats
- RabbitMQ : gestion des files d'attentes

## Configuration des ressources : 
Comme demandé dans le sujet, chaque conteneur est limité en ressources pour optimiser l'usage du cluster :
- cpu : "4m"
- memory : "32Mi"

## Ingress
Nous utilisons un objet Ingress avec `nginx` pour exposer nos services sur le web. 

Notre URL est la suivante : `calculatrice-moukhliss-elaramouny.polytech-dijon.kiowy.net`

Cette URL doit renvoyer vers le Frontend, et si on rajoute `/api`, elle doit nous diriger vers le Backend.

## Déploiement
Pour déployer l'environnement, il fallait d'abord créer notre namespace avec la commande suivante : 
`kubectl create namespace moukhliss-elaramouny`

Puis pour faire en sorte que toutes les commandes suivantes soient réalisées dans notre namespace : 
`kubectl config set-context --current --namespace=moukhliss-elaramouny`

Ensuite avec `nano`, le fichier replicaset.yaml pouvait être créer et configurer avec les informations nécessaires. Il faut ensuite appliquer les manifests avec : `kubectl apply -f replicaset.yaml`

Pour créer ensuite le service directement à partir du replicaset, il suffit de faire la commande suivante : 
`kubectl expose replicaset replicaset`
