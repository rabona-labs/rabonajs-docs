"use strict";(self.webpackChunkrabonjs_docs=self.webpackChunkrabonjs_docs||[]).push([[932],{9322:(t,e,a)=>{a.r(e),a.d(e,{PitchComponent:()=>c,PitchComponentWithPasses:()=>m,PitchComponentWithPassesAndLabels:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var n=a(7462),o=a(7294),s=a(3905),i=a(5543);const r={sidebar_position:1},l="Plot Passes on a Pitch",h={unversionedId:"tutorial-basics/plot-passes-on-a-pitch",id:"tutorial-basics/plot-passes-on-a-pitch",title:"Plot Passes on a Pitch",description:"Example shows how to plot passes on a pitch using the 'ballMovement' type of Rabona.layer.",source:"@site/docs/tutorial-basics/plot-passes-on-a-pitch.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/plot-passes-on-a-pitch",permalink:"/rabonajs-docs/docs/tutorial-basics/plot-passes-on-a-pitch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/plot-passes-on-a-pitch.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/rabonajs-docs/docs/category/tutorial---basics"},next:{title:"Plot Shots",permalink:"/rabonajs-docs/docs/tutorial-basics/plot-shots"}},p={},d=[{value:"Import Rabona and initiate the pitch",id:"import-rabona-and-initiate-the-pitch",level:2},{value:"Pitch Size",id:"pitch-size",level:2},{value:"Plotting passes",id:"plotting-passes",level:2},{value:"Updating React Component",id:"updating-react-component",level:2},{value:"Adding Labels to the Passes",id:"adding-labels-to-the-passes",level:2}],c=()=>{const[t,e]=(0,o.useState)(null),a={height:80,width:120,padding:100,linecolour:"#ffffff",fillcolour:"#7ec850"};return(0,o.useEffect)((()=>{if(!t){const t=i.Z.pitch("pitch",a);e(t)}}),[]),(0,s.kt)("div",{id:"pitch",style:{width:"500px",margin:"auto"}})},m=()=>{const[t,e]=(0,o.useState)(null),a={height:80,width:120,padding:100,linecolour:"#ffffff",fillcolour:"#7ec850"};return(0,o.useEffect)((()=>{if(!t){const t=i.Z.pitch("pitch2",a);e(t);const n=[];for(let e=0;e<10;e++)n.push({startX:Math.floor(120*Math.random()),startY:Math.floor(80*Math.random()),endX:Math.floor(120*Math.random()),endY:Math.floor(80*Math.random())});i.Z.layer({type:"ballMovement",data:n,options:{color:"yellow",width:1.5,showArrows:!0,radius:3}}).addTo(t)}}),[]),(0,s.kt)("div",{id:"pitch2",style:{width:"750px",margin:"auto"}})},u=()=>{const[t,e]=(0,o.useState)(null),a={height:80,width:120,padding:100,linecolour:"#ffffff",fillcolour:"#7ec850"};return(0,o.useEffect)((()=>{if(!t){const t=i.Z.pitch("pitch3",a);e(t);const n=[],o=["Messi","Ronaldo","Neymar","Mbappe","Salah","Kane","Suarez","Benzema","Griezmann","Lewandowski"];for(let e=0;e<10;e++)n.push({startX:Math.floor(120*Math.random()),startY:Math.floor(80*Math.random()),endX:Math.floor(120*Math.random()),endY:Math.floor(80*Math.random()),label:o[Math.floor(Math.random()*o.length)]});i.Z.layer({type:"ballMovement",data:n,options:{color:"yellow",width:1.5,showArrows:!0,radius:15}}).addTo(t)}}),[]),(0,s.kt)("div",{id:"pitch3",style:{width:"750px",margin:"auto"}})},f={toc:d,PitchComponent:c,PitchComponentWithPasses:m,PitchComponentWithPassesAndLabels:u};function g(t){let{components:e,...o}=t;return(0,s.kt)("wrapper",(0,n.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"plot-passes-on-a-pitch"},"Plot Passes on a Pitch"),(0,s.kt)("p",null,"Example shows how to plot passes on a pitch using the 'ballMovement' type of ",(0,s.kt)("strong",{parentName:"p"},"Rabona.layer"),"."),(0,s.kt)("p",null,"Ball movement layer is a special type of layer that plots passes and shots on a pitch.\nIt is a good way to visualize the ball movement of a team or a player."),(0,s.kt)("p",null,"We will start with the Rabona import."),(0,s.kt)("h2",{id:"import-rabona-and-initiate-the-pitch"},"Import Rabona and initiate the pitch"),(0,s.kt)("p",null,"We will use the same techinque as in the ",(0,s.kt)("a",{parentName:"p",href:"https://rabona.io/docs/intro"},"previous example")," to import Rabona and initiate the pitch."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import Rabona from "rabonajs";\nimport { useEffect, useRef, useState } from "react";\n\nexport const PitchComponent = () => {\n  const [pitch, setPitch] = useState(null);\n\n  const pitchOptions = {\n    height: 80, //in px\n    width: 120, //in px\n    padding: 100, // in px, distance between the pitch border lines and external border\n    linecolour: "#ffffff",\n    fillcolour: "#7ec850",\n  };\n\n  useEffect(() => {\n    if (!pitch) {\n      const pitch = Rabona.pitch("pitch", pitchOptions);\n      setPitch(pitch);\n    }\n  }, []);\n\n  return <div id="pitch" style={{ width: "500px", margin: "auto" }} />;\n};\n')),(0,s.kt)(c,{mdxType:"PitchComponent"}),(0,s.kt)("h2",{id:"pitch-size"},"Pitch Size"),(0,s.kt)("p",null,"Different stadiums have different sizes in real world. Moreover, different data providers might serve their data in different coordinate system.\nIn the next couple of examples we are going to use statsbomb data so we will create the pitch accordingly. Thankfully Stasbomb provides a standard for that in their\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/statsbomb/open-data"},"documentation"),".\nFor instance WyScout data is in a different coordinate system.",(0,s.kt)("a",{parentName:"p",href:"https://apidocs.wyscout.com/#section/Data-glossary-and-definitions"},"documentation"),"\nThe pitch size is defined by the ",(0,s.kt)("strong",{parentName:"p"},"width")," and ",(0,s.kt)("strong",{parentName:"p"},"height")," properties of the pitch. Top left corner is the origin of the coordinate system."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:a(4958).Z,width:"1348",height:"888"})),(0,s.kt)("p",null,"Setting the pitch size to 120x80 will do the job for us."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"}," const pitchOptions = {\n    ...\n    height: 80,\n    width: 120,\n   ...\n  };\n")),(0,s.kt)("h2",{id:"plotting-passes"},"Plotting passes"),(0,s.kt)("p",null,"A Pass Layer should have the following properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"startX")," - x coordinate of the starting point of the pass"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"startY")," - y coordiante of the the starting point of the pass"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"endX")," - x coordinate of the end point of the pass"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"endY")," - y coordinate of the end point of the pass")),(0,s.kt)("p",null,"Let's create some mock passes to draw on the pitch. X coordinate is the horizontal axes and the Y coordinate is the vertical axis."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const passes = [];\nfor (let i = 0; i < 10; i++) {\n  passes.push({\n    startX: Math.floor(Math.random() * 120),\n    startY: Math.floor(Math.random() * 80),\n    endX: Math.floor(Math.random() * 120),\n    endY: Math.floor(Math.random() * 80),\n  });\n}\n")),(0,s.kt)("p",null,"Everything above the pitch is a Layer in Rabona. We can add a Pass Layer to the pitch by calling the ",(0,s.kt)("strong",{parentName:"p"},"addLayer")," method of the pitch.\nWe can create a new layer by calling the ",(0,s.kt)("strong",{parentName:"p"},"layer")," method of the Rabona object. The layer method takes three arguments:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"type")," - the type of the layer. In our case it is ",(0,s.kt)("strong",{parentName:"li"},"ballMovement")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"options")," - the options of the layer. Stylistic options like the color of the passes, the width of the passes, etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"data")," - the data of the layer. In our case it is an array of passes")),(0,s.kt)("p",null,"by calling ",(0,s.kt)("strong",{parentName:"p"},"addTo")," method of the layer we can add the layer to the pitch."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const layer = Rabona.layer({\n  type: "ballMovement",\n  data: passes,\n  options: {\n    color: "yellow",\n    width: 1.5,\n    showArrows: true,\n    radius: 3,\n  },\n}).addTo(pitch);\n')),(0,s.kt)("p",null,"The result is the following:"),(0,s.kt)(m,{mdxType:"PitchComponentWithPasses"}),(0,s.kt)("h2",{id:"updating-react-component"},"Updating React Component"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'export const PitchComponentWithPasses = () => {\n  const [pitch, setPitch] = useState(null);\n  const pitchOptions = {\n    height: 80, //in px\n    width: 120, //in px\n    padding: 100, // in px, distance between the pitch border lines and external border\n    linecolour: "#ffffff",\n    fillcolour: "#7ec850",\n  };\n  useEffect(() => {\n    if (!pitch) {\n      const pitch = Rabona.pitch("pitchWithPasses", pitchOptions);\n      setPitch(pitch);\n      const passes = [];\n      for (let i = 0; i < 10; i++) {\n        passes.push({\n          startX: Math.floor(Math.random() * 120),\n          startY: Math.floor(Math.random() * 80),\n          endX: Math.floor(Math.random() * 120),\n          endY: Math.floor(Math.random() * 80),\n        });\n      }\n      const layer = Rabona.layer({\n        type: "ballMovement",\n        data: passes,\n        options: {\n          color: "yellow",\n          width: 1.5,\n          showArrows: true,\n          radius: 3,\n        },\n      }).addTo(pitch);\n    }\n  }, []);\n  return (\n    <div id="pitchWithPasses" style={{ width: "750px", margin: "auto" }} />\n  );\n};\n')),(0,s.kt)("h2",{id:"adding-labels-to-the-passes"},"Adding Labels to the Passes"),(0,s.kt)("p",null,"We can add labels to the passes by adding ",(0,s.kt)("strong",{parentName:"p"},"label")," property to the data.\nFirst let's extend our mock data generator with labels."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const passes = [];\n// highlight-start\nconst randomNames = [\n  "Messi",\n  "Ronaldo",\n  "Neymar",\n  "Mbappe",\n  "Salah",\n  "Kane",\n  "Suarez",\n  "Benzema",\n  "Griezmann",\n  "Lewandowski",\n];\n// highlight-end\nfor (let i = 0; i < 10; i++) {\n  passes.push({\n    startX: Math.floor(Math.random() * 120),\n    startY: Math.floor(Math.random() * 80),\n    endX: Math.floor(Math.random() * 120),\n    endY: Math.floor(Math.random() * 80),\n    // highlight-next-line\n    label: randomNames[Math.floor(Math.random() * randomNames.length)],\n  });\n}\n')),(0,s.kt)("p",null,"rest of the code is the same as before. Only difference is that we changed the options layer\nto enlarge circle radius a bit."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'...\nconst layer = Rabona.layer({\n  type: "ballMovement",\n  data: passes,\n  options: {\n    color: "yellow",\n    width: 2,\n    showArrows: true,\n    radius: 20,\n  },\n}).addTo(pitch);\n...\n')),(0,s.kt)(u,{mdxType:"PitchComponentWithPassesAndLabels"}),(0,s.kt)("p",null,"In the next tutorial we will plot the shots on the pitch with different styles for goals and misses."))}g.isMDXComponent=!0},4958:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/statsbomb_pitch-15988206e327d040f8f9d6297c41392a.png"}}]);