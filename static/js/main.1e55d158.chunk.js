(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{140:function(e,n,t){},141:function(e,n,t){},446:function(e,n,t){"use strict";t.r(n);var r=t(19),s=t.n(r),a=t(20),i=t.n(a),o=(t(140),t(136)),c=(t(141),t(87)),d=(t(142),t(7));c.marked.setOptions({breaks:!0});var l="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",h=function(){var e=Object(r.useState)(l),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Markdown Previewer"}),Object(d.jsxs)("div",{className:"flex-container",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("div",{className:"heading",children:"Editor"}),Object(d.jsx)("textarea",{id:"editor",value:t,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("div",{className:"heading",children:"Previewer"}),Object(d.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:c.marked.parse(t)}})]})]})]})})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[446,1,2]]]);
//# sourceMappingURL=main.1e55d158.chunk.js.map