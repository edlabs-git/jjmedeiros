<!--#include file="../FuncoesFormatacao.asp"-->
<% 
		Response.Charset="ISO-8859-1" 
		Response.addHeader "pragma", "no-cache"
		Response.Expires = 0
		
			pCartCount = InStr(Request.Cookies("CartSKU"),","& Request("Id") &"=")
			pLeftPart = Left(Request.Cookies("CartSKU"),pCartCount) &""& Left(Mid(Request.Cookies("CartSKU"),pCartCount+1),InStr(Mid(Request.Cookies("CartSKU"),pCartCount+1),"="))
			pRightPart = MID(Request.Cookies("CartSKU"),LEN(pLeftPart)+1)
			
			If InStr(pRightPart,",") > 0 then			
				pRightPart = MID(pRightPart,InStr(pRightPart,","))
				
			End If
			pLeftPart = Left(pLeftPart,InStr(pLeftPart,","& Request("Id") &"=")-1)

		If InStr(pLeftPart & pRightPart ,",") > 0 then	
			Response.Cookies("CartSKU") =  pLeftPart & pRightPart
		ELSE
			Response.Cookies("CartSKU") =  ""
		End If
					
	
		'response.write  Response.Cookies("CartSKU")
%>   
