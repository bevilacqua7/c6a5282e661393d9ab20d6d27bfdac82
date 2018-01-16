<?php
// implementando todo o JS aqui na view pois esta pagina é carregada no smartphone e deve ser de rapida e facil manutencao, bem como, por solicitacao do cliente em futuras manutencoes poderem ser realizadas de forma mais pratica.
defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' );
$rand_script = '?v10';//.rand(1,99);
function isSecure() {
  return
    (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || $_SERVER['SERVER_PORT'] == 443;
}
if(!isSecure()){
	header('location: https://demo.jaentreguei.com.br/Mobile',301);
	exit();
}

?><html>
<head>
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
<link rel="manifest" href="/images/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png">

<meta name="theme-color" content="#2e368e">
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#2e368e">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#2e368e">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-status-bar-style" content="#2e368e">

<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, initial-scale=1, maximum-scale=1">
<meta name="application-name" content="JáEntreguei">
<meta name="apple-mobile-web-app-title" content="JáEntreguei">

<!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
<link rel="stylesheet" href="/application/libraries/jQuery-File-Upload-9.18.0/css/jquery.fileupload.css">


<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/vendor/jquery.ui.widget.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="//blueimp.github.io/JavaScript-Templates/js/tmpl.min.js"></script>
<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js"></script>
<!-- The Canvas to Blob plugin is included for image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js"></script>
<!-- Bootstrap JS is not required, but included for the responsive demo navigation -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<!-- blueimp Gallery script -->
<script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.iframe-transport.js"></script>
<!-- The basic File Upload plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload.js"></script>
<!-- The File Upload processing plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-process.js"></script>
<!-- The File Upload image preview & resize plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-image.js"></script>
<!-- The File Upload audio preview plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-audio.js"></script>
<!-- The File Upload video preview plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-video.js"></script>
<!-- The File Upload validation plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-validate.js"></script>
<!-- The File Upload user interface plugin -->
<script src="/application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload-ui.js"></script>


	<!-- PHP_JS -->
<script
	src="/application/js/php_js.js<?php echo $rand_script; ?>"></script>


<!-- loading-overlay -->
<script
	src="/application/libraries/jquery-loading-overlay/src/loadingoverlay.min.js<?php echo $rand_script; ?>"></script>

<!-- Bootbox -->
<script
	src="/application/js/bootbox.min.js<?php echo $rand_script; ?>"></script>

<!-- Multiselect dropdown bootstrap -->
<script
	src="/application/js/bootstrap-multiselect.js<?php echo $rand_script; ?>"></script>
<link rel="stylesheet"
	href="/application/css/bootstrap-multiselect.css<?php echo $rand_script; ?>">

<!-- Alertify -->
<script
	src="/application/js/alertify.min.js<?php echo $rand_script; ?>"></script>
<link rel="stylesheet"
	href="/application/css/alertify.min.css<?php echo $rand_script; ?>">

<!-- autoGrid-felipeb -->
<script
	src="/application/js/autoGrid.js<?php echo $rand_script; ?>"></script>


<!-- js cookie -->
<script
	src="/application/js/js-cookie-master/src/js.cookie.js<?php echo $rand_script; ?>"></script>


<script>
	var base_url = 'https://portaltelegram.jaentreguei.com.br/';
	function run(_class,_event,_objParam,_callback,_return){
		var retorno = _return==true?true:false;
		var classe = _class==undefined?null:_class;
		if(classe==null){
			return false;
		}
		var event = _event==undefined?'':_event;
		var objParam = _objParam==undefined?{}:_objParam;
		var callback = _callback==undefined?function(no){}:_callback;
		
		var url = base_url+'index.php/'+_class;
		if(event!=''){
			url+="/"+_event;	
		}
		var params = {
			  method: "POST",
			  url: url,
			  data: objParam
			};
		
		if(retorno){
			params['async'] = false;
		}
		
		$.ajax(params)
		.always(function( data ) {
			if(retorno){
				retorno = data;			
			}else{
				callback(data);
			}
		});	
		
		if(retorno){
			return retorno;
		}
	}
	
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/application/js/sw.js?2')
      .then(function () {
        //console.log('service worker registered');
      })
      .catch(function (a) {
        //console.warn('service worker failed',a);
      });
  }
</script>

<style>
.panel-primary>.panel-heading {
    background-color: #2e368e!important;
    border-color: #2e368e!important;
}
.status_file{
	float:right;
        margin-top: 10px;
}
</style>


<script>
var dados_user = json_decode(Cookies.get('usuarioJaEntreguei'),1);
var dados_temp=[];
var posicaogps=false;
var arqs_processa={};

