/* ------------------------------------
cd ~/git/lexycode/JStest
node test_this.js
 ------------------------------------ */
console.log("------------ task1:")
const test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
};

console.log(test.func());
a = 37;
console.log(this.a);
console.log(a); 

// ----------------------------------------
console.log("------------ task2:")
var obj = {b: 'Custom'};
var b = 'Global';

function whatsThis() {
  console.log('whatsThis' , this.b);
  return this.b;
}

whatsThis();          
whatsThis.call(obj);  
whatsThis.apply(obj); 

//----------------------------------------
console.log("------------ task3:")
function add(c, d) {
    return this.a + this.b + c + d;
}
var o = {a: 3, b: 4};

console.log(add.call(o, 1, 2));
console.log(add.call(o, 1, 2));
console.log(add.apply(o, [10, 20]));

//---------------------------------------
console.log("------------ task4:")
function f2() {
    this.a = 36;
    return this;
}

const createdObj = function creator() {
    const that = {};
    this.tA = 6;
    that.tA = 5;
    return that;
}();

console.log(f2().a);
console.log(createdObj.tA);

//---------------------------------------
console.log("------------ task5:")
function funcOut() {
    return this.prop;
}

var o = {
    prop: 37,
    funcFunc: function() {
      return this.prop;
    },
    funcLam: () => this.prop,
    funcO: funcOut
};

console.log(o.funcFunc());
console.log(o.funcLam());
console.log(o.funcO());
console.log(funcOut());

//---------------------------------------

