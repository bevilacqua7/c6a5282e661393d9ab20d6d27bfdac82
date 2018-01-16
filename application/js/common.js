kendo.culture("pt-BR");
showLoadObject($('body'));
var alertas_existentes=[];
var numero_maximo_alertas=20;
var atualizacao_painel_status = false;
var atualizacao_painel_geral = false;
var atualizacao_painel = false;
var atualizacao_dashboard = false;
var timeouts=[];

function limpa_settimeouts(par){
    var _par = par===undefined?false:true;
    atualizacao_painel_status = _par;
    clearTimeout(atualizacao_painel_status);
    clearTimeout(atualizacao_painel_geral);
    clearTimeout(atualizacao_painel);
    clearTimeout(atualizacao_dashboard);
    if(timeouts.length){
        for(var i in timeouts){
            clearTimeout(timeouts[i]);
        }
        timeouts=[];
    }
    mensagem_sistema();
}

function run(_class,_event,_objParam,_callback,_return){
        _trace(arguments.callee.name,'RUN: '+_class+" -> "+_event);
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


function SP_MANUT_DEPARA(_acao,_callback,_COLUNA_FIC,_COLUNA_AUX,_COLUNA_SEL,_COLUNA_CID){
    var callback = _callback===undefined?false:_callback;
    var param = {}; 
    param['sistema'] = $('#base_sis').find(':selected').val();
    param['base'] = $('#base_sel').find(':selected').val();  
    param['acao'] = _acao;  
    param['COLUNA_FIC'] = _COLUNA_FIC===undefined?'NULL':_COLUNA_FIC; 
    param['COLUNA_AUX'] = _COLUNA_AUX===undefined?'NULL':_COLUNA_AUX; 
    param['COLUNA_SEL'] = _COLUNA_SEL===undefined?'NULL':_COLUNA_SEL; 
    param['COLUNA_CID'] = _COLUNA_CID===undefined?'NULL':_COLUNA_CID;  
    run('Entidade', 'SP_MANUT_DEPARA', param, function (_data) {  
        if(callback && typeof callback=='function'){
            callback(_data);
        }
    });
}

function formataTamanhoArquivo(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function bloqueia_tela(obj,msg){
    var _msg = msg===undefined?'Esta tela está temporariamente bloqueada.  Escolha outra opção no menu.':msg;
    disable_obj(obj);
    bootbox.alert(_msg,function(){
        $('#conteudo-geral').html('');
    });
}

function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = $('#'+elId).text().split(/\n/).join("\n");//document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

function SaveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        try {
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
        } catch (e) {
            window.open(fileURL, fileName);
        }

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

function showLoadObject(target,_state){
	var state = _state==undefined?true:_state;
	if(false && typeof target=='object' && typeof LoadingOverlay == 'function'){
		if(state){
			target.LoadingOverlay("show",{
				image			:	'',//base_url+'application/libraries/jquery-loading-overlay/src/loading.gif',
				color           :	"rgba(51, 187, 255, 0.2)" 
			});
			target.find('div.loadingoverlay').addClass('forca_exibicao').html('<div id="circularG"><div id="circularG_1" class="circularG"></div><div id="circularG_2" class="circularG"></div><div id="circularG_3" class="circularG"></div><div id="circularG_4" class="circularG"></div><div id="circularG_5" class="circularG"></div><div id="circularG_6" class="circularG"></div><div id="circularG_7" class="circularG"></div><div id="circularG_8" class="circularG"></div></div>');
		}else{
			target.LoadingOverlay("hide");	
			target.find('div.loadingoverlay').removeClass('forca_exibicao').html('');	
		}
	}
        return true;
}

function run_conteudo_geral(_class,_event,_target,_callback){
	alertify.dismissAll();
                
        var codigo_telas = {};
        codigo_telas['Ftp'] = {};
        codigo_telas['Ftp']['index'] = 1;
        codigo_telas['Conversor'] = {};
        codigo_telas['Conversor']['index'] = 2;
        codigo_telas['Tombamento'] = {};
        codigo_telas['Tombamento']['index'] = 3;
        codigo_telas['Entidade'] = {};
        codigo_telas['Entidade']['principal'] = 5;
        codigo_telas['Entidade']['mapeamento_informacoes'] = 5;
        codigo_telas['Entidade']['consultas'] = 6;
        codigo_telas['Entidade']['oficializacao'] = 7;
        codigo_telas['Log'] = {};
        codigo_telas['Log']['index'] = 102;
        codigo_telas['Ftp']['configuracao'] = 8;
        codigo_telas['Bases'] = {};
        codigo_telas['Bases']['index'] = 9;
        codigo_telas['Login'] = {};
        codigo_telas['Login']['usuarios'] = 10;
        
	showLoadObject($("#conteudo-geral"));
	var target = _target==undefined?$("#conteudo-geral"):_target;
	var callbackRecebido = _callback==undefined?function(no){}:_callback;
	var novaCallback = function(data){
		target.html(data);
                if(codigo_telas[_class][_event]!==undefined){
                    adicionaHelp(codigo_telas[_class][_event]);
                }
		showLoadObject($("#conteudo-geral"),false);
		callbackRecebido(data);
	}
	run(_class,_event,undefined,novaCallback);
}



function adicionaHelp(tela){
    var _telas = {};
    _telas[100] ='Datasus - Manual Utilizacao - v1.pdf';
    _telas[101] ='Datasus - Painel.pdf';
    _telas[102] ='Datasus - Log.pdf';
    _telas[1]   ='Datasus - FTP.pdf';
    _telas[2]   ='Datasus - Conversao.pdf';
    _telas[3]   ='Datasus - Importacao.pdf';
    _telas[5]   ='Datasus - Mapeamento.pdf';
    _telas[6]   ='Datasus - Consultas.pdf';
    _telas[7]   ='Datasus - Oficializacao.pdf';
    _telas[8]   ='Datasus - Configuracoes_FTP.pdf';
    _telas[9]   ='Datasus - Configuracoes_Bases.pdf';
    _telas[10]  ='Datasus - Cadastro_Usuarios.pdf';
    
    if(_telas[tela]===undefined){
        return false;
    }   
    
    if($('div.div-menu-manuais').length){
        $('div.div-menu-manuais').remove();
    }
    
    var menuhelp = $('<div class="pull-right div-menu-manuais" style="font-size: 12px;position: relative;line-height: 15px;"><span class="manual-tela"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Manual desta tela</span><br><span class="manual-completo"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Manual completo</span></div>');
    if($('div.panel-heading:first h3.panel-title:first').length){
        $('div.panel-heading:first h3.panel-title:first').append(menuhelp.css('top','-8px'));
    }
    if($('div.panel-heading:first').has('ul.nav.nav-tabs').length){
        $('div.panel-heading:first').has('ul.nav.nav-tabs').append(menuhelp.css('top','-40px'));
    }
    $('.manual-completo').css('cursor','pointer').unbind('click').bind('click',function(){
        abre_manual(_telas[100]); // fixo completo
    });
    $('.manual-tela').css('cursor','pointer').unbind('click').bind('click',function(){
        abre_manual(_telas[tela]);
    });
}

function abre_manual(choice){
    var pathManual = 'Manual/v1/pdf/';
    var _choice = base_url+pathManual+(choice===undefined?'Datasus - Manual Utilizacao - v1.pdf':choice);
    modal_sistema(true, "textarea conteudo", "Manual: "+choice, null, function () {
            // aumenta o tamanho da modal temporariamente para melhor analise dos dados
            var temp_largura = $('.modal-dialog').css('width')!==undefined && $('.modal-dialog').css('width')!=='90%'?$('.modal-dialog').css('width'):'600px';
            $('.modal-dialog').css('width','90%');
            $('#modalSistema').on('hidden.bs.modal', function () {
                $('.modal-dialog').css('width',temp_largura);
            });
            var url_manual = _choice;
            PDFObject.embed(url_manual, "#modalSistema .modal-body");
    });
    
}

/**
 * Exibir alertas no rodapé do sistema
 * @param string _tipo 'success', 'info', 'warning', 'danger' ou ''=(esconder)
 * @param string _msg - mensagem desejada
 * @param int _duracao - duracao em segundos da mensagem - 0 = sem limite - default 10s
 */
function alerta_mensagem(_tipo,_msg,_duracao){
	var tipo = _tipo==undefined?'':(_tipo=='danger'?'error':_tipo);
	var msg = _msg==undefined?'':_msg;
	var duracao = _duracao==undefined?10:_duracao;
	alertas_existentes.push(alertify.notify(msg, tipo, duracao));
	if(alertas_existentes.length>numero_maximo_alertas){
		var not_old = alertas_existentes.shift();
		not_old.dismiss();
	}
}


/**
 * Exibir status de mensagens do sistema continuamente
 */
var mensagem_rodape=false;
var ultimamsg='';
var monitoramentoBaixarArquivo = false;
var renovaTempoLogado=false;
var atualizandorodape=false;
var rec_msg = false;
function mensagem_sistema(rec){ 
    _trace(arguments.callee.name,'mensagem de log do rodape');
    var recursiva = rec===undefined?false:rec;
    if(!atualizandorodape || recursiva){
        clearTimeout(rec_msg);
        mensagem_rodape=true;
	var alerta = $('.msg-alerta');
        if(!alerta.is(':visible')){
            alerta.show();
        }
	//showLoadObject(alerta);
	run('Log','mensagem_rodape',{renovaTempoLogado:renovaTempoLogado},function(data2){
                if(renovaTempoLogado){ renovaTempoLogado=false; }
                
		var msg = json_decode(data2,1);
                msg['logado'] = msg['logado']===undefined || msg['logado']===null?'':msg['logado'];
		var mensagem = '';
                var logado = msg['logado'];
                var tempo_logado = msg['minutos_restante'];
                if(logado!==true){
                    html2canvas(document.body, {
                        onrendered: function(canvas) {
                            run('Log','salvaImgLog',{imagem:canvas.toDataURL('image/png',1),tempo:tempo_logado},function(retorno){
                                retorno = retorno==undefined?'':retorno;
                                console.log(retorno);
                                window.location = base_url+'index.php/Login/doLogout?exp=1&file='+retorno;
                            });
                        }
                    });
                    return false;
                }
                msg = msg['dados'];
		if(msg!=undefined){
			for(var i in msg){
				mensagem+=msg[i]['MENSAGEM']+"<br>";
			}
                        alerta.html(mensagem);
                        alerta.show();
			if(mensagem!='' && mensagem!=ultimamsg){
				if(monitoramentoBaixarArquivo!=undefined && typeof atualiza_grids == 'function'){ //se existir o objeto da grid (se for tela do FTP) atualiza-as quando muda a mensagem
					if(monitoramentoBaixarArquivo){
						atualiza_grids([0,1,0,1]);
					}
				}
			}
                        ultimamsg = mensagem;
		}
                $('.barra-tempo-conexao').attr('aria-valuenow',tempo_logado).css('width',parseInt(tempo_logado*100/15)+'%');
		//showLoadObject(alerta,false);
		rec_msg = window.setTimeout(function(){ mensagem_sistema(true); },2000);
                timeouts.push(rec_msg);
	});
        
    }else{
        atualizandorodape=false;
    }
}


function modal_sistema(_tipo,_msg,_titulo,_extraButtons,_callback){	
	var tipo = _tipo==undefined?'':_tipo;
	var msg = _msg==undefined?'':_msg;
	var titulo = _titulo==undefined?'':_titulo;
	var extraButtons = _extraButtons==undefined?false:_extraButtons;
	var callback = _callback==undefined?false:_callback;

	if(tipo==false){
		$('#modalSistema').modal('hide');
	}else{
		$('#modalSistema .modal-header .modal-title').html(titulo);
		$('#modalSistema .modal-body').html(msg);
		$('#modalSistema .modal-footer').html('');
		if(_extraButtons){		
			for(var i in extraButtons){
				$('#modalSistema .modal-footer').append(extraButtons[i]);
			}
		}
		var fechar = $('<button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>');
		$('#modalSistema .modal-footer').append(fechar);
		$('#modalSistema').modal('show');
		if(typeof callback == 'function'){
			callback();
		}
	}
}

function modal_alerta(_tipo,_msg,_titulo,_extraButtons,_callback){	
	var tipo = _tipo==undefined?'':_tipo;
	var msg = _msg==undefined?'':_msg;
	var titulo = _titulo==undefined?'':_titulo;
	var extraButtons = _extraButtons==undefined?false:_extraButtons;
	var callback = _callback==undefined?false:_callback;
	alertify.alert(titulo,msg);
	$('.alertify .ajs-dialog, .alertify .ajs-dialog .ajs-header, .alertify .ajs-dialog .ajs-footer').removeClass('alert alert-success alert-info alert-warning alert-danger').addClass('alert alert-'+tipo);
	$('.alertify .ajs-dialog .ajs-footer .ajs-button').removeClass('btn btn-info btn-danger btn-warning btn-success').addClass('btn btn-'+tipo);
	$('.alertify .ajs-dialog .ajs-header').css('font-weight','bold');
	$('.alertify .ajs-dialog .ajs-footer .ajs-auxiliary.ajs-buttons').html('');
	if(extraButtons){
		$('.alertify .ajs-dialog .ajs-footer .ajs-primary.ajs-buttons').hide();
		for(var i in extraButtons){
			$('.alertify .ajs-dialog .ajs-footer .ajs-auxiliary.ajs-buttons').append(extraButtons[i]);
		}
	}else{
		$('.alertify .ajs-dialog .ajs-footer .ajs-primary.ajs-buttons').show();
	}
	if(typeof callback == 'function'){
		callback();
	}
}

function windowModal(_titulo,_conteudo,_arrBotoes,_callback){
	/*
	 * Ex.: _arrBotoes
	 * [
	 *   {
	 *		'label' :'salvar',
	 * 		'class' :'btn-primary bt-salvar'
	 *   }
	 * ]
	 */
	var titulo = _titulo==undefined?'':_titulo;
	var conteudo = _conteudo==undefined?'':_conteudo;
	var arrBotoes = _arrBotoes==undefined?[]:_arrBotoes;
	var callback = _callback==undefined?function(no){}:_callback;
	var btFecharDefault = $('<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');

	$('#modalSistema h4.modal-title').html(titulo);
	$('#modalSistema .modal-body').html(conteudo);
	$('#modalSistema .modal-footer').html(btFecharDefault);
	for(var i in arrBotoes){
		$('#modalSistema .modal-footer').prepend($('<button type="button" class="btn '+arrBotoes[i]['class']+'">'+arrBotoes[i]['label']+'</button>'));		
	}
	$('#modalSistema').unbind('shown.bs.modal').bind('shown.bs.modal', callback).modal('show');
}



var my_skins = [
  "skin-blue",
  "skin-black",
  "skin-red",
  "skin-yellow",
  "skin-purple",
  "skin-green",
  "skin-blue-light",
  "skin-black-light",
  "skin-red-light",
  "skin-yellow-light",
  "skin-purple-light",
  "skin-green-light"
];

function change_skin(cls) {
  $.each(my_skins, function (i) {
    $("body").removeClass(my_skins[i]);
  });

  $("body").addClass(cls);
  return false;
}

function pegacampos(obj) {
    var ret = {};
    obj.find('input[type=text],input[type=hidden],select,textarea,input[type=checkbox]:checked').each(function() {
        var nome = $(this).attr('name');
        if (!(nome in ret) && nome != undefined) {
            var value = $(this).val();
            ret[nome] = value;
        }
    });
    obj.find('input[type=radio]').each(function() {
        var nome = $(this).attr('name');
        if (!(nome in ret) && nome != undefined) {
            var value = $($('input[name=' + $(this).attr('name') + ']')).filter(':checked').val();
            ret[nome] = value;
        }
    });
    var dados = ret;
    return dados;
}

function cria_options_html(arr_cod_desc){
	var html='';
	for(var i in arr_cod_desc){
		html+='<option value="'+i+'">'+arr_cod_desc[i]+'</option>';
	}
	return html;
}



function cria_options_html_custom(arr_cod_desc,campo){
        var html='';
        for(var i in arr_cod_desc){
            var custom = arr_cod_desc[i][campo];
            html+='<option value="'+custom+'">'+custom+'</option>';
        }
        return html;
}

function cria_options_html_custom_field(arr_cod_desc,id,valor){
        var html='';
        for(var i in arr_cod_desc){
            var attrs = '';
            for(var j in arr_cod_desc[i]){
                attrs+=" "+j+"='"+arr_cod_desc[i][j]+"'";
            }
            html+='<option '+attrs+' value="'+arr_cod_desc[i][id]+'">'+arr_cod_desc[i][valor]+'</option>';
        }
        return html;
}

function pega_itens_selecionados(gridname){
	var grid = $("#"+gridname).data("kendoGrid");
        if(grid===undefined){
            alerta_mensagem('error', 'Aguarde o carregamento total dos arquivos...');
        }else{
            var selectedsItem = grid.tbody.find('tr.k-state-selected');

            var arrItens = [];
            for(var i in selectedsItem){
                    if(selectedsItem[i]!= undefined && selectedsItem[i].tagName!=undefined && selectedsItem[i].tagName=='TR'){
                            var obj = grid.dataItem(selectedsItem[i]);
                            var newobj={};
                            for(var j in variaveisObjetoTabela){
                                    newobj[j]=obj[j];
                            }
                            arrItens.push(newobj);
                    }
            } 

            if(arrItens.length>0){
                    return arrItens;
            }else{
                    return false;
            }
        }
}

function EXISTE_FLUXO_ID(_fluxoid){
	var fluxoid = parseInt(_fluxoid);
	if(fluxoid>0){
		return run('Ftp','EXISTE_FLUXO_ID',{fluxoid:fluxoid},function(data){},true);
	}
	return false;
}

function SP_REMOVE_PROCESSO(_fluxoid,_callback){
	var fluxoid = parseInt(_fluxoid);
	var callback = typeof _callback=='function'?_callback:function(no){};
	if(fluxoid>0){
		run('Ftp','SP_REMOVE_PROCESSO',{fluxoid:fluxoid},callback);
	}
	return false;
}

function SP_CANCELA_PROCESSO(_fluxoid,_callback){
        var fluxoid = parseInt(_fluxoid);
        console.log('Cancelamento chamado SP_CANCELA_PROCESSO para o fluxoID ',fluxoid);
        var callback = typeof _callback=='function'?_callback:false;
        if(fluxoid>0){
                var retorno = run('Ftp','SP_CANCELA_PROCESSO',{fluxoid:fluxoid},function(no){},true);
                retorno = json_decode(retorno,1).shift();
                if(parseInt(retorno['RETORNO']) == 2){
                        if(callback){
                                callback();
                        }
                        return true;			
                }else if(parseInt(retorno['RETORNO']) == 1){
                        clearTimeout(cancela_processo);
                        var cancela_processo = window.setTimeout(function(){ SP_CANCELA_PROCESSO(fluxoid,callback); },1000);	                    
                        timeouts.push(cancela_processo);
                        return cancela_processo;						
                }else{
                        return true;
                }
        }
        if(callback){
                callback();
        }
}

function SP_FLUXO_PROCESSO(_passo,_sistema,_base,_fluxoid,_callback){
	var passo = _passo!=undefined && parseInt(_passo)>0?parseInt(_passo):false;
        passo = passo===true?2:(passo===false?1:passo);
	var sistema = _sistema;
	var base = _base;
	var fluxoid = _fluxoid!=undefined && parseInt(_fluxoid)!=NaN?parseInt(_fluxoid):0;				
	var callback = typeof _callback=='function'?_callback:false;
	if(passo){
		var existeFluxoId = json_decode(EXISTE_FLUXO_ID(fluxoid),1);
		if(fluxoid==0 || existeFluxoId.length){
			if(callback){
				run('Ftp','SP_FLUXO_PROCESSO',{passo:passo,sistema:sistema,base:base,fluxoid:fluxoid},callback);
			}else{
				return run('Ftp','SP_FLUXO_PROCESSO',{passo:passo,sistema:sistema,base:base,fluxoid:fluxoid},callback,true);
			}		
		}else{
			var fakereturn = [];
			var fakereturn_obj = {'RETORNO':0};
			fakereturn.push(fakereturn_obj);
			return json_encode(fakereturn,1);
		}
	}else{
		return false;
	}
}

function EXEC(_obj_arr_parametros,_callback){
	var callback 		= typeof _callback=='function'?_callback:false;
	var arr_parametros = _obj_arr_parametros;
	return run('Executavel','EXEC',{parametros:arr_parametros},function(data){
		if(callback){
			callback(data);
		}
	},true);		
}

function SP_PROCESSO_EXECUCAO(_passo,_sistema,_base,_callback){
	var passo = _passo!=undefined && parseInt(_passo)>0?_passo:false;
	var sistema = _sistema;
	var base = _base;
	var callback = typeof _callback=='function'?_callback:false;
	if(passo){
		return run('Ftp','SP_PROCESSO_EXECUCAO',{passo:passo,sistema:sistema,base:base},function(data){
			if(callback){
				callback(data);
			}
		},true);					
	}else{
		return false;
	}
}

function selectCheck(e) {
    if(!$(e.target).hasClass('checkbox')){
        $(this).find(".checkbox:first").trigger('click');
    }
};

function selectRow(_itemExtraUncheck) {
    var itemExtraUncheck = _itemExtraUncheck===undefined?false:itemExtraUncheck;
    var checked = this.checked,
    row = $(this).closest("tr");
    if (checked) {
        //-select the row
        row.addClass("k-state-selected");
    } else {
        //-remove selection
        row.removeClass("k-state-selected");
        $(this).closest("tr").parents('div.row:first').prev().prev().find('input.selectAll_a').prop('checked',false);
    }
};

function selectAllclickWorks(_input_object,_only_warning){
    var input_object = _input_object;
    var only_warning = _only_warning;
    input_object.unbind('change').bind('change', function () {
        var gridname = $(this).attr('datatable');
        var select = $(this).is(':checked');
        var grid = $("#" + gridname).data("kendoGrid");                        
        if(only_warning){
            if(grid!==undefined && grid.tbody.find('tr').length){
                if (select) {
                    //grid.select(grid.tbody.find('tr'));
                    grid.tbody.find('tr').not('.k-state-selected').addClass("k-state-selected").find('.checkbox').prop("checked","checked");
                } else {
                    //grid.clearSelection();
                    grid.tbody.find('tr.k-state-selected').removeClass("k-state-selected").find('.checkbox').prop("checked",false).trigger('change');
                }
            }
        }else{
            if(grid!==undefined && grid.tbody.find('tr.warning').length){
                if (select) {
                    //grid.select(grid.tbody.find('tr.warning'));
                    grid.tbody.find('tr.warning').not('.k-state-selected').addClass("k-state-selected").find('.checkbox').prop("checked","checked");
                } else {
                    //grid.clearSelection();
                    grid.tbody.find('tr.warning.k-state-selected').removeClass("k-state-selected").find('.checkbox').prop("checked",false).trigger('change');
                }
            }
        }
    });
}


function disable_obj(obj,show){
    var _show = show===undefined?false:true;
    if(!obj.hasClass('fundo_aux')){
        obj.addClass('fundo_aux');
    }
    if(_show){
        obj.find('.fundo').remove();
    }else{
        if(!obj.find('.fundo').length){
            obj.append('<div class="fundo"></div>');
        }
    }
}

function gravalogSQL(dados){
    run('Ftp','GRAVALOGSQL',{mensagem:dados},function(no){});
}

function replaceAll(str,char,charReplace){
	if(str.indexOf(char)>=0){
		str = str.replace(char,charReplace);
		return replaceAll(str,char,charReplace);
	}else{
		return str;
	}
}
var _debug=false;
function _trace(myName,aux){
    if(_debug){
        if(aux!==undefined && aux!=''){
            console.trace(aux);
        }else{
            console.trace(myName);
        }
    }
}

function getAttributes ( $node ) {
    var attrs = {};
    $.each( $node[0].attributes, function ( index, attribute ) {
        attrs[attribute.name] = attribute.value;
    } );

    return attrs;
}
function setAttributes ( $node,$attrs ) {
    for(var h in $attrs) {
        $node.attr(h,$attrs[h]);
    };
    return $node;
}


function maior_posicao_grid(grid){
    var dados = grid==undefined?{}:grid.dataSource._data;
    var maior = 0;
    for(var i in dados){
        if(dados[i]['POSICAO']!==undefined && parseInt(dados[i]['POSICAO'])>maior){
            maior = parseInt(dados[i]['POSICAO']);
        }
    }
    return maior;
}


$(function(){
	$('ul.muda-tema li a').unbind('click').bind('click',function(){
		change_skin($(this).attr('data-skin'));
	});
	change_skin('skin-blue-light');
	$('.msg-alerta').hide();
	showLoadObject($('body'),false);
        $('body').on('click',function(){
            renovaTempoLogado=true;
        });        
});

