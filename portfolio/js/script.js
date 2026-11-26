/* ===== EDIT ME: all portfolio content lives in this CONFIG block ===== */
const CONFIG = {
  email: "agal33826@gmail.com",           // TODO: add your real email
  formEndpoint: "https://formsubmit.co/ajax/agal33826@gmail.com",                          // e.g. "https://formspree.io/f/xxxxxxx"; empty = mailto fallback
  resume: "assets/resume/resume_dp.pdf",
  roles: ["Aspiring Software Developer","Web Developer","AI & Data Science Student","Creative Problem Solver"],
  skills: {
    "Programming": ["Java","Python"],
    "Frontend": ["HTML","CSS","JavaScript","Bootstrap"],
    "Backend": ["Node.js","Express.js","PHP"],
     "Mobile Development": ["Flutter","Dart"],
    "Database": ["MySQL","MongoDB"],
    "Tools": ["Git","GitHub","VS Code"]
  },
  // status: "Completed" | "Hackathon project" | "Pending". Drop a screenshot at the image path to show it. GitHub/Demo buttons appear only when a URL is set.
  projects: [
    {title:"Smart Health Record Management System",status:"Completed",image:"assets/images/shr.png",github:"",demo:"https://smart-health-record-35t9.onrender.com/",
     desc:"A web-based healthcare record management application designed to organize personal health records and manage important healthcare activities.",
     tech:["HTML","CSS","JavaScript","Node.js","Express.js","MongoDB"],
     features:["User authentication","Health record management","Medicine reminders","Appointment reminders","Emergency contacts","Browser notifications","Tamil and English voice reminders"]},
    {title:"Chandham AI",status:"Hackathon project",image:"assets/images/chan.jpeg",github:"",demo:"",
     desc:"A Tamil language technology project focused on analysing classical Tamil Venba poetic metre. Developed as a team project for Aurex'26.",
     tech:["Flutter","Dart","Tamil text processing","Speech-to-Text"],features:[]},
    {title:"Food Hunt",status:"Completed",image:"assets/images/foodhunt.png",github:"",demo:"https://food-hunt-restaurant.netlify.app/",
     desc:"A restaurant and food ordering website that allows users to explore food items and interact with a shopping cart.",
     tech:["HTML","CSS","JavaScript","PHP","MySQL"],
     features:["Food listings","Shopping cart","Login and registration","Local storage","Backend integration"]},
    {title:"Vaisu Boutique",status:"Completed",image:"assets/images/vaisu.jpeg",github:"",demo:"https://agalya21.neocities.org/vaisu%20boutique/?ver=2",
     desc:"A boutique website designed to showcase fashion products with an attractive and user-friendly interface.",
     tech:["HTML","CSS"],features:[]},
    {title:"Tamil Music Recommendation App",status:"Pending",image:"assets/images/tamil-music.png",github:"",demo:"",
     desc:"A planned application focused on Tamil music discovery and recommendations.",
     tech:[],features:[]}
  ],
  // Replace these placeholders with real certificates. image: "assets/certificates/file.jpg"
  certificates: [
    {title:"Web Development Internship Certificate",org:"ATS Technologies",date:"July 2026",image:"assets/certificates/intern1.jpeg",link:""},
    {title:"MongoDB Course",org:"Unstop",image:"assets/certificates/mongodb.jpeg",link:""},
    {title:"Node.js Course",org:"Unstop",image:"assets/certificates/nodejs.jpeg",link:""},
    {title:"Java Fundamentals",org:"Infosys springboard",image:"assets/certificates/java.jpeg",link:""},
    {title:"Python",org:"Infosys springboard",image:"assets/certificates/python.jpeg",link:""},
    {title:"UI Design",org:"Accenture",image:"assets/certificates/ui.jpeg",link:""}
    
  ],
  
  
  
  // Only verified items. No winning position is claimed.
  achievements: [
    {tag:"Hackathon",title:"AUREX'26",sub:"Classical Tamil Digital Library Hackathon",
     text:"Participated as part of a team and worked collaboratively on a Venba metre analysis project.",project:"Chandham AI"},
    {tag:"Event coordination",title:"TALKATHON – COORDINATOR",sub:"Event coordinator",
     text:"Took on the Talkathon Coordinator role, supporting event coordination and organization.",project:""}
  ],
  // type: "done" (learned) | "interest" (learning interest only) | "current" (highlighted). future = planned learning, shown dashed.
  journey: [
    {type:"done",title:"Frontend Development",desc:"Started learning the fundamentals of web development and building interactive user interfaces.",
     topics:["HTML","CSS","JavaScript","Bootstrap"],projects:["Food Hunt","Vaisu Boutique"]},
    {type:"done",title:"Backend Development",desc:"Exploring server-side development, database management, APIs, and application functionality.",
     topics:["PHP","Node.js","Express.js","MySQL","MongoDB"],projects:["Food Hunt","Smart Health Record Management System"]},
    {type:"done",title:"Full Stack Development",desc:"Learning how frontend and backend technologies work together to create complete web applications.",
     topics:[],projects:["Smart Health Record Management System","Food Hunt"]},
    {type:"interest",title:"Mobile Development",desc:"An area of personal interest where I would like to explore mobile application development and understand how mobile applications are built.",
     topics:[],projects:[]},
    {type:"current",title:"Currently Exploring DevOps",desc:"Currently focusing on DevOps fundamentals and exploring how software development and operations work together.",
     topics:["Linux fundamentals","Git and version control","DevOps fundamentals","Deployment","Automation"],future:["Cloud concepts (future)","CI/CD concepts (future)"],projects:[]}
  ]
};
/* ===== Code below needs no editing ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),3500)}
const thumb=(img,label,alt)=>img?`<img src="${esc(img)}" alt="${esc(alt)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ph',textContent:'${esc(label)}'}))">`:`<span class="ph">${esc(label)}</span>`;
const initials=t=>t.split(/\s+/).map(w=>w[0]).join("").slice(0,3).toUpperCase();

/* render content */
$("#skillGrid").innerHTML=Object.entries(CONFIG.skills).map(([k,v])=>`<div class="glass card hov reveal"><h3>${esc(k)}</h3><div class="chips">${v.map(s=>`<span>${esc(s)}</span>`).join("")}</div></div>`).join("");
$("#certGrid").innerHTML=CONFIG.certificates.map((c,i)=>`<button class="glass card hov cert reveal" data-i="${i}"><div class="shot">${thumb(c.image,"CERT",c.title)}</div><h3>${esc(c.title)}</h3>${[c.org,c.date].filter(Boolean).length?`<p>${[c.org,c.date].filter(Boolean).map(esc).join(" · ")}</p>`:""}<span class="link">View Certificate</span></button>`).join("");
const lk=(l,u)=>u?`<a class="btn ghost" href="${esc(u)}" target="_blank" rel="noopener">${l}</a>`:"";
$("#projectGrid").innerHTML=CONFIG.projects.map(p=>{const b=lk("GitHub",p.github)+lk("Live demo",p.demo);return `<article class="glass card proj hov reveal"><div class="shot">${thumb(p.image,initials(p.title),p.title+" screenshot")}<span class="status ${p.status==="Pending"?"pending":""}">${esc(p.status)}</span></div><div class="pbody"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>${p.tech.length?`<div class="chips">${p.tech.map(t=>`<span>${esc(t)}</span>`).join("")}</div>`:""}${p.features.length?`<ul>${p.features.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>`:""}${b?`<div class="pbtn">${b}</div>`:""}</div></article>`}).join("");
$("#achList").innerHTML=CONFIG.achievements.map(a=>`<article class="glass card ach hov reveal"><span class="tag">${esc(a.tag)}</span><h3>${esc(a.title)}</h3><p class="at">${esc(a.sub)}</p><p>${esc(a.text)}</p>${a.project?`<div class="chips"><span>Project: ${esc(a.project)}</span></div>`:""}</article>`).join("");
$("#roadmap").innerHTML='<div class="road-fill"></div>'+CONFIG.journey.map(s=>{const t=(s.topics||[]).map(x=>`<span>${esc(x)}</span>`).join("")+(s.future||[]).map(x=>`<span class="future">${esc(x)}</span>`).join("");return `<div class="step ${s.type} reveal"><span class="node"></span><div class="sbody">${s.type==="current"?'<span class="badge">CURRENT FOCUS</span>':s.type==="interest"?'<span class="badge soft">Learning interest</span>':""}<h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>${t?`<div class="chips">${t}</div>`:""}${(s.projects||[]).length?`<div class="conn">Connected projects:${s.projects.map(p=>`<a href="#projects">${esc(p)}</a>`).join("")}</div>`:""}</div></div>`}).join("");
$("#year").textContent=new Date().getFullYear();
["#emailLink","#footEmail"].forEach(s=>{const a=$(s);a.href="mailto:"+CONFIG.email;a.textContent=CONFIG.email});

/* loader, nav */
addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),reduce?0:700));
const nav=$("#nav"),toTopBtn=$("#toTop");
addEventListener("scroll",()=>{nav.classList.toggle("scrolled",scrollY>30);toTopBtn.classList.toggle("show",scrollY>600)},{passive:true});
toTopBtn.onclick=()=>scrollTo({top:0});
const mb=$("#menuBtn"),menu=$("#menu");
mb.onclick=()=>mb.setAttribute("aria-expanded",menu.classList.toggle("open"));
$$("#menu a").forEach(a=>a.onclick=()=>{menu.classList.remove("open");mb.setAttribute("aria-expanded","false")});
const links=$$("#menu a");
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id==="education"||e.target.id==="profiles"?null:e.target.id;if(id)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id))}}),{rootMargin:"-45% 0px -50% 0px"}).observe&&$$("main section").forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!["education","profiles"].includes(s.id))links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+s.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe(s));

