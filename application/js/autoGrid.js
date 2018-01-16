// autogrid - encapsulamento kendogridoldversionfree - felipeb 20160601
$.fn.autogrid = function(_objJqueryDiv,_objJsonDatasource,_arrObjColunas,_objParamExtra){
    
        _trace(arguments.callee.name,'autogrid');
	var objJqueryDiv 			= _objJqueryDiv==undefined			?null:_objJqueryDiv;
	var objJsonDatasource 		= _objJsonDatasource==undefined		?{}:_objJsonDatasource;
	var arrObjColunas 			= _arrObjColunas==undefined			?[]:_arrObjColunas;
	var objParamExtra 			= _objParamExtra==undefined			?null:_objParamExtra;
	
	if(objJqueryDiv==null){
		return false;
	}
	var paramKendoRecebido = {
	        dataSource: objJsonDatasource,
	        columns: arrObjColunas
	     };
	var paramKendoDefault = {
	        dataSource: {},
	        height: 550,
	        groupable: false,
	        sortable: true,
	        pageable: {
	            refresh: false,
	            pageSizes: true,
	            buttonCount: 3
	        },
	        columns: []
	    };
	$.extend( true, paramKendoDefault, paramKendoRecebido );
	if(objParamExtra!=null){
		$.extend( true, paramKendoDefault, objParamExtra );
	}	
        
	objJqueryDiv.kendoGrid(paramKendoDefault);
	
	/*
	 * Ex. USO:
	 * 
<div id="example">
    <div id="grid"></div>
    <script>
        $(document).ready(function () {
            var _objJqueryDiv = $("#grid");
            var _objJsonDatasource = {data:[{OrderID:10248,CustomerID:"VINET",EmployeeID:5,OrderDate:new Date(1996,6,4,0,0,0,0),RequiredDate:new Date(1996,7,1,0,0,0,0),ShippedDate:new Date(1996,6,16,0,0,0,0),ShipVia:3,Freight:32.3800,ShipName:"Vins et alcools Chevalier",ShipAddress:"59 rue de l'Abbaye",ShipCity:"Reims",ShipRegion:"",ShipPostalCode:"51100",ShipCountry:"France"},{OrderID:10258,CustomerID:"ERNSH",EmployeeID:1,OrderDate:new Date(1996,6,17,0,0,0,0),RequiredDate:new Date(1996,7,14,0,0,0,0),ShippedDate:new Date(1996,6,23,0,0,0,0),ShipVia:1,Freight:140.5100,ShipName:"Ernst Handel",ShipAddress:"Kirchgasse 6",ShipCity:"Graz",ShipRegion:"",ShipPostalCode:"8010",ShipCountry:"Austria"},{OrderID:10259,CustomerID:"CENTC",EmployeeID:4,OrderDate:new Date(1996,6,18,0,0,0,0),RequiredDate:new Date(1996,7,15,0,0,0,0),ShippedDate:new Date(1996,6,25,0,0,0,0),ShipVia:3,Freight:3.2500,ShipName:"Centro comercial Moctezuma",ShipAddress:"Sierras de Granada 9993",ShipCity:"México D.F.",ShipRegion:"",ShipPostalCode:"05022",ShipCountry:"Mexico"},{OrderID:10260,CustomerID:"OTTIK",EmployeeID:4,OrderDate:new Date(1996,6,19,0,0,0,0),RequiredDate:new Date(1996,7,16,0,0,0,0),ShippedDate:new Date(1996,6,29,0,0,0,0),ShipVia:1,Freight:55.0900,ShipName:"Ottilies Käseladen",ShipAddress:"Mehrheimerstr. 369",ShipCity:"Köln",ShipRegion:"",ShipPostalCode:"50739",ShipCountry:"Germany"},{OrderID:10261,CustomerID:"QUEDE",EmployeeID:4,OrderDate:new Date(1996,6,19,0,0,0,0),RequiredDate:new Date(1996,7,16,0,0,0,0),ShippedDate:new Date(1996,6,30,0,0,0,0),ShipVia:2,Freight:3.0500,ShipName:"Que Delícia",ShipAddress:"Rua da Panificadora, 12",ShipCity:"Rio de Janeiro",ShipRegion:"RJ",ShipPostalCode:"02389-673",ShipCountry:"Brazil"},{OrderID:10262,CustomerID:"RATTC",EmployeeID:8,OrderDate:new Date(1996,6,22,0,0,0,0),RequiredDate:new Date(1996,7,19,0,0,0,0),ShippedDate:new Date(1996,6,25,0,0,0,0),ShipVia:3,Freight:48.2900,ShipName:"Rattlesnake Canyon Grocery",ShipAddress:"2817 Milton Dr.",ShipCity:"Albuquerque",ShipRegion:"NM",ShipPostalCode:"87110",ShipCountry:"USA"},{OrderID:10263,CustomerID:"ERNSH",EmployeeID:9,OrderDate:new Date(1996,6,23,0,0,0,0),RequiredDate:new Date(1996,7,20,0,0,0,0),ShippedDate:new Date(1996,6,31,0,0,0,0),ShipVia:3,Freight:146.0600,ShipName:"Ernst Handel",ShipAddress:"Kirchgasse 6",ShipCity:"Graz",ShipRegion:"",ShipPostalCode:"8010",ShipCountry:"Austria"},{OrderID:10264,CustomerID:"FOLKO",EmployeeID:6,OrderDate:new Date(1996,6,24,0,0,0,0),RequiredDate:new Date(1996,7,21,0,0,0,0),ShippedDate:new Date(1996,7,23,0,0,0,0),ShipVia:3,Freight:3.6700,ShipName:"Folk och fä HB",ShipAddress:"Åkergatan 24",ShipCity:"Bräcke",ShipRegion:"",ShipPostalCode:"S-844 67",ShipCountry:"Sweden"},{OrderID:11077,CustomerID:"RATTC",EmployeeID:1,OrderDate:new Date(1998,4,6,0,0,0,0),RequiredDate:new Date(1998,5,3,0,0,0,0),ShippedDate:null,ShipVia:2,Freight:8.5300,ShipName:"Rattlesnake Canyon Grocery",ShipAddress:"2817 Milton Dr.",ShipCity:"Albuquerque",ShipRegion:"NM",ShipPostalCode:"87110",ShipCountry:"USA"}],pageSize:10};
            var _arrObjColunas = [{field:"ShipCountry",title:"Ship Country",width:300},{field:"Freight",width:300},{field:"OrderDate",title:"Order Date",format:"{0:dd/MM/yyyy}"}];
            $(this).autogrid(_objJqueryDiv,_objJsonDatasource,_arrObjColunas);
        });
    </script>
</div>

	 * 
	 * 
	 * 
	Ex. FONTE,:
		$("#grid").kendoGrid({
	        dataSource: {
	            //type: "odata",
	            //transport: {
	            //    read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
	            //},
	            data: [{
	                OrderID : 10248,
	                CustomerID : "VINET",
	                EmployeeID : 5,
	                OrderDate : new Date(1996, 6, 4, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 1, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 16, 0, 0, 0, 0),
	                ShipVia : 3,
	                Freight : 32.3800,
	                ShipName : "Vins et alcools Chevalier",
	                ShipAddress : "59 rue de l'Abbaye",
	                ShipCity : "Reims",
	                ShipRegion : "",
	                ShipPostalCode : "51100",
	                ShipCountry : "France"
	            }, {
	                OrderID : 10258,
	                CustomerID : "ERNSH",
	                EmployeeID : 1,
	                OrderDate : new Date(1996, 6, 17, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 14, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 23, 0, 0, 0, 0),
	                ShipVia : 1,
	                Freight : 140.5100,
	                ShipName : "Ernst Handel",
	                ShipAddress : "Kirchgasse 6",
	                ShipCity : "Graz",
	                ShipRegion : "",
	                ShipPostalCode : "8010",
	                ShipCountry : "Austria"
	            }, {
	                OrderID : 10259,
	                CustomerID : "CENTC",
	                EmployeeID : 4,
	                OrderDate : new Date(1996, 6, 18, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 15, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 25, 0, 0, 0, 0),
	                ShipVia : 3,
	                Freight : 3.2500,
	                ShipName : "Centro comercial Moctezuma",
	                ShipAddress : "Sierras de Granada 9993",
	                ShipCity : "México D.F.",
	                ShipRegion : "",
	                ShipPostalCode : "05022",
	                ShipCountry : "Mexico"
	            }, {
	                OrderID : 10260,
	                CustomerID : "OTTIK",
	                EmployeeID : 4,
	                OrderDate : new Date(1996, 6, 19, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 16, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 29, 0, 0, 0, 0),
	                ShipVia : 1,
	                Freight : 55.0900,
	                ShipName : "Ottilies Käseladen",
	                ShipAddress : "Mehrheimerstr. 369",
	                ShipCity : "Köln",
	                ShipRegion : "",
	                ShipPostalCode : "50739",
	                ShipCountry : "Germany"
	            }, {
	                OrderID : 10261,
	                CustomerID : "QUEDE",
	                EmployeeID : 4,
	                OrderDate : new Date(1996, 6, 19, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 16, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 30, 0, 0, 0, 0),
	                ShipVia : 2,
	                Freight : 3.0500,
	                ShipName : "Que Delícia",
	                ShipAddress : "Rua da Panificadora, 12",
	                ShipCity : "Rio de Janeiro",
	                ShipRegion : "RJ",
	                ShipPostalCode : "02389-673",
	                ShipCountry : "Brazil"
	            }, {
	                OrderID : 10262,
	                CustomerID : "RATTC",
	                EmployeeID : 8,
	                OrderDate : new Date(1996, 6, 22, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 19, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 25, 0, 0, 0, 0),
	                ShipVia : 3,
	                Freight : 48.2900,
	                ShipName : "Rattlesnake Canyon Grocery",
	                ShipAddress : "2817 Milton Dr.",
	                ShipCity : "Albuquerque",
	                ShipRegion : "NM",
	                ShipPostalCode : "87110",
	                ShipCountry : "USA"
	            }, {
	                OrderID : 10263,
	                CustomerID : "ERNSH",
	                EmployeeID : 9,
	                OrderDate : new Date(1996, 6, 23, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 20, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 6, 31, 0, 0, 0, 0),
	                ShipVia : 3,
	                Freight : 146.0600,
	                ShipName : "Ernst Handel",
	                ShipAddress : "Kirchgasse 6",
	                ShipCity : "Graz",
	                ShipRegion : "",
	                ShipPostalCode : "8010",
	                ShipCountry : "Austria"
	            }, {
	                OrderID : 10264,
	                CustomerID : "FOLKO",
	                EmployeeID : 6,
	                OrderDate : new Date(1996, 6, 24, 0, 0, 0, 0),
	                RequiredDate : new Date(1996, 7, 21, 0, 0, 0, 0),
	                ShippedDate : new Date(1996, 7, 23, 0, 0, 0, 0),
	                ShipVia : 3,
	                Freight : 3.6700,
	                ShipName : "Folk och fä HB",
	                ShipAddress : "Åkergatan 24",
	                ShipCity : "Bräcke",
	                ShipRegion : "",
	                ShipPostalCode : "S-844 67",
	                ShipCountry : "Sweden"
	            }, {
	                OrderID : 11077,
	                CustomerID : "RATTC",
	                EmployeeID : 1,
	                OrderDate : new Date(1998, 4, 6, 0, 0, 0, 0),
	                RequiredDate : new Date(1998, 5, 3, 0, 0, 0, 0),
	                ShippedDate : null,
	                ShipVia : 2,
	                Freight : 8.5300,
	                ShipName : "Rattlesnake Canyon Grocery",
	                ShipAddress : "2817 Milton Dr.",
	                ShipCity : "Albuquerque",
	                ShipRegion : "NM",
	                ShipPostalCode : "87110",
	                ShipCountry : "USA"
	            }],
	            pageSize: 10
	        },
	        height: 550,
	        groupable: false,
	        sortable: true,
	        pageable: {
	            refresh: false,
	            pageSizes: true,
	            buttonCount: 3
	        },
	        columns: [
	                  {
	                      field: "ShipCountry",
	                      title: "Ship Country",
	                      width: 300
	                  },
	                  {
	                      field: "Freight",
	                      width: 300
	                  },
	                  {
	                      field: "OrderDate",
	                      title: "Order Date",
	                      format: "{0:dd/MM/yyyy}"
	                  }
	              ]
	    });
    */
};