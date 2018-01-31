Ext.define('inbox.view.messages.MessagesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messages',
    listen: {
    component: {
    '#reply': {
    click: 'onReplyClick'
    },
    '#setTag': {
    click: 'onTagChange'
    }
    }
    },
    routes: {
    'thread/:id/messages': 'onShowThread',
    'thread/new': 'onNewThread'
    },
    onShowThread:function(id) {
    this.getViewModel().get('messages').load({
    params: {parentId: id
    },callback: function(records) {
        this.getView().show();
        },
        scope: this
        });
        },
        onNewThread: function() {
        this.getView().hide();
        },
        onReplyClick: function() {
        this.redirectTo(window.location.hash + '/new');
        },
        onTagChange: function() {
        var tagPicker = this.lookupReference('tagPicker'),
        newTag = tagPicker.getValue(),
        viewModel = this.getViewModel(),
        threadParent = viewModel.get('messages').getAt(0);
        threadParent.set('tag', newTag);
        threadParent.save({callback: function() {
            this.getViewModel().get('tags').reload();
            this.fireEvent('tagadded');
            this.fireEvent('threadschanged');
            },
            scope: this
            });
            }
            });