<?php
defined('BASEPATH') OR exit('No direct script access allowed');

include_once (dirname ( __FILE__ ) . '/header.php');
$rand_script = '?'.rand(1,999);
include_once (dirname ( __FILE__ ) . '/topo.php');
?>



<?php 
foreach($css_files as $file): ?>
    <link type="text/css" rel="stylesheet" href="<?php echo $file.'?'.rand(1,99); ?>" />
 
<?php endforeach; ?>
<?php foreach($js_files as $file): ?>
 
    <script src="<?php echo $file.'?'.rand(1,99); ?>"></script>
<?php endforeach; ?>

<script>
	<?php echo $custom_js; ?>
</script>
    
<h1><?php echo $titulo; ?></h1>
    <div>
<?php echo $output; ?>
 
    </div>
    
<?php
include_once (dirname ( __FILE__ ) . '/footer.php');
?>