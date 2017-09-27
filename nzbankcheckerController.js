({
	afterScriptsLoaded : function(component, event, helper) {
			var bbrFile = window.DataCache.getData('bbr');
				if(bbrFile) {
					console.log('## bbr loaded from cache');
					//console.log(bbrFile);
				} else {
					var action = component.get("c.getBBR");
					action.setCallback(this, function(response) {
						var bbrFile = response.getReturnValue();
						window.DataCache.setData('bbr',bbrFile);
						console.log('## bbr set');
						//console.log(bbrFile);
				});
				$A.enqueueAction(action);
			}
},
	fieldChange : function(component, event, helper) {
		var service = new BankChecker(component);
	  if(service.checkAccount()){
			//enable ui check
			component.set('v.isValid', true);
			component.set('v.isInvalid', '');
		} else {
			//put x bar;
			component.set('v.isValid', '');
			component.set('v.isInvalid', true);		}
	}
})