> ### 他言語版
> [**-EN**](https://github.com/7happy7/wikidot-sandbox-editor) <br />**-JP** <br />[**-ZH-TW**](https://github.com/7happy7/wikidot-sandbox-editor/tree/zh-tw)  by [KyleLin921021](https://github.com/KyleLin921021)\(a.k.a. [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />[**-CN（简体）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hans) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-CN（繁體）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hant) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-KO**](https://github.com/7happy7/wikidot-sandbox-editor/tree/ko) by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 

----
# Wikidot - サンドボックスエディター (ver 1.0.1)
コマンドを使用して入力候補を表示するChrome拡張です。

# インストール
1. zipファイルをダウンロードし、ローカル環境で解凍。
2. Chrome拡張に移動。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `(config)` > `その他のツール` > `拡張機能`
3. `デベロッパー モード`を有効化(ページ右上のトグルをクリック)。
4. `パッケージ化されていない拡張機能を読み込む`をクリックし、以下のファイルを選択。
```
wikidot-sandbox-editor-jp
└── wikidot-sandbox-editor-jp <-これ！
    ├── assets
    │   ├── list.json
    │   └── main.js
    ├── README.md
    └── manifest.json
```
# コマンド
(更なるオプションが欲しいならば、"Issues"を追加、あるいは"Pull-request"をしてください。)
| コマンド  | 表示 | 説明 |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**アイテム番号:\*\* SCP-XXXX-JP<br /><br />\*\*オブジェクトクラス:\*\* Euclid<br /><br />\*\*特別収容プロトコル:\*\* text<br /><br />\*\*説明:\*\*  |
| `!jstyle` | `[[...jstyle]]` | [[include :scp-jp-sandbox2:inc:jstyles]] |
| `!bhl` | `[[...bhl]]` | [[include :scp-jp:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ 開く" hide="- 閉じる"]]<br />`text`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include component:coltop show=+ 開く\|hide=- 閉じる]]<br />`text`<br />[[include component:colend nohide=true]] |
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

# プレビュー
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
