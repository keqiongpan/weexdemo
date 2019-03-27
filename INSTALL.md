# weexdemo工程构建日志


## 环境准备

$ node -v
v10.15.3

$ npm -v
6.9.0

$ npm config list | grep -vE '^(;|$)'
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.9.0 node/v10.15.3 darwin x64"

$ cnpm -v
cnpm@6.0.0 (/usr/local/lib/node_modules/cnpm/lib/parse_argv.js)
npm@6.9.0 (/usr/local/lib/node_modules/cnpm/node_modules/npm/lib/npm.js)
node@10.15.3 (/usr/local/bin/node)
npminstall@3.20.2 (/usr/local/lib/node_modules/cnpm/node_modules/npminstall/lib/index.js)
prefix=/usr/local 
darwin x64 17.7.0 
registry=https://registry.npm.taobao.org

$ cnpm config list | grep -vE '^(;|$)'
disturl = "https://npm.taobao.org/mirrors/node"
metrics-registry = "https://registry.npm.taobao.org/"
registry = "https://registry.npm.taobao.org/"
scope = ""
user-agent = "npm/6.9.0 node/v10.15.3 darwin x64"
userconfig = "/Users/stduser/.cnpmrc"

; node bin location = /usr/local/bin/node
; cwd = /Users/stduser/Archive/Public/Remote/MySources/weexdemo
; HOME = /Users/stduser
; "npm config ls -l" to show all defaults.

$ weex -v
2.0.0-beta.7
- @weex-cli/generator : v2.0.0-beta.7
- @weex-cli/doctor : v2.0.0-beta.2
- @weex-cli/run : v2.0.0-beta.2
- @weex-cli/device : v2.0.0-beta.2

$ weex doctor
✔ Android and iOS Environment:

[✓] Android toolchain - develop for Android devices
    •  Android SDK at /Users/stduser/Library/Android/sdk
    •  Platform android-26, build-tools 26.0.1
    •  Java version OpenJDK Runtime Environment (build 1.8.0_152-release-1248-b01).

[!] iOS toolchain - develop for iOS devices
    •  Xcode at /Applications/Xcode.app/Contents/Developer
    •  Xcode 10.1
    ✗  Brew not installed; use this to install tools for iOS device development.
      
        Download brew at https://brew.sh/.

✔ Weex Cli Environment (v2.0.0-beta.5, on darwin 17.7.0):

[✔] @weex-cli/core  - core module for the weex-toolkit
[✔] @weex-cli/generator - Generator for weex-toolkit
[✔] @weex-cli/doctor - Doctor module for weex-toolkit
[✔] @weex-cli/run - module for running iOS/Android/Web platform with weex-toolkit
[✔] @weex-cli/device - module for lanuch device with weex-toolkit

$ pod --version
1.5.3


## 使用脚手架weex-toolkit创建weexdemo工程

