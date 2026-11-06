// Community and optional accounts are provided by the same-site platform API.
function amanRenderAccount(){document.getElementById('m').innerHTML='<p role="status">…</p>';}
function amanLoadDirectory(){if(typeof window.amanDirectory==='function')window.amanDirectory();}
const amanEsc=v=>String(v??'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
// --- AMAN AI ASSISTANT & SOS EMERGENCY CLIENT LAYER ---
const SVG_ICONS = {
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  ai: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  sos: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1zM7 21h10M12 3v18M3 7h18"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  volumeX: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  alertTriangle: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  menu: '<line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  siren: '<path d="M7 12a5 5 0 0 1 10 0v4H7v-4z"/><rect x="5" y="16" width="14" height="4" rx="2"/><path d="M12 2v3M4.93 4.93l2.12 2.12M19.07 4.93l-2.12 2.12"/>',
  eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/>',
  digital: '<rect width="18" height="12" x="3" y="4" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/>',
  dir: '<path d="M4 21V9l8-5 8 5v12M9 21v-5h6v5M8 12h1M12 12h1M16 12h1"/>',
  academy: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  safe: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  guide: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  impact: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  contact: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'
};

const svgIcon = (name, cls, sz) => {
  cls = cls || "ic";
  sz = sz || 18;
  const content = SVG_ICONS[name] || SVG_ICONS.home;
  return `<svg class="${cls}" width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
};

// Reply language chosen by the user ("auto" = detect from what the user says)
const AMAN_REPLY_LANGS = [
  { k: "auto", tts: "", sr: "", g: "main", l: ["تلقائي (بنفس اللهجة ديالي)", "Automatique (comme moi)", "Automatic (same as me)"] },
  { k: "darija", tts: "ar-MA", sr: "ar-MA", g: "main", l: ["الدارجة المغربية", "Darija marocaine", "Moroccan Darija"] },
  { k: "arabizi", tts: "fr-FR", ttsAlt: "ar-MA", sr: "ar-MA", g: "main", l: ["الدارجة بالحروف اللاتينية (3, 7, 9)", "Darija en lettres latines", "Darija in Latin letters"] },
  { k: "chamali", tts: "ar-MA", sr: "ar-MA", g: "main", l: ["الشمالية / الجبلية (طنجة، تطوان)", "Darija du Nord (Jebli)", "Northern Darija (Jebli)"] },
  { k: "charqi", tts: "ar-MA", sr: "ar-MA", g: "main", l: ["الشرقية (وجدة)", "Darija de l'Oriental (Oujda)", "Eastern Darija (Oujda)"] },
  { k: "aroubi", tts: "ar-MA", sr: "ar-MA", g: "main", l: ["العروبية (دكالة، عبدة، الشاوية، الغرب)", "Darija aroubi (rurale)", "Rural Aroubi Darija"] },
  { k: "hassaniya", tts: "ar-MA", sr: "ar-MA", g: "main", l: ["الحسانية (الصحراء)", "Hassaniya (Sahara)", "Hassaniya (Sahara)"] },
  { k: "tarifit", tts: "fr-FR", ttsAlt: "ar-MA", sr: "ar-MA", g: "ber", l: ["تاريفيت (الريف)", "Tarifit (Rif)", "Tarifit (Rif)"] },
  { k: "tachelhit", tts: "fr-FR", ttsAlt: "ar-MA", sr: "ar-MA", g: "ber", l: ["تشلحيت (سوس)", "Tachelhit (Souss)", "Tachelhit (Souss)"] },
  { k: "atlas", tts: "fr-FR", ttsAlt: "ar-MA", sr: "ar-MA", g: "ber", l: ["تمازيغت (الأطلس المتوسط)", "Tamazight (Moyen Atlas)", "Central Atlas Tamazight"] },
  { k: "fusha", tts: "ar-SA", sr: "ar-SA", g: "off", l: ["العربية الفصحى", "Arabe standard", "Standard Arabic"] },
  { k: "french", tts: "fr-FR", sr: "fr-FR", g: "off", l: ["Français", "Français", "French"] },
  { k: "english", tts: "en-US", sr: "en-US", g: "off", l: ["English (الإنجليزية)", "Anglais", "English"] }
];
window.amanReplyLang = (() => { try { return localStorage.getItem("aman-reply-lang") || "auto"; } catch (e) { return "auto"; } })();
const amanReplyLangObj = () => AMAN_REPLY_LANGS.find(x => x.k === window.amanReplyLang) || AMAN_REPLY_LANGS[0];
window.amanSetReplyLang = function(k) {
  window.amanReplyLang = AMAN_REPLY_LANGS.some(x => x.k === k) ? k : "auto";
  try { localStorage.setItem("aman-reply-lang", window.amanReplyLang); } catch (e) {}
  document.querySelectorAll(".reply-lang-sel").forEach(s => { s.value = window.amanReplyLang; });
  if (window.amanAnnounce) amanAnnounce(["لغة الجواب: ", "Langue de réponse : ", "Answer language: "][L] + amanReplyLangObj().l[L]);
};
function amanReplyLangSelect(id) {
  const lbl = ["لغة الجواب والقراءة", "Langue de réponse et de lecture", "Answer & reading language"][L];
  return `<label class="reply-lang" for="${id}">${svgIcon("globe", "ic", 16)}<span>${lbl}</span>
    <select id="${id}" class="reply-lang-sel" onchange="amanSetReplyLang(this.value)">
      ${AMAN_REPLY_LANGS.map(x => `<option value="${x.k}"${x.k === window.amanReplyLang ? " selected" : ""}>${x.l[L]}</option>`).join("")}
    </select></label>`;
}

// Global App State
window.amanAiHistory = [];
window.amanAiLoading = false;
window.amanActiveCategory = "all";
window.amanTtsEnabled = "speechSynthesis" in window;
window.amanSirenActive = false;
window.amanAudioCtx = null;
window.amanSirenInterval = null;

// --- SOS EMERGENCY SYSTEM ---
const SOS_TXT = {
  title: ["طوارئ النجدة والاستغاثة (SOS)", "Urgence & détresse (SOS)", "Emergency & distress (SOS)"],
  sub: ["أرقام النجدة المباشرة والمجانية بالمملكة المغربية", "Numéros d'urgence gratuits au Maroc", "Free emergency numbers in Morocco"],
  close: ["إغلاق", "Fermer", "Close"],
  tapCall: ["اضغط للاتصال المباشر", "Touchez pour appeler", "Tap to call"],
  actions: ["إجراءات الحماية الفورية", "Actions de protection immédiate", "Immediate protection actions"],
  wa: ["استغاثة عبر واتساب", "Alerte WhatsApp", "WhatsApp alert"],
  sms: ["رسالة SMS طوارئ", "SMS d'urgence", "Emergency SMS"],
  copy: ["نسخ رسالة الاستغاثة", "Copier le message", "Copy distress message"],
  copied: ["تم نسخ الرسالة مع موقعك", "Message copié avec votre position", "Message copied with your location"],
  sirenOn: ["تشغيل صفارة الإنذار الردعية", "Activer la sirène d'alerte", "Start alarm siren"],
  sirenOff: ["إيقاف صفارة الإنذار", "Arrêter la sirène", "Stop siren"],
  camo: ["التمويه السريع (شاشة وهمية)", "Camouflage rapide (faux écran)", "Quick camouflage (fake screen)"],
  trusted: ["شخص ثقة (رقم الهاتف)", "Contact de confiance (téléphone)", "Trusted contact (phone)"],
  trustedPh: ["مثال: 0612345678", "Ex : 0612345678", "e.g. 0612345678"],
  trustedSave: ["حفظ", "Enregistrer", "Save"],
  trustedSaved: ["تم حفظ الرقم على هذا الجهاز فقط", "Numéro enregistré sur cet appareil uniquement", "Number saved on this device only"],
  trustedHint: ["رسائل الاستغاثة كتمشي مباشرة لهاد الرقم. كيتسجل فجهازك فقط.", "Les alertes seront envoyées directement à ce numéro. Stocké uniquement sur votre appareil.", "Alerts go straight to this number. Stored only on your device."],
  locating: ["جاري تحديد موقعك...", "Localisation en cours...", "Getting your location..."],
  noLoc: ["تعذر تحديد الموقع، تم الإرسال بدون موقع", "Position indisponible, envoi sans position", "Location unavailable, sending without it"],
  privacy: ["أمان يحافظ على خصوصيتك وسريتك التامة دون تسجيل بياناتك الشخصية.", "AMAN protège votre vie privée : aucune donnée personnelle n'est enregistrée.", "AMAN protects your privacy: no personal data is stored."],
  msg: ["نداء استغاثة عاجل (منصة أمان): أنا في حالة خطر ومحتاج(ة) للمساعدة فوراً!", "URGENT SOS (AMAN) : Je suis en danger et j'ai besoin d'aide immédiatement !", "URGENT SOS (AMAN): I am in danger and need help immediately!"],
  myLoc: ["موقعي:", "Ma position :", "My location:"],
  fab: ["مساعد أمان الذكي", "Assistant IA", "AI Assistant"]
};
const sosT = k => (SOS_TXT[k] || [""])[L] || SOS_TXT[k][0];
const SOS_LINES = [
  { n: "19", ic: "shield", cls: "urgent", l: ["الشرطة والنجدة", "Police Secours", "Police"], d: ["المجال الحضري", "Zone urbaine", "Urban areas"] },
  { n: "177", ic: "shieldCheck", cls: "urgent", l: ["الدرك الملكي", "Gendarmerie Royale", "Royal Gendarmerie"], d: ["المجال القروي", "Zone rurale", "Rural areas"] },
  { n: "15", ic: "siren", cls: "", l: ["الوقاية المدنية", "Protection Civile", "Civil Protection"], d: ["إسعاف وحرائق", "Ambulance & incendie", "Ambulance & fire"] },
  { n: "8350", ic: "heart", cls: "highlight", l: ["كلنا معاك", "Koulouna Maak", "Koulouna Maak"], d: ["مناهضة العنف 24/7 مجاناً", "Violences, 24h/24 gratuit", "Violence helpline 24/7, free"] },
  { n: "141", ic: "alertTriangle", cls: "", l: ["الإسعاف الطبي SAMU", "SAMU", "SAMU medical"], d: ["طوارئ طبية", "Urgence médicale", "Medical emergency"] },
  { n: "0800004747", ic: "scale", cls: "", l: ["رئاسة النيابة العامة", "Parquet général", "Public Prosecution"], d: ["تبليغ وشكايات", "Signalements & plaintes", "Reports & complaints"] }
];

window.amanGetTrusted = function() {
  try { return localStorage.getItem("aman-trusted") || ""; } catch (e) { return ""; }
};

window.amanSaveTrusted = function() {
  const inp = document.getElementById("sos-trusted");
  const st = document.getElementById("sos-status");
  if (!inp) return;
  const v = inp.value.replace(/[^\d+]/g, "");
  try { v ? localStorage.setItem("aman-trusted", v) : localStorage.removeItem("aman-trusted"); } catch (e) {}
  inp.value = v;
  if (st) st.textContent = v ? sosT("trustedSaved") : "";
};

// International format for wa.me (Moroccan 0XXXXXXXXX -> 212XXXXXXXXX)
const amanIntlPhone = p => {
  let d = String(p || "").replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  else if (d.startsWith("0")) d = "212" + d.slice(1);
  return d;
};

function amanSosModalHTML() {
  const trusted = amanEsc(window.amanGetTrusted());
  const btn = "flex:1;min-width:150px;font-size:.85rem;display:inline-flex;align-items:center;justify-content:center;gap:6px";
  return `
  <div class="sos-sheet" role="document">
    <div class="sos-head">
      <div style="display:flex;align-items:center;gap:10px">
        <div class="sos-icon-badge">${svgIcon("sos", "ic", 28)}</div>
        <div>
          <h2 id="sos-title" style="margin:0;color:var(--red);font-size:1.3rem">${sosT("title")}</h2>
          <small style="color:var(--mu)">${sosT("sub")}</small>
        </div>
      </div>
      <button type="button" class="btn d sos-x" onclick="amanCloseSosModal()" aria-label="${sosT("close")}">${svgIcon("x", "ic", 18)}</button>
    </div>
    <div class="sos-grid">
      ${SOS_LINES.map(x => `
      <a href="tel:${x.n}" class="sos-call-card ${x.cls}" aria-label="${x.l[L]} ${x.n}">
        <span class="sos-call-ic">${svgIcon(x.ic, "ic", 20)}</span>
        <span class="sos-call-num">${x.n.length > 5 ? x.n.slice(0, 4) + " " + x.n.slice(4) : x.n}</span>
        <span class="sos-call-label"><b>${x.l[L]}</b><br><small>${x.d[L]}</small></span>
        <span class="sos-call-go">${svgIcon("phone", "ic", 14)}</span>
      </a>`).join("")}
    </div>
    <div class="sos-box">
      <b class="sos-box-t">${svgIcon("shield", "ic", 15)} ${sosT("actions")}</b>
      <div class="sos-trusted">
        <label for="sos-trusted">${svgIcon("user", "ic", 14)} ${sosT("trusted")}</label>
        <div style="display:flex;gap:6px">
          <input id="sos-trusted" type="tel" inputmode="tel" dir="ltr" value="${trusted}" placeholder="${sosT("trustedPh")}" maxlength="20">
          <button type="button" class="btn o" onclick="amanSaveTrusted()" style="padding:6px 12px">${svgIcon("check", "ic", 14)} ${sosT("trustedSave")}</button>
        </div>
        <small style="color:var(--mu)">${sosT("trustedHint")}</small>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button type="button" class="btn d" onclick="amanTriggerDistressMsg('whatsapp')" style="${btn}">${svgIcon("phone", "ic", 15)} <span>${sosT("wa")}</span></button>
        <button type="button" class="btn d" onclick="amanTriggerDistressMsg('sms')" style="${btn}">${svgIcon("send", "ic", 15)} <span>${sosT("sms")}</span></button>
        <button type="button" class="btn o" onclick="amanTriggerDistressMsg('copy')" style="${btn}">${svgIcon("copy", "ic", 15)} <span>${sosT("copy")}</span></button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <button type="button" class="btn o" id="sos-siren-btn" onclick="amanToggleSiren()" style="${btn};border-color:var(--red);color:var(--red)">${svgIcon("siren", "ic", 15)} <span id="sos-siren-txt">${sosT(window.amanSirenActive ? "sirenOff" : "sirenOn")}</span></button>
        <button type="button" class="btn o" onclick="amanCamouflage()" style="${btn}">${svgIcon("eyeOff", "ic", 15)} <span>${sosT("camo")}</span></button>
      </div>
      <p id="sos-status" role="status" aria-live="polite" style="margin:8px 0 0;font-size:.82rem;color:var(--ac);font-weight:700;min-height:1em"></p>
    </div>
    <p style="font-size:.8rem;color:var(--mu);margin:0;text-align:center;display:flex;gap:6px;justify-content:center;align-items:center">${svgIcon("shieldCheck", "ic", 13)} <span>${sosT("privacy")}</span></p>
  </div>`;
}

window.amanRenderOverlays = function() {
  let m = document.getElementById("aman-sos-modal");
  if (!m) {
    m = document.createElement("div");
    m.id = "aman-sos-modal";
    m.className = "sos-overlay";
    m.style.display = "none";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.setAttribute("aria-labelledby", "sos-title");
    m.addEventListener("click", e => { if (e.target === m) window.amanCloseSosModal(); });
    document.body.appendChild(m);
  }
  m.innerHTML = amanSosModalHTML();
  let f = document.getElementById("aman-ai-fab");
  if (!f) {
    f = document.createElement("a");
    f.id = "aman-ai-fab";
    f.href = "#ai";
    document.body.appendChild(f);
  }
  f.setAttribute("aria-label", sosT("fab"));
  f.innerHTML = `${svgIcon("ai", "ic", 20)}<span>${sosT("fab")}</span>`;
  f.style.display = (typeof route === "function" && route() === "ai") ? "none" : "";
  const onAi = typeof route === "function" && route() === "ai";
  document.body.classList.toggle("on-ai", onAi);
};

window.amanOpenSosModal = function() {
  if (!document.getElementById("aman-sos-modal")) window.amanRenderOverlays();
  const m = document.getElementById("aman-sos-modal");
  m.style.display = "flex";
  document.body.style.overflow = "hidden";
  const first = m.querySelector(".sos-call-card");
  if (first) first.focus();
};

window.amanCloseSosModal = function() {
  const m = document.getElementById("aman-sos-modal");
  if (m) m.style.display = "none";
  document.body.style.overflow = "";
  if (window.amanSirenActive) window.amanToggleSiren();
};

document.addEventListener("keydown", e => {
  const m = document.getElementById("aman-sos-modal");
  if (e.key === "Escape" && m && m.style.display === "flex") window.amanCloseSosModal();
});

window.amanTriggerDistressMsg = function(channel) {
  const st = document.getElementById("sos-status");
  const trusted = window.amanGetTrusted();
  let sent = false;

  function sendWithLoc(locUrl) {
    if (sent) return;
    sent = true;
    if (st) st.textContent = locUrl ? "" : sosT("noLoc");
    const text = sosT("msg") + (locUrl ? " " + sosT("myLoc") + " " + locUrl : "");
    const enc = encodeURIComponent(text);
    if (channel === "whatsapp") {
      const to = trusted ? amanIntlPhone(trusted) : "";
      window.open(`https://wa.me/${to}?text=${enc}`, "_blank", "noopener");
    } else if (channel === "sms") {
      location.href = `sms:${trusted}?&body=${enc}`;
    } else {
      const ok = () => { if (st) st.textContent = sosT("copied"); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok, () => prompt("", text));
      else prompt("", text);
    }
  }

  if (navigator.geolocation) {
    if (st) st.textContent = sosT("locating");
    navigator.geolocation.getCurrentPosition(
      pos => sendWithLoc(`https://maps.google.com/?q=${pos.coords.latitude.toFixed(6)},${pos.coords.longitude.toFixed(6)}`),
      () => sendWithLoc(""),
      { timeout: 6000, enableHighAccuracy: true, maximumAge: 60000 }
    );
    // Never block the alert for long if the GPS hangs
    setTimeout(() => sendWithLoc(""), 7000);
  } else {
    sendWithLoc("");
  }
};

