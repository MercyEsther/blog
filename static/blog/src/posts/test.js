export default {
    post: `<!doctype html>
    <html>
    <head>
    <meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
    <title>test.md</title><link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet' type='text/css'><style type='text/css'>html, body {overflow-x: initial !important;}.CodeMirror { height: auto; }
    .CodeMirror-scroll { overflow-y: hidden; overflow-x: auto; }
    .CodeMirror-lines { padding: 4px 0px; }
    .CodeMirror pre { }
    .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler { background-color: white; }
    .CodeMirror-gutters { border-right-width: 1px; border-right-style: solid; border-right-color: rgb(221, 221, 221); background-color: rgb(247, 247, 247); white-space: nowrap; }
    .CodeMirror-linenumbers { }
    .CodeMirror-linenumber { padding: 0px 3px 0px 5px; text-align: right; color: rgb(153, 153, 153); }
    .CodeMirror div.CodeMirror-cursor { border-left-width: 1px; border-left-style: solid; border-left-color: black; z-index: 3; }
    .CodeMirror div.CodeMirror-secondarycursor { border-left-width: 1px; border-left-style: solid; border-left-color: silver; }
    .CodeMirror.cm-keymap-fat-cursor div.CodeMirror-cursor { width: auto; border: 0px; background-color: rgb(119, 238, 119); z-index: 1; background-position: initial initial; background-repeat: initial initial; }
    .CodeMirror div.CodeMirror-cursor.CodeMirror-overwrite { }
    .cm-tab { display: inline-block; }
    .cm-s-typora-default .cm-header, .cm-s-typora-default .cm-property { color: rgb(217, 79, 138); }
    .cm-s-typora-default pre.cm-header1:not(.cm-atom) :not(.cm-overlay) { font-size: 2rem; line-height: 2rem; }
    .cm-s-typora-default pre.cm-header2:not(.cm-atom) :not(.cm-overlay) { font-size: 1.4rem; line-height: 1.4rem; }
    .cm-s-typora-default .cm-atom, .cm-s-typora-default .cm-number { color: rgb(149, 132, 134); }
    .cm-s-typora-default .cm-table-row, .cm-s-typora-default .cm-block-start { font-family: monospace; }
    .cm-s-typora-default .cm-comment, .cm-s-typora-default .cm-code { color: rgb(74, 90, 159); font-family: monospace; }
    .cm-s-typora-default .cm-tag { color: rgb(169, 68, 66); }
    .cm-s-typora-default .cm-string { color: rgb(126, 134, 169); }
    .cm-s-typora-default .cm-link { color: rgb(196, 122, 15); text-decoration: underline; }
    .cm-s-typora-default .cm-variable-2, .cm-s-typora-default .cm-variable-1 { color: inherit; }
    .cm-s-typora-default .cm-overlay { font-size: 1rem; font-family: monospace; }
    .CodeMirror.cm-s-typora-default div.CodeMirror-cursor { border-left-width: 3px; border-left-style: solid; border-left-color: rgb(228, 98, 154); }
    .cm-s-typora-default .CodeMirror-activeline-background { left: -60px; right: -30px; background-color: rgba(204, 204, 204, 0.2); background-position: initial initial; background-repeat: initial initial; }
    .cm-s-typora-default .CodeMirror-gutters { border-right-style: none; background-color: inherit; }
    .cm-s-typora-default .cm-trailing-space-new-line::after, .cm-startspace::after, .cm-starttab .cm-tab::after { content: '•'; position: absolute; left: 0px; opacity: 0; font-family: LetterGothicStd, monospace; }
    .os-windows .cm-startspace::after, .os-windows .cm-starttab .cm-tab::after { left: -0.1em; }
    .cm-starttab .cm-tab::after { content: ' '; }
    .cm-startspace, .cm-tab, .cm-starttab, .cm-trailing-space-a, .cm-trailing-space-b, .cm-trailing-space-new-line { font-family: monospace; position: relative; }
    .cm-s-typora-default .cm-trailing-space-new-line::after { content: '↓'; opacity: 0.3; }
    .cm-s-inner .cm-keyword { color: rgb(119, 0, 136); }
    .cm-s-inner .cm-atom, .cm-s-inner.cm-atom { color: rgb(34, 17, 153); }
    .cm-s-inner .cm-number { color: rgb(17, 102, 68); }
    .cm-s-inner .cm-def { color: rgb(0, 0, 255); }
    .cm-s-inner .cm-variable { color: black; }
    .cm-s-inner .cm-variable-2 { color: rgb(0, 85, 170); }
    .cm-s-inner .cm-variable-3 { color: rgb(0, 136, 85); }
    .cm-s-inner .cm-property { color: black; }
    .cm-s-inner .cm-operator { color: rgb(152, 26, 26); }
    .cm-s-inner .cm-comment, .cm-s-inner.cm-comment { color: rgb(170, 85, 0); }
    .cm-s-inner .cm-string { color: rgb(170, 17, 17); }
    .cm-s-inner .cm-string-2 { color: rgb(255, 85, 0); }
    .cm-s-inner .cm-meta { color: rgb(85, 85, 85); }
    .cm-s-inner .cm-qualifier { color: rgb(85, 85, 85); }
    .cm-s-inner .cm-builtin { color: rgb(51, 0, 170); }
    .cm-s-inner .cm-bracket { color: rgb(153, 153, 119); }
    .cm-s-inner .cm-tag { color: rgb(17, 119, 0); }
    .cm-s-inner .cm-attribute { color: rgb(0, 0, 204); }
    .cm-s-inner .cm-header, .cm-s-inner.cm-header { color: blue; }
    .cm-s-inner .cm-quote, .cm-s-inner.cm-quote { color: rgb(0, 153, 0); }
    .cm-s-inner .cm-hr, .cm-s-inner.cm-hr { color: rgb(153, 153, 153); }
    .cm-s-inner .cm-link, .cm-s-inner.cm-link { color: rgb(0, 0, 204); }
    .cm-negative { color: rgb(221, 68, 68); }
    .cm-positive { color: rgb(34, 153, 34); }
    .cm-header, .cm-strong { font-weight: bold; }
    .cm-del { text-decoration: line-through; }
    .cm-em { font-style: italic; }
    .cm-link { text-decoration: underline; }
    .cm-error { color: rgb(255, 0, 0); }
    .cm-invalidchar { color: rgb(255, 0, 0); }
    .cm-constant { color: rgb(38, 139, 210); }
    .cm-defined { color: rgb(181, 137, 0); }
    div.CodeMirror span.CodeMirror-matchingbracket { color: rgb(0, 255, 0); }
    div.CodeMirror span.CodeMirror-nonmatchingbracket { color: rgb(255, 34, 34); }
    .cm-s-inner .CodeMirror-activeline-background { background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit inherit; background-repeat: inherit inherit; }
    .CodeMirror { position: relative; overflow: hidden; }
    .CodeMirror-scroll { margin-bottom: -30px; margin-right: -30px; padding-bottom: 30px; padding-right: 30px; height: 100%; outline: none; position: relative; box-sizing: content-box; }
    .CodeMirror-sizer { position: relative; }
    .CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler { position: absolute; z-index: 6; display: none; }
    .CodeMirror-vscrollbar { right: 0px; top: 0px; overflow-x: hidden; overflow-y: scroll; }
    .CodeMirror-hscrollbar { bottom: 0px; left: 0px; overflow-y: hidden; overflow-x: scroll; }
    .CodeMirror-scrollbar-filler { right: 0px; bottom: 0px; }
    .CodeMirror-gutter-filler { left: 0px; bottom: 0px; }
    .CodeMirror-gutters { position: absolute; left: 0px; top: 0px; padding-bottom: 30px; z-index: 3; }
    .CodeMirror-gutter { white-space: normal; height: 100%; box-sizing: content-box; padding-bottom: 30px; margin-bottom: -32px; display: inline-block; }
    .CodeMirror-gutter-elt { position: absolute; cursor: default; z-index: 4; }
    .CodeMirror-lines { cursor: text; }
    .CodeMirror pre { border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; border-width: 0px; background-color: transparent; font-family: inherit; font-size: inherit; margin: 0px; white-space: pre; word-wrap: normal; color: inherit; z-index: 2; position: relative; overflow: visible; background-position: initial initial; background-repeat: initial initial; }
    .CodeMirror-wrap pre { word-wrap: break-word; white-space: pre-wrap; word-break: normal; }
    .CodeMirror-code pre { border-right-width: 30px; border-right-style: solid; border-right-color: transparent; width: -webkit-fit-content; }
    .CodeMirror-wrap .CodeMirror-code pre { border-right-style: none; width: auto; }
    .CodeMirror-linebackground { position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; z-index: 0; }
    .CodeMirror-linewidget { position: relative; z-index: 2; overflow: auto; }
    .CodeMirror-widget { }
    .CodeMirror-wrap .CodeMirror-scroll { overflow-x: hidden; }
    .CodeMirror-measure { position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden; }
    .CodeMirror-measure pre { position: static; }
    .CodeMirror div.CodeMirror-cursor { position: absolute; visibility: hidden; border-right-style: none; width: 0px; }
    .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
    .CodeMirror-focused div.CodeMirror-cursor { visibility: inherit; }
    .CodeMirror-selected { background-color: rgb(217, 217, 217); background-position: initial initial; background-repeat: initial initial; }
    .CodeMirror-focused .CodeMirror-selected { background-color: rgb(215, 212, 240); background-position: initial initial; background-repeat: initial initial; }
    .cm-searching { background-color: rgba(255, 255, 0, 0.4); background-position: initial initial; background-repeat: initial initial; }
    .CodeMirror span { }
    @media print { 
      .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
    }
    .CodeMirror-lint-markers { width: 16px; }
    .CodeMirror-lint-tooltip { background-color: infobackground; border: 1px solid black; border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; color: infotext; font-family: monospace; overflow: hidden; padding: 2px 5px; position: fixed; white-space: pre-wrap; z-index: 10000; max-width: 600px; opacity: 0; -webkit-transition: opacity 0.4s; transition: opacity 0.4s; font-size: 0.8em; }
    .CodeMirror-lint-mark-error, .CodeMirror-lint-mark-warning { background-position: 0% 100%; background-repeat: repeat no-repeat; }
    .CodeMirror-lint-mark-error { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==); }
    .CodeMirror-lint-marker-error, .CodeMirror-lint-marker-warning { cursor: pointer; display: inline-block; height: 16px; width: 16px; vertical-align: middle; position: relative; background-position: 50% 50%; background-repeat: no-repeat no-repeat; }
    .CodeMirror-lint-message-error, .CodeMirror-lint-message-warning { padding-left: 18px; background-position: 0% 0%; background-repeat: no-repeat no-repeat; }
    .CodeMirror-lint-marker-error, .CodeMirror-lint-message-error { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=); }
    .CodeMirror-lint-marker-warning, .CodeMirror-lint-message-warning { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=); }
    .CodeMirror-lint-marker-multiple { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC); width: 100%; height: 100%; background-position: 100% 100%; background-repeat: no-repeat no-repeat; }
    
    
    html { font-size: 14px; background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); }
    body { margin: 0px; padding: 0px; height: auto; bottom: 0px; top: 0px; left: 0px; right: 0px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 1rem; line-height: 1.42857143; overflow-x: hidden; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit inherit; background-repeat: inherit inherit; }
    a:active, a:hover { outline: 0px; }
    .in-text-selection, ::selection { background-color: rgb(181, 214, 252); text-shadow: none; background-position: initial initial; background-repeat: initial initial; }
    #write { margin: 0px auto; height: auto; width: inherit; word-break: normal; word-wrap: break-word; position: relative; padding-bottom: 70px; white-space: pre-wrap; overflow-x: auto; }
    .for-image #write { padding-left: 8px; padding-right: 8px; }
    body.typora-export { padding-left: 30px; padding-right: 30px; }
    @media screen and (max-width: 500px) { 
      body.typora-export { padding-left: 0px; padding-right: 0px; }
      .CodeMirror-sizer { margin-left: 0px !important; }
      .CodeMirror-gutters { display: none !important; }
    }
    .typora-export #write { margin: 0px auto; }
    #write > p:first-child, #write > ul:first-child, #write > ol:first-child, #write > pre:first-child, #write > blockquote:first-child, #write > div:first-child, #write > table:first-child { margin-top: 30px; }
    #write li > table:first-child { margin-top: -20px; }
    img { max-width: 100%; vertical-align: middle; }
    input, button, select, textarea { color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; line-height: inherit; }
    input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
    ::before, ::after, * { box-sizing: border-box; }
    #write p, #write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write div, #write pre { width: inherit; }
    #write p, #write h1, #write h2, #write h3, #write h4, #write h5, #write h6 { position: relative; }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.6rem; }
    h4 { font-size: 1.4rem; }
    h5 { font-size: 1.2rem; }
    h6 { font-size: 1rem; }
    p { -webkit-margin-before: 1rem; -webkit-margin-after: 1rem; -webkit-margin-start: 0px; -webkit-margin-end: 0px; }
    .mathjax-block { margin-top: 0px; margin-bottom: 0px; -webkit-margin-before: 0rem; -webkit-margin-after: 0rem; }
    .hidden { display: none; }
    .md-blockmeta { color: rgb(204, 204, 204); font-weight: bold; font-style: italic; }
    a { cursor: pointer; }
    #write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; margin: 4px 0px 0px; }
    tr { page-break-inside: avoid; page-break-after: auto; }
    thead { display: table-header-group; }
    table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; page-break-inside: auto; text-align: left; }
    table.md-table td { min-width: 80px; }
    .CodeMirror-gutters { border-right-width: 0px; background-color: inherit; }
    .CodeMirror { text-align: left; }
    .CodeMirror-placeholder { opacity: 0.3; }
    .CodeMirror pre { padding: 0px 4px; }
    .CodeMirror-lines { padding: 0px; }
    div.hr:focus { cursor: none; }
    pre { white-space: pre-wrap; }
    .CodeMirror-gutters { margin-right: 4px; }
    .md-fences { font-size: 0.9rem; display: block; page-break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; position: relative !important; background-position: inherit inherit; background-repeat: inherit inherit; }
    .md-diagram-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
    .md-fences .CodeMirror.CodeMirror-wrap { top: -1.6em; margin-bottom: -1.6em; }
    .md-fences.mock-cm { white-space: pre-wrap; }
    .show-fences-line-number .md-fences { padding-left: 0px; }
    .show-fences-line-number .md-fences.mock-cm { padding-left: 40px; }
    .footnotes { opacity: 0.8; font-size: 0.9rem; padding-top: 1em; padding-bottom: 1em; }
    .footnotes + .footnotes { margin-top: -1em; }
    .md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background-color: transparent; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; line-height: normal; font-weight: normal; text-align: left; box-sizing: content-box; direction: ltr; background-position: initial initial; background-repeat: initial initial; }
    li div { padding-top: 0px; }
    blockquote { margin: 1rem 0px; }
    li p, li .mathjax-block { margin: 0.5rem 0px; }
    li { margin: 0px; position: relative; }
    blockquote > :last-child { margin-bottom: 0px; }
    blockquote > :first-child { margin-top: 0px; }
    .footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; }
    @media print { 
      html, body { height: 100%; }
      .typora-export * { -webkit-print-color-adjust: exact; }
      h1, h2, h3, h4, h5, h6 { page-break-after: avoid; break-after: avoid-page; orphans: 2; }
      p { orphans: 4; }
      html.blink-to-pdf { font-size: 13px; }
      .typora-export #write { padding-left: 1cm; padding-right: 1cm; }
      .typora-export #write::after { height: 0px; }
      @page { margin: 20mm 0mm; }
    }
    .footnote-line { margin-top: 0.714em; font-size: 0.7em; }
    a img, img a { cursor: pointer; }
    pre.md-meta-block { font-size: 0.8rem; min-height: 2.86rem; white-space: pre-wrap; background-color: rgb(204, 204, 204); display: block; overflow-x: hidden; background-position: initial initial; background-repeat: initial initial; }
    p .md-image:only-child { display: inline-block; width: 100%; text-align: center; }
    #write .MathJax_Display { margin: 0.8em 0px 0px; }
    .mathjax-block { white-space: pre; overflow: hidden; width: 100%; }
    p + .mathjax-block { margin-top: -1.143rem; }
    .mathjax-block:not(:empty)::after { display: none; }
    [contenteditable="true"]:active, [contenteditable="true"]:focus { outline: none; box-shadow: none; }
    .task-list { list-style-type: none; }
    .task-list-item { position: relative; padding-left: 1em; }
    .task-list-item input { position: absolute; top: 0px; left: 0px; }
    .math { font-size: 1rem; }
    .md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; }
    .md-toc-content { position: relative; margin-left: 0px; }
    .md-toc::after, .md-toc-content::after { display: none; }
    .md-toc-item { display: block; color: rgb(65, 131, 196); text-decoration: none; }
    .md-toc-inner:hover { }
    .md-toc-inner { display: inline-block; cursor: pointer; }
    .md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: bold; }
    .md-toc-h2 .md-toc-inner { margin-left: 2em; }
    .md-toc-h3 .md-toc-inner { margin-left: 4em; }
    .md-toc-h4 .md-toc-inner { margin-left: 6em; }
    .md-toc-h5 .md-toc-inner { margin-left: 8em; }
    .md-toc-h6 .md-toc-inner { margin-left: 10em; }
    @media screen and (max-width: 48em) { 
      .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
      .md-toc-h4 .md-toc-inner { margin-left: 5em; }
      .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
      .md-toc-h6 .md-toc-inner { margin-left: 8em; }
    }
    a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
    .footnote-line a:not(.reversefootnote) { color: inherit; }
    .md-attr { display: none; }
    .md-fn-count::after { content: '.'; }
    .md-tag { opacity: 0.5; }
    .md-comment { color: rgb(162, 127, 3); opacity: 0.8; font-family: monospace; }
    code { text-align: left; }
    h1 .md-tag, h2 .md-tag, h3 .md-tag, h4 .md-tag, h5 .md-tag, h6 .md-tag { font-weight: initial; opacity: 0.35; }
    a.md-print-anchor { border: none !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: none !important; background-color: transparent !important; text-shadow: initial !important; background-position: initial initial !important; background-repeat: initial initial !important; }
    .md-inline-math .MathJax_SVG .noError { display: none !important; }
    .mathjax-block .MathJax_SVG_Display { text-align: center; margin: 1em 0em; position: relative; text-indent: 0px; max-width: none; max-height: none; min-height: 0px; min-width: 100%; width: auto; display: block !important; }
    .MathJax_SVG_Display, .md-inline-math .MathJax_SVG_Display { width: auto; margin: inherit; display: inline-block !important; }
    .MathJax_SVG .MJX-monospace { font-family: monospace; }
    .MathJax_SVG .MJX-sans-serif { font-family: sans-serif; }
    .MathJax_SVG { display: inline; font-style: normal; font-weight: normal; line-height: normal; zoom: 90%; text-indent: 0px; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0px; min-height: 0px; border: 0px; padding: 0px; margin: 0px; }
    .MathJax_SVG * { -webkit-transition: none; transition: none; }
    
    
    @include-when-export url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);
    
    /**
     * css forked from https://github.com/GitbookIO/gitbook 
     * www.gitbook.com
     * Apache License
     * https://github.com/GitbookIO/gitbook/blob/master/LICENSE
     **/
    
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        src: local('Open Sans Regular'),url('file:///Users/huangyh/Library/Application%20Support/abnerworks.Typora/themes/github/400.woff') format('woff')
    }
    
    @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: normal;
        src: local('Open Sans Italic'),url('file:///Users/huangyh/Library/Application%20Support/abnerworks.Typora/themes/github/400i.woff') format('woff')
    }
    
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: bold;
        src: local('Open Sans Bold'),url('file:///Users/huangyh/Library/Application%20Support/abnerworks.Typora/themes/github/700.woff') format('woff')
    }
    
    @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: bold;
        src: local('Open Sans Bold Italic'),url('file:///Users/huangyh/Library/Application%20Support/abnerworks.Typora/themes/github/700i.woff') format('woff')
    }
    
    html {
        font-size: 16px;
    }
    
    body {
        font-family: "Open Sans","Clear Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
        color: rgb(51, 51, 51);
        line-height: 1.6;
    }
    
    #write{
        max-width: 860px;
          margin: 0 auto;
          padding: 20px 30px 40px 30px;
        padding-top: 20px;
        padding-bottom: 100px;
    }
    #write > ul:first-child,
    #write > ol:first-child{
        margin-top: 30px;
    }
    
    body > *:first-child {
        margin-top: 0 !important;
    }
    body > *:last-child {
        margin-bottom: 0 !important;
    }
    a {
        color: #4183C4;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: bold;
        line-height: 1.4;
        cursor: text;
    }
    h1:hover a.anchor,
    h2:hover a.anchor,
    h3:hover a.anchor,
    h4:hover a.anchor,
    h5:hover a.anchor,
    h6:hover a.anchor {
        /*background: url("file:///Users/huangyh/Library/Application%20Support/images/modules/styleguide/para.png") no-repeat 10px center;*/
        text-decoration: none;
    }
    h1 tt,
    h1 code {
        font-size: inherit;
    }
    h2 tt,
    h2 code {
        font-size: inherit;
    }
    h3 tt,
    h3 code {
        font-size: inherit;
    }
    h4 tt,
    h4 code {
        font-size: inherit;
    }
    h5 tt,
    h5 code {
        font-size: inherit;
    }
    h6 tt,
    h6 code {
        font-size: inherit;
    }
    h1 {
        padding-bottom: .3em;
        font-size: 2.25em;
        line-height: 1.2;
        border-bottom: 1px solid #eee;
    }
    h2 {
       padding-bottom: .3em;
        font-size: 1.75em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
    }
    h3 {
        font-size: 1.5em;
        line-height: 1.43;
    }
    h4 {
        font-size: 1.25em;
    }
    h5 {
        font-size: 1em;
    }
    h6 {
       font-size: 1em;
        color: #777;
    }
    p,
    blockquote,
    ul,
    ol,
    dl,
    table{
        margin: 0.8em 0;
    }
    li>ol,
    li>ul {
        margin: 0 0;
    }
    hr {
        height: 4px;
        padding: 0;
        margin: 16px 0;
        background-color: #e7e7e7;
        border: 0 none;
        overflow: hidden;
        box-sizing: content-box;
        border-bottom: 1px solid #ddd;
    }
    
    body > h2:first-child {
        margin-top: 0;
        padding-top: 0;
    }
    body > h1:first-child {
        margin-top: 0;
        padding-top: 0;
    }
    body > h1:first-child + h2 {
        margin-top: 0;
        padding-top: 0;
    }
    body > h3:first-child,
    body > h4:first-child,
    body > h5:first-child,
    body > h6:first-child {
        margin-top: 0;
        padding-top: 0;
    }
    a:first-child h1,
    a:first-child h2,
    a:first-child h3,
    a:first-child h4,
    a:first-child h5,
    a:first-child h6 {
        margin-top: 0;
        padding-top: 0;
    }
    h1 p,
    h2 p,
    h3 p,
    h4 p,
    h5 p,
    h6 p {
        margin-top: 0;
    }
    li p.first {
        display: inline-block;
    }
    ul,
    ol {
        padding-left: 30px;
    }
    ul:first-child,
    ol:first-child {
        margin-top: 0;
    }
    ul:last-child,
    ol:last-child {
        margin-bottom: 0;
    }
    blockquote {
        border-left: 4px solid #dddddd;
        padding: 0 15px;
        color: #777777;
    }
    blockquote blockquote {
        padding-right: 0;
    }
    table {
        padding: 0;
        word-break: initial;
    }
    table tr {
        border-top: 1px solid #cccccc;
        background-color: white;
        margin: 0;
        padding: 0;
    }
    table tr:nth-child(2n) {
        background-color: #f8f8f8;
    }
    table tr th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
    }
    table tr td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px;
    }
    table tr th:first-child,
    table tr td:first-child {
        margin-top: 0;
    }
    table tr th:last-child,
    table tr td:last-child {
        margin-bottom: 0;
    }
    
    .CodeMirror-gutters {
        border-right: 1px solid #ddd;
    }
    
    .md-fences,
    code,
    tt {
        border: 1px solid #ddd;
        background-color: #f8f8f8;
        border-radius: 3px;
        padding: 0;
        font-family: Consolas, "Liberation Mono", Courier, monospace;
        padding: 2px 4px 0px 4px;
        font-size: 0.9em;
    }
    
    .md-fences {
        margin-bottom: 15px;
        margin-top: 15px;
        padding: 0.2em 1em;
        padding-top: 8px;
        padding-bottom: 6px;
    }
    .task-list{
        padding-left: 0;
    }
    
    .task-list-item {
        padding-left:32px;
    }
    
    .task-list-item input {
      top: 3px;
      left: 8px;
    }
    
    @media screen and (min-width: 914px) {
        /*body {
            width: 854px;
            margin: 0 auto;
        }*/
    }
    @media print {
        html {
            font-size: 13px;
        }
        table,
        pre {
            page-break-inside: avoid;
        }
        pre {
            word-wrap: break-word;
        }
    }
    
    .md-fences {
        background-color: #f8f8f8;
    }
    #write pre.md-meta-block {
        padding: 1rem;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f7f7f7;
        border: 0;
        border-radius: 3px;
        color: #777777;
        margin-top: 0 !important;
    }
    
    .mathjax-block>.code-tooltip {
        bottom: .375rem;
    }
    
    #write>h3.md-focus:before{
        left: -1.5625rem;
        top: .375rem;
    }
    #write>h4.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    #write>h5.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    #write>h6.md-focus:before{
        left: -1.5625rem;
        top: .285714286rem;
    }
    .md-image>.md-meta {
        border: 1px solid #ddd;
        border-radius: 3px;
        font-family: Consolas, "Liberation Mono", Courier, monospace;
        padding: 2px 4px 0px 4px;
        font-size: 0.9em;
        color: inherit;
    }
    
    .md-tag{
        color: inherit;
    }
    
    .md-toc { 
        margin-top:20px;
        padding-bottom:20px;
    }
    
    #typora-quick-open {
        border: 1px solid #ddd;
        background-color: #f8f8f8;
    }
    
    #typora-quick-open-item {
        background-color: #FAFAFA;
        border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
        border-style: solid;
        border-width: 1px;
    }
    
    #md-notification:before {
        top: 10px;
    }
    
    /** focus mode */
    .on-focus-mode blockquote {
        border-left-color: rgba(85, 85, 85, 0.12);
    }
    
    header, .context-menu, .megamenu-content, footer{
        font-family: "Segoe UI", "Arial", sans-serif;
    }
    
    
    </style>
    </head>
    <body class='typora-export' >
    <div  id='write'  class = 'is-mac'><h1><a name='header-c5' class='md-header-anchor '></a>hello</h1><pre class="md-fences md-end-block" lang="javascript"> <div class="CodeMirror cm-s-inner CodeMirror-wrap " lang="javascript"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 4px;"></div><div class="CodeMirror-hscrollbar" style="left: 0px;"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-vscrollbar"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-scrollbar-filler"></div><div class="CodeMirror-gutter-filler"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; min-height: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><pre class=""><span style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">func</span>(){</span></pre></div><div class="" style="position: relative;"><pre class=""><span style="padding-right: 0.1px;">  <span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-string">"hello"</span>)</span></pre></div><pre class=""><span style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; top: 0px;"></div><div class="CodeMirror-gutters" style="display: none; height: 66px;"></div></div></div></pre><p></p></div>
    </body>
    </html>`
}