$ weex create weexdemo
? Project name weexdemo
? Project description A weex demo.
? Author Qiongpan Ke <keqiongpan@163.com>
? Select weex web render latest
? Babel compiler (https://babeljs.io/docs/plugins/#stage-x-experimental-presets) stage-0
? Use vue-router to manage your view router? (not recommended) No
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm


# Installing project dependencies ...
# ========================

npm WARN deprecated istanbul@0.4.5: This module is no longer maintained, try this instead:
npm WARN deprecated   npm i nyc
npm WARN deprecated Visit https://istanbul.js.org/integrations for other alternatives.
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 
npm WARN deprecated samsam@1.3.0: This package has been deprecated in favour of @sinonjs/samsam
npm WARN deprecated browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.

> fsevents@1.2.7 install /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/fsevents
> node install

node-pre-gyp WARN Using request for node-pre-gyp https download 
[fsevents] Success: "/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/fsevents/lib/binding/Release/node-v64-darwin-x64/fse.node" is installed via remote

> phantomjs-prebuilt@2.1.16 install /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/phantomjs-prebuilt
> node install.js

PhantomJS not found on PATH
Downloading https://github.com/Medium/phantomjs/releases/download/v2.1.1/phantomjs-2.1.1-macosx.zip
Saving to /var/folders/_7/pjr80gsj3kx8crv5pz6bjw000000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip
Receiving...
  [========================================] 99%
Received 16746K total.
Extracting zip contents
Removing /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/phantomjs-prebuilt/lib/phantom
Copying extracted folder /var/folders/_7/pjr80gsj3kx8crv5pz6bjw000000gn/T/phantomjs/phantomjs-2.1.1-macosx.zip-extract-1553659173574/phantomjs-2.1.1-macosx -> /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/phantomjs-prebuilt/lib/phantom
Writing location.js file
Done. Phantomjs binary available at /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs

> uglifyjs-webpack-plugin@0.4.6 postinstall /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js


> sinon@4.5.0 postinstall /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/node_modules/sinon
> node scripts/support-sinon.js

Have some ❤️ for Sinon? You can support the project via Open Collective:
 > https://opencollective.com/sinon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN babel-loader@6.4.1 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none is installed. You must install peer dependencies yourself.
npm WARN babel-loader@6.4.1 requires a peer of webpack@1 || 2 || ^2.1.0-beta || ^2.2.0-rc but none is installed. You must install peer dependencies yourself.

added 1726 packages from 1956 contributors and audited 15007 packages in 121.894s
found 22 vulnerabilities (11 low, 7 moderate, 4 high)
  run `npm audit fix` to fix them, or `npm audit` for details


Running eslint --fix to comply with chosen preset rules...
# ========================


> weexdemo@1.0.0 lint /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo
> eslint --ext .js,.vue src  test/unit --fix


Success! Created weexdemo at /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo

Inside that directory, you can run several commands:


  npm start
  Starts the development server for you to preview your weex page on browser
  You can also scan the QR code using weex playground to preview weex page on native

  npm run dev
  Open the code compilation task in watch mode

  npm run ios
  (Mac only, requires Xcode)
  Starts the development server and loads your app in an iOS simulator

  npm run android
  (Requires Android build tools)
  Starts the development server and loads your app on a connected Android device or emulator

  npm run pack:ios
  (Mac only, requires Xcode)
  Packaging ios project into ipa package

  npm run pack:android
  (Requires Android build tools)
  Packaging android project into apk package

  npm run pack:web
  Packaging html5 project into `web/build` folder

  npm run test
  Starts the test runner

To get started:

  cd weexdemo
  npm start

Enjoy your hacking time!

$ git add --all
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   INSTALL.md
	new file:   weexdemo/.babelrc
	new file:   weexdemo/.eslintignore
	new file:   weexdemo/.eslintrc.js
	new file:   weexdemo/.postcssrc.js
	new file:   weexdemo/README.md
	new file:   weexdemo/android.config.json
	new file:   weexdemo/configs/config.js
	new file:   weexdemo/configs/helper.js
	new file:   weexdemo/configs/hotreload.js
	new file:   weexdemo/configs/logo.png
	new file:   weexdemo/configs/plugin.js
	new file:   weexdemo/configs/utils.js
	new file:   weexdemo/configs/vue-loader.conf.js
	new file:   weexdemo/configs/webpack.common.conf.js
	new file:   weexdemo/configs/webpack.dev.conf.js
	new file:   weexdemo/configs/webpack.prod.conf.js
	new file:   weexdemo/configs/webpack.release.conf.js
	new file:   weexdemo/configs/webpack.test.conf.js
	new file:   weexdemo/ios.config.json
	new file:   weexdemo/package.json
	new file:   weexdemo/platforms/platforms.json
	new file:   weexdemo/plugins/plugins.json
	new file:   weexdemo/src/components/HelloWorld.vue
	new file:   weexdemo/src/entry.js
	new file:   weexdemo/src/index.vue
	new file:   weexdemo/test/unit/.eslintrc
	new file:   weexdemo/test/unit/index.js
	new file:   weexdemo/test/unit/karma.conf.js
	new file:   weexdemo/test/unit/specs/index.spec.js
	new file:   weexdemo/web/assets/preview.css
	new file:   weexdemo/web/assets/qrcode.js
	new file:   weexdemo/web/index.html
	new file:   weexdemo/web/preview.html
	new file:   weexdemo/webpack.config.js
