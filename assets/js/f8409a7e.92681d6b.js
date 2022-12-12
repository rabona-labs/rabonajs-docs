"use strict";(self.webpackChunkrabonjs_docs=self.webpackChunkrabonjs_docs||[]).push([[206],{9568:(t,e,n)=>{n.r(e),n.d(e,{PitchComponent:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var i=n(7462),a=n(7294),o=n(3905),s=n(5543);const r={sidebar_position:1},c="Tutorial Intro",p={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover RabonaJS in less than 5 minutes.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/rabonajs-docs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/rabonajs-docs/docs/category/tutorial---basics"}},l={},h=[{value:"Getting Started",id:"getting-started",level:2},{value:"An example with React",id:"an-example-with-react",level:2}],d=()=>{const[t,e]=(0,a.useState)(null),n=(0,a.useRef)(null),i={height:80,width:120,padding:100,linecolour:"#ffffff",fillcolour:"#7ec850"};return(0,a.useEffect)((()=>{if(!t){const t=s.Z.pitch("pitch",i);e(t)}}),[]),(0,o.kt)("div",{id:"pitch",ref:n,style:{width:"500px",margin:"auto"}})},u={toc:h,PitchComponent:d};function f(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,o.kt)("p",null,"Let's discover ",(0,o.kt)("strong",{parentName:"p"},"RabonaJS in less than 5 minutes"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"creating a new pitch"),". Aim of this library is to help you to create a pitch or a football field with JS.\nThe central class of the API is Rabona. It is used to create a pitch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Rabona from "rabonajs";\n\nconst pitchOptions = {\n  height: 80, //px\n  width: 120, //px\n  padding: 100, //px\n  linecolour: "#ffffff",\n  fillcolour: "#7ec850",\n};\n\n// initialize the pitch on the "pitch" div with a given options\nconst pitch = Rabona.pitch("pitch", pitchOptions);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="pitch"></div>\n')),(0,o.kt)("p",null,"Providing a default options and a div to inject that's all you need to create a pitch! \ud83c\udfdf"),(0,o.kt)("h2",{id:"an-example-with-react"},"An example with React"),(0,o.kt)("p",null,"You can use a ",(0,o.kt)("strong",{parentName:"p"},"useRef")," hook to get the DOM element in which you're going to inject the pitch.\nWe are keeping the pitch status in a state variable. We are using the ",(0,o.kt)("strong",{parentName:"p"},"useEffect")," hook to initialize the pitch.\nWe need provide a default style to the pitch div as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import Rabona from "rabonajs";\nimport { useEffect, useRef, useState } from "react";\n\nexport const PitchComponent = () => {\n  const [pitch, setPitch] = useState(null);\n  const pitchRef = useRef(null);\n\n  const pitchOptions = {\n    height: 80, //in px\n    width: 120, //in px\n    padding: 100, // in px, distance between the pitch border lines and external border\n    linecolour: "#ffffff",\n    fillcolour: "#7ec850",\n  };\n\n  useEffect(() => {\n    if (!pitch) {\n      const pitch = Rabona.pitch("pitch", pitchOptions);\n      setPitch(pitch);\n    }\n  }, []);\n\n  return (\n    <div id="pitch" ref={pitchRef} style={{ width: "500px", margin: "auto" }} />\n  );\n};\n')),(0,o.kt)(d,{mdxType:"PitchComponent"}))}f.isMDXComponent=!0}}]);