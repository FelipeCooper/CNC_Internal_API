let selectMotivo = document.querySelector('#selectMotivo');
let selectSetor = document.querySelector('#selectSetor');
let selectSubmotivo = document.querySelector('#selectSubmotivo');
//-----//
selectSetor.addEventListener('change', async event => {
    let request = await requisicao('motivos',{setor_id : selectSetor.value});
    let result =await request.json();
    addOption(selectMotivo,result);
})

selectMotivo.addEventListener('change', async event =>{
    let request = await requisicao('submotivos',{motivo_id : selectMotivo.value})
    console.log(request)
    let result = await request.json();
    addOption(selectSubmotivo,result);
})




//FUNÇOES AUXILIARES
function addOption(select,result) {
    select.innerHTML = '';
    result.forEach(element => {
        var option = new Option(element.titulo, element.id);
        select.add(option);
    });

}

async function requisicao(caminho, body){
    let request = await fetch(caminho, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return request;
}