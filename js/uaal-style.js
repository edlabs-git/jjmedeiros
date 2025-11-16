///===============================
// Ativando Botão para voltar ao topo do Site
// Para utilizar use o código ---> "<div id="scroll_top"><a href="http://www.uaal.com.br/"></a></div>"
$(window).scroll(function() {
			if($(this).scrollTop() > 200) {
				$('#scroll_top').fadeIn();	
			} else {
				$('#scroll_top').fadeOut();
			}
		});
	 
		$('#scroll_top').click(function(e) {
			$('body,html').animate({scrollTop:0},500);
			e.preventDefault();
			return false;
		});
!function ($) {
$(function(){
  // Fix para o menu em dispositivos móveis para bug de inicialização https://github.com/twitter/bootstrap/issues/4550
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { 
	  e.stopPropagation(); 
  });
  $(document).on('click','.dropdown-menu a',function(){
	  document.location = $(this).attr('href');
  });
})
}(window.jQuery)


// Attivando a Transição do Carrossel do BootStrap
$('.carousel').carousel({
 interval: 3777
});


//-------------------------------
function isEmpty(s)		{
	return ((s == null) || (s == 0) || (s.length == 0) || (s == "0,00") || (s == "0,0") || (s == "0,") || (s == "0.00") || (s == "0.0") || (s == "0."))
}


function SaltaCampo(campo, prox, tammax, teclapres) { var tecla = teclapres.keyCode; var vr = campo.value; var tam = vr.length; if ((tecla != 9) && (tecla != 16) && (tecla != 8)) { if (campo.value.length >= tammax) { campo.value = campo.value.substring(0, tammax); prox.focus(); } } };
function SaltaCampoTras(campo, prox, tammax, e) { };


