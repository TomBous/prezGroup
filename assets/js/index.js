var tableau = [
    {
        "title": "Un super article 1",
        "content": "1Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 1",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 2",
        "content": "2Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 2",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 3",
        "content": "3Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 3",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 4",
        "content": "4Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 4",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 5",
        "content": "5Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 5",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 6",
        "content": "6Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 6",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    }
];
window.onload = function() {
    
    function loadObject() {
        var i = 0;
        while (i < tableau.length) {
            var newArticle = document.querySelector('card.article').cloneNode(true);
            var section = document.getElementsByTagName('section')[0];
            section.appendChild(newArticle);
            newArticle.classList.remove('hidden');
            document.querySelectorAll('h2.titre')[i+1].textContent = tableau[i].title;
            document.querySelectorAll('p.resumes')[i+1].textContent = tableau[i].resumes;
            document.querySelectorAll('p.author')[i+1].textContent = tableau[i].author;
            document.querySelectorAll('img.a-img')[i+1].setAttribute('src', tableau[i].img);
            document.querySelectorAll('button.but')[i+1].setAttribute('id', i);
            i += 1;
        }
    }
document.getElementById('ok').onclick = function() {
    moveDown(document.querySelector('section.profil1'));
}
loadObject();

function moveUp(elem) {
    var top=-60;
    function frame() {
        top++;
        elem.style.top = top + 'vh';
        if (top == 10){
        clearInterval(id)
        }
    }
        var id = setInterval(frame, 10); 
}
function moveDown(elem) {
    var down=10;
    function frame() {
        down--;
        elem.style.top = down + 'vh';
        if (down == -60){
        clearInterval(id)
        }
    }
        var id = setInterval(frame, 10); 
}
var info = document.querySelectorAll('button.but')
    for (var n=0; n < info.length; n++) {
    var inf = info[n];
    inf.addEventListener("click", function() {
        moveUp(document.querySelector('section.profil1'));
    var click = this.id;
    document.querySelector('section.profil1 div p').textContent = tableau[click].content;
        });
    };
    
}