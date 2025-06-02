terraform {
    required_providers {
        github = {
            source  = "integrations/github"
            version = "~> 6.0"
        }
        vercel = {
            source  = "vercel/vercel"
            version = "~> 3.0"
        }
    }
}

provider "github" {
    // Would prefer to host under the infotecho organization
    // but I'm not prepared to pay for Vercel Pro just yet
    owner = "iocalebs"
}

resource "github_repository" "osite" {
    name        = "osite"
    description = "O-Site: InfoTech Ottawa website"
    has_issues = true // hey we've all got issues
    visibility  = "public"
}

resource "vercel_project" "osite" {
  name = "osite"
  git_repository = {
    type = "github"
    repo = github_repository.osite.full_name
  }
}