// ===== Validação 
// Modo de usar use uma div antes do campo <div class="control-group authentication"> e coloque em algum local a tag <small></smal>
// Use alt do input para colocar a mensagem que você deseja que apareça no small
// o input de dados tem que ter a class "form-item"
// o button submit tem que ter a class "authenticationButton"

	$(".authenticationButton").on( "click", function() {
		a =  $('.form-item','.authentication');
		a.eq(0).val()
		for (var i=0;i<a.length;i++) {
			if (a.eq(i).val() == '' ) {
				if (!(a.eq(i).attr("name") == 'PasswordConfirm' && $('input[name="Password"]').val() == '' )){
					$('.authentication').eq(i).addClass("error");
					if ($('.authentication small').eq(i).text() == '') {
						$('.authentication small').eq(i).append('('+a.eq(i).attr('alt')+')');
					}
					var valida = true
				}
			} else {
				$('.authentication').eq(i).removeClass("error");
				$('.authentication small').eq(i).text("");
				 switch (a.eq(i).attr("name")) {
					case 'Email':
						if (!(IsEmail(a.eq(i).val()))) {
							$('.authentication').eq(i).addClass("error");
							$('.authentication small').eq(i).append('(E-mail inválido, favor verificar!)');
							var valida = true
						}					
						break;
					
					case 'PasswordConfirm':
						if (!(a.eq(i).val() == $('.Password').val())) {
							$('.authentication').eq(i).addClass("error");
							$('.authentication small').eq(i).append('(As senhas não são iguais!)');
							var valida = true
						}					
						break;
						
					case 'CPF':
						if (!(verificarCPF(a.eq(i).val()))) {
							$('.authentication').eq(i).addClass("error");
							$('.authentication small').eq(i).append('(CPF inválido!)');
							var valida = true
						}						
						break;
						
					case 'Birth_Date':
						if (!(ValidaData(a.eq(i).val()))) {
							$('.authentication').eq(i).addClass("error");
							$('.authentication small').eq(i).append('(Data de Nascimento inválido!)');
							var valida = true
						}						
						break;								
				  }
	
			}			
		}
		 	
		if (valida) {
			return false
		}
	});



	$(".authentication2Button").on( "click", function() {
		a =  $('.form-item','.authentication2');
		a.eq(0).val()
		for (var i=0;i<a.length;i++) {
			if (a.eq(i).val() == '' ) {
				if (!(a.eq(i).attr("name") == 'PasswordConfirm' && $('input[name="Password"]').val() == '' )){
					$('.authentication2').eq(i).addClass("error");
					if ($('.authentication2 small').eq(i).text() == '') {
						$('.authentication2 small').eq(i).append('('+a.eq(i).attr('alt')+')');
					}
					var valida = true
				}
			} else {
				$('.authentication2').eq(i).removeClass("error");
				$('.authentication2 small').eq(i).text("");
				 switch (a.eq(i).attr("name")) {
					case 'Email':
						if (!(IsEmail(a.eq(i).val()))) {
							$('.authentication2').eq(i).addClass("error");
							$('.authentication2 small').eq(i).append('(E-mail inválido, favor verificar!)');
							var valida = true
						}					
						break;
					
					case 'PasswordConfirm':
						if (!(a.eq(i).val() == $('.Password').val())) {
							$('.authentication2').eq(i).addClass("error");
							$('.authentication2 small').eq(i).append('(As senhas não são iguais!)');
							var valida = true
						}					
						break;
						
					case 'CPF':
						if (!(verificarCPF(a.eq(i).val()))) {
							$('.authentication2').eq(i).addClass("error");
							$('.authentication2 small').eq(i).append('(CPF inválido!)');
							var valida = true
						}						
						break;
						
					case 'Birth_Date':
						if (!(ValidaData(a.eq(i).val()))) {
							$('.authentication2').eq(i).addClass("error");
							$('.authentication2 small').eq(i).append('(Data de Nascimento inválido!)');
							var valida = true
						}						
						break;								
				  }
	
			}			
		}
		 	
		if (valida) {
			return false
		}
	});


	$(".authentication3Button").on( "click", function() {
		a =  $('.form-item','.authentication3');
		a.eq(0).val()
		for (var i=0;i<a.length;i++) {
			if (a.eq(i).val() == '' ) {
				if (!(a.eq(i).attr("name") == 'PasswordConfirm' && $('input[name="Password"]').val() == '' )){
					$('.authentication3').eq(i).addClass("error");
					if ($('.authentication3 small').eq(i).text() == '') {
						$('.authentication3 small').eq(i).append('('+a.eq(i).attr('alt')+')');
					}
					var valida = true
				}
			} else {
				$('.authentication3').eq(i).removeClass("error");
				$('.authentication3 small').eq(i).text("");
				 switch (a.eq(i).attr("name")) {
					case 'Email':
						if (!(IsEmail(a.eq(i).val()))) {
							$('.authentication3').eq(i).addClass("error");
							$('.authentication3 small').eq(i).append('(E-mail inválido, favor verificar!)');
							var valida = true
						}					
						break;
					
					case 'PasswordConfirm':
						if (!(a.eq(i).val() == $('.Password').val())) {
							$('.authentication3').eq(i).addClass("error");
							$('.authentication3 small').eq(i).append('(As senhas não são iguais!)');
							var valida = true
						}					
						break;
						
					case 'CPF':
						if (!(verificarCPF(a.eq(i).val()))) {
							$('.authentication3').eq(i).addClass("error");
							$('.authentication3 small').eq(i).append('(CPF inválido!)');
							var valida = true
						}						
						break;
						
					case 'Birth_Date':
						if (!(ValidaData(a.eq(i).val()))) {
							$('.authentication3').eq(i).addClass("error");
							$('.authentication3 small').eq(i).append('(Data de Nascimento inválido!)');
							var valida = true
						}						
						break;								
				  }
	
			}			
		}
		 	
		if (valida) {
			return false
		}
	});
	
	

	$(".authentication4Button").on( "click", function() {
		a =  $('.form-item','.authentication4');
		a.eq(0).val()
		for (var i=0;i<a.length;i++) {
			if (a.eq(i).val() == '' ) {
				if (!(a.eq(i).attr("name") == 'PasswordConfirm' && $('input[name="Password"]').val() == '' )){
					$('.authentication4').eq(i).addClass("error");
					if ($('.authentication4 small').eq(i).text() == '') {
						$('.authentication4 small').eq(i).append('('+a.eq(i).attr('alt')+')');
					}
					var valida = true
				}
			} else {
				$('.authentication4').eq(i).removeClass("error");
				$('.authentication4 small').eq(i).text("");
				 switch (a.eq(i).attr("name")) {
					case 'Email':
						if (!(IsEmail(a.eq(i).val()))) {
							$('.authentication4').eq(i).addClass("error");
							$('.authentication4 small').eq(i).append('(E-mail inválido, favor verificar!)');
							var valida = true
						}					
						break;
					
					case 'PasswordConfirm':
						if (!(a.eq(i).val() == $('.Password').val())) {
							$('.authentication4').eq(i).addClass("error");
							$('.authentication4 small').eq(i).append('(As senhas não são iguais!)');
							var valida = true
						}					
						break;
						
					case 'CPF':
						if (!(verificarCPF(a.eq(i).val()))) {
							$('.authentication4').eq(i).addClass("error");
							$('.authentication4 small').eq(i).append('(CPF inválido!)');
							var valida = true
						}						
						break;
						
					case 'Birth_Date':
						if (!(ValidaData(a.eq(i).val()))) {
							$('.authentication4').eq(i).addClass("error");
							$('.authentication4 small').eq(i).append('(Data de Nascimento inválido!)');
							var valida = true
						}						
						break;								
				  }
	
			}			
		}
		 	
		if (valida) {
			return false
		}
	});
	
	


	$(".authentication5Button").on( "click", function() {
		a =  $('.form-item','.authentication5');
		a.eq(0).val()
		for (var i=0;i<a.length;i++) {
			if (a.eq(i).val() == '' ) {
				if (!(a.eq(i).attr("name") == 'PasswordConfirm' && $('input[name="Password"]').val() == '' )){
					$('.authentication5').eq(i).addClass("error");
					if ($('.authentication5 small').eq(i).text() == '') {
						$('.authentication5 small').eq(i).append('('+a.eq(i).attr('alt')+')');
					}
					var valida = true
				}
			} else {
				$('.authentication5').eq(i).removeClass("error");
				$('.authentication5 small').eq(i).text("");
				 switch (a.eq(i).attr("name")) {
					case 'Email':
						if (!(IsEmail(a.eq(i).val()))) {
							$('.authentication5').eq(i).addClass("error");
							$('.authentication5 small').eq(i).append('(E-mail inválido, favor verificar!)');
							var valida = true
						}					
						break;
					
					case 'PasswordConfirm':
						if (!(a.eq(i).val() == $('.Password').val())) {
							$('.authentication5').eq(i).addClass("error");
							$('.authentication5 small').eq(i).append('(As senhas não são iguais!)');
							var valida = true
						}					
						break;
						
					case 'CPF':
						if (!(verificarCPF(a.eq(i).val()))) {
							$('.authentication5').eq(i).addClass("error");
							$('.authentication5 small').eq(i).append('(CPF inválido!)');
							var valida = true
						}						
						break;
						
					case 'Birth_Date':
						if (!(ValidaData(a.eq(i).val()))) {
							$('.authentication5').eq(i).addClass("error");
							$('.authentication5 small').eq(i).append('(Data de Nascimento inválido!)');
							var valida = true
						}						
						break;								
				  }
	
			}			
		}
		 	
		if (valida) {
			return false
		}
	});
	
	
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}	

