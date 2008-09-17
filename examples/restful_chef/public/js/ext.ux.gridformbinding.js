Ext.ux.GridFormBinding = Ext.extend(Ext.grid.GridPanel, {

  initComponent: function() {

    // Apply configuration.
    Ext.apply(this, {
		tbar: [{text: 'New'}, {text: 'Delete'}],
		id: 'grid'
	      });

    // Call superclass constructor.
    Ext.ux.GridFormBinding.superclass.initComponent.call(this, arguments);

    initForm.call(this);
    addSelectionEvents.call(this);

    // private methods

    // Load selected record in the form field when a rowselect
    // event is triggered.
    function addSelectionEvents() {
      this.selModel.addListener('rowselect',
    				function(sm, row, rec) {
    				  Ext.getCmp("form").getForm().loadRecord(rec);
    	    			  this.currId = rec.data.id;
    				},
    				this);

    }

    // Add the form component into the panel and configure it.
    function initForm() {

      this.form = this.add(Ext.apply({
				       xtype: 'form',
				       id: 'form',
				       bodyStyle: {
					 border: 0,
					 padding: '10px 0 10px 0'
				       },
				       collapsible: true,
				       titleCollapse: true
				     },
				     this.form));

      addButtons.call(this);
      attachReload.call(this);
    }

    // Add buttons to the form.
    function addButtons() {

      this.form.addButton({text: 'Create'},
			  function() {
			    this.form.getForm().submit({url:'/recipes/create.json', waitMsg:'Creating new item ...'});
    			  },
			  this);

      this.form.addButton({text: 'Update'},
			  function() {
			    this.form.getForm().submit({url:'/recipes/update/' + this.currId + '.json', waitMsg:'Updating item ...'});
			  },
			  this);

      this.form.addButton({text: 'Delete'},
			  function() {
			    this.form.getForm().submit({url:'/recipes/delete/' + this.currId + '.json', waitMsg:'Deleting item ...'});
			  },
			  this);
    }

    // Reload datastore when an actioncomplete event is triggered.
    function attachReload() {

      // Code block used to reloading datastore.
      // The block is called in the scope of this.store
      var dsReload = function() {
	this.reload();
      };

      // Attach dsReload to actioncomplete event.

      this.form.on('actioncomplete', dsReload.createDelegate(this.store));

      // Handle actionfailed event.
      this.form.on('actionfailed', function() {  });
    }

  }

});

Ext.reg('gridformbinding', Ext.ux.GridFormBinding);