window.amanToggleSiren = function() {
  const sirenBtn = document.getElementById("sos-siren-btn");
  const sirenTxt = document.getElementById("sos-siren-txt");

  if (window.amanSirenActive) {
    window.amanSirenActive = false;
    if (window.amanSirenInterval) clearInterval(window.amanSirenInterval);
    window.amanSirenInterval = null;
    if (window.amanAudioCtx) {
      try { window.amanAudioCtx.close(); } catch(e){}
      window.amanAudioCtx = null;
    }
    try { navigator.vibrate && navigator.vibrate(0); } catch(e){}
    if (sirenBtn) { sirenBtn.style.background = ""; sirenBtn.style.color = "#ef233c"; }
    if (sirenTxt) sirenTxt.textContent = sosT("sirenOn");
    return;
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    window.amanAudioCtx = new AudioContext();
    const ctx = window.amanAudioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    gain.gain.value = 0.35;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();

    let toggle = false;
    window.amanSirenInterval = setInterval(() => {
      if (!window.amanAudioCtx) return;
      toggle = !toggle;
      osc.frequency.setValueAtTime(toggle ? 950 : 650, ctx.currentTime);
      try { navigator.vibrate && navigator.vibrate(200); } catch(e){}
    }, 280);

    window.amanSirenActive = true;
    if (sirenBtn) { sirenBtn.style.background = "#ef233c"; sirenBtn.style.color = "#fff"; }
    if (sirenTxt) sirenTxt.textContent = sosT("sirenOff");
  } catch(e) {
    console.warn("Could not play siren:", e);
  }
};

window.amanCamouflage = function() {
  try {
    sessionStorage.clear();
    localStorage.removeItem("aman-ai-cache");
  } catch(e){}
  if (window.amanSirenActive) window.amanToggleSiren();
  const sos = document.getElementById("aman-sos-modal");
  if (sos) sos.style.display = "none";
  document.body.style.overflow = "";
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch(e){}
  let screen = document.getElementById("aman-camou-screen");
  if (!screen) {
    screen = document.createElement("div");
    screen.id = "aman-camou-screen";
    document.body.appendChild(screen);
  }
  const W = {
    t: ["حالة الطقس بالمغرب - اليوم", "Météo Maroc - Aujourd'hui", "Morocco Weather - Today"],
    live: ["تحديث مباشر", "Mise à jour en direct", "Live update"],
    main: ["الرباط / الدار البيضاء", "Rabat / Casablanca", "Rabat / Casablanca"],
    sky: ["سماء صافية مع رياح خفيفة معتدلة", "Ciel dégagé, vent léger", "Clear sky, light breeze"],
    c: [["مراكش", "Marrakech", "Marrakech", 26], ["طنجة", "Tanger", "Tangier", 20], ["أكادير", "Agadir", "Agadir", 24], ["فاس", "Fès", "Fez", 23], ["وجدة", "Oujda", "Oujda", 21], ["العيون", "Laâyoune", "Laayoune", 27]],
    btn: ["تحديث النشرة الجوية", "Actualiser le bulletin", "Refresh forecast"],
    title: ["الطقس بالمغرب", "Météo Maroc - Prévisions", "Morocco Weather"]
  };
  const cell = "background:#f8fafc;padding:10px;border-radius:10px;border:1px solid #e2e8f0";
  screen.innerHTML = `<div class="camo-card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
      <h3 style="margin:0;font-size:1.2rem;color:#0f172a">${W.t[L]}</h3>
      <span style="font-size:.85rem;color:#64748b">${W.live[L]}</span>
    </div>
    <div style="display:flex;align-items:center;gap:16px;background:#f1f5f9;border-radius:14px;padding:16px;margin-bottom:18px">
      <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      <div style="font-size:2.6rem;font-weight:800;color:#0284c7">22°C</div>
      <div><b style="font-size:1.05rem;display:block">${W.main[L]}</b><span style="color:#64748b;font-size:.9rem">${W.sky[L]}</span></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:center;margin-bottom:20px">
      ${W.c.map(c => `<div style="${cell}"><b>${c[L]}</b><br><span>${c[3]}°C</span></div>`).join("")}
    </div>
    <button type="button" onclick="amanExitCamouflage()" class="camo-btn">${W.btn[L]}</button>
  </div>`;
  screen.style.display = "block";
  document.title = W.title[L];
};

window.amanExitCamouflage = function() {
  const screen = document.getElementById("aman-camou-screen");
  if (screen) screen.style.display = "none";
  document.title = "AMAN – أمان";
};

window.qxtAI = function() {
  window.amanCamouflage();
};

window.amanClearAi = function() {
  if (window.amanAiLoading) return;
  amanStopSpeech();
  window.amanAiHistory = [];
  const box = document.getElementById("ai-chat-box");
  if (box) box.innerHTML = "";
  amanAddWelcomeMessage();
  amanRenderSuggestions();
};

window.amanToggleTtsMode = function() {
  window.amanTtsEnabled = !window.amanTtsEnabled;
  const b = document.querySelector(".ai-tts");
  if (b) {
    b.classList.toggle("on", window.amanTtsEnabled);
    b.innerHTML = svgIcon(window.amanTtsEnabled ? "volume" : "volumeX", "ic", 18);
  }
  if (!window.amanTtsEnabled && window.amanStopSpeech) amanStopSpeech();
  window.amanUpdateAudioStatus && amanUpdateAudioStatus();
};

window.amanSpeakText = function(text, btn) {
  if (!("speechSynthesis" in window)) return;
  const lbl = on => `${svgIcon(on ? "volumeX" : "volume", "ic", 13)} <span>${on ? (L===1?'Arrêter':L===2?'Stop':'إيقاف') : (L===1?'Écouter':L===2?'Listen':'استماع')}</span>`;
  if (window.speechSynthesis.speaking) { window.speechSynthesis.cancel(); if (btn) btn.innerHTML = lbl(false); return; }
  const tmp = document.createElement("div"); tmp.innerHTML = text;
  tmp.querySelectorAll(".ai-msg-actions").forEach(x => x.remove());
  if (btn) btn.innerHTML = lbl(true);
  amanSay(tmp.innerText, () => { if (btn) btn.innerHTML = lbl(false); });
};

window.amanCopyText = function(text, btn) {
  const clean = text.replace(/<[^>]*>/g, "");
  if (navigator.clipboard) {
    navigator.clipboard.writeText(clean).then(() => {
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = `${svgIcon("check","ic",13)} <span>${L===1?'Copié':'تم النسخ'}</span>`;
        setTimeout(() => { btn.innerHTML = orig; }, 1800);
      }
    });
  }
};

// --- AI SUGGESTIONS CATALOG ---
const AI_SUGGESTIONS = [
  {
    cat: "digital",
    titleAr: "ابتزاز بصور خاصة (دارجة)",
    promptAr: "تعرضت لابتزاز رقمي بصور ومحادثات خاصة، المبتز كيهددني ينشرهم لعايلتي ولا نعطيه الفلوس، شنو ندير دابا؟",
    titleFr: "Chantage numérique urgent",
    promptFr: "Je subis un chantage avec des photos privées. Quelles sont les démarches d'urgence auprès de la police ?"
  },
  {
    cat: "digital",
    titleAr: "Chantage en Arabizi (Latin)",
    promptAr: "Wahed kay chantiya b des photos w kaygoliya sifti flous sinon ghadi nnsher kolchi f tiktok w insta, 3afak chno ndir?",
    titleFr: "Chantage sur les réseaux sociaux",
    promptFr: "Un individu me menace de diffuser mes photos sur Instagram et TikTok si je ne paie pas. Comment réagir ?"
  },
  {
    cat: "legal",
    titleAr: "القانون 103-13 والتحرش في العمل",
    promptAr: "شنو كيقول القانون 103-13 ومدونة الشغل على التحرش في الخدمة، وكيفاش نثبتو بلا ما نخسر خدمتي؟",
    titleFr: "Loi 103-13 & Harcèlement au travail",
    promptFr: "Que prévoit la loi marocaine 103-13 contre le harcèlement en milieu professionnel ?"
  },
  {
    cat: "legal",
    titleAr: "أمر حماية استعجالي من المحكمة",
    promptAr: "كيفاش نطلب أمر حماية قضائية استعجالية من رئيس المحكمة باش يمنع شخص من الاقتراب مني أو من الدار؟",
    titleFr: "Ordonnance de protection urgente",
    promptFr: "Comment obtenir une ordonnance d'éloignement et de protection judiciaire au Maroc ?"
  },
  {
    cat: "psych",
    titleAr: "دعم نفسي واستماع سري",
    promptAr: "كنحس بضغط وخوف ورعبة كبيرة، محتاجة فضاء استماع ودعم نفسي آمن وسري، شكون يعاوني؟",
    titleFr: "Soutien psychologique confidentiel",
    promptFr: "Où trouver une cellule d'écoute et un soutien psychologique confidentiel au Maroc ?"
  },
  {
    cat: "psych",
    titleAr: "تمارين تهدئة وتنفس فوري للهلع",
    promptAr: "كنعيش نوبة ذعر وخوف شديد دابا، عافاك عاوني بتمارين عملية فورية لتهدئة ضربات القلب والهلع.",
    titleFr: "Exercice d'apaisement d'urgence",
    promptFr: "Je fais une crise d'angoisse suite à une menace. Guidez-moi pour me calmer immédiatement."
  },
  {
    cat: "report",
    titleAr: "شكاية رسمية لوكيل الملك",
    promptAr: "كيفاش نسجل شكاية رسمية عند وكيل الملك بالمحكمة الابتدائية وبلا ما يتعرف عنواني؟",
    titleFr: "Plainte auprès du Procureur du Roi",
    promptFr: "Comment déposer une plainte officielle et confidentielle auprès du Parquet au Maroc ?"
  },
  {
    cat: "report",
    titleAr: "الفرقة الولائية لمكافحة الجريمة الإلكترونية",
    promptAr: "كيفاش نتوجه لفرقة مكافحة الجريمة الإلكترونية التابعة للشرطة القضائية DGSN وشنو الأدلة اللي ندي معايا؟",
    titleFr: "Brigade de cybercriminalité (DGSN)",
    promptFr: "Comment saisir la brigade de lutte contre la cybercriminalité de la DGSN et quelles preuves fournir ?"
  }
];

