sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
		"opensap/myapp/model/formatter"
	]
	,function(Controller, MessageToast, Filter, FilterOperator, formatter){
		
		Controller.extend("opensap.myapp.controller.App",{

		    formatter: formatter,

			onShowHello: function(){
				//MessageToast.show("Que coisa mais linda!");
				
				// read msg from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				// show message
				MessageToast.show(sMsg);
			},

			onFilterProducts : function (oEvent) {
			    var aFilter = [] , sQuery = oEvent.getParameter("query"),
			    oList = this.getView().byId("productsList"),
			    oBinding = oList.getBinding("items");
			    if (sQuery){
			        aFilter.push(new Filter("ProductID", FilterOperator.Contains,sQuery));
			    }
			    oBinding.filter(aFilter);
			}

		});
	}
);