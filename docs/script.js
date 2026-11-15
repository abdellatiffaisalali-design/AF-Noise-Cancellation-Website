const translations = {
  ar: {
    dir: 'rtl', navFeatures: 'المزايا', navHow: 'طريقة العمل', navStory: 'قصة المشروع',
    eyebrow: 'صوتك، أوضح من أي وقت', headline: 'خلّي صوتك<br><em>هو اللي يتسمع.</em>',
    lead: 'إلغاء ضوضاء الميكروفون ومعالجة صوت فورية على جهازك. صوت أنقى لمكالماتك، من غير ما صوتك يغادر جهازك.',
    download: 'حمّل لنظام Windows', explore: 'اكتشف المزايا', windows: 'Windows 10 / 11', private: 'معالجة محلية وخاصة',
    live: 'معالجة مباشرة', noiseIn: 'ضوضاء الخلفية', localEngine: 'محرك تنقية محلي', clearOut: 'صوت أوضح', toCall: 'إلى مكالمتك',
    privateTag: 'صوتك يظل عندك', scroll: 'اكتشف المزيد', builtOn: 'مصمم حول', poweredBy: 'معالجة صوت فورية', forWindows: 'لـ Windows',
    featuresEyebrow: 'صوت أفضل، ببساطة', featuresTitle: 'كل اللي تحتاجه.<br><em>من غير تعقيد.</em>',
    featuresLead: 'أدوات عملية تخلي صوت الميكروفون أنقى وتديك تحكمًا كاملًا في مسار الصوت.',
    f1title: 'تنقية ذكية مع RNNoise', f1text: 'يقلل ضجيج الخلفية غير المرغوب فيه، علشان صوتك يفضل واضحًا أثناء المكالمات.',
    f2title: 'جاهز للمكالمات', f2text: 'وجّه الصوت المنقّى إلى VB-CABLE ليكون ميكروفونك في Zoom وTeams وDiscord.',
    f3title: 'صوتك يظل على جهازك', f3text: 'المعالجة محلية بالكامل. لا يتم رفع صوت الميكروفون إلى أي خادم.', onDevice: 'على جهازك فقط',
    f4title: 'تحكم يناسبك', f4text: 'اختَر الأجهزة واضبط مستوى الصوت وفلتر الطنين وراقب مستويات الإشارة.',
    howEyebrow: 'ابدأ في دقائق', howTitle: 'إعداد بسيط.<br><em>صوت أنقى.</em>',
    howLead: 'ثبّت VB-CABLE، ثم اختَر الميكروفون والمخرج المناسبين. كده صوتك المعالج جاهز لمكالمتك التالية.',
    getApp: 'احصل على التطبيق', step1: 'ثبّت VB-CABLE',
    step1text: 'نزّل وثبّت VB-Audio Virtual Cable. التطبيق يحتاجه لتوجيه الصوت إلى برامج المكالمات.',
    getVBCable: 'تحميل VB-CABLE من الموقع الرسمي', step2: 'اختَر الأجهزة',
    step2text: 'حدّد ميكروفونك الحقيقي، ثم اختر CABLE Input كمخرج للصوت المعالج.', step3: 'ابدأ وتحدّث',
    step3text: 'شغّل المعالجة، ثم اختر CABLE Output كميكروفون داخل برنامج المكالمة.',
    storyEyebrow: 'من واقع تجربة العمل', storyTitle: 'مشكلة متكررة.<br><em>وحلّ على أرض الواقع.</em>',
    storyLead: 'بدأت الحكاية من احتياج حقيقي في عملي بمجال ضمان الجودة، وتحولت خطوة بخطوة إلى أداة يستخدمها الفريق يوميًا.',
    storyStat: 'جهازًا داخل الشركة', storyProblemTitle: 'المشكلة في أرض الواقع',
    storyProblem: 'أثناء عملي في ضمان الجودة، كانت ضوضاء الـ Floor — من أحاديث الموظفين إلى المراوح — تؤثر على وضوح المكالمات ودقة تقييمها.',
    storySearchTitle: 'البحث عن حل مناسب',
    storySearch: 'بحثت عن أدوات مثل NVIDIA Broadcast وKrisp، لكنني احتجت إلى حل أبسط وخفيف ومتاح للجميع، من دون اشتراك أو متطلبات عتاد قوية.',
    storyBuildTitle: 'من فكرة إلى تطبيق',
    storyBuild: 'طوّرت AF Noise Cancellation لويندوز: تنقية فورية بـ RNNoise على المعالج العادي، ومعالجة محلية تحافظ على خصوصية الصوت، وتحكم بسيط بمستوى الصوت وفلتر اختياري للطنين.',
    storyImpactTitle: 'تجربة حقيقية ومستمرّة',
    storyImpact: 'يعمل التطبيق مع Zoom وMicrosoft Teams وDiscord عبر VB-CABLE، وانتقل من التطوير والتجربة إلى الاستخدام الفعلي على أكثر من 20 جهازًا داخل الشركة. وما زالت هناك أفكار وتطويرات قادمة بإذن الله.',
    storySignoff: 'AF Noise Cancellation · تطبيق Windows لسطح المكتب · تطوير Abdellatif Faisal',
    downloadEyebrow: 'جاهز لصوت أوضح؟', downloadTitle: 'صوت أنقى،<br><em>يبدأ من هنا.</em>',
    downloadLead: 'حمّل التطبيق لويندوز وابدأ في تحسين صوت مكالماتك.', version: 'Windows 10 / 11 · 64-bit · الإصدار 1.0.0',
    downloadNote: 'مجاني بالكامل، بلا اشتراكات، ومعالجة الصوت تتم على جهازك.', footer: 'صوتك. واضح. وعلى جهازك.'
  },
  en: {
    dir: 'ltr', navFeatures: 'Features', navHow: 'How it works', navStory: 'Our story',
    eyebrow: 'YOUR VOICE, WITHOUT THE NOISE', headline: 'Let your voice<br><em>be heard clearly.</em>',
    lead: 'Real-time microphone noise cancellation, processed right on your device. Sound clearer on every call, without your voice leaving your computer.',
    download: 'Download for Windows', explore: 'Explore features', windows: 'Windows 10 / 11', private: 'Private, on-device processing',
    live: 'LIVE PROCESSING', noiseIn: 'BACKGROUND NOISE', localEngine: 'On-device noise reduction', clearOut: 'CLEANER VOICE',
    toCall: 'TO YOUR CALL', privateTag: 'Your voice stays yours', scroll: 'Scroll to explore', builtOn: 'BUILT AROUND',
    poweredBy: 'Real-time audio processing', forWindows: 'FOR WINDOWS', featuresEyebrow: 'BETTER AUDIO, MADE SIMPLE',
    featuresTitle: 'Everything you need.<br><em>Nothing you don’t.</em>',
    featuresLead: 'Practical tools to clean up your microphone and give you control over your audio path.',
    f1title: 'Smart cleanup with RNNoise', f1text: 'Reduce unwanted background noise so your voice stays clear during calls.',
    f2title: 'Ready for your calls', f2text: 'Route cleaned audio through VB-CABLE as your mic in Zoom, Teams, Discord, and more.',
    f3title: 'Your voice stays on device', f3text: 'All processing happens locally. Microphone audio is never uploaded to a server.',
    onDevice: 'ON YOUR DEVICE ONLY', f4title: 'Controls that fit your setup',
    f4text: 'Choose your devices, tune audio levels, filter hum, and monitor your signal.',
    howEyebrow: 'UP AND RUNNING IN MINUTES', howTitle: 'Simple setup.<br><em>Clearer calls.</em>',
    howLead: 'Install VB-CABLE, then choose your microphone and output. Your processed audio is ready for your next call.',
    getApp: 'Get the app', step1: 'Install VB-CABLE',
    step1text: 'Download and install VB-Audio Virtual Cable. The app uses it to route audio into calling apps.',
    getVBCable: 'Download VB-CABLE from the official site', step2: 'Choose your devices',
    step2text: 'Select your real microphone, then choose CABLE Input as the processed audio output.',
    step3: 'Start and speak', step3text: 'Start processing, then choose CABLE Output as your microphone in your calling app.',
    storyEyebrow: 'A solution shaped by real work', storyTitle: 'A recurring problem.<br><em>A practical solution.</em>',
    storyLead: 'The project began with a real need in my Quality Assurance work and gradually became a tool the team uses every day.',
    storyStat: 'devices in the company', storyProblemTitle: 'The problem on the floor',
    storyProblem: 'In my Quality Assurance role, floor noise—from colleagues talking to nearby fans—made calls harder to hear and quality harder to assess.',
    storySearchTitle: 'Looking for the right fit',
    storySearch: 'I explored tools such as NVIDIA Broadcast and Krisp, then set out to build something simpler, lightweight, and available to everyone without subscriptions or demanding hardware.',
    storyBuildTitle: 'From an idea to an app',
    storyBuild: 'AF Noise Cancellation for Windows uses RNNoise for real-time cleanup on a regular CPU. Audio stays on the device, with simple level controls and an optional hum filter.',
    storyImpactTitle: 'In real use, and still improving',
    storyImpact: 'With VB-CABLE, the app works with Zoom, Microsoft Teams, and Discord. It has moved beyond development and trials into active use on more than 20 company devices, with more improvements planned.',
    storySignoff: 'AF Noise Cancellation · Windows desktop application · Developed by Abdellatif Faisal',
    downloadEyebrow: 'READY FOR CLEARER CALLS?', downloadTitle: 'Cleaner audio<br><em>starts here.</em>',
    downloadLead: 'Download the Windows app and improve the sound on your calls.', version: 'Windows 10 / 11 · 64-bit · Version 1.0.0',
    downloadNote: 'Completely free, with no subscriptions. Audio is processed on your device.', footer: 'Your voice. Clear. On your device.'
  }
};

let lang = localStorage.getItem('af-lang') || 'ar';
function render() {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.querySelectorAll('[data-i]').forEach((element) => {
    const value = t[element.dataset.i];
    if (value) element.innerHTML = value;
  });
  document.querySelector('#lang').innerHTML = lang === 'ar' ? 'EN <span>↗</span>' : 'عربي <span>↗</span>';
}

document.querySelector('#lang').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('af-lang', lang);
  render();
});
render();
document.querySelector('#year').textContent = new Date().getFullYear();

const downloadUrl = window.AF_DOWNLOAD_URL;
if (downloadUrl) {
  document.querySelectorAll('.download').forEach((link) => {
    link.href = downloadUrl;
    link.setAttribute('download', 'AF.Noise.Cancellation.Setup.exe');
  });
}

