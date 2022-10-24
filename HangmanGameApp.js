const words = [
    {
        id: 1,
        answer: 'تشلسي',
        hint: 'نادي أوروبي فاز ببطولة دوري ابطال اوروبا في عامي 2012 و 2021',
        category: 'رياضة',
    },
    {
        id: 2,
        answer: 'مهاتما جاندي',
        hint: 'سياسي هندي اشتهر بالثورة السلمية',
        category: 'شخصيات',
    },
    {
        id: 3,
        answer: 'فاميلي جاي',
        hint: 'مسلسل كرتوني امريكي ',
        category: 'عروض',
    },
    {
        id: 4,
        answer: 'تمر',
        hint: 'ثمرة مشهورة بحلاوتها ودائما ما تأكل مع القهوة',
        category: 'أغذية',
    },
    {
        id: 5,
        answer: 'الطائف',
        hint: 'سوق عكاظ يتواجد في هذه المدينة',
        category: 'جغرافيا'
    },
    {
        id: 6,
        answer: 'نهاوند',
        hint: 'معركة سماها المسلمون بفتح الفتوح',
        category: 'تاريخ',
    },
    {
        id: 7,
        answer: 'الهلال',
        hint: 'اول فريق فاز بلقب الدوري السعودي',
        category: 'رياضة',
    },
    {
        id: 8,
        answer: 'محمد الشارخ',
        hint: 'أول من أدخل اللغة العربية في الحواسيب',
        category: 'شخصيات',
    },
    {
        id: 9,
        answer: 'محمد هنيدي',
        hint: 'بطل مسلسل أرض النفاق',
        category: 'عروض',
    },
    {
        id: 10,
        answer: 'الثريد',
        hint: 'خبز مغموس بمرق اللحم',
        category: 'أغذية',
    },
    {
        id: 11,
        answer: 'أستراليا',
        hint: 'أحد قارات العالم',
        category: 'جغرافيا',
    },
    {
        id: 12,
        answer: 'موسى بن نصير',
        hint: 'أحد قادات الدولة الأموية رفض قتال علي بن أبي طالب رضي الله عنه في معركة صفين',
        category: 'تاريخ',
    },
    {
        id: 13,
        answer: 'جنوب افريقيا',
        hint: 'أول دولة تستضيف بطولة كأس العالم بعد القارتان الأمريكيتين وأوروبا وأسيا',
        category: 'رياضة',
    },
    {
        id: 14,
        answer: 'مبتكر جائزة نوبل',
        hint: 'الجواب في السؤال',
        category: 'شخصيات',
    },
    {
        id: 15,
        answer: 'طاش ما طاش',
        hint: 'مسلسل خليجي مكون من ثلاثة كلمات, الكلمة ألاولى تطابق الكلمة الأخيرة',
        category: 'عروض',
    },
    {
        id: 16,
        answer: 'ايدام',
        hint: 'حساء فيه خضروات متنوعة',
        category: 'أغذية',
    },
    {
        id: 17,
        answer: 'قناة السويس',
        hint: 'ممر مائي يربط البحرين الأحمر والمتوسط',
        category: 'جغرافيا',
    },
    {
        id: 18,
        answer: 'المغرب',
        hint: 'قامت فيها دولة الموحدين',
        category: 'تاريخ',
    },
    {
        id: 19,
        answer: 'كريكت',
        hint: 'رياضة مشهورة في دولتي الهند وباكستان',
        category: 'رياضة',
    },
    {
        id: 20,
        answer: 'عمر المختار',
        hint: 'مقاوم عربي حارب المحتلين الطليان لمدة تقارب العشرين عاما',
        category: 'شخصيات',
    },
    {
        id: 21,
        answer: 'السبع وصايا',
        hint: 'قصته تدور حول اتفاق الأشفاء على قتل والدهم',
        category: 'عروض',
    },
    {
        id: 22,
        answer: 'بيتزا',
        hint: 'أكلة شهيرة تنتسب لأحد الدول الأوربية',
        category: 'أغذية',
    },
    {
        id: 23,
        answer: 'اسلام أباد',
        hint: 'عاصمة لدولة تجاور الهند',
        category: 'جغرافيا',
    },
    {
        id: 24,
        answer: 'مملكة الحجاز ونجد وملحقاتها',
        hint: 'اسم قديم للملكة العربية السعودية',
        category: 'تاريخ',
    },
    {
        id: 25,
        answer: 'ساديو ماني',
        hint: 'صاحب اسرع هاترك في تاريخ الدوري الإنجليزي',
        category: 'رياضة',
    },
    {
        id: 26,
        answer: 'ابن سينا',
        hint: 'عالم مسلم اشتهر بالطب والفلسفة وعمل بهما',
        category: 'شخصيات',
    },
    {
        id: 27,
        answer: 'الفارس الحمداني',
        hint: 'أول مسلسل درامي سعودي',
        category: 'عروض',
    },
    {
        id: 28,
        answer: 'المح',
        hint: 'من مكونات البيض',
        category: 'أغذية',
    },
    {
        id: 29,
        answer: 'البحر الميت',
        hint: 'أدنى بقعة على وجه الأرض',
        category: 'جغرافيا',
    },
    {
        id: 30,
        answer: 'يوليوس قيصر',
        hint: 'قائد ودكتاكور روماني كانت له فتوحات عظيمة في عهده',
        category: 'تاريخ',
    },
    {
        id: 31,
        answer: 'الفتح',
        hint: 'نادي سعودي حقق بطولة الدوري السعودي في موسم 2012-2013',
        category: 'رياضة',
    },
    {
        id: 32,
        answer: 'علاء الدين',
        hint: 'شخصية خيالية شرقية مشهورة وردت في قصص الألف ليلة وليلة',
        category: 'شخصيات',
    },
    {
        id: 33,
        answer: 'لهفة',
        hint: 'مسلسل كوميدي مصري تدور أحداثه حول فتاة تشق طريقها في مجال التمثيل',
        category: 'عروض',
    },
    {
        id: 34,
        answer: 'جريش',
        hint: 'من أشهرالأطعمة التراثية السعودية',
        category: 'أغذية',
    },
    {
        id: 35,
        answer: 'النيبال',
        hint: 'موطن أعلى قمة جبل في العالم',
        category: 'جغرافيا',
    },
    {
        id: 36,
        answer: 'عنبسة الكلبي',
        hint: 'قائد أندلسي وصل بجيشه إلى مدينة باريس',
        category: 'تاريخ',
    },
    {
        id: 37,
        answer: 'بارما',
        hint: 'نادي إيطالي وصلت قمة عطائه في التسعينات وهو حاليا يلعب في دوري الدرجة الثالثة',
        category: 'رياضة',
    },
    {
        id: 38,
        answer: 'نايف حمدان',
        hint: 'صانع محتوى سعودي اشتهر بسرده القصص التاريخية بأسلوب كوميدي',
        category: 'شخصيات',
    },
    {
        id: 39,
        answer: 'بريكنج باد',
        hint: 'مسلسل جريمة درامي يدور حول اقتحام معلم كيمياء لعالم الجريمة',
        category: 'عروض',
    },
    {
        id: 40,
        answer: 'فلافل',
        hint: 'أكلة عربية مشهورة يتم يتناولها غالبا في الإفطار',
        category: 'أغدية',
    },
    {
        id: 41,
        answer: 'اليمن',
        hint: 'كانت موطنا لمملكة سبأ',
        category: 'جغرافيا',
    },
    {
        id: 42,
        answer: 'حجر اليمامة',
        hint: 'إسم قديم للمكان الذي تتواجد فيه مدينة الرياض',
        category: 'تاريخ',
    },
    {
        id: 43,
        answer: 'ايدين دجيكو',
        hint: 'الهداف التاريخي لمنتخب البوسنة والهرسك',
        category: 'رياضة',
    },
    {
        id: 44,
        answer: 'عبدالرحمن السميط',
        hint: 'كويتي اشتهر بعمل الخير والدعوة إلى الله في البلاد الإفريقية',
        category: 'شخصيات',
    },
    {
        id: 45,
        answer: 'باب الحارة',
        hint: 'مسلسل شامي مشهور تناول حقبة الإحتلال الفرنسي في الشام',
        category: 'عروض',
    },
    {
        id: 46,
        answer: 'برجر',
        hint: 'طبقة من اللحم أو الدجاج في قطعتين من الخبز',
        category: 'أغذية',
    },
    {
        id: 47,
        answer: 'نجد',
        hint: 'منطقة كانت تدعى باليمامة',
        category: 'جعقرافيا',
    },
    {
        id: 48,
        answer: 'قابيل',
        hint: 'أشهر قاتل لأخيه',
        category: 'تاريخ',
    },
    {
        id: 49,
        answer: 'ستيفن جيرارد',
        hint: 'إسم لاعب لأسرع حالة طرد حصلت له في تاريخ الدوري الإنجليزي للاعب بديل',
        category: 'رياضة',
    }
    

]
console.log(words.length);
const rand = Math.floor(Math.random() * words.length);
const theAnswer = words[rand].answer;
const theHint = words[rand].hint;
const categoryDOM = words[rand].category;

