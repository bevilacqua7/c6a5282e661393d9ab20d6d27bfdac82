<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set("log_errors", 1);
ini_set("error_log", dirname(__FILE__)."/php-error.log");

class Login extends CI_Controller {

	
	public function index()
	{
		$dados['exp'] = '';
		$dados['erro_login'] = '';
		$this->load->view('login',$dados);
		
	}
	
	public function doLogout() {
		$this->session->sess_destroy ();
		redirect ( '/Login' );
	}
	
	public function doLogin(){
	
		$usuario = $this->input->post('usuario');
		$senha = $this->input->post('senha');
		$query = $this->db->query("select * from clientes where usuario='".$usuario."' and senha='".$senha."'");
		$saida=$query->result();
		if(count($saida)>0){
			$arrDados = array('login'=>(array)$saida[0]);
			$this->session->set_userdata ( $arrDados );
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
			redirect('/Cliente');
		}else{
			$dados['exp'] = '';
			$dados['erro_login'] = 'Usuário ou senha inválidos';
			$this->load->view('login',$dados);
		
		}
		
	}
		
	
}
