Ext.ux.GridFormBinding = Ext.extend(Ext.Panel, {

  initComponent: function(config) {

    // Apply configuration.

    Ext.apply(this,{
		    frame: true,
		    labelAlign: 'left',
		    bodyStyle: 'padding:5px',
		    width: 525,
		    layout: 'column'
    });

    // Call superclass constructor.

    Ext.ux.GridFormBinding.superclass.initComponent.call(this, config);

    // Add the form component in the panel and configure it.

    var form = this.add({
	       xtype: 'form',
	       id: 'form',
	       labelWidth: 75,
	       frame: true,
	       title: 'Nuova ricetta',
	       bodyStyle:'padding:5px',
	       width: 500,
	       defaults: {width: 230},
	       defaultType: 'textfield',
	       items: [{fieldLabel: 'Ricetta', name: 'name', allowBlank: false}, {hideLabel: true, hidden: true, name: 'id'}]
    });

    // Code block used to reloading datastore. The block is called in the scope of this.

    var dsReload = function() {
      this.reload();
    };

    // Add buttons to the form.

    form.addButton({text: 'Create'},
		   function() {
		     Ext.getCmp('form').submit({url:'/recipes/create.json', waitMsg:'Creating new item ...'});
    		   },
		   this);

    form.addButton({text: 'Update'},
		   function() {
		     Ext.getCmp('form').getForm().submit({url:'/recipes/update/' + this.currId + '.json', waitMsg:'Updating item ...'});
		   },
		   this);

    form.addButton({text: 'Delete'},
		   function() {
		     Ext.getCmp('form').getForm().submit({url:'/recipes/delete/' + this.currId + '.json', waitMsg:'Deleting item ...'});
		   },
		   this);

    // Attach dsReload to actioncomplete event.

    form.on('actioncomplete', dsReload.createDelegate(this.ds));

    form.on('actionfailed', function(){
		//handle actionfailed event
    });

    // The currently selected id.

    var currId;

    // Create a RowSelectionModel object.

    var rsModel = new Ext.grid.RowSelectionModel({singleSelect: true});

    // Load record data in the form's fields when a 'rowselect' event occurs.

    rsModel.addListener('rowselect',
			function(sm, row, rec) {
			  Ext.getCmp("form").getForm().loadRecord(rec);
	    		  this.currId = rec.data.id;
			},
			this);

    // Add the grid component and configure it. Assign rsModel to sm configuration key.

    this.add({
	       xtype: 'grid',
	       id: 'grid',
	       ds: this.ds,
	       title: 'Tutte le ricette',
	       width: 500,
	       height: 200,
	       columns: [{header: 'Nome', width: 120, sortable: true, dataIndex: 'name'}],
	       sm: rsModel
    });

  }

});

Ext.reg('gridformbinding', Ext.ux.GridFormBinding);
