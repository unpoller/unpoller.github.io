# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

This command starts a local development server and open up a browser window.
Most changes are reflected live without having to restart the server.
**Use this when developing locally!**

```console
yarn start
```

## Build

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
yarn build
```


## Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```console
DEPLOYMENT_BRANCH=gh-pages GIT_USER=username USE_SSH=true yarn deploy
```

## MDL Linter

To run the linter locally, I had to do this on my Mac, but `bundler` may work too.

```shell
brew install rbenv ruby-build
rbenv install 2.6.5
# eval "$(rbenv init -)"
rbenv shell 2.6.5
gem install mdl
mdl .
```
