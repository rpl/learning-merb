
Ext.onReady(function() {
	var myStore = new Ext.data.JsonStore({
		url: '/recipes.json',
		fields: ['name'],
		autoLoad: true
	    });

	var grid = new Ext.grid.GridPanel({
		store: myStore,
		columns: [{header: 'Nome', width: 120, sortable: true, dataIndex: 'name'}],
		viewConfig: {
		    forceFit: true
		},
		renderTo: 'content',
		title: 'Tutte le ricette',
		width: 500,
		autoHeight: true,
		frame: true
	    });
 
	grid.getSelectionModel().selectFirstRow();
 
	var simple = new Ext.FormPanel({
		labelWidth: 75, 
		frame: true,
		title: 'Nuova ricetta',
		bodyStyle:'padding:5px 5px 0',
		width: 350,
		defaults: {width: 230},
		defaultType: 'textfield',

		items: [{
			fieldLabel: 'Ricetta',
			name: 'name',
			allowBlank:false
		    }],

	    });

	var submit = simple.addButton({
		text: 'Save',
		handler: function(){
		    simple.getForm().submit({url:'/recipes/create.json', waitMsg:'Saving Data...'});
		}
	    });

	simple.on('actioncomplete', function(){
		myStore.reload();
	    });

	simple.on('actionfailed', function(){
		//handle actionfailed event
	    });

	simple.render(document.body);

});

