<?php
defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' );
$title_page = 'JáEntreguei'.(! isset ( $title_page ) ? '' : ' - '.$title_page);
$rand_script = '?vs77';//.rand(1,99);

function isSecure() {
  return
    (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || $_SERVER['SERVER_PORT'] == 443;
}
if(!isSecure()){
	header('location: https://demo.jaentreguei.com.br',301);
	exit();
}

// favicon
// http://realfavicongenerator.net/


// para crud verificar = www.grocerycrud.com
//
?><html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php echo $title_page; ?></title>

<!-- ParamJS -->
<script>
	window.base_url = <?php echo json_encode(base_url(),1); ?>;
</script>

<!-- JQuery -->
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="<?php echo base_url('application/libraries/bootstrap/css/bootstrap.min.css').$rand_script; ?>">

<!-- Latest compiled and minified JavaScript -->
<script
	src="<?php echo base_url('application/libraries/bootstrap/js/bootstrap.min.js').$rand_script; ?>"></script>

<!-- Font-Awesome -->
<link rel="stylesheet"
	href="<?php echo base_url('application/libraries/font-awesome/css/font-awesome.min.css').$rand_script; ?>">


<!-- KENDOUI - FREE VERSION - OPENSOURCE - https://github.com/telerik/kendo-ui-core -->
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.core.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.ui.core.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.list.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.timepicker.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.view.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.view.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/angular.min.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.angular.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.angular2.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.autocomplete.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.binder.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.button.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.calendar.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.color.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.colorpicker.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.combobox.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.data.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.data.odata.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.data.signalr.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.data.xml.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.datepicker.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.datetimepicker.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.draganddrop.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.dropdownlist.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.editable.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.fx.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.listview.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.maskedtextbox.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.menu.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.actionsheet.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.application.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.button.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.buttongroup.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.collapsible.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.drawer.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.listview.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.loader.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.modalview.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.navbar.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.pane.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.popover.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.scroller.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.scrollview.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.shim.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.splitview.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.switch.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.mobile.tabstrip.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.multiselect.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.notification.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.numerictextbox.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.pager.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.panelbar.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.popup.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.progressbar.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.resizable.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.responsivepanel.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.router.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.selectable.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.slider.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.sortable.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.splitter.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.tabstrip.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.toolbar.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.tooltip.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.touch.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.userevents.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.validator.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.virtuallist.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.webcomponents.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.window.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/kendo.web.min.js').$rand_script; ?>"></script>

<script
	src="<?php echo base_url('application/libraries/kendoui/src/messages/kendo.messages.pt-BR.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/kendoui/src/cultures/kendo.culture.pt-BR.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/bootstrap-suggest/js/bootstrap-suggest.js').$rand_script; ?>"></script>

<script
	src="<?php echo base_url('application/js/pdfobject.min.js').$rand_script; ?>"></script>
        
<script
	src="<?php echo base_url('application/js/html2canvas.min.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/js/html2canvas.svg.min.js').$rand_script; ?>"></script>
        
        
        
<!-- jQuery File upload -->
<script
	src="<?php echo base_url('application/libraries/jQuery-File-Upload-9.18.0/js/vendor/jquery.ui.widget.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/jQuery-File-Upload-9.18.0/js/jquery.iframe-transport.js').$rand_script; ?>"></script>
<script
	src="<?php echo base_url('application/libraries/jQuery-File-Upload-9.18.0/js/jquery.fileupload.js').$rand_script; ?>"></script>        
<link rel="stylesheet"
	href="<?php echo base_url('application/libraries/jQuery-File-Upload-9.18.0/css/jquery.fileupload.css').$rand_script; ?>">
        
        
        
<link rel="stylesheet"
	href="<?php echo base_url('application/libraries/kendoui/styles/common/css/kendo.common.bootstrap.min.css').$rand_script; ?>">
<link rel="stylesheet"
	href="<?php echo base_url('application/libraries/kendoui/styles/common/css/kendo.default.bootstrap.min.css').$rand_script; ?>">
<!-- link rel="stylesheet"
	href="<?php echo base_url('application/libraries/kendoui/styles/web/kendo.common.core.css').$rand_script; ?>" -->
<!-- link rel="stylesheet"
	href="<?php echo base_url('application/libraries/kendoui/styles/web/kendo.default.css').$rand_script; ?>" -->


<link rel="stylesheet" href="<?php echo base_url('application/libraries/bootstrap-suggest/css/bootstrap-suggest.css').$rand_script; ?>">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
	
	<?php
	/*
	 * -- comentado para ficar na documentacao caso precise de um CRUD para tabelas no banco
	 * <!-- JQGRID -->
	 * <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('application/libraries/phpgrid/lib/js/themes/redmond/jquery-ui.custom.css').$rand_script; ?>"></link>
	 * <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('application/libraries/phpgrid/lib/js/jqgrid/css/ui.jqgrid.css').$rand_script; ?>"></link>
	 * <script src="<?php echo base_url('application/libraries/phpgrid/lib/js/jqgrid/js/i18n/grid.locale-pt-br.js').$rand_script; ?>" type="text/javascript"></script>
	 * <script src="<?php echo base_url('application/libraries/phpgrid/lib/js/jqgrid/js/jquery.jqGrid.min.js').$rand_script; ?>" type="text/javascript"></script>
	 * <script src="<?php echo base_url('application/libraries/phpgrid/lib/js/themes/jquery-ui.custom.min.js').$rand_script; ?>" type="text/javascript"></script>
	 * Ex.: CRUD DATABASES
	 * include_once("../../config.php");
	 * // set up DB
	 * mysql_connect(PHPGRID_DBHOST, PHPGRID_DBUSER, PHPGRID_DBPASS);
	 * mysql_select_db(PHPGRID_DBNAME);
	 * // include and create object
	 * include(PHPGRID_LIBPATH."inc/jqgrid_dist.php");
	 * // set few params
	 * $grid["caption"] = "Sample Grid";
	 * $g->set_options($grid);
	 * // set database table for CRUD operations
	 * $g->table = "clients";
	 * // render grid and get html/js output
	 * $out = $g->render("list1");
	 */
	?>	
	
	<!-- PHP_JS -->
<script
	src="<?php echo base_url('application/js/php_js.js').$rand_script; ?>"></script>

<!-- Fakeloader -->
<script
	src="<?php echo base_url('application/js/fakeloader.js').$rand_script; ?>"></script>
<link rel="stylesheet"
	href="<?php echo base_url('application/css/fakeloader.css').$rand_script; ?>">

<!-- loading-overlay -->
<script
	src="<?php echo base_url('application/libraries/jquery-loading-overlay/src/loadingoverlay.min.js').$rand_script; ?>"></script>

<!-- Bootbox -->
<script
	src="<?php echo base_url('application/js/bootbox.min.js').$rand_script; ?>"></script>

<!-- Multiselect dropdown bootstrap -->
<script
	src="<?php echo base_url('application/js/bootstrap-multiselect.js').$rand_script; ?>"></script>
<link rel="stylesheet"
	href="<?php echo base_url('application/css/bootstrap-multiselect.css').$rand_script; ?>">

<!-- Alertify -->
<script
	src="<?php echo base_url('application/js/alertify.min.js').$rand_script; ?>"></script>
<link rel="stylesheet"
	href="<?php echo base_url('application/css/alertify.min.css').$rand_script; ?>">

<!-- autoGrid-felipeb -->
<script
	src="<?php echo base_url('application/js/autoGrid.js').$rand_script; ?>"></script>

<!-- MENU JS -->
<script
	src="<?php echo base_url('application/js/menu.js').$rand_script; ?>"></script>
	
	
	

<!-- GroceryCrud -->
<?php /*
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/grocery_crud/css/jquery_plugins/fancybox/jquery.fancybox.css').$rand_script; ?>" />
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/grocery_crud/css/ui/simple/jquery-ui-1.10.1.custom.min.css').$rand_script; ?>" />
    <link type="text/css" rel="stylesheet" href="<?php echo base_url('assets/grocery_crud/themes/bootstrap/css/flexigrid.css').$rand_script; ?>" />
  
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/jquery.noty.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/config/jquery.noty.config.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/common/lazyload-min.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/jquery.form.min.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/jquery.numeric.min.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/jquery.fancybox-1.3.4.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/jquery.easing-1.3.pack.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/js/jquery_plugins/ui/jquery-ui-1.10.3.custom.min.js').$rand_script; ?>"></script>	
    <script src="<?php echo base_url('assets/grocery_crud/themes/bootstrap/js/cookies.js').$rand_script; ?>"></script>
    <script src="<?php echo base_url('assets/grocery_crud/themes/bootstrap/js/jquery.printElement.min.js').$rand_script; ?>"></script>
	*/ ?>
	

  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/dist/css/AdminLTE.min.css').$rand_script; ?>">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/dist/css/skins/_all-skins.min.css').$rand_script; ?>">
  <!-- iCheck -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/iCheck/flat/blue.css').$rand_script; ?>">
  <!-- Morris chart -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/morris/morris.css').$rand_script; ?>">
  <!-- jvectormap -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/jvectormap/jquery-jvectormap-1.2.2.css').$rand_script; ?>">
  <!-- Date Picker -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/datepicker/datepicker3.css').$rand_script; ?>">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/daterangepicker/daterangepicker.css').$rand_script; ?>">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css').$rand_script; ?>">


