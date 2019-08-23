var xhr = new XMLHttpRequest();
let selectMotivo = document.querySelector('#selectMotivo');
let selectSetor = document.querySelector('#selectSetor');
let selectSubmotivo = document.querySelector('#selectSubmotivo');
//-----//
selectSetor.addEventListener('change', async event => {
    limparSelect([selectMotivo,selectSubmotivo])
    let result = await requisicaoPost('motivos',{setor_id : selectSetor.value});
    addOption(selectMotivo,result);
})
//
selectMotivo.addEventListener('change', async event =>{
    limparSelect([selectSubmotivo])
    let result = await requisicaoPost('submotivos',{motivo_id : selectMotivo.value});
    addOption(selectSubmotivo,result);
})
//FUNÇOES AUXILIARES
function addOption(select,result) {
    result.forEach(element => {
        let option = new Option(element.titulo, element.id);
        select.add(option);
    });
}
//
async function requisicaoPost(caminho, body){
    let request = await fetch(caminho, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await request.json();
}
//
function limparSelect(select){
    select.forEach(sel =>{
        sel.innerHTML = '<option disabled selected>Selecione uma opção</option>';
    });
}
//
async function redirecionaMostrar(){
    let usuario = 'usuario';
    let setor = 2;
    post('mostrar',{usuario: usuario, setor_id: setor})
}
//



//FUNÇAO PARA ENVIAR BODY APENAS NO CLICK DE UM LINK
function post(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }