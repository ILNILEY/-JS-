function log(){
    let arr = Array.prototype.slice.call(arguments);
    console.log('(app)'+arr.join(' '));
}

log('hello','world');