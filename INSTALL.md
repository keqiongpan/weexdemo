# weexdemo工程构建日志


## 环境准备

$node -v
v10.15.3

$npm -v
6.9.0

$weex -v
2.0.0-beta.7
- @weex-cli/generator : v2.0.0-beta.7
- @weex-cli/doctor : v2.0.0-beta.2
- @weex-cli/run : v2.0.0-beta.2
- @weex-cli/device : v2.0.0-beta.2

$weex doctor
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

$pod --version
1.5.3
