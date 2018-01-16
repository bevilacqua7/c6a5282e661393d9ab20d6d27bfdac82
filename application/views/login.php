<?php
include_once (dirname ( __FILE__ ) . '/header.php');

 
?>

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

<style>
body {
	padding-top: 40px;
	padding-bottom: 40px;
}

.form-signin {
	max-width: 330px;
	padding: 15px;
	margin: 0 auto;
        border-radius: 10px;
    background-color: rgba(255,255,255,0.95);
}

.form-signin .form-signin-heading, .form-signin .checkbox {
	margin-bottom: 10px;
}

.form-signin .checkbox {
	font-weight: normal;
}

.form-signin .form-control {
	position: relative;
	height: auto;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 10px;
	font-size: 16px;
}

.form-signin .form-control:focus {
	z-index: 2;
}

.form-signin input[type="email"] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
	margin-bottom: 10px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
.container.loginform{
    padding-top: 50%;
    margin-top: -50%;
    width: 370px;
}
</style>

<div class="container loginform">

	<form class="form-signin" method="POST"
		action="<?php echo base_url('index.php/Login/doLogin');?>">
	      
	      
      
        <img class="form-signin-heading text-center" style="margin: 20px;height: 80px;margin-left: 35%;" src="https://jaentreguei.com.br/wp-content/uploads/2017/06/jaentreguei-e1497135481504.png">
        
	    <?php
					if ($exp==='1') {
                                            echo "<script>alert('Sessão expirada, favor iniciar uma nova sessão.');</script>";
                                        }
					if ($erro_login) {
						$errHTML = <<<HTML
	      <div class="alert alert-danger" role="alert">
	        <strong>Erro:</strong> {$erro_login}
	      </div>	
HTML;
						echo $errHTML;
					}
					?>
		<label for="usuario" class="sr-only">Usuário:</label> <input
			type="text" name="usuario" id="usuario" class="form-control"
			placeholder="Usuário" required autofocus> <label for="inputPassword"
			class="sr-only">Senha:</label> <input type="password" name="senha"
			id="inputPassword" class="form-control" placeholder="Senha" required>
		<button class="btn btn-lg btn-primary btn-block" type="submit" style="background-color: #434b99;border-color: #2e368e;">Entrar</button>
	</form>
<!-- pre>
<?php /*echo $dados_test;*/ ?>
</pre -->

</div>
<!-- /container -->


<?php
include_once (dirname ( __FILE__ ) . '/footer.php');
?>