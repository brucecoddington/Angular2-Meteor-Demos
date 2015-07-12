Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    var messages = [{
      authorId: '1',
      content: 'So, your boy\'s name is what?',
      createdAt: new Date()
    }, {
      authorId: '2',
      content: 'Snot',
      createdAt: new Date()
    }, {
      authorId: '1',
      content: 'You called the guy Snot?',
      createdAt: new Date()
    }, {
      authorId: '2',
      content: 'Snotboogie, yeah.',
      createdAt: new Date()
    }, {
      authorId: '1',
      content: 'Snotboogie. He like the name?',
      createdAt: new Date()
    }, {
      authorId: '2',
      content: 'What?',
      createdAt: new Date()
    }, {
      authorId: '1',
      content: 'Snotboogie.',
      createdAt: new Date()
    }];

    messages.forEach(function(message) {
      Messages.insert(message);
    })
  }
});