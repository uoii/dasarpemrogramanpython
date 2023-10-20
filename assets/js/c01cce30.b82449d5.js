"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[531],{3905:(a,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var e=n(7294);function i(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function r(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.push.apply(n,e)}return n}function l(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}function o(a,t){if(null==a)return{};var n,e,i=function(a,t){if(null==a)return{};var n,e,i={},r=Object.keys(a);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||(i[n]=a[n]);return i}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var p=e.createContext({}),d=function(a){var t=e.useContext(p),n=t;return a&&(n="function"==typeof a?a(t):l(l({},t),a)),n},s=function(a){var t=d(a.components);return e.createElement(p.Provider,{value:t},a.children)},k="mdxType",m={inlineCode:"code",wrapper:function(a){var t=a.children;return e.createElement(e.Fragment,{},t)}},u=e.forwardRef((function(a,t){var n=a.components,i=a.mdxType,r=a.originalType,p=a.parentName,s=o(a,["components","mdxType","originalType","parentName"]),k=d(n),u=i,c=k["".concat(p,".").concat(u)]||k[u]||m[u]||r;return n?e.createElement(c,l(l({ref:t},s),{},{components:n})):e.createElement(c,l({ref:t},s))}));function c(a,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=a,o[k]="string"==typeof a?a:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return e.createElement.apply(null,l)}return e.createElement.apply(null,n)}u.displayName="MDXCreateElement"},231:(a,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var e=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,title:"A.5. Python Konstanta",sidebar_label:"A.5. Konstanta",description:"Tutorial belajar konstanta di Python",keywords:["konstanta python"],faqs:[{question:"Apa itu konstanta di Python?",answer:"Konstanta adalah sebuah variabel yang nilainya dideklarasikan di awal dan tidak bisa diubah"},{question:"Cara membuat konstanta di Python",answer:"Konstanta di Python versi 3 bisa dibuat menggunakan bantuan module typing.Final."}]},l=void 0,o={unversionedId:"basic/konstanta",id:"basic/konstanta",title:"A.5. Python Konstanta",description:"Tutorial belajar konstanta di Python",source:"@site/docs/basic/konstanta.md",sourceDirName:"basic",slug:"/basic/konstanta",permalink:"/basic/konstanta",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"A.5. Python Konstanta",sidebar_label:"A.5. Konstanta",description:"Tutorial belajar konstanta di Python",keywords:["konstanta python"],faqs:[{question:"Apa itu konstanta di Python?",answer:"Konstanta adalah sebuah variabel yang nilainya dideklarasikan di awal dan tidak bisa diubah"},{question:"Cara membuat konstanta di Python",answer:"Konstanta di Python versi 3 bisa dibuat menggunakan bantuan module typing.Final."}]},sidebar:"tutorialSidebar",previous:{title:"A.4. Variabel",permalink:"/basic/variabel"},next:{title:"A.6. Tipe Data",permalink:"/basic/tipe-data"}},p={},d=[{value:"A.5.1. Konstanta di Python",id:"a51-konstanta-di-python",level:2},{value:"\u25c9 Module import",id:"-module-import",level:3},{value:"A.5.2. Tipe <em>class</em> <code>typing.Final</code>",id:"a52-tipe-class-typingfinal",level:2},{value:"A.5.3. <em>Naming convention</em> konstanta",id:"a53-naming-convention-konstanta",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],s={toc:d},k="wrapper";function m(a){let{components:t,...r}=a;return(0,i.kt)(k,(0,e.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Konstanta (atau nilai konstan) adalah sebuah variabel yang nilainya dideklarasikan di awal dan tidak bisa diubah setelahnya."),(0,i.kt)("p",null,"Pada chapter ini kita akan mempelajari tentang penerapan Konstanta di Python."),(0,i.kt)("h2",{id:"a51-konstanta-di-python"},"A.5.1. Konstanta di Python"),(0,i.kt)("p",null,"Deklarasi konstanta di Python dilakukan menggunakan bantuan tipe ",(0,i.kt)("em",{parentName:"p"},"class")," bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"typing.Final"),"."),(0,i.kt)("p",null,"Untuk menggunakannya, ",(0,i.kt)("inlineCode",{parentName:"p"},"typing.Final")," perlu di-import terlebih dahulu menggunakan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Final\n\nPI: Final = 3.14\nprint("pi: %f" % (PI))\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"konstanta python",src:n(4930).Z,width:"291",height:"90"})),(0,i.kt)("h3",{id:"-module-import"},"\u25c9 Module import"),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," digunakan untuk meng-import sesuatu, sedangkan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," digunakan untuk menentukan dari module mana sesuatu tersebut akan di-import."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/modules"},"Modules"))),(0,i.kt)("p",null,"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"from typing import Final")," artinya adalah meng-import tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," dari module ",(0,i.kt)("inlineCode",{parentName:"p"},"typing")," yang dimana module ini merupakan bagian dari Python standard library (stdlib)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai Python standard library (stdlib) dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Python standard library (stdlib)"))),(0,i.kt)("h2",{id:"a52-tipe-class-typingfinal"},"A.5.2. Tipe ",(0,i.kt)("em",{parentName:"h2"},"class")," ",(0,i.kt)("inlineCode",{parentName:"h2"},"typing.Final")),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," digunakan untuk menandai suatu variabel adalah tidak bisa diubah nilainya (konstanta). Cara penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," bisa dengan dituliskan tipe data konstanta-nya secara eksplisit, atau boleh tidak ditentukan (tipe akan diidentifikasi oleh interpreter berdasarkan tipe data nilainya)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# tipe konstanta PI tidak ditentukan secara explisit,\n# melainkan didapat dari tipe data nilai\nPI: Final = 3.14\n\n# tipe konstanta TOTAL_MONTH ditentukan secara explisit yaitu `int`\nTOTAL_MONTH: Final[int] = 12\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tipe data dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/tipe-data"},"Tipe Data"))),(0,i.kt)("h2",{id:"a53-naming-convention-konstanta"},"A.5.3. ",(0,i.kt)("em",{parentName:"h2"},"Naming convention")," konstanta"),(0,i.kt)("p",null,"Mengacu ke dokumentasi ",(0,i.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP 8 \u2013 Style Guide for Python Code"),", nama konstanta harus dituliskan dalam huruf besar (UPPER_CASE)."),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/konstanta"},"github.com/novalagung/dasarpemrogramanpython-example/../konstanta")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/variabel"},"Variabel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/modules"},"Modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#"},"Python standard library (stdlib)"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Final"},"https://docs.python.org/3/library/typing.html#typing.Final")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0008/"},"https://peps.python.org/pep-0008/")))))}m.isMDXComponent=!0},4930:(a,t,n)=>{n.d(t,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAABaCAIAAAB8GKfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHgWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuYThkNDc1MywgMjAyMy8wMy8yMy0wODo1NjozNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0wMlQxOToxMjowOSswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDktMzBUMjA6NTk6NTcrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDktMzBUMjA6NTk6NTcrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE4OGExMmI3LWQzNDItZDA0ZC05YTRjLTIyOGQzNDNiM2Q2YSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplOWQ3NDIxYy01ZDZjLTY0NDItODUyOC0zNGUyOTQxOTY1YTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplOWQ3NDIxYy01ZDZjLTY0NDItODUyOC0zNGUyOTQxOTY1YTMiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjE4MDM4NjliLTgyY2EtMjg0OC1iNWRiLTU0OWRlZGQwYjk2ZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6Njc5NmJhYzgtNTU4MS01ODQyLTgyYTYtNmE2ZWI3MTdjNDAxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3NzAyZmJjNi1jOWJjLTI1NDMtOTI4Ny0xZTU0ZTQ0NzBkOTk8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhlNTdmOWQ0LTMxM2ItZTk0My1hZmQ1LTFiMjczNzdhZTgwZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6OTljZTA3YTItNTA0Yy1kZTRhLWI5N2QtMmI2Mjc2ZjVmZjM5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDphOTEwYzhkZC05MWEwLTU5NDEtYjFjZC05M2RkNmIxNGRkODE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOWQ3NDIxYy01ZDZjLTY0NDItODUyOC0zNGUyOTQxOTY1YTMiIHN0RXZ0OndoZW49IjIwMjMtMDUtMDJUMTk6MTI6MDkrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTg4YTEyYjctZDM0Mi1kMDRkLTlhNGMtMjI4ZDM0M2IzZDZhIiBzdEV2dDp3aGVuPSIyMDIzLTA5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"}}]);