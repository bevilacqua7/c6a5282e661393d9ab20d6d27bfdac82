<?php
ini_set("log_errors", 1);
ini_set("error_log", dirname(__FILE__)."/php-error.log");
ini_set('exif.encode_unicode', 'UTF-8');

include_once(dirname(__FILE__).'/db.php');
include(dirname(__FILE__)."/../../telegram/Telegram.php");
$bot_id = '338798503:AAE_jD7FEPJuanmw1_Gi2HxNtdJEYpfZd1s';
$telegram = new Telegram($bot_id);

$text = $telegram->Text();
$chat_id = $telegram->ChatID();
$dados = $telegram->getData();
file_put_contents(dirname(__FILE__).'/log2.txt',"\n\n".print_r($dados ,1),FILE_APPEND);

$arq_recebido=false;


$rsess=mysqli_query($conn,'select * from sessoes_telegram where id_sessao = '.$chat_id);
$nsess=mysqli_num_rows($rsess);
$stat[]='nsess='.$nsess;
$nome=$text;
if($nsess>0){
    $ressess = mysqli_fetch_assoc($rsess);
    if($ressess['usuario']!=''){
    	$nome = $ressess['usuario'];
        $userok=true;
    }
    $senha = $ressess['senha'];
    $cliente=$ressess['id_cliente']!=''?$ressess['id_cliente']:false;
}

                
if($cliente && is_array($dados) && array_key_exists('message',$dados) && array_key_exists('location',$dados['message']) && array_key_exists('latitude',$dados['message']['location']) && array_key_exists('longitude',$dados['message']['location'])){
	mysqli_query($conn,'insert into operacoes(id_cliente,datahora,gps) values('.$cliente.',now(),"'.implode('|',$dados['message']['location']).'")');
	    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Localização recebida com sucesso");
	    $telegram->sendMessage($content);
	    exit();
}

if($cliente && is_array($dados) && array_key_exists('message',$dados) && (array_key_exists('document',$dados['message']) || array_key_exists('photo',$dados['message']))){
	$file = array_key_exists('document',$dados['message']) ? $telegram->getFile($dados['message']['document']['file_id']) : $telegram->getFile($dados['message']['photo'][count($dados['message']['photo'])-1]['file_id']);
	//file_put_contents(dirname(__FILE__).'/log2.txt',"\n\n".print_r($file ,1),FILE_APPEND);
	$nome_cli = $cliente.'_'.$nome;
	$nome = array_key_exists('document',$dados['message']) ? str_replace(array(' ','/'),'_',$dados['message']['document']['file_name']) : str_replace(array(' ','/'),'_',$file['result']['file_path']);
	$nome = $nome_cli.'_'.date('YmdHis').'.'.strtolower(pathinfo($nome , PATHINFO_EXTENSION));
	$ch = curl_init();
	$timeout = 0; // set to zero for no timeout
	curl_setopt ($ch, CURLOPT_URL, "https://api.telegram.org/file/bot".$bot_id."/".$file["result"]["file_path"]);
	curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$dir_imagem = dirname(__FILE__)."/../arquivos_recebidos/".$nome;
	$imagemrecebida = curl_exec($ch);
	file_put_contents($dir_imagem,$imagemrecebida);
	curl_close($ch);
	$arq_recebido = array_key_exists('document',$dados['message']) ? $dados['message']['document']['file_name'] : 'de imagem';
	
	//include(dirname(__FILE__).'/../../PHPMailer/PHPMailer-master/enviodeemail.php');
	//$arq_recebido_online = 'http://portaltelegram.9ideias.com/arquivos_recebidos/'.$nome;
	//$retmail = envia_email_9ideias('felipe@9ideias.com','novo arquivo portal telegram','<a href="'.$arq_recebido_online.'">'.$arq_recebido_online.'</a><br><a href="http://portaltelegram.9ideias.com/?apagar='.$nome.'">APAGAR</a>',false);
	
	// alerta no grupo 9ideias
	//$bot_id2 = '336140539:AAHYsJ39Lw3_x-Xll8yUNUGSUXbaW3dK5MU';
	//$telegram2 = new Telegram($bot_id2);
	//$content2 = array('chat_id' => '-1001089952424', 'text' => '<a href="'.$arq_recebido_online.'">'.$arq_recebido_online.'</a>  http://portaltelegram.9ideias.com/?apagar='.$nome, 'parse_mode'=>'HTML');
	//$telegram2->sendMessage($content2);
	
}

if($arq_recebido){
	// $dir_imagem
		
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
	
	//$retBarCode = json_decode($resultJson,1);
	$codigoLido = '';
	$exif = exif_read_data($dir_imagem, 0, true);
	
	if(count($tst)>1){
		$codebar = substr($tst[3],0,strpos($tst[3],'</pre>'));
		$codigoLido = "Codigo lido: ".$codebar."\n";
	}
	if($exif){
		//$codigoLido .= "Informacoes adicionais [teste]:".print_r($exif,1);
	}
	mysqli_query($conn,'insert into operacoes(id_cliente,datahora,imagem,texto) values('.$cliente.',now(),"'.addslashes($imagemrecebida).'","'.$codebar.'")');
	
	/*
	if(is_array($retBarCode['Barcodes']) && count($retBarCode['Barcodes'])>0){
		$codigoLido = '';
		foreach($retBarCode['Barcodes'] as $code){
			$codigoLido .= "Codigo lido: ".substr($code['Text'],0,strpos($code['Text'],'...')+3)."\n";
		}
	}*/
	
	$codigoLido = $codigoLido?$codigoLido:'nenhum codigo de barras encontrado';
    $reply = "Arquivo ".$arq_recebido." recebido com sucesso.\n".$codigoLido;//.$resultado ;
    $content = array('chat_id' => $chat_id, 'text' => $reply);
    $telegram->sendMessage($content);
    exit();
}else