/* scroll reveal with stagger */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const sib=[...e.target.parentElement.children].indexOf(e.target);e.target.style.transitionDelay=Math.min(sib,5)*80+"ms";e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));

/* typing */
(function(){const el=$("#typed");if(reduce){el.textContent=CONFIG.roles[0];return}let r=0,c=0,del=false;
(function tick(){const w=CONFIG.roles[r];c+=del?-1:1;el.textContent=w.slice(0,c);let d=del?40:85;
if(!del&&c===w.length){del=true;d=1400}else if(del&&c===0){del=false;r=(r+1)%CONFIG.roles.length;d=300}setTimeout(tick,d)})()})();

/* particles (desktop only) */
(function(){if(reduce||innerWidth<768)return;const cv=$("#particles"),x=cv.getContext("2d");let w,h,ps=[];
const rs=()=>{w=cv.width=innerWidth;h=cv.height=innerHeight};rs();addEventListener("resize",rs);
for(let i=0;i<55;i++)ps.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,c:["#8B5CF6","#22D3EE","#EC4899"][i%3]});
(function f(){x.clearRect(0,0,w,h);ps.forEach(p=>{p.x=(p.x+p.vx+w)%w;p.y=(p.y+p.vy+h)%h;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle=p.c;x.shadowBlur=10;x.shadowColor=p.c;x.fill()});requestAnimationFrame(f)})()})();

