"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[742],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>s});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var o=n.createContext({}),k=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},u=function(a){var e=k(a.components);return n.createElement(o.Provider,{value:e},a.children)},m="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},A=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,u=p(a,["components","mdxType","originalType","parentName"]),m=k(t),A=i,s=m["".concat(o,".").concat(A)]||m[A]||c[A]||r;return t?n.createElement(s,l(l({ref:e},u),{},{components:t})):n.createElement(s,l({ref:e},u))}));function s(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,l=new Array(r);l[0]=A;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p[m]="string"==typeof a?a:i,l[1]=p;for(var k=2;k<r;k++)l[k]=t[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}A.displayName="MDXCreateElement"},67:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:4,title:"A.4. Variabel",sidebar_label:"A.4. Variabel"},l=void 0,p={unversionedId:"basic/variabel",id:"basic/variabel",title:"A.4. Variabel",description:"A.4.1. Deklarasi variabel",source:"@site/docs/basic/variabel.md",sourceDirName:"basic",slug:"/basic/variabel",permalink:"/basic/variabel",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"A.4. Variabel",sidebar_label:"A.4. Variabel"},sidebar:"tutorialSidebar",previous:{title:"A.3. Komentar",permalink:"/basic/komentar"},next:{title:"A.5. Konstanta",permalink:"/basic/konstanta"}},o={},k=[{value:"A.4.1. Deklarasi variabel",id:"a41-deklarasi-variabel",level:2},{value:"\u25c9 <em>Output formatting</em> <code>print</code>",id:"-output-formatting-print",level:3},{value:"A.4.2. <em>Naming convention</em> variabel",id:"a42-naming-convention-variabel",level:2},{value:"A.4.3. Operasi <em>assignment</em>",id:"a43-operasi-assignment",level:2},{value:"A.4.4. Deklarasi variabel beserta tipe data",id:"a44-deklarasi-variabel-beserta-tipe-data",level:2},{value:"A.4.5. Deklarasi banyak variabel sebaris",id:"a45-deklarasi-banyak-variabel-sebaris",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:k},m="wrapper";function c(a){let{components:e,...r}=a;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a41-deklarasi-variabel"},"A.4.1. Deklarasi variabel"),(0,i.kt)("p",null,"Deklarasi variabel di Python cukup sederhana, tinggal tulis saja nama variabel kemudian diikuti operator ",(0,i.kt)("em",{parentName:"p"},"assignment")," beserta nilai yang ingin dimasukan ke variabel tersebut. Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"nama = \"noval\"\nhobi = 'makan'\numur = 18\nlaki = True\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Nilai string (",(0,i.kt)("inlineCode",{parentName:"p"},"str"),") bisa dituliskan dengan menggunakan literal ",(0,i.kt)("inlineCode",{parentName:"p"},'"')," ataupun ",(0,i.kt)("inlineCode",{parentName:"p"},"'"))),(0,i.kt)("p",null,"Selanjutnya, coba kita munculkan nilai ke-empat variabel di atas ke layar menggunakan statement ",(0,i.kt)("inlineCode",{parentName:"p"},"print"),". Caranya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("==== biodata ====")\nprint("nama: %s" % (nama))\nprint("hobi: %s, umur: %d, laki: %r" % (hobi, umur, laki))\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variabel python",src:t(814).Z,width:"299",height:"123"})),(0,i.kt)("h3",{id:"-output-formatting-print"},"\u25c9 ",(0,i.kt)("em",{parentName:"h3"},"Output formatting")," ",(0,i.kt)("inlineCode",{parentName:"h3"},"print")),(0,i.kt)("p",null,"Statement berikut adalah contoh cara memunculkan string ke layar output (",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("==== biodata ====")\n')),(0,i.kt)("p",null,"Sedangkan contoh berikut adalah penerapan teknik ",(0,i.kt)("em",{parentName:"p"},"output formatting")," untuk mem-format string ke layar output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("nama: %s" % (nama))\n# output => "nama: noval"\n')),(0,i.kt)("p",null,"Karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"%s")," disitu akan di-replace dengan nilai variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"nama")," sebelum dimunculkan. Dan ",(0,i.kt)("inlineCode",{parentName:"p"},"%s")," disini menandakan bahwa data yang akan me-replace-nya bertipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",null,"Selain ",(0,i.kt)("inlineCode",{parentName:"p"},"%s")," ada juga ",(0,i.kt)("inlineCode",{parentName:"p"},"%d")," untuk data bertipe numerik integer, dan ",(0,i.kt)("inlineCode",{parentName:"p"},"%r")," untuk data bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("hobi: %s, umur: %d, laki: %r" % (hobi, umur, laki))\n# output => "hobi: makan, umur: 18, laki: True"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai output formatting dibahas terpisah pada chapter ",(0,i.kt)("a",{parentName:"p",href:"#"},"String formatting"))),(0,i.kt)("h2",{id:"a42-naming-convention-variabel"},"A.4.2. ",(0,i.kt)("em",{parentName:"h2"},"Naming convention")," variabel"),(0,i.kt)("p",null,"Mengacu ke dokumentasi ",(0,i.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP 8 \u2013 Style Guide for Python Code"),", nama variabel dianjurkan untuk menggunakan ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Snake_case"},(0,i.kt)("inlineCode",{parentName:"a"},"snake_case")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pesan = 'halo, selamat pagi'\nnilai_ujian = 99.2\n")),(0,i.kt)("h2",{id:"a43-operasi-assignment"},"A.4.3. Operasi ",(0,i.kt)("em",{parentName:"h2"},"assignment")),(0,i.kt)("p",null,"Penulisan statement operasi ",(0,i.kt)("em",{parentName:"p"},"assignment")," sama seperti statement deklarasi variabel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nama = "noval"\numur = 18\nnama = "noval agung"\numur = 21\n')),(0,i.kt)("h2",{id:"a44-deklarasi-variabel-beserta-tipe-data"},"A.4.4. Deklarasi variabel beserta tipe data"),(0,i.kt)("p",null,"Tipe data variabel bisa ditentukan secara eksplisit, penulisannya bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"nama: str = \"noval\"\nhobi: str = 'makan'\numur: int = 18\nlaki: bool = True\nnilai_ujian: float = 99.2\n")),(0,i.kt)("h2",{id:"a45-deklarasi-banyak-variabel-sebaris"},"A.4.5. Deklarasi banyak variabel sebaris"),(0,i.kt)("p",null,"Contoh penulisan deklarasi banyak variabel dalam satu baris bisa dilihat pada kode berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'nilai1, nilai2, nilai3, nilai4 = 24, 25, 26, 21\nnilai_rata_rata = (nilai1 + nilai2 + nilai3 + nilai4) / 4\n\nprint("rata-rata nilai: %f" % (nilai_rata_rata))\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"%f")," digunakan untuk mem-format nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"float"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variabel python",src:t(9029).Z,width:"299",height:"88"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/variables"},"github.com/novalagung/dasarpemrogramanpython-example/../variables")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_datatypes.asp"},"https://www.w3schools.com/python/python_datatypes.asp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://peps.python.org/pep-0008/"},"https://peps.python.org/pep-0008/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Snake_case"},"https://en.wikipedia.org/wiki/Snake_case")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.learnpython.org/en/String_Formatting"},"https://www.learnpython.org/en/String_Formatting"))))}c.isMDXComponent=!0},814:(a,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAB7CAIAAACjPzGgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFf2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDUtMDJUMTg6Mzc6NDgrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTAyVDE5OjM3OjA1KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTAyVDE5OjM3OjA1KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OWNlMDdhMi01MDRjLWRlNGEtYjk3ZC0yYjYyNzZmNWZmMzkiIHhtcE1NOkRvY3VtZW50SUQ9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"},9029:(a,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAABYCAIAAAAiB0Y4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE72lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgMTM3LmRhNGE3ZTUsIDIwMjIvMTEvMjctMDk6MzU6MDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDUtMDJUMTg6NTM6MDQrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA1LTAyVDE5OjM2OjE3KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA1LTAyVDE5OjM2OjE3KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzAyZmJjNi1jOWJjLTI1NDMtOTI4Ny0xZTU0ZTQ0NzBkOTkiIHhtcE1NOkRvY3VtZW50SUQ9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"}}]);