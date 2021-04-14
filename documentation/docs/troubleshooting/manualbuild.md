## Manual package

Recommend reading the note at the bottom if you're using a mac.

1. Install [FPM](https://fpm.readthedocs.io/en/latest/installing.html)
1. Install [Go](https://golang.org/doc/install)
1. Clone this repo and change your working directory to the checkout.
  ```shell
  git clone https://github.com/unifi-poller/unifi-poller.git
  cd unifi-poller
  ```
1. Install local Golang dependencies:
  - Build a package (or two!):
    + `make deb` will build a Debian package
    + `make rpm` builds a RHEL package.
  - Install it:
    + `sudo dpkg -i *.deb || sudo rpm -Uvh *.rpm`

### Manual Build Notes

If you're building linux packages on a mac you can run `brew install rpmbuild gnu-tar`
to get the additional tools you need. That means you're going to need Homebrew.
And if you're going to install Homebrew, or already have, you can simply
do something like this to get your Go environment up and build the packages:

```shell
brew install rpmbuild gnu-tar go dep
sudo gem install --no-document fpm
mkdir ~/go/{src,mod}
export GOPATH=~/go
cd ~go/src
git clone https://github.com/unifi-poller/unifi-poller.git
cd unifi-poller
make rpm deb
 ```
