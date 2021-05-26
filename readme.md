# Visual Studio小説モード

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

小説を書く際に用いる言語モードです。会話や各種括弧、青空文庫の注記などをハイライトしたテキストをリアルタイム更新する縦書きのプレビューで確かめながら執筆を進められます。
作業中のフォルダー（または「原稿」「Draft」フォルダー）に置いてあるテキストファイルを結合し、縦書きのPDFを出力することも可能です。

![カラーリング](https://github.com/ttrace/vscode-language-japanese-novel/raw/master/resource/highlight-and-vertical.png)

## 実装しているハイライト
- 鉤括弧（「」）で挟まれた会話
- 青空文庫の注記
    - ルビ
    - ［＃「」に傍点］
    - そのほか、［＃……］で記される記法
- 数字と単位

## 縦書きプレビュー

コマンドパレットの\[Novel:縦書きプレビュー\]で、現在使っているエディタのテキストを縦書きプレビューすることができます。  
プレビューはlocalhost:8080に出力していますので、ブラウザーや同じLANの他コンピュターから閲覧することもできます。  
小さな画面で書く場合、またはVS Codeのウインドウを無駄に使いたくない場合には、\[Novel:プレビューサーバーを起動\]を実行して、別画面のブラウザーやブラウザーや他のコンピューター、スマートフォン、タブレットのブラウザーから縦書きプレビューを閲覧することもできます。

### プレビュー設定

Extension Settings で、文字サイズと一行あたりの文字数、ページあたりの行数を設定してお使いください。正規表現による検索置換も実装しましたので、オリジナルのタグを挿入することも可能です。

![プレビュー画像](https://github.com/ttrace/vscode-language-japanese-novel/raw/master/resource/preview-settings.png)

#### プレビューフォントの設定
プレビューフォントの設定が可能です。

contributed by [yasudaz](https://github.com/yasudaz)

#### 版面指定

文字サイズ、文字数、1ページあたりの行数を指定できます。

#### 正規表現検索置換

出力するHTMLを検索置換することができます。オリジナルのタグを挿入する場合などにご利用ください。  

二桁の半角数字を縦中横にするタグを挿入する正規表現の例。
```
["([0-9]{2,})","<span class=\"tcy\">$1</span>"]
```

## PDF出力

この小説言語モードは、実験的に[Vivliostyle/CLI](https://vivliostyle.org/ja/)を用いて縦書きのPDFを出力します。
ワークスペースが必要になるので、フォルダを開いて利用してください。

PDF出力を試したい方は、以下のコマンドをターミナルで実行して、VivlioStleをインストールしてからPDF出力を実行してください。

```
npm install @vivliostyle/cli -g
```

## テキスト結合

ワークスペース中のテキストファイルを結合し、publishフォルダーの中にプロジェクトのフォルダー名のファイルを作ります。

ワークスペースに「原稿」あるいは「Draft」という名称のフォルダーがある場合には、そのフォルダーの中のテキストのみ結合します。資料などをワークスペースに保存している場合には、テキストファイルを「原稿（あるいはDraft」フォルダーに入れておいてください。

novel-writerは階層化されたフォルダーの中のテキストも結合することができます。  
フォルダーごしに結合される時に、区切り文字を挿入できます。現在のバージョンは3文字落とした「＊」を挿入します。

## 参考にした文献
VSCodeで俺々言語モードを作る
https://qiita.com/takl/items/ba2f63db515f66585d1f

Language Grammars
https://macromates.com/manual/en/language_grammars

## copyright
MIT

なお縦書き表示を行う方法については、MITライセンスで公開されているn-fukiju/縦書きプレビューのコードを大いに参考にさせていただきました。
幾らかはそのまま利用させていただいています。
[n-fukuju/vertical-writing-vsce](https://github.com/n-fukuju/vertical-writing-vsce)
