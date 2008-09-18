Ext.ux.GridFormBinding = Ext.extend(Ext.Panel, {
  initComponent: function() {
    // Apply configuration
    var grid_def = Ext.apply(this.subgrid,
      {
	xtype: 'grid',
	height: 400,
	sm: new Ext.grid.RowSelectionModel({
	  listeners: {
	    rowselect: function(sm, row, rec) {
    	      internal_form.getForm().loadRecord(rec);
    	      this.currId = rec.data.id;
	    }
	  }
	})
      });

    var form_def = Ext.apply(this.subform,
      {
	  xtype: 'form',
	  id: 'form',
	  bodyStyle: {
	    border: 0,
	    padding: '10px 0 10px 0'
	  },
	  collapsible: true,
	  titleCollapse: true,
	  listeners: {
	    actioncomplete: function() {
	      internal_grid.store.reload();
	    },
	    actionfailed: function() {
	      alert("FAILED");
	    }
	  },
	  buttons: [
	    {
	      text: 'Create',
	      handler:  function() {
	       internal_form.getForm().submit({url:'/recipes/create.json', waitMsg:'Creating new item ...'});
    	      }
	    },
	    {
	      text: 'Update',
	      handler:  function() {
		internal_form.getForm().submit({url:'/recipes/update/' + this.currId + '.json', waitMsg:'Updating item ...'});
    	      }
	    },
	    {
	      text: 'Delete',
	      handler:  function() {
		internal_form.getForm().submit({url:'/recipes/delete/' + this.currId + '.json', waitMsg:'Deleting item ...'});
    	      }
	    }
	  ]
	}
    );

    var internal_grid = new Ext.grid.GridPanel(grid_def);
    var internal_form = new Ext.form.FormPanel(form_def);

    Ext.apply(this, {
      tbar: [{text: 'New'}, {text: 'Delete'}],
      id: 'gridpanel',
      items: [internal_form,internal_grid],
      width: 600
    });

    // Call superclass constructor.
    Ext.ux.GridFormBinding.superclass.initComponent.call(this);
  }
});

Ext.reg('gridformbinding', Ext.ux.GridFormBinding);