$logado=false;
if ($text == "/start") {
    // $option = array( array("\xF0\x9F\x90\xAE"), array("Git", "Credit") );
    // $option = array(array("Como funciona?", "Sobre"));
    // Create a permanent custom keyboard
    // $keyb = $telegram->buildKeyBoard($option, $onetime=false);
	
    $r=mysqli_query($conn,'select s.*,c.nome from sessoes_telegram s left join usuarios c on s.id_cliente = c.id where s.id_sessao = '.$chat_id);
    $n=mysqli_num_rows($r);
    if($n>0){
    	    $res = mysqli_fetch_assoc($r);
            $nome = $res['usuario'];
            $senha = $res['senha'];
            $cliente = $res['nome'];
            if($nome!=''){
	            if($senha==''){
			    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Usuário ".$nome." identificado, por favor, digite sua senha:");
			    $telegram->sendMessage($content);
			    exit();
		    }else{
			    $logado=true;
		    }
	    }else{
		    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Usuário não identificado, por favor, digite um usuário cadastrado no sistema JáEntreguei:");
		    $telegram->sendMessage($content);
		    exit();
	    }
    }else{
    	    mysqli_query($conn,'insert into sessoes_telegram(id_sessao) values('.$chat_id.')');
	    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Digite seu usuário do sistema JáEntreguei:");
	    $telegram->sendMessage($content);
	    exit();
    
    }
        
}

if ($text == "Como funciona?") {
    $reply = "Esta é uma automação de processos para a integração com sistemas e manuseio dos recursos disponíveis no mesmo, a qual pode proporcionar comunicação do disparo de eventos causados por sensores e a comunicação agendada dos recursos disponíveis.\n\nEnvie uma imagem e experimente todos os recursos disponíveis e conheça melhor a ferramenta pelo portal: http://portaltelegram.9ideias.com\n\nÉ possível também personalizar o teclado, criando suas próprias teclas, evitando o erro por parte do cliente; criando opções como 'Digite o número do seu pedido', exibir um teclado numérico apenas, ou transformar toda a operação com o bate papo o mais natural possível, evitando o erro pelo cliente final.";
    $content = array('chat_id' => $chat_id, 'text' => $reply);
    $telegram->sendMessage($content);
}else

if ($text == "Sobre") {
    $reply = "Desenvolvido por 9ideias Sistemas inteligentes.  Veja mais em: https://9ideias.com";
    $content = array('chat_id' => $chat_id, 'text' => $reply);
    $telegram->sendMessage($content);
}else

if ($text == "Nova Entrega") {
    $reply = "Envie as fotos da entrega:";
    $content = array('chat_id' => $chat_id, 'text' => $reply);
    $telegram->sendMessage($content);
    exit();
}else

if(trim($text)!='' || $logado){
    $stat=array();
    $userok=false;
    
    $rcli=mysqli_query($conn,'select * from usuarios where usuario = "'.$nome.'"');
    $ncli=mysqli_num_rows($rcli);
    $stat[]='ncli='.$ncli;
    $stat[]='nome='.$nome;
    if($ncli>0){
    	    $rescli = mysqli_fetch_assoc($rcli);
    	    mysqli_query($conn,'update sessoes_telegram set usuario ="'.$nome.'" where id_sessao = '.$chat_id);
    	    $userok=true;
    }
    $stat[]='userok='.($userok?'sim':'nao');
    
    if($nsess>0){
            
	    if($ncli>0){
            	    $senhacli = $rescli['senha'];
            	    $id_cli = $rescli['id'];
            	    $cliente=$rescli['nome'];
            	    if($text==$senhacli){
    			$stat[]='senha=ok';
    	 		mysqli_query($conn,'update sessoes_telegram set senha ="'.$text.'",id_cliente='.$id_cli.' where id_sessao = '.$chat_id);
    	 	    }
    		    $stat[]='text['.$text.']==senhacli['.$senhacli.']';
	    }
            
            if($nome!='' && $userok){
    		    $stat[]='nome='.$nome;
	            if($senha==''){
    		    	$stat[]='senha='.$senha;
	    		$stat[]='text['.$text.']==senha['.$senha.']';
    			if($text==$senhacli){
    				$logado=true;
    			}else{
			    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Digite a senha para o usuário ".$nome.":");//{ ".print_r($stat,1)." }
		    	    $telegram->sendMessage($content);
			}
		    }
		    if($senha!='' || $logado){
			    $option = array(array("Nova Entrega", "Devolução"));
			    $keyb = $telegram->buildKeyBoard($option, $onetime=true);
			    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Usuário identificado: ".$nome." - Cliente: ".$cliente." \nInicie sua operação");
			    $telegram->sendMessage($content);
		    }
	    }else{
	    	if($text!='/start'){
		    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Usuário não identificado, por favor, digite um usuário cadastrado no sistema JáEntreguei:");
		    $telegram->sendMessage($content);
		}
	    }
    }else{
    	    mysqli_query($conn,'insert into sessoes_telegram(id_sessao) values('.$chat_id.')');
	    $content = array('chat_id' => $chat_id, 'reply_markup' => $keyb, 'text' => "Digite seu usuário do sistema JáEntreguei:");
	    $telegram->sendMessage($content);
    
    }
}
