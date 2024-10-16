# Cloud Resume Challenge – Deployment Guide
This project is part of the Cloud Resume Challenge, demonstrating how to host a static website on AWS S3 with CloudFront for content delivery. The deployment logic is handled by `deploy.xml` using GitHub Actions to automate builds, uploads, and cache invalidations.

## 📋 Overview

The `deploy.xml` file contains the logic to:
- **Build** the project.
- **Upload** the files to the S3 bucket.
- **Invalidate** the **CloudFront distribution** cache to ensure new changes are reflected.

## 🚀 Prerequisites

Ensure you have the following set up:

1. **AWS S3 Bucket** – Used to host the static website.
2. **CloudFront Distribution** – Acts as a CDN for optimized content delivery.
3. **AWS IAM User** – Requires programmatic access with permissions to access S3 and CloudFront.
4. **GitHub Repository** – Hosting the project for version control and CI/CD.
   
## 🔑 GitHub Secrets & Variables Setup

To allow GitHub Actions to access AWS resources, configure the following secrets in your repository:

1. Navigate to:
   - Settings → Secrets and Variables → Actions.
2. Add the following secrets:
   - `AWS_ACCESS_KEY_ID` – Your AWS access key ID.
   - `AWS_SECRET_ACCESS_KEY` – Your AWS secret access key.
   - `CLOUDFRONT_DISTRIBUTION_ID` – The CloudFront distribution ID for cache invalidation.
     
## ⚙️ GitHub Actions Workflow Overview

With a proper workflow, the following tasks will be automated through GitHub Actions:

1. **Checkout** the code from the repository.
2. **Install dependencies** (if needed).
3. **Build** the project.
4. **Sync files** with the **S3 bucket**.
5. **Invalidate** the CloudFront distribution cache to ensure updates are reflected immediately.
Ensure the required secrets are correctly configured to avoid deployment failures.

## 🛠 Troubleshooting

- **Permissions Issues:** Make sure the IAM user has access to S3 and CloudFront.
- **Cache Invalidation Delays:** CloudFront invalidations may take a few minutes to propagate.
- **GitHub Actions Failures:** Check the Actions logs for errors and verify that secrets are properly configured.