window.amanSelectCategory = function(cat) {
  window.amanActiveCategory = cat;
  document.querySelectorAll(".ai-cat-btn").forEach(btn => {
    btn.classList.toggle("on", btn.dataset.cat === cat);
  });
  const grid = document.getElementById("ai-prompts-grid");
  if (!grid) return;
  const filtered = cat === "all" ? AI_SUGGESTIONS : AI_SUGGESTIONS.filter(s => s.cat === cat);
  const isFr = L === 1;

  grid.innerHTML = filtered.map((s) => {
    const idx = AI_SUGGESTIONS.indexOf(s);
    const t = isFr ? s.titleFr : s.titleAr;
    const p = isFr ? s.promptFr : s.promptAr;
    const iconName = s.cat === "digital" ? "shield" : s.cat === "legal" ? "scale" : s.cat === "psych" ? "heart" : "fileText";
    return `
      <button type="button" class="card ai-prompt-btn" onclick="amanAskSuggestedIdx(${idx})" style="cursor:pointer;text-align:inherit;padding:12px;border:1px solid var(--bd);background:var(--card);transition:transform .15s">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
          <span style="color:var(--ac)">${svgIcon(iconName, "ic", 15)}</span>
          <b style="color:var(--ac);font-size:.88rem">${amanEsc(t)}</b>
        </div>
        <span style="font-size:.78rem;color:var(--mu);display:block;line-height:1.4">${amanEsc(p)}</span>
      </button>
    `;
  }).join("");
};

function amanFormatAiReply(raw) {
  let s = amanEsc(raw);
  s = s.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  s = s.replace(/(?:^|\n)[*-] (.*?)(?=\n|$)/g, "\n<li>$1</li>");
  s = s.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");
  s = s.replace(/\n\n+/g, "<br><br>");
  s = s.replace(/\n/g, "<br>");
  // Transform phone numbers into interactive badges with SVG phone icon
  s = s.replace(/\b(19|177|15|8350|0800004747|141)\b/g, (m) => {
    return `<a href="tel:${m}" class="tag-hotline">${svgIcon("phone", "ic", 12)} ${m}</a>`;
  });
  return s;
}

function amanAppendMessage(role, text, silent = false) {
  const box = document.getElementById("ai-chat-box");
  if (!box) return;
  const isUser = role === "user";
  const msgEl = document.createElement("div");
  msgEl.className = "ai-msg " + (isUser ? "user" : "assistant");

  const avatar = document.createElement("div");
  avatar.className = "ai-msg-avatar";
  avatar.innerHTML = isUser ? svgIcon("user", "ic-avatar", 18) : svgIcon("ai", "ic-avatar", 18);

  const bubble = document.createElement("div");
  bubble.className = "ai-msg-bubble";

  if (isUser) {
    bubble.textContent = text;
  } else {
    bubble.innerHTML = amanFormatAiReply(text);
    // Action toolbar (Copy & Read Aloud)
    const actions = document.createElement("div");
    actions.className = "ai-msg-actions";
    actions.innerHTML = `
      <button type="button" class="ai-action-btn" onclick="amanCopyText(this.closest('.ai-msg-bubble').innerHTML, this)">
        ${svgIcon("copy", "ic", 12)} <span>${['نسخ','Copier','Copy'][L]}</span>
      </button>
      <button type="button" class="ai-action-btn" onclick="amanSpeakText(this.closest('.ai-msg-bubble').innerHTML, this)">
        ${svgIcon("volume", "ic", 12)} <span>${['استماع','Écouter','Listen'][L]}</span>
      </button>
    `;
    bubble.appendChild(actions);

    if (!silent && window.amanTtsEnabled && !(window.amanVoice && window.amanVoice.on)) {
      window.amanSay(text);
    }
  }

  msgEl.appendChild(avatar);
  msgEl.appendChild(bubble);
  box.appendChild(msgEl);
  box.scrollTop = box.scrollHeight;
}

function amanShowTyping() {
  const box = document.getElementById("ai-chat-box");
  if (!box) return null;
  const tEl = document.createElement("div");
  tEl.className = "ai-msg assistant";
  tEl.id = "ai-typing-node";
  tEl.innerHTML = `
    <div class="ai-msg-avatar">${svgIcon("ai", "ic-avatar", 18)}</div>
    <div class="ai-typing">
      <small style="color:var(--mu);margin-inline-end:6px">${L===1?'Analyse en cours...':L===2?'Analyzing...':'جاري التفكير والتوجيه...'}</small>
      <span></span><span></span><span></span>
    </div>
  `;
  box.appendChild(tEl);
  box.scrollTop = box.scrollHeight;
  return tEl;
}

function amanRemoveTyping(node) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  } else {
    const existing = document.getElementById("ai-typing-node");
    if (existing) existing.remove();
  }
}

function amanAddWelcomeMessage() {
  const box = document.getElementById("ai-chat-box");
  if (!box || box.children.length > 0) return;
  const isAr = L === 0;
  const isFr = L === 1;
  const welcome = isAr
    ? "مرحباً، أنا **مساعد أمان**. احكِ ليا شنو واقع، بأي لغة أو لهجة بغيتي، وغادي نعاونك خطوة بخطوة."
    : isFr
    ? "Bonjour, je suis l'**Assistant AMAN**. Racontez-moi ce qui se passe, dans la langue de votre choix, et je vous guiderai étape par étape."
    : "Hi, I'm the **AMAN Assistant**. Tell me what's happening, in any language, and I'll guide you step by step.";
  amanAppendMessage("assistant", welcome, true);
  (window.amanAiHistory || []).forEach(m => amanAppendMessage(m.role, m.content, true));
}

const AI_TXT = {
  sub: ["توجيه قانوني، حماية من الابتزاز، ودعم نفسي بسرية تامة. اكتب بأي لغة أو لهجة.", "Orientation juridique, protection contre le chantage et soutien psychologique, en toute confidentialité. Écrivez dans n'importe quelle langue.", "Legal guidance, blackmail protection and confidential support. Write in any language."],
  exit: ["خروج سريع", "Sortie rapide", "Quick exit"],
  audio: ["قراءة الردود بالصوت", "Lecture audio des réponses", "Read replies aloud"],
  clear: ["مسح المحادثة", "Effacer la conversation", "Clear chat"],
  urgent: ["في خطر الآن؟", "En danger maintenant ?", "In danger now?"],
  ph: ["كتب سؤالك بالدارجة ولا بأي لهجة مغربية، ولا زيد ملف...", "Écrivez votre question ici...", "Type your question here..."],
  send: ["إرسال", "Envoyer", "Send"],
  mic: ["تسجيل صوتي", "Dictée vocale", "Voice input"],
  sugg: ["أسئلة شائعة", "Questions fréquentes", "Common questions"],
  attach: ["إرفاق صورة أو فيديو أو مستند", "Joindre une image, vidéo ou document", "Attach an image, video or document"],
  attachHint: ["يمكنك إرفاق حتى 4 ملفات (صور، لقطات شاشة، فيديو، صوت، PDF، Word…) بحجم إجمالي 4.5 ميغابايت. تُحلَّل ولا تُحفظ.", "Jusqu'à 4 fichiers (images, captures, vidéo, audio, PDF, Word…), 4,5 Mo au total. Analysés, jamais enregistrés.", "Up to 4 files (images, screenshots, video, audio, PDF, Word…), 4.5 MB in total. Analysed, never stored."],
  remove: ["حذف", "Retirer", "Remove"],
  tooMany: ["الحد الأقصى 4 ملفات.", "4 fichiers maximum.", "Maximum 4 files."],
  tooBig: ["الملفات كبيرة جداً (الحد 4.5 ميغابايت). جربي فيديو أقصر أو صورة أصغر.", "Fichiers trop lourds (4,5 Mo max). Essayez une vidéo plus courte ou une image plus petite.", "Files too large (4.5 MB max). Try a shorter video or smaller image."],
  badType: ["نوع الملف غير مدعوم أو لا يمكن قراءته.", "Type de fichier non pris en charge ou illisible.", "File type not supported or unreadable."],
  limited: ["وصلتِ إلى حد الاستعمال مؤقتاً. حاولي بعد قليل.", "Limite d'utilisation atteinte. Réessayez plus tard.", "Usage limit reached. Please try again later."],
  files: ["ملفات مرفقة", "Fichiers joints", "Attached files"],
  discl: ["توجيه أولي فقط وليس بديلاً عن محامٍ أو طبيب. محادثتك لا تُخزَّن.", "Orientation indicative, ne remplace pas un avocat ou un médecin. Rien n'est enregistré.", "Initial guidance only, not a substitute for a lawyer or doctor. Nothing is stored."]
};
const aiT = k => AI_TXT[k][L] || AI_TXT[k][0];

