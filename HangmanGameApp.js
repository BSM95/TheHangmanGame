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

