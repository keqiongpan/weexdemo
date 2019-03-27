# weexdemo工程构建日志


## 1. 环境准备

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


## 2. 使用脚手架weex-toolkit创建weexdemo工程

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


## 3. 添加iOS平台支持

$ weex platform add ios
✔ Add ios project success

$ git diff
diff --git a/weexdemo/platforms/platforms.json b/weexdemo/platforms/platforms.json
index 9e26dfe..3efb5f0 100644
--- a/weexdemo/platforms/platforms.json
+++ b/weexdemo/platforms/platforms.json
@@ -1 +1,3 @@
-{}
\ No newline at end of file
+{
+       "ios": "1.0.0"
+}

$ git add --all
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   ../INSTALL.md
	new file:   platforms/ios/LICENSE
	new file:   platforms/ios/Podfile
	new file:   platforms/ios/README.md
	new file:   platforms/ios/WeexDemo.xcodeproj/project.pbxproj
	new file:   platforms/ios/WeexDemo.xcodeproj/project.xcworkspace/contents.xcworkspacedata
	new file:   platforms/ios/WeexDemo.xcodeproj/xcshareddata/xcschemes/WeexDemo.xcscheme
	new file:   platforms/ios/WeexDemo.xcodeproj/xcshareddata/xcschemes/WeexUITestDemo.xcscheme
	new file:   platforms/ios/WeexDemo.xcworkspace/contents.xcworkspacedata
	new file:   platforms/ios/WeexDemo/AppDelegate.h
	new file:   platforms/ios/WeexDemo/AppDelegate.m
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-29.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-29@2x-1.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-29@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-29@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-40.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-40@2x-1.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-40@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-40@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-60@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-60@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-76.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-76@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/AppIcon.appiconset/Icon-83.5@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default-4.7@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default-568h@2x-1.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default-568h@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default@2x-1.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default@3x-1.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/Default@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/iPhoneX-landscape.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/LaunchImage.launchimage/iPhoneX@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/back.imageset/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/back.imageset/back.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/back.imageset/back@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/back.imageset/back@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/reload.imageset/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/reload.imageset/reload.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/reload.imageset/reload@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/reload.imageset/reload@3x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/scan.imageset/Contents.json
	new file:   platforms/ios/WeexDemo/Assets.xcassets/scan.imageset/scan.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/scan.imageset/scan@2x.png
	new file:   platforms/ios/WeexDemo/Assets.xcassets/scan.imageset/scan@3x.png
	new file:   platforms/ios/WeexDemo/DemoDefine.h
	new file:   platforms/ios/WeexDemo/Images.xcassets/Brand Assets.launchimage/Contents.json
	new file:   platforms/ios/WeexDemo/WeexConfig/WXImgLoaderDefaultImpl.h
	new file:   platforms/ios/WeexDemo/WeexConfig/WXImgLoaderDefaultImpl.m
	new file:   platforms/ios/WeexDemo/WeexConfig/WeexSDKManager.h
	new file:   platforms/ios/WeexDemo/WeexConfig/WeexSDKManager.m
	new file:   platforms/ios/WeexDemo/WeexDemo-Info.plist
	new file:   platforms/ios/WeexDemo/WeexScanner/UIViewController+WXDemoNaviBar.h
	new file:   platforms/ios/WeexDemo/WeexScanner/UIViewController+WXDemoNaviBar.m
	new file:   platforms/ios/WeexDemo/WeexScanner/WXDemoViewController.h
	new file:   platforms/ios/WeexDemo/WeexScanner/WXDemoViewController.m
	new file:   platforms/ios/WeexDemo/config.xml
	new file:   platforms/ios/WeexDemo/main.m
	new file:   platforms/ios/WeexDemo/weex-icon.png
	new file:   platforms/ios/WeexDemoTests/Info.plist
	new file:   platforms/ios/WeexDemoTests/WeexDemoTests.m
	new file:   platforms/ios/WeexUITestDemo-Info.plist
	new file:   platforms/ios/WeexUITestDemoUITests/Info.plist
	new file:   platforms/ios/WeexUITestDemoUITests/WeexUITestDemoUITests.m
	new file:   platforms/ios/bundlejs/index.js
	new file:   platforms/ios/weex.png
	new file:   platforms/ios/weex@2x.png
	modified:   platforms/platforms.json


## 4. 添加Android平台支持