function amanRenderAiPage() {
  const iconBtn = (fn, icon, label, extra) => `<button type="button" class="ai-icon-btn${extra ? " " + extra : ""}" onclick="${fn}" title="${label}" aria-label="${label}">${svgIcon(icon, "ic", 18)}</button>`;
  return `
  <div class="ai-container">
    <div class="ai-top">
      <div class="ai-badge-icon">${svgIcon("ai", "ic", 24)}</div>
      <div class="ai-top-txt">
        <h2>${t("ai")}</h2>
        <p>${aiT("sub")}</p>
      </div>
      <div class="ai-top-act">
        ${iconBtn("amanToggleTtsMode()", window.amanTtsEnabled ? "volume" : "volumeX", aiT("audio"), "ai-tts" + (window.amanTtsEnabled ? " on" : ""))}
        ${iconBtn("amanClearAi()", "trash", aiT("clear"))}
      </div>
    </div>

    <button type="button" id="ai-voice-btn" class="ai-voice-cta" onclick="amanVoiceStart()">
      <span class="ai-voice-ic">${svgIcon("mic", "ic", 26)}</span>
      <span><b>${VOICE_TXT.open[L]}</b><small>${["تكلم وسمع الجواب بلا كتابة وبلا ما تضغط — بأي لهجة مغربية", "Parlez et écoutez la réponse, sans écrire", "Speak and hear the answer, no typing"][L]}</small></span>
    </button>
    <div class="ai-audio-tools">
      <button type="button" class="btn o" onclick="amanToggleTtsMode()" id="ai-audio-toggle" aria-pressed="${window.amanTtsEnabled}">${svgIcon("volume", "ic", 16)} <span>${["الجواب بالصوت", "Réponse audio", "Spoken replies"][L]}</span></button>
      <button type="button" class="ai-action-btn" onclick="amanStopSpeech()">${svgIcon("stop", "ic", 14)} ${["وقف الصوت", "Arrêter le son", "Stop audio"][L]}</button>
      <a href="#access">${["إعدادات الأصوات", "Réglages des voix", "Voice settings"][L]}</a>
      <p id="ai-audio-status" role="status"></p>
    </div>
    <div class="ai-urgent">
      <span>${svgIcon("alertTriangle", "ic", 15)} ${aiT("urgent")}</span>
      <a href="tel:19">19</a><a href="tel:177">177</a><a href="tel:8350">8350</a>
      <button type="button" onclick="amanOpenSosModal()">SOS</button>
    </div>

    <div class="ai-chat-card">
      <div id="ai-chat-box" role="log" aria-live="polite" aria-label="${t("ai")}"></div>
      <div id="ai-sugg" class="ai-sugg"></div>
      <form id="ai-form" class="ai-form" onsubmit="return amanSubmitAi(event)">
        <input type="file" id="ai-file" multiple hidden accept="image/*,video/*,audio/*,application/pdf,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.odt,.ods,.odp,.txt,.md,.csv,.rtf,.srt,.vtt,.json" onchange="amanPickFiles(this)">
        <button type="button" id="ai-attach-btn" class="ai-icon-btn" title="${aiT("attach")}" aria-label="${aiT("attach")}" onclick="document.getElementById('ai-file').click()">${svgIcon("clip", "ic", 18)}</button>
        <textarea id="ai-input" rows="1" aria-label="${aiT("ph")}" placeholder="${aiT("ph")}" maxlength="1500"></textarea>
        <button type="button" id="ai-mic-btn" class="ai-icon-btn" title="${aiT("mic")}" aria-label="${aiT("mic")}" onclick="amanToggleMic()" style="display:none">${svgIcon("mic", "ic", 18)}</button>
        <button type="submit" id="ai-send-btn" class="ai-send" aria-label="${aiT("send")}">${svgIcon("send", "ic", 18)}</button>
      </form>
      <div id="ai-files" class="ai-files" aria-live="polite"></div>
      <p class="ai-files-hint">${aiT("attachHint")}</p>
    </div>
    ${amanReplyLangSelect("ai-reply-lang")}
    <p class="ai-disclaimer">${svgIcon("lock", "ic", 12)} <span>${aiT("discl")}</span></p>
  </div>`;
}

function amanRenderSuggestions() {
  const host = document.getElementById("ai-sugg");
  if (!host) return;
  if ((window.amanAiHistory || []).length) { host.innerHTML = ""; return; }
  const pick = [0, 2, 4, 6];
  const iconOf = c => c === "digital" ? "shield" : c === "legal" ? "scale" : c === "psych" ? "heart" : "fileText";
  host.innerHTML = `<small>${aiT("sugg")}</small><div class="ai-sugg-list">${pick.map(i => {
    const s = AI_SUGGESTIONS[i];
    return `<button type="button" onclick="amanAskSuggestedIdx(${i})">${svgIcon(iconOf(s.cat), "ic", 15)}<span>${amanEsc(L === 0 ? s.titleAr : L === 2 ? (s.titleEn || s.titleFr) : s.titleFr)}</span></button>`;
  }).join("")}</div>`;
}

function amanInitAi() {
  amanAddWelcomeMessage();
  amanRenderSuggestions();
  window.amanUpdateAudioStatus && amanUpdateAudioStatus();
  const input = document.getElementById("ai-input");
  if (input) {
    input.onkeydown = function(e) {
      if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
        e.preventDefault();
        amanSubmitAi(e);
      }
    };
    input.oninput = function() {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 140) + "px";
    };
  }
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById("ai-mic-btn");
  if (SpeechRec && micBtn) micBtn.style.display = "";
}

window.amanSubmitAi = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById("ai-input");
  if (!input) return false;
  const val = input.value.trim();
  if (val || (window.amanAiFiles || []).length) {
    amanSendAiQuery(val);
  }
  return false;
};

window.amanAskSuggestedIdx = function(idx) {
  const s = AI_SUGGESTIONS[idx];
  if (!s) return;
  amanSendAiQuery(L === 1 ? s.promptFr : L === 2 ? (s.promptEn || s.promptFr) : s.promptAr);
};

window.amanAskSuggested = function(promptText) {
  if (promptText) {
    amanSendAiQuery(promptText);
  }
};

window.amanAiFiles = [];
const AMAN_MAX_FILES = 4, AMAN_MAX_BYTES = 4500000;
const amanFmtSize = n => n > 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1024)) + " KB";
window.amanRenderFiles = function() {
  const host = document.getElementById("ai-files");
  if (!host) return;
  host.innerHTML = window.amanAiFiles.map((f, i) => {
    const img = /^image\//.test(f.type) ? `<img src="${f._url || (f._url = URL.createObjectURL(f))}" alt="">` : svgIcon("fileText", "ic", 18);
    return `<span class="ai-file">${img}<span class="ai-file-n" dir="auto">${amanEsc(f.name)}</span><small>${amanFmtSize(f.size)}</small><button type="button" onclick="amanRemoveFile(${i})" aria-label="${aiT("remove")} ${amanEsc(f.name)}">${svgIcon("x", "ic", 14)}</button></span>`;
  }).join("");
};
window.amanPickFiles = function(inp) {
  const add = [...(inp.files || [])];
  inp.value = "";
  let msg = "";
  for (const f of add) {
    if (window.amanAiFiles.length >= AMAN_MAX_FILES) { msg = aiT("tooMany"); break; }
    const total = window.amanAiFiles.reduce((a, x) => a + x.size, 0) + f.size;
    if (total > AMAN_MAX_BYTES) { msg = aiT("tooBig"); continue; }
    window.amanAiFiles.push(f);
  }
  amanRenderFiles();
  if (msg) { amanAppendMessage("assistant", msg); }
  if (window.amanAnnounce) amanAnnounce(window.amanAiFiles.length + " " + aiT("files"));
};
window.amanRemoveFile = function(i) {
  const f = window.amanAiFiles.splice(i, 1)[0];
  if (f && f._url) URL.revokeObjectURL(f._url);
  amanRenderFiles();
};

window.amanSendAiQuery = async function(text) {
  const q = String(text || "").trim();
  const files = (window.amanAiFiles || []).slice();
  if ((!q && !files.length) || window.amanAiLoading) return;
  amanStopSpeech();
  const input = document.getElementById("ai-input");
  if (input) { input.value = ""; input.style.height = "auto"; }
  window.amanAiFiles = [];
  amanRenderFiles();

  amanAppendMessage("user", (q || "") + (files.length ? (q ? "\n" : "") + "📎 " + files.map(f => f.name).join(", ") : ""));
  const sg = document.getElementById("ai-sugg");
  if (sg) sg.innerHTML = "";
  window.amanAiHistory = window.amanAiHistory || [];
  const priorHistory = window.amanAiHistory.slice(-10);
  window.amanAiHistory.push({ role: "user", content: (q || aiT("files")) + (files.length ? " [" + files.map(f => f.name).join(", ") + "]" : "") });

  window.amanAiLoading = true;
  const sendBtn = document.getElementById("ai-send-btn");
  if (sendBtn) sendBtn.disabled = true;
  const typingNode = amanShowTyping();

  try {
    const payload = JSON.stringify({
      message: q,
      history: priorHistory,
      uiLang: ["ar", "fr", "en"][L] || "ar",
      replyLang: window.amanReplyLang || "auto",
      voiceReply: !!(window.amanTtsEnabled || window.amanVoice?.on),
      stream: false
    });
    const makeBody = () => {
      if (!files.length) return payload;
      const fd = new FormData();
      fd.append("payload", payload);
      files.forEach(f => fd.append("files", f, f.name));
      return fd;
    };
    // One automatic retry on network failure or a temporary server error, with a time limit per attempt.
    const callChat = async () => {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), files.length ? 70000 : 45000);
      try {
        const r = await fetch("/api/chat", {
          method: "POST", headers: files.length ? {} : { "Content-Type": "application/json" }, body: makeBody(), signal: ctl.signal
        });
        return { r, d: await r.json().catch(() => null) };
      } finally { clearTimeout(timer); }
    };
    let attempt;
    try { attempt = await callChat(); } catch (e) { if (e && e.name === "AbortError") throw e; attempt = null; }
    if (!attempt || (attempt.r.status >= 500 && !(attempt.d && attempt.d.success))) {
      await new Promise(ok => setTimeout(ok, 1200));
      attempt = await callChat();
    }
    const data = attempt.d;
    amanRemoveTyping(typingNode);

    if (data && data.success && data.reply) {
      amanAppendMessage("assistant", data.reply);
      window.amanAiHistory.push({ role: "assistant", content: data.reply });
      if (window.amanOnAiReply) window.amanOnAiReply(data.reply);
    } else {
      const code = data && data.code;
      const errMsg = code === "too_large" || code === "too_many" ? aiT(code === "too_many" ? "tooMany" : "tooBig")
        : code === "unsupported" || code === "unreadable" ? aiT("badType")
        : code === "rate_limited" ? aiT("limited")
        : (data && data.error) || ["تعذر الرد حالياً. المرجو المحاولة مجدداً أو الاتصال بـ 19 / 177 / 8350.", "Une erreur est survenue. Veuillez réessayer ou contacter les numéros d'urgence (19 / 177 / 8350).", "Something went wrong. Please try again or call 19 / 177 / 8350."][L];
      amanAppendMessage("assistant", errMsg);
      if (window.amanOnAiReply) window.amanOnAiReply(errMsg);
    }
  } catch (err) {
    amanRemoveTyping(typingNode);
    const netErr = ["تعذر الاتصال بالخادم. تأكد من اتصال الإنترنت أو اتصل بـ 19 / 177.", "Problème de connexion au serveur. Vérifiez Internet ou appelez le 19 / 177.", "Could not reach the server. Check your connection or call 19 / 177."][L];
    amanAppendMessage("assistant", netErr);
    if (window.amanOnAiReply) window.amanOnAiReply(netErr);
  } finally {
    window.amanAiLoading = false;
    if (sendBtn) sendBtn.disabled = false;
    if (input && !(window.amanVoice && window.amanVoice.on) && document.activeElement?.closest("#ai-form")) input.focus();
  }
};

