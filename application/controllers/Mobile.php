<?php
defined('BASEPATH') OR exit('No direct script access allowed');
ini_set("log_errors", 1);
ini_set("error_log", dirname(__FILE__)."/php-error.log");

class Mobile extends CI_Controller {


	public function index()
	{
		$this->load->view('mobile');
		
	}
		
	
}