$ weex platform add android
✔ Add android project success

$ git diff
diff --git a/weexdemo/platforms/platforms.json b/weexdemo/platforms/platforms.json
index 3efb5f0..7266f0d 100644
--- a/weexdemo/platforms/platforms.json
+++ b/weexdemo/platforms/platforms.json
@@ -1,3 +1,4 @@
 {
-       "ios": "1.0.0"
+       "ios": "1.0.0",
+       "android": "1.0.0"
 }

$ git add --all
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   ../INSTALL.md
	new file:   platforms/android/.gitignore
	new file:   platforms/android/.weex_plugin.json
	new file:   platforms/android/LICENSE
	new file:   platforms/android/NOTICE
	new file:   platforms/android/README.md
	new file:   platforms/android/app/.gitignore
	new file:   platforms/android/app/build.gradle
	new file:   platforms/android/app/proguard-rules.pro
	new file:   platforms/android/app/src/main/AndroidManifest.xml
	new file:   platforms/android/app/src/main/assets/index.js
	new file:   platforms/android/app/src/main/java/com/weex/app/AbsWeexActivity.java
	new file:   platforms/android/app/src/main/java/com/weex/app/SplashActivity.java
	new file:   platforms/android/app/src/main/java/com/weex/app/WXApplication.java
	new file:   platforms/android/app/src/main/java/com/weex/app/WXPageActivity.java
	new file:   platforms/android/app/src/main/java/com/weex/app/extend/BlurTool.java
	new file:   platforms/android/app/src/main/java/com/weex/app/extend/BlurTransformation.java
	new file:   platforms/android/app/src/main/java/com/weex/app/extend/ImageAdapter.java
	new file:   platforms/android/app/src/main/java/com/weex/app/extend/WXEventModule.java
	new file:   platforms/android/app/src/main/java/com/weex/app/hotreload/HotReloadManager.java
	new file:   platforms/android/app/src/main/java/com/weex/app/util/AppConfig.java
	new file:   platforms/android/app/src/main/java/com/weex/app/util/AppConfigXmlParser.java
	new file:   platforms/android/app/src/main/java/com/weex/app/util/AppPreferences.java
	new file:   platforms/android/app/src/main/java/com/weex/app/util/CommonUtils.java
	new file:   platforms/android/app/src/main/java/com/weex/app/util/Constants.java
	new file:   platforms/android/app/src/main/res/drawable-hdpi/ic_action_refresh.png
	new file:   platforms/android/app/src/main/res/drawable-hdpi/ic_action_scan.png
	new file:   platforms/android/app/src/main/res/drawable-mdpi/ic_action_refresh.png
	new file:   platforms/android/app/src/main/res/drawable-mdpi/ic_action_scan.png
	new file:   platforms/android/app/src/main/res/drawable-xhdpi/ic_action_refresh.png
	new file:   platforms/android/app/src/main/res/drawable-xhdpi/ic_action_scan.png
	new file:   platforms/android/app/src/main/res/drawable-xxhdpi/ic_action_refresh.png
	new file:   platforms/android/app/src/main/res/drawable-xxhdpi/ic_action_scan.png
	new file:   platforms/android/app/src/main/res/layout/activity_splash.xml
	new file:   platforms/android/app/src/main/res/layout/activity_wxpage.xml
	new file:   platforms/android/app/src/main/res/menu/main.xml
	new file:   platforms/android/app/src/main/res/menu/main_scan.xml
	new file:   platforms/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
	new file:   platforms/android/app/src/main/res/values-v21/styles.xml
	new file:   platforms/android/app/src/main/res/values-w820dp/dimens.xml
	new file:   platforms/android/app/src/main/res/values-zh-rCN/strings.xml
	new file:   platforms/android/app/src/main/res/values/attrs.xml
	new file:   platforms/android/app/src/main/res/values/colors.xml
	new file:   platforms/android/app/src/main/res/values/dimens.xml
	new file:   platforms/android/app/src/main/res/values/drawables.xml
	new file:   platforms/android/app/src/main/res/values/strings.xml
	new file:   platforms/android/app/src/main/res/values/styles.xml
	new file:   platforms/android/app/src/main/res/values/themes.xml
	new file:   platforms/android/app/src/main/res/xml/app_config.xml
	new file:   platforms/android/app/tools/debug.keystore
	new file:   platforms/android/build.gradle
	new file:   platforms/android/codeStyleSettings.xml
	new file:   platforms/android/gradle.properties
	new file:   platforms/android/gradle/wrapper/gradle-wrapper.jar
	new file:   platforms/android/gradle/wrapper/gradle-wrapper.properties
	new file:   platforms/android/gradlew
	new file:   platforms/android/gradlew.bat
	new file:   platforms/android/settings.gradle
	modified:   platforms/platforms.json


