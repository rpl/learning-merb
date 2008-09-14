
Ext.onReady(function() {

  var myStore = new Ext.data.JsonStore({
		  url: '/recipes.json',
		  fields: ['id', 'name'],
		  autoLoad: true
  });

  var grid = new Ext.ux.GridFormBinding({ds: myStore, title: 'Ricette'});

  grid.render(document.body);

});

