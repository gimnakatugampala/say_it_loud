const moment = require('moment')

module.exports = {
    formatDate:function(date,format){
     return  moment(date, format).fromNow();
    },
    firstLower:function(name){
        return name.toLowerCase()
    },
    displayBin:function(uid,postuid,post){
        
        if(uid == postuid){
           return `
           <form action="/posts/${post}" method="post">
              <input type="hidden" name="_method" value="DELETE">
              <button type="submit" class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="far fa-trash-alt"></i>
              </button>
          </form>
           `
        }
    }
}