Ext.ux.BindingGrid = Ext.extend(Ext.grid.GridPanel, {
	initComponent: function() {

	    Ext.apply(this,{
	    	     sm: new Ext.grid.RowSelectionModel({
	    		    singleSelect: true,
	    		    listeners: {
	    		    	rowselect: function(sm, row, rec) {
	    		    	    Ext.getCmp("recipe-form").getForm().loadRecord(rec);
	    		    	    currId = rec.data.id;
	    		    	}
	    		    }
	    		})
	    	});
	    
	    Ext.ux.BindingGrid.superclass.initComponent.call(this);
	}


});

Ext.reg('bindinggrid', Ext.ux.BindingGrid);
