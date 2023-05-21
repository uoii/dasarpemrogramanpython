"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[531],{3905:(a,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var e=n(7294);function i(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}function r(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.push.apply(n,e)}return n}function l(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}function p(a,t){if(null==a)return{};var n,e,i=function(a,t){if(null==a)return{};var n,e,i={},r=Object.keys(a);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||(i[n]=a[n]);return i}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(e=0;e<r.length;e++)n=r[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var o=e.createContext({}),s=function(a){var t=e.useContext(o),n=t;return a&&(n="function"==typeof a?a(t):l(l({},t),a)),n},d=function(a){var t=s(a.components);return e.createElement(o.Provider,{value:t},a.children)},u="mdxType",c={inlineCode:"code",wrapper:function(a){var t=a.children;return e.createElement(e.Fragment,{},t)}},k=e.forwardRef((function(a,t){var n=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),u=s(n),k=i,m=u["".concat(o,".").concat(k)]||u[k]||c[k]||r;return n?e.createElement(m,l(l({ref:t},d),{},{components:n})):e.createElement(m,l({ref:t},d))}));function m(a,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=a,p[u]="string"==typeof a?a:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return e.createElement.apply(null,l)}return e.createElement.apply(null,n)}k.displayName="MDXCreateElement"},231:(a,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var e=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,title:"A.5. Konstanta",sidebar_label:"A.5. Konstanta",description:"Tutorial belajar konstanta di Python",keywords:["konstanta python"],faqs:[{question:"Apa itu konstanta di Python?",answer:"Konstanta adalah sebuah variabel yang nilainya didefinisikan di awal dan tidak bisa diubah"},{question:"Cara membuat konstanta di Python",answer:"Konstanta di Python versi 3 bisa dibuat menggunakan bantuan module typing.Final."}]},l=void 0,p={unversionedId:"basic/konstanta",id:"basic/konstanta",title:"A.5. Konstanta",description:"Tutorial belajar konstanta di Python",source:"@site/docs/basic/konstanta.md",sourceDirName:"basic",slug:"/basic/konstanta",permalink:"/basic/konstanta",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"A.5. Konstanta",sidebar_label:"A.5. Konstanta",description:"Tutorial belajar konstanta di Python",keywords:["konstanta python"],faqs:[{question:"Apa itu konstanta di Python?",answer:"Konstanta adalah sebuah variabel yang nilainya didefinisikan di awal dan tidak bisa diubah"},{question:"Cara membuat konstanta di Python",answer:"Konstanta di Python versi 3 bisa dibuat menggunakan bantuan module typing.Final."}]},sidebar:"tutorialSidebar",previous:{title:"A.4. Variabel",permalink:"/basic/variabel"},next:{title:"A.6. Tipe Data",permalink:"/basic/tipe-data"}},o={},s=[{value:"A.5.1. Konstanta di Python",id:"a51-konstanta-di-python",level:2},{value:"\u25c9 Module import",id:"-module-import",level:3},{value:"A.5.2. Tipe <em>class</em> <code>typing.Final</code>",id:"a52-tipe-class-typingfinal",level:2},{value:"A.5.3. <em>Naming convention</em> konstanta",id:"a53-naming-convention-konstanta",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:s},u="wrapper";function c(a){let{components:t,...r}=a;return(0,i.kt)(u,(0,e.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Konstanta adalah sebuah variabel yang nilainya didefinisikan di awal dan tidak bisa diubah. Pada chapter ini kita akan mempelajari tentang penerapan Konstanta di Python."),(0,i.kt)("h2",{id:"a51-konstanta-di-python"},"A.5.1. Konstanta di Python"),(0,i.kt)("p",null,"Deklarasi konstanta (atau sebuah nilai konstan yang tidak bisa diubah setelah didefinisikan) di Python bisa dilakukan menggunakan bantuan tipe ",(0,i.kt)("em",{parentName:"p"},"class")," bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"typing.Final"),"."),(0,i.kt)("p",null,"Untuk menggunakannya, ",(0,i.kt)("inlineCode",{parentName:"p"},"typing.Final")," perlu di-import terlebih dahulu menggunakan statement ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Final\n\nPI: Final = 3.14\nprint("pi: %f" % (PI))\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"konstanta python",src:n(4930).Z,width:"299",height:"94"})),(0,i.kt)("h3",{id:"-module-import"},"\u25c9 Module import"),(0,i.kt)("p",null,"Keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," digunakan untuk meng-import sesuatu, sedangkan keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," digunakan untuk menentukan dari module mana sesuatu tersebut akan di-import."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Module Import"))),(0,i.kt)("p",null,"Statement ",(0,i.kt)("inlineCode",{parentName:"p"},"from typing import Final")," artinya adalah meng-import tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," dari module ",(0,i.kt)("inlineCode",{parentName:"p"},"typing")," yang dimana module ini merupakan bagian dari Python standard library (stdlib)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai Python standard library (stdlib) dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"Python standard library (stdlib)"))),(0,i.kt)("h2",{id:"a52-tipe-class-typingfinal"},"A.5.2. Tipe ",(0,i.kt)("em",{parentName:"h2"},"class")," ",(0,i.kt)("inlineCode",{parentName:"h2"},"typing.Final")),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," digunakan untuk menandai suatu variabel adalah tidak bisa diubah nilainya (konstanta). Cara penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"Final")," bisa dengan dituliskan tipe data konstanta-nya secara eksplisit, atau tidak ditentukan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# tipe konstanta PI tidak ditentukan secara explisit,\n# melainkan didapat dari tipe data nilai\nPI: Final = 3.14\n\n# tipe konstanta TOTAL_MONTH ditentukan secara explisit yaitu `int`\nTOTAL_MONTH: Final[int] = 12\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tipe data dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"/basic/tipe-data"},"Tipe Data"))),(0,i.kt)("h2",{id:"a53-naming-convention-konstanta"},"A.5.3. ",(0,i.kt)("em",{parentName:"h2"},"Naming convention")," konstanta"),(0,i.kt)("p",null,"Mengacu ke dokumentasi ",(0,i.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP 8 \u2013 Style Guide for Python Code"),", nama konstanta harus dituliskan dalam huruf besar (UPPER_CASE)."),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/konstanta"},"github.com/novalagung/dasarpemrogramanpython-example/../konstanta")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Final"},"https://docs.python.org/3/library/typing.html#typing.Final")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0008/"},"https://peps.python.org/pep-0008/")))))}c.isMDXComponent=!0},4930:(a,t,n)=>{n.d(t,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAABeCAIAAAD0XqUlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFvWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDUtMDJUMTk6MTI6MDkrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTAyVDE5OjM3OjQ4KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTAyVDE5OjM3OjQ4KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplOWQ3NDIxYy01ZDZjLTY0NDItODUyOC0zNGUyOTQxOTY1YTMiIHhtcE1NOkRvY3VtZW50SUQ9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"}}]);