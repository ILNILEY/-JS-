function log(){
    let arr = Array.prototype.slice.call(arguments);
    // let arr = Array.from(arguments);
    console.log('(app)'+arr.join(' '));
}

log('hello','world');