const lettersContainer = document.querySelector('.letters');
const hintBtn = document.querySelector('.take-hint');

const letters = 'أبتثجحخدذرزسشصضطظعغفقكلمنهوياىةؤءئ';

window.addEventListener('DOMContentLoaded', displayAphabet)

document.querySelector('.category span').textContent = categoryDOM;

hintBtn.addEventListener('click', function(e){
    hintBtn.nextElementSibling.textContent = theHint;
    hintBtn.nextElementSibling.style.padding = '0.175rem';
})



const answerArray = Array.from(theAnswer);
const answerContainer = document.querySelector('.letter-guess');

answerArray.forEach(function(letter){
    let emptySpan = document.createElement('span');

    if(letter === ' '){
        emptySpan.textContent = ' '
        emptySpan.classList.add('with-space');
    }

    answerContainer.appendChild(emptySpan);
})

const guesses = answerContainer.querySelectorAll('span');
const attemptsDOM = document.querySelector('.attempts span');
const success = document.getElementById('success');
const failed = document.getElementById('failed');
const popUp = document.querySelector('.pop-up');
const innerContent = popUp.querySelector('.inner-content');

const vol = '0.2';
success.setAttribute('src', 'Audio/success.mp3');
failed.setAttribute('src', 'Audio/failed.mp3');
success.volume = vol;
failed.volume = vol;
let attempts = 8;

