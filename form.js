function counter() {
    let textarea = document.getElementById("txt1").value;
    let textlength = textarea.length;
    document.getElementById("result").innerHTML = textlength;
    let language = function (text) {
        return /[а-я]/i.test(text);
    }
    if (language(textarea)) {
        if (textlength <= 70) {
            document.getElementById("countmsg").innerHTML = 1;
            document.getElementById("count").value = 1;
            document.getElementById("label1").innerHTML = ' необходимо сообщение';
        }
        else {
            document.getElementById("label1").innerHTML = ' необходимо сообщения';
            document.getElementById("countmsg").innerHTML = Math.ceil(textlength / 67);
            document.getElementById("count").value = Math.ceil(textlength / 67);
        }
    }
    else {
        if (textlength <= 160) {
            document.getElementById("countmsg").innerHTML = 1;
            document.getElementById("count").value = 1;
            document.getElementById("label1").innerHTML = ' необходимо сообщение';
        }
        else {
            document.getElementById("label1").innerHTML = ' необходимо сообщения';
            document.getElementById("countmsg").innerHTML = Math.ceil(textlength / 153);
            document.getElementById("count").value = Math.ceil(textlength / 153);
        }
    }
}
function transliterate() {
    let text = document.getElementById('txt1').value;
    let
        rus = "щ    Щ  ш  Ш  ч  Ч  ц  Ц  я  Я  ё  Ё  ж  Ж  а А б Б в В г Г д Д е Е з З и И  й Й к К л Л м М н Н о О п  П р Р с С т Т у У ф Ф х Х ъ Ъ  ы Ы ь Ь э Э ю Ю «  »  – — № `".split(/ +/g),
        eng = "sch Sch sh Sh ch Ch ts Ts ya Ya yo Yo zh Zh a A b B v V g G d D e E z Z i I y Y k K l L m M n N o O p P r R s S t T u U f F h H ' '  i I  ' '  e E  u U \" \" - - # '".split(/ +/g);
    //text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    if (document.getElementById('checkbox').checked) {
        for (let i = 0; i < rus.length; i++) {
            text = text.split(rus[i]).join(eng[i]);
        }
        document.getElementById('txt1').value = text;
    }
    else {
        document.getElementById('txt1').value = text;
        for (let j = 0; j < rus.length; j++) {
            text = text.split(eng[j]).join(rus[j]);
        }
        document.getElementById('txt1').value = text;
    }
}