/* دفاع عن العقيدة — DEFENSE OF CREED — app.js v1.0 */
/* Based on "Difaa an al-Aqidah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'دفاع عن العقيدة',
    splashSub: 'ضد مطاعن المستشرقين',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجر ١٥: ٩',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabResponses: 'الردود',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الدفاع',
    cardsDesc: '٢٠ بطاقة في الدفاع عن العقيدة والشريعة ضد الشبهات',
    responsesTitle: 'ردود فكرية',
    responsesDesc: 'أبرز الشبهات والردود العلمية عليها',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات طالب العلم المدافع عن دينه',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'هل تعرف كيف ترد على الشبهات؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية طالب العلم',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ درس اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ بطاقة في الدفاع عن العقيدة',
      'ردود فكرية على شبهات المستشرقين',
      'عادات يومية مع تتبع مستمر',
      'اختبار معلوماتك + أدعية طالب العلم'
    ],
  },
  en: {
    appTitle: 'Defense of Creed',
    splashSub: 'Against Orientalist Claims',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hijr 15:9',
    tabHome: 'Home', tabCards: 'Cards', tabResponses: 'Responses',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Defense Cards',
    cardsDesc: '20 cards defending creed and Shariah against misconceptions',
    responsesTitle: 'Intellectual Responses',
    responsesDesc: 'Key misconceptions and scholarly refutations',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits of the student defending their faith',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'Can you respond to common misconceptions?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Student of Knowledge Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Lesson',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '20 cards defending Islamic creed',
      'Intellectual responses to Orientalist claims',
      'Daily habits with streak tracking',
      'Knowledge quiz + student duas'
    ],
  },
  fr: {
    appTitle: 'Defense du Credo',
    splashSub: 'Contre les Critiques Orientalistes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hijr 15:9',
    tabHome: 'Accueil', tabCards: 'Cartes', tabResponses: 'Reponses',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Defense',
    cardsDesc: '20 cartes defendant le credo et la Charia contre les idees recues',
    responsesTitle: 'Reponses Intellectuelles',
    responsesDesc: 'Principales idees recues et refutations savantes',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes de l\'etudiant defendant sa foi',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Pouvez-vous repondre aux idees recues ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de l\'Etudiant',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Lecon du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 cartes defendant le credo islamique',
      'Reponses intellectuelles aux orientalistes',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas de l\'etudiant'
    ],
  }
};

// ═══════════════ CARDS DATA (20 defense cards) ═══════════════
const CARDS = [
  {id:1,emoji:'📖',ar:{title:'حفظ القرآن',desc:'الله تعالى تكفل بحفظ القرآن، وهذا ما لم يحدث مع أي كتاب سماوي آخر. القرآن محفوظ في الصدور والسطور منذ نزوله.',quran:'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',quranRef:'الحجر ١٥: ٩',action:'احفظ آية جديدة اليوم واشرحها لأحد'},en:{title:'Preservation of the Quran',desc:'God Himself guaranteed the preservation of the Quran, unlike any other scripture. The Quran has been preserved in hearts and writing since its revelation.',quran:'Indeed, it is We who sent down the reminder and We will be its guardian',quranRef:'Al-Hijr 15:9',action:'Memorize a new verse today and explain it to someone'},fr:{title:'La Preservation du Coran',desc:'Dieu Lui-meme a garanti la preservation du Coran, contrairement a toute autre ecriture. Le Coran est preserve dans les coeurs et les ecrits depuis sa revelation.',quran:'C\'est Nous qui avons fait descendre le rappel et c\'est Nous qui en sommes gardiens',quranRef:'Al-Hijr 15:9',action:'Memorisez un nouveau verset aujourd\'hui et expliquez-le a quelqu\'un'}},
  {id:2,emoji:'🔬',ar:{title:'القرآن والعلم',desc:'القرآن لا يتعارض مع العلم الصحيح. بل كثير من الحقائق العلمية الحديثة ذُكرت في القرآن قبل ١٤ قرناً.',quran:'سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ',quranRef:'فصلت ٤١: ٥٣',action:'ابحث عن حقيقة علمية ذُكرت في القرآن'},en:{title:'Quran and Science',desc:'The Quran does not contradict sound science. Many modern scientific facts were mentioned in the Quran 14 centuries ago.',quran:'We will show them Our signs in the horizons and within themselves',quranRef:'Fussilat 41:53',action:'Research a scientific fact mentioned in the Quran'},fr:{title:'Le Coran et la Science',desc:'Le Coran ne contredit pas la science. De nombreux faits scientifiques modernes sont mentionnes dans le Coran depuis 14 siecles.',quran:'Nous leur montrerons Nos signes dans les horizons et en eux-memes',quranRef:'Fussilat 41:53',action:'Recherchez un fait scientifique mentionne dans le Coran'}},
  {id:3,emoji:'⚖️',ar:{title:'عدالة الشريعة',desc:'الشريعة الإسلامية جاءت لحفظ خمس ضروريات: الدين والنفس والعقل والنسل والمال. كل أحكامها تدور حول مصلحة الإنسان.',quran:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',quranRef:'الأنبياء ٢١: ١٠٧',action:'تعرف على المقاصد الخمس للشريعة وأمثلة عليها'},en:{title:'Justice of Shariah',desc:'Islamic law came to preserve five necessities: religion, life, intellect, lineage, and property. All its rulings revolve around human welfare.',quran:'And We have not sent you except as a mercy to all worlds',quranRef:'Al-Anbiya 21:107',action:'Learn about the five objectives of Shariah with examples'},fr:{title:'La Justice de la Charia',desc:'La loi islamique est venue pour preserver cinq necessites : la religion, la vie, l\'intellect, la lignee et les biens. Tous ses jugements tournent autour du bien-etre humain.',quran:'Et Nous ne t\'avons envoye qu\'en misericorde pour tous les mondes',quranRef:'Al-Anbiya 21:107',action:'Decouvrez les cinq objectifs de la Charia avec des exemples'}},
  {id:4,emoji:'🛡️',ar:{title:'الدفاع عن السنة',desc:'السنة النبوية محفوظة بسلسلة إسنادية فريدة. علم الحديث هو أدق منهج نقدي عرفته البشرية لتوثيق الروايات.',quran:'وَمَا يَنطِقُ عَنِ الْهَوَىٰ',quranRef:'النجم ٥٣: ٣',action:'اقرأ عن علم الجرح والتعديل وأهميته'},en:{title:'Defending the Sunnah',desc:'The Prophetic Sunnah is preserved through a unique chain of narration. Hadith science is the most rigorous critical methodology humanity has known for authenticating reports.',quran:'Nor does he speak from his own desire',quranRef:'An-Najm 53:3',action:'Read about the science of hadith authentication and its importance'},fr:{title:'Defendre la Sunna',desc:'La Sunna prophetique est preservee par une chaine de transmission unique. La science du hadith est la methodologie critique la plus rigoureuse que l\'humanite ait connue.',quran:'Et il ne prononce rien sous l\'effet du desir',quranRef:'An-Najm 53:3',action:'Lisez sur la science de l\'authentification du hadith'}},
  {id:5,emoji:'👩',ar:{title:'المرأة في الإسلام',desc:'الإسلام كرّم المرأة وأعطاها حقوقها كاملة. المستشرقون يقتطعون النصوص من سياقها لتشويه صورة الإسلام.',quran:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',quranRef:'البقرة ٢: ٢٢٨',action:'اقرأ عن حقوق المرأة في الإسلام بالمقارنة مع الحضارات القديمة'},en:{title:'Women in Islam',desc:'Islam honored women and gave them their full rights. Orientalists take texts out of context to distort the image of Islam.',quran:'And they have rights similar to those over them in a fair manner',quranRef:'Al-Baqarah 2:228',action:'Read about women\'s rights in Islam compared to ancient civilizations'},fr:{title:'La Femme en Islam',desc:'L\'Islam a honore la femme et lui a donne tous ses droits. Les orientalistes sortent les textes de leur contexte pour deformer l\'image de l\'Islam.',quran:'Et elles ont des droits equivalents a leurs obligations de maniere convenable',quranRef:'Al-Baqarah 2:228',action:'Lisez sur les droits des femmes en Islam compares aux civilisations anciennes'}},
  {id:6,emoji:'🗡️',ar:{title:'الجهاد: المفهوم الصحيح',desc:'الجهاد في الإسلام ليس عدواناً. هو دفاع عن النفس والدين والمظلومين. القتال آخر الوسائل لا أولها.',quran:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا',quranRef:'البقرة ٢: ١٩٠',action:'اشرح لأحد الفرق بين الجهاد الدفاعي والعدوان'},en:{title:'Jihad: The Correct Understanding',desc:'Jihad in Islam is not aggression. It is defense of self, religion, and the oppressed. Fighting is the last resort, not the first.',quran:'And fight in the way of God those who fight you but do not transgress',quranRef:'Al-Baqarah 2:190',action:'Explain to someone the difference between defensive jihad and aggression'},fr:{title:'Le Jihad : La Bonne Comprehension',desc:'Le jihad en Islam n\'est pas une agression. C\'est la defense de soi, de la religion et des opprimes. Le combat est le dernier recours, pas le premier.',quran:'Et combattez dans la voie de Dieu ceux qui vous combattent mais ne transgressez pas',quranRef:'Al-Baqarah 2:190',action:'Expliquez a quelqu\'un la difference entre le jihad defensif et l\'agression'}},
  {id:7,emoji:'📜',ar:{title:'الإسلام والحرية',desc:'الإسلام أعلن حرية العقيدة: لا إكراه في الدين. التاريخ يشهد أن المسلمين لم يجبروا أحداً على الإسلام.',quran:'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',quranRef:'البقرة ٢: ٢٥٦',action:'ابحث عن أمثلة تاريخية للتعايش الديني في الحضارة الإسلامية'},en:{title:'Islam and Freedom',desc:'Islam declared freedom of belief: there is no compulsion in religion. History shows that Muslims never forced anyone to embrace Islam.',quran:'There is no compulsion in religion — the right path is distinct from error',quranRef:'Al-Baqarah 2:256',action:'Research historical examples of religious coexistence in Islamic civilization'},fr:{title:'L\'Islam et la Liberte',desc:'L\'Islam a declare la liberte de croyance : pas de contrainte en religion. L\'histoire montre que les musulmans n\'ont jamais force quiconque a embrasser l\'Islam.',quran:'Nulle contrainte en religion — le chemin droit se distingue de l\'erreur',quranRef:'Al-Baqarah 2:256',action:'Recherchez des exemples historiques de coexistence religieuse en civilisation islamique'}},
  {id:8,emoji:'🏛️',ar:{title:'الحضارة الإسلامية',desc:'المسلمون بنوا حضارة عظيمة في العلوم والفنون والعمارة. المستشرقون يتجاهلون هذا الإسهام الحضاري الهائل.',quran:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',quranRef:'العلق ٩٦: ١',action:'تعرف على عالم مسلم أسهم في حضارة الإنسانية'},en:{title:'Islamic Civilization',desc:'Muslims built a great civilization in sciences, arts, and architecture. Orientalists ignore this enormous civilizational contribution.',quran:'Read in the name of your Lord who created',quranRef:'Al-Alaq 96:1',action:'Learn about a Muslim scholar who contributed to human civilization'},fr:{title:'La Civilisation Islamique',desc:'Les musulmans ont bati une grande civilisation dans les sciences, les arts et l\'architecture. Les orientalistes ignorent cette enorme contribution.',quran:'Lis au nom de ton Seigneur qui a cree',quranRef:'Al-Alaq 96:1',action:'Decouvrez un savant musulman qui a contribue a la civilisation humaine'}},
  {id:9,emoji:'🤝',ar:{title:'الإسلام والآخر',desc:'الإسلام يأمر بالعدل والإحسان مع غير المسلمين. الجوار والتجارة والمعاملة الحسنة مع الجميع من أصول الدين.',quran:'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ',quranRef:'الممتحنة ٦٠: ٨',action:'عامل اليوم شخصاً مختلفاً عنك بإحسان'},en:{title:'Islam and the Other',desc:'Islam commands justice and kindness toward non-Muslims. Good neighborliness, trade, and fair treatment with all are foundations of the religion.',quran:'God does not forbid you from being kind to those who have not fought you',quranRef:'Al-Mumtahanah 60:8',action:'Treat someone different from you with kindness today'},fr:{title:'L\'Islam et l\'Autre',desc:'L\'Islam ordonne la justice et la bonte envers les non-musulmans. Le bon voisinage, le commerce et le bon traitement de tous sont des fondements de la religion.',quran:'Dieu ne vous interdit pas d\'etre bienveillants envers ceux qui ne vous combattent pas',quranRef:'Al-Mumtahanah 60:8',action:'Traitez avec bonte aujourd\'hui quelqu\'un de different de vous'}},
  {id:10,emoji:'📚',ar:{title:'منهج النقد عند المستشرقين',desc:'كثير من المستشرقين درسوا الإسلام بأحكام مسبقة. منهجهم النقدي غير محايد وينطلق من افتراضات خاطئة.',quran:'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ',quranRef:'الصف ٦١: ٨',action:'اقرأ عن منهج الاستشراق وتعرف على تحيزاته'},en:{title:'Orientalist Methodology',desc:'Many Orientalists studied Islam with preconceived judgments. Their critical methodology is not neutral and starts from false assumptions.',quran:'They want to extinguish the light of God with their mouths',quranRef:'As-Saff 61:8',action:'Read about Orientalist methodology and its biases'},fr:{title:'La Methodologie Orientaliste',desc:'Beaucoup d\'orientalistes ont etudie l\'Islam avec des prejuges. Leur methodologie critique n\'est pas neutre et part de fausses hypotheses.',quran:'Ils veulent eteindre la lumiere de Dieu par leurs bouches',quranRef:'As-Saff 61:8',action:'Lisez sur la methodologie orientaliste et ses biais'}},
  {id:11,emoji:'🌍',ar:{title:'الإسلام دين عالمي',desc:'الإسلام ليس ديناً عربياً فحسب بل رسالة للعالمين. انتشاره السلمي في آسيا وأفريقيا دليل على صدقه.',quran:'وَمَا أَرْسَلْنَاكَ إِلَّا كَافَّةً لِّلنَّاسِ',quranRef:'سبأ ٣٤: ٢٨',action:'تعرف على كيفية وصول الإسلام إلى بلد غير عربي'},en:{title:'Islam: A Universal Religion',desc:'Islam is not just an Arab religion but a message for all worlds. Its peaceful spread in Asia and Africa is proof of its truth.',quran:'And We have not sent you except to all people',quranRef:'Saba 34:28',action:'Learn how Islam reached a non-Arab country'},fr:{title:'L\'Islam : Une Religion Universelle',desc:'L\'Islam n\'est pas seulement une religion arabe mais un message pour tous les mondes. Sa diffusion pacifique en Asie et en Afrique prouve sa veracite.',quran:'Et Nous ne t\'avons envoye qu\'a l\'ensemble des gens',quranRef:'Saba 34:28',action:'Decouvrez comment l\'Islam est arrive dans un pays non arabe'}},
  {id:12,emoji:'💡',ar:{title:'العقل في الإسلام',desc:'الإسلام يحترم العقل ويدعو للتفكر والتدبر. لم يطلب الإيمان الأعمى بل دعا لاستخدام البصيرة.',quran:'أَفَلَا تَعْقِلُونَ',quranRef:'البقرة ٢: ٤٤',action:'تأمل في آية واحدة اليوم وفكر في معناها بعمق'},en:{title:'Reason in Islam',desc:'Islam respects the intellect and calls for reflection and contemplation. It never demanded blind faith but called for using insight.',quran:'Will you not then reason?',quranRef:'Al-Baqarah 2:44',action:'Reflect deeply on one verse today and think about its meaning'},fr:{title:'La Raison en Islam',desc:'L\'Islam respecte l\'intellect et appelle a la reflexion et la contemplation. Il n\'a jamais exige une foi aveugle mais a appele a utiliser la perspicacite.',quran:'Ne raisonnerez-vous donc pas ?',quranRef:'Al-Baqarah 2:44',action:'Reflechissez profondement sur un verset aujourd\'hui'}},
  {id:13,emoji:'🕊️',ar:{title:'السلام في الإسلام',desc:'تحية الإسلام هي السلام. اسم الدين مشتق من السلام. العنف ليس من جوهر الإسلام بل هو انحراف عنه.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً',quranRef:'البقرة ٢: ٢٠٨',action:'انشر رسالة سلام اليوم في محيطك'},en:{title:'Peace in Islam',desc:'Islam\'s greeting is peace. The religion\'s name derives from peace. Violence is not the essence of Islam but a deviation from it.',quran:'O you who believe, enter into peace completely',quranRef:'Al-Baqarah 2:208',action:'Spread a message of peace in your surroundings today'},fr:{title:'La Paix en Islam',desc:'La salutation de l\'Islam est la paix. Le nom de la religion derive de la paix. La violence n\'est pas l\'essence de l\'Islam mais une deviation.',quran:'O vous qui croyez, entrez dans la paix entierement',quranRef:'Al-Baqarah 2:208',action:'Repandez un message de paix dans votre entourage aujourd\'hui'}},
  {id:14,emoji:'📊',ar:{title:'الاقتصاد الإسلامي',desc:'النظام الاقتصادي الإسلامي يقوم على العدالة والزكاة وتحريم الربا. هو بديل أخلاقي للاستغلال الرأسمالي.',quran:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',quranRef:'البقرة ٢: ٢٧٥',action:'تعرف على مبادئ الاقتصاد الإسلامي ومقارنتها بالنظم الأخرى'},en:{title:'Islamic Economics',desc:'The Islamic economic system is based on justice, zakat, and prohibiting usury. It is an ethical alternative to capitalist exploitation.',quran:'And God has permitted trade and forbidden usury',quranRef:'Al-Baqarah 2:275',action:'Learn about Islamic economic principles compared to other systems'},fr:{title:'L\'Economie Islamique',desc:'Le systeme economique islamique est base sur la justice, la zakat et l\'interdiction de l\'usure. C\'est une alternative ethique a l\'exploitation capitaliste.',quran:'Et Dieu a rendu licite le commerce et illicite l\'usure',quranRef:'Al-Baqarah 2:275',action:'Decouvrez les principes de l\'economie islamique compares aux autres systemes'}},
  {id:15,emoji:'🎓',ar:{title:'الاستشراق المنصف',desc:'ليس كل المستشرقين أعداء. بعضهم درس الإسلام بإنصاف واعترف بعظمته. يجب التمييز بين المنصف والمتحيز.',quran:'وَمِنْ أَهْلِ الْكِتَابِ مَنْ إِن تَأْمَنْهُ بِقِنطَارٍ يُؤَدِّهِ إِلَيْكَ',quranRef:'آل عمران ٣: ٧٥',action:'اقرأ عن مستشرق منصف وما كتبه عن الإسلام'},en:{title:'Fair Orientalism',desc:'Not all Orientalists are enemies. Some studied Islam fairly and acknowledged its greatness. We must distinguish between the fair and the biased.',quran:'Among the People of the Book are those who if entrusted with gold would return it',quranRef:'Aal Imran 3:75',action:'Read about a fair Orientalist and what they wrote about Islam'},fr:{title:'L\'Orientalisme Equitable',desc:'Tous les orientalistes ne sont pas des ennemis. Certains ont etudie l\'Islam equitablement et reconnu sa grandeur. Il faut distinguer entre l\'equitable et le partial.',quran:'Parmi les Gens du Livre certains si tu leur confies un quintal te le rendront',quranRef:'Aal Imran 3:75',action:'Lisez sur un orientaliste equitable et ce qu\'il a ecrit sur l\'Islam'}},
  {id:16,emoji:'🔍',ar:{title:'التحقق من المصادر',desc:'كثير من الشبهات تنبع من جهل أو سوء فهم. على المسلم أن يتحقق من مصادره ولا يقبل كل ما يُقال.',quran:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',quranRef:'الحجرات ٤٩: ٦',action:'تحقق اليوم من معلومة سمعتها قبل أن تنقلها'},en:{title:'Verifying Sources',desc:'Many misconceptions stem from ignorance or misunderstanding. Muslims must verify their sources and not accept everything said.',quran:'O believers, if a sinner brings you news, verify it',quranRef:'Al-Hujurat 49:6',action:'Verify a piece of information you heard before passing it on today'},fr:{title:'Verifier les Sources',desc:'Beaucoup d\'idees fausses viennent de l\'ignorance ou du malentendu. Les musulmans doivent verifier leurs sources et ne pas tout accepter.',quran:'O croyants, si un pervers vous apporte une nouvelle, verifiez-la',quranRef:'Al-Hujurat 49:6',action:'Verifiez une information entendue avant de la transmettre aujourd\'hui'}},
  {id:17,emoji:'🌟',ar:{title:'أخلاق النبي',desc:'أخلاق النبي محمد ﷺ هي أقوى رد على منتقديه. رحمته وعدله وصدقه شهد بها أعداؤه قبل أصدقائه.',quran:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',quranRef:'القلم ٦٨: ٤',action:'اقرأ موقفاً من سيرة النبي يُظهر أخلاقه العالية'},en:{title:'The Prophet\'s Character',desc:'The character of Prophet Muhammad is the strongest response to his critics. His mercy, justice, and truthfulness were witnessed by his enemies before his friends.',quran:'And you are truly of outstanding character',quranRef:'Al-Qalam 68:4',action:'Read a story from the Prophet\'s life that shows his noble character'},fr:{title:'Le Caractere du Prophete',desc:'Le caractere du Prophete Muhammad est la reponse la plus forte a ses critiques. Sa misericorde, sa justice et sa sincerite ont ete temoignees par ses ennemis.',quran:'Et tu es certes d\'un caractere eminent',quranRef:'Al-Qalam 68:4',action:'Lisez un recit de la vie du Prophete montrant son noble caractere'}},
  {id:18,emoji:'📝',ar:{title:'الإعجاز البلاغي',desc:'القرآن تحدى البشرية أن تأتي بمثله. لم يستطع أحد مطابقته لغوياً رغم مرور ١٤ قرناً.',quran:'قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ لَا يَأْتُونَ بِمِثْلِهِ',quranRef:'الإسراء ١٧: ٨٨',action:'تذوق جمال آية واحدة من القرآن وتأمل بلاغتها'},en:{title:'Linguistic Miracle',desc:'The Quran challenged humanity to produce anything like it. No one has been able to match it linguistically despite 14 centuries.',quran:'Say: If mankind and jinn gathered to produce the like of this Quran they could not',quranRef:'Al-Isra 17:88',action:'Appreciate the beauty of one Quranic verse and reflect on its eloquence'},fr:{title:'Le Miracle Linguistique',desc:'Le Coran a defie l\'humanite de produire quoi que ce soit de semblable. Personne n\'a pu l\'egaler linguistiquement malgre 14 siecles.',quran:'Dis : Si les hommes et les djinns s\'unissaient pour produire quelque chose de semblable ils n\'y arriveraient pas',quranRef:'Al-Isra 17:88',action:'Appreciez la beaute d\'un verset coranique et reflechissez a son eloquence'}},
  {id:19,emoji:'🏰',ar:{title:'التسامح في التاريخ الإسلامي',desc:'عندما فتح المسلمون القدس لم يُؤذوا أحداً. عهد عمر بن الخطاب نموذج فريد في التسامح الديني.',quran:'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',quranRef:'الكافرون ١٠٩: ٦',action:'اقرأ عن العهدة العمرية وتسامحها مع أهل القدس'},en:{title:'Tolerance in Islamic History',desc:'When Muslims conquered Jerusalem, they harmed no one. The Covenant of Umar is a unique model of religious tolerance.',quran:'For you is your religion and for me is mine',quranRef:'Al-Kafirun 109:6',action:'Read about the Covenant of Umar and its tolerance toward Jerusalem\'s people'},fr:{title:'La Tolerance dans l\'Histoire Islamique',desc:'Quand les musulmans ont conquis Jerusalem, ils n\'ont fait de mal a personne. Le pacte d\'Omar est un modele unique de tolerance religieuse.',quran:'A vous votre religion et a moi la mienne',quranRef:'Al-Kafirun 109:6',action:'Lisez sur le pacte d\'Omar et sa tolerance envers les habitants de Jerusalem'}},
  {id:20,emoji:'🌱',ar:{title:'الإسلام والبيئة',desc:'الإسلام سبق العالم في الحفاظ على البيئة. النبي نهى عن الإسراف في الماء وأمر بإحياء الأرض.',quran:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',quranRef:'الأعراف ٧: ٥٦',action:'مارس عادة بيئية إسلامية اليوم: لا تسرف في الماء'},en:{title:'Islam and the Environment',desc:'Islam preceded the world in environmental conservation. The Prophet forbade wasting water and commanded reviving barren land.',quran:'And do not corrupt the earth after it has been set right',quranRef:'Al-Araf 7:56',action:'Practice an Islamic environmental habit today: don\'t waste water'},fr:{title:'L\'Islam et l\'Environnement',desc:'L\'Islam a precede le monde dans la conservation de l\'environnement. Le Prophete a interdit le gaspillage de l\'eau et ordonne la revitalisation des terres.',quran:'Et ne corrompez pas la terre apres sa mise en ordre',quranRef:'Al-Araf 7:56',action:'Pratiquez une habitude ecologique islamique : ne gaspillez pas l\'eau'}}
];

// ═══════════════ RESPONSES DATA ═══════════════
const RESPONSES_DATA = [
  {emoji:'❓',ar:{title:'شبهة: القرآن منقول',problem:'يزعم بعض المستشرقين أن القرآن منقول من الكتب السابقة',solution:'القرآن يصحح أخطاء الكتب السابقة ويأتي بمعلومات علمية لم تكن معروفة. النبي كان أمياً لا يقرأ ولا يكتب'},en:{title:'Claim: Quran is Copied',problem:'Some Orientalists claim the Quran was copied from previous scriptures',solution:'The Quran corrects errors in previous scriptures and brings scientific information unknown at the time. The Prophet was illiterate'},fr:{title:'Allégation : Le Coran est Copie',problem:'Certains orientalistes pretendent que le Coran est copie des ecritures precedentes',solution:'Le Coran corrige les erreurs des ecritures precedentes et apporte des informations scientifiques inconnues a l\'epoque'}},
  {emoji:'⚔️',ar:{title:'شبهة: انتشار بالسيف',problem:'يُقال إن الإسلام انتشر بالسيف والإكراه',solution:'إندونيسيا أكبر دولة إسلامية لم يدخلها جندي مسلم واحد. التجار المسلمون وأخلاقهم كانوا سبب الانتشار'},en:{title:'Claim: Spread by the Sword',problem:'It is said that Islam spread by the sword and coercion',solution:'Indonesia, the largest Muslim country, was never invaded by Muslim soldiers. Muslim traders and their ethics were the cause of its spread'},fr:{title:'Allégation : Propagation par l\'Epee',problem:'On dit que l\'Islam s\'est propage par l\'epee et la coercition',solution:'L\'Indonesie, le plus grand pays musulman, n\'a jamais ete envahie par des soldats musulmans. Les commercants musulmans et leur ethique furent la cause'}},
  {emoji:'👩‍⚖️',ar:{title:'شبهة: ظلم المرأة',problem:'يُقال إن الإسلام يظلم المرأة ويحرمها حقوقها',solution:'الإسلام أعطى المرأة حق الملكية والإرث والتعليم والعمل قبل الغرب بقرون. الحجاب حرية لا قيد'},en:{title:'Claim: Oppression of Women',problem:'It is said that Islam oppresses women and denies them rights',solution:'Islam gave women the right to property, inheritance, education, and work centuries before the West. The hijab is freedom, not restriction'},fr:{title:'Allégation : Oppression des Femmes',problem:'On dit que l\'Islam opprime les femmes et leur refuse des droits',solution:'L\'Islam a donne aux femmes le droit a la propriete, l\'heritage, l\'education et le travail des siecles avant l\'Occident. Le hijab est liberte'}},
  {emoji:'🏗️',ar:{title:'شبهة: تخلف العلوم',problem:'يُقال إن الإسلام يعادي العلم والتقدم',solution:'المسلمون هم من اخترعوا الجبر والكيمياء والبصريات. ابن سينا والخوارزمي والرازي نماذج ساطعة'},en:{title:'Claim: Anti-Science',problem:'It is said that Islam is anti-science and anti-progress',solution:'Muslims invented algebra, chemistry, and optics. Ibn Sina, Al-Khwarizmi, and Al-Razi are shining examples'},fr:{title:'Allégation : Contre la Science',problem:'On dit que l\'Islam est contre la science et le progres',solution:'Les musulmans ont invente l\'algebre, la chimie et l\'optique. Ibn Sina, Al-Khawarizmi et Al-Razi en sont des exemples brillants'}},
  {emoji:'📖',ar:{title:'شبهة: تحريف القرآن',problem:'يزعم البعض أن القرآن تم تحريفه عبر القرون',solution:'القرآن يحفظه الملايين عن ظهر قلب. المخطوطات القديمة تطابق النص الحالي تماماً'},en:{title:'Claim: Quran was Altered',problem:'Some claim the Quran was altered over the centuries',solution:'Millions of people memorize the Quran by heart. Ancient manuscripts match the current text exactly'},fr:{title:'Allégation : Le Coran a ete Modifie',problem:'Certains pretendent que le Coran a ete modifie au fil des siecles',solution:'Des millions de personnes memorisent le Coran par coeur. Les manuscrits anciens correspondent exactement au texte actuel'}},
  {emoji:'⚖️',ar:{title:'شبهة: قسوة الحدود',problem:'يُقال إن العقوبات في الإسلام قاسية وبدائية',solution:'الحدود في الإسلام لها شروط صارمة نادراً ما تتحقق. الهدف الردع لا الإيذاء. والشبهات تُدرأ بها الحدود'},en:{title:'Claim: Harsh Punishments',problem:'It is said that punishments in Islam are harsh and primitive',solution:'Islamic penalties have strict conditions that are rarely met. The goal is deterrence, not harm. Doubts prevent the application of penalties'},fr:{title:'Allégation : Chatiments Severes',problem:'On dit que les chatiments en Islam sont severes et primitifs',solution:'Les peines islamiques ont des conditions strictes rarement remplies. L\'objectif est la dissuasion, pas le mal. Le doute empeche l\'application'}},
  {emoji:'🌐',ar:{title:'شبهة: عداء الحضارات',problem:'يُقال إن الإسلام يدعو لصدام الحضارات',solution:'القرآن يدعو للتعارف لا للتصادم. التاريخ الإسلامي مليء بنماذج التعايش السلمي مع مختلف الحضارات'},en:{title:'Claim: Clash of Civilizations',problem:'It is said that Islam calls for a clash of civilizations',solution:'The Quran calls for mutual understanding, not clash. Islamic history is full of peaceful coexistence with various civilizations'},fr:{title:'Allégation : Choc des Civilisations',problem:'On dit que l\'Islam appelle au choc des civilisations',solution:'Le Coran appelle a la connaissance mutuelle, pas au choc. L\'histoire islamique regorge de coexistence pacifique avec diverses civilisations'}},
  {emoji:'🔑',ar:{title:'شبهة: الردة والحرية',problem:'يُقال إن عقوبة الردة تنافي حرية الدين',solution:'الردة في السياق التاريخي كانت خيانة عظمى مرتبطة بالحرب. حرية الاعتقاد مكفولة والإكراه منهي عنه'},en:{title:'Claim: Apostasy and Freedom',problem:'It is said that the apostasy ruling contradicts religious freedom',solution:'Apostasy in historical context was treason linked to war. Freedom of belief is guaranteed and coercion is forbidden'},fr:{title:'Allégation : Apostasie et Liberte',problem:'On dit que la regle sur l\'apostasie contredit la liberte religieuse',solution:'L\'apostasie dans le contexte historique etait une trahison liee a la guerre. La liberte de croyance est garantie et la coercition est interdite'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قراءة صفحة من كتاب عقيدة',source:'من الكتاب: العلم أساس الدفاع'},en:{label:'Read a page on Islamic creed',source:'From the book: Knowledge is the foundation of defense'},fr:{label:'Lire une page sur le credo islamique',source:'Du livre : Le savoir est la base de la defense'}},
  {emoji:'🔍',ar:{label:'تحقق من معلومة قبل نشرها',source:'من الكتاب: التحقق من المصادر'},en:{label:'Verify information before sharing',source:'From the book: Verifying sources'},fr:{label:'Verifier une information avant de la partager',source:'Du livre : Verifier les sources'}},
  {emoji:'📚',ar:{label:'اقرأ ورد القرآن اليومي',source:'من الكتاب: حفظ القرآن'},en:{label:'Read daily Quran portion',source:'From the book: Preservation of Quran'},fr:{label:'Lire la portion quotidienne du Coran',source:'Du livre : Preservation du Coran'}},
  {emoji:'🤝',ar:{label:'عامل غير المسلم بإحسان',source:'من الكتاب: الإسلام والآخر'},en:{label:'Treat a non-Muslim with kindness',source:'From the book: Islam and the Other'},fr:{label:'Traiter un non-musulman avec bonte',source:'Du livre : L\'Islam et l\'Autre'}},
  {emoji:'💡',ar:{label:'تأمل آية واحدة بعمق',source:'من الكتاب: العقل في الإسلام'},en:{label:'Reflect deeply on one verse',source:'From the book: Reason in Islam'},fr:{label:'Reflechir profondement sur un verset',source:'Du livre : La raison en Islam'}},
  {emoji:'🌟',ar:{label:'اقرأ موقفاً من السيرة النبوية',source:'من الكتاب: أخلاق النبي'},en:{label:'Read a story from the Prophetic biography',source:'From the book: The Prophet\'s character'},fr:{label:'Lire un recit de la biographie prophetique',source:'Du livre : Le caractere du Prophete'}},
  {emoji:'🕊️',ar:{label:'انشر رسالة سلام اليوم',source:'من الكتاب: السلام في الإسلام'},en:{label:'Spread a message of peace today',source:'From the book: Peace in Islam'},fr:{label:'Repandre un message de paix aujourd\'hui',source:'Du livre : La paix en Islam'}},
  {emoji:'🌱',ar:{label:'لا تسرف في الماء اليوم',source:'من الكتاب: الإسلام والبيئة'},en:{label:'Don\'t waste water today',source:'From the book: Islam and the Environment'},fr:{label:'Ne gaspillez pas l\'eau aujourd\'hui',source:'Du livre : L\'Islam et l\'environnement'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تعرف كيف ترد على شبهة انتشار الإسلام بالسيف؟',en:'Do you know how to respond to the claim that Islam spread by the sword?',fr:'Savez-vous comment repondre a l\'allegation que l\'Islam s\'est propage par l\'epee ?'},
  {ar:'هل تقبل معلومات عن الإسلام دون تحقق؟',en:'Do you accept information about Islam without verification?',fr:'Acceptez-vous des informations sur l\'Islam sans verification ?'},
  {ar:'هل تستطيع شرح مقاصد الشريعة الخمس؟',en:'Can you explain the five objectives of Shariah?',fr:'Pouvez-vous expliquer les cinq objectifs de la Charia ?'},
  {ar:'هل تشعر بالحرج عندما يُسأل عن حقوق المرأة في الإسلام؟',en:'Do you feel embarrassed when asked about women\'s rights in Islam?',fr:'Etes-vous gene quand on vous interroge sur les droits des femmes en Islam ?'},
  {ar:'هل تقرأ بانتظام في العقيدة والدفاع عنها؟',en:'Do you regularly read about creed and its defense?',fr:'Lisez-vous regulierement sur le credo et sa defense ?'},
  {ar:'هل تعرف الفرق بين المستشرق المنصف والمتحيز؟',en:'Do you know the difference between a fair and biased Orientalist?',fr:'Connaissez-vous la difference entre un orientaliste equitable et partial ?'},
  {ar:'هل تستطيع ذكر ثلاثة علماء مسلمين أثروا في الحضارة العالمية؟',en:'Can you name three Muslim scholars who influenced world civilization?',fr:'Pouvez-vous nommer trois savants musulmans qui ont influence la civilisation mondiale ?'},
  {ar:'هل تحترم المختلف معك في الدين؟',en:'Do you respect those who differ from you in religion?',fr:'Respectez-vous ceux qui different de vous en religion ?'},
  {ar:'هل تستمع للشبهات لتفهمها ثم ترد عليها بعلم؟',en:'Do you listen to misconceptions to understand them, then respond with knowledge?',fr:'Ecoutez-vous les idees fausses pour les comprendre puis y repondre avec savoir ?'},
  {ar:'هل تدعو لمن يسيء فهم الإسلام بالهداية؟',en:'Do you pray for the guidance of those who misunderstand Islam?',fr:'Priez-vous pour la guidance de ceux qui comprennent mal l\'Islam ?'}
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  {ar:{label:'دعاء طلب العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'رب زدني علماً نافعاً'},en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'},fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir'}},
  {ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'اللهم نور قلبي وبصري وبصيرتي'},en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'O God, place light in my heart and in my sight'},fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'O Dieu, mets de la lumiere dans mon coeur et dans ma vue'}},
  {ar:{label:'دعاء الحق',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'اللهم أرني الحق واهدني لاتباعه'},en:{label:'Dua for Truth',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'O God, show me the truth and help me follow it'},fr:{label:'Dua pour la Verite',text:'اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ',tr:'O Dieu, montre-moi la verite et aide-moi a la suivre'}},
  {ar:{label:'دعاء الثبات',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'يا مقلب القلوب ثبت قلبي على دينك'},en:{label:'Dua for Steadfastness',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion'},fr:{label:'Dua pour la Fermete',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion'}},
  {ar:{label:'دعاء الفهم',text:'اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ',tr:'اللهم ارزقني الفقه في الدين'},en:{label:'Dua for Understanding',text:'اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ',tr:'O God, grant me deep understanding of the religion'},fr:{label:'Dua pour la Comprehension',text:'اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ',tr:'O Dieu, accorde-moi une profonde comprehension de la religion'}},
  {ar:{label:'دعاء الحفظ',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي',tr:'اللهم انفعني بعلمي وزدني علماً'},en:{label:'Dua for Benefit',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي',tr:'O God, benefit me with what You taught me and teach me what benefits me'},fr:{label:'Dua pour le Benefice',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي',tr:'O Dieu, fais-moi profiter de ce que Tu m\'as enseigne et enseigne-moi ce qui me profite'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا',tr:'ربنا أفرغ علينا صبراً في طلب العلم'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا',tr:'Our Lord, pour patience upon us in seeking knowledge'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا',tr:'Notre Seigneur, deverse sur nous la patience dans la quete du savoir'}},
  {ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'رب يسر لي أمر الدفاع عن الحق'},en:{label:'Dua for Facilitation',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand my chest and ease my task of defending truth'},fr:{label:'Dua pour la Facilitation',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite ma tache de defendre la verite'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('da-lang') || 'ar';
let theme = localStorage.getItem('da-theme') || 'flame';
const themes = ['flame','night','sky'];
const themeIcons = ['🔥','🌙','☁️'];
const themeNames = {flame:'🔥 Flame',night:'🌙 Night',sky:'☁️ Sky'};
let currentCardIdx = 0;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme); setLang(lang); initSplash(); initTabs(); initScrollTop();
  renderHome(); renderCards(); renderResponses(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas(); initScrollReveal(); initKeyboardNav();
});

function initSplash() {
  let count = 5; const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) { featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`).join(''); }
  const interval = setInterval(() => { count--; if (el) el.textContent = count; if (count <= 0) { dismissSplash(); clearInterval(interval); } }, 1000);
}
function dismissSplash() { const s = document.getElementById('splash'); if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); } playSound('click'); }

function setLang(l) {
  lang = l; localStorage.setItem('da-lang', l);
  const isRTL = l === 'ar'; document.documentElement.lang = l; document.documentElement.dir = isRTL ? 'rtl' : 'ltr'; document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l]; const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabResponses', t.tabResponses);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('responsesTitle', t.responsesTitle); set('responsesDesc', t.responsesDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle); set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderResponses(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) { featuresEl.innerHTML = T[l].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`).join(''); }
}

function setTheme(t) { theme = t; document.documentElement.dataset.theme = t; localStorage.setItem('da-theme', t); const idx = themes.indexOf(t); const el = document.getElementById('themeIcon'); if (el) el.textContent = themeIcons[idx]; }
function cycleTheme() { const idx = (themes.indexOf(theme) + 1) % themes.length; setTheme(themes[idx]); showToast(themeNames[themes[idx]]); playSound('theme'); }

function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); tab.classList.add('active'); const panel = document.getElementById('panel-' + tab.dataset.tab); if (panel) panel.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); playSound('click'); }); }); }

function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const c = CARDS[dayIdx]; const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${cd.title}</div><div class="daily-body">${cd.desc}</div><div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>`;
  const sections = [{icon:'🛡️',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة دفاعية':lang==='fr'?'20 cartes de defense':'20 defense cards'},{icon:'❓',tab:'responses',title:t.tabResponses,desc:lang==='ar'?'ردود على الشبهات':lang==='fr'?'Reponses aux allegations':'Responses to claims'},{icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},{icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معلوماتك':lang==='fr'?'Testez-vous':'Test yourself'},{icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب':lang==='fr'?'Le livre':'About the book'}];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `<div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()"><span class="hc-icon">${s.icon}</span><div class="hc-title">${s.title}</div><div class="hc-desc">${s.desc}</div></div>`).join('');
}

function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => { const d = c[lang]; return `<div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}"><div class="principle-head" onclick="toggleCard('card-${c.id}')"><span class="principle-num">${c.id}</span><span class="principle-emoji">${c.emoji}</span><span class="principle-title">${d.title}</span><span class="principle-chev">&#9660;</span></div><div class="principle-body"><div class="principle-inner"><p class="principle-desc">${d.desc}</p><div class="verse-box"><div class="verse-arabic">${d.quran}</div><div class="verse-ref">${d.quranRef}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="event.stopPropagation();shareCard(${i})"><span class="share-icon">&#128279;</span> ${t.share}</button></div></div></div>`; }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) { const q = query.toLowerCase().trim(); document.querySelectorAll('.principle-card').forEach(card => { const s = card.dataset.search || ''; const t = card.querySelector('.principle-title'); const tt = t ? t.textContent.toLowerCase() : ''; card.style.display = (!q || s.includes(q) || tt.includes(q)) ? '' : 'none'; }); }

async function shareCard(idx) { const c = CARDS[idx]; const d = c[lang]; const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n📖 ${d.quran}\n\n💡 ${d.action}\n\n— دفاع عن العقيدة | Defense of Creed`; if (navigator.share) { try { await navigator.share({ title: d.title, text }); } catch(e) {} } else { try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); } } }

function renderResponses() {
  document.getElementById('responsesContainer').innerHTML = RESPONSES_DATA.map(r => { const d = r[lang]; return `<div class="anxiety-card scroll-reveal"><div class="anxiety-header"><span class="anxiety-emoji">${r.emoji}</span><span class="anxiety-title">${d.title}</span></div><div class="anxiety-problem"><span class="anxiety-label">${lang==='ar'?'❌ الشبهة':lang==='fr'?'❌ L\'Allegation':'❌ The Claim'}</span>${d.problem}</div><div class="anxiety-solution"><span class="anxiety-label">${lang==='ar'?'✅ الرد':lang==='fr'?'✅ La Reponse':'✅ The Response'}</span>${d.solution}</div></div>`; }).join('');
}

function renderHabits() {
  const today = new Date().toDateString(); let hs = JSON.parse(localStorage.getItem('da-habits') || '{}');
  if (hs.date !== today) { updateStreak(hs); hs = { date: today, done: [] }; localStorage.setItem('da-habits', JSON.stringify(hs)); }
  const streak = getStreak(); const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => { const d = h[lang]; const isDone = hs.done.includes(i); return `<div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})"><span class="habit-check">${isDone ? '&#10003;' : ''}</span><span class="habit-emoji">${h.emoji}</span><div><div class="habit-label">${d.label}</div><div class="habit-source">${d.source}</div></div></div>`; }).join('');
  const streakEl = document.getElementById('streakBadge'); if (streakEl) streakEl.innerHTML = streakHTML; updateHabitsProgress(hs);
}
function toggleHabit(i) { const today = new Date().toDateString(); let hs = JSON.parse(localStorage.getItem('da-habits') || '{}'); if (hs.date !== today) hs = { date: today, done: [] }; const idx = hs.done.indexOf(i); if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i); localStorage.setItem('da-habits', JSON.stringify(hs)); renderHabits(); playSound(idx > -1 ? 'click' : 'success'); if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); } }
function resetHabits() { localStorage.setItem('da-habits', JSON.stringify({ date: new Date().toDateString(), done: [] })); renderHabits(); showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset'); }
function updateHabitsProgress(hs) { const done = hs.done.length; const total = HABITS.length; const pct = total > 0 ? (done / total * 100) : 0; const fill = document.getElementById('habitsFill'); const txt = document.getElementById('habitsText'); if (fill) fill.style.width = pct + '%'; if (txt) txt.textContent = `${done}/${total}`; }
function updateStreak(prev) { let sd = JSON.parse(localStorage.getItem('da-streak') || '{"count":0,"lastDate":""}'); if (prev && prev.done && prev.done.length === HABITS.length && prev.date) { const y = new Date(); y.setDate(y.getDate() - 1); if (prev.date === y.toDateString()) sd.count++; else if (prev.date !== new Date().toDateString()) sd.count = prev.done.length === HABITS.length ? 1 : 0; sd.lastDate = prev.date; } else if (prev && prev.date) { sd.count = 0; sd.lastDate = prev.date; } localStorage.setItem('da-streak', JSON.stringify(sd)); }
function getStreak() { return JSON.parse(localStorage.getItem('da-streak') || '{"count":0}').count; }

function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#C62828','#EF5350','#FF8A80','#FFCDD2','#66BB6A','#FFA726','#FFD54F']; for (let i = 0; i < 120; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-.5)*10}); let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

function renderQuiz() {
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `<div class="quiz-question scroll-reveal" id="quiz-q-${i}"><div class="quiz-q-text">${i+1}. ${q[lang]}</div><div class="quiz-options"><button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button><button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button></div></div>`).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden'); window._quizAnswers = {};
}
function selectQuizOpt(qi, val) { window._quizAnswers[qi] = val; document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => { o.classList.toggle('selected', [2,1,0][oi] === val); }); playSound('click'); }
function submitQuiz() {
  const answers = window._quizAnswers || {}; if (Object.keys(answers).length < QUIZ.length) { showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions'); return; }
  const invertedQs = [1, 3]; let score = 0; Object.entries(answers).forEach(([qi, v]) => { score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v; });
  const max = QUIZ.length * 2; const pct = Math.round(score / max * 100); let emoji, title, desc;
  if (pct >= 75) { emoji = '🛡️'; title = lang==='ar'?'مدافع قوي!':lang==='fr'?'Fort defenseur !':'Strong Defender!'; desc = lang==='ar'?'لديك معرفة جيدة بالدفاع عن العقيدة. استمر في التعلم!':lang==='fr'?'Vous avez une bonne connaissance de la defense du credo. Continuez !':'You have good knowledge of defending the creed. Keep learning!'; }
  else if (pct >= 50) { emoji = '📚'; title = lang==='ar'?'على الطريق':lang==='fr'?'Sur la bonne voie':'On the Path'; desc = lang==='ar'?'أنت تسير في الاتجاه الصحيح. واصل القراءة في بطاقات الدفاع.':lang==='fr'?'Vous allez dans la bonne direction. Continuez a lire les cartes.':'You\'re on the right track. Keep reading the defense cards.'; }
  else { emoji = '🔍'; title = lang==='ar'?'ابدأ رحلة المعرفة':lang==='fr'?'Commencez a apprendre':'Start Learning'; desc = lang==='ar'?'العقيدة تحتاج دراسة معمقة. ابدأ ببطاقات الدفاع.':lang==='fr'?'Le credo necessite une etude approfondie. Commencez par les cartes.':'The creed requires deep study. Start with the defense cards.'; }
  const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); playSound('success');
}

function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم',disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',authorName:'الشيخ محمد الغزالي',authorDates:'١٩١٧ — ١٩٩٦',authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. عُرف بالدفاع عن الإسلام ضد الشبهات والتحديات الفكرية.',bookTitle:'عن الكتاب',bookDesc:'"دفاع عن العقيدة والشريعة ضد مطاعن المستشرقين" كتاب يرد فيه الشيخ الغزالي على شبهات المستشرقين الموجهة للإسلام. يتناول الدفاع عن القرآن والسنة والشريعة بأسلوب علمي ومنهجي.',sourcesTitle:'المصادر',sources:['كتاب "دفاع عن العقيدة والشريعة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],contact:'تواصل: abdelhak.bourdim@gmail.com'},
    en: { disclaimerTitle:'⚠️ Important Notice',disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',authorBio:'Egyptian Islamic scholar and thinker, known as "The Literary Preacher." Author of 94+ books. Known for defending Islam against misconceptions and intellectual challenges.',bookTitle:'About the Book',bookDesc:'"Defense of Creed and Shariah Against Orientalist Claims" is a book in which Sheikh al-Ghazali responds to Orientalist misconceptions about Islam. It addresses the defense of the Quran, Sunnah, and Shariah with a scholarly and systematic approach.',sourcesTitle:'Sources',sources:['"Defense of Creed and Shariah" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],contact:'Contact: abdelhak.bourdim@gmail.com'},
    fr: { disclaimerTitle:'⚠️ Avis Important',disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',authorName:'Sheikh Mohammed al-Ghazali',authorDates:'1917 — 1996',authorBio:'Savant et penseur islamique egyptien. Auteur de plus de 94 livres. Connu pour defendre l\'Islam contre les idees recues et les defis intellectuels.',bookTitle:'A Propos du Livre',bookDesc:'« Defense du Credo et de la Charia contre les Critiques des Orientalistes » est un livre ou le Sheikh al-Ghazali repond aux idees recues des orientalistes sur l\'Islam avec une approche savante et systematique.',sourcesTitle:'Sources',sources:['« Defense du Credo et de la Charia » — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],contact:'Contact : abdelhak.bourdim@gmail.com'}
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي.'},{title:'📚 المصادر',body:'كتاب "دفاع عن العقيدة" للشيخ محمد الغزالي، القرآن الكريم، السنة.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة، ٨ ردود فكرية، تتبع العادات، اختبار، ٨ أدعية.'},{title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom.'},{title:'📚 Sources',body:'"Defense of Creed" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 cards, 8 responses, habit tracker, quiz, 8 duas.'},{title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Escape to close panels.'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'« Defense du Credo » par Sheikh al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, 8 reponses, suivi habitudes, quiz, 8 duas.'},{title:'⌨️ Raccourcis',body:'Fleches pour naviguer. Echap pour fermer les panneaux.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

function initScrollReveal() { if (!('IntersectionObserver' in window)) return; const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); } observeAll(); document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); }); }

function initKeyboardNav() { document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open')); } if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1); currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' }); playSound('click'); } }); }

function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

const AudioCtx = window.AudioContext || window.webkitAudioContext; let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; } else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; } else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }
