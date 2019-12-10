var tableau = [
    {
        "title": "Un super article 1",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 1",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 2",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 2",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 3",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 3",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 4",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 4",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 5",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 5",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    },
    {
        "title": "Un super article 6",
        "content": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime accipienda cum in ceteris peccatis, tum si quis contra rem publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et Scaevola, locati sumus ut nos longe prospicere oporteat futuros casus rei publicae. Deflexit iam aliquantum de spatio curriculoque consuetudo maiorum.",
        "resumes": "Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes nec faciamus rogati. Turpis enim excusatio est et minime....",
        "author": "author 6",
        "img": "https://static.education.francetv.fr/media/img/hd/img.gif",
    }
];
window.onload = function() {
    
    function loadObject() {
        var i = 0;
        while (i < tableau.length) {
            var newArticle = document.querySelector('section.article').cloneNode(true);
            document.body.appendChild(newArticle);
            newArticle.classList.remove('hidden');
            document.querySelectorAll('h2.title')[i+1].textContent = tableau[i].title;
            document.querySelectorAll('p.content')[i+1].textContent = tableau[i].content;
            document.querySelectorAll('p.resumes')[i+1].textContent = tableau[i].resumes;
            document.querySelectorAll('p.author')[i+1].textContent = tableau[i].author;
            document.querySelectorAll('img.a-img')[i+1].setAttribute('src', tableau[i].img);
            i += 1; 
        }
    }
loadObject();
}