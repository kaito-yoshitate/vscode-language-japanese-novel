import * as vscode from "vscode";

export type NovelSettings = {
  lineHeightRate: number;
  fontFamily: string;
  fontSize: number;
  lineLength: number;
  linesPerPage: number;
  lineHeight: number;
  pageStarting: string;
  userRegex: Array<[string, string]>;
  separator: string;
  sceneNav: boolean;
  previewAnimate: boolean;
  semanticHighligting: boolean;
};

export function getConfig(): NovelSettings {
  const config = vscode.workspace.getConfiguration("Novel");

  const lineHeightRate = 1.75;
  const fontFamily = config.get<string>("preview.fontFamily", "serif");
  const lineLength = config.get<number>("preview.lineLength", 40);
  const fontSize = 1 / lineLength; // フォントサイズは行長分の１
  const linesPerPage = config.get<number>("preview.linesPerPage", 10);
  const lineHeight = fontSize * lineHeightRate;
  const pageStarting = config.get<string>("preview.pageStarting", "左");
  const userRegex = config.get<Array<[string, string]>>(
    "preview.userRegex",
    []
  );
  const separator = config.get<string>("compile.separator", "＊");
  const vscodeTheme = vscode.window.activeColorTheme;
  const sceneNav = config.get<boolean>("editor.sceneNavigator", true);
  const previewAnimate = config.get<boolean>("preview.animate", true);
  const semanticHighligting = config.get<boolean>(
    "preview.semanticHighligting",
    true
  );

  const novelSettings = {
    lineHeightRate,
    fontFamily,
    fontSize,
    lineLength,
    linesPerPage,
    lineHeight,
    pageStarting,
    userRegex,
    separator,
    vscodeTheme,
    sceneNav,
    previewAnimate,
    semanticHighligting,
  };
  return novelSettings;
}
