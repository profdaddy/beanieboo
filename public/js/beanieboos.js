$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("0p5WZtJHlZM3ERJYSBfnokM7KWbVgmdiaB0fO9HV", "sITcgQ6IuklhwPMG52wcy5CybyNweH7iO7aXorLh");
    
    var BeanieBoosView = Parse.View.extend({
    	template: Handlebars.compile($('#bb-tpl').html()),
    	render: function() {
    		var collection = {beanieBoo: this.collection.toJSON() };
    		this.$el.html(this.template(collection));
    	}
    });
 
    var BeanieBoo = Parse.Object.extend("BeanieBoo");
    var BeanieBoos = Parse.Collection.extend({
    	model: BeanieBoo
    });
    
    var beanieBoos = new BeanieBoos();
    
    beanieBoos.fetch({
    	success: function(beanieBoos) {
    		var beanieBoosView = new BeanieBoosView({ collection: beanieBoos });
    		beanieBoosView.render();
    		$('#bb-tbody').html(beanieBoosView.el);
    	},
    	error: function(beanieBoos, error) {
    		console.log(error);
    	}
    }); 
    

});