window.amanToggleMic = function() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return;
  if (window.amanSpeechActive) {
    if (window.amanSpeechRec) window.amanSpeechRec.stop();
    return;
  }
  amanStopSpeech();
  if (window.amanVoice?.on) amanVoiceStop();
  if (window.amanVC?.on) amanVoiceControl();
  const rec = new SpeechRec();
  window.amanSpeechRec = rec;
  const lastU = (window.amanAiHistory || []).filter(m => m.role === "user").slice(-1)[0];
  rec.lang = (window.amanRecLang && amanRecLang()) || amanReplyLangObj().sr || (lastU ? amanDetectLang(lastU.content) : (L === 1 ? "fr-FR" : L === 2 ? "en-US" : "ar-MA"));
  rec.continuous = false;
  rec.interimResults = false;
  const micBtn = document.getElementById("ai-mic-btn");
  rec.onstart = function() {
    window.amanSpeechActive = true;
    if (micBtn) micBtn.classList.add("mic-recording");
  };
  rec.onresult = function(e) {
    const transcript = e.results[0]?.[0]?.transcript;
    const input = document.getElementById("ai-input");
    if (input && transcript) {
      input.value = (input.value ? input.value + " " : "") + transcript;
    }
  };
  rec.onend = function() {
    window.amanSpeechActive = false;
    if (micBtn) micBtn.classList.remove("mic-recording");
  };
  rec.onerror = function() {
    window.amanSpeechActive = false;
    if (micBtn) micBtn.classList.remove("mic-recording");
  };
  try { rec.start(); } catch (e) { rec.onend(); amanAnnounce(vT("denied")); }
};

// --- ACCESSIBILITY SPACE (blind, low vision, motor, cognitive needs) ---
Object.assign(SVG_ICONS, {
  access: '<circle cx="12" cy="4" r="2"/><path d="M4 8l8 2 8-2M12 10v5M9 22l3-7 3 7"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  textSize: '<path d="M4 7V5h10v2M9 5v14M7 19h4M14 12v-1h7v1M17.5 11v8M16 19h3"/>',
  contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 2v20a10 10 0 0 0 0-20z" fill="currentColor"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  stop: '<rect x="5" y="5" width="14" height="14" rx="2"/>',
  keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
  hand: '<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-2a2 2 0 0 0-4 0"/>',
  spacing: '<path d="M21 6H3M21 12H3M21 18H3"/>',
  cursor: '<path d="m4 4 7 17 2.5-7.5L21 11z"/>'
});

T.access = ["إمكانية الوصول", "Accessibilité", "Accessibility"];
if (!NAV.includes("access")) NAV.push("access");

const A11Y_KEY = "aman-a11y";
window.amanA11y = (() => { try { return JSON.parse(localStorage.getItem(A11Y_KEY)) || {}; } catch (e) { return {}; } })();
const A11Y_OPTS = [
  { k: "contrast", ic: "contrast", l: ["تباين عالي", "Contraste élevé", "High contrast"], d: ["ألوان قوية وواضحة لضعاف البصر", "Couleurs fortes pour malvoyants", "Strong colours for low vision"] },
  { k: "dark", ic: "eye", l: ["وضع داكن (أصفر على أسود)", "Mode sombre (jaune sur noir)", "Dark mode (yellow on black)"], d: ["يريح العين ويقلل الإبهار", "Réduit l'éblouissement", "Reduces glare"] },
  { k: "font", ic: "textSize", l: ["خط واضح وسهل القراءة", "Police lisible", "Readable font"], d: ["مناسب لعسر القراءة", "Adaptée à la dyslexie", "Dyslexia friendly"] },
  { k: "spacing", ic: "spacing", l: ["تباعد الأسطر والحروف", "Espacement du texte", "Text spacing"], d: ["نص أقل ازدحاماً", "Texte moins dense", "Less crowded text"] },
  { k: "links", ic: "link", l: ["إبراز الروابط والأزرار", "Souligner les liens", "Highlight links"], d: ["تمييز كل ما يمكن الضغط عليه", "Repérer ce qui est cliquable", "See what is clickable"] },
  { k: "motion", ic: "pause", l: ["إيقاف الحركة والوميض", "Arrêter les animations", "Stop animations"], d: ["للحساسية من الحركة والصرع", "Pour l'épilepsie et le vertige", "For epilepsy and motion sensitivity"] },
  { k: "cursor", ic: "cursor", l: ["مؤشر وتركيز كبير", "Grand curseur & focus", "Big cursor & focus"], d: ["يسهل التتبع بالفأرة ولوحة المفاتيح", "Suivi facile souris/clavier", "Easier mouse/keyboard tracking"] },
  { k: "tapread", ic: "hand", l: ["اقرأ ما ألمسه بالصوت", "Lire à voix haute au toucher", "Read aloud on tap"], d: ["اضغط على أي نص ليُقرأ لك", "Touchez un texte pour l'entendre", "Tap any text to hear it"] }
];
const A11Y_SIZES = [100, 115, 130, 150, 175];

window.amanApplyA11y = function() {
  const a = window.amanA11y, h = document.documentElement;
  A11Y_OPTS.forEach(o => h.classList.toggle("a11y-" + o.k, !!a[o.k]));
  h.style.fontSize = (a.size && a.size !== 100) ? a.size + "%" : "";
  try { localStorage.setItem(A11Y_KEY, JSON.stringify(a)); } catch (e) {}
};
window.amanA11yToggle = function(k) {
  window.amanA11y[k] = !window.amanA11y[k];
  if (k === "contrast" && window.amanA11y.contrast) window.amanA11y.dark = false;
  if (k === "dark" && window.amanA11y.dark) window.amanA11y.contrast = false;
  amanApplyA11y(); amanRefreshA11yUI();
  const o = A11Y_OPTS.find(x => x.k === k);
  amanAnnounce(o.l[L] + ": " + (window.amanA11y[k] ? ["مفعّل", "activé", "on"][L] : ["معطّل", "désactivé", "off"][L]));
};
window.amanA11ySize = function(dir) {
  const cur = A11Y_SIZES.indexOf(window.amanA11y.size || 100);
  const next = dir === 0 ? 0 : Math.max(0, Math.min(A11Y_SIZES.length - 1, (cur < 0 ? 0 : cur) + dir));
  window.amanA11y.size = A11Y_SIZES[next];
  amanApplyA11y(); amanRefreshA11yUI();
  amanAnnounce(["حجم الخط", "Taille du texte", "Text size"][L] + " " + window.amanA11y.size + "%");
};
window.amanA11yReset = function() {
  window.amanA11y = {}; amanApplyA11y(); amanRefreshA11yUI();
  amanAnnounce(["تمت إعادة الضبط", "Réglages réinitialisés", "Settings reset"][L]);
};
function amanRefreshA11yUI() {
  document.querySelectorAll("[data-a11y]").forEach(b => {
    const on = !!window.amanA11y[b.dataset.a11y];
    b.setAttribute("aria-pressed", on); b.classList.toggle("on", on);
  });
  const sz = document.getElementById("a11y-size-val");
  if (sz) sz.textContent = (window.amanA11y.size || 100) + "%";
}

// Live region for screen readers
window.amanAnnounce = function(msg) {
  let r = document.getElementById("aman-live");
  if (!r) { r = document.createElement("div"); r.id = "aman-live"; r.className = "sr-only"; r.setAttribute("aria-live", "polite"); r.setAttribute("role", "status"); document.body.appendChild(r); }
  r.textContent = ""; setTimeout(() => { r.textContent = msg; }, 50);
};

// --- Speech helpers (language auto-detected from the text itself) ---
window.amanDetectLang = function(text) {
  const s = String(text || "");
  const ar = (s.match(/[؀-ۿ]/g) || []).length, lat = (s.match(/[A-Za-zÀ-ÿ]/g) || []).length;
  if (/[ⴰ-⵿]/.test(s)) return "ar-MA";
  if (ar >= lat) return "ar-MA";
  if (/\b(le|la|les|des|est|vous|je|une|pour|que|avec|et)\b/i.test(s) || /[éèêàçù]/i.test(s)) return "fr-FR";
  if (/\b(el|los|las|usted|para|una|que|está)\b/i.test(s) || /[ñ¿¡]/.test(s)) return "es-ES";
  if (/\b(the|you|and|is|are|your|what|how)\b/i.test(s)) return "en-US";
  return ["ar-MA", "fr-FR", "en-US"][L] || "ar-MA"; // Arabizi / Darija latin
};
window.amanPickVoice = function(lang) {
  const vs = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
  const base = lang.split("-")[0];
  return vs.find(v => v.lang === lang) || vs.find(v => v.lang && v.lang.toLowerCase().startsWith(base)) || null;
};
window.amanSay = function(text, onEnd) {
  if (!("speechSynthesis" in window)) { onEnd && onEnd(); return; }
  speechSynthesis.cancel();
  const clean = String(text).replace(/<[^>]*>/g, " ").replace(/[*_#>`]/g, "").replace(/\s+/g, " ").trim();
  if (!clean) { onEnd && onEnd(); return; }
  // Split into chunks: some engines stop on long texts
  const parts = clean.match(/[^.!?؟\n]{1,220}[.!?؟]?/g) || [clean];
  const lang = amanReplyLangObj().tts || amanDetectLang(clean), voice = amanPickVoice(lang);
  let i = 0;
  const next = () => {
    if (i >= parts.length) { onEnd && onEnd(); return; }
    const u = new SpeechSynthesisUtterance(parts[i++].trim());
    u.lang = voice ? voice.lang : lang; if (voice) u.voice = voice;
    u.rate = window.amanA11y.rate || 0.95;
    u.onend = next; u.onerror = () => { onEnd && onEnd(); };
    speechSynthesis.speak(u);
  };
  next();
};
if ("speechSynthesis" in window) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); }
window.amanReadPage = function() {
  const m = document.getElementById("m");
  if (!m) return;
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
  amanSay(m.innerText);
};
window.amanStopSpeech = function() { try { speechSynthesis.cancel(); } catch (e) {} };