/* cursor + parallax (desktop only) */
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!reduce){const cu=$("#cursor");
addEventListener("mousemove",e=>{cu.style.left=e.clientX+"px";cu.style.top=e.clientY+"px";const cc=$(".photo-wrap");if(cc&&scrollY<600)cc.style.translate=`${(e.clientX/innerWidth-.5)*-16}px ${(e.clientY/innerHeight-.5)*-16}px`});
document.addEventListener("mouseover",e=>cu.classList.toggle("big",!!e.target.closest("a,button")))}

/* resume */
let resumeOk=true;
if(location.protocol!=="file:")fetch(CONFIG.resume,{method:"HEAD"}).then(r=>resumeOk=r.ok).catch(()=>resumeOk=false);
$$("[data-resume]").forEach(a=>{a.href=CONFIG.resume;a.onclick=e=>{if(!resumeOk){e.preventDefault();toast("Resume not uploaded yet. Add the PDF to assets/resume/.")}}});

/* certificate modal */
const modal=$("#modal");
$("#certGrid").onclick=e=>{const b=e.target.closest(".cert");if(!b)return;const c=CONFIG.certificates[b.dataset.i];
const meta=[c.org,c.date].filter(Boolean).map(esc).join(" · ");
$("#modalBody").innerHTML=`<h3>${esc(c.title)}</h3>${meta?`<p>${meta}</p>`:""}${c.image?`<img src="${esc(c.image)}" alt="${esc(c.title)} certificate">`:"<p>Certificate image not added yet.</p>"}${c.link?`<p><a class="link" href="${esc(c.link)}" target="_blank" rel="noopener">Verify credential</a></p>`:""}`;
modal.hidden=false;$("#closeModal").focus()};
const closeModal=()=>modal.hidden=true;$("#closeModal").onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};
addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

/* contact form */
const form=$("#form"),st=$("#formStatus");
form.onsubmit=async e=>{e.preventDefault();st.textContent="";let ok=true;
$$("input,textarea",form).forEach(f=>{const m=f.nextElementSibling;let msg="";
if(!f.value.trim())msg="Please fill in this field.";else if(f.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value))msg="Enter a valid email address.";
m.textContent=msg;if(msg)ok=false});if(!ok)return;
const d=Object.fromEntries(new FormData(form));
if(!CONFIG.formEndpoint){location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message+"\n\nFrom: "+d.name+" ("+d.email+")")}`;st.textContent="Opening your email app. The message is not sent until you send it there.";return}
try{const r=await fetch(CONFIG.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)});
const result = await r.json();

if (!r.ok || result.success !== "true") {
  st.textContent = result.message || "Could not send. Please try again.";
  return;
}

form.reset();
st.textContent = "Message sent. Thank you!";}catch{st.textContent="Could not send the message. Please try again or email me directly."}};

/* animated roadmap line */
(function(){const rd=$("#roadmap"),fill=$(".road-fill",rd);const up=()=>{const r=rd.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.65-r.top)/r.height));fill.style.height=p*100+"%";$$(".step",rd).forEach(s=>s.classList.toggle("lit",s.offsetTop+16<=p*r.height))};addEventListener("scroll",up,{passive:true});addEventListener("resize",up);up()})();
