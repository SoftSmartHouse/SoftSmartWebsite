(function(){
  const root=document.documentElement, ar=root.lang==='ar';
  const copy=ar?{open:'مساعد Soft Smart',welcome:'أهلًا بك في Soft Smart. أقدر أساعدك تختار الحل المناسب لمشروعك.',placeholder:'اكتب سؤالك هنا...',send:'إرسال',quick:['مواقع','تطبيقات','AI Automation','المنتجات','تواصل معنا']}:{open:'Soft Smart assistant',welcome:'Welcome to Soft Smart. I can help you choose the right solution for your business.',placeholder:'Type your question...',send:'Send',quick:['Websites','Mobile apps','AI Automation','Products','Contact us']};
  const replies=ar?{
    'مواقع':'نقدم Websites سريعة ومتجاوبة تشمل التصميم، الدومين، الاستضافة، SSL وSEO الأساسي.',
    'تطبيقات':'نطوّر تطبيقات موبايل حديثة بأداء عالي وتجربة استخدام سلسة.',
    'ai automation':'نحوّل المهام الروتينية إلى Workflows ذكية تعمل 24/7 وتربط أدواتك معًا.',
    'المنتجات':'لدينا CRM & Smart Systems وEduRoot وClinic Root، وكل منتج له صفحة تفصيلية.',
    'تواصل معنا':'تواصل معنا عبر واتساب 01041390634 أو البريد softsmart.house@gmail.com.'
  }:{
    'websites':'We build fast, responsive websites with design, domain, hosting, SSL, and basic SEO.',
    'mobile apps':'We develop modern mobile apps with high performance and smooth user experiences.',
    'ai automation':'We turn routine tasks into smart workflows that run 24/7 and connect your tools.',
    'products':'Our products include CRM & Smart Systems, EduRoot, and Clinic Root.',
    'contact us':'Reach us on WhatsApp at 01041390634 or email softsmart.house@gmail.com.'
  };
  function answer(q){const s=q.toLowerCase(); for(const k in replies) if(s.includes(k.toLowerCase())||s.includes(k.split(' ')[0].toLowerCase())) return replies[k]; return ar?'أقدر أساعدك في المواقع، تطبيقات الموبايل، AI Automation، والأنظمة الذكية. اختار موضوعًا من الأزرار أو اكتب سؤالك.':'I can help with websites, mobile apps, AI automation, and smart systems. Choose a topic or type your question.';}
  const box=document.createElement('div'); box.className='chat-widget'; box.innerHTML='<button class="chat-launch" aria-label="'+copy.open+'">✦</button><section class="chat-panel" aria-hidden="true"><header><strong>'+copy.open+'</strong><button class="chat-close" aria-label="Close">×</button></header><div class="chat-messages"><div class="chat-message bot">'+copy.welcome+'</div></div><div class="chat-quick">'+copy.quick.map(x=>'<button type="button">'+x+'</button>').join('')+'</div><form class="chat-form"><input required placeholder="'+copy.placeholder+'"><button>'+copy.send+'</button></form></section>';
  document.body.appendChild(box); const panel=box.querySelector('.chat-panel'), messages=box.querySelector('.chat-messages'), input=box.querySelector('input');
  function add(text,who){const el=document.createElement('div');el.className='chat-message '+who;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight;}
  box.querySelector('.chat-launch').onclick=()=>{panel.classList.add('open');panel.setAttribute('aria-hidden','false');input.focus()}; box.querySelector('.chat-close').onclick=()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true')};
  box.querySelectorAll('.chat-quick button').forEach(b=>b.onclick=()=>{add(b.textContent,'user');setTimeout(()=>add(answer(b.textContent),'bot'),250)});
  box.querySelector('.chat-form').onsubmit=e=>{e.preventDefault();const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(answer(q),'bot'),250)};
})();