// Tap-to-read
document.addEventListener("click", e => {
  if (!window.amanA11y.tapread) return;
  const el = e.target.closest("h1,h2,h3,h4,p,li,a,button,label,td,small,b,span,.ai-msg-bubble");
  if (!el || el.closest("#ai-form") || el.closest(".a11y-noread")) return;
  const txt = el.getAttribute("aria-label") || el.innerText;
  if (txt && txt.trim()) amanSay(txt);
}, true);

// Keyboard shortcuts
document.addEventListener("keydown", e => {
  if (!e.altKey || e.ctrlKey || e.metaKey) return;
  const k = e.key.toLowerCase();
  const map = { s: () => amanOpenSosModal(), a: () => { location.hash = "ai"; }, v: () => { location.hash = "ai"; setTimeout(() => amanVoiceStart(), 300); }, r: () => amanReadPage(), "+": () => amanA11ySize(1), "=": () => amanA11ySize(1), "-": () => amanA11ySize(-1), h: () => { location.hash = "access"; } };
  if (map[k]) { e.preventDefault(); map[k](); }
  if (e.key === "Escape") amanStopSpeech();
});

P.access = function() {
  const tx = {
    intro: ["هاد الفضاء مخصص للمكفوفين، ضعاف البصر، كبار السن، وكل شخص كيلقى صعوبة فاستعمال الموقع. كل الإعدادات كتسجل فجهازك فقط.", "Cet espace est dédié aux personnes aveugles ou malvoyantes, aux seniors et à toute personne ayant des difficultés. Les réglages restent sur votre appareil.", "This space is for blind and low-vision users, seniors, and anyone who finds the site hard to use. Settings stay on your device."],
    size: ["حجم النص", "Taille du texte", "Text size"],
    display: ["العرض والقراءة", "Affichage et lecture", "Display & reading"],
    listen: ["الاستماع بدل القراءة", "Écouter au lieu de lire", "Listen instead of reading"],
    readPage: ["اقرأ لي هاد الصفحة", "Lire cette page", "Read this page"],
    stop: ["إيقاف الصوت", "Arrêter la voix", "Stop voice"],
    voiceAi: ["تكلم مع مساعد أمان بالصوت", "Parler à l'assistant à la voix", "Talk to the assistant by voice"],
    voiceAiD: ["بلا كتابة وبلا تشغيل وإيقاف: تكلم، والمساعد كيجاوبك بالصوت بنفس لهجتك، ومن بعد كيرجع يسمعك بوحدو.", "Sans écrire : parlez, l'assistant vous répond à voix haute dans votre langue.", "No typing: speak, and the assistant answers aloud in your language."],
    rate: ["سرعة الصوت", "Vitesse de la voix", "Voice speed"],
    keys: ["اختصارات لوحة المفاتيح", "Raccourcis clavier", "Keyboard shortcuts"],
    sr: ["قارئ الشاشة", "Lecteur d'écran", "Screen readers"],
    srD: ["الموقع متوافق مع TalkBack (أندرويد) و VoiceOver (آيفون) و NVDA. كل الأزرار عندها وصف صوتي، وأرقام الطوارئ كتتقرا مباشرة.", "Le site fonctionne avec TalkBack (Android), VoiceOver (iPhone) et NVDA. Chaque bouton a une description vocale.", "The site works with TalkBack (Android), VoiceOver (iPhone) and NVDA. Every button has a spoken label."],
    reset: ["إعادة الضبط", "Réinitialiser", "Reset"],
    deaf: ["الصم وضعاف السمع", "Personnes sourdes ou malentendantes", "Deaf and hard of hearing"],
    deafD: ["تقدر تكتب للمساعد بدل المكالمة، وتبعث رسالة SMS أو واتساب استغاثة من زر SOS لشخص ثقة.", "Écrivez à l'assistant au lieu d'appeler, et envoyez une alerte SMS/WhatsApp depuis le bouton SOS.", "Write to the assistant instead of calling, and send an SMS/WhatsApp alert from the SOS button."]
  };
  const g = k => tx[k][L] || tx[k][0];
  const keys = [["Alt + S", ["فتح الطوارئ SOS", "Ouvrir SOS", "Open SOS"]], ["Alt + V", ["المساعد بالصوت", "Assistant vocal", "Voice assistant"]], ["Alt + A", ["المساعد الذكي", "Assistant IA", "AI assistant"]], ["Alt + R", ["قراءة الصفحة", "Lire la page", "Read page"]], ["Alt + / -", ["تكبير وتصغير النص", "Agrandir / réduire", "Bigger / smaller text"]], ["Esc", ["إيقاف الصوت وإغلاق النوافذ", "Arrêter la voix / fermer", "Stop voice / close"]]];
  const rate = window.amanA11y.rate || 0.95;
  return `<section class="a11y-page">
    <div class="a11y-hero">${svgIcon("access", "ic", 40)}<div><h2>${t("access")}</h2><p>${g("intro")}</p></div></div>

    <a href="#ai" class="a11y-voice-cta" onclick="setTimeout(()=>amanVoiceStart(),350)">
      <span class="a11y-voice-ic">${svgIcon("mic", "ic", 30)}</span>
      <span><b>${g("voiceAi")}</b><small>${g("voiceAiD")}</small></span>
    </a>

    <div style="margin-top:10px">${amanReplyLangSelect("acc-reply-lang")}</div>
    <h3>${svgIcon("volume", "ic", 20)} ${g("listen")}</h3>
    <div class="a11y-row">
      <button type="button" class="btn d" onclick="amanReadPage()">${svgIcon("play", "ic", 18)} ${g("readPage")}</button>
      <button type="button" class="btn o" onclick="amanStopSpeech()">${svgIcon("stop", "ic", 18)} ${g("stop")}</button>
      <label class="a11y-rate">${g("rate")} <input type="range" min="0.6" max="1.4" step="0.1" value="${rate}" oninput="amanA11y.rate=+this.value;amanApplyA11y()" aria-label="${g("rate")}"></label>
    </div>

    <h3>${svgIcon("textSize", "ic", 20)} ${g("size")}</h3>
    <div class="a11y-row a11y-size">
      <button type="button" class="btn o" onclick="amanA11ySize(-1)" aria-label="${g("size")} -">A−</button>
      <output id="a11y-size-val" aria-live="polite">${window.amanA11y.size || 100}%</output>
      <button type="button" class="btn o" onclick="amanA11ySize(1)" aria-label="${g("size")} +">A+</button>
    </div>

    <h3>${svgIcon("eye", "ic", 20)} ${g("display")}</h3>
    <div class="a11y-grid">
      ${A11Y_OPTS.map(o => `<button type="button" class="a11y-opt${window.amanA11y[o.k] ? " on" : ""}" data-a11y="${o.k}" aria-pressed="${!!window.amanA11y[o.k]}" onclick="amanA11yToggle('${o.k}')">
        <span class="a11y-opt-ic">${svgIcon(o.ic, "ic", 24)}</span><span><b>${o.l[L]}</b><small>${o.d[L]}</small></span><span class="a11y-sw" aria-hidden="true"></span></button>`).join("")}
    </div>
    <p><button type="button" class="btn o" onclick="amanA11yReset()">${svgIcon("x", "ic", 16)} ${g("reset")}</button></p>

    <div class="grid">
      <div class="card"><h3>${svgIcon("ai", "ic", 20)} ${g("sr")}</h3><p>${g("srD")}</p></div>
      <div class="card"><h3>${svgIcon("fileText", "ic", 20)} ${g("deaf")}</h3><p>${g("deafD")}</p></div>
    </div>

    <h3>${svgIcon("keyboard", "ic", 20)} ${g("keys")}</h3>
    <table class="a11y-keys">${keys.map(k => `<tr><td><kbd>${k[0]}</kbd></td><td>${k[1][L]}</td></tr>`).join("")}</table>
  </section>`;
};

// Header accessibility button + skip link + landmarks
window.amanInjectA11yChrome = function() {
  const hdr = document.querySelector("header");
  if (hdr && !document.getElementById("a11y-hbtn")) {
    const b = document.createElement("a");
    b.id = "a11y-hbtn"; b.href = "#access"; b.className = "a11y-hbtn";
    b.innerHTML = svgIcon("access", "ic", 20);
    const lgEl = document.getElementById("lg"); lgEl.parentNode.insertBefore(b, lgEl);
  }
  const hb = document.getElementById("a11y-hbtn");
  if (hb) { hb.setAttribute("aria-label", t("access")); hb.title = t("access") + " (Alt+H)"; }
  if (!document.getElementById("skip-main")) {
    const s = document.createElement("a");
    s.id = "skip-main"; s.href = "#m"; s.className = "skip-link";
    s.onclick = e => { e.preventDefault(); const m = document.getElementById("m"); m.setAttribute("tabindex", "-1"); m.focus(); };
    document.body.insertBefore(s, document.body.firstChild);
  }
  document.getElementById("skip-main").textContent = ["تخطَّ إلى المحتوى", "Aller au contenu", "Skip to content"][L];
  const bn = document.getElementById("bn"); if (bn) bn.setAttribute("aria-label", ["التنقل السفلي", "Navigation", "Bottom navigation"][L]);
  document.querySelectorAll("img:not([alt])").forEach(i => i.alt = "");
  const lc = document.querySelector("header .lc"); if (lc) lc.alt = "AMAN";
};
amanApplyA11y();

