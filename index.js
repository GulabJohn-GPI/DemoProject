module.exports.greadeSystem = function(value){   
    // if(value < 35){
    //     return ;
    // }
    // else if (value > 34){
    //     return ;
    // }
    // return 'Not Valid!';

    const type = typeof value;
    return type != 'string' ?  value < 35 ? 'Fail' : 'Pass' : 'Not Valid!';
};