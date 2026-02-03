# Partie fondation - IaC avec Terraform
Ce dossier contient la configuration Terraform qui permet de provisionner l'infrastructure de notre calculatrice Cloud Native sur Scaleway.

## Résultat de la commande `terraform plan`

```hcl
terraform plan
var.project_id
  Projet Cloud

  Enter a value: 11111111-1111-1111-1111-111111111111

Terraform used the selected providers to generate the following execution plan.
Resource actions are indicated with the following symbols:
  + create
Terraform will perform the following actions:
  # scaleway_instance_ip.public_ip will be created
  + resource "scaleway_instance_ip" "public_ip" {
      + address         = (known after apply)
      + id              = (known after apply)
      + organization_id = (known after apply)
      + prefix          = (known after apply)
      + project_id      = "11111111-1111-1111-1111-111111111111"
      + reverse         = (known after apply)
      + server_id       = (known after apply)
      + type            = (known after apply)
    }

  # scaleway_instance_ip.public_ip_backup will be created
  + resource "scaleway_instance_ip" "public_ip_backup" {
      + address         = (known after apply)
      + id              = (known after apply)
      + organization_id = (known after apply)
      + prefix          = (known after apply)
      + project_id      = "11111111-1111-1111-1111-111111111111"
      + reverse         = (known after apply)
      + server_id       = (known after apply)
      + type            = (known after apply)
    }

  # scaleway_instance_server.web will be created
  + resource "scaleway_instance_server" "web" {
      + boot_type                        = "local"
      + bootscript_id                    = (known after apply)
      + cloud_init                       = (known after apply)
      + enable_dynamic_ip                = false
      + id                               = (known after apply)
      + image                            = "ubuntu"
      + ip_id                            = (known after apply)
      + name                             = (known after apply)
      + organization_id                  = (known after apply)
      + placement_group_policy_respected = (known after apply)
      + project_id                       = "11111111-1111-1111-1111-111111111111"
      + protected                        = false
      + replace_on_type_change           = false
      + security_group_id                = (known after apply)
      + state                            = (known after apply)
      + type                             = "DEV1-L"
      + user_data                        = (known after apply)

      + filesystems (known after apply)

      + private_ips (known after apply)

      + public_ips (known after apply)

      + root_volume (known after apply)
    }

Plan: 3 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't guarantee
to take exactly these actions if you run "terraform apply" now.
```
## Difficultés : project_id

Nous avons rencontré des erreurs de validation au moment d'essayer `terraform plan`, ce qui nous a fait perdre un peu de temps. Nous avions tester plusieurs fois avec des project_id différent, mais le format n'était pas le bon. Après des recherches en rapport avec cette erreur, nous avons compris que le project_id attendu par Scaleway était sous format UUID. Sans ce format correct, Terraform rejetait automatiquement la configuration. 

Pour résoudre ce problème et tester notre commande `plan`, nous avons donc pris une valeur aléatoire de project_id, comme vous pouvez le voir dans le résultat de la commande dans la partie précédente.

Nous avons préféré garder cette version pour notre rendu final, même si nous avions compris que 2 alternatives se présentaient pour résoudre le problème d'ID et le fait de devoir le rentrer dans le terminal à chaque fois que la commande `plan` est lancée : 

- initialiser une valeur par défaut du project_id directement dans le `main.tf` : cette solution n'est pas très conseillée, puisque la valeur est donc coder en dur dans le code et il doit être modifié à chaque fois qu'on veut modifier l'ID; ce n'est donc pas une bonne pratique.
- créer un fichier `.tfvars` où on initialise une valeur de l'ID, cette fois le code n'a pas besoin d'être modifié pour changer l'ID, et dans ce cas là une bonne pratique serait de créer deux fichiers différents pour la prod et le dev avec des ID différents.
