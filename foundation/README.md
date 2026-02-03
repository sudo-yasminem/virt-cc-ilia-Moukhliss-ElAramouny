# Partie Terraform



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