function processaArq(){

	if(dados_temp.length>0){
		var dadostemp = dados_temp.pop();
		dadostemp['nome_ori'] = dadostemp['nome_arq'];
		dadostemp['nome_arq'] = arqs_processa[dadostemp['nome_arq']].split('/')[9] + '/' + dadostemp['nome_arq'];
		run('Cliente','processaImagemEnviada',{dir_imagem:dadostemp['nome_arq'] ,cliente:dados_user['id'], gps:posicaogps},function(retorno){
			if(retorno['status']==true){
				$('.status_file[rel="'+dadostemp['nome_ori']+'"]').removeClass('label-info').addClass('label-success');
		    	}else{
				$('.status_file[rel="'+dadostemp['nome_ori']+'"]').removeClass('label-info').addClass('label-warning');
		    	}
		    	$('.status_file[rel="'+dadostemp['nome_ori']+'"]').html(retorno['retorno']);
	    	});
	}

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
	bootbox.alert('GPS não suportado ou não autorizado');
    }
}

function showPosition(position) {
    posicaogps = {};
    posicaogps['lat'] = position.coords.latitude;
    posicaogps['lon'] = position.coords.longitude; 
}

function processa_imagem_paralelo(){
	window.setTimeout(function(){
		processaArq();
	},800);
}

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        autoUpload: true,
        disableImageResize: false,
        imageMaxWidth: 1920,
        imageMaxHeight: 1920,
        imageCrop: false,
        url: 'https://portaltelegram.jaentreguei.com.br/application/libraries/jQuery-File-Upload-9.18.0/server/php/'
    }).bind('fileuploadadd', function (e, data) {
	    data.imageMaxWidth = 1920;
	    data.imageMaxHeight = 1920;
    }).bind('fileuploaddone', function (e, data) {
    
    	var nome_arq = data.files[data.index||0].name;
    	
    	//console.log($('a[download="'+nome_arq+'"]'));//.attr('href').split('/'));
    	
    	var temp={};
    	temp['nome_arq']=nome_arq;
    	dados_temp.push(temp);
    	$('.status_file[rel="'+nome_arq+'"]').html('aguardando...');
	window.setTimeout(function(){
    		$('.status_file[rel="'+nome_arq+'"]').html('processando...');
    		processa_imagem_paralelo();
	},800);
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    
        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
                for(var i in result['files']){
                	$('.status_file[rel="'+result['files'][i]['name']+'"]').html('Processado').removeClass('label-info').addClass('label-success');
			$('.status_file[rel="'+result['files'][i]['name']+'"]').parents('tr:nth-child(1)').find('button.btn.delete').trigger('click');
			delete(arqs_processa[result['files'][i]['name']]);
                }
                processaArq();
        });
        
        $('.bt-login').unbind('click').bind('click',function(){
        	var usuario = $('#usuario').val();
        	var senha = $('#senha').val();
        	if(usuario=='' || senha==''){
		        bootbox.alert('Preencha um usuário e senha');
        	}else{
	        	run('Cliente','getCliente',{usuario:usuario ,senha:senha },function(retorno){
	        		if(!retorno.length){
		        		bootbox.alert('Usuário ou senha inválidos');
	        		}else{
	        			dados_user = retorno[0];
			        	Cookies.set('usuarioJaEntreguei', dados_user, { expires: 365 });
        				ativa_user();
		        	}
	        	});
	        }
        });
        
        ativa_user();
	getLocation();
});

function ativa_user(){	
        if(dados_user != undefined && dados_user != null && typeof dados_user =='object'){
        	$('.panel-body.passo1').addClass('hide');
        	$('.panel-body.passo2').removeClass('hide');
        }
}
</script>

</head>
<body>


