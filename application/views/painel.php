<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include_once (dirname ( __FILE__ ) . '/header.php');
//$background = base_url()."bkdatasus".rand(1,3).".jpg";

include_once (dirname ( __FILE__ ) . '/topo.php');
?>

<div id="container">
	<h1>Bem vindo <?php echo $nomecliente; ?></h1>

</div>

<?php
include_once (dirname ( __FILE__ ) . '/footer.php');
?>