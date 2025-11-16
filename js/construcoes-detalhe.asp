<% =Inicial(false) %>
<%
	strQuery = "SELECT * FROM photo_album WHERE Publish=1 AND Handle='"& nivel3 &"'"
	Set cm   = Server.CreateObject("ADODB.recordset")
	cm.Open strQuery, Application("strProvider") ,3,3	
	
	If cm.eof then
		response.redirect Application("Dominio") &"/pagina-nao-encontrada"
	ELSE
	
		'<!-- Meta Tags -->
		Response.write "<title>"& cm("Title") &"</title>"
		Response.write "<meta name=""title"" content="""& cm("Title") &""" />"
		Response.write "<meta name=""description"" content="""& cm("SEO_MetaTagDescription") &""">"
		Response.write "<meta name=""keywords"" content="""& cm("Tag") &""" />"

		Response.write "<link rel=""canonical"" href="""& Application("Dominio") &"/"& nivel1 &"/"& nivel2 &"/"& nivel3 &"""/>"

		'<!-- Social -->
		Response.write "<meta property='og:title' content='"& cm("Title") &"' />"
		Response.write "<meta property='og:description' content='"& cm("SEO_MetaTagDescription") &"' />"
		Response.write "<meta property='og:url' content='"& Application("Dominio") &"/"& nivel1 &"/"& nivel2 &"/"& nivel3 &"' />"
		

		If cm("Image_Src") <> "" Then
			pGeneralImage = split(cm("Image_Src"),";")
			pImagem = Application("Dominio") &"/"& replace(pGeneralImage(0),"original/","mini/")
		ELSE
			pImagem = Application("Dominio") &"/upload/sem-imagem.png"
		End If							
		
		Response.write "<meta property='og:image' content='"& pImagem &"'/>"
		Response.write "<meta property='og:type' content='"& Application("SocialType")  &"' />"
		Response.write "<meta property='og:site_name' content='"& Application("TitleStore") &"' />"
	End If

%>


<!--#include file="FuncoesFormatacao.asp"-->


		<link rel="stylesheet" type="text/css" href="<%=Application("Dominio")%>/js/ResponsiveImageGallery/css/style.css" />
		<link rel="stylesheet" type="text/css" href="<%=Application("Dominio")%>/js/ResponsiveImageGallery/css/elastislide.css" />

		<noscript>
			<style>
				.es-carousel ul{
					display:block;
				}
			</style>
		</noscript>
		<script id="img-wrapper-tmpl" type="text/x-jquery-tmpl">	
			<div class="rg-image-wrapper">
				{{if itemsCount > 1}}
					<div class="rg-image-nav">
						<a href="#" class="rg-image-nav-prev">Previous Image</a>
						<a href="#" class="rg-image-nav-next">Next Image</a>
					</div>
				{{/if}}
				<div class="rg-image"></div>
				<div class="rg-loading"></div>
				<div class="rg-caption-wrapper">
					<div class="rg-caption" style="display:none;">
						<p></p>
					</div>
				</div>
			</div>
		</script>
</head>
<body id="home">
		<%=Header()%>

	<div class="container">
		<div class="span12 ">
		
		
			<h1><%=cm("Title")%></h1>
			<h3><center><%=cm("Body")%></center></h3>
			<div class="row">
				
				<!-- Slider -->
					<div class="row">   
						<div class="span12" id="slider">
						
							<!-- Top part of the slider -->
								<div class="row">
									<div class="span8">

									
		<div class="container">
			<div class="content">
			
				<div id="rg-gallery" class="rg-gallery">
					<div class="rg-thumbs">
						<!-- Elastislide Carousel Thumbnail Viewer -->
						<div class="es-carousel-wrapper">
							<div class="es-nav">
								<span class="es-nav-prev">Previous</span>
								<span class="es-nav-next">Next</span>
							</div>
							<div class="es-carousel">
								<ul>
								<%
									for i=0 to Ubound(pGeneralImage)
										If pGeneralImage(i)<>"" then
											pImagem =  Application("Dominio")  &""& pGeneralImage(i)
'											Response.write "<div class=""item"" data-slide-number="""& i &"""><img src="""& pImagem  &""" alt="""& cm("Title") &""" /></div>"
											Response.write "<li><a href=""#""><img src="""& replace(pImagem,"original","mini")  &""" data-large="""& pImagem  &""" alt="""" data-description="""" /></a></li>"
										End If
									next

								%>
									

								</ul>
							</div>
						</div>
						<!-- End Elastislide Carousel Thumbnail Viewer -->
					</div><!-- rg-thumbs -->
				</div><!-- rg-gallery -->
			</div><!-- content -->
		</div><!-- container -->
									
                                    </div>
								</div>
								
							</div>
						</div> <!--/Slider-->
								<div class="row hidden-phone" id="slider-thumbs">
									<div class="span12">
								

								


								

								
										
									</div>
								</div>
							</div>
						
						</div>
					

<hr style="float: left; width: 100%;"/>
							<div class="row">
								<div class="span12">
									<h2>Acompanhe outros trabalhos</h2>
									<%
										strQuery = "SELECT * FROM photo_album WHERE Publish=1 AND NOT Handle='"& nivel3 &"' ORDER BY RAND() limit 3"
										Set cm   = Server.CreateObject("ADODB.recordset")
										cm.Open strQuery, Application("strProvider") ,3,3	
										
										If NOT cm.eof Then
											Response.write "<div class=""row pad15 "">"
											
											WHILE NOT cm.eof
												Response.write "<div class=""span4"">"
													Response.write "<div class=""hover_img"">"
														If cm("Image_Src") <> "" then
															pGeneralImage = split(cm("Image_Src"),";")
															pImagem =  Application("Dominio")  &"/"& replace(pGeneralImage(0),"/original","")
														ELSE
															pImagem =  Application("Dominio")  &"/upload/sem-imagem.png"
														End If
														Response.write "<a href="""& Application("Dominio") &"/construcoes/detalhe/"& cm("Handle") &""" class=""hover_colour""><img src="""& pImagem &""" alt="""& cm("Title") &""" /></a>"
													Response.write "</div>"
													Response.write "<h4><a href="""& Application("Dominio") &"/construcoes/detalhe/"& cm("Handle") &""" title="""& cm("Title") &""">"& cm("Title") &"</a></h4>"
												Response.write "</div>"
												
												cm.MoveNext
											WEND
											Response.write "</div>"
										
									End If
									%>
								</div>
							</div>
					</div>	
						
					
		<!-- FEATURE STRIP -->
			<div class="strip">
				Entre em contato conosco
				<span class="marg-left10"></span>
				<a class="btn btn-colour-red" href="<%=Application("Dominio")%>/contato">Formulário de Contato</a>
			</div>

			<%=Footer()%>

<!-- SCRIPTS -->
<%=ScriptsJS()%>
	
	
<!-- slider settings -->

	<script src="<%=Application("Dominio")%>/js/dzsportfolio.js" type="text/javascript"></script>
	<script src="<%=Application("Dominio")%>/js/jquery.isotope.min.js" type="text/javascript"></script>
	<script src="<%=Application("Dominio")%>/js/scroller.js" type="text/javascript"></script>



	
		<script type="text/javascript" src="<%=Application("Dominio")%>/js/ResponsiveImageGallery/js/jquery.tmpl.min.js"></script>
		<script type="text/javascript" src="<%=Application("Dominio")%>/js/ResponsiveImageGallery/js/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="<%=Application("Dominio")%>/js/ResponsiveImageGallery/js/jquery.elastislide.js"></script>
		<script type="text/javascript" src="<%=Application("Dominio")%>/js/ResponsiveImageGallery/js/gallery.js"></script>

</body>
</html>