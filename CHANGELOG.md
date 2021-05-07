# Changelog

## 0.6.8

出力するPDFも、画面プレビュー時の行あたり字数を用いるように変更しました。

bug-fix:
ユーザー設定の正規表現検索置換の初期設定を修正。

## 0.6.4

青空文庫の字下げ注記に、簡易に対応しました。以下のように書くと縦書きのプレビューとPDF出力で3文字まで字下げすることが可能です。

```
［＃ここから３文字下げ］
字下げしたい段落。
［＃ここで字下げ終わり］
```

## 0.6.3

正規表現の検索置換ができなくなっていたのを修正。設定画面の例も修正。

## 0.6.1

会話の中に、サポートする括弧で囲まれた文があったとき、ハイライトするように修正。

HTML形式のコメントを、言語"novel"の blockcomment として定義した。コメントは、縦書きのプレビュー時に吹き出しで表示し、PDFを書き出す時には無視される。