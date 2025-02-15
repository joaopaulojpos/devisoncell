function calculo(val1, val2) {
    valor_compra = parseInt(val1);
    valor_entrada = val2;
  
    var taxas = [4.29, 4.66, 5.23, 6.46, 7.20, 7.50, 7.92, 8.78, 9.39, 9.98, 10.68, 11.45, 11.98, 12.68, 13.33, 13.98, 14.69, 15.53];
  
    let taxa_debito = 2;
    var valor_parcelas = [];
    var valor_total = [];
  
    var valor = valor_compra - valor_entrada;
  
    //parte da taxa de débito
    let percentual_debito = (taxa_debito * valor) / 100;
    let debito_total = valor + percentual_debito;
    
    var i = 0;
    while (taxas[i]) {
      
      let percentual = (taxas[i] * valor) / 100
      valor_total.push(valor + percentual); //Populando os valores totais
      valor_parcelas.push((valor + percentual) / (i+1)); //Populando os valores das parcelas
      i++;
    }
  
    var table = "";
    for(var i in valor_parcelas){
      let parcelas = (parseInt(i) + 1);
      table += "<tr>" + "<td>" + parcelas + " x" + "</td>" + "<td>" + valor_parcelas[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
      valor_total[i].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";
    }
  
    debito_linha = "<tr>" + "<td>" + "Débito " + "</td>" + "<td>" + debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td>" + "<td>" + 
    debito_total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + "</td></tr>";
  
    document.getElementById("exibir").innerHTML = debito_linha + table;
  
  }
  
  var text = document.getElementById("val_compra");
  var entrada = document.getElementById("val_entrada");
  
  text.addEventListener("keyup", function () {
    var val_compra = this.value;
    var val_entrada = document.getElementById("val_entrada").innerHTML
    calculo(val_compra, val_entrada);
  })
  
  entrada.addEventListener("keyup", function () {
    var val_compra = text.value
    val_entrada = this.value;
    calculo(val_compra, val_entrada);
  })
  
  function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
  }
  
  document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    
    if(str == ',' | str == '.')
        alert("Por favor apague e digite apenas números");
  };