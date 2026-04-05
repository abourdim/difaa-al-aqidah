/* دفاع عن العقيدة والشريعة — DEFENSE OF CREED AGAINST ORIENTALISTS — app.js v2.0 */
/* Based on "Difaa an al-Aqidah wal-Shariah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'دفاع عن العقيدة',
    splashSub: 'ضد مطاعن المستشرقين',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجر ١٥: ٩',
    tabHome: 'الرئيسية', tabTraits: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'بطاقات الدفاع',
    traitsDesc: '٢٠ بطاقة في الدفاع عن العقيدة والشريعة ضد الشبهات — من كتاب الشيخ محمد الغزالي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك في الرد على الشبهات — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلة العلم',
    progressDesc: 'تقدمك وإنجازاتك في فهم الدفاع عن العقيدة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية طالب العلم',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة في الدفاع عن العقيدة والشريعة',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Defense of the Creed',
    splashSub: 'Against Orientalist attacks on Islam',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hijr 15:9',
    tabHome: 'Home', tabTraits: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Defense Cards',
    traitsDesc: '20 cards defending the creed and Shariah against doubts — from Sheikh al-Ghazali\'s book',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge in responding to doubts — 4 choices per question',
    progressTitle: 'Knowledge Journey',
    progressDesc: 'Your progress and achievements in understanding the defense of the creed',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the Knowledge Seeker',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards defending the creed and Shariah',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Défense de la Croyance',
    splashSub: "Contre les attaques orientalistes sur l'Islam",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hijr 15:9',
    tabHome: 'Accueil', tabTraits: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    traitsTitle: 'Cartes de Défense',
    traitsDesc: "20 cartes défendant la croyance et la Charia contre les doutes — du livre du Sheikh al-Ghazali",
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances en réponse aux doutes — 4 choix par question',
    progressTitle: 'Parcours du Savoir',
    progressDesc: 'Vos progrès et réalisations dans la compréhension de la défense de la croyance',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas du Chercheur de Savoir',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cartes défendant la croyance et la Charia',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 DEFENSE CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'📖',
    ar:{title:'حفظ القرآن',desc:'يدافع الغزالي في هذا الكتاب عن العقيدة والشريعة ضد هجمات المستشرقين. يثبت حفظ القرآن بأدلة عقلية ونقلية. لا يوجد كتاب في التاريخ حُفظ كما حُفظ القرآن — بالكتابة والحفظ في الصدور معاً. المستشرقون فشلوا في إثبات أي تحريف.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'احفظ آية جديدة اليوم وتأمل معانيها واشرحها لغيرك',young:'القرآن محفوظ منذ ١٤٠٠ سنة! احفظ آية جديدة كل يوم 📖'},
    en:{title:'Quran Preservation',desc:'Al-Ghazali defends in this book: The Holy Quran is preserved by Allah\'s promise from any distortion or alteration. No book in history has been preserved as the Quran has been through writing and memorization. Orientalists have failed to prove any corruption.',verse:'Indeed, it is We who sent down the reminder and indeed, We will be its guardian',verseRef:'Al-Hijr 9',hadith:'The best of you are those who learn the Quran and teach it — Bukhari',action:'Memorize a new verse today, reflect on its meanings, and explain it to others',young:'The Quran has been preserved for 1400 years! Memorize a new verse every day 📖'},
    fr:{title:'La Préservation du Coran',desc:"Le Saint Coran est préservé par la promesse d'Allah de toute distorsion ou altération. Aucun livre dans l'histoire n'a été préservé comme le Coran par l'écriture et la mémorisation. Les orientalistes ont échoué à prouver toute corruption.",verse:'C\'est Nous qui avons fait descendre le rappel et c\'est Nous qui en sommes les gardiens',verseRef:'Al-Hijr 9',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:"Mémorisez un nouveau verset aujourd'hui, réfléchissez à ses sens et expliquez-le aux autres",young:"Le Coran est préservé depuis 1400 ans ! Mémorise un nouveau verset chaque jour 📖"}
  },
  {
    id:2, emoji:'🔬',
    ar:{title:'الإسلام والعلم',desc:'يدافع الغزالي في هذا الكتاب: الإسلام دين يحث على العلم والبحث والتجريب. القرآن مليء بآيات تدعو إلى التفكر والنظر في الكون. الحضارة الإسلامية كانت رائدة في العلوم لقرون.',verse:'قُلْ سِيرُوا فِي الْأَرْضِ فَانْظُرُوا كَيْفَ بَدَأَ الْخَلْقَ',verseRef:'العنكبوت ٢٠',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'اقرأ عن عالم مسلم قدم اكتشافاً علمياً عظيماً وشاركه مع أصدقائك',young:'المسلمون كانوا رواد العلم! تعرّف على علماء مسلمين عظام 🔬'},
    en:{title:'Islam and Science',desc:'Al-Ghazali defends in this book: Islam is a religion that encourages knowledge, research, and experimentation. The Quran is filled with verses calling for reflection and observation of the universe. Islamic civilization pioneered sciences for centuries.',verse:'Say: Travel through the land and observe how He began creation',verseRef:'Al-Ankabut 20',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Read about a Muslim scientist who made a great scientific discovery and share it with friends',young:'Muslims were pioneers of science! Learn about great Muslim scientists 🔬'},
    fr:{title:"L\'Islam et la Science",desc:"L'Islam est une religion qui encourage le savoir, la recherche et l'expérimentation. Le Coran est rempli de versets appelant à la réflexion et l'observation de l'univers. La civilisation islamique a été pionnière dans les sciences pendant des siècles.",verse:'Dis : Parcourez la terre et voyez comment Il a commencé la création',verseRef:'Al-Ankabut 20',hadith:'Quiconque emprunte un chemin cherchant le savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:"Lisez sur un scientifique musulman qui a fait une grande découverte et partagez-le avec vos amis",young:"Les musulmans étaient des pionniers de la science ! Apprends sur de grands scientifiques musulmans 🔬"}
  },
  {
    id:3, emoji:'⚖️',
    ar:{title:'عدالة الشريعة',desc:'يدافع الغزالي في هذا الكتاب: الشريعة الإسلامية جاءت لتحقيق العدل بين الناس جميعاً بلا تمييز. أحكامها مبنية على الحكمة والمصلحة. المستشرقون يجتزئون النصوص ليشوهوا صورة الشريعة.',verse:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',verseRef:'النحل ٩٠',hadith:'اتقوا الظلم فإن الظلم ظلمات يوم القيامة — رواه مسلم',action:'تعلم حكماً شرعياً اليوم وافهم الحكمة من ورائه قبل أن تحكم عليه',young:'الشريعة عادلة! تعرّف على حكمة من أحكام الإسلام الجميلة ⚖️'},
    en:{title:'Shariah Justice',desc:'Al-Ghazali defends in this book: Islamic Shariah came to achieve justice among all people without discrimination. Its rulings are based on wisdom and public interest. Orientalists take texts out of context to distort the image of Shariah.',verse:'Indeed, Allah commands justice and excellence',verseRef:'An-Nahl 90',hadith:'Beware of injustice, for it will be darkness on the Day of Judgment — Muslim',action:'Learn a Shariah ruling today and understand the wisdom behind it before judging it',young:'Shariah is just! Learn about the wisdom of beautiful Islamic rulings ⚖️'},
    fr:{title:'La Justice de la Charia',desc:"La Charia islamique est venue pour réaliser la justice entre tous les gens sans discrimination. Ses jugements sont basés sur la sagesse et l'intérêt public. Les orientalistes sortent les textes de leur contexte pour déformer l'image de la Charia.",verse:'Allah ordonne la justice et la bienfaisance',verseRef:'An-Nahl 90',hadith:"Gardez-vous de l'injustice, car elle sera des ténèbres au Jour du Jugement — Muslim",action:"Apprenez un jugement de la Charia aujourd'hui et comprenez la sagesse derrière avant de le juger",young:"La Charia est juste ! Apprends la sagesse des beaux jugements islamiques ⚖️"}
  },
  {
    id:4, emoji:'📜',
    ar:{title:'الدفاع عن السنة',desc:'يدافع الغزالي في هذا الكتاب: السنة النبوية محفوظة بسلسلة الإسناد الفريدة التي لا مثيل لها في تاريخ البشرية. علماء الحديث وضعوا أدق المعايير لتصحيح الأحاديث وتضعيفها. الطعن في السنة جهل بمنهج المحدثين.',verse:'وَمَا يَنْطِقُ عَنِ الْهَوَى إِنْ هُوَ إِلَّا وَحْيٌ يُوحَى',verseRef:'النجم ٣-٤',hadith:'من كذب عليّ متعمداً فليتبوأ مقعده من النار — متفق عليه',action:'تعرف على علم مصطلح الحديث وكيف يصنف العلماء الأحاديث بين صحيح وضعيف',young:'السنة محفوظة بدقة عجيبة! تعلم كيف يتأكد العلماء من صحة الأحاديث 📜'},
    en:{title:'Defense of the Sunnah',desc:'Al-Ghazali defends in this book: The Prophetic Sunnah is preserved through the unique chain of narration system unmatched in human history. Hadith scholars established the most precise criteria for authenticating and weakening hadiths. Attacking the Sunnah shows ignorance of hadith methodology.',verse:'Nor does he speak from his own desire. It is nothing but revelation revealed',verseRef:'An-Najm 3-4',hadith:'Whoever deliberately lies about me, let him take his seat in Hellfire — Agreed upon',action:'Learn about the science of hadith terminology and how scholars classify hadiths as authentic or weak',young:'The Sunnah is preserved with amazing precision! Learn how scholars verify hadiths 📜'},
    fr:{title:'La Défense de la Sunnah',desc:"La Sunnah prophétique est préservée par le système unique de chaîne de narration sans équivalent dans l'histoire humaine. Les savants du hadith ont établi les critères les plus précis pour authentifier et affaiblir les hadiths. Attaquer la Sunnah montre l'ignorance de la méthodologie du hadith.",verse:'Et il ne prononce rien sous l\'effet de la passion. Ce n\'est rien d\'autre qu\'une révélation révélée',verseRef:'An-Najm 3-4',hadith:'Quiconque ment délibérément à mon sujet, qu\'il prenne sa place en Enfer — Unanimement reconnu',action:"Apprenez la science de la terminologie du hadith et comment les savants classifient les hadiths comme authentiques ou faibles",young:"La Sunnah est préservée avec une précision étonnante ! Apprends comment les savants vérifient les hadiths 📜"}
  },
  {
    id:5, emoji:'👩',
    ar:{title:'المرأة في الإسلام',desc:'يدافع الغزالي في هذا الكتاب: الإسلام كرّم المرأة وأعطاها حقوقاً لم تحصل عليها المرأة الغربية إلا في القرن العشرين. حق الملكية والتعليم والعمل والميراث مكفول منذ ١٤ قرناً. الشبهات حول المرأة مبنية على جهل بالنصوص.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',hadith:'استوصوا بالنساء خيراً — متفق عليه',action:'اقرأ عن حقوق المرأة في الإسلام وقارنها بما حصلت عليه المرأة في الغرب تاريخياً',young:'الإسلام يكرم المرأة! تعرّف على حقوق المرأة العظيمة في الإسلام 👩'},
    en:{title:'Women in Islam',desc:'Al-Ghazali defends in this book: Islam honored women and gave them rights that Western women did not obtain until the 20th century. The right to property, education, work, and inheritance has been guaranteed for 14 centuries. Doubts about women are based on ignorance of the texts.',verse:'And they have rights similar to those over them in kindness',verseRef:'Al-Baqarah 228',hadith:'Treat women well — Agreed upon',action:'Read about women\'s rights in Islam and compare them historically with what Western women obtained',young:'Islam honors women! Learn about the great rights of women in Islam 👩'},
    fr:{title:"La Femme en Islam",desc:"L\'Islam a honoré la femme et lui a donné des droits que la femme occidentale n'a obtenus qu'au XXe siècle. Le droit à la propriété, l'éducation, le travail et l'héritage est garanti depuis 14 siècles. Les doutes sur la femme sont basés sur l'ignorance des textes.",verse:'Et elles ont des droits semblables à ceux qui pèsent sur elles selon l\'usage',verseRef:'Al-Baqarah 228',hadith:'Traitez bien les femmes — Unanimement reconnu',action:"Lisez sur les droits de la femme en Islam et comparez-les historiquement avec ce que les femmes occidentales ont obtenu",young:"L'Islam honore la femme ! Apprends les grands droits de la femme en Islam 👩"}
  },
  {
    id:6, emoji:'🕊️',
    ar:{title:'الجهاد في سياقه',desc:'يدافع الغزالي في هذا الكتاب: الجهاد في الإسلام ليس عدواناً بل دفاع عن النفس والحرية والمظلومين. القرآن يأمر بالعدل حتى مع الأعداء. المستشرقون يقدمون صورة مشوهة للجهاد بتجاهل سياقه وضوابطه.',verse:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',verseRef:'البقرة ١٩٠',hadith:'لا تقتلوا شيخاً فانياً ولا طفلاً ولا صغيراً ولا امرأة — رواه أبو داود',action:'تعلم ضوابط الجهاد في الإسلام واشرحها لمن يسأل عنها',young:'الجهاد دفاع عن الحق! تعرّف على قواعد الإسلام العادلة في الحرب 🕊️'},
    en:{title:'Jihad in Context',desc:'Al-Ghazali defends in this book: Jihad in Islam is not aggression but self-defense and protection of freedom and the oppressed. The Quran commands justice even with enemies. Orientalists present a distorted image of jihad by ignoring its context and rules.',verse:'And fight in the cause of Allah those who fight you but do not transgress',verseRef:'Al-Baqarah 190',hadith:'Do not kill an elderly person, a child, or a woman — Abu Dawud',action:'Learn the rules of jihad in Islam and explain them to those who ask about them',young:'Jihad is defense of truth! Learn about Islam\'s fair rules of warfare 🕊️'},
    fr:{title:'Le Jihad dans son Contexte',desc:"Le jihad en Islam n'est pas une agression mais une défense de soi et une protection de la liberté et des opprimés. Le Coran ordonne la justice même envers les ennemis. Les orientalistes présentent une image déformée du jihad en ignorant son contexte et ses règles.",verse:'Et combattez dans le sentier d\'Allah ceux qui vous combattent mais ne transgressez pas',verseRef:'Al-Baqarah 190',hadith:'Ne tuez pas un vieillard, un enfant, ni une femme — Abu Dawud',action:"Apprenez les règles du jihad en Islam et expliquez-les à ceux qui posent des questions",young:"Le jihad est la défense de la vérité ! Apprends les règles justes de l'Islam en temps de guerre 🕊️"}
  },
  {
    id:7, emoji:'🗽',
    ar:{title:'الحرية في الإسلام',desc:'الإسلام كفل حرية الاعتقاد والفكر والتعبير ضمن ضوابط الأخلاق والمصلحة العامة. لا إكراه في الدين مبدأ قرآني راسخ. الحرية في الإسلام مسؤولية لا فوضى.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'كلكم راع وكلكم مسؤول عن رعيته — متفق عليه',action:'تأمل في مفهوم الحرية في الإسلام وكيف يوازن بين حقوق الفرد وحقوق المجتمع',young:'الإسلام يحترم الحرية! تعرّف على كيف يحمي الإسلام حرية الجميع 🗽'},
    en:{title:'Freedom in Islam',desc:'Islam guaranteed freedom of belief, thought, and expression within the boundaries of ethics and public interest. No compulsion in religion is a firm Quranic principle. Freedom in Islam is responsibility, not chaos.',verse:'There is no compulsion in religion. The right path has become distinct from error',verseRef:'Al-Baqarah 256',hadith:'Each of you is a shepherd and each of you is responsible for their flock — Agreed upon',action:'Reflect on the concept of freedom in Islam and how it balances individual and community rights',young:'Islam respects freedom! Learn how Islam protects everyone\'s freedom 🗽'},
    fr:{title:"La Liberté en Islam",desc:"L'Islam a garanti la liberté de croyance, de pensée et d'expression dans les limites de l'éthique et de l'intérêt public. Nulle contrainte en religion est un principe coranique ferme. La liberté en Islam est une responsabilité, pas du chaos.",verse:'Nulle contrainte en religion. Le droit chemin s\'est distingué de l\'égarement',verseRef:'Al-Baqarah 256',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:"Réfléchissez au concept de liberté en Islam et comment il équilibre les droits individuels et communautaires",young:"L'Islam respecte la liberté ! Apprends comment l'Islam protège la liberté de tous 🗽"}
  },
  {
    id:8, emoji:'🏛️',
    ar:{title:'الحضارة الإسلامية',desc:'الحضارة الإسلامية أسست علوماً كالجبر والكيمياء والطب والفلك وانتشلت أوروبا من ظلمات العصور الوسطى. إنكار هذا الفضل تزوير للتاريخ.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',verseRef:'آل عمران ١١٠',hadith:'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه — رواه البيهقي',action:'اقرأ عن إنجاز حضاري إسلامي وشاركه على وسائل التواصل لتعريف الناس',young:'الحضارة الإسلامية عظيمة! تعرّف على اختراعات المسلمين الرائعة 🏛️'},
    en:{title:'Islamic Civilization',desc:'Islamic civilization established sciences like algebra, chemistry, medicine, and astronomy, and rescued Europe from the darkness of the Middle Ages. Denying this contribution is a falsification of history.',verse:'You are the best nation produced for mankind',verseRef:'Al Imran 110',hadith:'Allah loves that when one of you does work, they perfect it — Bayhaqi',action:'Read about an Islamic civilizational achievement and share it on social media to inform people',young:'Islamic civilization is great! Learn about amazing Muslim inventions 🏛️'},
    fr:{title:'La Civilisation Islamique',desc:"La civilisation islamique a établi des sciences comme l'algèbre, la chimie, la médecine et l'astronomie, et a tiré l'Europe des ténèbres du Moyen Âge. Nier cette contribution est une falsification de l'histoire.",verse:'Vous êtes la meilleure communauté suscitée pour les gens',verseRef:'Al Imran 110',hadith:'Allah aime que lorsque l\'un de vous fait un travail, il le perfectionne — Bayhaqi',action:"Lisez sur une réalisation civilisationnelle islamique et partagez-la sur les réseaux sociaux",young:"La civilisation islamique est grande ! Apprends les inventions incroyables des musulmans 🏛️"}
  },
  {
    id:9, emoji:'🔍',
    ar:{title:'المنهجية العلمية',desc:'المنهج الإسلامي في البحث والتحقيق أسبق من المنهج الغربي بقرون. علم الجرح والتعديل ومنهج التثبت في الأخبار أسسه المسلمون. المنهجية العلمية في الإسلام دقيقة وصارمة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'البينة على المدعي واليمين على من أنكر — رواه البيهقي',action:'طبق منهج التثبت الإسلامي: تحقق من أي معلومة قبل نشرها أو تصديقها',young:'تحقق دائماً من المعلومات! لا تصدق كل ما تسمعه بدون دليل 🔍'},
    en:{title:'Scientific Methodology',desc:'The Islamic methodology of research and verification preceded the Western one by centuries. The science of narrator criticism and the methodology of verifying news were established by Muslims. Scientific methodology in Islam is precise and rigorous.',verse:'O you who believe, if a sinful person comes to you with news, verify it',verseRef:'Al-Hujurat 6',hadith:'The burden of proof is on the claimant and the oath on the denier — Bayhaqi',action:'Apply the Islamic verification method: verify any information before sharing or believing it',young:'Always verify information! Do not believe everything you hear without evidence 🔍'},
    fr:{title:'La Méthodologie Scientifique',desc:"La méthodologie islamique de recherche et de vérification a précédé celle de l'Occident de plusieurs siècles. La science de la critique des narrateurs et la méthodologie de vérification des nouvelles ont été établies par les musulmans. La méthodologie scientifique en Islam est précise et rigoureuse.",verse:'Ô vous qui croyez, si un pervers vous apporte une nouvelle, vérifiez-la',verseRef:'Al-Hujurat 6',hadith:'La charge de la preuve incombe au demandeur et le serment à celui qui nie — Bayhaqi',action:"Appliquez la méthode de vérification islamique : vérifiez toute information avant de la partager ou de la croire",young:"Vérifie toujours les informations ! Ne crois pas tout ce que tu entends sans preuve 🔍"}
  },
  {
    id:10, emoji:'✨',
    ar:{title:'الإعجاز اللغوي',desc:'القرآن الكريم معجزة لغوية تحدى بها الله العرب أهل الفصاحة أن يأتوا بمثله. لم يستطع أحد على مر التاريخ أن يأتي بسورة واحدة مثله. البلاغة القرآنية فوق طاقة البشر.',verse:'قُلْ لَئِنِ اجْتَمَعَتِ الْإِنْسُ وَالْجِنُّ عَلَى أَنْ يَأْتُوا بِمِثْلِ هَذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'الإسراء ٨٨',hadith:'ما من الأنبياء نبي إلا أُعطي ما مثله آمن عليه البشر وإنما كان الذي أوتيته وحياً — متفق عليه',action:'تأمل في بلاغة آية من القرآن اليوم واكتشف جمالها اللغوي المعجز',young:'القرآن معجزة لغوية! اكتشف جمال كلمات الله المذهلة ✨'},
    en:{title:'The Linguistic Miracle',desc:'The Holy Quran is a linguistic miracle with which Allah challenged the Arabs, masters of eloquence, to produce anything like it. No one throughout history has been able to produce a single surah like it. Quranic eloquence is beyond human capacity.',verse:'Say: If mankind and jinn gathered together to produce the like of this Quran, they could not produce its like',verseRef:'Al-Isra 88',hadith:'Every prophet was given signs that made people believe, and what I was given is revelation — Agreed upon',action:'Reflect on the eloquence of a Quranic verse today and discover its miraculous linguistic beauty',young:'The Quran is a linguistic miracle! Discover the amazing beauty of Allah\'s words ✨'},
    fr:{title:'Le Miracle Linguistique',desc:"Le Saint Coran est un miracle linguistique avec lequel Allah a défié les Arabes, maîtres de l'éloquence, de produire quelque chose de semblable. Personne dans l'histoire n'a pu produire une seule sourate semblable. L'éloquence coranique dépasse la capacité humaine.",verse:'Dis : Si les hommes et les djinns s\'unissaient pour produire quelque chose de semblable à ce Coran, ils ne pourraient le produire',verseRef:'Al-Isra 88',hadith:'Chaque prophète a reçu des signes qui ont fait croire les gens, et ce que j\'ai reçu est une révélation — Unanimement reconnu',action:"Réfléchissez à l'éloquence d'un verset coranique aujourd'hui et découvrez sa beauté linguistique miraculeuse",young:"Le Coran est un miracle linguistique ! Découvre la beauté étonnante des paroles d'Allah ✨"}
  },
  {
    id:11, emoji:'🤝',
    ar:{title:'التسامح الإسلامي',desc:'التاريخ الإسلامي مليء بنماذج التسامح مع أهل الكتاب والأقليات. اليهود والمسيحيون عاشوا في ظل الحكم الإسلامي بأمان وحرية لقرون طويلة.',verse:'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُمْ مِنْ دِيَارِكُمْ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ',verseRef:'الممتحنة ٨',hadith:'من آذى ذمياً فأنا خصمه يوم القيامة — رواه أبو داود',action:'تعامل مع غير المسلمين اليوم بالعدل والإحسان وأظهر تسامح الإسلام',young:'الإسلام يحب السلام! كن لطيفاً وعادلاً مع الجميع 🤝'},
    en:{title:'Islamic Tolerance',desc:'Islamic history is filled with examples of tolerance toward People of the Book and minorities. Jews and Christians lived under Islamic rule in safety and freedom for many centuries.',verse:'Allah does not forbid you from being kind and just toward those who did not fight you for your religion',verseRef:'Al-Mumtahanah 8',hadith:'Whoever harms a dhimmi, I will be his opponent on the Day of Judgment — Abu Dawud',action:'Treat non-Muslims today with justice and kindness and show the tolerance of Islam',young:'Islam loves peace! Be kind and fair to everyone 🤝'},
    fr:{title:'La Tolérance Islamique',desc:"L'histoire islamique est remplie d'exemples de tolérance envers les Gens du Livre et les minorités. Juifs et chrétiens ont vécu sous le règne islamique en sécurité et liberté pendant de longs siècles.",verse:'Allah ne vous interdit pas d\'être bienveillants et justes envers ceux qui ne vous combattent pas pour votre religion',verseRef:'Al-Mumtahanah 8',hadith:'Quiconque nuit à un dhimmi, je serai son adversaire le Jour du Jugement — Abu Dawud',action:"Traitez les non-musulmans aujourd'hui avec justice et bonté et montrez la tolérance de l'Islam",young:"L\'Islam aime la paix ! Sois gentil et juste avec tout le monde 🤝"}
  },
  {
    id:12, emoji:'🌿',
    ar:{title:'البيئة في الإسلام',desc:'الإسلام سبق العالم في الحفاظ على البيئة. الشريعة تنظم استخدام الموارد الطبيعية وتمنع الإسراف والإفساد. مفهوم الاستخلاف يجعل الإنسان مسؤولاً عن الأرض.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'إذا قامت الساعة وفي يد أحدكم فسيلة فليغرسها — رواه أحمد',action:'قم بعمل بيئي إسلامي اليوم: ازرع شجرة أو حافظ على نظافة بيئتك',young:'الإسلام يحب البيئة! حافظ على نظافة الطبيعة وازرع شجرة 🌿'},
    en:{title:'Environment in Islam',desc:'Islam preceded the world in environmental conservation. Shariah regulates the use of natural resources and forbids waste and corruption. The concept of stewardship makes humans responsible for the earth.',verse:'And do not commit corruption on earth after its reformation',verseRef:'Al-Araf 56',hadith:'If the Hour comes and one of you has a seedling in hand, let them plant it — Ahmad',action:'Do an Islamic environmental act today: plant a tree or keep your environment clean',young:'Islam loves the environment! Keep nature clean and plant a tree 🌿'},
    fr:{title:"L'Environnement en Islam",desc:"L\'Islam a précédé le monde dans la conservation de l'environnement. La Charia réglemente l'utilisation des ressources naturelles et interdit le gaspillage et la corruption. Le concept d'intendance rend l'homme responsable de la terre.",verse:'Et ne commettez pas de corruption sur terre après sa réforme',verseRef:'Al-Araf 56',hadith:'Si l\'Heure arrive et que l\'un de vous a un plant en main, qu\'il le plante — Ahmad',action:"Faites un acte environnemental islamique aujourd'hui : plantez un arbre ou gardez votre environnement propre",young:"L'Islam aime l'environnement ! Garde la nature propre et plante un arbre 🌿"}
  },
  {
    id:13, emoji:'🧑‍⚖️',
    ar:{title:'حقوق الإنسان',desc:'الإسلام أسس حقوق الإنسان قبل الإعلان العالمي بأربعة عشر قرناً. خطبة حجة الوداع ميثاق حقوقي شامل. حق الحياة والكرامة والمساواة مكفول لكل إنسان.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء ٧٠',hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',action:'تعرف على حقوق الإنسان في الإسلام وقارنها مع المواثيق الدولية الحديثة',young:'الإسلام يكرم كل إنسان! تعرّف على حقوق الإنسان في ديننا العظيم 🧑‍⚖️'},
    en:{title:'Human Rights',desc:'Islam established human rights fourteen centuries before the Universal Declaration. The Farewell Sermon is a comprehensive charter of rights. The right to life, dignity, and equality is guaranteed for every human.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra 70',hadith:'No Arab has superiority over a non-Arab except through piety — Ahmad',action:'Learn about human rights in Islam and compare them with modern international charters',young:'Islam honors every human! Learn about human rights in our great religion 🧑‍⚖️'},
    fr:{title:"Les Droits de l'Homme",desc:"L\'Islam a établi les droits de l'homme quatorze siècles avant la Déclaration Universelle. Le Sermon d'Adieu est une charte complète des droits. Le droit à la vie, la dignité et l'égalité est garanti pour tout être humain.",verse:'Et Nous avons certes honoré les enfants d\'Adam',verseRef:'Al-Isra 70',hadith:"Aucun Arabe n'a de supériorité sur un non-Arabe sauf par la piété — Ahmad",action:"Apprenez les droits de l'homme en Islam et comparez-les avec les chartes internationales modernes",young:"L'Islam honore chaque être humain ! Apprends les droits de l'homme dans notre grande religion 🧑‍⚖️"}
  },
  {
    id:14, emoji:'🎨',
    ar:{title:'الفنون والجمال',desc:'الإسلام لا يعادي الفن والجمال بل يشجعهما ضمن ضوابط أخلاقية. الفن الإسلامي من أعظم الفنون في تاريخ البشرية: الخط والزخرفة والعمارة والشعر.',verse:'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ',verseRef:'حديث — رواه مسلم',hadith:'إن الله جميل يحب الجمال — رواه مسلم',action:'تأمل في جمال فن إسلامي اليوم: خط عربي أو زخرفة أو عمارة مسجد',young:'الإسلام يحب الجمال! اكتشف روائع الفن الإسلامي 🎨'},
    en:{title:'Arts and Beauty',desc:'Islam does not oppose art and beauty but encourages them within ethical guidelines. Islamic art is among the greatest in human history: calligraphy, ornamentation, architecture, and poetry.',verse:'Indeed, Allah is Beautiful and loves beauty',verseRef:'Hadith — Muslim',hadith:'Indeed, Allah is Beautiful and loves beauty — Muslim',action:'Admire the beauty of Islamic art today: Arabic calligraphy, ornamentation, or mosque architecture',young:'Islam loves beauty! Discover the wonders of Islamic art 🎨'},
    fr:{title:'Les Arts et la Beauté',desc:"L\'Islam ne s'oppose pas à l'art et la beauté mais les encourage dans des lignes directrices éthiques. L'art islamique est parmi les plus grands de l'histoire humaine : calligraphie, ornementation, architecture et poésie.",verse:'Allah est Beau et aime la beauté',verseRef:'Hadith — Muslim',hadith:'Allah est Beau et aime la beauté — Muslim',action:"Admirez la beauté de l'art islamique aujourd'hui : calligraphie arabe, ornementation ou architecture de mosquée",young:"L'Islam aime la beauté ! Découvre les merveilles de l'art islamique 🎨"}
  },
  {
    id:15, emoji:'🎯',
    ar:{title:'التحيز الأكاديمي',desc:'كثير من الدراسات الاستشراقية مبنية على تحيز مسبق وأجندات سياسية. المنهج العلمي الحقيقي يتطلب الموضوعية والإنصاف. يجب كشف هذا التحيز بالأدلة.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ',verseRef:'النساء ١٣٥',hadith:'قل الحق ولو كان مراً — رواه أحمد',action:'اقرأ نقداً علمياً لدراسة استشراقية وتعلم كيف تكشف التحيز الأكاديمي',young:'كن عادلاً وموضوعياً! لا تصدق كل ما يُقال بدون تحقق 🎯'},
    en:{title:'Academic Bias',desc:'Many Orientalist studies are built on pre-existing bias and political agendas. True scientific methodology requires objectivity and fairness. This bias must be exposed with evidence.',verse:'O you who believe, be persistently standing firm in justice',verseRef:'An-Nisa 135',hadith:'Speak the truth even if it is bitter — Ahmad',action:'Read a scholarly critique of an Orientalist study and learn how to detect academic bias',young:'Be fair and objective! Do not believe everything said without verification 🎯'},
    fr:{title:'Le Biais Académique',desc:"Beaucoup d'études orientalistes sont construites sur un biais préexistant et des agendas politiques. La vraie méthodologie scientifique exige l'objectivité et l'équité. Ce biais doit être exposé avec des preuves.",verse:'Ô vous qui croyez, soyez fermement établis dans la justice',verseRef:'An-Nisa 135',hadith:'Dites la vérité même si elle est amère — Ahmad',action:"Lisez une critique savante d'une étude orientaliste et apprenez à détecter le biais académique",young:"Sois juste et objectif ! Ne crois pas tout ce qui est dit sans vérification 🎯"}
  },
  {
    id:16, emoji:'🛡️',
    ar:{title:'الهجمات الحديثة',desc:'الهجمات الحديثة على الإسلام تأخذ أشكالاً جديدة: الإسلاموفوبيا الإعلامية والأفلام المسيئة والكتب المغرضة. المواجهة تكون بالعلم والحكمة والحوار لا بالعنف.',verse:'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ',verseRef:'فصلت ٣٤',hadith:'إن الله رفيق يحب الرفق في الأمر كله — متفق عليه',action:'رد على شبهة حديثة عن الإسلام بأسلوب علمي هادئ ومقنع',young:'واجه الأفكار الخاطئة بالعلم والحكمة! العلم أقوى سلاح 🛡️'},
    en:{title:'Modern Attacks',desc:'Modern attacks on Islam take new forms: media Islamophobia, offensive films, and biased books. The response must be through knowledge, wisdom, and dialogue, not violence.',verse:'Repel evil with that which is better, and thereupon the one with whom you had enmity will become a devoted friend',verseRef:'Fussilat 34',hadith:'Indeed, Allah is gentle and loves gentleness in all matters — Agreed upon',action:'Respond to a modern doubt about Islam in a calm, scholarly, and convincing manner',young:'Face wrong ideas with knowledge and wisdom! Knowledge is the strongest weapon 🛡️'},
    fr:{title:'Les Attaques Modernes',desc:"Les attaques modernes contre l'Islam prennent de nouvelles formes : l'islamophobie médiatique, les films offensants et les livres biaisés. La réponse doit passer par le savoir, la sagesse et le dialogue, pas par la violence.",verse:'Repousse le mal par ce qui est meilleur, et voilà que celui avec qui tu avais une inimitié devient un ami dévoué',verseRef:'Fussilat 34',hadith:'Allah est doux et aime la douceur en toute chose — Unanimement reconnu',action:"Répondez à un doute moderne sur l'Islam de manière calme, savante et convaincante",young:"Fais face aux fausses idées avec le savoir et la sagesse ! Le savoir est l'arme la plus forte 🛡️"}
  },
  {
    id:17, emoji:'💻',
    ar:{title:'التحديات الرقمية',desc:'العصر الرقمي يحمل تحديات جديدة: انتشار الشبهات بسرعة هائلة عبر الإنترنت. المسلمون يحتاجون محتوى رقمياً علمياً قوياً يرد على هذه الشبهات.',verse:'بَلْ نَقْذِفُ بِالْحَقِّ عَلَى الْبَاطِلِ فَيَدْمَغُهُ فَإِذَا هُوَ زَاهِقٌ',verseRef:'الأنبياء ١٨',hadith:'بلّغوا عني ولو آية — رواه البخاري',action:'أنشئ محتوى رقمياً يرد على شبهة شائعة عن الإسلام بأسلوب علمي',young:'استخدم الإنترنت لنشر الحق! رد على الأفكار الخاطئة بالعلم 💻'},
    en:{title:'Digital Challenges',desc:'The digital age brings new challenges: doubts spreading at enormous speed via the internet. Muslims need strong scholarly digital content to respond to these doubts.',verse:'Rather, We dash the truth upon falsehood, and it destroys it, and thereupon it departs',verseRef:'Al-Anbiya 18',hadith:'Convey from me even if it is a single verse — Bukhari',action:'Create digital content responding to a common doubt about Islam in a scholarly manner',young:'Use the internet to spread truth! Respond to wrong ideas with knowledge 💻'},
    fr:{title:'Les Défis Numériques',desc:"L'ère numérique apporte de nouveaux défis : les doutes se répandent à une vitesse énorme via internet. Les musulmans ont besoin d\'un contenu numérique savant et fort pour répondre à ces doutes.",verse:'Plutôt Nous lançons la vérité contre le faux et elle le détruit, et voilà qu\'il disparaît',verseRef:'Al-Anbiya 18',hadith:'Transmettez de moi ne serait-ce qu\'un verset — Bukhari',action:"Créez du contenu numérique répondant à un doute courant sur l'Islam de manière savante",young:"Utilise internet pour répandre la vérité ! Réponds aux fausses idées par le savoir 💻"}
  },
  {
    id:18, emoji:'🌟',
    ar:{title:'المساهمات الإيجابية',desc:'بدل الرد الدائم على الشبهات، يجب إبراز المساهمات الإيجابية للإسلام في العالم. الإسلام أثرى الحضارة الإنسانية في كل المجالات. العمل الإيجابي أبلغ من الرد الدفاعي.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الدال على الخير كفاعله — رواه مسلم',action:'اكتب عن مساهمة إيجابية للإسلام في الحضارة الإنسانية وشاركها',young:'الإسلام أثرى العالم! شارك المساهمات الرائعة للمسلمين 🌟'},
    en:{title:'Positive Contributions',desc:'Instead of constantly responding to doubts, we should highlight the positive contributions of Islam to the world. Islam has enriched human civilization in every field. Positive action is more eloquent than defensive responses.',verse:'And We have not sent you except as a mercy to the worlds',verseRef:'Al-Anbiya 107',hadith:'The one who guides to good is like the one who does it — Muslim',action:'Write about a positive contribution of Islam to human civilization and share it',young:'Islam enriched the world! Share the amazing contributions of Muslims 🌟'},
    fr:{title:'Les Contributions Positives',desc:"Au lieu de répondre constamment aux doutes, nous devrions mettre en avant les contributions positives de l'Islam au monde. L'Islam a enrichi la civilisation humaine dans tous les domaines. L'action positive est plus éloquente que les réponses défensives.",verse:"Et Nous ne t'avons envoyé qu'en miséricorde pour les mondes",verseRef:'Al-Anbiya 107',hadith:'Celui qui guide vers le bien est comme celui qui le fait — Muslim',action:"Écrivez sur une contribution positive de l'Islam à la civilisation humaine et partagez-la",young:"L\'Islam a enrichi le monde ! Partage les contributions étonnantes des musulmans 🌟"}
  },
  {
    id:19, emoji:'📋',
    ar:{title:'منهج الرد على الشبهات',desc:'الرد على الشبهات يحتاج منهجاً علمياً: فهم الشبهة أولاً، ثم البحث في مصادرها، ثم الرد بالدليل القرآني والعلمي والتاريخي. الهدوء والعلم أقوى من الانفعال.',verse:'وَجَادِلْهُمْ بِالَّتِي هِيَ أَحْسَنُ',verseRef:'النحل ١٢٥',hadith:'ما كان الرفق في شيء إلا زانه وما نُزع من شيء إلا شانه — رواه مسلم',action:'تدرب على الرد على شبهة بأسلوب علمي منهجي: حدد الشبهة، ابحث، ثم أجب بدليل',young:'تعلم كيف ترد بالعلم! افهم السؤال أولاً ثم أجب بهدوء ودليل 📋'},
    en:{title:'Methodology of Responding',desc:'Responding to doubts needs a scholarly methodology: understand the doubt first, then research its sources, then respond with Quranic, scientific, and historical evidence. Calmness and knowledge are stronger than emotion.',verse:'And argue with them in a way that is best',verseRef:'An-Nahl 125',hadith:'Gentleness adorns everything it touches and its absence disfigures everything — Muslim',action:'Practice responding to a doubt in a systematic scholarly manner: identify the doubt, research, then answer with evidence',young:'Learn how to respond with knowledge! Understand the question first, then answer calmly with proof 📋'},
    fr:{title:'La Méthodologie de Réponse',desc:"Répondre aux doutes nécessite une méthodologie savante : comprendre le doute d'abord, puis rechercher ses sources, puis répondre avec des preuves coraniques, scientifiques et historiques. Le calme et le savoir sont plus forts que l'émotion.",verse:'Et discute avec eux de la meilleure façon',verseRef:'An-Nahl 125',hadith:'La douceur embellit tout ce qu\'elle touche et son absence enlaidit tout — Muslim',action:"Pratiquez la réponse à un doute de manière systématique et savante : identifiez le doute, recherchez, puis répondez avec des preuves",young:"Apprends à répondre par le savoir ! Comprends la question d'abord, puis réponds calmement avec des preuves 📋"}
  },
  {
    id:20, emoji:'📚',
    ar:{title:'بناء المعرفة',desc:'الدفاع عن الإسلام يبدأ بالعلم العميق. المسلم المثقف الواعي هو أفضل من يمثل الإسلام. بناء جيل متعلم قادر على الحوار والدفاع أولوية قصوى.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'رَبِّ زِدْنِي عِلْمًا — سورة طه ١١٤',action:'ضع خطة لتعلم علم إسلامي جديد هذا الشهر وابدأ اليوم بأول خطوة',young:'تعلم كل يوم! كلما زاد علمك زادت قوتك في الدفاع عن الحق 📚'},
    en:{title:'Building Knowledge',desc:'Defending Islam starts with deep knowledge. An educated and aware Muslim is the best representative of Islam. Building a learned generation capable of dialogue and defense is a top priority.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'My Lord, increase me in knowledge — Taha 114',action:'Create a plan to learn a new Islamic science this month and take the first step today',young:'Learn every day! The more you know, the stronger you are in defending truth 📚'},
    fr:{title:'Construire le Savoir',desc:"Défendre l'Islam commence par un savoir profond. Un musulman éduqué et conscient est le meilleur représentant de l'Islam. Construire une génération instruite capable de dialogue et de défense est une priorité absolue.",verse:'Dis : Sont-ils égaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Mon Seigneur, augmente-moi en savoir — Taha 114',action:"Créez un plan pour apprendre une nouvelle science islamique ce mois-ci et faites le premier pas aujourd'hui",young:"Apprends chaque jour ! Plus tu sais, plus tu es fort pour défendre la vérité 📚"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الآية التي تؤكد حفظ الله للقرآن من التحريف؟',opts:['البقرة ٢','الحجر ٩','يس ٢','الفاتحة ١'],correct:1,hint:'هذه الآية في سورة الحجر وتتحدث عن حفظ الذكر',quran:'الحجر ٩'},
    en:{q:'Which verse confirms Allah\'s preservation of the Quran from corruption?',opts:['Al-Baqarah 2','Al-Hijr 9','Ya-Sin 2','Al-Fatihah 1'],correct:1,hint:'This verse is in Surah Al-Hijr and talks about preserving the reminder',quran:'Al-Hijr 9'},
    fr:{q:'Quel verset confirme la préservation du Coran par Allah contre la corruption ?',opts:['Al-Baqarah 2','Al-Hijr 9','Ya-Sin 2','Al-Fatihah 1'],correct:1,hint:'Ce verset est dans la Sourate Al-Hijr et parle de la préservation du rappel',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'ما الآية التي تنفي الإكراه في الدين؟',opts:['البقرة ٢٥٦','آل عمران ١٩','الكافرون ٦','يونس ٩٩'],correct:0,hint:'هذه الآية من أشهر آيات الحرية الدينية في القرآن',quran:'البقرة ٢٥٦'},
    en:{q:'Which verse negates compulsion in religion?',opts:['Al-Baqarah 256','Al Imran 19','Al-Kafirun 6','Yunus 99'],correct:0,hint:'This is one of the most famous verses on religious freedom in the Quran',quran:'Al-Baqarah 256'},
    fr:{q:'Quel verset nie la contrainte en religion ?',opts:['Al-Baqarah 256','Al Imran 19','Al-Kafirun 6','Yunus 99'],correct:0,hint:'C\'est l\'un des versets les plus célèbres sur la liberté religieuse dans le Coran',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'ما العلم الذي أسسه المسلمون لحفظ الأحاديث النبوية؟',opts:['علم الفقه','علم التجويد','علم الجرح والتعديل','علم الكلام'],correct:2,hint:'هذا العلم يتعلق بتقييم رواة الحديث',quran:'النجم ٣-٤'},
    en:{q:'What science did Muslims establish to preserve Prophetic hadiths?',opts:['Jurisprudence','Tajweed','Narrator criticism','Theology'],correct:2,hint:'This science relates to evaluating hadith narrators',quran:'An-Najm 3-4'},
    fr:{q:'Quelle science les musulmans ont-ils établie pour préserver les hadiths prophétiques ?',opts:['La jurisprudence','Le Tajweed','La critique des narrateurs','La théologie'],correct:2,hint:'Cette science concerne l\'évaluation des narrateurs de hadiths',quran:'An-Najm 3-4'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَقَدْ كَرَّمْنَا ..."',opts:['المؤمنين','المسلمين','بني آدم','الأنبياء'],correct:2,hint:'هذه الآية تتحدث عن تكريم الله للبشر جميعاً',quran:'الإسراء ٧٠'},
    en:{q:'Complete the verse: "And We have certainly honored..."',opts:['The believers','The Muslims','The children of Adam','The prophets'],correct:2,hint:'This verse talks about Allah honoring all humans',quran:'Al-Isra 70'},
    fr:{q:'Complétez le verset : « Et Nous avons certes honoré... »',opts:['Les croyants','Les musulmans','Les enfants d\'Adam','Les prophètes'],correct:2,hint:'Ce verset parle de l\'honneur accordé par Allah à tous les humains',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'من مؤلف كتاب "دفاع عن العقيدة والشريعة"؟',opts:['سيد قطب','محمد الغزالي','ابن تيمية','القرضاوي'],correct:1,hint:'هذا العالم المصري لُقب بأديب الدعوة',quran:'الحجر ٩'},
    en:{q:'Who is the author of "Defense of the Creed and Shariah"?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Ibn Taymiyyah','Al-Qaradawi'],correct:1,hint:'This Egyptian scholar was nicknamed "The Literary Preacher"',quran:'Al-Hijr 9'},
    fr:{q:'Qui est l\'auteur de « Défense de la Croyance et de la Charia » ?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Ibn Taymiyyah','Al-Qaradawi'],correct:1,hint:'Ce savant égyptien était surnommé « Le Littéraire de la Prédication »',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'ما الذي تحدى الله به البشر في القرآن؟',opts:['أن يخلقوا ذبابة','أن يأتوا بمثل القرآن','أن يعرفوا الغيب','أن يصعدوا السماء'],correct:1,hint:'هذا التحدي في سورة الإسراء',quran:'الإسراء ٨٨'},
    en:{q:'What did Allah challenge humans with in the Quran?',opts:['To create a fly','To produce something like the Quran','To know the unseen','To ascend to heaven'],correct:1,hint:'This challenge is in Surah Al-Isra',quran:'Al-Isra 88'},
    fr:{q:'Avec quoi Allah a-t-Il défié les humains dans le Coran ?',opts:['Créer une mouche','Produire quelque chose de semblable au Coran','Connaître l\'invisible','Monter au ciel'],correct:1,hint:'Ce défi est dans la Sourate Al-Isra',quran:'Al-Isra 88'}
  },
  {
    ar:{q:'ما الحديث الذي يحمي حقوق غير المسلمين في الدولة الإسلامية؟',opts:['بلغوا عني ولو آية','من آذى ذمياً فأنا خصمه','الدال على الخير كفاعله','إنما الأعمال بالنيات'],correct:1,hint:'هذا الحديث يحذر من الإساءة لغير المسلمين',quran:'الممتحنة ٨'},
    en:{q:'Which hadith protects the rights of non-Muslims in an Islamic state?',opts:['Convey from me even a verse','Whoever harms a dhimmi, I will be his opponent','The one who guides to good','Actions are by intentions'],correct:1,hint:'This hadith warns against mistreating non-Muslims',quran:'Al-Mumtahanah 8'},
    fr:{q:'Quel hadith protège les droits des non-musulmans dans un État islamique ?',opts:['Transmettez de moi un verset','Quiconque nuit à un dhimmi, je serai son adversaire','Celui qui guide vers le bien','Les actes ne valent que par les intentions'],correct:1,hint:'Ce hadith met en garde contre le mauvais traitement des non-musulmans',quran:'Al-Mumtahanah 8'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالقتال فقط لمن يقاتلك وتنهى عن الاعتداء؟',opts:['التوبة ٥','البقرة ١٩٠','الأنفال ٣٩','محمد ٤'],correct:1,hint:'هذه الآية تضع ضوابط واضحة للقتال',quran:'البقرة ١٩٠'},
    en:{q:'Which verse commands fighting only those who fight you and forbids aggression?',opts:['At-Tawbah 5','Al-Baqarah 190','Al-Anfal 39','Muhammad 4'],correct:1,hint:'This verse sets clear rules for fighting',quran:'Al-Baqarah 190'},
    fr:{q:'Quel verset ordonne de combattre seulement ceux qui vous combattent et interdit l\'agression ?',opts:['At-Tawbah 5','Al-Baqarah 190','Al-Anfal 39','Muhammad 4'],correct:1,hint:'Ce verset établit des règles claires pour le combat',quran:'Al-Baqarah 190'}
  },
  {
    ar:{q:'ما الحديث الذي يؤكد على الحفاظ على البيئة حتى في آخر لحظة؟',opts:['ازرعوا الأرض','إذا قامت الساعة وفي يد أحدكم فسيلة فليغرسها','لا ضرر ولا ضرار','خيركم من نفع الناس'],correct:1,hint:'هذا الحديث يتحدث عن زراعة شتلة حتى في نهاية العالم',quran:'الأعراف ٥٦'},
    en:{q:'Which hadith emphasizes environmental conservation even in the last moment?',opts:['Cultivate the land','If the Hour comes and you have a seedling, plant it','No harm and no reciprocal harm','The best of you benefits people'],correct:1,hint:'This hadith talks about planting a seedling even at the end of the world',quran:'Al-Araf 56'},
    fr:{q:'Quel hadith souligne la conservation de l\'environnement même au dernier moment ?',opts:['Cultivez la terre','Si l\'Heure arrive et tu as un plant, plante-le','Pas de dommage ni de dommage réciproque','Le meilleur d\'entre vous est utile aux gens'],correct:1,hint:'Ce hadith parle de planter un plant même à la fin du monde',quran:'Al-Araf 56'}
  },
  {
    ar:{q:'أكمل الحديث: "لا فضل لعربي على أعجمي إلا ب..."',opts:['المال','العلم','التقوى','النسب'],correct:2,hint:'هذا الحديث من خطبة حجة الوداع',quran:'الإسراء ٧٠'},
    en:{q:'Complete the hadith: "No Arab has superiority over a non-Arab except through..."',opts:['Wealth','Knowledge','Piety','Lineage'],correct:2,hint:'This hadith is from the Farewell Sermon',quran:'Al-Isra 70'},
    fr:{q:'Complétez le hadith : « Aucun Arabe n\'a de supériorité sur un non-Arabe sauf par... »',opts:['La richesse','Le savoir','La piété','La lignée'],correct:2,hint:'Ce hadith provient du Sermon d\'Adieu',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'ما الآية التي تأمر بالتثبت من الأخبار قبل تصديقها؟',opts:['الحجرات ٦','النور ١١','البقرة ٤٢','الأنعام ١٥٢'],correct:0,hint:'هذه الآية في سورة الحجرات وتتعلق بالتثبت من الأنباء',quran:'الحجرات ٦'},
    en:{q:'Which verse commands verification of news before believing it?',opts:['Al-Hujurat 6','An-Nur 11','Al-Baqarah 42','Al-Anam 152'],correct:0,hint:'This verse is in Surah Al-Hujurat and relates to verifying news',quran:'Al-Hujurat 6'},
    fr:{q:'Quel verset ordonne la vérification des nouvelles avant de les croire ?',opts:['Al-Hujurat 6','An-Nur 11','Al-Baqarah 42','Al-Anam 152'],correct:0,hint:'Ce verset est dans la Sourate Al-Hujurat et concerne la vérification des nouvelles',quran:'Al-Hujurat 6'}
  },
  {
    ar:{q:'ما المنهج القرآني في الرد على الخصوم حسب سورة النحل؟',opts:['القوة والشدة','الحكمة والموعظة الحسنة','الصمت والتجاهل','المال والهدايا'],correct:1,hint:'هذه الآية تحدد منهج الدعوة والحوار',quran:'النحل ١٢٥'},
    en:{q:'What is the Quranic method of responding to opponents according to Surah An-Nahl?',opts:['Force and severity','Wisdom and good instruction','Silence and ignoring','Money and gifts'],correct:1,hint:'This verse defines the methodology of dawah and dialogue',quran:'An-Nahl 125'},
    fr:{q:'Quelle est la méthode coranique de réponse aux adversaires selon la Sourate An-Nahl ?',opts:['La force et la sévérité','La sagesse et la bonne exhortation','Le silence et l\'ignorance','L\'argent et les cadeaux'],correct:1,hint:'Ce verset définit la méthodologie de la da\'wa et du dialogue',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الآية التي تصف القرآن بأنه يدمغ الباطل؟',opts:['البقرة ٢٥٦','الأنبياء ١٨','الحجر ٩','الإسراء ٨٨'],correct:1,hint:'هذه الآية في سورة الأنبياء وتتحدث عن قذف الحق على الباطل',quran:'الأنبياء ١٨'},
    en:{q:'Which verse describes the Quran as destroying falsehood?',opts:['Al-Baqarah 256','Al-Anbiya 18','Al-Hijr 9','Al-Isra 88'],correct:1,hint:'This verse is in Surah Al-Anbiya and talks about truth crushing falsehood',quran:'Al-Anbiya 18'},
    fr:{q:'Quel verset décrit le Coran comme détruisant le faux ?',opts:['Al-Baqarah 256','Al-Anbiya 18','Al-Hijr 9','Al-Isra 88'],correct:1,hint:'Ce verset est dans la Sourate Al-Anbiya et parle de la vérité écrasant le faux',quran:'Al-Anbiya 18'}
  },
  {
    ar:{q:'ما المبدأ الإسلامي الذي يجعل الإنسان مسؤولاً عن الأرض؟',opts:['التوحيد','الاستخلاف','الإحسان','التوكل'],correct:1,hint:'هذا المبدأ يعني أن الإنسان خليفة الله في الأرض',quran:'الأعراف ٥٦'},
    en:{q:'What Islamic principle makes humans responsible for the earth?',opts:['Monotheism','Stewardship','Excellence','Trust in God'],correct:1,hint:'This principle means that humans are Allah\'s vicegerents on earth',quran:'Al-Araf 56'},
    fr:{q:'Quel principe islamique rend l\'homme responsable de la terre ?',opts:['Le monothéisme','L\'intendance','L\'excellence','La confiance en Dieu'],correct:1,hint:'Ce principe signifie que les humains sont les vicaires d\'Allah sur terre',quran:'Al-Araf 56'}
  },
  {
    ar:{q:'ما العلم الذي طوره المسلمون وسمّوه "الجبر"؟',opts:['الفيزياء','الرياضيات','الطب','الفلك'],correct:1,hint:'الخوارزمي هو مؤسس هذا العلم',quran:'آل عمران ١١٠'},
    en:{q:'What science did Muslims develop and call "Algebra"?',opts:['Physics','Mathematics','Medicine','Astronomy'],correct:1,hint:'Al-Khwarizmi is the founder of this science',quran:'Al Imran 110'},
    fr:{q:'Quelle science les musulmans ont-ils développée et appelée « Algèbre » ?',opts:['La physique','Les mathématiques','La médecine','L\'astronomie'],correct:1,hint:'Al-Khwarizmi est le fondateur de cette science',quran:'Al Imran 110'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الفهم',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'طه ٢٥-٢٨'},
    en:{label:'Dua for Understanding',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'My Lord, expand my chest, ease my task, and untie the knot from my tongue — Taha 25-28'},
    fr:{label:'Dua pour la Compréhension',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',tr:'Mon Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche et dénoue le noeud de ma langue — Taha 25-28'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, let not our hearts deviate after You have guided us — Al Imran 8'},
    fr:{label:'Dua pour la Constance',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne laisse pas nos coeurs dévier après nous avoir guidés — Al Imran 8'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets à Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'رواه البخاري ومسلم'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place light in my heart, in my sight, and in my hearing — Bukhari and Muslim'},
    fr:{label:'Dua pour la Lumière',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'Ô Allah, mets de la lumière dans mon coeur, dans ma vue et dans mon ouïe — Bukhari et Muslim'} },
  { ar:{label:'دعاء الحكمة',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'الشعراء ٨٣'},
    en:{label:'Dua for Wisdom',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'My Lord, grant me wisdom and join me with the righteous — Ash-Shuara 83'},
    fr:{label:'Dua pour la Sagesse',text:'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',tr:'Mon Seigneur, accorde-moi la sagesse et joins-moi aux vertueux — Ash-Shuara 83'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, déverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'difaa-aqidah-xp';
const BADGES_KEY = 'difaa-aqidah-badges';
const READ_KEY = 'difaa-aqidah-read';
const STREAK_KEY = 'difaa-aqidah-streak';
const MODE_KEY = 'difaa-aqidah-mode';
const QUIZ_BEST_KEY = 'difaa-aqidah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; } playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('traitsTitle'); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=document.getElementById('traitsDesc'); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«دفاع عن العقيدة والشريعة ضد مطاعن المستشرقين» يرد على الشبهات التي أثارها المستشرقون ضد الإسلام. يتناول الشيخ الغزالي قضايا حفظ القرآن والسنة، وحقوق المرأة، ومفهوم الجهاد، والحرية، والتسامح، ويبرز عدالة الشريعة وإسهامات الحضارة الإسلامية.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "دفاع عن العقيدة والشريعة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن أبي داود والترمذي'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Defense of the Creed and Shariah Against Orientalist Attacks" responds to doubts raised by orientalists against Islam. Sheikh al-Ghazali addresses Quran and Sunnah preservation, women\'s rights, the concept of jihad, freedom, tolerance, and highlights the justice of Shariah and Islamic civilizational contributions.',
      sourcesTitle: 'Sources',
      sources: ['"Defense of the Creed and Shariah" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan Abu Dawud and at-Tirmidhi'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Defense de la Croyance et de la Charia contre les Attaques Orientalistes" repond aux doutes souleves par les orientalistes contre l\'Islam. Le Sheikh al-Ghazali aborde la preservation du Coran et de la Sunnah, les droits de la femme, le concept du jihad, la liberte, la tolerance, et met en evidence la justice de la Charia et les contributions civilisationnelles islamiques.',
      sourcesTitle: 'Sources',
      sources: ['"Defense de la Croyance et de la Charia" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan Abu Dawud et at-Tirmidhi'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "دفاع عن العقيدة والشريعة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/difaa-al-aqidah'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Defense of the Creed and Shariah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim/difaa-al-aqidah'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Defense de la Croyance et de la Charia" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/difaa-al-aqidah'}]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ أدعية طالب العلم','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget the knowledge seeker\'s duas','⭐ Complete all 20 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas du chercheur de savoir','⭐ Completez les 20 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
