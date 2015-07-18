//Tracker.autorun(getItems);


getItems = function () {
  console.log('getItems');
  /* The line below is not working */
  currentItems = Items.find({}, {limit: Session.get('limit')})
    .fetch()
    .map(function (item, index) {
      item.index = index + 1;
      return item;
    });
};


Template.rows.onCreated(function () {
  Session.setDefault('limit', 1);
  Session.setDefault('rows', null);
  Meteor.subscribe('items');
});

Template.rows.helpers({
  'rows': function () {
    //return Session.get('rows');
    return Session.get('rows');
  }
});

Template.count.helpers({
  'counts': function () {
    return [10, 100, 500, 1000, 2500, 5000];
  }
});

Template.count.events({
  'click .mdl-radio__button': function (e) {
    var value = $(e.currentTarget).val();
    Session.set('limit', value);
    console.log('value: ', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
    Session.set('rows', null);
    console.log('reset', Session.get('limit'));
  },
  'click #run': function () {
    getItems();
    console.log(currentItems);
    Session.set('rows', currentItems);
    console.log('rows', Session.get('rows'));
  }
});