<div class="container">
	<div class="row text-center">
		<img height="60" src="https://jaentreguei.com.br/wp-content/uploads/2017/06/jaentreguei-e1497135481504.png">
	</div>
	<div class="row col-sm-12">
		<div class="panel panel-primary">
	            <div class="panel-heading">
	              <h3 class="panel-title">Já Entreguei</h3>
	            </div>
	            <div class="panel-body passo1 row col-sm-12">
	            
	            	<form>
			  <div class="form-group">
			    <label for="exampleInputEmail1">Usuário</label>
			    <input type="text" class="form-control" id="usuario" placeholder="Usuário do JáEntreguei">
			  </div>
			  <div class="form-group">
			    <label for="exampleInputPassword1">Senha</label>
			    <input type="password" class="form-control" id="senha" placeholder="Senha">
			  </div>
			  <div class="form-group text-center">
			  	<button type="button" class="btn btn-primary bt-login">Entrar</button>
			  </div>
			</form>
	            
	            </div>
	            <div class="panel-body passo2 row col-sm-12 hide">
	            
	            
				            
				            
			<div class="container">
			
			    <form id="fileupload" action="" method="POST" enctype="multipart/form-data">
			        <div class="row fileupload-buttonbar">
			            <div class="col-lg-7" style="text-align: center;">
			                <span class="btn-lg btn-success fileinput-button">
			                    <i class="glyphicon glyphicon-plus"></i>
			                    <span>Enviar Fotos</span>
			                    <input type="file" name="files[]" multiple>
			                </span>
			                <button type="submit" class="hide btn btn-primary start">
			                    <i class="glyphicon glyphicon-upload"></i>
			                    <span>Start upload</span>
			                </button>
			                <button type="reset" class="hide btn btn-warning cancel">
			                    <i class="glyphicon glyphicon-ban-circle"></i>
			                    <span>Cancel upload</span>
			                </button>
			                <button type="button" class="hide btn btn-danger delete">
			                    <i class="glyphicon glyphicon-trash"></i>
			                    <span>Delete</span>
			                </button>
			                <input type="checkbox" class="hide toggle">
			                <!-- The global file processing state -->
			                <span class="fileupload-process"></span>
			            </div>
			            <!-- The global progress state -->
			            <div class="col-lg-5 fileupload-progress fade">
			                <!-- The global progress bar -->
			                <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
			                    <div class="progress-bar progress-bar-success" style="width:0%;"></div>
			                </div>
			                <!-- The extended global progress state -->
			                <div class="progress-extended">&nbsp;</div>
			            </div>
			        </div>
			        <!-- The table listing the files available for upload/download -->
			        <table role="presentation" class="table table-striped" style="max-width: 600px;"><tbody class="files"></tbody></table>
			    </form>
			    
			</div>
	            
	            
	            
	            
	            </div>
	          </div>
	</div>

</div>


<!-- The blueimp Gallery widget -->
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls hide" data-filter=":even">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
</div>
<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-upload fade">
        <td style="max-width: 50vh;"> <table><tbody><tr><td>
            <span class="preview"></span>
        </td>
        <td>
            <p class="name" style="text-overflow: ellipsis; width: 38vh; display: inline-block; word-wrap: break-word; height: initial; padding: 20px;">{%=file.name%}</p>
            <strong class="error text-danger"></strong>
        </td> </tr><tr>
        <td>
            <p class="size">Enviando...</p>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
        </td>
        <td align="right">
            {% if (!i && !o.options.autoUpload) { %}
                <button class="btn btn-primary start" disabled>
                    <i class="glyphicon glyphicon-upload"></i>
                    <span>Iniciar</span>
                </button>
            {% } %}
            {% if (!i) { %}
                <button class="btn btn-warning cancel" style="margin-right: 20px;">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancelar</span>
                </button>
            {% } %}
        </td></tr></tbody></table><div class="label label-info status_file" rel="{%=file.name%}"> carregando... </div> </td>
    </tr>
{% } %}
</script>
<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-download fade">
        <td style="max-width: 50vh;"> <table><tbody><tr><td>
            <span class="preview">
                {% if (file.thumbnailUrl) { %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                {% } %}
            </span>
        </td>
        <td>
            <p class="name" style="text-overflow: ellipsis; width: 38vh; display: inline-block; word-wrap: break-word; height: initial; padding: 20px;">
                {% if (file.url) { arqs_processa[file.name]=file.url; %}
                    <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                {% } else { %}
                    <span>{%=file.name%}</span>
                {% } %}
            </p>
            {% if (file.error) { %}
                <div><span class="label label-danger">Erro</span> {%=file.error%}</div>
            {% } %}
        </td> </tr><tr>
        <td>
            <span class="size">{%=o.formatFileSize(file.size)%}</span>
        </td>
        <td align="right">
            {% if (file.deleteUrl) { %}
                <button class="btn btn-danger delete" style="margin-right: 20px;" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
                    <i class="glyphicon glyphicon-trash"></i>
                    <span>Apagar</span>
                </button>
                <input type="checkbox" name="delete" value="1" class="toggle hide">
            {% } else { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancelar</span>
                </button>
            {% } %}
        </td> </tr></tbody></table><div class="label label-info status_file" rel="{%=file.name%}"> carregando... </div> </td>
    </tr>
{% } %}
</script>

</body>
</html>