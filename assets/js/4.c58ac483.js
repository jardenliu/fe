(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{341:function(s,t,a){},377:function(s,t,a){var n=a(0),e=a(3),l=a(102),i=[].slice,v=function(s){return function(t,a){var n=arguments.length>2,e=n?i.call(arguments,2):void 0;return s(n?function(){("function"==typeof t?t:Function(t)).apply(this,e)}:t,a)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(l)},{setTimeout:v(e.setTimeout),setInterval:v(e.setInterval)})},378:function(s,t,a){"use strict";a(341)},385:function(s,t,a){"use strict";a.r(t);a(65),a(377);var n={data:function(){return{width:0}},mounted:function(){var s=this,t=document.querySelector(".resize-observer-target");this.width=t.getBoundingClientRect().width,new ResizeObserver((function(t,a){t.map((function(t){s.width=t.contentRect.width}))})).observe(t);var a=300;setInterval((function(){a=(a+=20)>500?300:a,t.style.width="".concat(a,"px")}),500)}},e=(a(378),a(24)),l=Object(e.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"观察者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者"}},[s._v("#")]),s._v(" 观察者")]),s._v(" "),a("h2",{attrs:{id:"resizeobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resizeobserver"}},[s._v("#")]),s._v(" ResizeObserver")]),s._v(" "),a("ul",[a("li",[s._v("观察元素内容或者边框")])]),s._v(" "),a("code-block",{attrs:{description:"",scrollViewSelector:"html"}},[a("span",{attrs:{slot:"description"},slot:"description"}),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"html xml hljs "},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"resize-observer-target"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h4")]),s._v(">")]),s._v("ResizeObserver"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h4")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("width: "+s._s(s.width)+"px"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data(){\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n        }\n    },\n    mounted(){\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" target = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector("),a("span",{staticClass:"hljs-string"},[s._v("'.resize-observer-target'")]),s._v(")\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".width  = target.getBoundingClientRect().width\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" resizeObs = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" ResizeObserver("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("entries,observer")]),s._v(")=>")]),s._v("{\n            entries.map("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("entry")]),s._v("=>")]),s._v("{\n                "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".width  = entry.contentRect.width\n            })\n        })\n        resizeObs.observe(target)\n\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" width  = "),a("span",{staticClass:"hljs-number"},[s._v("300")]),s._v("\n\n        setInterval("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v("{\n            width += "),a("span",{staticClass:"hljs-number"},[s._v("20")]),s._v("\n            width = width > "),a("span",{staticClass:"hljs-number"},[s._v("500")]),s._v(" ? "),a("span",{staticClass:"hljs-number"},[s._v("300")]),s._v(" : width\n\n            target.style.width = "),a("span",{staticClass:"hljs-string"},[s._v("`"),a("span",{staticClass:"hljs-subst"},[s._v("${width}")]),s._v("px`")]),s._v("\n        }, "),a("span",{staticClass:"hljs-number"},[s._v("500")]),s._v(")\n\n    }\n}\n\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("lang")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylus"')]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".resize-observer-target")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("width")]),s._v(" 100"),a("span",{staticClass:"hljs-selector-tag"},[s._v("px")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("height")]),s._v(" 400"),a("span",{staticClass:"hljs-selector-tag"},[s._v("px")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("background")]),s._v(" "),a("span",{staticClass:"hljs-selector-id"},[s._v("#f5f5f5")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("display")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("flex")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("justify-content")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("center")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("align-items")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("center")]),s._v("\n    "),a("span",{staticClass:"hljs-selector-tag"},[s._v("flex-direction")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("column")]),s._v("\n\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])]),s._v(" "),[[a("div",{staticClass:"resize-observer-target"},[a("h4",[s._v("ResizeObserver")]),s._v(" "),a("p",[s._v("width: "+s._s(s.width)+"px")])])]]],2)],1)}),[],!1,null,null,null);t.default=l.exports}}]);