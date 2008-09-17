
Ext.onReady(function() {

  var myStore = new Ext.data.JsonStore({
		  url: '/recipes.json',
		  fields: ['id', 'name'],
		  autoLoad: true
  });

  var grid = new Ext.ux.GridFormBinding({
					  store: myStore,
					  title: 'Ricette',
					  width: 400,
					  height: 400,
					  autoExpandColumn: '1',
					  stripeRows: true,
					  columns: [{header: 'Id', sortable: true, dataIndex: 'id'}, {header: 'Nome', sortable: true, dataIndex: 'name'}],
					  form: {
					    title: 'Dettagli Ricetta',
					    frame: true,
					    defaultType: 'textfield',
					    items: [{fieldLabel: 'Ricetta', name: 'name', allowBlank: false}, {hideLabel: true, hidden: true, name: 'id'}]
					  }
					});

  grid.render(document.body);

});

