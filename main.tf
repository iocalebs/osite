terraform {
    required_providers {
        github = {
            source  = "integrations/github"
            version = "~> 6.0"
        }
    }
}

resource "github_repository" "public_repo" {
    name        = "www"
    description = "Company website source"
    visibility  = "public"
}
