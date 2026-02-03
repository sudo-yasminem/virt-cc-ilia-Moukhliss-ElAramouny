variable "project_id" {
  type        = string
  description = "Projet Cloud"
}

terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  required_version = ">= 0.13"
}

provider "scaleway" {
  zone   = "fr-par-1"
  region = "fr-par"
}

resource "scaleway_instance_ip" "public_ip" {
  project_id = var.project_id
}

resource "scaleway_instance_ip" "public_ip_backup" {
  project_id = var.project_id
}

resource "scaleway_instance_server" "web" {
  project_id = var.project_id
  type       = "DEV1-L"
  image      = "ubuntu"

  ip_id = scaleway_instance_ip.public_ip.id
}