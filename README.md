# Wikidot - Sandbox Editor (beta version)
Chrome Extension for displaying input candidates on your sandbox-page.

# Install
1. Download a zip file and unzip it to the local.
2. Go to Chrome Extension.
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `(config)` > `More tools` > `Extensions`
3. Enable `Developer mode` (click a toggle at the upper right of the page).
4. Click `LOAD UNPACKED` and select the following file.
```
wikidot-sandbox-editor-master
└── wikidot-sandbox-editor-master <-this one!
    ├── assets
    │   ├── list.json
    │   └── main.js
    ├── README.md
    └── manifest.json
```
# Commands
(You can Pull-request if you want more options.)
| Command  | Display | Description |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**Item #:\*\* SCP-XXXX<br /><br />\*\*Object Class:\*\* Euclid<br /><br />\*\*Special Containment Procedures:\*\* text<br /><br />\*\*Description:\*\*  |
| `!bhl` | `[[...bhl]]` | [[include :scp-wiki:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ open" hide="- close"]]<br />`text`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-int:component:coltop show=+open\|hide=-close]]<br />`text`<br />[[include :scp-int:component:colend]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab title]]<br />`text`<br />[[/tab]]<br />[[/tabview]] |
| `!size` | `[[size]]` | [[size 120%]]`text`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`text`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`text`[[span class="rt"]]ruby[[/span]][[/span]] |
| `!image` | `[[...image]]` | [[include component:image-block<br />\|name=\<file name\><br />\|caption=`text`<br />]] |
| `!color` | `##color##` | ###b01\|`text`## |
| `!box` | `blackbox(█)` | ██ |

# Preview
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