## 5. 启动本地Web服务器并在浏览器中打开web版应用

$ weex run web
[✔] Run `npm start` command done


## 6. 转换为iOS代码并编译在Simulator中运行iOS版应用

$ weex run ios
[✔] Compile JSBundle done
? Select one of the device iPhone XR (Simulator)
[✔] Start hotreload server done
[✔] Set native config done
[✔] Copy JS source done
[✔] Watch JS source done
⠇ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠏ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠋ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠙ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠹ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠸ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠼ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠴ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠦ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠧ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠇ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠏ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠋ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠙ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠹ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠸ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠼ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠴ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠦ ld/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/weex_core/Source/core/config/core_environment.cpp -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/core_environment.o

CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-n⠦ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠧ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠇ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠏ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠋ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠙ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠹ CompileC /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects⠹ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠸ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠼ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠴ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠦ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠧ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠇ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠏ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠋ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠙ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠹ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠸ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠼ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠴ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠦ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠧ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠇ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠏ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠋ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠙ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠹ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠸ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠼ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠴ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠦ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠧ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠇ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠏ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠋ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠙ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠹ ources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Private/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Headers/Public/WeexSDK -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms⠧ d/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/ios/sdk/WeexSDK/Sources/Component/Recycler/WXSectionDataController.m -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.o
⠇ d/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/ios/sdk/WeexSDK/Sources/Component/Recycler/WXSectionDataController.m -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.o
⠏ d/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/ios/sdk/WeexSDK/Sources/Component/Recycler/WXSectionDataController.m -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.o
⠋ d/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/ios/sdk/WeexSDK/Sources/Component/Recycler/WXSectionDataController.m -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.o
⠙ d/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/WeexSDK -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/WeexSDK/WeexSDK-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.dia -c /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/WeexSDK/ios/sdk/WeexSDK/Sources/Component/Recycler/WXSectionDataController.m -o /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/WeexSDK.build/Objects-normal/x86_64/WXSectionDataController.o
⠇ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠏ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠋ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠙ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠹ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠸ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠼ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠴ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠦ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠧ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠇ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠏ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠋ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠙ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠹ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia⠸ platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources/x86_64 -I/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/DerivedSources -F/Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Products/Debug-iphonesimulator/SDWebImage -DOS_OBJECT_USE_OBJC=0 -include /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/Pods/Target\ Support\ Files/SDWebImage/SDWebImage-prefix.pch -MMD -MT dependencies -MF /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.d --serialize-diagnostics /Users/stduser/Archive/Public/Remote/MySources/weexdemo/weexdemo/platforms/ios/build/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/SDWebImage.build/Objects-normal/x86_64/SDWebImageCompat.dia[✔] Build APP done
[✔] Launch APP done
Hotreload server is actived, enjoy your develop
Type Ctrl+C to exist

$ git diff
diff --git a/weexdemo/platforms/ios/WeexDemo.xcodeproj/project.pbxproj b/weexdemo/platforms/ios/WeexDemo.xcodeproj/project.pbxproj
index 62d9b9e..a1da7b3 100644
--- a/weexdemo/platforms/ios/WeexDemo.xcodeproj/project.pbxproj
+++ b/weexdemo/platforms/ios/WeexDemo.xcodeproj/project.pbxproj
@@ -256,10 +256,12 @@
                        isa = PBXNativeTarget;
                        buildConfigurationList = 775BEEA81C1E8ECC008D1629 /* Build configuration list for PBXNativeTarget "WeexDemo" */;
                        buildPhases = (
+                               FDC744C4FA79E4D3E1A2262F /* [CP] Check Pods Manifest.lock */,
                                0A2546EC1E00EDC5008B7C9F /* Bundle deploy server */,
                                775BEE771C1E8ECC008D1629 /* Sources */,
                                775BEE781C1E8ECC008D1629 /* Frameworks */,
                                775BEE791C1E8ECC008D1629 /* Resources */,
+                               011934E4ED0F00E73C655400 /* [CP] Copy Pods Resources */,
                        );
                        buildRules = (
                        );
@@ -297,7 +299,6 @@
                                84361D3C1CA10F8E00F43825 /* Frameworks */,
                                84361D431CA10F8E00F43825 /* Resources */,
                                567369891CE436EB000A646C /* ShellScript */,
