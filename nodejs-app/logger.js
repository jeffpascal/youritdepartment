
var url = 'das';



const log = (message) => {
    console.log(message);
}


module.exports.LOG = log;
module.parent.parent=log;
//console.log(module.parent);
