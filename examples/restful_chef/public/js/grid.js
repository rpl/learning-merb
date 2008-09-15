
Ext.onReady(function() {

  var myStore = new Ext.data.JsonStore({
		  url: '/recipes.json',
		  fields: ['id', 'name'],
		  autoLoad: true
  });

  var grid = new Ext.ux.GridFormBinding({
					  ds: myStore,
					  title: 'Ricette',
					  width: 400,
					  form: {
					    title: 'Dettagli Ricetta',
					    frame: true,
					    defaultType: 'textfield',
					    items: [{fieldLabel: 'Ricetta', name: 'name', allowBlank: false}, {hideLabel: true, hidden: true, name: 'id'}]
					  },
					  grid: {
					    title: 'Tutte le ricette',
					    height: 200,
					    autoExpandColumn: '1',
					    stripeRows: true,
					    columns: [{header: 'Id', sortable: true, dataIndex: 'id'}, {header: 'Nome', sortable: true, dataIndex: 'name'}]
					  }
					});

  grid.render(document.body);

});