-                               93B40B6146CF9798322AE2D0 /* [CP] Embed Pods Frameworks */,
                                62254A043B5C03D898ED0475 /* [CP] Copy Pods Resources */,
                        );
                        buildRules = (
@@ -383,6 +384,36 @@
 /* End PBXResourcesBuildPhase section */
 
 /* Begin PBXShellScriptBuildPhase section */
+               011934E4ED0F00E73C655400 /* [CP] Copy Pods Resources */ = {
+                       isa = PBXShellScriptBuildPhase;
+                       buildActionMask = 2147483647;
+                       files = (
+                       );
+                       inputFileListPaths = (
+                       );
+                       inputPaths = (
+                               "${SRCROOT}/Pods/Target Support Files/Pods-WeexDemo/Pods-WeexDemo-resources.sh",
+                               "${PODS_ROOT}/WeexSDK/pre-build/native-bundle-main.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-main-jsfm.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-polyfill.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-rax-api.js",
+                               "${PODS_ROOT}/WeexSDK/ios/sdk/WeexSDK/Resources/wx_load_error@3x.png",
+                       );
+                       name = "[CP] Copy Pods Resources";
+                       outputFileListPaths = (
+                       );
+                       outputPaths = (
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/native-bundle-main.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-main-jsfm.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-polyfill.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-rax-api.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/wx_load_error@3x.png",
+                       );
+                       runOnlyForDeploymentPostprocessing = 0;
+                       shellPath = /bin/sh;
+                       shellScript = "\"${SRCROOT}/Pods/Target Support Files/Pods-WeexDemo/Pods-WeexDemo-resources.sh\"\n";
+                       showEnvVarsInLog = 0;
+               };
                0A2546EC1E00EDC5008B7C9F /* Bundle deploy server */ = {
                        isa = PBXShellScriptBuildPhase;
                        buildActionMask = 12;
@@ -436,11 +467,17 @@
                        inputPaths = (
                                "${SRCROOT}/Pods/Target Support Files/Pods-WeexUITestDemo/Pods-WeexUITestDemo-resources.sh",
                                "${PODS_ROOT}/WeexSDK/pre-build/native-bundle-main.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-main-jsfm.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-polyfill.js",
+                               "${PODS_ROOT}/WeexSDK/pre-build/weex-rax-api.js",
                                "${PODS_ROOT}/WeexSDK/ios/sdk/WeexSDK/Resources/wx_load_error@3x.png",
                        );
                        name = "[CP] Copy Pods Resources";
                        outputPaths = (
                                "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/native-bundle-main.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-main-jsfm.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-polyfill.js",
+                               "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/weex-rax-api.js",
                                "${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/wx_load_error@3x.png",
                        );
                        runOnlyForDeploymentPostprocessing = 0;
@@ -448,19 +485,26 @@
                        shellScript = "\"${SRCROOT}/Pods/Target Support Files/Pods-WeexUITestDemo/Pods-WeexUITestDemo-resources.sh\"\n";
                        showEnvVarsInLog = 0;
                };
-               93B40B6146CF9798322AE2D0 /* [CP] Embed Pods Frameworks */ = {
+               FDC744C4FA79E4D3E1A2262F /* [CP] Check Pods Manifest.lock */ = {
                        isa = PBXShellScriptBuildPhase;
                        buildActionMask = 2147483647;
                        files = (
                        );
+                       inputFileListPaths = (
+                       );
                        inputPaths = (
+                               "${PODS_PODFILE_DIR_PATH}/Podfile.lock",
+                               "${PODS_ROOT}/Manifest.lock",
+                       );
+                       name = "[CP] Check Pods Manifest.lock";
+                       outputFileListPaths = (
                        );
-                       name = "[CP] Embed Pods Frameworks";
                        outputPaths = (
+                               "$(DERIVED_FILE_DIR)/Pods-WeexDemo-checkManifestLockResult.txt",
                        );
                        runOnlyForDeploymentPostprocessing = 0;
                        shellPath = /bin/sh;
-                       shellScript = "\"${SRCROOT}/Pods/Target Support Files/Pods-WeexUITestDemo/Pods-WeexUITestDemo-frameworks.sh\"\n";
+                       shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
                        showEnvVarsInLog = 0;
                };
 /* End PBXShellScriptBuildPhase section */
@@ -524,8 +568,8 @@
                                CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
                                CLANG_WARN_UNREACHABLE_CODE = YES;
                                CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
-                               CODE_SIGN_IDENTITY = "iPhone Developer";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                COPY_PHASE_STRIP = NO;
                                DEBUG_INFORMATION_FORMAT = dwarf;
                                ENABLE_STRICT_OBJC_MSGSEND = YES;
@@ -571,8 +615,8 @@
                                CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
                                CLANG_WARN_UNREACHABLE_CODE = YES;
                                CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
-                               CODE_SIGN_IDENTITY = "iPhone Distribution";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Distribution";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                COPY_PHASE_STRIP = NO;
                                DEBUG_INFORMATION_FORMAT = "dwarf-with-dsym";
                                ENABLE_NS_ASSERTIONS = NO;
@@ -599,8 +643,8 @@
                        buildSettings = {
                                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
                                ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;
-                               CODE_SIGN_IDENTITY = "iPhone Developer";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                DEVELOPMENT_TEAM = "";
                                ENABLE_BITCODE = NO;
                                FRAMEWORK_SEARCH_PATHS = (
@@ -641,8 +685,8 @@
                        buildSettings = {
                                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
                                ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;
-                               CODE_SIGN_IDENTITY = "iPhone Distribution";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Distribution";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                DEVELOPMENT_TEAM = "";
                                ENABLE_BITCODE = NO;
                                FRAMEWORK_SEARCH_PATHS = (
@@ -709,8 +753,8 @@
                        buildSettings = {
                                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
                                ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = "Brand Assets";
-                               CODE_SIGN_IDENTITY = "iPhone Developer";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                ENABLE_BITCODE = NO;
                                FRAMEWORK_SEARCH_PATHS = (
                                        "$(inherited)",
@@ -745,8 +789,8 @@
                        buildSettings = {
                                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
                                ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = "Brand Assets";
-                               CODE_SIGN_IDENTITY = "iPhone Developer";
-                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
+                               CODE_SIGN_IDENTITY = "";
+                               "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "";
                                ENABLE_BITCODE = NO;
                                FRAMEWORK_SEARCH_PATHS = (
                                        "$(inherited)",
diff --git a/weexdemo/platforms/ios/WeexDemo/WeexDemo-Info.plist b/weexdemo/platforms/ios/WeexDemo/WeexDemo-Info.plist
index 11bf479..516d9c5 100755
--- a/weexdemo/platforms/ios/WeexDemo/WeexDemo-Info.plist
+++ b/weexdemo/platforms/ios/WeexDemo/WeexDemo-Info.plist
@@ -5,11 +5,11 @@
        <key>CFBundleDevelopmentRegion</key>
        <string>en</string>
        <key>CFBundleDisplayName</key>
-       <string>WeexPlayground</string>
+       <string>WeexApp</string>
        <key>CFBundleExecutable</key>
        <string>$(EXECUTABLE_NAME)</string>
        <key>CFBundleIdentifier</key>
-       <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
+       <string>com.alibaba.weex</string>
        <key>CFBundleInfoDictionaryVersion</key>
        <string>6.0</string>
        <key>CFBundleName</key>
@@ -17,11 +17,11 @@
        <key>CFBundlePackageType</key>
        <string>APPL</string>
        <key>CFBundleShortVersionString</key>
-       <string>1.1</string>
+       <string>0.1</string>
        <key>CFBundleSignature</key>
        <string>????</string>
        <key>CFBundleVersion</key>
-       <string>1</string>
+       <string>0.1.0</string>
        <key>LSRequiresIPhoneOS</key>
        <true/>
        <key>NSAppTransportSecurity</key>
@@ -50,5 +50,9 @@
        <false/>
        <key>NSCameraUsageDescription</key>
        <string></string>
+  <key>WXEntryBundleURL</key>
+  <string>bundlejs/index.js</string>
+  <key>WXSocketConnectionURL</key>
+  <string>ws://10.48.78.91:9090</string>
 </dict>
 </plist>

$ git add --all
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   ../INSTALL.md
	modified:   platforms/ios/WeexDemo.xcodeproj/project.pbxproj
	modified:   platforms/ios/WeexDemo/WeexDemo-Info.plist
	new file:   platforms/ios/bundlejs/components/HelloWorld.js
	modified:   platforms/ios/bundlejs/index.js
