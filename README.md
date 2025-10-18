[![CircleCI](https://dl.circleci.com/status-badge/img/gh/vesharma-dev/ve-portfolio-site/tree/main.svg?style=svg&circle-token=CCIPRJ_3PxWgCWg9Kws7aqjF3tp6W_ee927a4b461636b5dcd7e2c51d617c314abfe185)](https://dl.circleci.com/status-badge/redirect/gh/vesharma-dev/ve-portfolio-site/tree/main) [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io) [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com) [![Next.JS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/?hl=en)

# Ve's Portfolio Site

This is a portfolio site for Ve to highlight his technical career and progress. This web app version is built on top of the portfolio template components from Magic UI.

# Features

- Setup only takes a few minutes by editing the [single config file](./src/data/resume.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/UI, TailwindCSS, Framer Motion, Magic UI
- Includes a blog
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/...
    ```

2. Move to the cloned directory

    ```bash
    cd <FOLDER_NAME>
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Start the local Server:

    ```bash
    pnpm dev
    ```

5. Open the [Config file](./src/data/resume.tsx) and make changes

## Using Docker

To use docker, build the local app from the Dockerfile, and run it as such.
Use the no cache flag if you want to hard start building the app. I recommend this especially when making package or dependency changes. Otherwise if you're rebuilding the app from code changes I recommend usin the default build option.

    ```bash
    docker build --no-cache -t ve-app .
    docker build -t ve-app .
    docker run ve-app

    ```

## Deploying an image to GCP Artifact Registry

These steps depend on building the app successfully first with docker, then tagging the image, and then pushing it to GCP artifact registry.

    ```bash

        gcloud auth login

        docker tag ve-app gcr.io/experimental-learning/ve-app:latest

        docker tag ve-app gcr.io/experimentation-learning/ve-app:latest

        docker push gcr.io/experimentation-learning/ve-app:latest

    ```

## Using Terraform

````bash

     # Initialization:

    terraform init
    # Initializes a new Terraform project, downloading necessary providers.
    terraform plan
    # Creates an execution plan, showing the changes that will be made to your infrastructure.
    terraform apply
    # Applies the changes defined in the execution plan, creating or modifying resources.
    terraform destroy
    # Destroys the resources defined in your configuration.

    # State Management:

    terraform state list
    # Lists the resources managed by Terraform.
    terraform state show
    # Shows details about a specific resource.
    terraform state pull
    # Pulls the current Terraform state from a remote backend.
    terraform state push
    # Pushes the current Terraform state to a remote backend.

# Other Commands:

    terraform output
    # Displays the values of defined outputs.
    terraform validate
    # Validates the syntax and structure of your Terraform configuration.
   ```
````

## Testing

### Unit & Integration Tests

The next.JS app has jest testing across the frontend and backend, and allows for jest tests to run in a Jest DOM and the ability to write them in TypeScript.
There's also CI/CD configured via CircleCI.

    ```bash

        # Runs the tests across the app and provides a code coverage report
        pnpm run test

        # Checks if updated circle CI YML file is valid
        pnpm validate-circle-ci

    ```

#### Useful resources on setting up Jest Testing Environments in Next:

- https://stackoverflow.com/questions/69227566/consider-using-the-jsdom-test-environment
- https://stackoverflow.com/questions/72013449/upgrading-jest-to-v29-error-test-environment-jest-environment-jsdom-cannot-be
- https://stackoverflow.com/questions/57861187/property-tobeinthedocument-does-not-exist-on-type-matchersany

### E2E Testing

This E2E test suite uses AI to reduce the work and overhead needed.

It uses this [open sourced framework called shortest](https://github.com/anti-work/shortest). You can visit the main website here called [shortest.com](https://shortest.com).

How this works under the hood is that it uses Anthropics new "Computer use" paradigm where it takes screenshots, translates that into tokens, and overlays pixel based coordinates to do tasks - which is pretty cool.
See more on [this here](https://docs.anthropic.com/en/docs/build-with-claude/computer-use).

#### Running Test Scripts

```bash
pnpm run ai-e2e-testing

pnpm run ai-e2e-testing:ci

```

You'll want to make sure the --headless flag is on if running said tests in a CI/CD pipeline.

## TODO

- Add web3 functionality such as the ability to mint a Ve Coin
