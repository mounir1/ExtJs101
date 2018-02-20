Ext.define('Todo.view.dash.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'simple-dash', 
    maxColumns: 2,
    stateful: true,
    stateId: 'simple-dashboard',
    // columnWidths: [0.5, 0.5],
    parts: {
        widget1: {
            viewTemplate: { //normal view config, can use xtype to use an application view
                title: 'Name and Surname',
                html: '<h1 style="align:center;font:bold;margin:15px 15px auto;color:red;" >Mounir Abderrahmani  </h1><br/><a target="_blanck" href="http://mounir1.github.io"><p>find me here</p></a>'
            }
        },
        widget2: {
            viewTemplate: {
                title: 'Bio',
                html: ' <ul>  <li>Junior mobile app and Full Stack software developer </li>  <li>Learnt basic Computer Networks, Cryptography and familiar with Machine Learning </li> <li>Co-founder CTO (ortak kurucu) and Mobile app developper at <a target="_blank" href="http://educaper.com">educaper</a> (Moodle LMS Plugins)  </li> <h3>General​ ​Contributions:</h3> <ul>  <li>Interact with engineering teams to get software issues and bugs resolved (via slack)..</li> <li>Active member at AIUCode Club <a target="_blank" href="http://codeclubaiu.blogspot.com.tr/" >Blog</a> .</li> <li>Engaged in many events, exhilarating the youth to keep up the education spirit <a target="_blank" href="http://www.algerianstudentsinturkey.org/">ASUT</a>.</li> <li>I have done humble IT work at the university website <a target="_blank" href="http://ipo.antalya.edu.tr/" >(Ipo Office)</a>.</li> </ul> '
            }
        },
        widget3: {
            viewTemplate: {
                title: 'Profile Picture',
                html: '<img style="width: 100px; height:120px;" src="https://image.ibb.co/dQjnGv/pict.jpg">'
            }
        }
    },
    defaultContent: [{
        type: 'widget1', //maps to the parts key
        columnIndex: 0
    }, {
        type: 'widget3',
        columnIndex: 0
    }, {
        type: 'widget2',
        columnIndex: 1
    }]
})