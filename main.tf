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

resource "vercel_project_domain" "apex_en" {
  project_id = vercel_project.osite.id
  domain     = "infotechottawa.ca"
}

resource "vercel_project_domain" "www_en" {
  project_id = vercel_project.osite.id
  domain     = "www.infotechottawa.ca"
  redirect = vercel_project_domain.apex_en.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "apex_fr" {
  project_id = vercel_project.osite.id
  domain     = "infothequeottawa.ca"
}

resource "vercel_project_domain" "www_fr" {
  project_id = vercel_project.osite.id
  domain     = "www.infothequeottawa.ca"
  redirect = vercel_project_domain.apex_fr.domain
  redirect_status_code = 308
}