/*

Create a calculator object that exhibits the following methods
- add(x,y)
- subtract(x,y)
- multiply(x,y)
- divide(x,y)

use the calculator to perform all the operations on 100 and 200 and display the result

*/

var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
}
module.exports = calculator;
