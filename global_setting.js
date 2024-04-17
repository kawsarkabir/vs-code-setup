// my global vs code setting copy and just pase before install prev extensions

{
    "editor.fontSize": 20,
    "editor.fontFamily": "Operator Mono XLight",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.tokenColorCustomizations": {
      "textMateRules": [
        {
          "scope": "comment",
          "settings": {
            "fontStyle": "italic"
          }
        }
      ]
    },
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.cursorBlinking": "expand",
    // lws global settings start here
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
      "source.fixAll.tslint": "explicit",
      "source.organizeImports": "explicit"
    },
    "eslint.run": "onSave",
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    },
    "path-autocomplete.extensionOnImport": true,
    "path-autocomplete.excludedItems": {
      "*/.js": {
        "when": "**"
      },
      "*/.jsx": {
        "when": "**"
      }
    },
    "javascript.validate.enable": false,
    "typescript.validate.enable": false,
    // lws global settings end here
  
    "[javascript]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
      "editor.formatOnSave": false,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "terminal.integrated.fontSize": 16,
    "terminal.integrated.fontWeight": "normal",
    "terminal.integrated.fontFamily": "Fira Code, Operator Mono",
    "workbench.colorTheme": "Learn with Sumit - Peace of the eye",
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorCustomizations": {
      "terminal.background": "#1D2021",
      "terminal.foreground": "#A89984",
      "terminalCursor.background": "#A89984",
      "terminalCursor.foreground": "#A89984",
      "terminal.ansiBlack": "#1D2021",
      "terminal.ansiBlue": "#0D6678",
      "terminal.ansiBrightBlack": "#665C54",
      "terminal.ansiBrightBlue": "#0D6678",
      "terminal.ansiBrightCyan": "#8BA59B",
      "terminal.ansiBrightGreen": "#95C085",
      "terminal.ansiBrightMagenta": "#8F4673",
      "terminal.ansiBrightRed": "#FB543F",
      "terminal.ansiBrightWhite": "#FDF4C1",
      "terminal.ansiBrightYellow": "#FAC03B",
      "terminal.ansiCyan": "#8BA59B",
      "terminal.ansiGreen": "#95C085",
      "terminal.ansiMagenta": "#8F4673",
      "terminal.ansiRed": "#FB543F",
      "terminal.ansiWhite": "#A89984",
      "terminal.ansiYellow": "#FAC03B"
    },
    "vsicons.dontShowNewVersionMessage": true,
    "workbench.sideBar.location": "right",
    "liveServer.settings.donotShowInfoMsg": true,
    "files.autoSave": "afterDelay",
    "editor.autoClosingBrackets": "always",
    "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
    "terminal.integrated.profiles.windows": {
      "PowerShell": {
        "source": "PowerShell",
        "icon": "terminal-powershell"
      },
      "Command Prompt": {
        "path": [
          "${env:windir}\\Sysnative\\cmd.exe",
          "${env:windir}\\System32\\cmd.exe"
        ],
        "args": [],
        "icon": "terminal-cmd"
      },
      "Git Bash": {
        "source": "Git Bash"
      },
      "Windows PowerShell": {
        "path": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
      }
    },
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "git.openRepositoryInParentFolders": "always",
    "code-runner.runInTerminal": true,
    "[c]": {
      "editor.defaultFormatter": "ms-vscode.cpptools"
    },
    "code-runner.executorMap": {
      "javascript": "node",
      "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
      "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt.exe && $dir$fileNameWithoutExt.exe",
      "zig": "zig run",
      "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt.exe && $dir$fileNameWithoutExt.exe",
      "objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
      "php": "php",
      "python": "python -u",
      "perl": "perl",
      "perl6": "perl6",
      "ruby": "ruby",
      "go": "go run",
      "lua": "lua",
      "groovy": "groovy",
      "powershell": "powershell -ExecutionPolicy ByPass -File",
      "bat": "cmd /c",
      "shellscript": "bash",
      "fsharp": "fsi",
      "csharp": "scriptcs",
      "vbscript": "cscript //Nologo",
      "typescript": "ts-node",
      "coffeescript": "coffee",
      "scala": "scala",
      "swift": "swift",
      "julia": "julia",
      "crystal": "crystal",
      "ocaml": "ocaml",
      "r": "Rscript",
      "applescript": "osascript",
      "clojure": "lein exec",
      "haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
      "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
      "racket": "racket",
      "scheme": "csi -script",
      "ahk": "autohotkey",
      "autoit": "autoit3",
      "dart": "dart",
      "pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
      "d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
      "haskell": "runghc",
      "nim": "nim compile --verbosity:0 --hints:off --run",
      "lisp": "sbcl --script",
      "kit": "kitc --run",
      "v": "v run",
      "sass": "sass --style expanded",
      "scss": "scss --style expanded",
      "less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
      "FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
      "fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
      "fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
      "fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
      "sml": "cd $dir && sml $fileName",
      "mojo": "mojo run"
    },
    "C_Cpp.default.cppStandard": "c++20",
    "C_Cpp.default.cStandard": "c11",
    "code-runner.saveAllFilesBeforeRun": true,
    "code-runner.terminalRoot": "/",
    "code-runner.executorMapByGlob": {
      "pom.xml": "cd $dir && mvn clean package"
    },
    "cmake.showOptionsMovedNotification": false,
    "[cpp]": {
      "editor.defaultFormatter": "ms-vscode.cpptools"
    },
    "[snippets]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    }
  }
  