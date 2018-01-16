<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set("log_errors", 1);
ini_set("error_log", dirname(__FILE__)."/php-error.log");

class Cliente extends CI_Controller {

	private $dados_user='';

	public function index()
	{
			/*
			exit('<pre>'.print_r($this->session->userdata('login'),1));
			Array
			(
			    [id] => 7
			    [nome] => H2O cliente 2
			    [email] => 
			    [usuario] => h2o2
			    [senha] => 123
			)
			*/
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$user = $this->dados_user;
		$dados['idcliente'] = $user['id'];
		$dados['nomecliente'] = $user['nome'];
		$this->load->view('painel',$dados);
		
	}
		
	function __construct()
	{
	        parent::__construct();
		 
		/* Standard Libraries of codeigniter are required */
		$this->load->database();
		$this->load->helper('url');
		/* ------------------ */ 
		 		
		$user = $this->session->userdata('login');
		$this->dados_user = $user;
		$this->load->library('grocery_CRUD');
		 
	}
	
	public function sessoes()
	{
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$crud = new grocery_CRUD();
		$crud->set_subject('Sessões');
		$crud->set_table('sessoes_telegram');
		$crud->set_language("pt-br.portuguese");
		$crud->display_as('id_cliente','Cliente');
		$crud->set_relation('id_cliente','clientes','nome');
		$output = $crud->render();
		$output->idcliente = $user['id'];
		$output->nomecliente = $user['nome'];
		$output->titulo = 'Gerenciamento de Sessões';
		$output->custom_js = '';
		$this->load->view('our_template.php',$output);  
	}
	
	public function clientes()
	{
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$crud = new grocery_CRUD();
		$crud->set_subject('Cliente');
		$crud->set_table('clientes');
		$crud->set_language("pt-br.portuguese");
		$output = $crud->render();
		$output->idcliente = $user['id'];
		$output->nomecliente = $user['nome'];
		$output->titulo = 'Cadastro de Clientes';
		$output->custom_js = '';
		$this->load->view('our_template.php',$output);  
	}
	
	public function usuarios()
	{
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$crud = new grocery_CRUD();
		$crud->where('id_cliente',$user['id']);
		$crud->set_table('usuarios');
		$crud->set_subject('Usuário');
		$crud->display_as('id_cliente','Cliente');
		$crud->set_relation('id_cliente','clientes','nome');
		$crud->set_language("pt-br.portuguese");
		$output = $crud->render();
		$output->idcliente = $user['id'];
		$output->nomecliente = $user['nome'];
		$output->titulo = 'Cadastro de Usuários';
		$output->custom_js = <<<JS
	$(document).ready(function(){
		var nome_temp_cli='';
		$('select[name="id_cliente"] option').each(function(){
			if($(this).val()!="{$user['id']}"){
				$(this).remove();
			}else{
				nome_temp_cli = $(this).text();
			}
		});
		$('select[name="id_cliente"]').val({$user['id']});
		$('#id_cliente_input_box .chosen-container').html('<h3>'+nome_temp_cli+'</h3>');
	});
JS;
		$this->load->view('our_template.php',$output);  
	}
	
	public function getClienteImagem(){
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$id = $this->input->get('id');
		$query = $this->db->query("select imagem from operacoes where id=".$id);
		$row = $query->result();
		header( "Content-type: image/png"); 
		exit(($row[0]->imagem));
	}
	
	public function processaImagemEnviada(){
		
		$dir_imagem = dirname(__FILE__).'/../libraries/jQuery-File-Upload-9.18.0/server/php/files/'.$this->input->post('dir_imagem');
		$cliente = $this->input->post('cliente');
		$gps= $this->input->post('gps');
		$gps1=$gps2='';
		if(is_array($gps)){
			$lat = $gps['lat'];
			$lon = $gps['lon'];
			$gps1=',gps';
			$gps2=',"'.$lat.'|'.$lon.'"';
		}		
		$ok=true;
		if(is_file($dir_imagem)){
			
			$imagemrecebida = file_get_contents($dir_imagem);
			
			if (function_exists('curl_file_create')) { // php 5.5+
			  $cFile = curl_file_create($dir_imagem);
			} else { // 
			  $cFile = '@' . realpath($dir_imagem);
			}
			//$post = array('file'=> $cFile);
			$post = array('filename'=> $cFile);
			$ch = curl_init();
			//curl_setopt($ch, CURLOPT_URL,'https://wabr.inliteresearch.com/barcodes/file');
			curl_setopt($ch, CURLOPT_URL,'https://zxing.org/w/decode');
			curl_setopt($ch, CURLOPT_POST,1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$resultJson=curl_exec ($ch);
			curl_close ($ch);
			
			$tst = explode('<pre>',$resultJson);
			//file_put_contents(dirname(__FILE__).'/logprocessimage.log',"\n\n".print_r($tst,1),FILE_APPEND);
			
			//$retBarCode = json_decode($resultJson,1);
			$codigoLido = $codebar = '';
			//$exif = exif_read_data($dir_imagem, 0, true);
			
			if(count($tst)>1){
				$codebar = substr($tst[3],0,strpos($tst[3],'</pre>'));
				$codigoLido = "Codigo lido: ".$codebar."\n";
			}
			//if($exif){
				//$codigoLido .= "Informacoes adicionais [teste]:".print_r($exif,1);
			//}
			$query = $this->db->query('insert into operacoes(id_cliente,datahora,imagem,texto'.$gps1.') values('.$cliente.',now(),"'.addslashes($imagemrecebida).'","'.$codebar.'"'.$gps2.')');
			$codigoLido = $codigoLido?$codigoLido:'nenhum codigo de barras encontrado';
		}else{
			$codigoLido = 'nenhum arquivo encontrado';
			$ok=false;
		}
		header('Content-Type: application/json');
		exit(json_encode(array('retorno'=>$codigoLido,'status'=>$ok),1));
	}
	
	public function getCliente(){
		$usuario = $this->input->post('usuario');
		$senha = $this->input->post('senha');
		$query = $this->db->query("select * from usuarios where usuario='".$usuario."' and senha='".$senha."'");
		$saida=$query->result();
		header('Content-Type: application/json');
		exit(json_encode($saida,1));
	}
	
	public function getClienteDados(){
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$cli = $this->input->post('cli');
		$query = $this->db->query("select id,datahora,texto,gps,imagem from operacoes where id_cliente=".$cli." order by datahora desc");
		$saida=array();
		foreach ($query->result() as $row)
		{
			if($row->imagem!='' && (int)$row->id>0){
			
				$row->imagem = '/index.php/Cliente/getClienteImagem/?id='.$row->id;
				
			}
			
			unset($row->id);
		        $saida[]=(array)$row;
		}
		header('Content-Type: application/json');
		exit(json_encode($saida,1));
	}
	
	public function relatorio()
	{
		$user = $this->dados_user;
		if(!is_array($user)){
			redirect ( '/Login/doLogout' );
		}
		$query = $this->db->query("select * from usuarios where id_cliente =" . $user['id']);
		$saida=array();
		foreach ($query->result() as $row)
		{
			if(isset($row->usuario)){
			        $saida[]="<option value='".$row->id."'>".$row->usuario."</option>";
			}
		}
		$output['combo'] = "<select class='combocli k-dropdown '>".implode('',$saida)."</select>";
		$output['idcliente'] = $user['id'];
		$output['nomecliente'] = $user['nome'];
		$this->load->view('relatorio.php',$output);   
	}
	
	 
	
}
