> ### Languages
> **-EN** <br />[**-JP**](https://github.com/7happy7/wikidot-sandbox-editor/tree/jp) <br />[**-ZH-TW**](https://github.com/7happy7/wikidot-sandbox-editor/tree/zh-tw) by [KyleLin921021](https://github.com/KyleLin921021)\(a.k.a. [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />[**-CN（简体）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hans) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-CN（繁體）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hant) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-KO**](https://github.com/7happy7/wikidot-sandbox-editor/tree/ko) by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 
> 
> (Need more languages? Please call me via [Wikidot PM](http://www.wikidot.com/account/messages#/new/3427263) or anything else to create a new branch, and do "Pull-request".)
----
# Wikidot - Sandbox Editor (ver 1.0.1)
Chrome Extension for displaying input candidates on your sandbox-page by using commands.

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
(You can add "Issues" or do "Pull-request" if you want more options.)
| Command  | Display | Description |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**Item #:\*\* SCP-XXXX<br /><br />\*\*Object Class:\*\* Euclid<br /><br />\*\*Special Containment Procedures:\*\* text<br /><br />\*\*Description:\*\*  |
| `!bhl` | `[[...bhl]]` | [[include :scp-wiki:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ open" hide="- close"]]<br />`text`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-int:component:coltop show=+open\|hide=-close]]<br />`text`<br />[[include :scp-int:component:colend]] |
| `!size` | `[[size]]` | [[size 120%]]`text`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`text`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`text`[[span class="rt"]]ruby[[/span]][[/span]] |
| `!image` | `[[...image]]` | [[include component:image-block<br />\|name=\<file name\><br />\|caption=`text`<br />]] |
| `!color` | `##color##` | ###b01\|`text`## |
| `!box` | `blackbox(█)` | ██ |
| `!css` | `[[...CSS]]` | [[module CSS]]<br />`text`<br />[[/module]] |
| `!note` | `[[note]]` | [[note]]<br />`text`<br />[[/note]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab title]]<br />`text`<br />[[/tab]]<br />[[/tabview]] |
| `!iframe` | `[[iframe]]` | [[iframe `text` style=\"border: none; width: 100%;\"]] |
| `!listUsers` | `[[...listUsers]]` | [[include :topia:listusers-1 users="."]]<br />##red\|%%name%%##<br />text for wikidot user<br />[[include :topia:listusers-2]]<br />##blue\|guest##<br />text for non-wikidot user<br />[[include :topia:listusers-3]] |
| `!footer` | `[[...footer-wikiwalk-nav]]` | [[div class="footer-wikiwalk-nav"]]<br />= << [[[SCP-XXXX]]] \| SCP-XXXX \| [[[SCP-XXXX]]] >><br />[[/div]] |

# Preview
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
