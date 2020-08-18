# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=leosxie USE_SSH=true yarn deploy

#生成ssh 把pub加入到github中取，在.ssh目录下的config文件中加入以下配置
Host github.com
    HostName github.com
    User leosxie
    IdentityFile ~/.ssh/id_rsa
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
