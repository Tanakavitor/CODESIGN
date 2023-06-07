document.addEventListener('DOMContentLoaded', function() {
    metadias = document.querySelectorAll('h2');
    metadias1 = metadias[0];
    metadias1.addEventListener('click', function() {
        if (metadias1.innerHTML == 'Adicionar meta de dias: 0') {
            metadias1.innerHTML = 'Adicionar meta de dias: 5';
        }
        else if (metadias1.innerHTML == 'Adicionar meta de dias: 5') {
            metadias1.innerHTML = 'Adicionar meta de dias: 10';
        }
        else if (metadias1.innerHTML == 'Adicionar meta de dias: 10') {
            metadias1.innerHTML = 'Adicionar meta de dias: 0'
        }
        
    })
})
