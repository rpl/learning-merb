
Ext.onReady(function() {
	var currId = null
	var myStore = new Ext.data.JsonStore({
		url: '/recipes.json',
		fields: ['id', 'name'],
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
		frame: true,
		sm: new Ext.grid.RowSelectionModel({
	                singleSelect: true,
	                listeners: {
	                    rowselect: function(sm, row, rec) {
	                        Ext.getCmp("recipe-form").getForm().loadRecord(rec);
				currId = rec.data.id
	                    }
	                }
		    })
	    });
 
	grid.getSelectionModel().selectFirstRow();
 
	var simple = new Ext.FormPanel({
		id: 'recipe-form',
		labelWidth: 75, 
		frame: true,
		title: 'Nuova ricetta',
		bodyStyle:'padding:5px 5px 0',
		width: 350,
		defaults: {width: 230},
		defaultType: 'textfield',
		items: [{fieldLabel: 'Ricetta', name: 'name', allowBlank:false}, {fieldLabel: 'id', name: 'id'}]

	    });

	var submit = simple.addButton({
		text: 'Save',
		handler: function(){
		    simple.getForm().submit({url:'/recipes/create.json', waitMsg:'Saving Data...'});
		}
	    });

	var update = simple.addButton({
		text: 'Update',
		handler: function(){
		    simple.getForm().submit({url:'/recipes/update/'+currId+'.json', waitMsg:'Saving Data...'});
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

