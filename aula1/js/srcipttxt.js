document.addEventListener('DOMContentLoaded', function() {
    var botao1 = document.querySelector('.botao-enviar');
    var entradas = document.querySelector('.entrada-msg');
    var panels = document.querySelector('.msg-panel');
    
    
    function Onishi() {
      var textoMsg = entradas.value;
      
      if (textoMsg.trim() === '') {
        return;
      }
      
      var novaMensagemEnviada = document.createElement('section');
      novaMensagemEnviada.classList.add('msg-usuario');
      novaMensagemEnviada.innerHTML = `
        <div class="bolha-usuario bolha-enviada">
          <p>${textoMsg}</p>
        </div>
      `;
      
      var novaMensagemResposta = document.createElement('section');
      novaMensagemResposta.classList.add('msg-resposta');
      novaMensagemResposta.innerHTML = `
        <div class="bolha-resposta">
          <p>Aguarde 5 minutos</p>
        </div>
      `;
      
      panels.insertBefore(novaMensagemEnviada, document.querySelector('.bloco-envio-msg'));
      panels.insertBefore(novaMensagemResposta, document.querySelector('.bloco-envio-msg'));
      
      entradas.value = '';
    }
    
    botao1.addEventListener('click', Onishi);
  });
  