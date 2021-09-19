const moment = require('moment')

module.exports = {
    formatDate:function(date,format){
     return  moment(date, format).fromNow();
    },
    firstLower:function(name){
        return name.toLowerCase()
    }
}