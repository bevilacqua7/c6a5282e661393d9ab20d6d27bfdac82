  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
	  
	  <?php if($idcliente==1){ ?>
        <li><a href="/index.php/cliente/sessoes"><i class="fa fa-cloud-upload"></i> <span>Gerenciamento de sessões</span></a></li>
        <li><a href="/index.php/cliente/clientes"><i class="fa fa-user"></i> <span>Cadastro de clientes</span></a></li>
          <?php } ?>
        <li><a href="/index.php/cliente/usuarios"><i class="fa fa-users"></i> <span>Cadastro de usuários</span></a></li>
        <li><a href="/index.php/cliente/relatorio"><i class="fa fa-dropbox"></i> <span>Operações realizadas</span></a></li>
		
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
