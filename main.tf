terraform {
    required_providers {
        github = {
            source  = "integrations/github"
            version = "~> 6.0"
        }
        sentry ={
          source = "jianyuan/sentry"
          version = "~> 0.14"
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
    description = "O-Site: Infotech Ottawa website"
    has_issues = true // hey we've all got issues
    visibility  = "public"
}

resource sentry_project "osite" {
  name = "O-Site"
  organization = "infotecho"
  teams = ["infotecho"]
  slug = "osite"
  platform = "javascript-solidstart"
  client_security = {
    allowed_domains = [
      vercel_project_domain.apex_en.domain,
      vercel_project_domain.apex_fr.domain
    ]
  }
}

resource "vercel_project" "osite" {
  name = "osite"
  framework = "solidstart-1"
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
