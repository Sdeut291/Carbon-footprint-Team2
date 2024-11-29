# carbon-footprint-team2

This is a ready-to-go repository setup for an Angular application including all necessary building blocks provided by BMW's [Frontend Development Standards Offering](https://atc.bmwgroup.net/confluence/x/3ckF4).
These include:

- Static Code Analysis Setup
- Unit, Integration and E2E Testing Setup
- CI/CD setup for code check, testing, build and deployment
- services like WebEAM integration

## How to use the template

Follow our [Step by Step Guide](https://atc.bmwgroup.net/confluence/x/fkpP_/) to set up your application using this boilerplate.

Use the following schematic to add density and update the layout to include the header, navbar and imprint density components.

```bash
ng add @bmw-fedev/density-components
```

Use the following schematic to integrate authentication in your app, using the [FEDEV auth package](https://atc.bmwgroup.net/confluence/pages/viewpage.action?pageId=4382428203).

```bash
ng add @bmw-fedev/fedev-auth-schematic
```

## Getting started

#### Run the following commands to install all dependencies and get the application up and running locally.

Install the Angular CLI globally on your machine if you haven't already:

```
npm install -g @angular/cli
```

Install the project dependencies and run it:

```
npm install
npm run start
```

## Testing

This boilerplate includes the setup for unit and automated UI testing and respective pipelines.

### Unit tests

This Angular boilerplate project utilizes Jest as the chosen unit testing framework for code testing and quality assurance.

#### How to run unit tests

In the command line run this for a single run:

```
npm run test
```

To run tests watching changes in files:

```
npm run test:watch
```

To run tests with coverage:

```
npm run test:coverage
```

### UI tests

This Angular boilerplate project utilizes Playwright as the chosen UI testing tool for E2E, Visual Regression, A11y and Performance testing.

#### How to run UI tests

Run the test command:

```
npm run playwright
```

If you get an error regarding missing browsers, you may need to run the init script for playwright:

```
npm run playwright:init
```

After the tests run, a report can be found in `playwright-report/index.html`.
These tests run automatically in the CI pipeline for every pull request to the `main` branch.

You can also use the path to a specific test, including the line of the test to run:

```
npm run playwright playwright/tests/main-page/main.e2e.spec.ts:13
```

Playwright UI Mode provides a time travel testing experience with watch mode, test file exploration, filtering, detailed test traces, and DOM snapshot debugging. To use it, run the `playwright:ui` script. More information in [Playwright's documentation](https://playwright.dev/docs/test-ui-mode).

```
npm run playwright:ui
```

## Static Code Analysis

The integrated pipelines will check for linting and formatting issues. Both is also checked on commit, using Husky.

### Linting

This boilerplate has ESLint, Stylelint and Commitlint installed, according to our documentation. It is configured to run before a commit and after commit of a pull request, at the pipelines.

To check your code for eslint or stylelint issues, run the `lint` script:

```
npm run lint
```

To auto-fix your linting issues, run the `lint:fix` script:

```
npm run lint:fix
```

### Formatting

This boilerplate has Prettier installed, according to our [documentation](https://atc.bmwgroup.net/confluence/display/COPUX/Code+Formatting+Tools). It is configured to run before a commit and in the pipeline.

To check if your code is properly formatted, run the `format` script:

```
npm run format
```

To check if your code is properly formatted and automatically fix the found errors (when possible), run the `format:fix` script:

```
npm run format:fix
```

## Build and Analysis Scripts

This project includes custom scripts that you may use to facilitate building, analyzing and optimizing the application:

- build:stats &#8594; Runs the normal build process while generating a `stats.json` for analysis. Afterwards it calls the `analyze` script to create a visualization page.
- analyze &#8594; Using `esbuild-visualizer`, it will create an analysis folder (within `dist`) where you'll find an interactive HTML page showing the breakdown of the application bundle.
- build:compress &#8594; This command will compress the output of the build using `gzipper` to a separate folder. This compression reduces the file sizes of your build assets, improving the performance of your application when served. ⚠️ Make sure your server supports and is configured to serve `.gz` files if you choose to take advantage of this compressed files.

## Good to Know

### Registry

The BMW Corporate Nexus is configured as npm registry for this project, configured in the npmrc. Next to mirroring the npm registry, it includes all BMW specific packages (like density) and is accessible without specific proxy settings. Since `npm audit` does not work with the BMW Corporate Nexus, scripts are added to the package.json to run the check against the public npm registry.

### Vulnerability Management

This Angular boilerplate project utilizes Dependabot to regularly scan for vulnerabilities in its dependencies. How It Works:

- For each vulnerability detected, it generates a security alert.
- For each security alert, it automatically creates a pull request to address the issue.

### VS Code extensions

The following extensions for VS Code are recommended:

- [Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<!-- bmw angular boilerplate was used for this (please do not remove) -->
