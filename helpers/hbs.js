const moment = require('moment')

module.exports = {
    formatDate:function(date,format){
     return  moment(date, format).fromNow();
    },
    firstLower:function(name){
        return name.toLowerCase()
    },
    displayBin:function(uid,postuid){
        
        if(uid == postuid){
           return `
           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="far fa-trash-alt"></i></a>
           `
        }
    }
}