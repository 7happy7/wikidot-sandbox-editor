> ### 语言
> [**-EN**](https://github.com/7happy7/wikidot-sandbox-editor/tree/master) <br />[**-JP**](https://github.com/7happy7/wikidot-sandbox-editor/tree/jp) <br />[**-ZH-TW**](https://github.com/7happy7/wikidot-sandbox-editor/tree/zh-tw) by [KyleLin921021](https://github.com/KyleLin921021)\(a.k.a. [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />**-CN（简体）** by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-CN（繁體）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hant) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-KO**](https://github.com/7happy7/wikidot-sandbox-editor/tree/ko) by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 
>
> （需要更多语言？ 请在 [Wikidot 私信](http://www.wikidot.com/account/messages#/new/3427263) 或其它地方通知我去建立一个新的 branch，然后请求 Pull-request。）
----
# Wikidot - 沙盒编辑器（beta测试版）
在沙盒中使用指令快速插入代码的 Chrome 扩展程序。

# 安装
1. 下载 zip 压缩档并解压至你的电脑。
2. 打开 Chrome 的扩展程序选项。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `（选项）` > `更多工具` > `扩展程序`
3. 进入 `开发者模式`（页面右上角开关）。
4. 点击 `加载已解压的扩展程序` 并选择档案夹。
```
wikidot-sandbox-editor-cn-hans
└── wikidot-sandbox-editor-cn-hans <-选这个
    ├── assets
    │   ├── list.json
    │   └── main.js
    ├── README.md
    └── manifest.json
```
# 指令
（如想要更多选项你可以建立新 Issue 或者 Pull-request 。）
| 指令 | 展示选项 | 说明 |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\*\*项目编号：\*\*SCP-CN-XXXX<br /><br />\*\*项目等级：\*\*Euclid<br /><br />\*\*特殊收容措施：\*\*文字<br /><br />\*\*描述：\*\*  |
| `!bhl` | `[[...bhl]]` | [[include :scp-wiki-cn:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ 打开" hide="- 关闭"]]<br />`文字`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-wiki-cn:component:coltop show=+打开\|hide=-关闭]]<br />`文字`<br />[[include :scp-wiki-cn:component:colend]] |
| `!size` | `[[size]]` | [[size 120%]]`文字`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`文字`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`文字`[[span class="rt"]]注音[[/span]][[/span]] |
| `!image` | `[[...image]]` | [[include component:image-block<br />\|name=\<档案名称\><br />\|caption=`文字`<br />]] |
| `!color` | `##color##` | ###b01\|`文字`## |
| `!box` | `黑条(█)` | ██ |
| `!css` | `[[...CSS]]` | [[module CSS]]<br />`文字`<br />[[/module]] |
| `!note` | `[[note]]` | [[note]]<br />`文字`<br />[[/note]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab 标题]]<br />`文字`<br />[[/tab]]<br />[[/tabview]] |
| `!iframe` | `[[iframe]]` | [[iframe `文字` style=\"border: none; width: 100%;\"]] |
| `!listUsers` | `[[...listUsers]]` | [[include :topia:listusers-1 users="."]]<br />##red\|%%name%%##<br />已登入用户可以看到此部分文字<br />[[include :topia:listusers-2]]<br />##blue\|访客##<br />未登入用户可以看到此部分文字<br />[[include :topia:listusers-3]] |
| `!footer` | `[[...footer-wikiwalk-nav]]` | [[div class="footer-wikiwalk-nav"]]<br />= << [[[SCP-CN-XXXX]]] \| SCP-CN-XXXX \| [[[SCP-CN-XXXX]]] >><br />[[/div]] |

# 预览
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
