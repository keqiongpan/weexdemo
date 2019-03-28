# weexdemo

该工程仅用于分析研究WeeX在前端应用的可行性。


## 1. 环境准备

- [Node.js](https://nodejs.org/en/download/) : 含npm等前端工具；
- [cnpm](http://npm.taobao.org/) : 淘宝npm替代工具，主要使用国内镜像加速npm包下载速度，安装命令： `npm install -g cnpm --registry=https://registry.npm.taobao.org` ；
- [weex-toolkit](https://weex.apache.org/zh/guide/introduction.html) : Weex的脚本架工具，安装命令： `npm install -g weex-toolkit@beta` （当前建议安装beta版，正式版与最新的包管理工具等不兼容）；
- [Xcode](https://developer.apple.com/xcode/) : 针对iOS应用，提供相关编译链工具；
- [CocoaPods](https://cocoapods.org/) : 针对iOS应用，与Xcode搭配使用，作为iOS应用的第三方包管理工具；
- [Android SDK](https://developer.android.com/) : 针对Android应用，提供相关编译链工具。建议安装 Android Stdio ，对 Android SDK 进行安装更新。


## 2. 运行weexdemo工程

1. 下载weexdemo源代码：

```
$ git clone https://github.com/keqiongpan/weexdemo.git
```

2. 初始化编译环境：

```
$ cd ./weexdemo
$ npm run inst
```

3. 运行各个平台weexdemo应用

```
$ weex run web
$ weex run ios
$ weex run android
```

对于详细的工程搭建细节，可以参考 [INSTALL.md](INSTALL.md) 文件，里面详细记录了环境细节及命令执行结果。


## 3. 工程结构

主要分成三部份：weex源代码（即web版源代码）、iOS版源代码、Android版源代码，以及编译产生的文件。

### 3.1 web版源代码

```
./weexdemo/.babelrc
./weexdemo/.eslintrc.js
./weexdemo/.eslintignore
./weexdemo/.postcssrc.js
./weexdemo/README.md
./weexdemo/package.json
./weexdemo/ios.config.json
./weexdemo/android.config.json
./weexdemo/webpack.config.js
./weexdemo/configs/hotreload.js
./weexdemo/configs/webpack.common.conf.js
./weexdemo/configs/config.js
./weexdemo/configs/webpack.release.conf.js
./weexdemo/configs/webpack.dev.conf.js
./weexdemo/configs/webpack.prod.conf.js
./weexdemo/configs/logo.png
./weexdemo/configs/utils.js
./weexdemo/configs/vue-loader.conf.js
./weexdemo/configs/plugin.js
./weexdemo/configs/webpack.test.conf.js
./weexdemo/configs/helper.js
./weexdemo/plugins/plugins.json
./weexdemo/platforms/platforms.json
./weexdemo/src/index.vue
./weexdemo/src/components/HelloWorld.vue
./weexdemo/src/entry.js
./weexdemo/web/preview.html
./weexdemo/web/index.html
./weexdemo/web/assets/qrcode.js
./weexdemo/web/assets/preview.css
./weexdemo/test/unit/specs/index.spec.js
./weexdemo/test/unit/.eslintrc
./weexdemo/test/unit/index.js
./weexdemo/test/unit/karma.conf.js
```

### 3.2 iOS版源代码：

```
./weexdemo/platforms/ios/README.md
./weexdemo/platforms/ios/LICENSE
./weexdemo/platforms/ios/weex.png
./weexdemo/platforms/ios/weex@2x.png
./weexdemo/platforms/ios/Podfile
./weexdemo/platforms/ios/WeexDemo.xcworkspace/contents.xcworkspacedata
./weexdemo/platforms/ios/WeexDemo.xcodeproj/project.pbxproj
./weexdemo/platforms/ios/WeexDemo/main.m
./weexdemo/platforms/ios/WeexDemo/config.xml
./weexdemo/platforms/ios/WeexDemo/DemoDefine.h
./weexdemo/platforms/ios/WeexDemo/AppDelegate.h
./weexdemo/platforms/ios/WeexDemo/AppDelegate.m
./weexdemo/platforms/ios/WeexDemo/WeexConfig/WeexSDKManager.h
./weexdemo/platforms/ios/WeexDemo/WeexConfig/WeexSDKManager.m
./weexdemo/platforms/ios/WeexDemo/WeexConfig/WXImgLoaderDefaultImpl.h
./weexdemo/platforms/ios/WeexDemo/WeexConfig/WXImgLoaderDefaultImpl.m
./weexdemo/platforms/ios/WeexDemo/WeexScanner/WXDemoViewController.h
./weexdemo/platforms/ios/WeexDemo/WeexScanner/WXDemoViewController.m
./weexdemo/platforms/ios/WeexDemo/WeexScanner/UIViewController+WXDemoNaviBar.m
./weexdemo/platforms/ios/WeexDemo/WeexScanner/UIViewController+WXDemoNaviBar.h
./weexdemo/platforms/ios/WeexDemo/weex-icon.png
./weexdemo/platforms/ios/WeexDemo/WeexDemo-Info.plist
./weexdemo/platforms/ios/WeexDemo/Assets.xcassets/...（此处省略）
./weexdemo/platforms/ios/WeexDemo/Images.xcassets/Brand Assets.launchimage/Contents.json
./weexdemo/platforms/ios/WeexUITestDemoUITests/WeexUITestDemoUITests.m
./weexdemo/platforms/ios/WeexUITestDemoUITests/Info.plist
./weexdemo/platforms/ios/WeexUITestDemo-Info.plist
./weexdemo/platforms/ios/WeexDemoTests/WeexDemoTests.m
./weexdemo/platforms/ios/WeexDemoTests/Info.plist
./weexdemo/platforms/ios/app/src/main/assets/dist/index.js
./weexdemo/platforms/ios/app/src/main/assets/dist/components/HelloWorld.js
./weexdemo/platforms/ios/bundlejs/index.js
./weexdemo/platforms/ios/bundlejs/components/HelloWorld.js
```

### 3.3 Android版源代码

```
./weexdemo/platforms/android/.gitignore
./weexdemo/platforms/android/.weex_plugin.json
./weexdemo/platforms/android/.project
./weexdemo/platforms/android/README.md
./weexdemo/platforms/android/LICENSE
./weexdemo/platforms/android/NOTICE
./weexdemo/platforms/android/codeStyleSettings.xml
./weexdemo/platforms/android/gradlew
./weexdemo/platforms/android/gradlew.bat
./weexdemo/platforms/android/build.gradle
./weexdemo/platforms/android/settings.gradle
./weexdemo/platforms/android/gradle.properties
./weexdemo/platforms/android/gradle/wrapper/gradle-wrapper.jar
./weexdemo/platforms/android/gradle/wrapper/gradle-wrapper.properties
./weexdemo/platforms/android/app/.gitignore
./weexdemo/platforms/android/app/.project
./weexdemo/platforms/android/app/build.gradle
./weexdemo/platforms/android/app/proguard-rules.pro
./weexdemo/platforms/android/app/tools/debug.keystore
./weexdemo/platforms/android/app/src/main/res/...（此处省略）
./weexdemo/platforms/android/app/src/main/AndroidManifest.xml
./weexdemo/platforms/android/app/src/main/java/com/weex/app/extend/BlurTool.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/extend/BlurTransformation.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/extend/ImageAdapter.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/extend/WXEventModule.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/util/AppConfigXmlParser.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/util/CommonUtils.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/util/AppPreferences.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/util/AppConfig.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/util/Constants.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/WXPageActivity.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/SplashActivity.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/WXApplication.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/AbsWeexActivity.java
./weexdemo/platforms/android/app/src/main/java/com/weex/app/hotreload/HotReloadManager.java
./weexdemo/platforms/android/app/src/main/assets/dist/index.js
./weexdemo/platforms/android/app/src/main/assets/index.js
./weexdemo/platforms/android/app/src/main/assets/dist/components/HelloWorld.js
./weexdemo/platforms/android/bundlejs/index.js
./weexdemo/platforms/android/bundlejs/components/HelloWorld.js
```


### 3.4 编译产生的临时文件

经由 `npm run build` 命令构建工程后产生的文件如下：

```
./weexdemo/.temp/index.js
./weexdemo/.temp/index.web.js
./weexdemo/.temp/components/HelloWorld.js
./weexdemo/.temp/components/HelloWorld.web.js
./weexdemo/dist/vendor.web.js
./weexdemo/dist/index.js
./weexdemo/dist/index.web.js
./weexdemo/dist/components/HelloWorld.js
./weexdemo/dist/components/HelloWorld.web.js
```

经由 `npm run ios` 命令在模拟器运行iOS版应用，会将上面构建的index.js、HelloWorld.js文件复制到iOS工程目录./platforms/ios/bundlejs下面（./platforms/ios/app目录中的内容应该只是文件中转的位置，并未包含在最终的工程中）：

```
./weexdemo/platforms/ios/app/src/main/assets/dist/index.js
./weexdemo/platforms/ios/app/src/main/assets/dist/components/HelloWorld.js
./weexdemo/platforms/ios/bundlejs/index.js
./weexdemo/platforms/ios/bundlejs/components/HelloWorld.js
```

经由 `npm run android` 命令在模拟器运行Android版应用，会将上面构建的index.js、HelloWorld.js文件复制到Android工程目录./platforms/android/bundlejs下面（./platforms/android/app目录中的内容应该只是文件中转的位置，并未包含在最终的工程中）：

```
./weexdemo/platforms/android/app/src/main/assets/index.js
./weexdemo/platforms/android/app/src/main/assets/dist/components/HelloWorld.js
./weexdemo/platforms/android/bundlejs/index.js
./weexdemo/platforms/android/bundlejs/components/HelloWorld.js
```

注意：对于编译打包后的index.js、HelloWorld.js文件，在Web/iOS/Andorid三个版本的工程中，文件内容是完全一致的。可以认为如果不调用平台特定代码，三个平台的weex打包后的内容是一致通用的。
