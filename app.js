/* دفاع عن العقيدة والشريعة — DEFENSE OF CREED AGAINST ORIENTALISTS — app.js v2.0 */
/* Based on "Difaa an al-Aqidah wal-Shariah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'دفاع عن العقيدة',
    splashSub: 'ضد مطاعن المستشرقين',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجر ١٥: ٩',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الدفاع',
    cardsDesc: '١٥ بطاقة في الدفاع عن العقيدة والشريعة ضد الشبهات — من كتاب الشيخ محمد الغزالي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك في الرد على الشبهات — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلة العلم',
    progressDesc: 'تقدمك وإنجازاتك في فهم الدفاع عن العقيدة',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية طالب العلم',
    dailyLabel: '✨ درس اليوم',
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
      '١٥ بطاقة في الدفاع عن العقيدة',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Defense of the Creed',
    splashSub: 'Against Orientalist attacks',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hijr 15:9',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Defense Cards',
    cardsDesc: '15 cards defending the creed and Shariah against doubts — from Sheikh al-Ghazali\'s book',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge in responding to doubts — 4 choices per question',
    progressTitle: 'Knowledge Journey',
    progressDesc: 'Your progress and achievements in understanding the defense of the creed',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for the Knowledge Seeker',
    dailyLabel: "✨ Today's Lesson",
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
      '15 cards defending the creed',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Defense de la Croyance',
    splashSub: 'Contre les attaques des orientalistes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hijr 15:9',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Defense',
    cardsDesc: '15 cartes pour defendre la croyance et la Charia contre les doutes — du livre du Sheikh al-Ghazali',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances en reponse aux doutes — 4 choix par question',
    progressTitle: 'Parcours du Savoir',
    progressDesc: 'Vos progres dans la comprehension de la defense de la croyance',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour le Chercheur de Savoir',
    dailyLabel: '✨ Lecon du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes pour defendre la croyance',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'📖',
    ar:{title:'حفظ القرآن',desc:'القرآن الكريم هو الكتاب الوحيد الذي حُفظ بالكامل دون تحريف منذ نزوله. ملايين المسلمين يحفظونه عن ظهر قلب في كل عصر. المخطوطات القديمة تطابق ما بين أيدينا تماماً. هذا الحفظ معجزة فريدة في تاريخ البشرية.',verse:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',verseRef:'الحجر ٩',hadith:'خيركم من تعلم القرآن وعلمه — رواه البخاري',action:'احفظ آية جديدة من القرآن اليوم وشاركها مع عائلتك',young:'القرآن محفوظ منذ أكثر من ١٤٠٠ سنة! ملايين الناس يحفظونه كاملاً! 📖'},
    en:{title:'Quran Preservation',desc:'The Holy Quran is the only book preserved completely without alteration since its revelation. Millions of Muslims memorize it by heart in every era. Ancient manuscripts match exactly what we have today. This preservation is a unique miracle in human history.',verse:'Indeed, it is We who sent down the reminder and indeed, We will be its Guardian',verseRef:'Al-Hijr 9',hadith:'The best of you are those who learn the Quran and teach it — Bukhari',action:'Memorize a new verse from the Quran today and share it with your family',young:'The Quran has been preserved for over 1400 years! Millions of people memorize it completely! 📖'},
    fr:{title:'La Preservation du Coran',desc:"Le Saint Coran est le seul livre preserve completement sans alteration depuis sa revelation. Des millions de musulmans le memorisent par coeur a chaque epoque. Les anciens manuscrits correspondent exactement a ce que nous avons aujourd'hui. Cette preservation est un miracle unique dans l'histoire humaine.",verse:'C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les Gardiens',verseRef:'Al-Hijr 9',hadith:'Les meilleurs d\'entre vous sont ceux qui apprennent le Coran et l\'enseignent — Bukhari',action:'Memorisez un nouveau verset du Coran aujourd\'hui et partagez-le avec votre famille',young:"Le Coran est preserve depuis plus de 1400 ans ! Des millions de gens le memorisent completement ! 📖"}
  },
  {
    id:2, emoji:'🔬',
    ar:{title:'القرآن والعلم',desc:'القرآن يحتوي على إشارات علمية مذهلة اكتشفها العلم الحديث بعد قرون: أطوار الجنين، توسع الكون، حاجز البحرين، طبقات الأرض. هذه الإشارات لا يمكن أن تأتي من بشر عاش في القرن السابع.',verse:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِمْ حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ',verseRef:'فصلت ٥٣',hadith:'ما نزل بلاء إلا بذنب وما رفع إلا بتوبة — رواه ابن حبان',action:'ابحث عن إعجاز علمي واحد في القرآن وتأمل فيه اليوم',young:'القرآن ذكر أشياء عن الكون اكتشفها العلماء بعد مئات السنين! 🔬'},
    en:{title:'Quran and Science',desc:'The Quran contains remarkable scientific references that modern science discovered centuries later: stages of the embryo, expansion of the universe, barrier between two seas, layers of the earth. These references could not have come from a human living in the 7th century.',verse:'We will show them Our signs in the horizons and within themselves until it becomes clear that it is the truth',verseRef:'Fussilat 53',hadith:'No calamity descends except due to sin, and none is lifted except through repentance — Ibn Hibban',action:'Research one scientific miracle in the Quran and reflect on it today',young:'The Quran mentioned things about the universe that scientists discovered hundreds of years later! 🔬'},
    fr:{title:'Le Coran et la Science',desc:"Le Coran contient des references scientifiques remarquables que la science moderne a decouvertes des siecles plus tard : etapes de l'embryon, expansion de l'univers, barriere entre deux mers, couches de la terre. Ces references ne pouvaient pas venir d'un humain du 7e siecle.",verse:'Nous leur montrerons Nos signes dans les horizons et en eux-memes jusqu\'a ce qu\'il leur apparaisse que c\'est la verite',verseRef:'Fussilat 53',hadith:'Aucune calamite ne descend sauf a cause d\'un peche et aucune n\'est levee sauf par le repentir — Ibn Hibban',action:"Recherchez un miracle scientifique du Coran et meditez dessus aujourd'hui",young:"Le Coran a mentionne des choses sur l'univers que les scientifiques ont decouvertes des centaines d'annees plus tard ! 🔬"}
  },
  {
    id:3, emoji:'⚖️',
    ar:{title:'عدالة الشريعة',desc:'الشريعة الإسلامية نظام عادل متكامل يحمي الضروريات الخمس: الدين والنفس والعقل والنسل والمال. كل حكم فيها له حكمة. المستشرقون يجتزئون الأحكام من سياقها ليشوهوها.',verse:'وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ',verseRef:'المائدة ٥٠',hadith:'إن الله لم يجعل شفاءكم فيما حرم عليكم — رواه البخاري',action:'تعلم حكمة واحدة وراء حكم شرعي اليوم وناقشها مع أصدقائك',young:'الشريعة مثل قوانين المرور — تحمي الجميع وتجعل الحياة آمنة! ⚖️'},
    en:{title:'Shariah Justice',desc:'Islamic Shariah is a just, complete system that protects the five necessities: religion, life, intellect, lineage, and wealth. Every ruling has wisdom behind it. Orientalists take rulings out of context to distort them.',verse:'And who is better in judgment than Allah for a people who are certain?',verseRef:'Al-Maidah 50',hadith:'Allah has not made your cure in what He has forbidden for you — Bukhari',action:'Learn the wisdom behind one Shariah ruling today and discuss it with friends',young:'Shariah is like traffic laws — it protects everyone and makes life safe! ⚖️'},
    fr:{title:'La Justice de la Charia',desc:"La Charia islamique est un systeme juste et complet qui protege les cinq necessites : la religion, la vie, l'intellect, la descendance et les biens. Chaque reglement a une sagesse. Les orientalistes sortent les reglements de leur contexte pour les deformer.",verse:'Et qui est meilleur qu\'Allah en jugement pour des gens qui ont la certitude ?',verseRef:'Al-Maidah 50',hadith:'Allah n\'a pas mis votre remede dans ce qu\'Il vous a interdit — Bukhari',action:"Apprenez la sagesse derriere un reglement de la Charia aujourd'hui et discutez-en avec des amis",young:"La Charia est comme le code de la route — elle protege tout le monde et rend la vie sure ! ⚖️"}
  },
  {
    id:4, emoji:'📜',
    ar:{title:'الدفاع عن السنة',desc:'السنة النبوية حُفظت بمنهج علمي دقيق لا مثيل له. علماء الحديث وضعوا قواعد صارمة للتحقق من صحة الأحاديث: سلسلة الرواة، عدالة الراوي، ضبطه، اتصال السند. هذا المنهج فريد في التاريخ.',verse:'وَمَا يَنْطِقُ عَنِ الْهَوَى إِنْ هُوَ إِلَّا وَحْيٌ يُوحَى',verseRef:'النجم ٣-٤',hadith:'من كذب عليّ متعمداً فليتبوأ مقعده من النار — متفق عليه',action:'اقرأ عن منهج علماء الحديث في التحقق من الأحاديث وأخبر شخصاً عنه',young:'العلماء اخترعوا نظاماً دقيقاً جداً للتأكد من أن أحاديث النبي ﷺ صحيحة! 📜'},
    en:{title:'Defending the Sunnah',desc:'The Prophetic Sunnah was preserved through a rigorous scientific methodology unmatched in history. Hadith scholars established strict rules for verifying authenticity: chain of narrators, narrator integrity, precision, and connected chain. This methodology is unique in history.',verse:'Nor does he speak from desire. It is only revelation revealed',verseRef:'An-Najm 3-4',hadith:'Whoever deliberately lies about me, let them take their seat in the Fire — Agreed upon',action:'Read about the hadith scholars\' methodology for verification and tell someone about it',young:'Scholars invented a very precise system to make sure the Prophet\'s hadiths are authentic! 📜'},
    fr:{title:'La Defense de la Sunnah',desc:"La Sunnah prophetique a ete preservee par une methodologie scientifique rigoureuse sans pareil dans l'histoire. Les savants du hadith ont etabli des regles strictes pour verifier l'authenticite : chaine de narrateurs, integrite du narrateur, precision et chaine connectee. Cette methodologie est unique.",verse:'Et il ne prononce rien sous l\'effet de la passion. Ce n\'est rien d\'autre qu\'une revelation revelee',verseRef:'An-Najm 3-4',hadith:'Quiconque ment deliberement sur moi, qu\'il prenne sa place en Enfer — Unanimement reconnu',action:"Lisez sur la methodologie des savants du hadith et parlez-en a quelqu'un",young:"Les savants ont invente un systeme tres precis pour s'assurer que les hadiths du Prophete sont authentiques ! 📜"}
  },
  {
    id:5, emoji:'👩',
    ar:{title:'مكانة المرأة الحقيقية',desc:'الإسلام كرّم المرأة ورفع مكانتها حين كانت أوروبا تناقش هل للمرأة روح. أعطاها حق التملك والتعليم والميراث والاختيار. من يهاجم الإسلام بسبب المرأة يجهل التاريخ أو يتعمد التشويه.',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢٢٨',hadith:'استوصوا بالنساء خيراً — متفق عليه',action:'اقرأ عن عالمة مسلمة من التاريخ وشارك قصتها',young:'الإسلام أعطى المرأة حقوقها قبل أن يعرف العالم كله معنى حقوق المرأة! 👩'},
    en:{title:'Women\'s True Status',desc:'Islam honored women and elevated their status when Europe was debating whether women had souls. It gave them the right to own property, education, inheritance, and choice. Those who attack Islam regarding women are either ignorant of history or deliberately distorting it.',verse:'And they have rights similar to those over them in kindness',verseRef:'Al-Baqarah 228',hadith:'Treat women with kindness — Agreed upon',action:'Read about a Muslim woman scholar from history and share her story',young:'Islam gave women their rights before the whole world even knew what women\'s rights meant! 👩'},
    fr:{title:'Le Vrai Statut de la Femme',desc:"L'Islam a honore la femme et eleve son statut quand l'Europe debattait de savoir si les femmes avaient une ame. Il leur a donne le droit de posseder, d'etudier, d'heriter et de choisir. Ceux qui attaquent l'Islam concernant les femmes ignorent l'histoire ou la deforment deliberement.",verse:'Et elles ont des droits semblables a ceux que l\'on a sur elles selon les convenances',verseRef:'Al-Baqarah 228',hadith:'Traitez les femmes avec bonte — Unanimement reconnu',action:"Lisez sur une femme savante musulmane de l'histoire et partagez son histoire",young:"L'Islam a donne aux femmes leurs droits avant que le monde entier ne sache ce que signifient les droits des femmes ! 👩"}
  },
  {
    id:6, emoji:'🕊️',
    ar:{title:'سياق الجهاد',desc:'الجهاد في الإسلام ليس عدواناً بل دفاع عن النفس والدين والوطن. له شروط وقواعد: لا يُقتل شيخ ولا طفل ولا امرأة ولا يُقطع شجر. المستشرقون يقدمون الجهاد بصورة مشوهة متجاهلين هذه القواعد.',verse:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',verseRef:'البقرة ١٩٠',hadith:'لا تقتلوا شيخاً ولا طفلاً ولا امرأة — رواه أبو داود',action:'اقرأ عن أخلاق الحرب في الإسلام وقارنها بقوانين الحرب الحديثة',young:'الجهاد يعني الدفاع عن نفسك وعائلتك — ليس الاعتداء على أحد! 🕊️'},
    en:{title:'Jihad in Context',desc:'Jihad in Islam is not aggression but self-defense of life, religion, and homeland. It has conditions and rules: no killing of elders, children, or women, no cutting down trees. Orientalists present jihad in a distorted image while ignoring these rules.',verse:'And fight in the way of Allah those who fight you and do not transgress',verseRef:'Al-Baqarah 190',hadith:'Do not kill an elder, a child, or a woman — Abu Dawud',action:'Read about the ethics of war in Islam and compare them with modern laws of war',young:'Jihad means defending yourself and your family — not attacking anyone! 🕊️'},
    fr:{title:'Le Jihad en Contexte',desc:"Le Jihad en Islam n'est pas une agression mais une defense de la vie, de la religion et de la patrie. Il a des conditions et des regles : pas de meurtre de personnes agees, d'enfants ou de femmes, pas d'abattage d'arbres. Les orientalistes presentent le jihad de maniere deformee en ignorant ces regles.",verse:'Et combattez dans le sentier d\'Allah ceux qui vous combattent et ne transgressez pas',verseRef:'Al-Baqarah 190',hadith:'Ne tuez pas un vieillard, un enfant ou une femme — Abu Dawud',action:"Lisez sur l'ethique de la guerre en Islam et comparez-la avec les lois modernes de la guerre",young:"Le Jihad signifie te defendre et defendre ta famille — pas attaquer qui que ce soit ! 🕊️"}
  },
  {
    id:7, emoji:'🤝',
    ar:{title:'الحرية الدينية',desc:'الإسلام يضمن حرية المعتقد ولا يُكره أحداً على الإيمان. "لا إكراه في الدين" آية واضحة. عاش أهل الكتاب في ظل الحضارة الإسلامية بأمان وحرية لقرون. هذا التسامح لا مثيل له في التاريخ.',verse:'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',verseRef:'البقرة ٢٥٦',hadith:'من آذى ذمياً فأنا خصمه يوم القيامة — رواه الخطيب البغدادي',action:'كن متسامحاً مع أهل الأديان الأخرى اليوم وأظهر أخلاق الإسلام',young:'الإسلام يقول: لا تُجبر أحداً على دينك! كل شخص حر في اختياره! 🤝'},
    en:{title:'Religious Freedom',desc:'Islam guarantees freedom of belief and does not compel anyone to believe. "There is no compulsion in religion" is a clear verse. People of the Book lived safely and freely under Islamic civilization for centuries. This tolerance is unmatched in history.',verse:'There is no compulsion in religion. The right path has become clear from error',verseRef:'Al-Baqarah 256',hadith:'Whoever harms a protected person, I will be their opponent on the Day of Judgment — Al-Khatib al-Baghdadi',action:'Be tolerant with people of other religions today and show the ethics of Islam',young:'Islam says: Do not force anyone into your religion! Every person is free in their choice! 🤝'},
    fr:{title:'La Liberte Religieuse',desc:"L'Islam garantit la liberte de croyance et ne contraint personne a croire. 'Nulle contrainte en religion' est un verset clair. Les Gens du Livre ont vecu en securite et en liberte sous la civilisation islamique pendant des siecles. Cette tolerance est inegalee dans l'histoire.",verse:'Nulle contrainte en religion. Le bon chemin s\'est distingue de l\'egarement',verseRef:'Al-Baqarah 256',hadith:'Quiconque nuit a une personne protegee, je serai son adversaire au Jour du Jugement — Al-Khatib al-Baghdadi',action:"Soyez tolerant avec les personnes d'autres religions aujourd'hui et montrez l'ethique de l'Islam",young:"L'Islam dit : Ne force personne a adopter ta religion ! Chaque personne est libre dans son choix ! 🤝"}
  },
  {
    id:8, emoji:'🏛️',
    ar:{title:'الحضارة الإسلامية',desc:'المسلمون بنوا حضارة عظيمة في الطب والرياضيات والفلك والكيمياء والفلسفة حين كانت أوروبا في العصور المظلمة. ابن سينا وابن الهيثم والخوارزمي وجابر بن حيان علموا العالم.',verse:'أَفَمَنْ يَمْشِي مُكِبًّا عَلَى وَجْهِهِ أَهْدَى أَمَّنْ يَمْشِي سَوِيًّا عَلَى صِرَاطٍ مُسْتَقِيمٍ',verseRef:'الملك ٢٢',hadith:'الحكمة ضالة المؤمن أنّى وجدها فهو أحق بها — رواه الترمذي',action:'ابحث عن عالم مسلم غيّر العالم واكتب عنه ملخصاً قصيراً',young:'العلماء المسلمون اخترعوا أشياء رائعة في الطب والرياضيات وعلم الفلك! 🏛️'},
    en:{title:'Islamic Civilization',desc:'Muslims built a great civilization in medicine, mathematics, astronomy, chemistry, and philosophy while Europe was in the Dark Ages. Ibn Sina, Ibn al-Haytham, al-Khwarizmi, and Jabir ibn Hayyan taught the world.',verse:'Is the one who walks fallen on his face better guided, or the one who walks upright on a straight path?',verseRef:'Al-Mulk 22',hadith:'Wisdom is the lost property of the believer — wherever they find it, they have the most right to it — Tirmidhi',action:'Research a Muslim scientist who changed the world and write a short summary about them',young:'Muslim scientists invented amazing things in medicine, mathematics, and astronomy! 🏛️'},
    fr:{title:'La Civilisation Islamique',desc:"Les musulmans ont bati une grande civilisation en medecine, mathematiques, astronomie, chimie et philosophie pendant que l'Europe etait dans les Ages Sombres. Ibn Sina, Ibn al-Haytham, al-Khwarizmi et Jabir ibn Hayyan ont enseigne au monde.",verse:'Celui qui marche tombe sur son visage est-il mieux guide que celui qui marche droit sur un chemin droit ?',verseRef:'Al-Mulk 22',hadith:'La sagesse est l\'objet perdu du croyant — ou qu\'il la trouve, il y a le plus droit — Tirmidhi',action:"Recherchez un scientifique musulman qui a change le monde et ecrivez un court resume a son sujet",young:"Les scientifiques musulmans ont invente des choses incroyables en medecine, mathematiques et astronomie ! 🏛️"}
  },
  {
    id:9, emoji:'🔎',
    ar:{title:'عيوب منهج المستشرقين',desc:'كثير من المستشرقين درسوا الإسلام بأحكام مسبقة وتحيز واضح. اعتمدوا على مصادر ضعيفة وترجمات خاطئة واجتزاء النصوص. منهجهم يفتقر للموضوعية العلمية التي يدّعونها.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَأٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'كفى بالمرء كذباً أن يحدث بكل ما سمع — رواه مسلم',action:'عندما تقرأ عن الإسلام من مصدر غربي تحقق من دقة المعلومات',young:'لا تصدق كل ما تسمعه عن الإسلام! تحقق دائماً من المصادر الصحيحة! 🔎'},
    en:{title:'Orientalist Methodology Flaws',desc:'Many Orientalists studied Islam with preconceptions and clear bias. They relied on weak sources, incorrect translations, and taking texts out of context. Their methodology lacks the scientific objectivity they claim.',verse:'O you who believe, if a wicked person comes to you with news, verify it',verseRef:'Al-Hujurat 6',hadith:'It is enough lying for a person to narrate everything they hear — Muslim',action:'When you read about Islam from a Western source, verify the accuracy of information',young:'Do not believe everything you hear about Islam! Always check the correct sources! 🔎'},
    fr:{title:'Les Defauts de la Methodologie Orientaliste',desc:"De nombreux orientalistes ont etudie l'Islam avec des prejuges et un biais evident. Ils se sont appuyes sur des sources faibles, des traductions incorrectes et ont sorti les textes de leur contexte. Leur methodologie manque de l'objectivite scientifique qu'ils pretendent avoir.",verse:'O vous qui croyez, si un pervers vous apporte une nouvelle, verifiez-la',verseRef:'Al-Hujurat 6',hadith:'Il suffit comme mensonge de rapporter tout ce qu\'on entend — Muslim',action:"Quand vous lisez sur l'Islam d'une source occidentale, verifiez l'exactitude des informations",young:"Ne crois pas tout ce que tu entends sur l'Islam ! Verifie toujours les sources correctes ! 🔎"}
  },
  {
    id:10, emoji:'✨',
    ar:{title:'الإعجاز اللغوي',desc:'القرآن تحدى العرب — وهم أبلغ الناس — أن يأتوا بمثل سورة منه فعجزوا. لغة القرآن ليست شعراً ولا نثراً بل نمط فريد لا يشبه أي كلام بشري. هذا الإعجاز دليل على أنه من عند الله.',verse:'قُلْ لَئِنِ اجْتَمَعَتِ الْإِنْسُ وَالْجِنُّ عَلَى أَنْ يَأْتُوا بِمِثْلِ هَذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',verseRef:'الإسراء ٨٨',hadith:'ما من الأنبياء نبي إلا أعطي ما مثله آمن عليه البشر وكان الذي أوتيته وحياً — متفق عليه',action:'اقرأ صفحة من القرآن بتدبر وتأمل جمال اللغة والتعبير',young:'القرآن كتاب لا أحد يستطيع أن يكتب مثله — حتى أعظم الشعراء! ✨'},
    en:{title:'The Linguistic Miracle',desc:'The Quran challenged the Arabs — the most eloquent of people — to produce something like even one chapter, and they could not. The language of the Quran is neither poetry nor prose but a unique style unlike any human speech. This is proof it is from God.',verse:'Say: If mankind and jinn gathered to produce the like of this Quran, they could not produce the like of it',verseRef:'Al-Isra 88',hadith:'Every prophet was given miracles that made people believe, and what I was given is revelation — Agreed upon',action:'Read a page of the Quran with reflection and contemplate the beauty of its language',young:'The Quran is a book that nobody can write anything like — not even the greatest poets! ✨'},
    fr:{title:'Le Miracle Linguistique',desc:"Le Coran a defie les Arabes — les plus eloquents des gens — de produire quelque chose de semblable a une seule sourate, et ils n'ont pas pu. La langue du Coran n'est ni poesie ni prose mais un style unique. Ceci est une preuve qu'il vient de Dieu.",verse:'Dis : Si les hommes et les djinns s\'unissaient pour produire quelque chose de semblable a ce Coran, ils ne sauraient le faire',verseRef:'Al-Isra 88',hadith:'Chaque prophete a recu des miracles qui ont fait croire les gens, et ce que j\'ai recu est la revelation — Unanimement reconnu',action:"Lisez une page du Coran avec reflexion et contemplez la beaute de sa langue",young:"Le Coran est un livre que personne ne peut ecrire de semblable — meme les plus grands poetes ! ✨"}
  },
  {
    id:11, emoji:'🌍',
    ar:{title:'التسامح في التاريخ',desc:'عاش اليهود والمسيحيون في ظل الحكم الإسلامي بحرية وأمان لقرون. حافظوا على كنائسهم ومعابدهم وتمتعوا بالحماية. "العهدة العمرية" نموذج فريد في تاريخ التسامح الديني.',verse:'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',verseRef:'الكافرون ٦',hadith:'من ظلم معاهداً لم يرح رائحة الجنة — رواه البخاري',action:'تعرف على جار لك من دين مختلف وأحسن إليه',young:'المسلمون عاشوا مع أهل الأديان الأخرى بسلام واحترام لقرون! 🌍'},
    en:{title:'Tolerance in History',desc:'Jews and Christians lived under Islamic rule with freedom and safety for centuries. They preserved their churches and temples and enjoyed protection. The Covenant of Umar is a unique model in the history of religious tolerance.',verse:'To you your religion and to me mine',verseRef:'Al-Kafirun 6',hadith:'Whoever wrongs a person with a covenant will not smell the fragrance of Paradise — Bukhari',action:'Get to know a neighbor of a different religion and be kind to them',young:'Muslims lived with people of other religions in peace and respect for centuries! 🌍'},
    fr:{title:'La Tolerance dans l\'Histoire',desc:"Les Juifs et les Chretiens ont vecu sous le gouvernement islamique avec liberte et securite pendant des siecles. Ils ont preserve leurs eglises et temples et ont beneficie de la protection. Le Pacte d'Omar est un modele unique dans l'histoire de la tolerance religieuse.",verse:'A vous votre religion et a moi la mienne',verseRef:'Al-Kafirun 6',hadith:'Quiconque fait du tort a une personne sous pacte ne sentira pas le parfum du Paradis — Bukhari',action:"Faites connaissance avec un voisin d'une religion differente et soyez gentil avec lui",young:"Les musulmans ont vecu avec des gens d'autres religions en paix et respect pendant des siecles ! 🌍"}
  },
  {
    id:12, emoji:'🌱',
    ar:{title:'الإسلام والبيئة',desc:'الإسلام يأمر بالحفاظ على البيئة والحيوان والنبات. غرس الشجر صدقة، وإماطة الأذى عن الطريق إيمان. المسلم خليفة الله في الأرض مسؤول عن إعمارها لا تدميرها.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'إن قامت الساعة وفي يد أحدكم فسيلة فإن استطاع أن يغرسها فليغرسها — رواه أحمد',action:'ازرع نبتة اليوم أو اعتنِ بشجرة قريبة منك — كل غرس صدقة',young:'الإسلام يحب الطبيعة! حتى لو كانت القيامة قائمة ازرع شجرة! 🌱'},
    en:{title:'Islam and the Environment',desc:'Islam commands the preservation of the environment, animals, and plants. Planting a tree is charity, and removing harm from the road is faith. A Muslim is God\'s steward on earth, responsible for its development, not its destruction.',verse:'And do not cause corruption on earth after its reformation',verseRef:'Al-Araf 56',hadith:'If the Hour comes and one of you has a seedling in hand, if they can plant it, let them plant it — Ahmad',action:'Plant something today or take care of a tree near you — every planting is charity',young:'Islam loves nature! Even if the Day of Judgment is coming, plant a tree! 🌱'},
    fr:{title:'L\'Islam et l\'Environnement',desc:"L'Islam ordonne la preservation de l'environnement, des animaux et des plantes. Planter un arbre est une charite et enlever un obstacle du chemin est un acte de foi. Le musulman est le representant de Dieu sur terre, responsable de son developpement, pas de sa destruction.",verse:'Et ne semez pas la corruption sur terre apres sa reforme',verseRef:'Al-Araf 56',hadith:'Si l\'Heure vient et que l\'un de vous a un plant dans sa main, s\'il peut le planter, qu\'il le plante — Ahmad',action:"Plantez quelque chose aujourd'hui ou prenez soin d'un arbre pres de vous — chaque plantation est une charite",young:"L'Islam aime la nature ! Meme si le Jour du Jugement arrive, plante un arbre ! 🌱"}
  },
  {
    id:13, emoji:'🛡️',
    ar:{title:'حقوق الإنسان',desc:'الإسلام أسس لحقوق الإنسان قبل الإعلان العالمي بـ١٤ قرناً. خطبة الوداع تضمنت حرمة الدم والمال والعرض والمساواة بين الناس. هذه الحقوق ليست منحة من بشر بل أوامر إلهية.',verse:'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',verseRef:'الإسراء ٧٠',hadith:'كلكم لآدم وآدم من تراب — رواه أحمد',action:'عامل كل شخص تقابله اليوم باحترام وكرامة — كما أمر الإسلام',young:'الإسلام قال: كل الناس متساوون! لا فرق بين غني وفقير أو أبيض وأسود! 🛡️'},
    en:{title:'Human Rights',desc:'Islam established human rights 14 centuries before the Universal Declaration. The Farewell Sermon included the sanctity of blood, property, and honor, and equality among people. These rights are not a gift from humans but divine commands.',verse:'And We have certainly honored the children of Adam',verseRef:'Al-Isra 70',hadith:'All of you are from Adam and Adam was from dust — Ahmad',action:'Treat every person you meet today with respect and dignity — as Islam commands',young:'Islam said: All people are equal! No difference between rich and poor or black and white! 🛡️'},
    fr:{title:'Les Droits de l\'Homme',desc:"L'Islam a etabli les droits de l'homme 14 siecles avant la Declaration Universelle. Le Sermon d'Adieu incluait la sacralite du sang, des biens et de l'honneur, et l'egalite entre les gens. Ces droits ne sont pas un don humain mais des ordres divins.",verse:'Et Nous avons certes honore les enfants d\'Adam',verseRef:'Al-Isra 70',hadith:'Vous etes tous d\'Adam et Adam est de terre — Ahmad',action:"Traitez chaque personne que vous rencontrez aujourd'hui avec respect et dignite — comme l'Islam l'ordonne",young:"L'Islam a dit : Tous les gens sont egaux ! Pas de difference entre riche et pauvre ou noir et blanc ! 🛡️"}
  },
  {
    id:14, emoji:'🎨',
    ar:{title:'الفنون في الإسلام',desc:'الإسلام لم يحارب الفن بل أنتج حضارة فنية راقية: الخط العربي والزخرفة الإسلامية والعمارة المذهلة كالأندلس وتاج محل والأزهر. الفن الإسلامي يجمع بين الجمال والروحانية.',verse:'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ',verseRef:'حديث — رواه مسلم',hadith:'إن الله كتب الإحسان على كل شيء — رواه مسلم',action:'تأمل في قطعة فنية إسلامية اليوم — خط عربي أو زخرفة — واستشعر جمالها',young:'المسلمون صنعوا فنوناً رائعة! الخط العربي والمساجد الجميلة والزخارف المدهشة! 🎨'},
    en:{title:'Arts in Islam',desc:'Islam did not fight art but produced a refined artistic civilization: Arabic calligraphy, Islamic geometric patterns, and stunning architecture like Andalusia, Taj Mahal, and Al-Azhar. Islamic art combines beauty with spirituality.',verse:'Indeed, Allah is beautiful and loves beauty',verseRef:'Hadith — Muslim',hadith:'Allah has prescribed excellence in everything — Muslim',action:'Contemplate a piece of Islamic art today — calligraphy or geometric design — and appreciate its beauty',young:'Muslims created amazing art! Arabic calligraphy, beautiful mosques, and stunning patterns! 🎨'},
    fr:{title:'Les Arts en Islam',desc:"L'Islam n'a pas combattu l'art mais a produit une civilisation artistique raffinee : la calligraphie arabe, les motifs geometriques islamiques et l'architecture epoustouflante comme l'Andalousie, le Taj Mahal et Al-Azhar. L'art islamique combine beaute et spiritualite.",verse:'Certes, Allah est beau et aime la beaute',verseRef:'Hadith — Muslim',hadith:'Allah a prescrit l\'excellence en toute chose — Muslim',action:"Contemplez une oeuvre d'art islamique aujourd'hui — calligraphie ou motif geometrique — et appreciez sa beaute",young:"Les musulmans ont cree un art incroyable ! La calligraphie arabe, de belles mosquees et des motifs epoustouflants ! 🎨"}
  },
  {
    id:15, emoji:'💡',
    ar:{title:'منهجية الرد',desc:'الرد على الشبهات يحتاج منهجاً علمياً: فهم الشبهة أولاً، ثم البحث في مصادرها، ثم الرد بالدليل القرآني والعلمي. لا نرد بالعاطفة بل بالعلم والحجة والبيان. المسلم الواعي سلاح أقوى من أي جيش.',verse:'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ',verseRef:'النحل ١٢٥',hadith:'بلغوا عني ولو آية — رواه البخاري',action:'تعلم كيف ترد على شبهة واحدة بالعلم والأدلة — وشاركها مع غيرك',young:'ادافع عن دينك بالعلم والأدب — لا بالصراخ! المسلم الذكي أقوى حجة! 💡'},
    en:{title:'Response Methodology',desc:'Responding to doubts requires a scientific methodology: first understand the doubt, then research its sources, then respond with Quranic and scientific evidence. We do not respond with emotion but with knowledge, evidence, and clarity. An aware Muslim is a stronger weapon than any army.',verse:'Invite to the way of your Lord with wisdom and beautiful preaching',verseRef:'An-Nahl 125',hadith:'Convey from me even if it is one verse — Bukhari',action:'Learn how to respond to one doubt with knowledge and evidence — and share it with others',young:'Defend your religion with knowledge and politeness — not by shouting! A smart Muslim has the strongest argument! 💡'},
    fr:{title:'La Methodologie de Reponse',desc:"Repondre aux doutes necessite une methodologie scientifique : d'abord comprendre le doute, puis rechercher ses sources, puis repondre avec des preuves coraniques et scientifiques. Nous ne repondons pas avec l'emotion mais avec le savoir, les preuves et la clarte. Un musulman conscient est plus fort que toute armee.",verse:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation',verseRef:'An-Nahl 125',hadith:'Transmettez de moi ne serait-ce qu\'un verset — Bukhari',action:"Apprenez a repondre a un doute avec le savoir et les preuves — et partagez-le avec d'autres",young:"Defends ta religion avec le savoir et la politesse — pas en criant ! Un musulman intelligent a le meilleur argument ! 💡"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ ..."',opts:['لَمُحَافِظُونَ','لَحَافِظُونَ','لَنَاصِرُونَ','لَمُرَاعُونَ'],correct:1,hint:'هذه الآية تتحدث عن حفظ القرآن',quran:'الحجر ٩'},
    en:{q:'Complete the verse: "Indeed, it is We who sent down the reminder and indeed, We will be its..."',opts:['Protectors','Guardians','Supporters','Observers'],correct:1,hint:'This verse talks about the preservation of the Quran',quran:'Al-Hijr 9'},
    fr:{q:'Completez le verset : "C\'est Nous qui avons fait descendre le Rappel et c\'est Nous qui en sommes les..."',opts:['Protecteurs','Gardiens','Soutiens','Observateurs'],correct:1,hint:'Ce verset parle de la preservation du Coran',quran:'Al-Hijr 9'}
  },
  {
    ar:{q:'ما الآية التي تضمن حرية المعتقد في الإسلام؟',opts:['لا إكراه في الدين','لكم دينكم ولي دين','ادع إلى سبيل ربك','قل هو الله أحد'],correct:0,hint:'آية واضحة في رفض الإكراه',quran:'البقرة ٢٥٦'},
    en:{q:'Which verse guarantees freedom of belief in Islam?',opts:['There is no compulsion in religion','To you your religion and to me mine','Invite to the way of your Lord','Say: He is Allah, the One'],correct:0,hint:'A clear verse rejecting compulsion',quran:'Al-Baqarah 256'},
    fr:{q:'Quel verset garantit la liberte de croyance en Islam ?',opts:['Nulle contrainte en religion','A vous votre religion et a moi la mienne','Appelle au sentier de ton Seigneur','Dis : Il est Allah, l\'Unique'],correct:0,hint:'Un verset clair rejetant la contrainte',quran:'Al-Baqarah 256'}
  },
  {
    ar:{q:'ما المنهج الذي استخدمه علماء الحديث للتحقق من صحة الأحاديث؟',opts:['التصويت الشعبي','سلسلة الرواة وعدالة الراوي وضبطه','الاكتشاف العلمي','موافقة الحاكم'],correct:1,hint:'منهج علمي فريد في التاريخ',quran:'النجم ٣-٤'},
    en:{q:'What methodology did hadith scholars use to verify the authenticity of hadiths?',opts:['Popular vote','Chain of narrators, narrator integrity and precision','Scientific discovery','Ruler\'s approval'],correct:1,hint:'A unique scientific methodology in history',quran:'An-Najm 3-4'},
    fr:{q:'Quelle methodologie les savants du hadith ont-ils utilisee pour verifier l\'authenticite des hadiths ?',opts:['Vote populaire','Chaine de narrateurs, integrite et precision du narrateur','Decouverte scientifique','Approbation du dirigeant'],correct:1,hint:'Une methodologie scientifique unique dans l\'histoire',quran:'An-Najm 3-4'}
  },
  {
    ar:{q:'ما الحديث الذي يأمر بزراعة الشجر حتى لو قامت الساعة؟',opts:['إن قامت الساعة وفي يد أحدكم فسيلة فليغرسها','ازرعوا ولا تقطعوا','الشجرة صدقة','من زرع فله أجر'],correct:0,hint:'حديث عن الأمل والعمل حتى آخر لحظة',quran:'الأعراف ٥٦'},
    en:{q:'Which hadith commands planting trees even if the Hour comes?',opts:['If the Hour comes and you have a seedling, plant it','Plant and do not cut','A tree is charity','Whoever plants has reward'],correct:0,hint:'A hadith about hope and work until the last moment',quran:'Al-Araf 56'},
    fr:{q:'Quel hadith ordonne de planter des arbres meme si l\'Heure arrive ?',opts:['Si l\'Heure vient et que tu as un plant, plante-le','Plantez et ne coupez pas','Un arbre est une charite','Quiconque plante a une recompense'],correct:0,hint:'Un hadith sur l\'espoir et le travail jusqu\'au dernier moment',quran:'Al-Araf 56'}
  },
  {
    ar:{q:'أكمل الآية: "ادْعُ إِلَى سَبِيلِ رَبِّكَ بِـ..."',opts:['القوة','الحكمة','المال','السلاح'],correct:1,hint:'الدعوة بالحكمة والموعظة الحسنة',quran:'النحل ١٢٥'},
    en:{q:'Complete the verse: "Invite to the way of your Lord with..."',opts:['Force','Wisdom','Money','Weapons'],correct:1,hint:'Calling to God with wisdom and beautiful preaching',quran:'An-Nahl 125'},
    fr:{q:'Completez le verset : "Appelle au sentier de ton Seigneur par..."',opts:['La force','La sagesse','L\'argent','Les armes'],correct:1,hint:'Appeler a Dieu par la sagesse et la bonne exhortation',quran:'An-Nahl 125'}
  },
  {
    ar:{q:'ما الضروريات الخمس التي تحميها الشريعة؟',opts:['المال والسلطة والجيش والتجارة والسياسة','الدين والنفس والعقل والنسل والمال','الأرض والماء والهواء والنار والتراب','العلم والعمل والصحة والراحة والأمن'],correct:1,hint:'تحمي كل جوانب حياة الإنسان',quran:'المائدة ٥٠'},
    en:{q:'What are the five necessities that Shariah protects?',opts:['Money, power, army, trade, politics','Religion, life, intellect, lineage, wealth','Earth, water, air, fire, soil','Knowledge, work, health, rest, security'],correct:1,hint:'Protects all aspects of human life',quran:'Al-Maidah 50'},
    fr:{q:'Quelles sont les cinq necessites que la Charia protege ?',opts:['Argent, pouvoir, armee, commerce, politique','Religion, vie, intellect, descendance, biens','Terre, eau, air, feu, sol','Savoir, travail, sante, repos, securite'],correct:1,hint:'Protege tous les aspects de la vie humaine',quran:'Al-Maidah 50'}
  },
  {
    ar:{q:'أين ألقى النبي ﷺ خطبته التي تضمنت حقوق الإنسان؟',opts:['في المدينة','في مكة','في حجة الوداع','في غزوة بدر'],correct:2,hint:'كانت في الحج الأخير للنبي ﷺ',quran:'الإسراء ٧٠'},
    en:{q:'Where did the Prophet (PBUH) deliver the sermon that included human rights?',opts:['In Medina','In Mecca','During the Farewell Pilgrimage','During the Battle of Badr'],correct:2,hint:'It was during the Prophet\'s last pilgrimage',quran:'Al-Isra 70'},
    fr:{q:'Ou le Prophete (PSL) a-t-il prononce le sermon incluant les droits de l\'homme ?',opts:['A Medine','A La Mecque','Lors du Pelerinage d\'Adieu','Lors de la Bataille de Badr'],correct:2,hint:'C\'etait lors du dernier pelerinage du Prophete',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'من العلماء المسلمين الذين ساهموا في تطور الطب؟',opts:['ابن خلدون','ابن سينا','الخوارزمي','ابن بطوطة'],correct:1,hint:'لُقب بـ"أمير الأطباء" وألف كتاب القانون في الطب',quran:'الملك ٢٢'},
    en:{q:'Which Muslim scholar contributed to the development of medicine?',opts:['Ibn Khaldun','Ibn Sina','Al-Khwarizmi','Ibn Battuta'],correct:1,hint:'Nicknamed "Prince of Physicians" and authored The Canon of Medicine',quran:'Al-Mulk 22'},
    fr:{q:'Quel savant musulman a contribue au developpement de la medecine ?',opts:['Ibn Khaldoun','Ibn Sina','Al-Khwarizmi','Ibn Battuta'],correct:1,hint:'Surnomme "Prince des Medecins" et auteur du Canon de la Medecine',quran:'Al-Mulk 22'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَقَدْ كَرَّمْنَا ..."',opts:['المؤمنين','الأنبياء','بني آدم','الملائكة'],correct:2,hint:'تكريم شامل لكل البشر',quran:'الإسراء ٧٠'},
    en:{q:'Complete the verse: "And We have certainly honored..."',opts:['The believers','The prophets','The children of Adam','The angels'],correct:2,hint:'Universal honor for all humans',quran:'Al-Isra 70'},
    fr:{q:'Completez le verset : "Et Nous avons certes honore..."',opts:['Les croyants','Les prophetes','Les enfants d\'Adam','Les anges'],correct:2,hint:'Honneur universel pour tous les humains',quran:'Al-Isra 70'}
  },
  {
    ar:{q:'ما العيب الرئيسي في منهج المستشرقين حسب الشيخ الغزالي؟',opts:['قلة المصادر','الأحكام المسبقة والتحيز','ضعف اللغة','عدم السفر'],correct:1,hint:'درسوا الإسلام بنية التشويه لا الفهم',quran:'الحجرات ٦'},
    en:{q:'What is the main flaw in the Orientalists\' methodology according to Sheikh al-Ghazali?',opts:['Lack of sources','Preconceptions and bias','Language weakness','Not traveling'],correct:1,hint:'They studied Islam with the intent to distort, not to understand',quran:'Al-Hujurat 6'},
    fr:{q:'Quel est le principal defaut de la methodologie des orientalistes selon Sheikh al-Ghazali ?',opts:['Manque de sources','Prejuges et biais','Faiblesse de la langue','Pas de voyages'],correct:1,hint:'Ils ont etudie l\'Islam avec l\'intention de deformer, pas de comprendre',quran:'Al-Hujurat 6'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الفهم',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'دعاء مأثور'},
    en:{label:'Dua for Understanding',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'O Allah, give me understanding in the religion and teach me interpretation — Reported dua'},
    fr:{label:'Dua pour la Comprehension',text:'اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ',tr:'O Allah, donne-moi la comprehension de la religion et enseigne-moi l\'interpretation — Dua rapportee'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You guided us — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides — Al Imran 8'} },
  { ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'متفق عليه'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, place light in my heart, in my sight, and in my hearing — Agreed upon'},
    fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Allah, mets de la lumiere dans mon coeur, dans ma vue et dans mon ouie — Unanimement reconnu'} },
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'دعاء مأثور'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'O Allah, show me truth as truth and grant me following it, show me falsehood as falsehood and grant me avoiding it — Reported dua'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ وَأَرِنِي الْبَاطِلَ بَاطِلًا وَارْزُقْنِي اجْتِنَابَهُ',tr:'O Allah, montre-moi la verite comme verite et accorde-moi de la suivre, montre-moi le faux comme faux et accorde-moi de l\'eviter — Dua rapportee'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui — At-Tawbah 129'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'difaa-xp';
const BADGES_KEY = 'difaa-badges';
const READ_KEY = 'difaa-read';
const STREAK_KEY = 'difaa-streak';
const MODE_KEY = 'difaa-mode';
const QUIZ_BEST_KEY = 'difaa-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) { const earned = getEarnedBadges(); BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } }); }
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

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
let currentCardIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabCards').textContent = t.tabCards;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('cardsTitle').textContent = t.cardsTitle;
  document.getElementById('cardsDesc').textContent = t.cardsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}"><div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})"><span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };
function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); });
  const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden');
  if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); }
  quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«دفاع عن العقيدة والشريعة ضد مطاعن المستشرقين» كتاب يرد فيه الشيخ الغزالي على أبرز الشبهات التي أثارها المستشرقون ضد الإسلام. يتناول حفظ القرآن والإعجاز العلمي وعدالة الشريعة ومكانة المرأة وسياق الجهاد والحرية الدينية والحضارة الإسلامية بأسلوب علمي رصين.', sourcesTitle:'المصادر', sources:['كتاب "دفاع عن العقيدة والشريعة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Defense of the Creed and Shariah Against Orientalist Attacks" is a book where Sheikh al-Ghazali responds to the most prominent doubts raised by Orientalists against Islam. It covers Quran preservation, scientific miracles, Shariah justice, women\'s status, jihad context, religious freedom, and Islamic civilization with a scholarly and measured approach.', sourcesTitle:'Sources', sources:['"Defense of the Creed and Shariah" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"Defense de la Croyance et de la Charia contre les Attaques des Orientalistes" est un livre ou le Sheikh al-Ghazali repond aux doutes les plus importants souleves par les orientalistes contre l\'Islam. Il couvre la preservation du Coran, les miracles scientifiques, la justice de la Charia, le statut des femmes, le contexte du jihad et la liberte religieuse.', sourcesTitle:'Sources', sources:['"Defense de la Croyance et de la Charia" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "دفاع عن العقيدة والشريعة" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Defense of the Creed and Shariah" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Defense de la Croyance et de la Charia" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالعلم والهداية','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for knowledge','⭐ Complete all 15 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour le savoir','⭐ Completez les 15 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter();
});
