## Manual package

Recommend reading the note at the bottom if you're using a mac.

1. Install [Go](https://golang.org/doc/install)
1. Install [GoReleaser](https://goreleaser.com/install/)
1. Clone this repo and change your working directory to the checkout.
  ```shell
  git clone https://github.com/unpoller/unpoller.git
  cd unpoller
  ```
1. Install local Golang dependencies:
  - Build a package (or two!):
    + `make build` will build all packages and image
  - Install it:
    + `sudo dpkg -i dist/*.deb || sudo rpm -Uvh dist/*.rpm`

### Manual Build Notes

If you're building linux packages on a mac you can run `brew install rpmbuild gnu-tar`
to get the additional tools you need. That means you're going to need Homebrew.
And if you're going to install Homebrew, or already have, you can simply
do something like this to get your Go environment up and build the packages:

```shell
brew install rpmbuild gnu-tar go goreleaser/tap/goreleaser
mkdir ~/go/{src,mod}
export GOPATH=~/go
cd ~go/src
git clone https://github.com/unpoller/unpoller.git
cd unpoller
make rpm deb
 ```
