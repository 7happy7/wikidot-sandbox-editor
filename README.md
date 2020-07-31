> ### 語言
> [**-EN**](https://github.com/7happy7/wikidot-sandbox-editor/tree/master) <br />[**-JP**](https://github.com/7happy7/wikidot-sandbox-editor/tree/jp) <br />[**-ZH-TW**](https://github.com/7happy7/wikidot-sandbox-editor/tree/zh-tw) by [KyleLin921021](https://github.com/KyleLin921021)\(aka [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />[**-CN（简体）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hans) by [Joch2520](https://github.com/Joch2520)\(aka [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />**-CN（繁體）** by [Joch2520](https://github.com/Joch2520)\(aka [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-KO**](https://github.com/7happy7/wikidot-sandbox-editor/tree/ko) by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 
>
> （需要更多語言？ 請在[Wikidot 私信](http://www.wikidot.com/account/messages#/new/3427263) 或其它地方通知我去建立一個新的branch，然後請求Pull-request 。）
----
# Wikidot - 沙盒編輯器（ver 1.0.0）
在沙盒中使用指令快速插入代碼的 Chrome 擴充功能。

# 安裝
1. 下載 zip 壓縮檔並解壓至你的電腦。
2. 打開 Chrome 的擴充功能選項。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `（選項）` > `更多工具` > `擴充功能`
3. 進入 `開發人員模式`（頁面右上角開關）。
4. 點擊 `載入未封裝項目` 並選擇檔案夾。
```
wikidot-sandbox-editor-cn-hant
└── wikidot-sandbox-editor-cn-hant <-選這個
    ├── assets
    │ ├── list.json
    │ └── main.js
    ├── README.md
    └── manifest.json
```
# 指令
（如想要更多選項你可以建立新 Issue 或者 Pull-request 。）
| 指令 | 展示選項 | 說明 |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br /> \*\*項目編號：\*\*SCP-CN-XXXX<br /><br />\*\*項目等級：\*\*Euclid<br /><br />\*\*特殊收容措施：\*\*文字<br /><br />\*\*描述：\*\* |
| `!bhl` | `[[...bhl]]` | [[include :scp-wiki-cn:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ 打開" hide="- 關閉"]]<br />`文字`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-wiki-cn:component:coltop show=+打開\|hide=-關閉]]<br />`文字`< br />[[include :scp-wiki-cn:component:colend]] |
| `!size` | `[[size]]` | [[size 120%]]`文字`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`文字`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`文字`[[span class="rt"]]注音[[/span]][[/ span]] |
| `!image` | `[[...image]]` | [[include component:image-block<br />\|name=\<檔案名稱\><br />\|caption=`文字` <br />]] |
| `!color` | `##color##` | ###b01\|`文字`## |
| `!box` | `黑條(█)` | ██ |
| `!css` | `[[...CSS]]` | [[module CSS]]<br />`文字`<br />[[/module]] |
| `!note` | `[[note]]` | [[note]]<br />`文字`<br />[[/note]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab 標題]]<br />`文字`<br />[[/tab]]<br /> [[/tabview]] |
| `!iframe` | `[[iframe]]` | [[iframe `文字` style=\"border: none; width: 100%;\"]] |
| `!listUsers` | `[[...listUsers]]` | [[include :topia:listusers-1 users="."]]<br />##red\|%%name%%##< br />已登入用戶可以看到此部分文字<br />[[include :topia:listusers-2]]<br />##blue\|訪客##<br />未登入用戶可以看到此部分文字<br />[[include :topia:listusers-3]] |
| `!footer` | `[[...footer-wikiwalk-nav]]` | [[div class="footer-wikiwalk-nav"]]<br />= << [[[SCP-CN-XXXX]]] \| SCP-CN-XXXX \| [[[SCP-CN-XXXX]]] >><br />[[/div]] |

# 預覽
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
