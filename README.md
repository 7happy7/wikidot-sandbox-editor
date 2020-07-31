> ### 語言
> [**-EN**](https://github.com/7happy7/wikidot-sandbox-editor) <br />[**-JP**](https://github.com/7happy7/wikidot-sandbox-editor/tree/jp) <br />-ZH-TW  by [KyleLin921021](https://github.com/KyleLin921021)\(a.k.a. [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />[**-CN（简体）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hans) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-CN（繁體）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hant) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-KO**](https://github.com/7happy7/wikidot-sandbox-editor/tree/ko) by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 


----
# Wikidot - 沙盒編輯器 （ver 1.0.0）
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
└── wikidot-sandbox-editor-zh-tw <-這一個！
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
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**項目編號：\*\* SCP-ZH-XXXX<br /><br />\*\*項目等級：\*\* Euclid<br /><br />\*\*特殊收容措施：\*\* 文字<br /><br />\*\*描述：\*\*  |
| `!bhl` | `[[...bhl]]` | [[include :scp-zh-tr:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ 開啟" hide="- 關閉"]]<br />`文字`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-zh-tr:component:coltop show=+開啟\|hide=-關閉]]<br />`文字`<br />[[include :scp-zh-tr:component:colend]] |
| `!size` | `[[size]]` | [[size 120%]]`文字`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`文字`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`文字`[[span class="rt"]]ruby[[/span]][[/span]] |
| `!image` | `[[...image]]` | [[include :scp-zh-tr:component:image-block<br />\|name=\<file name\><br />\|caption=`文字`<br />]] |
| `!color` | `##color##` | ###b01\|`文字`## |
| `!box` | `黑框(█)` | ██ |
| `!css` | `[[...CSS]]` | [[module CSS]]<br />`文字`<br />[[/module]] |
| `!note` | `[[note]]` | [[note]]<br />`文字`<br />[[/note]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab 標題]]<br />`文字`<br />[[/tab]]<br />[[/tabview]] |
| `!iframe` | `[[iframe]]` | [[iframe `文字` style=\"border: none; width: 100%;\"]] |
| `!listUsers` | `[[...listUsers]]` | [[include :topia:listusers-1 users="."]]<br />##red\|%%name%%##<br />已登入用戶可見文字<br />[[include :topia:listusers-2]]<br />##blue\|訪客##<br />未登入用戶可見文字<br />[[include :topia:listusers-3]] |
| `!footer` | `[[...footer-wikiwalk-nav]]` | [[div class="footer-wikiwalk-nav"]]<br />= << [[[SCP-ZH-XXXX]]] \| SCP-ZH-XXXX \| [[[SCP-ZH-XXXX]]] >><br />[[/div]] |

# 預覽
----
![scvdfc](https://user-images.githubusercontent.com/43753315/86227118-2dd06080-bbbf-11ea-96bb-eb1a725f3e96.png)
----
![safgshdjf](https://user-images.githubusercontent.com/43753315/86227245-53f60080-bbbf-11ea-87aa-66ee8abee1f6.png)
