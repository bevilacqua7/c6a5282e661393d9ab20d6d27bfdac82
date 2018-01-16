<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include_once (dirname ( __FILE__ ) . '/header.php');
$background = base_url()."bkdatasus".rand(1,3).".jpg";

include_once (dirname ( __FILE__ ) . '/topo.php');
?>

  <script>
  
	var atualizacaosw;
  	$(document).ready(function(){
  		$('.combocli').unbind('change').bind('change',function(){
  		
			$('.conteudo').html('carregando...').show();
			window.setTimeout(function(){
				atualizaGrid();
			},100);
  		
  		}).trigger('change');
  		
  		
  	});
  	
  	function atualizaGrid(){
  		var dados = {};
		dados['cli'] = $('.combocli').find('option:selected').val();
		if(dados['cli']!=undefined){
			$('.conteudo').show();
			run('Cliente', 'getClienteDados', dados, function (_data) {
			
			    var _objJqueryDiv = $("#grid_arquivos_c");
			    var _objJsonDatasource = {data: _data, pageSize: 10};
			    
			    var _arrObjColunas = [];
	
			    //_arrObjColunas.push({width:35, template: "<input type='checkbox' class='checkbox' />", attributes: {style: "text-align: center;"}});
			    //_arrObjColunas.push({width:125, template: "<input type='checkbox' class='unificar' />", title: "Unificar Catálogos", attributes: {style: "text-align: center;"}});
			    // _arrObjColunas.push({field: "TAMANHO", title: "Tamanho do Arquivo", template: "<span class='formataTamanho' tamanho='#: TAMANHO #'></span>"});
			    // $row->imagem = '<a href="javascript:abririmg(\'/Cliente/getClienteImagem/?id='.$row->id.'\');"><img class="img-thumbnail" src="/Cliente/getClienteImagem/?id='.$row->id.'" style="max-width: 50px; max-height: 50px;"></a>';//height="50"
				
				
			    _arrObjColunas.push({field: "datahora", title: "Data/Hora"});
			    _arrObjColunas.push({field: "gps", title: "Localização", template: '# if(data.gps != null) {# <span class="gps" latlon="#: gps #">carregando mapa...</span> #}#'});
			    _arrObjColunas.push({field: "imagem", title: "Imagem", template: "# if(data.imagem != null) {# <a href=\"javascript:abririmg('#: imagem #');\"><img class='img-thumbnail' src='#: imagem #' style='max-width: 50px; max-height: 50px;'></a> #}#"}); // else {#=  #}#
			    _arrObjColunas.push({field: "texto", title: "Texto/Código"});
			
			    var _objExtra = {sortable: true, pageable: true, height: 500, filterable: true, dataBound: atualiza_mapas};
			    $(this).autogrid(_objJqueryDiv, _objJsonDatasource, _arrObjColunas, _objExtra);
			
			    //alerta_mensagem('success','Arquivos DBC carregados');
			    //showLoadObject($('#grid_arquivos'), false);
			    $('.conteudo').hide();
		    
			    //clearTimeout(atualizacaosw);
			    //if(_objJqueryDiv.is(':visible')){
			//	    atualizacaosw = setTimeout(function(){ atualizaGrid(); }, 5000);
			    //}
			});
		}else{
			$('.conteudo').html('sem usuários cadastrados');
		}
  	}
  		
	function abririmg(src){
		var textarea = $('<img>').attr('src',src).css('max-height','500px').css('max-width','500px');
	        var arrButtons = [];
	       // arrButtons.push($('<button type="button" class="btn btn-success disabled bt-abrir-consulta">Abrir</button> '));
	       // arrButtons.push($('<button type="button" class="btn btn-danger disabled bt-excluir-consulta">Excluir</button> '));
	        modal_sistema(true, textarea, "Imagem", arrButtons, function () {
	
	               // atualiza_lista_consultas();
	
	        });
	}
	
  	function atualiza_mapas(){
  		if($('.gps').length){
  			$('.gps').each(function(){
  				if($(this).attr('latlon')!='null'){
	  				var latlon = $(this).attr('latlon').split('|');
	  				var lat = latlon[0];
	  				var lon = latlon[1];
	  				//<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+data.lat+','+data.lon+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>
	
	  				var html=$('<iframe width="200" height="150" frameborder="0" style="border:0">').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyCvkNdKZvg9zOPPF8sxfTx1g_2c7DWsvBQ&q='+lat+','+lon+'&center='+lat+','+lon);
	  				//console.log(html); 
					$(this).html(html);
				}else{
					$(this).html('');
				}
  			});
  		}
  	}
  	/*

        bootbox.confirm('Deseja cancelar a operação?',function(simounao){
            if(simounao){
                ini_screen();
            }
        });
  	*/
  </script>
  
  
  <div class="row">
  <div class="col-sm-8">
	<div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Usuário</h3>
            </div>
            <div class="panel-body">
              <?php echo $combo; ?> <button class="btn btn-sm btn-success" onclick="javascript:atualizaGrid();"><i class="fa fa-refresh"></i> Atualizar</button>  <span class='conteudo'>aguarde...</span>
            </div>
          </div>
          </div>
          </div>
  <div class="row">
			
                            <div id="arquivos_disponiveis_c">
                                <div id="grid_arquivos_c"></div>
                            </div>
          </div>

<?php
include_once (dirname ( __FILE__ ) . '/footer.php');
?>