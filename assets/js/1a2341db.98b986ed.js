"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[533],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,A=function(e,n){if(null==e)return{};var t,a,A={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(A[t]=e[t]);return A}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(A[t]=e[t])}return A}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,A=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=A,h=u["".concat(i,".").concat(g)]||u[g]||c[g]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,A=n&&n.mdxType;if("string"==typeof e||A){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:A,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),A=(t(7294),t(3905));const r={sidebar_position:2,title:"A.2. Run Python di VSCode",sidebar_label:"A.2. Run Python di VSCode",description:"Tutorial cara menjalankan program Python",keywords:["python interpreter","python compiler","run program di python","run python"]},o=void 0,l={unversionedId:"basic/run-program-python",id:"basic/run-program-python",title:"A.2. Run Python di VSCode",description:"Tutorial cara menjalankan program Python",source:"@site/docs/basic/run-program-python.md",sourceDirName:"basic",slug:"/basic/run-program-python",permalink:"/basic/run-program-python",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"A.2. Run Python di VSCode",sidebar_label:"A.2. Run Python di VSCode",description:"Tutorial cara menjalankan program Python",keywords:["python interpreter","python compiler","run program di python","run python"]},sidebar:"tutorialSidebar",previous:{title:"A.1. Program Pertama \u2192 Hello Python",permalink:"/basic/hello-python"},next:{title:"A.3. Komentar",permalink:"/basic/komentar"}},i={},p=[{value:"A.2.1. Cara run program Python di VSCode",id:"a21-cara-run-program-python-di-vscode",level:2},{value:"\u25c9 Menggunakan command <code>python</code>",id:"-menggunakan-command-python",level:3},{value:"\u25c9 Menggunakan tombol run <code>\u25b6</code>",id:"-menggunakan-tombol-run-",level:3},{value:"\u25c9 Menggunakan jupyter <code>code cells</code>",id:"-menggunakan-jupyter-code-cells",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:p},u="wrapper";function c(e){let{components:n,...r}=e;return(0,A.kt)(u,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"Chapter ini membahas tentang pilihan opsi cara run program Python di Visual Studio Code."),(0,A.kt)("h2",{id:"a21-cara-run-program-python-di-vscode"},"A.2.1. Cara run program Python di VSCode"),(0,A.kt)("h3",{id:"-menggunakan-command-python"},"\u25c9 Menggunakan command ",(0,A.kt)("inlineCode",{parentName:"h3"},"python")),(0,A.kt)("p",null,"Command ini sudah kita terapkan pada chapter ",(0,A.kt)("a",{parentName:"p",href:"/basic/hello-python"},"Program Pertama \u2192 Hello Python"),", cara penggunaannya cukup mudah, tinggal jalankan saja command di terminal."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash"},"# python <nama_file_program>\npython main.py\n")),(0,A.kt)("h3",{id:"-menggunakan-tombol-run-"},"\u25c9 Menggunakan tombol run ",(0,A.kt)("inlineCode",{parentName:"h3"},"\u25b6")),(0,A.kt)("p",null,"Cara run program ini lebih praktis karena tingal klik-klik saja. Di toolbar VSCode sebelah kanan atas ada tombol ",(0,A.kt)("inlineCode",{parentName:"p"},"\u25b6"),", gunakan tombol tersebut untuk menjalankan program."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"hello world python",src:t(7492).Z,width:"446",height:"127"})),(0,A.kt)("h3",{id:"-menggunakan-jupyter-code-cells"},"\u25c9 Menggunakan jupyter ",(0,A.kt)("inlineCode",{parentName:"h3"},"code cells")),(0,A.kt)("p",null,"Untuk menerapkan cara ini, tambahkan kode ",(0,A.kt)("inlineCode",{parentName:"p"},"#%%")," atau ",(0,A.kt)("inlineCode",{parentName:"p"},"# %%")," pada baris di atas statement ",(0,A.kt)("inlineCode",{parentName:"p"},'print("hello python")')," agar blok kode di bawahnya dianggap sebagai satu ",(0,A.kt)("inlineCode",{parentName:"p"},"code cell"),"."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"hello world python",src:t(6535).Z,width:"272",height:"149"})),(0,A.kt)("p",null,"Setelah itu, muncul tombol ",(0,A.kt)("inlineCode",{parentName:"p"},"Run Cell"),", klik untuk run program."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"hello world python",src:t(9979).Z,width:"745",height:"191"})),(0,A.kt)("hr",null),(0,A.kt)("div",{class:"section-footnote"},(0,A.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,A.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"/basic/hello-python"},"Program Pertama \u2192 Hello Python"))),(0,A.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/python/python-tutorial"},"https://code.visualstudio.com/docs/python/python-tutorial")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/datascience/jupyter-notebooks"},"https://code.visualstudio.com/docs/datascience/jupyter-notebooks")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://docs.python.org/3/using/cmdline.html"},"https://docs.python.org/3/using/cmdline.html")))))}c.isMDXComponent=!0},7492:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAB/CAIAAAAfLDAbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE72lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDUtMDJUMTU6MDY6MzArMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTAyVDE3OjU5OjUwKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTAyVDE3OjU5OjUwKzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZGExNWFkMi0xMzNjLThlNDktODRjNy1jYjUwNzdhYjQ1MmYiIHhtcE1NOkRvY3VtZW50SUQ9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"},6535:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},9979:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-python-5-674c954380fb0dee438fc4f152f4be78.png"}}]);