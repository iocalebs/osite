terraform {
    required_providers {
        github = {
            source  = "integrations/github"
            version = "~> 6.0"
        }
    }
}

provider "github" {
    owner = "infotecho"
}

resource "github_repository" "public_repo" {
    name        = "osite"
    description = "O-Site: InfoTech Ottawa website"
    visibility  = "public"
}
