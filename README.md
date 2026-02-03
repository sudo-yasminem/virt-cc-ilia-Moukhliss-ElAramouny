# [![ESIREM](https://esirem.u-bourgogne.fr/wp-content/uploads/2024/06/logo-polytech-ub-300x150-1.png)](https://esirem.u-bourgogne.fr/)
# Projet - Virtualisation & Cloud Computing

## Équipe projet
Yasmine MOUKHLISS - 4A ILIA 2 - https://github.com/sudo-yasminem

Cyrine EL ARAMOUNY - 4A ILIA 2 - https://github.com/CyrineElAramouny 

## Sujet 

Le projet consiste à concevoir et déployer une **Calculatrice Cloud Native** de bout en bout.
L’objectif est de définir l’infrastructure en IaC avec **Terraform**, de configurer le déploiement avec **Kubernetes**, puis de développer l’application sous forme de **microservices (frontend, backend, consumer)** et de construire/publier les images de conteneurs dans **Google Artifact Registry**.

Pour plus de détail, voici le [sujet détaillé fourni](https://github.com/JeromeMSD/module_virtualisation-et-cloud-computing/blob/main/projet.md#sujet-du-projet).

### Infrastructure avec Terraform
Nous avons utilisé Terraform pour automatiser la création d'une infrastructure sur Scaleway, incluant un cluster Kubernetes, des registres de conteneurs et la gestion DNS.
Plus d'informations sur le [README de foundation](https://github.com/sudo-yasminem/virt-cc-ilia-Moukhliss-ElAramouny/blob/v2.0/foundation/README.md).

### Conteneur Kubernetes
Kubernetes nous permet d'orchestrer le déploiement applicatif et son architecture en microservices. L'ensemble est sécurisé dans un namespace dédié et exposé via Ingress.
Plus d'informations sur le [README de Kubernetes](https://github.com/sudo-yasminem/virt-cc-ilia-Moukhliss-ElAramouny/blob/v2.0/kubernetes/README.md).

### Application : frontend, backend, consumer
Pour le frontend, nous avons utilisé HTML et CSS pour créer un visuel simple de calculatrice. Plus d'informations sur le [README du front](https://github.com/sudo-yasminem/virt-cc-ilia-Moukhliss-ElAramouny/blob/v2.0/application/frontend/README.md).

Pour le backend, nous avons utilisé JavaScript avec Node.js. Plus d'informations sur le [README du back](https://github.com/sudo-yasminem/virt-cc-ilia-Moukhliss-ElAramouny/blob/v2.0/application/backend/README.md).