function verificarCPF(c){
	c = c.replace(".","");
	c = c.replace(".","");
	c = c.replace(".","");
	c = c.replace("-","");

    var i;
    s = c;
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;
 
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
    //    alert("CPF Inválido")

        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
     //  alert("CPF Inválido")
        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
      //  alert("CPF Inválido")
        v = true;
        return false;
    }
    if (!v) {
        //alert(c + "nCPF Válido")
		return true
    }
}



//adiciona mascara de cnpj
function MascaraCNPJ(cnpj,teclapres){
		var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;
        if (e < 48 || e > 57){
				if (window.teclapres) {//IE

				window.teclapres.returnValue = false;

				} else { //Firefox

				teclapres.preventDefault();

				}        
        }
		 return formataCampo(cnpj, '00.000.000/0000-00', teclapres);
        
}

//adiciona mascara de cep
function MascaraCep(cep,teclapres){
		var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;
		if(mascaraInteiro(e)==false){
                e.returnValue = false;
        }   
        return formataCampo(cep, '00.000-000', e);
}

//adiciona mascara de data
function MascaraData(data,teclapres){
		var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;
        if(mascaraInteiro(e)==false){
                e.returnValue = false;
        }       
        return formataCampo(data, '00/00/0000', e);
}


//adiciona mascara ao telefone
function MascaraTelefone(tel,teclapres){
		var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;

		var telNew = tel.value.replace(" ","").replace("-","").replace("(","").replace(")","")
		if (telNew.length > 0) {			
			if (e != 8) {
				if(mascaraInteiro(e)==false){
						e.returnValue = false;
				}
				if (telNew.length >10) {
					return formataCampo(tel, '(00) 00000-0000', e);
				} else{
					return formataCampo(tel, '(00) 0000-0000', e);
				}
			}else {
				return true;
			}
		}        
}


