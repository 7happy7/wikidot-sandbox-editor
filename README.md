> ### 語言
> [-EN](https://github.com/7happy7/wikidot-sandbox-editor), [-JP](https://github.com/7happy7/wikidot-sandbox-editor-ja), -ZH-TW

----
# Wikidot - 沙盒編輯器 （測試版）
利用指令來呈現輸入預測的Chrome擴充功能。

# 安裝
1. 下載本專案並解壓縮。
2. 前往Chrome的擴充功能頁面。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `（自訂及管理Google Chrome）` > `更多工具` > `擴充功能`
3. 啟用 `開發人員模式` (勾選右上角的切換鈕)。
4. 點擊 `載入未封裝項目` 並選擇解壓縮後的檔案。
```
wikidot-sandbox-editor-master
└── wikidot-sandbox-editor-master <-這一個！
    ├── assets
    │   ├── list.json
    │   └── main.js
    ├── README.md
    └── manifest.json
```
# 指令
（如果你想要更多功能，你可以新增「issue」或是新增一個「Pull-request」。）
| 指令  | 預覽 | 說明 |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**項目編號：\*\* SCP-ZH-XXXX<br /><br />\*\*項目等級：\*\* Euclid<br /><br />\*\*特殊收容措施：\*\* text<br /><br />\*\*描述：\*\*  |
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

# 預覽
----
![scvdfc](https://user-images.githubusercontent.com/43753315/86227118-2dd06080-bbbf-11ea-96bb-eb1a725f3e96.png)
----
![safgshdjf](https://user-images.githubusercontent.com/43753315/86227245-53f60080-bbbf-11ea-87aa-66ee8abee1f6.png)
