/* Optional accounts and the public AMAN community. No private content is cached. */
(() => {
  const words={
    community:['المجتمع','Communauté','Community'], account:['حسابي','Mon compte','My account'],
    intro:['مساحة للمعلومة والمساندة','Un espace pour informer et soutenir','A place to inform and support'],
    description:['مقالات وصور ومبادرات من الأفراد والمحامين والمؤسسات. القراءة متاحة للجميع، والتسجيل اختياري للنشر والتفاعل.','Articles, photos et initiatives de particuliers, avocats et organismes. Lecture libre ; compte facultatif pour publier et interagir.','Articles, photos and initiatives from individuals, lawyers and organizations. Everyone can read; an optional account lets you publish and interact.'],
    optional:['الحساب اختياري. تقدر تستعمل الإرشادات والطوارئ والمساعد بلا تسجيل.','Le compte est facultatif. Guides, urgences et assistant restent accessibles sans inscription.','Accounts are optional. Guides, emergency help and the assistant are available without signing up.'],
    loading:['جارٍ التحميل…','Chargement…','Loading…'], retry:['عاود المحاولة','Réessayer','Try again'],
    unavailable:['تعذّر الاتصال. تحقق من الإنترنت وعاود المحاولة.','Connexion impossible. Vérifiez votre connexion et réessayez.','Could not connect. Check your connection and try again.'],
    signup:['إنشاء حساب','Créer un compte','Create account'], login:['تسجيل الدخول','Se connecter','Sign in'], logout:['تسجيل الخروج','Se déconnecter','Sign out'],
    email:['البريد الإلكتروني (ما كيبانش للعموم)','E-mail (non public)','Email (not shown publicly)'],password:['كلمة المرور','Mot de passe','Password'],name:['الاسم اللي يبان للعموم','Nom public','Public display name'],
    recovery:['نسيت كلمة المرور','Mot de passe oublié','Forgot password'], recoverySent:['إذا كان البريد مسجلاً، غادي توصلك تعليمات الاسترجاع.','Si cette adresse est inscrite, les instructions vont être envoyées.','If this email is registered, recovery instructions will be sent.'],
    confirm:['راجع بريدك الإلكتروني لتأكيد الحساب قبل تسجيل الدخول.','Consultez votre e-mail pour confirmer votre compte avant connexion.','Check your email to confirm your account before signing in.'],
    saved:['تم الحفظ.','Enregistré.','Saved.'], authFailed:['تعذّرت العملية. تأكد من المعلومات أو صلاحية الرابط وحاول مجدداً.','Opération impossible. Vérifiez vos informations ou la validité du lien.','Could not complete this action. Check your details or the validity of the link.'],
    rate:['وصلتي للحد المؤقت. عاود المحاولة من بعد.','Limite temporaire atteinte. Réessayez plus tard.','Temporary limit reached. Try again later.'],
    public:['جميع المنشورات','Toutes les publications','All posts'], mine:['منشوراتي','Mes publications','My posts'],
    write:['شارك معلومة مفيدة','Partager une information utile','Share something helpful'], title:['عنوان المنشور','Titre','Post title'],body:['المقال أو المنشور','Texte de la publication','Article or post'],
    image:['صورة اختيارية — JPG / PNG / WebP، حتى 3 MB','Photo facultative — JPG / PNG / WebP, 3 Mo max.','Optional image — JPG / PNG / WebP, up to 3 MB'],alt:['وصف الصورة (ضروري مع الصورة)','Description de la photo (obligatoire avec une photo)','Image description (required with an image)'],
    consent:['فهمت أن المنشور علني، وعندي الحق نشارك المحتوى وموافقة الأشخاص الظاهرين فيه.','Je comprends que la publication est publique et dispose des droits et du consentement des personnes représentées.','I understand this post is public and have the rights and consent of the people shown.'],
    publish:['فحص ونشر','Vérifier et publier','Check and publish'], screening:['جارٍ فحص النص والصورة…','Vérification du texte et de la photo…','Checking text and image…'],
    policy:['كل منشور كيدوز فحص آلي للنص والصورة قبل النشر. المشكوك فيه كيراجعو المشرفون. AI يقدر يخطئ؛ زر التبليغ متاح. ما تشاركش معطيات شخصية حساسة أو صور ضحايا بلا موافقة.','Chaque texte et photo est vérifié avant publication. Les cas incertains sont examinés par la modération. L’IA peut se tromper ; utilisez le signalement. Ne partagez pas de données sensibles ou de photos de victimes sans consentement.','Text and images are screened before publication. Uncertain cases go to moderators. AI can make mistakes; reporting is available. Do not share sensitive personal data or images of victims without consent.'],
    published:['منشور','Publié','Published'],pending:['في انتظار مراجعة الإدارة','En attente de modération','Awaiting moderator review'],rejected:['لم تتم الموافقة على النشر','Publication non approuvée','Not approved for publication'],
    posted:['تلقى التطبيق منشورك. الحالة: ','Publication reçue. Statut : ','Your post was received. Status: '],
    empty:['ما كاين حتى منشور هنا دابا.','Aucune publication pour le moment.','No posts here yet.'],
    like:['إعجاب','J’aime','Like'],unlike:['إلغاء الإعجاب','Retirer mon J’aime','Unlike'],report:['تبليغ','Signaler','Report'],remove:['حذف المنشور','Supprimer','Delete post'],
    deleteConfirm:['نعم، حذف نهائي','Oui, supprimer','Yes, delete'],cancel:['إلغاء','Annuler','Cancel'],reportReason:['سبب التبليغ (5 حروف على الأقل)','Motif du signalement (5 caractères minimum)','Reason for reporting (at least 5 characters)'],send:['إرسال','Envoyer','Send'],reported:['توصلت الإدارة بالتبليغ.','Signalement transmis à la modération.','Report sent to moderators.'],
    more:['منشورات أخرى','Charger la suite','Load more'],previous:['الصفحة السابقة','Page précédente','Previous page'],
    profile:['الملف العمومي','Profil public','Public profile'],person:['شخص','Particulier','Individual'],lawyer:['محامٍ / محامية','Avocat·e','Lawyer'],organization:['مؤسسة / جمعية','Organisme / association','Organization'],kind:['نوع الحساب المصرّح به','Type de compte déclaré','Self-declared account type'],
    verified:['الصفة المهنية موثّقة من الإدارة','Statut professionnel vérifié par la modération','Professional status verified by moderators'],unverified:['الصفة مصرّح بها وغير موثّقة','Statut déclaré, non vérifié','Self-declared, not verified'],
    verify:['طلب التوثيق المهني','Demander la vérification','Request professional verification'],reference:['رابط HTTPS للدليل المهني الرسمي أو موقع المؤسسة','Lien HTTPS vers un annuaire professionnel officiel ou le site de l’organisme','HTTPS link to an official professional directory or organization website'],
    verifyInfo:['الإدارة كتراجع الصفة المهنية يدوياً. الشارة ماشي ضمان للخدمات أو للنصيحة القانونية. تعديل الاسم أو نوع الحساب كيلغي التوثيق وكيحتاج مراجعة جديدة. ما ترفعش بطاقة التعريف.','La modération vérifie manuellement le statut professionnel. Le badge ne garantit pas les services ou conseils. Modifier le nom ou le type de compte annule la vérification. Ne transmettez pas de pièce d’identité.','Moderators manually review professional status. A badge does not guarantee services or advice. Changing your name or account type clears verification. Do not upload identity documents.'],
    none:['ما كاينش طلب توثيق','Aucune demande de vérification','No verification request'],approved:['تم التوثيق','Vérifié','Verified'],
    save:['حفظ الملف','Enregistrer le profil','Save profile'],admin:['إدارة المجتمع','Modération','Community moderation'],
    adminIntro:['صلاحيات الإدارة كتتعطى من إعدادات الحسابات، وما كتجيش مع التسجيل العادي. راجع المصدر والهوية المهنية قبل منح الشارة.','Les droits de modération sont attribués dans la gestion des comptes, jamais à l’inscription. Vérifiez les références professionnelles avant d’accorder un badge.','Moderator permissions are assigned in account administration, never at signup. Check professional references before granting a badge.'],
    requests:['طلبات التوثيق','Demandes de vérification','Verification requests'],flags:['التبليغات','Signalements','Reports'],review:['منشورات للمراجعة','Publications à examiner','Posts awaiting review'],approve:['موافقة','Approuver','Approve'],reject:['رفض / إخفاء','Refuser / masquer','Reject / hide'],note:['سبب القرار (ضروري)','Motif de la décision (obligatoire)','Decision reason (required)'],viewRef:['فتح المرجع المهني','Ouvrir la référence professionnelle','Open professional reference'],
    newPassword:['كلمة مرور جديدة (10 أحرف على الأقل)','Nouveau mot de passe (10 caractères minimum)','New password (at least 10 characters)'],reset:['تعيين كلمة المرور','Définir le mot de passe','Set password'],
    file:['الحسابات والنشر كيحتاجو الموقع المتصل بالإنترنت.','Les comptes et publications nécessitent le site en ligne.','Accounts and posting require the online website.'],online:['فتح AMAN على الإنترنت','Ouvrir AMAN en ligne','Open AMAN online'],
    imageError:['الصورة غير صالحة. اختار JPG أو PNG أو WebP حتى 3 MB، بوصف واضح.','Photo invalide. Choisissez JPG, PNG ou WebP, 3 Mo max., avec une description.','Invalid image. Choose JPG, PNG or WebP up to 3 MB, with a description.'],
    profileReview:['الاسم ما دازش الفحص الآلي أو تعذّر الفحص. جرّب اسماً واضحاً أو عاود لاحقاً.','Nom non accepté ou vérification indisponible. Utilisez un nom clair ou réessayez plus tard.','Name was not accepted or screening is unavailable. Use a clear name or try later.'],
    directoryEmpty:['ما كايناش مؤسسات موثّقة مطابقة دابا.','Aucun organisme vérifié correspondant.','No matching verified organizations yet.'],
  };
  Object.assign(words,{
    browse:['تصفّح المنشورات','Explorer les publications','Browse posts'],create:['كتابة منشور','Écrire une publication','Write a post'],
    voiceTitle:['تعبيرك عندو بلاصتو هنا','Votre expression a sa place ici','Your expression belongs here'],
    voiceIntro:['بالكتابة أو بلغة الإشارة، شارك الفكرة ديالك بالطريقة اللي مريحة ليك.','Par écrit ou en langue des signes, exprimez-vous à votre rythme.','With writing or sign language, share your thoughts at your own pace.'],
    search:['قلب فالمجتمع','Rechercher dans la communauté','Search the community'],searchGo:['بحث','Rechercher','Search'],category:['الموضوع','Sujet','Topic'],
    general:['عام','Général','General'],awareness:['توعية','Sensibilisation','Awareness'],legal:['أسئلة قانونية','Questions juridiques','Legal questions'],testimony:['تجارب وشهادات','Témoignages','Experiences'],initiative:['مبادرات','Initiatives','Initiatives'],resources:['موارد مفيدة','Ressources','Resources'],allTopics:['جميع المواضيع','Tous les sujets','All topics'],
    aiTitle:['مساعد التعبير AI','Assistant d’expression IA','AI expression assistant'],aiIntro:['كتب كلمات بسيطة أو اختار رسالة، ونعاونوك تصيغها. تقدر حتى تستعمل فيديو بلغة الإشارة.','Écrivez quelques mots, choisissez un message ou utilisez une courte vidéo en langue des signes.','Write a few words, choose a message, or use a short sign-language video.'],
    writingMode:['كلمات ورسائل','Mots et messages','Words and messages'],signMode:['لغة الإشارة · تجريبي','Langue des signes · expérimental','Sign language · experimental'],
    keywords:['شنو بغيتي تعبّر عليه؟','Que souhaitez-vous exprimer ?','What would you like to express?'],
    helpPhrase:['بغيت نطلب المساعدة','Je souhaite demander de l’aide','I would like to ask for help'],rightsPhrase:['بغيت نفهم حقوقي','Je souhaite comprendre mes droits','I want to understand my rights'],experiencePhrase:['بغيت نشارك تجربتي','Je souhaite partager mon expérience','I would like to share my experience'],
    outLanguage:['لغة النص المقترح','Langue du texte proposé','Draft language'],darija:['الدارجة','Darija','Darija'],ar:['العربية','Arabe','Arabic'],fr:['الفرنسية','Français','French'],en:['الإنجليزية','Anglais','English'],
    signLanguage:['لغة الإشارة المستعملة (مثلاً: المغربية، LSF، ASL)','Langue des signes utilisée (ex. : marocaine, LSF, ASL)','Sign language used (e.g. Moroccan, LSF, ASL)'],
    signVideo:['فيديو قصير: MP4 / WebM / MOV، حتى 3 MB و20 ثانية','Vidéo : MP4 / WebM / MOV, 3 Mo et 20 secondes maximum','Short video: MP4 / WebM / MOV, up to 3 MB and 20 seconds'],
    signNote:['هاد الميزة تجريبية وماشي مترجم معتمد. ممكن ما تفهمش الإشارات، خصوصاً اللغات المحلية. إلا ما فهماتش، ما كتقترحش ترجمة.','Cette aide expérimentale ne remplace pas un interprète. Certaines langues, notamment locales, peuvent ne pas être comprises.','This experimental aid does not replace an interpreter. Some sign languages, especially local ones, may not be understood.'],
    aiConsent:['موافق نصيفط الكلمات أو الفيديو لخدمة AI باش تقترح نص. الفيديو ما كيتحفظش فالمجتمع وما كيتنشرش.','J’accepte l’envoi du texte ou de la vidéo au service IA pour proposer un texte. La vidéo n’est ni stockée dans la communauté ni publiée.','I agree to send my words or video to the AI service for a draft. The video is not stored in the community or published.'],
    suggest:['اقترح عليّ نص','Proposer un texte','Suggest a draft'],reviewDraft:['اقتراح للمراجعة — تأكد أنه كيعبّر عليك قبل استعماله','Texte à vérifier : assurez-vous qu’il exprime votre intention','Review this draft and check that it expresses your intent'],
    useDraft:['استعمل فمسودة المنشور','Utiliser dans mon brouillon','Use in my draft'],draftReady:['تم نقل الاقتراح للمسودة. راجع العنوان والنص قبل النشر.','Suggestion transférée. Vérifiez le titre et le texte avant publication.','Draft inserted. Review the title and text before publishing.'],
    videoError:['الفيديو غير صالح أو كبير أو أطول من 20 ثانية. اختار فيديو قصير بصيغة مدعومة.','Vidéo invalide, trop lourde ou supérieure à 20 secondes.','Invalid video, too large, or longer than 20 seconds. Choose a supported short video.'],
    preview:['معاينة قبل النشر','Aperçu avant publication','Preview before publishing'],draftHint:['المسودة كتبقى غير فهاد الصفحة. ما كتتنشر حتى تراجعها وتضغط على النشر.','Le brouillon reste sur cette page jusqu’à votre validation et publication.','Your draft stays on this page until you review and publish it.'],
    comments:['التعليقات','Commentaires','Comments'],commentText:['كتب تعليق باحترام','Écrivez un commentaire respectueux','Write a respectful comment'],commentSent:['توصلنا بالتعليق. الحالة: ','Commentaire reçu. Statut : ','Comment received. Status: '],
    share:['نسخ رابط المنشور','Copier le lien','Copy post link'],copied:['تنسخ الرابط','Lien copié','Link copied'],clear:['مسح البحث','Effacer la recherche','Clear search'],
  });
  Object.assign(words,{
    aiRead:['مساعد القراءة AI','Aide à la lecture IA','AI reading help'],aiSummary:['لخّص','Résumer','Summarise'],aiSimple:['بسّط','Simplifier','Simplify'],aiExplain:['شرح','Expliquer','Explain'],aiTranslate:['ترجم','Traduire','Translate'],
    aiListen:['اسمع','Écouter','Listen'],aiStop:['وقف','Arrêter','Stop'],aiNotice:['نص مولّد بالذكاء الاصطناعي، يمكن يكون فيه غلط. المنشور الأصلي هو المرجع.','Texte généré par IA, il peut contenir des erreurs. La publication originale fait foi.','AI-generated text may contain mistakes. The original post is the reference.'],
    aiWrite:['مساعد الكتابة AI','Aide à la rédaction IA','AI writing help'],aiCorrect:['صحّح الأخطاء','Corriger','Fix mistakes'],aiClarify:['وضّح النص','Clarifier','Make clearer'],aiTitle:['اقترح عنوان','Proposer un titre','Suggest a title'],
    aiApply:['استعمل هاد الاقتراح','Utiliser cette suggestion','Use this suggestion'],aiDiscard:['تجاهل','Ignorer','Discard'],aiNeedText:['كتب النص أولاً','Écrivez d’abord le texte','Write the text first'],aiWriteHint:['الاقتراح ما كيتبدلش فالمنشور حتى تضغط على "استعمل". النص كيتصيفط لخدمة AI.','La suggestion ne remplace votre texte que si vous cliquez sur « Utiliser ». Le texte est envoyé au service IA.','A suggestion only replaces your text if you choose “Use”. The text is sent to the AI service.'],
  });
  const aiLang=()=>['darija','fr','en'][L]||'darija';
  function speak(text,button){
    if(!('speechSynthesis' in window))return;
    if(speechSynthesis.speaking){speechSynthesis.cancel();button.textContent=tr('aiListen');return;}
    const u=new SpeechSynthesisUtterance(text);u.lang=['ar-MA','fr-FR','en-GB'][L]||'ar-MA';
    u.onend=u.onerror=()=>{button.textContent=tr('aiListen');};
    button.textContent=tr('aiStop');speechSynthesis.speak(u);
  }
  addEventListener('hashchange',()=>{if('speechSynthesis' in window)speechSynthesis.cancel();});
  function readingTools(p){
    return `<details class="community-ai-read"><summary>${tr('aiRead')}</summary><div class="community-ai-tools">${['summary','simple','explain'].map(m=>`<button type="button" class="community-action" data-read="${m}">${tr({summary:'aiSummary',simple:'aiSimple',explain:'aiExplain'}[m])}</button>`).join('')}<span class="community-ai-translate"><select aria-label="${tr('aiTranslate')}" data-read-lang>${[['darija','الدارجة'],['ar','العربية'],['fr','Français'],['en','English']].map(([v,n])=>`<option value="${v}"${v===aiLang()?' selected':''}>${n}</option>`).join('')}</select><button type="button" class="community-action" data-read="translate">${tr('aiTranslate')}</button></span>${'speechSynthesis' in window?`<button type="button" class="community-action" data-listen>${tr('aiListen')}</button>`:''}</div><div class="community-ai-out" data-read-out aria-live="polite"></div></details>`;
  }
  function bindReading(host){
    const cache=new Map();
    host.querySelectorAll('.community-ai-read').forEach(box=>{
      const article=box.closest('article'),id=article.dataset.post,out=box.querySelector('[data-read-out]');
      box.querySelector('[data-listen]')?.addEventListener('click',e=>{const shown=out.querySelector('p');speak(shown?shown.textContent:(article.querySelector('h3')?.textContent||'')+'. '+(article.querySelector('.community-body')?.textContent||''),e.currentTarget);});
      box.querySelectorAll('[data-read]').forEach(b=>b.onclick=async()=>{
        const mode=b.dataset.read,lang=mode==='translate'?box.querySelector('[data-read-lang]').value:aiLang(),key=id+mode+lang;
        box.querySelectorAll('[data-read]').forEach(x=>x.disabled=true);out.innerHTML=loading();
        try{
          if(!cache.has(key))cache.set(key,(await send('read',{id,mode,lang})).text);
          out.innerHTML=`<p class="community-body" dir="auto">${safe(cache.get(key))}</p><small class="community-muted">${tr('aiNotice')}</small>`;
        }catch(error){out.innerHTML=`<p role="alert">${safe(errorText(error))}</p>`;}
        finally{box.querySelectorAll('[data-read]').forEach(x=>x.disabled=false);}
      });
    });
  }
  function writingTools(){
    return `<div class="community-ai-write"><b>${tr('aiWrite')}</b><div class="community-ai-tools">${['correct','clarify','title'].map(m=>`<button type="button" class="community-action" data-polish="${m}">${tr({correct:'aiCorrect',clarify:'aiClarify',title:'aiTitle'}[m])}</button>`).join('')}</div><small class="community-muted">${tr('aiWriteHint')}</small><div class="community-ai-out" data-polish-out aria-live="polite"></div></div>`;
  }
  function bindWriting(form){
    const out=form.querySelector('[data-polish-out]');if(!out)return;
    form.querySelectorAll('[data-polish]').forEach(b=>b.onclick=async()=>{
      const mode=b.dataset.polish,body=form.elements.body.value.trim();
      if(body.length<(mode==='title'?5:2)){out.innerHTML=`<p role="alert">${tr('aiNeedText')}</p>`;return;}
      form.querySelectorAll('[data-polish]').forEach(x=>x.disabled=true);out.innerHTML=loading();
      try{
        const {text}=await send('polish',{mode,body,title:form.elements.title.value});
        out.innerHTML=mode==='title'?`<input dir="auto" maxlength="180" value="${safe(text)}">`:`<textarea dir="auto" rows="7" maxlength="12000">${safe(text)}</textarea>`;
        out.insertAdjacentHTML('beforeend',`<small class="community-muted">${tr('aiNotice')}</small><div class="community-ai-tools"><button type="button" class="btn d" data-apply>${tr('aiApply')}</button><button type="button" class="btn o" data-discard>${tr('aiDiscard')}</button></div>`);
        out.querySelector('[data-apply]').onclick=()=>{const v=out.querySelector('input,textarea').value.trim();if(!v)return;form.elements[mode==='title'?'title':'body'].value=v.slice(0,mode==='title'?180:12000);out.innerHTML='';status(form,tr('draftReady'));form.elements[mode==='title'?'title':'body'].focus();};
        out.querySelector('[data-discard]').onclick=()=>{out.innerHTML='';};
      }catch(error){out.innerHTML=`<p role="alert">${safe(errorText(error))}</p>`;}
      finally{form.querySelectorAll('[data-polish]').forEach(x=>x.disabled=false);}
    });
  }
  const categories=['general','awareness','legal','testimony','initiative','resources'];
  let query='',filter='',singlePost='';
  const tr=key=>(words[key]||words.unavailable)[L];
  const safe=value=>String(value??'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
  let session=null,page=0,tab='public',callback=null,notice='';
  let renderId=0;
  async function api(action,options={}){
    // Reads get a time limit and one retry, so a brief network or server hiccup does not show an error page.
    const read=!options.method||options.method==='GET';
    let response;
    for(let attempt=0;;attempt++){
      const ctl=new AbortController();const timer=setTimeout(()=>ctl.abort(),read?15000:60000);
      try{response=await fetch('/api/community/'+action,{credentials:'same-origin',cache:'no-store',signal:ctl.signal,...options});}
      catch(error){response=null;if(!read||attempt)throw Error('unavailable');}
      finally{clearTimeout(timer);}
      if(response&&!(read&&response.status>=500&&!attempt))break;
      await new Promise(ok=>setTimeout(ok,800));
    }
    let data;try{data=await response.json();}catch{throw Error('unavailable');}
    if(!response.ok)throw Error(data.error||'unavailable');return data;
  }
  const send=(action,data)=>api(action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  const errorText=error=>error.message==='rate_limited'?tr('rate'):['auth_failed','invalid_input'].includes(error.message)?tr('authFailed'):['invalid_image','image_alt_required','too_large'].includes(error.message)?tr('imageError'):error.message==='profile_review'?tr('profileReview'):tr('unavailable');
  const loading=()=>`<div class="community-loading" role="status">${tr('loading')}<span></span><span></span></div>`;
  const status=(host,text)=>{const node=host.querySelector('[data-status]');if(node)node.textContent=text;};
  function localOnly(){return location.protocol==='file:';}
  const online=()=>`<section class="card"><h2>${tr('community')}</h2><p>${tr('file')}</p><a class="btn d" href="#community">${tr('online')}</a></section>`;
  function badge(p){return p.verified?`<span class="community-verified" title="${tr('verified')}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>${tr('approved')}</span>`:p.kind!=='person'?`<span class="community-muted">${tr('unverified')}</span>`:'';}
  function nav(){
    const dn=document.getElementById('dn');
    if(dn&&!dn.querySelector('a[href="#community"]')){const a=document.createElement('a');a.dataset.communityNav='';a.href='#community';a.textContent=tr('community');a.className=route()==='community'?'on':'';dn.insertBefore(a,dn.querySelector('.nav-more'));}
    const drawer=document.getElementById('dl');
    if(drawer&&!drawer.querySelector('a[href="#community"]')){const a=document.createElement('a');a.dataset.communityNav='';a.href='#community';a.textContent=tr('community');a.onclick=()=>drw(0);drawer.prepend(a);}
    const account=document.getElementById('hd-acc');if(account){account.title=tr('account');account.setAttribute('aria-label',tr('account'));}
  }
  T.priv=["الخصوصية: الحساب اختياري. المنشورات والاسم العمومي والصور المنشورة كتبان للجميع؛ البريد ما كيبانش للعموم. النصوص والصور كتدوز لخدمة AI للفحص، والتبليغات وطلبات التوثيق كيراجعوها المشرفون. كنستعملو ملفات تعريف الارتباط لتسجيل الدخول.","Confidentialité : compte facultatif. Publications, nom public et photos publiées sont visibles par tous ; l’e-mail reste privé. Textes et photos sont transmis au service d’IA pour vérification. Signalements et demandes de vérification sont examinés par la modération. Des cookies servent à la connexion.","Privacy: accounts are optional. Published posts, display names and images are public; email addresses are private. Text and images are sent to the AI screening service. Reports and verification requests are reviewed by moderators. Cookies support sign-in."];
  T.priv=T.priv.map((text,i)=>text+' '+["مساعد التعبير كيرسل الكلمات أو فيديو الإشارة لخدمة AI بموافقتك. الفيديو ما كيتحفظش فالمجتمع وما كيتنشرش؛ غير النص اللي راجعتيه تقدر تنشرو.","L’assistant transmet vos mots ou votre vidéo signée au service IA avec votre accord. La vidéo n’est ni stockée dans la communauté ni publiée ; seul le texte que vous validez peut être publié.","With your consent, the expression assistant sends your words or signing video to the AI service. The video is not stored in the community or published; only text you review can be published."][i]);
  T.community=words.community;
  T.publish=words.create;
  NAV.splice(2,0,'community');
  const oldChrome=chrome;chrome=function(){oldChrome();nav();};
  P.community=()=>{setTimeout(renderCommunity,0);return loading();};
  P.publish=()=>{setTimeout(renderPublish,0);return loading();};
  P.admin=()=>{setTimeout(renderAdmin,0);return loading();};
  async function getSession(){session=await api('session');return session;}
  function failure(host,retry){host.innerHTML=`<div class="card"><p role="alert">${tr('unavailable')}</p><button class="btn d">${tr('retry')}</button></div>`;host.querySelector('button').onclick=retry;}
  function renderPost(p,isMine=false,adminView=false){
    const author=p.authorName||session?.profile?.name||'';
    return `<article class="community-post" data-post="${safe(p.id)}"><div class="community-author"><span class="community-avatar" aria-hidden="true">${safe((author||'A').slice(0,1))}</span><div><b>${safe(author)}</b> ${badge(p)}<div class="community-muted">${tr(p.kind||session?.profile?.kind||'person')} · <time>${safe(new Date(p.createdAt).toLocaleDateString(['ar-MA','fr-MA','en-GB'][L]))}</time></div></div></div>${isMine?`<p class="tag">${tr(p.status)}</p>`:''}<span class="community-topic">${tr(p.category||'general')}</span><h3>${safe(p.title)}</h3><p class="community-body">${safe(p.body)}</p>${p.image||p.imageKey?`<img class="community-photo" src="/api/community/image?id=${safe(p.id)}" alt="${safe(p.imageAlt)}" loading="lazy">`:''}${isMine&&p.status!=='published'?`<p class="community-muted">${safe(p.moderationReason)}</p>`:''}${!adminView?`<div class="community-actions">${!isMine?`<button class="community-action" data-comments="${safe(p.id)}">${tr('comments')} · ${Number(p.comments)||0}</button><button class="community-action" data-share="${safe(p.id)}">${tr('share')}</button><button class="community-action" data-like="${safe(p.id)}" data-liked="${!!p.liked}" aria-pressed="${!!p.liked}">${tr(p.liked?'unlike':'like')} · ${Number(p.likes)||0}</button><button class="community-action" data-report="${safe(p.id)}">${tr('report')}</button>`:''}${isMine||session?.user?.id===p.authorId?`<button class="community-action" data-delete="${safe(p.id)}">${tr('remove')}</button>`:''}</div>${!adminView&&!isMine?readingTools(p):''}<div data-inline></div><div data-thread hidden></div>`:''}</article>`;
  }
  function composer(){return `<section class="community-compose card"><h2>${tr('write')}</h2><p class="community-muted">${tr('draftHint')}</p><form id="community-compose"><label for="post-category">${tr('category')}</label><select id="post-category" name="category">${categories.map(c=>`<option value="${c}">${tr(c)}</option>`).join('')}</select><label for="post-title">${tr('title')}</label><input id="post-title" name="title" required minlength="2" maxlength="180"><label for="post-body">${tr('body')}</label><textarea id="post-body" name="body" required maxlength="12000" rows="5"></textarea>${writingTools()}<label for="post-image">${tr('image')}</label><input id="post-image" name="image" type="file" accept="image/jpeg,image/png,image/webp"><label for="post-alt">${tr('alt')}</label><input id="post-alt" name="imageAlt" maxlength="240"><label class="community-consent"><input type="checkbox" required> <span>${tr('consent')}</span></label><button class="btn o" type="button" data-preview>${tr('preview')}</button> <button class="btn d" type="submit">${tr('publish')}</button><div data-preview-box hidden></div><p data-status role="status" aria-live="polite"></p></form></section>`;}
  async function renderCommunity(){
    if(route()!=='community')return;
    singlePost=new URLSearchParams(location.search).get('communityPost')||'';
    const host=document.getElementById('m'),id=++renderId;
    if(localOnly()){host.innerHTML=online();return;}
    host.innerHTML=loading();
    try{
      try{await getSession();}catch{session={user:null,profile:null,admin:false};}
      let feed=null;try{feed=await api(tab==='mine'&&session.user?'mine':'feed?'+new URLSearchParams({page:String(page),q:query,category:filter,...(singlePost?{post:singlePost}:{})}));}catch{feed=null;}
      if(id!==renderId||route()!=='community')return;
      if(!session.user)tab='public';
      if(feed&&tab==='mine'){const q=query.trim().toLocaleLowerCase();feed.posts=feed.posts.filter(p=>(!filter||p.category===filter)&&(!q||(p.title+' '+p.body).toLocaleLowerCase().includes(q)));}
      host.innerHTML=`<section class="community-hero"><span class="community-eyebrow">AMAN / ${tr('community')}</span><h1>${tr('voiceTitle')}</h1><p>${tr('voiceIntro')}</p><nav class="community-route-nav" aria-label="${tr('community')}"><a class="btn o" href="#community" aria-current="page">${tr('browse')}</a><a class="btn d" href="#publish">${tr('create')}</a></nav>${session.admin?`<a class="btn d" href="#admin">${tr('admin')}</a>`:''}${notice?`<p role="status">${safe(notice)}</p>`:''}</section><div class="community-layout"><aside><section class="community-policy card"><h2>${tr('community')}</h2><p>${tr('policy')}</p><p class="community-muted">${tr('verifyInfo')}</p></section>${session.user?`<section class="card community-invite"><span class="community-eyebrow">AMAN / AI</span><h2>${tr('aiTitle')}</h2><p>${tr('aiIntro')}</p><a class="btn d" href="#publish">${tr('create')}</a></section>`:`<section class="card"><h2>${tr('signup')}</h2><p>${tr('optional')}</p><a class="btn d" href="#account">${tr('login')} / ${tr('signup')}</a></section>`}</aside><section aria-label="${tr('community')}"><form id="community-search" class="community-search"><label for="community-query">${tr('search')}</label><div><input id="community-query" name="q" type="search" maxlength="100" value="${safe(query)}"><button class="btn d">${tr('searchGo')}</button></div><label for="community-filter">${tr('category')}</label><select name="category" id="community-filter"><option value="">${tr('allTopics')}</option>${categories.map(c=>`<option value="${c}" ${filter===c?'selected':''}>${tr(c)}</option>`).join('')}</select>${singlePost?`<button type="button" data-clear class="community-action">${tr('public')}</button>`:''}</form><div class="community-tabs"><button class="${tab==='public'?'active':''}" data-tab="public" aria-pressed="${tab==='public'}">${tr('public')}</button>${session.user?`<button class="${tab==='mine'?'active':''}" data-tab="mine" aria-pressed="${tab==='mine'}">${tr('mine')}</button>`:''}</div><div id="community-feed">${!feed?`<div class="community-empty" role="alert"><h2>${tr('unavailable')}</h2><button class="btn d" data-retry>${tr('retry')}</button></div>`:feed.posts.length?feed.posts.map(p=>renderPost(p,tab==='mine')).join(''):`<div class="community-empty"><h2>${tr('empty')}</h2><p>${tr('description')}</p></div>`}</div><div class="community-pagination">${feed&&page&&tab==='public'?`<button class="btn d" data-previous>${tr('previous')}</button>`:''}${feed?.hasMore&&tab==='public'?`<button class="btn d" data-more>${tr('more')}</button>`:''}</div></section></div>`;
      bindFeed(host);
      host.querySelector('#community-search').onsubmit=e=>{e.preventDefault();query=e.target.elements.q.value;filter=e.target.elements.category.value;page=0;renderCommunity();};
      host.querySelector('[data-clear]')?.addEventListener('click',()=>{history.replaceState(null,'',location.pathname+'#community');renderCommunity();});
      host.querySelector('[data-retry]')?.addEventListener('click',renderCommunity);
      host.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;page=0;renderCommunity();});
      host.querySelector('[data-more]')?.addEventListener('click',()=>{page++;renderCommunity();});
      host.querySelector('[data-previous]')?.addEventListener('click',()=>{page--;renderCommunity();});
      host.querySelectorAll('[data-like]').forEach(b=>b.onclick=async()=>{if(!session.user){location.hash='account';return;}b.disabled=true;try{await send('like',{id:b.dataset.like,liked:b.dataset.liked!=='true'});renderCommunity();}catch(e){inlineError(b,e);b.disabled=false;}});
      host.querySelectorAll('[data-report]').forEach(b=>b.onclick=()=>{if(!session.user){location.hash='account';return;}const box=b.closest('article').querySelector('[data-inline]');box.innerHTML=`<form class="community-report"><label>${tr('reportReason')}<textarea name="reason" minlength="5" maxlength="500" required></textarea></label><button class="btn d">${tr('send')}</button> <button type="button" data-cancel class="btn d">${tr('cancel')}</button><p data-status role="status"></p></form>`;box.querySelector('textarea').focus();box.querySelector('[data-cancel]').onclick=()=>box.replaceChildren();box.querySelector('form').onsubmit=async e=>{e.preventDefault();await formAction(e.target,()=>send('report',{id:b.dataset.report,reason:e.target.elements.reason.value}),()=>status(e.target,tr('reported')));};});
      host.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{const box=b.closest('article').querySelector('[data-inline]');box.innerHTML=`<button class="btn d" data-confirm>${tr('deleteConfirm')}</button> <button class="btn d" data-cancel>${tr('cancel')}</button><p data-status role="status"></p>`;box.querySelector('[data-cancel]').onclick=()=>box.replaceChildren();box.querySelector('[data-confirm]').onclick=async()=>{await formAction(box,()=>api('posts',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:b.dataset.delete})}),renderCommunity);};});
    }catch{if(id===renderId&&route()==='community')failure(host,renderCommunity);}
  }
  async function renderPublish(){
    if(route()!=='publish')return;
    const host=document.getElementById('m'),id=++renderId;
    if(localOnly()){host.innerHTML=online();return;}
    host.innerHTML=loading();
    try{
      await getSession();if(id!==renderId||route()!=='publish')return;
      host.innerHTML=`<section class="community-hero"><span class="community-eyebrow">AMAN / ${tr('create')}</span><h1>${tr('voiceTitle')}</h1><p>${tr('voiceIntro')}</p><nav class="community-route-nav" aria-label="${tr('community')}"><a class="btn o" href="#community">${tr('browse')}</a><a class="btn d" href="#publish" aria-current="page">${tr('create')}</a></nav></section>${!session.user?`<section class="card community-signin"><h2>${tr('login')}</h2><p>${tr('optional')}</p><a class="btn d" href="#account">${tr('login')} / ${tr('signup')}</a></section>`:`<div class="community-studio"><div>${composer()}<details class="community-guidelines card"><summary>${tr('community')}</summary><p>${tr('policy')}</p></details></div><aside class="community-assistant card"><span class="community-eyebrow">AMAN / AI</span><h2>${tr('aiTitle')}</h2><p>${tr('aiIntro')}</p><form id="expression-form"><fieldset><legend>${tr('aiTitle')}</legend><div class="community-mode"><label><input type="radio" name="mode" value="writing" checked> ${tr('writingMode')}</label><label><input type="radio" name="mode" value="sign"> ${tr('signMode')}</label></div></fieldset><div data-writing><div class="community-phrases">${['helpPhrase','rightsPhrase','experiencePhrase'].map(k=>`<button type="button" class="community-action" data-phrase="${k}">${tr(k)}</button>`).join('')}</div></div><label for="expression-text">${tr('keywords')}</label><textarea id="expression-text" name="text" maxlength="4000" rows="3" required></textarea><div data-sign hidden><p class="note">${tr('signNote')}</p><label for="sign-language">${tr('signLanguage')}</label><input id="sign-language" name="signLanguage" maxlength="100"><label for="sign-video">${tr('signVideo')}</label><input id="sign-video" name="video" type="file" accept="video/mp4,video/webm,video/quicktime"><video data-video-preview controls playsinline hidden></video></div><label for="expression-language">${tr('outLanguage')}</label><select id="expression-language" name="language">${['darija','ar','fr','en'].map(l=>`<option value="${l}" ${l===['darija','fr','en'][L]?'selected':''}>${tr(l)}</option>`).join('')}</select><label class="community-consent"><input type="checkbox" name="consent" required> <span>${tr('aiConsent')}</span></label><button class="btn d" type="submit">${tr('suggest')}</button><p data-status role="status" aria-live="polite"></p></form><section data-suggestion hidden aria-label="${tr('reviewDraft')}"></section></aside></div>`}`;
      const form=host.querySelector('#community-compose');if(!form)return;
      bindWriting(form);
      form.elements.image.onchange=()=>{form.elements.imageAlt.required=!!form.elements.image.files.length;};
      form.querySelector('[data-preview]').onclick=()=>{
        const box=form.querySelector('[data-preview-box]');box.hidden=false;
        box.innerHTML=`<article class="community-post"><span class="community-topic">${tr(form.elements.category.value)}</span><h3>${safe(form.elements.title.value)}</h3><p class="community-body">${safe(form.elements.body.value)}</p></article>`;
        box.scrollIntoView({behavior:'auto',block:'nearest'});
      };
      form.onsubmit=e=>{e.preventDefault();const file=form.elements.image.files[0];if(file&&(file.size>3*1024*1024||!['image/jpeg','image/png','image/webp'].includes(file.type))){status(form,tr('imageError'));return;}formAction(form,()=>api('posts',{method:'POST',body:new FormData(form)}),data=>{notice=tr('posted')+tr(data.status);tab='mine';page=0;location.hash='community';},tr('screening'));};
      const ai=host.querySelector('#expression-form'),result=host.querySelector('[data-suggestion]'),video=ai.querySelector('video');
      let videoURL='',validVideo=false;
      const release=()=>{if(videoURL){URL.revokeObjectURL(videoURL);videoURL='';}};
      addEventListener('hashchange',()=>{video.pause();video.removeAttribute('src');video.load();release();},{once:true});
      ai.querySelectorAll('[name=mode]').forEach(r=>r.onchange=()=>{const sign=ai.elements.mode.value==='sign';ai.querySelector('[data-sign]').hidden=!sign;ai.querySelector('[data-writing]').hidden=sign;ai.elements.text.required=!sign;ai.elements.signLanguage.required=sign;ai.elements.video.required=sign;result.hidden=true;status(ai,'');});
      ai.querySelectorAll('[data-phrase]').forEach(b=>b.onclick=()=>{ai.elements.text.value+=(ai.elements.text.value?'\n':'')+tr(b.dataset.phrase);ai.elements.text.focus();});
      ai.elements.video.onchange=()=>{
        release();validVideo=false;video.hidden=true;const file=ai.elements.video.files[0];
        if(!file)return;
        if(file.size>3*1024*1024||!['video/mp4','video/webm','video/quicktime'].includes(file.type)){status(ai,tr('videoError'));ai.elements.video.value='';return;}
        videoURL=URL.createObjectURL(file);video.src=videoURL;video.hidden=false;
        video.onloadedmetadata=()=>{validVideo=Number.isFinite(video.duration)&&video.duration>0&&video.duration<=20;status(ai,validVideo?'':tr('videoError'));};
        video.onerror=()=>{validVideo=false;status(ai,tr('videoError'));};
      };
      ai.onsubmit=e=>{
        e.preventDefault();if(ai.elements.mode.value==='sign'&&!validVideo){status(ai,tr('videoError'));return;}
        result.hidden=true;const input=new FormData(ai);if(input.get('mode')==='writing')input.delete('video');
        formAction(ai,()=>api('assist',{method:'POST',body:input}),data=>{
          result.hidden=false;
          result.innerHTML=`<h3>${tr('reviewDraft')}</h3><p role="status">${safe(data.note)}</p>${data.uncertain||!data.body?'':`<label for="suggestion-title">${tr('title')}</label><input id="suggestion-title" maxlength="180" value="${safe(data.title)}"><label for="suggestion-body">${tr('body')}</label><textarea id="suggestion-body" maxlength="12000" rows="7">${safe(data.body)}</textarea><button class="btn o" type="button" data-use>${tr('useDraft')}</button>`}`;
          status(ai,'');result.querySelector('[data-use]')?.addEventListener('click',()=>{
            const body=result.querySelector('textarea').value.trim();
            if(!body)return;
            const combined=[form.elements.body.value.trim(),body].filter(Boolean).join('\n\n');
            if(combined.length>12000){status(ai,tr('authFailed'));return;}
            if(!form.elements.title.value.trim())form.elements.title.value=result.querySelector('input').value;
            form.elements.body.value=combined;status(form,tr('draftReady'));form.elements.body.focus();result.hidden=true;
          });
        });
      };
    }catch{if(id===renderId&&route()==='publish')failure(host,renderPublish);}
  }
  function bindFeed(host){
    bindReading(host);
    host.querySelectorAll('[data-share]').forEach(b=>b.onclick=async()=>{
      const url=new URL(location.href);url.searchParams.set('communityPost',b.dataset.share);url.hash='community';
      try{await navigator.clipboard.writeText(url.href);b.textContent=tr('copied');}catch{const box=b.closest('article').querySelector('[data-inline]');box.innerHTML=`<label>${tr('share')}<input readonly value="${safe(url.href)}"></label>`;box.querySelector('input').select();}
    });
    host.querySelectorAll('[data-comments]').forEach(b=>b.onclick=async()=>{
      const thread=b.closest('article').querySelector('[data-thread]');thread.hidden=!thread.hidden;b.setAttribute('aria-expanded',String(!thread.hidden));if(thread.hidden)return;
      thread.innerHTML=loading();
      try{
        const data=await api('comments?post='+encodeURIComponent(b.dataset.comments));if(!thread.isConnected)return;
        thread.innerHTML=`<h4>${tr('comments')}</h4>${data.comments.length?data.comments.map(c=>`<div class="community-comment ${c.parentId?'community-reply':''}"><b>${safe(c.authorName)}</b><p class="community-body">${safe(c.body)}</p>${c.status!=='published'?`<small>${tr(c.status)}</small>`:''}</div>`).join(''):`<p class="community-muted">${tr('empty')}</p>`}${session.user?`<form class="community-comment-form"><label>${tr('commentText')}<textarea name="body" required maxlength="2000" rows="3"></textarea></label><button class="btn d">${tr('send')}</button><p data-status role="status"></p></form>`:`<a href="#account">${tr('login')}</a>`}`;
        const form=thread.querySelector('form');if(form)form.onsubmit=e=>{e.preventDefault();formAction(form,()=>send('comments',{post:b.dataset.comments,body:form.elements.body.value}),data=>{form.reset();status(form,tr('commentSent')+tr(data.status));});};
      }catch{failure(thread,()=>{thread.hidden=true;b.click();});}
    });
  }
  function inlineError(button,error){const node=button.closest('article').querySelector('[data-inline]');node.textContent=errorText(error);node.setAttribute('role','alert');}
  async function formAction(form,action,success,busy=tr('loading')){
    const buttons=[...form.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);status(form,busy);
    try{const data=await action();await success(data);}catch(e){status(form,errorText(e));}finally{buttons.forEach(b=>b.disabled=false);}
  }
  async function renderAccount(){
    if(route()!=='account')return;
    const host=document.getElementById('m'),id=++renderId;
    if(localOnly()){host.innerHTML=online();return;}host.innerHTML=loading();
    try{
      await getSession();if(id!==renderId||route()!=='account')return;
      const s=session,p=s.profile;
      if(callback&&['recovery','invite'].includes(callback.type)){
        host.innerHTML=`<section class="community-account card"><h1>${tr('reset')}</h1><form id="reset-form"><label>${tr('newPassword')}<input name="password" type="password" minlength="10" maxlength="128" required autocomplete="new-password"></label><button class="btn d">${tr('reset')}</button><p role="status" data-status></p></form></section>`;
        host.querySelector('form').onsubmit=e=>{e.preventDefault();formAction(e.target,()=>send('auth',{op:callback.type==='invite'?'invite':'recover',token:callback.token,password:e.target.elements.password.value}),()=>{callback=null;location.href=location.pathname+'#account';location.reload();});};return;
      }
      host.innerHTML=`<section class="community-account"><h1>${tr('account')}</h1><p class="note">${tr('optional')}</p>${!s.user?`<div class="card"><form id="account-form"><label for="account-email">${tr('email')}</label><input id="account-email" name="email" type="email" required autocomplete="email" maxlength="254"><label for="account-password">${tr('password')}</label><input id="account-password" name="password" type="password" required maxlength="128" autocomplete="current-password"><div id="signup-name" hidden><label for="account-name">${tr('name')}</label><input id="account-name" name="name" minlength="2" maxlength="80" autocomplete="nickname"></div><div class="community-actions"><button class="btn d" type="submit">${tr('login')}</button>${s.signupOpen?`<button type="button" class="btn d" data-signup>${tr('signup')}</button>`:''}<button type="button" class="community-action" data-recovery>${tr('recovery')}</button></div><p data-status role="status" aria-live="polite"></p></form></div>`:`<div class="card"><p>${safe(s.user.email)}</p><p>${badge(p)}</p><a class="btn d" href="#community">${tr('community')}</a> <button type="button" class="btn d" data-logout>${tr('logout')}</button><p data-status role="status"></p></div><section class="card"><h2>${tr('profile')}</h2><form id="profile-form"><label>${tr('name')}<input name="name" required minlength="2" maxlength="80" value="${safe(p.name)}"></label><label>${tr('kind')}<select name="kind">${['person','lawyer','organization'].map(k=>`<option value="${k}" ${p.kind===k?'selected':''}>${tr(k)}</option>`).join('')}</select></label><p class="community-muted">${tr('verifyInfo')}</p><button class="btn d">${tr('save')}</button><p data-status role="status"></p></form></section>${p.kind!=='person'?`<section class="card"><h2>${tr('verify')}</h2><p>${tr(p.verification==='pending'?'pending':p.verification)}</p>${p.verificationNote?`<p>${safe(p.verificationNote)}</p>`:''}${!p.verified&&p.verification!=='pending'?`<form id="verification-form"><label>${tr('reference')}<input name="reference" type="url" required maxlength="500" placeholder="https://"></label><button class="btn d">${tr('verify')}</button><p data-status role="status"></p></form>`:''}</section>`:''}`}${s.admin?`<p><a class="btn d" href="#admin">${tr('admin')}</a></p>`:''}</section>`;
      const form=host.querySelector('#account-form');
      if(form){let signupMode=false;form.onsubmit=e=>{e.preventDefault();formAction(form,()=>send('auth',{op:signupMode?'signup':'login',email:form.elements.email.value,password:form.elements.password.value,name:form.elements.name.value}),data=>{if(data.confirmEmail){status(form,tr('confirm'));form.reset();}else{location.href=location.pathname+'#account';location.reload();}});};form.querySelector('[data-signup]')?.addEventListener('click',()=>{signupMode=!signupMode;form.querySelector('#signup-name').hidden=!signupMode;form.elements.name.required=signupMode;form.elements.password.minLength=signupMode?10:1;form.elements.password.autocomplete=signupMode?'new-password':'current-password';form.querySelector('[type=submit]').textContent=tr(signupMode?'signup':'login');form.querySelector('[data-signup]').textContent=tr(signupMode?'login':'signup');});form.querySelector('[data-recovery]').onclick=()=>{const input=form.elements.email;if(!input.reportValidity())return;formAction(form,()=>send('auth',{op:'recovery',email:input.value}),()=>status(form,tr('recoverySent')));};}
      host.querySelector('[data-logout]')?.addEventListener('click',e=>formAction(e.target.closest('.card'),()=>send('auth',{op:'logout'}),()=>location.reload()));
      host.querySelector('#profile-form')?.addEventListener('submit',e=>{e.preventDefault();formAction(e.target,()=>send('profile',{name:e.target.elements.name.value,kind:e.target.elements.kind.value}),renderAccount);});
      host.querySelector('#verification-form')?.addEventListener('submit',e=>{e.preventDefault();formAction(e.target,()=>send('verification',{reference:e.target.elements.reference.value}),renderAccount);});
    }catch{if(id===renderId&&route()==='account')failure(host,renderAccount);}
  }
  async function renderAdmin(){
    if(route()!=='admin')return;const host=document.getElementById('m'),id=++renderId;host.innerHTML=loading();
    try{
      await getSession();if(!session.admin){location.hash='account';return;}
      const data=await api('admin');if(id!==renderId||route()!=='admin')return;
      const controls=(type,id)=>`<form class="community-decision" data-type="${type}" data-id="${safe(id)}"><label>${tr('note')}<textarea name="note" required minlength="3" maxlength="500"></textarea></label><button class="btn d" name="decision" value="approve">${tr('approve')}</button> <button class="btn d" name="decision" value="reject">${tr('reject')}</button><p data-status role="status"></p></form>`;
      host.innerHTML=`<section class="community-hero"><h1>${tr('admin')}</h1><p>${tr('adminIntro')}</p></section><h2>${tr('requests')}</h2>${data.verification.length?data.verification.map(p=>`<section class="card"><h3>${safe(p.name)}</h3><p>${tr(p.kind)}</p><p><a href="${safe(p.professionalReference)}" target="_blank" rel="noopener noreferrer">${tr('viewRef')}</a></p>${controls('verification',p.id)}</section>`).join(''):`<p>${tr('empty')}</p>`}<h2>${tr('review')}</h2>${data.pending.length?data.pending.map(({post,author})=>renderPost({...post,authorName:author},false,true)+`<p class="community-muted">${safe(post.moderationReason)}</p>`+controls('post',post.id)).join(''):`<p>${tr('empty')}</p>`}<h2>${tr('flags')}</h2>${data.reports.length?data.reports.map(({report,post,author})=>`<section class="card"><p>${safe(report.reason)}</p>${renderPost({...post,authorName:author},false,true)}${controls('post',post.id)}</section>`).join(''):`<p>${tr('empty')}</p>`}`;
      host.insertAdjacentHTML('beforeend',`<h2>${tr('comments')} · ${tr('review')}</h2>${(data.pendingComments||[]).map(({comment,author,postTitle})=>`<section class="card"><h3>${safe(postTitle)}</h3><b>${safe(author)}</b><p class="community-body">${safe(comment.body)}</p><p>${safe(comment.moderationReason)}</p>${controls('comment',comment.id)}</section>`).join('')||`<p>${tr('empty')}</p>`}<h2>${tr('comments')} · ${tr('flags')}</h2>${(data.commentReports||[]).map(({report,comment,author,postTitle})=>`<section class="card"><h3>${safe(postTitle)}</h3><b>${safe(author)}</b><p class="community-body">${safe(comment.body)}</p><p>${safe(report.reason)}</p>${controls('comment',comment.id)}</section>`).join('')||`<p>${tr('empty')}</p>`}`);
      host.querySelectorAll('.community-decision').forEach(form=>form.onsubmit=e=>{e.preventDefault();const decision=e.submitter.value;formAction(form,()=>send('admin',{type:form.dataset.type,id:form.dataset.id,note:form.elements.note.value,decision}),renderAdmin);});
    }catch{if(route()==='admin')failure(host,renderAdmin);}
  }
  window.amanRenderAccount=renderAccount;
  window.amanDirectory=async()=>{
    const host=document.getElementById('dres');if(!host)return;host.innerHTML=loading();
    try{const data=await api('directory');if(!host.isConnected)return;const q=(document.getElementById('dq')?.value||'').toLocaleLowerCase().trim();const kind=document.getElementById('dk')?.value||'';const region=document.getElementById('dr')?.value||'';
      const rows=data.organizations.filter(p=>(!q||p.name.toLocaleLowerCase().includes(q))&&(!kind||p.kind===kind));
      host.innerHTML=rows.length?rows.map(p=>`<article class="card"><h3>${safe(p.name)}</h3>${badge(p)}<p>${tr(p.kind)}</p><a href="${safe(p.reference)}" target="_blank" rel="noopener noreferrer">${tr('viewRef')}</a></article>`).join(''):`<p>${tr('directoryEmpty')}</p>`;
    }catch{host.textContent=tr('unavailable');}
  };
  P.dir=()=>`<h1>${t('dir')}</h1><p class="note">${tr('verifyInfo')}</p><div class="bar"><input id="dq" type="search" aria-label="${t('search')}" placeholder="${t('search')}" oninput="dirList()"><select id="dk" onchange="dirList()" aria-label="${tr('kind')}"><option value="">${t('all')}</option><option value="organization">${tr('organization')}</option><option value="lawyer">${tr('lawyer')}</option></select></div><div class="grid" id="dres"></div>`;
  window.dirList=window.amanDirectory;
  window.done=async(form,node)=>{
    const parts=[...form.querySelectorAll('input:not([type=checkbox]):not(.hp),textarea,select')].filter(e=>e.value.trim()).map(e=>(e.labels?.[0]?.textContent||e.name)+': '+e.value);
    const message=parts.join('\n');node.textContent=tr('loading');
    try{await send('intake',{kind:form.id||'general',message});node.textContent=tr('saved');}catch(e){node.textContent=errorText(e);}
  };
  const params=new URLSearchParams(location.hash.slice(1));
  for(const [key,type] of [['confirmation_token','confirmation'],['recovery_token','recovery'],['invite_token','invite']]){
    if(params.has(key)){callback={type,token:params.get(key)};history.replaceState(null,'',location.pathname+location.search+'#account');break;}
  }
  nav();
  if(callback?.type==='confirmation'){
    send('auth',{op:'confirm',token:callback.token}).then(()=>{callback=null;renderAccount();}).catch(()=>{const host=document.getElementById('m');host.innerHTML=`<section class="card"><p role="alert">${tr('authFailed')}</p><a href="#account">${tr('account')}</a></section>`;});
  }else if(route()==='account')renderAccount();
  else if(route()==='community')renderCommunity();
  else if(route()==='publish')renderPublish();
  addEventListener('hashchange',()=>{renderId++;if(route()==='account')renderAccount();if(route()==='community')renderCommunity();if(route()==='admin')renderAdmin();if(route()==='publish')renderPublish();});
})();