lettersContainer.addEventListener('click', function(e){
    let btn = e.target;
    let status = false;
    if(btn.classList.contains('box')){
        btn.classList.add('disableBtn');

       answerArray.forEach(function(item, index){
        if(btn.textContent === item){
            guesses[index].textContent = btn.textContent;
            status = true;
        }
       })

       if(!status){
        attempts--;
        attemptsDOM.textContent = attempts;
        failed.play();
       } else {
        success.play();
       }

       switch (attempts){
        case 7: {
            document.querySelector('.the-draw').classList.add('show');
            break;
        }
        case 6: {
            document.querySelector('.the-stand').classList.add('show');
            break;
        }
        case 5: {
            document.querySelector('.the-hang').classList.add('show');
            break;
        }
        case 4: {
            document.querySelector('.the-rope').classList.add('show');
            break;
        }
        case 3: {
            document.querySelector('.the-head').classList.add('show');
            break;
        }
        case 2: {
            document.querySelector('.the-body').classList.add('show');
            break;
        }
        case 1: {
            document.querySelector('.hands').classList.add('show');
            break;
        }
        case 0: {
            document.querySelector('.legs').classList.add('show');
            endGame()
            innerContent.classList.add('lose');
            innerContent.innerHTML = `
            <h2>انتهت اللعبة</h2>
            <p>الإجابة هي: <span>${theAnswer}</span></p>
            `

        }
       }

       if(answerContainer.textContent.trim() === theAnswer){
        endGame();
        innerContent.classList.add('win');
        innerContent.innerHTML = `
        <h2>مبروك</h2>
        <span>لقد فزت!</span>
        `
       }
        
    } else {
        return false;
    }
    
})

const closeWindow = document.querySelector('.close');
const reset = document.querySelector('.reset');

closeWindow.addEventListener('click', function(e){
    popUp.classList.remove('display');
})

reset.addEventListener('click', function(){
    window.location.reload();
})

function endGame(){
    let buttons = lettersContainer.querySelectorAll('.box');

    buttons.forEach(function(item){
        item.classList.add('disableBtn');
    })

    popUp.classList.add('display');
}

function displayAphabet(){
    const lettersArray = Array.from(letters);
    
    lettersArray.forEach(function(letter){
        let span = document.createElement('span');
        let childText = document.createTextNode(letter);
        span.appendChild(childText);
        span.classList.add('box');
    
        lettersContainer.appendChild(span);
    })
}

