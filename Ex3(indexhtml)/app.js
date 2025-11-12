document.addEventListener('DOMContentLoaded', function() {

    const changeButton = document.getElementById('altaViataBtn');
    changeButton.addEventListener('click', function() {
        const numeElem = document.getElementById('nume');
        const prenumeElem = document.getElementById('prenume');
        const asteptariElem = document.getElementById('asteptari');
        const hobbyElem = document.getElementById('hobby-uri');

        numeElem.innerHTML = "Numele de la job: Mortan Razvan";
        prenumeElem.innerHTML = "Functia visata: Penetration Tester";
        
        asteptariElem.innerHTML = "<strong>Realizari in facultate:</strong> Absolvent cu media 9.80, posesor al certificarii Offensive Security Certified Professional (OSCP) obtinuta in anul 3 si autor al unui paper de cercetare despre securitatea retelelor 5G.";
        hobbyElem.innerHTML = "<strong>Experiente ideale:</strong> Stagiu de practica international la o companie de top in cybersecurity, contributor activ la proiecte open-source de securitate si castigator al competitiei nationale 'DefCamp'.";
        
        document.body.classList.add('alta-viata');
        changeButton.style.display = 'none';
    });
});



function calculeazaVarsta(anulNasterii) {
    const anCurent = new Date().getFullYear();
    const varsta = anCurent - anulNasterii;
    const elementText = document.getElementById('anNastere');
    
    elementText.innerHTML = "Varsta: " + varsta + " ani";
}

function reseteazaText(anulNasterii) {
    const elementText = document.getElementById('anNastere');
    elementText.innerHTML = "Anul nasterii: " + anulNasterii;
}