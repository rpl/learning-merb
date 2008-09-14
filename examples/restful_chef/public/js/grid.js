
Ext.onReady(function() {

  var myStore = new Ext.data.JsonStore({
		  url: '/recipes.json',
		  fields: ['id', 'name'],
		  autoLoad: true
  });

  var grid = new Ext.ux.GridFormBinding({
					  ds: myStore,
					  title: 'Ricette',
					  formTitle: 'Dettagli ricetta',
					  gridTitle: 'Tutte le ricette'
					});

  grid.render(document.body);

});

