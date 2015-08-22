function getCalculator(){
    var _result = 0;
    var calculator = {
        add : function(x){
            _result += x;
        },
        subtract : function(x){
            _result -= x;
        },
        multiply : function(x){
            _result *= x;
        },
        divide : function(x){
            _result /= x;
        },
        getResult : function(){
            return _result;
        }
    };
    return calculator;
}
module.exports = getCalculator;
