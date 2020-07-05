> ### 언어
> [**-EN**](https://github.com/7happy7/wikidot-sandbox-editor) <br />[**-JP**](https://github.com/7happy7/wikidot-sandbox-editor/tree/jp) <br />[**-ZH-TW**](https://github.com/7happy7/wikidot-sandbox-editor/tree/zh-tw) by [KyleLin921021](https://github.com/KyleLin921021)\(a.k.a. [ChAoS_UnItY](http://www.wikidot.com/user:info/chaos-unity)\) <br />[**-CN（简体）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hans) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\) <br />[**-CN（繁體）**](https://github.com/7happy7/wikidot-sandbox-editor/tree/cn-hant) by [Joch2520](https://github.com/Joch2520)\(a.k.a. [Jochoi](http://www.wikidot.com/user:info/jochoi)\)<br />**-KO** by [Dr Devan](http://www.wikidot.com/user:info/Dr-Devan) 
> 
> (다른 언어가 더 필요하신가요? [Wikidot PM](http://www.wikidot.com/account/messages#/new/3427263) 혹은 새 언어판을 생성하시고 "Pull-request" 해주세요.)
----
# Wikidot - 샌드박스 에디터 (베타 버전)
명령어를 사용하여 샌드박스 페이지에 입력 제안을 표시하기 위한 크롬 확장 프로그램.

# 설치
1. 압축파일을 다운로드 하신 후 압축을 풀어주세요.
2. 크롬 확장 프로그램을 열어주세요.
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `(설정)` > `도구 더보기` > `확장 프로그램(E)`
3. `개발자 모드`를 활성화해주세요 (페이지 오른쪽 위 토글을 클릭해주세요).
4. `압축해제된 확장 프로그램을 로드합니다.`를 선택하시고 아래 파일을 선택하세요.
```
wikidot-sandbox-editor-ko
└── wikidot-sandbox-editor-ko <-이 폴더를 선택하세요!
    ├── assets
    │   ├── list.json
    │   └── main.js
    ├── README.md
    └── manifest.json
```
# 명령어
("Issues" 혹은 "Pull-request"로 추가적인 옵션을 더할 수 있습니다.)
| 명령어 | 표시 | 설명 |
|-----------|-------------|-------------|
| `!format` | `[[...format]]` | [[>]]<br />[[module Rate]]<br />[[/>]]<br /><br />\**일련번호:\*\* SCP-XXXX<br /><br />\*\*등급:\*\* 유클리드(Euclid)<br /><br />\*\*특수 격리 절차:\*\* 텍스트<br /><br />\*\*설명:\*\*  |
| `!bhl` | `[[...bhl]]` | [[include :scp-wiki:theme:black-highlighter-theme]] |
| `!collapsible` | `[[collapsible]]` | [[collapsible show="+ 펼치기" hide="- 접기"]]<br />`텍스트`<br />[[/collapsible]] |
| `!colmod` | `[[...colmod]]` | [[include :scp-int:component:coltop show=+ 펼치기\|hide=- 접기]]<br />`텍스트`<br />[[include :scp-int:component:colend]] |
| `!size` | `[[size]]` | [[size 120%]]`텍스트`[[/size]] |
| `!footnote` | `[[footnote]]` | [[footnote]]`텍스트`[[/footnote]] |
| `!ruby` | `[[...ruby]]` | [[span class="ruby"]]`텍스트`[[span class="rt"]]루비[[/span]][[/span]] |
| `!image` | `[[...image]]` | [[include component:image-block<br />\|name=\<파일명\><br />\|caption=`텍스트`<br />]] |
| `!color` | `##color##` | ###b01\|`텍스트`## |
| `!box` | `블랙박스(█)` | ██ |
| `!css` | `[[...CSS]]` | [[module CSS]]<br />`텍스트`<br />[[/module]] |
| `!note` | `[[note]]` | [[note]]<br />`텍스트`<br />[[/note]] |
| `!tabview` | `[[tabview]]` | [[tabview]]<br />[[tab title]]<br />`텍스트`<br />[[/tab]]<br />[[/tabview]] |
| `!iframe` | `[[iframe]]` | [[iframe `텍스트` style=\"border: none; width: 100%;\"]] |
| `!listUsers` | `[[...listUsers]]` | [[include :topia:listusers-1 users="."]]<br />##red\|%%name%%##<br />위키닷 유저 텍스트<br />[[include :topia:listusers-2]]<br />##blue\|guest##<br />위키닷 유저 텍스트<br />[[include :topia:listusers-3]] |
| `!footer` | `[[...footer-wikiwalk-nav]]` | [[div class="footer-wikiwalk-nav"]]<br />= << [[[SCP-XXXX]]] \| SCP-XXXX \| [[[SCP-XXXX]]] >><br />[[/div]] |

# 미리보기
----
![scvdfc](https://user-images.githubusercontent.com/49482246/85929610-5a4f5880-b8f1-11ea-9532-920656164240.png)
----
![safgshdjf](https://user-images.githubusercontent.com/49482246/85929632-7f43cb80-b8f1-11ea-8bdf-c57b5dd091d1.png)
