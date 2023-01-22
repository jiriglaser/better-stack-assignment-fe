# Angular Project Template

This project uses Angular 15.0.5. I have decided to use it instead of (preferred) React because I have a lot more experience with Angular.

## Build + Run

Use `npm run build-pipeline` to lint, unit test and build the project.

User `npx playwright test` to run e2e tests. You can then see test report using `npx playwright show-report`. You can set `headless: false` in `playwright.config.ts` to see actual tests being performed in browsers.

Run `npm start` to run a dev server. Navigate to `http://localhost:4200/`.

## Libraries used

* UI components: Angular material
* linter: ESLint + [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
* unit tests: Jest + [@testing-library](https://testing-library.com/docs/) + [marble tests](https://github.com/cartant/rxjs-marbles) for testing observables
* e2e tests: [Playwright](https://playwright.dev/)
