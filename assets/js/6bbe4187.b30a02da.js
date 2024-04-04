"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2998],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r.apply(this,arguments)}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=i.createContext({}),c=function(e){return function(t){var a=p(t.components);return i.createElement(e,r({},t,{components:a}))}},p=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,n=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,u=c["".concat(n,".").concat(m)]||c[m]||h[m]||r;return a?i.createElement(u,l(l({ref:t},d),{},{components:a})):i.createElement(u,l({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<r;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},28125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),o=(a(96540),a(15680)),r=a(98180);const n={sidebar_position:30,title:"Eye Gaze Calibration"},l="Project Aria In-Session Eye Gaze Calibration",s={unversionedId:"ARK/mps/eye_gaze_calibration",id:"ARK/mps/eye_gaze_calibration",title:"Eye Gaze Calibration",description:"Overview",source:"@site/docs/ARK/mps/eye_gaze_calibration.mdx",sourceDirName:"ARK/mps",slug:"/ARK/mps/eye_gaze_calibration",permalink:"/projectaria_tools/docs/ARK/mps/eye_gaze_calibration",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/eye_gaze_calibration.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Eye Gaze Calibration"},sidebar:"tutorialSidebar",previous:{title:"Desktop App MPS Requests",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps"},next:{title:"MPS Data Processing",permalink:"/projectaria_tools/docs/ARK/mps/mps_processing"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"What In-Session Eye Gaze Calibration does",id:"what-in-session-eye-gaze-calibration-does",level:2},{value:"HW &amp; SW Requirements",id:"hw--sw-requirements",level:2},{value:"Android",id:"android",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"iOS",id:"ios",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"How to Collect In-Session Eye Gaze Calibration",id:"how-to-collect-in-session-eye-gaze-calibration",level:2},{value:"To view Device Settings",id:"to-view-device-settings",level:3},{value:"Multiple Users Within the One Recording",id:"multiple-users-within-the-one-recording",level:3},{value:"Eye Gaze Calibration tips",id:"eye-gaze-calibration-tips",level:2},{value:"Things to avoid",id:"things-to-avoid",level:3},{value:"Things to do",id:"things-to-do",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.mdx)(m,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"project-aria-in-session-eye-gaze-calibration"},"Project Aria In-Session Eye Gaze Calibration"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This page provides an overview of what In-Session Eye Gaze Calibration does, and how to collect In-Session Eye Gaze Calibration with Project Aria glasses."),(0,o.mdx)("admonition",{title:"Not required to request Eye Gaze MPS",type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"In-Session Eye Gaze Calibration provides an additional personalized ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_eye_gaze"},"Eye Gaze output"),", but is not required for requesting Eye Gaze MPS.")),(0,o.mdx)("h2",{id:"what-in-session-eye-gaze-calibration-does"},"What In-Session Eye Gaze Calibration does"),(0,o.mdx)("p",null,"In-Session Eye Gaze Calibration enables researchers to improve the eye gaze estimations in Eye Gaze MPS outputs, enabling researchers to more accurately determine where wearers are looking during the recordings."),(0,o.mdx)("p",null,"When you request Eye Gaze Machine Perception Services (MPS) and the file has an in-session Eye Gaze Calibration as part of the VRS file, you will receive two outputs:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"general_eye_gaze.csv")," - based on the standard eye gaze configuration"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"personalized_eye_gaze.csv")," - personalized eye gaze data based on the calibration data collected in the recording")),(0,o.mdx)("p",null,"Every person is unique in terms of how they move their eyes and look at objects, so the personalized_eye_gaze estimation is expected to be more accurate for the individual."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Further resources:")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze"},"Eye Gaze Data\xa0Formats")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"How to Request MPS")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/glasses_manual/profile_guide#recording-profiles-that-support-mps"},"Recording Profiles That Support MPS")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/getting_started"},"Machine Perception Services Tutorial")," - includes sample output from a recording where good in-session Eye Gaze Calibration data was collected")),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"Eye gaze calibration is not the same as Aria device calibration. For information about Aria device calibration, go to ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tech_spec/device_calibration"},"Project Aria Device Calibration"),".")),(0,o.mdx)("h2",{id:"hw--sw-requirements"},"HW & SW Requirements"),(0,o.mdx)("h3",{id:"android"},"Android"),(0,o.mdx)("h4",{id:"hardware"},"Hardware"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"ARCore Depth API (",(0,o.mdx)("a",{parentName:"li",href:"https://developers.google.com/ar/devices"},"https://developers.google.com/ar/devices"),") support")),(0,o.mdx)("h4",{id:"software"},"Software"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Google Play Services for AR (",(0,o.mdx)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.google.ar.core"},"https://play.google.com/store/apps/details?id=com.google.ar.core"),")",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"For phones that have ARCore Depth API capabilities, it's normally installed by default"),(0,o.mdx)("li",{parentName:"ul"},"You'll see the error message \"Please check that Google Play Services for AR is installed\" if you don't have ARCore Depth API installed.")))),(0,o.mdx)("h3",{id:"ios"},"iOS"),(0,o.mdx)("h4",{id:"hardware-1"},"Hardware"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"TrueDepth camera (iPhone X or later)")),(0,o.mdx)("h4",{id:"software-1"},"Software"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"iOS 14 or later")),(0,o.mdx)("h2",{id:"how-to-collect-in-session-eye-gaze-calibration"},"How to Collect In-Session Eye Gaze Calibration"),(0,o.mdx)("p",null,"In-Session Eye Gaze Calibration can only be initiated via the Mobile Companion App. Follow these steps for any recording where you may wish to generate Calibrated Eye Gaze MPS."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"In the Mobile Companion app, create a new recording using a profile that includes ET and RGB cameras (such as Profile 15 or 25)"),(0,o.mdx)("li",{parentName:"ol"},"Once your recording has started, close the recording window",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Select X on the top left of the screen"))),(0,o.mdx)("li",{parentName:"ol"},"Go to Device Settings",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Tap the Paired Glasses info card on the Dashboard"))),(0,o.mdx)("li",{parentName:"ol"},"Select ",(0,o.mdx)("strong",{parentName:"li"},"Eye Tracking Calibration")),(0,o.mdx)("li",{parentName:"ol"},"Confirm that you\u2019d like to run it during the current recording session"),(0,o.mdx)("li",{parentName:"ol"},"Follow the prompts to calibrate your glasses")),(0,o.mdx)("h3",{id:"to-view-device-settings"},"To view Device Settings"),(0,o.mdx)("p",null,"Tap the paired glasses info card."),(0,o.mdx)("div",{style:{textAlign:"center"}},(0,o.mdx)("img",{width:"80%",src:(0,r.default)("/img/ARK/mobile_app_device_settings.png"),alt:"Device Settings page from the Dashboard"})),(0,o.mdx)("h3",{id:"multiple-users-within-the-one-recording"},"Multiple Users Within the One Recording"),(0,o.mdx)("p",null,"It\u2019s possible for multiple users to do an in-session calibration within the one recording."),(0,o.mdx)("p",null,"When a new user gets the glasses, the first thing they should do is the in-session Eye Tracking Calibration."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"See ",(0,o.mdx)("a",{parentName:"li",href:"/docs/data_formats/mps/mps_eye_gaze"},"Eye Gaze Data Format"),"\xa0for how multiple users are tracked.")),(0,o.mdx)("h2",{id:"eye-gaze-calibration-tips"},"Eye Gaze Calibration tips"),(0,o.mdx)("h3",{id:"things-to-avoid"},"Things to avoid"),(0,o.mdx)("p",null,"\u274c Do not wear a face covering during eye calibration."),(0,o.mdx)("p",null,"\u274c Choose an area with ample and even lighting; do not face a bright light, window or reflective surface."),(0,o.mdx)("p",null,"\u274c Do not set your phone screen brightness too high compared to your surroundings."),(0,o.mdx)("p",null,"\u274c Do not fully extend your arm(s) during eye calibration. Your elbows should be bent so that the phone is roughly 1 ft (30 cm) away from your face."),(0,o.mdx)("h3",{id:"things-to-do"},"Things to do"),(0,o.mdx)("p",null,"\u2705 The phone should be held straight in front of your face, so that you shouldn't look up or down to see the screen. Hold the phone plumb (90 degrees) vertically to the ground."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Image of Project Aria Eye Gaze Calibration screen",src:a(240).A,width:"400",height:"865"})),(0,o.mdx)("p",null,'\u2705 The "Leveler" stage appears if the position of your phone isn\'t within specifications for the calibration process. Adjust the phone in front of you and its distance by bending your elbow until the smaller, black circle turns into a green disk with a check mark.'),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:a(64385).A,width:"400",height:"866"}),"\n",(0,o.mdx)("img",{src:a(86362).A,width:"400",height:"866"}),'\n\u2705 Once the "Leveler" stage is successfully completed, do your best to keep your phone in exactly the same position throughout the full eye calibration process. If your phone is moved to a position no longer suited to calibrate your device, the app will return to the "Leveler" stage.'),(0,o.mdx)("p",null,"\u2705 During eye calibration stages 1 to 10, move your nose towards the direction indicated by the arrow. If you're only following the direction with your gaze without moving your head, the calibration stage will time out and fail. However, please make sure to keep your eyes fixed on the number within the dot the whole time."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:a(68462).A,width:"400",height:"866"})))}u.isMDXComponent=!0},240:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/eye_calibration-2d2e4670079aee22a15c36fcaec0996c.png"},64385:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/eye_calibration_leveler_stage-bc32b1a0e2026d29caf94661e5a2df95.png"},86362:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/eye_calibration_leveler_success-c003e1173686ce0d26a9f75077c73428.png"},68462:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/eye_calibration_pointer-68813728052ae6bc50551aed9417fdfe.jpg"}}]);