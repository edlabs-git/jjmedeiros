<!--#include file="../FuncoesFormatacao.asp"-->
<% 

Response.Charset="ISO-8859-1" 
Response.addHeader "pragma", "no-cache"
Response.Expires = 0

	function fixAcento(sDec)
	dim objRE
	set objRE = new RegExp
	sDec = Replace(sDec, "+", " ")
	objRE.Pattern = "%([0-9a-fA-F]{2})"
	objRE.Global = True
	fixAcento = objRE.Replace(sDec, GetRef("fixAcentoHex"))
	end Function

	function fixAcentoHex(sMatch, lhex_digits, lpos, ssource)
	fixAcentoHex = chr("&H" & lhex_digits)
	end Function

	dim webservice_query(2)
	Dim Parsed(9,9)

	webservice_url = " http://webservice.uni5.net/web_cep.php"

	webservice_query(0) = "60c4ece629795099256c40cf3baff4b6" 'Chave de autenticação do WebService - Consultar seu painel de controle
	webservice_query(1) = "query_string" 'Valores possíveis: xml, query_string ou javascript
	webservice_query(2) = replace(Request("Cep"),".","")  'CEP que será pesquisado


	webservice_url = webservice_url &"?"&_
	"auth="&_
	webservice_query(0)&_
	"&formato="&_
	webservice_query(1)&_
	"&cep="&_
	webservice_query(2)

	' Efetua requisição ao webservice
	set Xml = Server.CreateObject("Microsoft.XMLHTTP")
	Xml.open "GET", webservice_url, false
	Xml.send()
	Resultado = Xml.responseText
	Resultado = split( Resultado, "&")

	' Montando parametros
	for e = 1 To ubound( Resultado)
	temporario = split( Resultado(e), "=")

	Parsed(e,0) = temporario(0)
	Parsed(e,1) = replace( temporario(1), "+", " ")
	next

	' Montando resposta
	Select Case Parsed(1,1)

	Case "2"
	texto = " "&_
	"<b>Cidade: </b> "&Parsed(4,1)&" "&_
	"<b>UF: </b> "&Parsed(3,1)


	Case "1"
	texto = " "&_
	"Cidade com logradouro completo "&_
	"<b>Tipo de Logradouro: </b> "&Parsed(6,1)&" "&_
	"<b>Logradouro: </b> "&Parsed(7,1)&" "&_
	"<b>Bairro: </b> "&Parsed(5,1)&" "&_
	"<b>Cidade: </b> "&Parsed(4,1)&" "&_
	"<b>UF: </b> "&Parsed(3,1)

	End Select
	
	If Parsed(1,1) = "0" Then
		response.write "<div class=""alert alert-error"" id=""ErrorFormPayment"" style=""display: block;""><p><strong>Desculpe, não conseguimos localizar seu endereço. <br />Favor verifique seu CEP. <br /><br /> Caso esteja correto digite o restante dos campos que faltam, para finalizar a compra.</strong></p></div>"
	End If
	
%>

	<div class="grid-8-12 control-group authentication"><label><span>Rua, Avenida, Praça, etc...</span><input type="text" class="form-item" id="Street" maxlength="173" name="Street" alt="Digite sua rua" value="<%=fixAcento(Parsed(6,1)) &" "& fixAcento(Parsed(7,1)) %>"/></label><small class="help-inline"></small></div>
	<div class="grid-4-12 control-group authentication"><label><span>Número</span><input type="text" id="Number" class="form-item"  maxlength="15"	name="Number" alt="Digite o número da rua" /></label><small class="help-inline"></small></div>

	<div class="grid-6-12 control-group "><label><span>Complemento</span><input type="text" id="Completement" maxlength="173"	name="Completement"/></label></div>
	<div class="grid-6-12 control-group authentication"  ><label><span>Bairro</span><input type="text" id="District" maxlength="107"class="form-item"	name="District" alt="Digite seu bairro." value="<%=fixAcento(Parsed(5,1))%>"/></label><small class="help-inline"></small></div>

	<div class="grid-8-12 control-group authentication"><label><span>Cidade</span><input type="text" id="City" maxlength="107" class="form-item"	name="City"  alt="Digite sua cidade" value="<%=fixAcento(Parsed(4,1))%>"/></label><small class="help-inline"></small></div>
	<div class="grid-4-12 control-group authentication"><label><span>UF</span><input type="text" id="State" maxlength="2" class="form-item"	name="State" alt="Digite seu estado" value="<%=fixAcento(Parsed(3,1))%>" /></label><small class="help-inline"></small></div>