// --- HANDS-FREE VOICE MODE FOR AMAN AI ---
const VOICE_TXT = {
  title: ["المحادثة بالصوت", "Conversation vocale", "Voice conversation"],
  idle: ["اضغط وتكلم", "Touchez et parlez", "Tap and speak"],
  listening: ["كنسمعك... تكلم بأي لهجة مغربية", "Je vous écoute... parlez dans votre langue", "Listening... speak in any language"],
  thinking: ["كنفكر فالجواب...", "Je réfléchis...", "Thinking..."],
  speaking: ["كنجاوبك... اضغط باش توقفني", "Je réponds... touchez pour m'interrompre", "Answering... tap to interrupt"],
  unsupported: ["متصفحك ما كيدعمش التعرف على الصوت. جرب Chrome أو Edge، أو استعمل ميكروفون لوحة المفاتيح ديال الهاتف.", "Votre navigateur ne gère pas la reconnaissance vocale. Essayez Chrome ou Edge, ou le micro du clavier.", "Your browser doesn't support speech recognition. Try Chrome or Edge, or your keyboard's microphone."],
  denied: ["خاصك تسمح بالميكروفون باش تخدم المحادثة بالصوت.", "Autorisez le micro pour utiliser la voix.", "Please allow microphone access to use voice."],
  nothing: ["ما سمعتش مزيان، عاود تكلم.", "Je n'ai pas bien entendu, réessayez.", "I didn't catch that, please try again."],
  end: ["إنهاء", "Terminer", "End"],
  you: ["قلتي:", "Vous :", "You:"],
  open: ["محادثة صوتية", "Mode vocal", "Voice mode"]
};
const vT = k => VOICE_TXT[k][L] || VOICE_TXT[k][0];
window.amanVoice = { on: false, state: "idle", rec: null };

function amanVoiceUI() {
  let o = document.getElementById("aman-voice");
  if (!o) {
    o = document.createElement("div");
    o.id = "aman-voice"; o.className = "voice-overlay a11y-noread";
    o.setAttribute("role", "dialog"); o.setAttribute("aria-modal", "true"); o.setAttribute("aria-labelledby", "voice-title");
    document.body.appendChild(o);
  }
  const st = window.amanVoice.state;
  const lbl = st === "listening" ? vT("listening") : st === "thinking" ? vT("thinking") : st === "speaking" ? vT("speaking") : vT("idle");
  const icon = st === "speaking" ? "volume" : st === "thinking" ? "ai" : "mic";
  o.innerHTML = `<div class="voice-sheet">
    <h2 id="voice-title">${svgIcon("mic", "ic", 22)} ${vT("title")}</h2>
    <button type="button" class="voice-orb ${st}" onclick="amanVoiceTap()" aria-label="${lbl}">${svgIcon(icon, "ic", 56)}</button>
    <p class="voice-state" aria-live="assertive">${lbl}</p>
    <div class="voice-lang">${amanReplyLangSelect("voice-reply-lang")}</div>
    <p class="voice-answer">${amanEsc(window.amanVoice.reply || "")}</p>
    <p class="voice-heard" id="voice-heard">${window.amanVoice.heard ? vT("you") + " " + amanEsc(window.amanVoice.heard) : ""}</p>
    <div class="voice-act">
      <button type="button" class="btn o" onclick="amanOpenSosModal()" style="border-color:var(--red);color:var(--red)">${svgIcon("sos", "ic", 18)} SOS</button>
      <button type="button" class="btn d" onclick="amanVoiceStop()">${svgIcon("x", "ic", 18)} ${vT("end")}</button>
    </div>
  </div>`;
  o.style.display = window.amanVoice.on ? "flex" : "none";
  if (window.amanVoice.on) { const orb = o.querySelector(".voice-orb"); if (orb && document.activeElement?.closest?.("#aman-voice") == null) orb.focus(); }
}
function amanVoiceSet(state, heard) {
  // Skip redraws when nothing changed, so screen readers are not re-announced on every silent restart.
  const o = document.getElementById("aman-voice");
  if (o && o.style.display === "flex" && window.amanVoice.on && window.amanVoice.state === state && (heard === undefined || heard === window.amanVoice.heard)) return;
  window.amanVoice.state = state;
  if (heard !== undefined) window.amanVoice.heard = heard;
  amanVoiceUI();
}
window.amanVoiceStart = function() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { amanAnnounce(vT("unsupported")); alert(vT("unsupported")); return; }
  if (window.amanVoice.on) return;
  if (window.amanSpeechRec) { try { window.amanSpeechRec.abort(); } catch (e) {} }
  if (window.amanVC?.on) amanVoiceControl();
  amanStopSpeech();
  window.amanVoice.on = true; window.amanVoice.reply = ""; window.amanVoice.heard = ""; window.amanVoice.silent = 0; window.amanVoice.errors = 0;
  if (window.amanAiLoading) amanVoiceSet("thinking"); else amanVoiceListen();
};
window.amanVoiceStop = function() {
  window.amanVoice.on = false;
  try { window.amanVoice.rec && window.amanVoice.rec.abort(); } catch (e) {}
  amanStopSpeech();
  amanVoiceSet("idle", "");
  const b = document.getElementById("ai-voice-btn"); if (b) b.focus();
};
window.amanVoiceTap = function() {
  const st = window.amanVoice.state;
  if (st === "speaking") { amanVoiceSet("idle"); amanStopSpeech(); amanVoiceListen(); }
  else if (st === "listening") { try { window.amanVoice.rec.stop(); } catch (e) {} }
  else if (st === "idle") amanVoiceListen();
};
function amanVoiceListen() {
  if (!window.amanVoice.on) return;
  if (window.amanAiLoading) { amanVoiceSet("thinking"); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SR();
  window.amanVoice.rec = rec;
  // Recognition needs a starting language; replies are still auto-detected
  const last = (window.amanAiHistory || []).filter(m => m.role === "user").slice(-1)[0];
  rec.lang = (window.amanRecLang && amanRecLang()) || amanReplyLangObj().sr || (last ? amanDetectLang(last.content) : (["ar-MA", "fr-FR", "en-US"][L] || "ar-MA"));
  rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
  let finalText = "", gotAny = false;
  rec.onstart = () => amanVoiceSet("listening");
  rec.onresult = e => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) finalText += r[0].transcript; else interim += r[0].transcript;
    }
    gotAny = true;
    const h = document.getElementById("voice-heard");
    if (h) h.textContent = vT("you") + " " + (finalText + interim);
  };
  let hardError = false;
  rec.onerror = e => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") { hardError = true; amanVoiceStop(); alert(vT("denied")); }
    else if (e.error !== "no-speech" && e.error !== "aborted") window.amanVoice.errors = (window.amanVoice.errors || 0) + 1;
  };
  rec.onend = () => {
    if (!window.amanVoice.on || hardError || window.amanVoice.rec !== rec || window.amanVoice.state !== "listening") return;
    const text = finalText.trim();
    if (!text) {
      // Hands-free: no tap needed, keep listening until the person speaks or ends the conversation.
      window.amanVoice.silent = (window.amanVoice.silent || 0) + 1;
      if ((window.amanVoice.errors || 0) >= 3 || window.amanVoice.silent > 24) { window.amanVoice.errors = 0; window.amanVoice.silent = 0; amanVoiceSet("idle"); amanSay(vT("nothing")); return; }
      setTimeout(() => { if (window.amanVoice.on && window.amanVoice.state === "listening" && window.amanVoice.rec === rec) amanVoiceListen(); }, 250 + 400 * (window.amanVoice.errors || 0));
      return;
    }
    window.amanVoice.silent = 0; window.amanVoice.errors = 0;
    amanVoiceSet("thinking", text);
    amanSendAiQuery(text);
  };
  amanVoiceSet("listening");
  try { rec.start(); } catch (e) { amanVoiceSet("idle"); }
}
// Called by amanSendAiQuery when a reply (or error) arrives
window.amanOnAiReply = function(reply) {
  if (!window.amanVoice.on) return;
  try { window.amanVoice.rec?.abort(); } catch (e) {}
  window.amanVoice.reply = reply;
  amanVoiceSet("speaking");
  amanSay(reply, () => { if (window.amanVoice.on && window.amanVoice.state === "speaking") amanVoiceListen(); });
};

// Draw account or AI page while leaving existing routes and look intact.
const amanBaseDraw=window.draw;window.draw=function(){
  if(typeof route==='function'&&route()==='account'){
    chrome();
    amanRenderAccount();
    scrollTo(0,0);
    return;
  }
  amanBaseDraw();
  if(typeof amanRenderOverlays==='function')amanRenderOverlays();
  amanInjectA11yChrome();
  if(typeof route==='function'&&route()==='dir')amanLoadDirectory();
  if(typeof route==='function'&&route()==='ai')amanInitAi();
};
window.addEventListener('hashchange',()=>{
  amanRenderOverlays();
  amanInjectA11yChrome();
  if(window.amanVoice&&window.amanVoice.on&&route()!=='ai')amanVoiceStop();
  if(route()==='account')amanRenderAccount();
  if(route()==='ai')amanInitAi();
});
window.addEventListener('DOMContentLoaded',()=>{
  window.draw();
});
