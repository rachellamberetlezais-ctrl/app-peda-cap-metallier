(() => {
 'use strict';
 const D=window.LESSON,$=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt=(n,d=5)=>new Intl.NumberFormat('fr-FR',{maximumFractionDigits:d}).format(n),fixed=n=>new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);
 function number(v){const s=String(v).trim().replace(/[\s\u00a0\u202f]/g,'').replace(',','.');return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)&&Number.isFinite(Number(s))?Number(s):null;}
 function correct(v,q){const n=number(v);return n!==null&&(q.round===undefined||Math.abs(n*10**q.round-Math.round(n*10**q.round))<1e-6)&&Math.abs(n-q.answer)<=Math.max(1e-7,Math.abs(q.answer)*1e-8);}
 const fields=[],exercises=[],opened=[true,false,false],names=['Débutant / Socle CAP','Avancé / Dépassement','Expert / Excellence'],badges=D.badges;let level=0,noticeDone=new Set();
 function step(n){for(let i=1;i<=4;i++){$('step-'+i).hidden=i!==n;$('step-'+i).classList.toggle('active',i===n);const b=$('tab-step-'+i);b.setAttribute('aria-selected',String(i===n));b.tabIndex=i===n?0:-1;b.classList.toggle('active',i===n);}window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
 document.querySelectorAll('[data-step]').forEach((b,i)=>{b.addEventListener('click',()=>step(i+1));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%4;else if(e.key==='ArrowLeft')n=(i+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;if(n!==undefined){e.preventDefault();step(n+1);$('tab-step-'+(n+1)).focus();}});});
 document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>step(Number(b.dataset.next))));
 D.objectives.forEach(text=>{const li=document.createElement('li');li.textContent=text;$('objectives').append(li);});$('prerequisites').textContent=D.prerequisites;
 function render(ex,id,{training=false,l=0,index=0,evaluation=false}={}){
  const card=document.createElement('article');card.className='exercise-box';card.id=id;
  card.innerHTML=`<div class="exercise-meta"><span>${esc(ex.title)}</span><span class="badge-tag ${l===0?'tag-cap':'tag-expert'}">${evaluation?'Bilan /8':training?l===0?'Socle CAP':'Bonus':'Découverte'}</span></div><h3 class="card-title"><img src="../../assets/fleche_rouge.png" class="icon-bullet" alt="">${esc(ex.title)}</h3><div class="info-callout">${esc(ex.context)}</div>`;
  if(Array.isArray(ex.guidance)){
   const guidance=document.createElement('section');guidance.className='discovery-guidance';guidance.setAttribute('aria-label','Indications et formules du dossier pédagogique');
   const heading=document.createElement('h4');heading.textContent='Les indications du dossier pour te guider';guidance.append(heading);
   ex.guidance.forEach(g=>{
    const block=document.createElement('div');block.className='discovery-guide-step';const title=document.createElement('h4');title.textContent=g.title;block.append(title);
    if(g.text){const text=document.createElement('p');text.textContent=g.text;block.append(text);}
    if(g.formula){const formula=document.createElement('div');formula.className='discovery-guide-formula';formula.textContent=g.formula;block.append(formula);}
    if(g.fraction){const fraction=document.createElement('div');fraction.className='discovery-fraction';fraction.setAttribute('role','math');fraction.setAttribute('aria-label',g.fraction.variable+' égale '+g.fraction.numerator+' divisé par '+g.fraction.denominator);fraction.innerHTML=esc(g.fraction.variable)+' = <span class="fraction"><span>'+esc(g.fraction.numerator)+'</span><span>'+esc(g.fraction.denominator)+'</span></span> = …';block.append(fraction);}
    if(g.headers&&g.rows){const scroll=document.createElement('div');scroll.className='discovery-table-scroll';scroll.tabIndex=0;scroll.setAttribute('role','region');scroll.setAttribute('aria-label','Tableau de proportionnalité du dossier, défilement horizontal possible');const table=document.createElement('table');const caption=document.createElement('caption');caption.textContent='Du relevé graphique à la cote réelle';table.append(caption);const thead=document.createElement('thead'),hr=document.createElement('tr');g.headers.forEach(t=>{const cell=document.createElement('th');cell.scope='col';cell.textContent=t;hr.append(cell);});thead.append(hr);table.append(thead);const body=document.createElement('tbody');g.rows.forEach(row=>{const tr=document.createElement('tr');row.forEach((t,i)=>{const cell=document.createElement(i===0?'th':'td');if(i===0)cell.scope='row';cell.textContent=t;tr.append(cell);});body.append(tr);});table.append(body);scroll.append(table);block.append(scroll);}
    guidance.append(block);
   });card.append(guidance);
  }
  const item={card,fields:[],training,l,index};exercises.push(item);
  ex.questions.forEach((q,j)=>{
   const key=id+'-q'+j,wrap=document.createElement('div');wrap.className='q-item';wrap.id=key+'-wrap';
   const title=document.createElement('div');title.className='q-title';const label=document.createElement('label');label.htmlFor=key;label.textContent=q.label+(evaluation?' ('+fmt(q.points||0)+' pt)':'');title.append(label);wrap.append(title);
   let input;if(q.type==='choice'){input=document.createElement('select');input.innerHTML='<option value="">Choisir une réponse</option>';q.options.forEach((s,k)=>{const o=document.createElement('option');o.value=String(k);o.textContent=s;input.append(o);});}else if(q.type==='manual'){input=document.createElement('textarea');input.rows=3;input.placeholder='Ta méthode ou ta conclusion';}else{input=document.createElement('input');input.type='text';input.inputMode='decimal';input.autocomplete='off';input.placeholder='Ton résultat';}
   input.id=key;input.className='cma-input';input.setAttribute('aria-describedby',key+'-feedback');
   const row=document.createElement('div');row.className='input-row';row.append(input);if(q.unit){const unit=document.createElement('span');unit.className='input-unit';unit.textContent=q.unit;row.append(unit);}
   const button=document.createElement('button');button.type='button';button.className='btn btn-primary btn-sm';button.textContent=q.type==='manual'?'Comparer au corrigé':'Valider';row.append(button);wrap.append(row);
   const feedback=document.createElement('div');feedback.className='feedback-box';feedback.id=key+'-feedback';feedback.setAttribute('role','status');wrap.append(feedback);
   const f={q,input,button,feedback,wrap,mastered:false,valid:false,review:null,evaluation,training,l};fields.push(f);item.fields.push(f);
   if(q.type==='manual'){
    const reviewLabel=document.createElement('label');reviewLabel.className='manual-review';reviewLabel.hidden=true;const check=document.createElement('input');check.type='checkbox';check.id=key+'-review';f.review=check;f.reviewLabel=reviewLabel;
    reviewLabel.append(check,document.createTextNode('J’ai comparé et corrigé ma réponse. Cette auto-vérification reste à relire avec le formateur.'));wrap.append(reviewLabel);
    check.addEventListener('change',()=>{f.valid=check.checked&&Boolean(input.value.trim());if(f.valid)f.mastered=true;wrap.classList.toggle('manual-reviewed',f.valid);progress();});
   }
   button.addEventListener('click',()=>{
    if(q.type==='manual'){
     feedback.className='feedback-box hint';feedback.textContent=input.value.trim()?'Réponse de référence à comparer avec ta rédaction :\n'+q.answer+'\nLa rédaction n’est pas notée automatiquement.':'Écris d’abord ta réponse, puis compare-la au corrigé.';
     f.reviewLabel.hidden=!input.value.trim();if(!input.value.trim()){f.review.checked=false;f.valid=false;}
    }else{
     f.valid=q.type==='choice'?input.value!==''&&Number(input.value)===q.answer:correct(input.value,q);
     feedback.className='feedback-box '+(f.valid?'correct':'incorrect');feedback.textContent=f.valid?'✓ Réponse correcte.':input.value.trim()===''?'Complète ta réponse.':q.round!==undefined?'Revois le calcul, l’unité et l’arrondi à '+q.round+' décimales.':'Reprends les données et les étapes de calcul. Tu peux revenir au cours.';
     wrap.classList.toggle('completed',f.valid);input.setAttribute('aria-invalid',String(!f.valid));if(f.valid)f.mastered=true;
    }progress();
   });
   input.addEventListener('input',()=>{f.valid=false;input.removeAttribute('aria-invalid');feedback.className='feedback-box';feedback.textContent='';wrap.classList.remove('completed');if(f.review){f.review.checked=false;f.reviewLabel.hidden=true;wrap.classList.remove('manual-reviewed');}if(evaluation)progress();});card.append(wrap);
  });
  const correction=document.createElement('details');correction.className='exercise-correction no-print';correction.innerHTML=`<summary>Voir le corrigé détaillé</summary><p>${esc(ex.correction)}</p>`;card.append(correction);return card;
 }
 D.discovery.forEach((ex,i)=>$('discovery-content').append(render(ex,'discovery-'+i)));
 D.course.forEach(([title,text],i)=>{const d=document.createElement('div');d.className='accordion-item'+(i===0?' open':'');const b=document.createElement('button');b.type='button';b.className='accordion-header';b.textContent=title;b.setAttribute('aria-expanded',String(i===0));const p=document.createElement('div');p.className='accordion-body';p.textContent=text;b.addEventListener('click',()=>{const on=d.classList.toggle('open');b.setAttribute('aria-expanded',String(on));});d.append(b,p);$('course-content').append(d);});
 D.levels.forEach((group,l)=>{
  const b=document.createElement('button');b.type='button';b.id='level-button-'+l;b.className='level-card';b.innerHTML=`<span><span class="level-pill pill-l${l+1}">NIVEAU ${l+1} ${['🟢','🟡','🔴'][l]}</span><span class="level-description">${names[l]} (${group.length} exercices)</span><small>${l===0?'Valider le socle ouvre le niveau 2 et le bilan imprimable.':'Réussir le niveau précédent pour continuer.'}</small></span><span class="level-status" id="level-status-${l}">En cours</span>`;
  b.addEventListener('click',()=>{if(opened[l]){level=l;progress();}});$('level-selectors').append(b);
  const panel=document.createElement('div');panel.id='level-panel-'+l;group.forEach((ex,j)=>panel.append(render(ex,`level-${l}-ex-${j}`,{training:true,l,index:j})));$('training-content').append(panel);
  const badge=document.createElement('div');badge.className='cma-badge locked';badge.id='badge-'+l;badge.textContent=['⚖ ','★ ','🏆 '][l]+badges[l];$('badge-shelf').append(badge);
 });
 $('evaluation-content').append(render(D.evaluation,'evaluation',{evaluation:true}));
 function progress(){
  const counts=D.levels.map((_,l)=>{const f=fields.filter(f=>f.training&&f.l===l);return {all:f.length,done:f.filter(f=>f.mastered).length};});
  counts.forEach((c,l)=>{if(c.all===c.done&&l<2)opened[l+1]=true;$('level-button-'+l).disabled=!opened[l];$('level-button-'+l).classList.toggle('locked',!opened[l]);$('level-button-'+l).classList.toggle('active-lvl',l===level);$('level-status-'+l).textContent=!opened[l]?'🔒 Verrouillé':c.all===c.done?'✓ Validé':c.done+' / '+c.all+' questions';$('level-panel-'+l).hidden=l!==level;$('badge-'+l).classList.toggle('locked',c.done!==c.all);$('badge-'+l).classList.toggle('unlocked',c.done===c.all);});
  exercises.filter(e=>e.training).forEach(e=>{const previous=exercises.find(p=>p.training&&p.l===e.l&&p.index===e.index-1);if(!previous||previous.fields.every(f=>f.mastered))e.opened=true;const available=opened[e.l]&&e.opened;e.card.classList.toggle('locked-exercise',!available);for(const f of e.fields){f.input.disabled=!available;f.button.disabled=!available;if(f.review)f.review.disabled=!available;}});
  const pct=Math.round(counts[0].done/counts[0].all*100),bonus=fields.filter(f=>f.training&&f.l>0&&f.q.type!=='manual'&&f.mastered).reduce((s,f)=>s+(f.l===1?10:15),0);
  $('capProgressTxt').textContent=pct+'%';$('bonusScoreTxt').textContent='+'+bonus+' pts';$('att-cap').textContent=pct+'%';$('att-bonus').textContent='+'+bonus+' pts';$('att-status').textContent=pct===100?'Socle de cette séance terminé. Les réponses rédigées auto-vérifiées restent à relire avec la formatrice.':'Socle en cours. Ce bilan ne valide pas encore la réussite du socle.';$('print-bilan').disabled=pct<100;
  const total=counts.reduce((s,c)=>s+c.all,0),done=counts.reduce((s,c)=>s+c.done,0),global=Math.round(done/total*100);$('globalProgressBar').style.width=global+'%';$('global-progress').setAttribute('aria-valuenow',String(global));
  const score=fields.filter(f=>f.evaluation&&f.q.type!=='manual'&&f.valid).reduce((s,f)=>s+f.q.points,0);$('evaluation-score').textContent='Contrôle automatique : '+fmt(score)+' / 7,5 points. Conclusion rédigée : 0,5 point à apprécier par le formateur. Total : /8 points.';$('att-score').textContent=fmt(score)+' / 7,5';
 }
 $('learner-name').addEventListener('input',e=>$('att-learner').textContent=e.target.value.trim()||'APPRENANT(E) EN FORMATION');$('print-bilan').addEventListener('click',()=>window.print());$('att-date').textContent=new Intl.DateTimeFormat('fr-FR',{timeZone:'Indian/Reunion',dateStyle:'long'}).format(new Date());
 D.notes.forEach(text=>{const li=document.createElement('li');li.textContent=text;$('teacher-notes').append(li);});progress();

 window.MetalLesson={number,correct,fields,exercises,opened,progress};
})();