//adiciona mascara ao CPF
function MascaraCPF(cpf,teclapres){
		var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;

		if (e > 47 && e < 58) {
			        return formataCampo(cpf, '000.000.000-00', teclapres);
		} else
			{
				if (e != 8)
					if (window.teclapres) {//IE

					window.teclapres.returnValue = false;

					} else { //Firefox

					teclapres.preventDefault();

					}
				else
					return true;
			}


        return formataCampo(cpf, '000.000.000-00', teclapres);
}


//valida telefone
function ValidaTelefone(tel){
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/
        if(!exp.test(tel.value))
                alert('Numero de Telefone Invalido!');
}

//valida CEP
function ValidaCep(cep){
        exp = /\d{2}\.\d{3}\-\d{3}/
        if(!exp.test(cep.value))
                alert('Numero de Cep Invalido!');               
}

//valida data
function ValidaData(campo) {
        var expReg = /^(([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/[1-2][0-9]\d{2})$/;
        var msgErro = 'Formato inválido de data.';
        if ((campo.match(expReg)) && (campo.value!='')) {
               // alert('Data válida'); 
			   return true
        } else {
                //alert(msgErro);
				return false
        } 
}

//valida numero inteiro com mascara
function mascaraInteiro(teclapres){
        if (teclapres < 48 || teclapres > 57){
                teclapres.returnValue = false;
                return false;
				
        } else
		{
			return true;
		}
}

//valida o CNPJ digitado
function ValidarCNPJ(ObjCnpj){
        var cnpj = ObjCnpj.value;
        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
        var dig1= new Number;
        var dig2= new Number;
        
        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace( exp, "" ); 
        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));
                
        for(i = 0; i<valida.length; i++){
                dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                dig2 += cnpj.charAt(i)*valida[i];       
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));
        
        if(((dig1*10)+dig2) != digito)  
                alert('CNPJ Invalido!');
                
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) { 
        var boleanoMascara; 
        
        var Digitato = evento;
        exp = /\-|\.|\/|\(|\)| /g
        campoSoNumeros = campo.value.toString().replace( exp, "" ); 
   
        var posicaoCampo = 0;    
        var NovoValorCampo="";
        var TamanhoMascara = campoSoNumeros.length; 

        if (Digitato != 8) { // backspace 
                for(i=0; i<= TamanhoMascara; i++) { 
                        boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                                || (Mascara.charAt(i) == "/")) 
                        boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                        if (boleanoMascara) { 
                                NovoValorCampo += Mascara.charAt(i); 
                                  TamanhoMascara++;
                        }else { 
                                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                                posicaoCampo++; 
                          }              
                  }      
                campo.value = NovoValorCampo;
                  return true; 
        }else { 
                return true; 
        }
}



// ================= Checkout

		$('#FinishCheckout').click(function(e) {
			if ($('input[name="SelectedAddress"]').length){
				if (!($('input[name="SelectedAddress"]').is(':checked'))) {		
					$("#ErrorFormSelectedAddress").show("slow");
					return false;				
				} else {
					$("#ErrorFormSelectedAddress").hide("slow");
					return true;
				}
			}
		});


		$('#FinishCheckout').click(function(e) {
			if (!($('input[name="FormPayment_Id"]').is(':checked'))) {		
				$("#ErrorFormPayment").show("slow");
				return false;
				
			} else {
				$("#ErrorFormPayment").hide("slow");
				return true;
			}
		});
		
		$('#FinishCheckout').click(function(e) {
			if ($('input[name="FormShipping_Id"]').length){
				if (!($('input[name="FormShipping_Id"]').is(':checked'))) {		
					$("#ErrorFormShipping").show("slow");
					return false;					
				} else {
					$("#ErrorFormShipping").hide("slow");
					return true;
				}
			}
		});		
		
				


//------login

function AcessoPainelUaal() {
	$("#login-acesso-sistema-uaal-ativo").addClass("ativo");
	$(".botao-login").addClass("ativo");
	$("#login-acesso-sistema-uaal-ativo").animate({height:'150px'},473);
}
function FechaPainelUaal() {								
	$(".botao-login").removeClass("ativo");
	$("#login-acesso-sistema-uaal-ativo").removeClass("ativo");
}
function ValidaFormLoginUaal() {
	alert("Dados incorretos, favor verificar ou entre em contato com uaal!")
	return false;
}



$( ".prince" ).keypress(function(teclapres) {
	var e = teclapres.keyCode ? teclapres.keyCode : teclapres.which ? teclapres.which : teclapres.charCode;

	if (e == 44){
          $(this).val($(this).val()+'.');
          teclapres.preventDefault();
	} else {
		if (e < 48 || e > 57){	
			teclapres.returnValue = false;
			return false;
		}
	}
});	