<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/morris/morris.min.js').$rand_script; ?>"></script>
<!-- Sparkline -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/sparkline/jquery.sparkline.min.js').$rand_script; ?>"></script>
<!-- jvectormap -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js').$rand_script; ?>"></script>
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/jvectormap/jquery-jvectormap-world-mill-en.js').$rand_script; ?>"></script>
<!-- jQuery Knob Chart -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/knob/jquery.knob.js').$rand_script; ?>"></script>
<!-- daterangepicker -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/daterangepicker/daterangepicker.js').$rand_script; ?>"></script>
<!-- datepicker -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/datepicker/bootstrap-datepicker.js').$rand_script; ?>"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js').$rand_script; ?>"></script>
<!-- Slimscroll -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/slimScroll/jquery.slimscroll.min.js').$rand_script; ?>"></script>
<!-- FastClick -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/plugins/fastclick/fastclick.js').$rand_script; ?>"></script>


<!-- JS e CSS comuns -->
<script
	src="<?php echo base_url('application/js/common.js').$rand_script; ?>"></script>
<link rel="stylesheet"
	href="<?php echo base_url('application/css/common.css').$rand_script; ?>">


<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<!-- script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/dist/js/pages/dashboard.js').$rand_script; ?>"></script -->
<!-- AdminLTE for demo purposes -->
<!-- script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/dist/js/demo.js').$rand_script; ?>"></script -->

<!-- AdminLTE App -->
<script src="<?php echo base_url('application/third_party/AdminLTE-2.3.11/dist/js/app.js').$rand_script; ?>"></script>

</head>

<body class="hold-transition skin-blue sidebar-mini">