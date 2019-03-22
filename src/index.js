module.exports = function solveSudoku(matrix) {
    var wasChenge = true;
    var arr = matrix;
    var allCondidat = [];
    var groups = [[],[],[],[],[],[],[],[],[]];
    function getAllCondidat(){
        allCondidat = [];
        // get arrString 
        for( var y = 0; y < arr.length; y++){ // get arrString    ( get stringCondidat)
            var number= [1,2,3,4,5,6,7,8,9];
            var arrString = arr[y];
            var stringCondidat = [];
            var noStringCondidat =[];
            for( var x = 0; x < arrString.length; x++){
                for( var i = 0; i < number.length; i++){// get noStringCondidat
                    if(number[i] == arrString[x]){
                        noStringCondidat.push(number[i])
                    }
                }
            }
            for( var i = 0; i < number.length; i++){ //get condidat in number
                    for( var z = 0; z < noStringCondidat.length; z++){
                        if(number[i] == noStringCondidat[z]){
                            number.splice(i,1,0);
                        }
                    }
            }
            for( var i = 0; i < number.length; i++){//get condidat (from number to stritCondidat)
                    if(number[i] != 0){
                        stringCondidat.push(number[i])
                    }
            }
                    // console.log("noStrCondidat",noStringCondidat); 
                    // console.log("strCondidat",stringCondidat);
                    // console.log(number);
            var itemsCondidat = [[],[],[],[],[],[],[],[],[]];
            for( var i = 0; i < arrString.length; i++ ){
                if(arrString[i] == 0){
                    var iCondidat = stringCondidat.slice(0,stringCondidat.length);
                    for( var c = 0; c < arr.length; c++){
                        for(var x = 0; x < iCondidat.length; x++){
                            if(arr[c][i] == iCondidat[x]){
                                iCondidat.splice(x,1,0);
                            }
                        }
                    }
                    var condidat = iCondidat.filter(item => item != 0);
                    itemsCondidat.splice(i,1,condidat);
                }
            }
            allCondidat.push(itemsCondidat);
            // console.log('itemsCondidat',itemsCondidat);
        }
    //    console.log('allCondidat',allCondidat);
        
        
}
function getGroups(){
    groups = [[],[],[],[],[],[],[],[],[]];
    for( var y = 0; y < 3; y++){
        for(var x = 0; x < 3; x++ ){
            groups[0].push(arr[y][x]);
        }
        for(var x = 3; x < 6; x++ ){
            groups[1].push(arr[y][x]);
        }
        for(var x = 6; x < 9; x++ ){
            groups[2].push(arr[y][x]);
        }
    }
    for( var y = 3; y < 6; y++){
        for(var x = 0; x < 3; x++ ){
            groups[3].push(arr[y][x]);
        }
        for(var x = 3; x < 6; x++ ){
            groups[4].push(arr[y][x]);
        }
        for(var x = 6; x < 9; x++ ){
            groups[5].push(arr[y][x]);
        }
    }
    for( var y = 6; y < 9; y++){
        for(var x = 0; x < 3; x++ ){
            groups[6].push(arr[y][x]);
        }
        for(var x = 3; x < 6; x++ ){
            groups[7].push(arr[y][x]);
        }
        for(var x = 6; x < 9; x++ ){
            groups[8].push(arr[y][x]);
        }
    }
    // console.log('groups', groups);
}
function checkGroup(){
    for( var y = 0; y < arr.length; y++ ){
        for( var x = 0; x < 9; x++){
            if(arr[y][x] == 0){
                if( y < 3 && x < 3){
                    for(var g = 0; g < groups[0].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[0][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y < 3 && x > 2 && x < 6){
                    for(var g = 0; g < groups[1].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[1][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y < 3 && x > 5 && x < 9){
                    for(var g = 0; g < groups[2].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[2][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 2 && y < 6 && x < 3){
                    for(var g = 0; g < groups[3].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[3][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 2 && y < 6 && x > 2 && x < 6){
                    for(var g = 0; g < groups[4].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[4][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 2 && y < 6 && x > 5 && x < 9){
                    for(var g = 0; g < groups[5].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[5][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 5 && y < 9 && x < 3){
                    for(var g = 0; g < groups[6].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[6][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 5 && y < 9 && x > 2 && x < 6){
                    for(var g = 0; g < groups[7].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[7][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }else
                if( y > 5 && y < 9 && x > 5 && x < 9){
                    for(var g = 0; g < groups[8].length; g++){
                        for( var k = 0; k < allCondidat[y][x].length; k++){
                            if(groups[8][g] == allCondidat[y][x][k]){
                                allCondidat[y][x].splice(k,1,0);
                                for( var z = 0; z < allCondidat[y][x].length; z++){
                                    if(allCondidat[y][x][z] == 0){
                                        allCondidat[y][x].splice(z,1);
                                    }
                                }

                            }
                        }
                       
                    }

                }
            }
        }
        
    }
}

function checkSinglCondidat(){
    var check = false;
    for( var y = 0; y < allCondidat.length; y++ ){
        for( var x = 0; x < allCondidat[y].length; x++){
            if(allCondidat[y][x].length == 1){
                arr[y].splice(x,1,allCondidat[y][x][0]);//---------------------------------
                check = true;
            }
        }
    }
    getAllCondidat();
    getGroups();
    checkGroup();
    if(check == true){
        checkSinglCondidat();
    }
}

function checkHidenSingleCondidatRow(){
    for( var y = 0; y < allCondidat.length; y++){
        
        for( var x = 0; x < allCondidat[y].length; x++){
            var etalon = null;
            
            for( var i = 0; i < allCondidat[y][x].length; i++){
                etalon = allCondidat[y][x][i];
                allCondidat[y][x].splice(i,1,0);
                var hiddenCondidat = true;
                for( var q = 0; q  < allCondidat[y].length; q++){
                    for( var w = 0; w <allCondidat[y][q].length; w++){
                        if(allCondidat[y][q][w] == etalon){
                            hiddenCondidat = false;
                        }
                    }
                }
                if(hiddenCondidat == false){
                    allCondidat[y][x].splice(i,1,etalon);
                }else{
                    // arr[y].splice(x,1,etalon);//-------------------------------------
                    //     allCondidat[y].splice(x,1,[])
                    var checkValr = checkValidCondidat(y,x,etalon);
                    // console.log('checkvrow',checkValr);
                    
                    if(checkValr == true){
                        arr[y].splice(x,1,etalon);//-------------------------------------
                        allCondidat[y].splice(x,1,[])
                        getAllCondidat();
                        getGroups();
                        checkGroup();
                        checkSinglCondidat();
                        wasChenge = true;
                    }
                }
            }
          
            // console.log("etalon",etalon);
           
        }
    }
}

function checkHidenSingleCondidatCol(){
    
    for( var x = 0; x < allCondidat.length; x++){
        
        for( var y = 0; y < allCondidat.length; y++){
            for( var i = 0; i < allCondidat[y][x].length; i++){
                var etalon = null;
                var hiddenCondidat = true;
                etalon = allCondidat[y][x][i];
                allCondidat[y][x].splice(i,1,0);
                for( var q = 0; q < allCondidat.length; q++){
                    for( var w = 0; w < allCondidat[q].length; w++ ){
                        if(allCondidat[q][x][w] == etalon){
                            hiddenCondidat = false;
                        }
                    }
                }
                if(hiddenCondidat == false){
                    allCondidat[y][x].splice(i,1,etalon);
                }else{
                    var check = checkValidCondidat(y,x,etalon);
                    // console.log('check',check);
                    
                    if(check == true){
                        arr[y].splice(x,1,etalon);//---------------------------------------
                    allCondidat[y].splice(x,1,[]);
                    getAllCondidat();
                    getGroups();
                    checkGroup();
                    checkSinglCondidat();
                    wasChenge = true;
                    }
                    
                }
            }
        }
        
        
    }
    
}

function checkValidCondidat(y,x,condidat){
    // console.log('checkvalid',y,x,condidat);
    var resultValidat;
    var y = y;
    var x = x;
    var condidat = condidat;
    validRow(y,x,condidat);
    function validRow(y,x,condidat){
        for(var i = 0; i < arr[y].length; i++){
            if(arr[y][i] == condidat){
                resultValidat = false;
                return resultValidat;
            }
        }
        // console.log('val1', condidat);
        validColumn(y,x,condidat);
    }
    function validColumn(y,x,condidat){
        for(var i = 0; i < arr.length; i++){
            if(arr[i][x] == condidat){
                resultValidat = false;
                return resultValidat;
            }
        }
        // console.log('val2', condidat);
                
    }
    function validGroup(y,x,condidat){
        if( y < 3 && x < 3){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[0][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if( y < 3 && x > 2 && x < 6){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[1][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if(y < 3 && x > 5 && x < 9){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[2][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if( y > 2 && y < 6 && x < 3){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[3][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if(y > 2 && y < 6 && x > 2 && x < 6){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[4][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if(y > 2 && y < 6  && x > 5 && x < 9){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[5][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if( y > 5 && y < 9 && x < 3){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[6][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if(y > 5 && y < 9 && x > 2 && x < 6){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[7][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }else
        if(y > 5 && y < 9 && x > 5 && x < 9){
            for(var i = 0; i < groups.length; i++ ){
                if(groups[8][i]==condidat){
                    resultValidat = false;
                    return resultValidat;
                }
            }
        }
    }
    resultValidat = true;
                
    return resultValidat;
}



getAllCondidat();
getGroups();
checkGroup();
checkSinglCondidat();
checkHidenSingleCondidatRow();
checkHidenSingleCondidatCol();


return arr;
}
