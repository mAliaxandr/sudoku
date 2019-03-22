module.exports = function solveSudoku(matrix) {
    var arr = matrix;
    var allCondidat = [];
    var groups = [[],[],[],[],[],[],[],[],[]];
    var wasChenge = true;
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
            
        }
       
        
        
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
   
   for( var y = 0; y < allCondidat.length; y++ ){
       for( var x = 0; x < allCondidat[y].length; x++){
           if(allCondidat[y][x].length == 1){
               var checkVal = checkValidCondidat(y,x,allCondidat[y][x][0]);
               // console.log('check singl',allCondidat[y][x][0], checkVal);
               if(checkVal == true){
                   console.log('check singl',y, x,allCondidat[y][x][0], checkVal);
                   arr[y].splice(x,1,allCondidat[y][x][0]);//---------------------------------
                   wasChenge = true;
               for( var q = 0; q < allCondidat[y].length; q++){
                   for( var w =  0; w < allCondidat[y][q].length; w++){
                       if(x != q){
                           if(allCondidat[y][x][0] == allCondidat[y][q][w]){
                               allCondidat[y][q].splice(w,1);
                           }
                       }
                   }
               }
               for( var p = 0; p < allCondidat.length; p++){
                   for( var t = 0; t < allCondidat[p][x].length; t++){
                       if( p != y){
                           if(allCondidat[y][x][0] == allCondidat[p][x][t]){
                               allCondidat[p][x].splice(t,1);
                           }
                       }
                   }
                   
               }
               allCondidat[y][x].splice(0,1);
               
               }
           }
          
       }
   }
   // getAllCondidat();
   // getGroups();
   // checkGroup();
   // if(check == true){
   //     checkSinglCondidat();
   // }
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

function getPair(){
    for( var y = 0; y < allCondidat.length; y++){//row
        for( var x = 0; x < allCondidat[y].length; x++){
            for( var z = 0; z < allCondidat[y].length; z++){
                if(z != x){
                    if(allCondidat[y][x].length == allCondidat[y][z].length && allCondidat[y][x].length == 2){
                        if(allCondidat[y][x][0] == allCondidat[y][z][0] && allCondidat[y][x][1] == allCondidat[y][z][1]){
                            for( var w = 0; w < allCondidat[y].length; w++){
                                for( var r = 0; r < allCondidat[y][w].length; r++){
                                    if( allCondidat[y][w][r] == allCondidat[y][x][0] && w != x && w != z || allCondidat[y][w][r] == allCondidat[y][x][1] && w != x && w != z){
                                        allCondidat[y][w].splice(r,1);
                                    }
                                }
                            }
                            checkSinglCondidat();
                        }
                }
                }
            }
        }
    }
    // simpleSudoku();
    
    
    for( var x = 0; x < allCondidat.length; x++){// column
        
       for( var y = 0; y < allCondidat.length; y++){
        
           for( var q = 0; q < allCondidat.length; q++){
            
               if( q != y){
                   if(allCondidat[y][x].length == allCondidat[q][x].length && allCondidat[y][x].length == 2){
                        if(allCondidat[y][x][0] == allCondidat[q][x][0] && allCondidat[y][x][1] == allCondidat[q][x][1]){
                            for( var w = 0; w < allCondidat.length; w++){
                                for(var r = 0; r < allCondidat[w][x].length; r++){
                                    if(allCondidat[w][x][r] == allCondidat[y][x][0] && w != y && w != q || allCondidat[w][x][r] == allCondidat[y][x][1] && w != y && w != q){
                                        console.log('sravnenie11',allCondidat[w][x],allCondidat[y][x],w ,x , y, x);
                                        
                                        allCondidat[w][x].splice(r,1);
                                        console.log('sravnenie2',allCondidat[w][x],allCondidat[y][x],w ,x , y, x);
                                    }
                                }
                            }
                            checkSinglCondidat();
                            checker();
                        }
                   }
               }
           }
       } 
    }
}

function getGroupCondidat(){
    var groupCondidat=[[],[],[],[],[],[],[],[],[]];
    for( var y = 0; y < allCondidat.length;y++){
        if( y < 3){
            for( var x = 0; x < allCondidat[y].length;x++){
                if(x < 3){
                    groupCondidat[0].push(allCondidat[y][x]);
                }
                if(x > 2 && x < 6){
                    groupCondidat[1].push(allCondidat[y][x]);
                }
                if(x > 5 && x < 9){
                    groupCondidat[2].push(allCondidat[y][x]);
                }
            }  
        }
        if( y > 2 && y < 6){
            for( var x = 0; x < allCondidat[y].length;x++){
                if(x < 3){
                    groupCondidat[3].push(allCondidat[y][x]);
                }
                if(x > 2 && x < 6){
                    groupCondidat[4].push(allCondidat[y][x]);
                }
                if(x > 5 && x < 9){
                    groupCondidat[5].push(allCondidat[y][x]);
                }
            }   
        }
        if( y > 5 && y < 9){
            for( var x = 0; x < allCondidat[y].length;x++){
                if(x < 3){
                    groupCondidat[6].push(allCondidat[y][x]);
                }
                if(x > 2 && x < 6){
                    groupCondidat[7].push(allCondidat[y][x]);
                }
                if(x > 5 && x < 9){
                    groupCondidat[8].push(allCondidat[y][x]);
                }
            }   
        }
        
    }
    console.log('groupCondidat', groupCondidat);
    return groupCondidat;
    
}

function getTrio(){
    //in group
    var groupCondidat = getGroupCondidat();
    for(var y = 0; y < groupCondidat.length; y++){
        for( var x = 0; x < groupCondidat[y].length; x++){
            if(groupCondidat[y][x].length == 3){
                var trio = false
                for( var q = 0; q < groupCondidat[y].length; q++){
                    if(x != q){
                        if((groupCondidat[y][q].includes(groupCondidat[y][x][0]) && groupCondidat[y][q].includes(groupCondidat[y][x][1]) || groupCondidat[y][q].includes(groupCondidat[y][x][0]) && groupCondidat[y][q].includes(groupCondidat[y][x][2]) || groupCondidat[y][q].includes(groupCondidat[y][x][1]) && groupCondidat[y][q].includes(groupCondidat[y][x][2])) && groupCondidat[y][q].length == 2 || (groupCondidat[y][q].includes(groupCondidat[y][x][0]) && groupCondidat[y][q].includes(groupCondidat[y][x][1]) && groupCondidat[y][q].includes(groupCondidat[y][x][2])) && groupCondidat[y][q].length == 3){
                            for( var w = 0; w < groupCondidat[y].length; w++){
                                if(q != w && x != w){
                                    if((groupCondidat[y][w].includes(groupCondidat[y][x][0]) && groupCondidat[y][w].includes(groupCondidat[y][x][1]) || groupCondidat[y][w].includes(groupCondidat[y][x][0]) && groupCondidat[y][w].includes(groupCondidat[y][x][2]) || groupCondidat[y][w].includes(groupCondidat[y][x][1]) && groupCondidat[y][w].includes(groupCondidat[y][x][2])) && groupCondidat[y][w].length == 2 || (groupCondidat[y][w].includes(groupCondidat[y][x][0]) && groupCondidat[y][w].includes(groupCondidat[y][x][1]) && groupCondidat[y][w].includes(groupCondidat[y][x][2])) && groupCondidat[y][w].length == 3){
                                        trio = true;
                                        // console.log('Trio', groupCondidat[y][x],groupCondidat[y][q] , groupCondidat[y][w], y);
                                        for(var i = 0; i < groupCondidat[y].length; i++){
                                            if((groupCondidat[y][i].includes(groupCondidat[y][x][0]) || groupCondidat[y][i].includes(groupCondidat[y][x][1]) || groupCondidat[y][i].includes(groupCondidat[y][x][2])) && i != x && i != q && i != w){
                                                // console.log('inclid',groupCondidat[y][i],y,i);
                                                for( var t = 0; t < groupCondidat[y][i].length; t++){
                                                    if(groupCondidat[y][i][t] == groupCondidat[y][x][0] || groupCondidat[y][i][t] == groupCondidat[y][x][1] || groupCondidat[y][i][t] == groupCondidat[y][x][2]){
                                                        // console.log('zzzzzzzzz',groupCondidat[y][i][t] );
                                                        
                                                        if(y == 0){
                                                            if(i == 0){
                                                                //0 0
                                                                for( var u = 0; u < allCondidat[0][0].length; u++){
                                                                    if(allCondidat[0][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //0 1
                                                                for( var u = 0; u < allCondidat[0][1].length; u++){
                                                                    if(allCondidat[0][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //0 2
                                                                for( var u = 0; u < allCondidat[0][2].length; u++){
                                                                    if(allCondidat[0][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //1 0
                                                                for( var u = 0; u < allCondidat[1][0].length; u++){
                                                                    if(allCondidat[1][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //1 1
                                                                for( var u = 0; u < allCondidat[1][1].length; u++){
                                                                    if(allCondidat[1][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //1 2
                                                                for( var u = 0; u < allCondidat[1][2].length; u++){
                                                                    if(allCondidat[1][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //2 0
                                                                for( var u = 0; u < allCondidat[2][0].length; u++){
                                                                    if(allCondidat[2][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //2 1
                                                                for( var u = 0; u < allCondidat[2][1].length; u++){
                                                                    if(allCondidat[2][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //2 2
                                                                for( var u = 0; u < allCondidat[2][2].length; u++){
                                                                    if(allCondidat[2][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 1){
                                                            if(x == 0){
                                                                //0 3
                                                                for( var u = 0; u < allCondidat[0][3].length; u++){
                                                                    if(allCondidat[0][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //0 4
                                                                for( var u = 0; u < allCondidat[0][4].length; u++){
                                                                    if(allCondidat[0][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //0 5
                                                                for( var u = 0; u < allCondidat[0][5].length; u++){
                                                                    if(allCondidat[0][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //1 3
                                                                for( var u = 0; u < allCondidat[1][3].length; u++){
                                                                    if(allCondidat[1][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //1 4
                                                                for( var u = 0; u < allCondidat[1][4].length; u++){
                                                                    if(allCondidat[1][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //1 5
                                                                for( var u = 0; u < allCondidat[1][5].length; u++){
                                                                    if(allCondidat[1][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //2 3
                                                                for( var u = 0; u < allCondidat[2][3].length; u++){
                                                                    if(allCondidat[2][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //2 4
                                                                for( var u = 0; u < allCondidat[2][4].length; u++){
                                                                    if(allCondidat[2][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //2 5
                                                                for( var u = 0; u < allCondidat[2][5].length; u++){
                                                                    if(allCondidat[2][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 2){
                                                            if(x == 0){
                                                                //0 6
                                                                for( var u = 0; u < allCondidat[0][6].length; u++){
                                                                    if(allCondidat[0][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //0 7
                                                                for( var u = 0; u < allCondidat[0][7].length; u++){
                                                                    if(allCondidat[0][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //0 8
                                                                for( var u = 0; u < allCondidat[0][8].length; u++){
                                                                    if(allCondidat[0][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[0][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //1 6
                                                                for( var u = 0; u < allCondidat[1][6].length; u++){
                                                                    if(allCondidat[1][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //1 7
                                                                for( var u = 0; u < allCondidat[1][7].length; u++){
                                                                    if(allCondidat[1][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //1 8
                                                                for( var u = 0; u < allCondidat[1][8].length; u++){
                                                                    if(allCondidat[1][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[1][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //2 6
                                                                for( var u = 0; u < allCondidat[2][6].length; u++){
                                                                    if(allCondidat[2][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //2 7
                                                                for( var u = 0; u < allCondidat[2][7].length; u++){
                                                                    if(allCondidat[2][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //2 8
                                                                for( var u = 0; u < allCondidat[2][8].length; u++){
                                                                    if(allCondidat[2][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[2][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 3){
                                                            if(x == 0){
                                                                //3 0
                                                                for( var u = 0; u < allCondidat[3][0].length; u++){
                                                                    if(allCondidat[3][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //3 1
                                                                for( var u = 0; u < allCondidat[3][1].length; u++){
                                                                    if(allCondidat[3][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //3 2
                                                                for( var u = 0; u < allCondidat[3][2].length; u++){
                                                                    if(allCondidat[3][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //4 0
                                                                for( var u = 0; u < allCondidat[4][0].length; u++){
                                                                    if(allCondidat[4][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //4 1
                                                                for( var u = 0; u < allCondidat[4][1].length; u++){
                                                                    if(allCondidat[4][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //4 2
                                                                for( var u = 0; u < allCondidat[4][2].length; u++){
                                                                    if(allCondidat[4][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //5 0
                                                                for( var u = 0; u < allCondidat[5][0].length; u++){
                                                                    if(allCondidat[5][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //5 1
                                                                for( var u = 0; u < allCondidat[5][1].length; u++){
                                                                    if(allCondidat[5][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //5 2
                                                                for( var u = 0; u < allCondidat[5][2].length; u++){
                                                                    if(allCondidat[5][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 4){
                                                            if(x == 0){
                                                                //3 3
                                                                for( var u = 0; u < allCondidat[3][3].length; u++){
                                                                    if(allCondidat[3][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //3 4
                                                                for( var u = 0; u < allCondidat[3][4].length; u++){
                                                                    if(allCondidat[3][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //3 5
                                                                for( var u = 0; u < allCondidat[3][5].length; u++){
                                                                    if(allCondidat[3][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //4 3
                                                                for( var u = 0; u < allCondidat[4][3].length; u++){
                                                                    if(allCondidat[4][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //4 4
                                                                for( var u = 0; u < allCondidat[4][4].length; u++){
                                                                    if(allCondidat[4][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //4 5
                                                                for( var u = 0; u < allCondidat[4][5].length; u++){
                                                                    if(allCondidat[4][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //5 3
                                                                for( var u = 0; u < allCondidat[5][3].length; u++){
                                                                    if(allCondidat[5][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //5 4
                                                                for( var u = 0; u < allCondidat[5][4].length; u++){
                                                                    if(allCondidat[5][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //5 5
                                                                for( var u = 0; u < allCondidat[5][5].length; u++){
                                                                    if(allCondidat[5][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 5){
                                                            if(x == 0){
                                                                //3 6
                                                                for( var u = 0; u < allCondidat[3][6].length; u++){
                                                                    if(allCondidat[3][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //3 7
                                                                for( var u = 0; u < allCondidat[3][7].length; u++){
                                                                    if(allCondidat[3][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(i == 2){
                                                                //3 8
                                                                for( var u = 0; u < allCondidat[3][8].length; u++){
                                                                    if(allCondidat[3][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[3][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //4 6
                                                                for( var u = 0; u < allCondidat[4][6].length; u++){
                                                                    if(allCondidat[4][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //4 7
                                                                for( var u = 0; u < allCondidat[4][7].length; u++){
                                                                    if(allCondidat[4][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //4 8
                                                                for( var u = 0; u < allCondidat[4][8].length; u++){
                                                                    if(allCondidat[4][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[4][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //5 6
                                                                for( var u = 0; u < allCondidat[5][6].length; u++){
                                                                    if(allCondidat[5][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //5 7
                                                                for( var u = 0; u < allCondidat[5][7].length; u++){
                                                                    if(allCondidat[5][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //5 8
                                                                for( var u = 0; u < allCondidat[5][8].length; u++){
                                                                    if(allCondidat[5][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[5][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 6){
                                                            if(x == 0){
                                                                //6 0
                                                                for( var u = 0; u < allCondidat[6][0].length; u++){
                                                                    if(allCondidat[6][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //6 1
                                                                for( var u = 0; u < allCondidat[6][1].length; u++){
                                                                    if(allCondidat[6][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //6 2
                                                                for( var u = 0; u < allCondidat[6][2].length; u++){
                                                                    if(allCondidat[6][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //7 0
                                                                for( var u = 0; u < allCondidat[7][0].length; u++){
                                                                    if(allCondidat[7][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //7 1
                                                                for( var u = 0; u < allCondidat[7][1].length; u++){
                                                                    if(allCondidat[7][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //7 2
                                                                for( var u = 0; u < allCondidat[7][2].length; u++){
                                                                    if(allCondidat[7][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //8 0
                                                                for( var u = 0; u < allCondidat[8][0].length; u++){
                                                                    if(allCondidat[8][0][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][0].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //8 1
                                                                for( var u = 0; u < allCondidat[8][1].length; u++){
                                                                    if(allCondidat[8][1][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][1].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //8 2
                                                                for( var u = 0; u < allCondidat[8][2].length; u++){
                                                                    if(allCondidat[8][2][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][2].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 7){
                                                            if(x == 0){
                                                                //6 3
                                                                for( var u = 0; u < allCondidat[6][3].length; u++){
                                                                    if(allCondidat[6][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //6 4
                                                                for( var u = 0; u < allCondidat[6][4].length; u++){
                                                                    if(allCondidat[6][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //6 5
                                                                for( var u = 0; u < allCondidat[6][5].length; u++){
                                                                    if(allCondidat[6][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //7 3
                                                                for( var u = 0; u < allCondidat[7][3].length; u++){
                                                                    if(allCondidat[7][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //7 4
                                                                for( var u = 0; u < allCondidat[7][4].length; u++){
                                                                    if(allCondidat[7][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //7 5
                                                                for( var u = 0; u < allCondidat[7][5].length; u++){
                                                                    if(allCondidat[7][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //8 3
                                                                for( var u = 0; u < allCondidat[8][3].length; u++){
                                                                    if(allCondidat[8][3][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][3].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //8 4
                                                                for( var u = 0; u < allCondidat[8][4].length; u++){
                                                                    if(allCondidat[8][4][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][4].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //8 5
                                                                for( var u = 0; u < allCondidat[8][5].length; u++){
                                                                    if(allCondidat[8][5][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][5].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        if(y == 8){
                                                            if(x == 0){
                                                                //6 6
                                                                for( var u = 0; u < allCondidat[6][6].length; u++){
                                                                    if(allCondidat[6][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 1){
                                                                //6 7
                                                                for( var u = 0; u < allCondidat[6][7].length; u++){
                                                                    if(allCondidat[6][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 2){
                                                                //6 8
                                                                for( var u = 0; u < allCondidat[6][8].length; u++){
                                                                    if(allCondidat[6][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[6][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 3){
                                                                //7 6
                                                                for( var u = 0; u < allCondidat[7][6].length; u++){
                                                                    if(allCondidat[7][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 4){
                                                                //7 7
                                                                for( var u = 0; u < allCondidat[7][7].length; u++){
                                                                    if(allCondidat[7][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 5){
                                                                //7 8
                                                                for( var u = 0; u < allCondidat[7][8].length; u++){
                                                                    if(allCondidat[7][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[7][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 6 ){
                                                                //8 6
                                                                for( var u = 0; u < allCondidat[8][6].length; u++){
                                                                    if(allCondidat[8][6][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][6].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 7){
                                                                //8 7
                                                                for( var u = 0; u < allCondidat[8][7].length; u++){
                                                                    if(allCondidat[8][7][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][7].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
                                                                    }
                                                                }
                                                            }
                                                            if(x == 8){
                                                                //8 8
                                                                for( var u = 0; u < allCondidat[8][8].length; u++){
                                                                    if(allCondidat[8][8][u] == groupCondidat[y][i][t]){
                                                                        allCondidat[8][8].splice(u,1);
                                                                        checkSinglCondidat();
                                                                        checker();
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
                                
                            }
                        }
                    }
                    
                }
                if(trio == true){
                    // console.log('Trio2', groupCondidat[y][x],groupCondidat[y][q] , groupCondidat[y][w]);
                }
                
            }
        }
    }
    
}


function checkHiddenSingleCondidat(){
    for( var y = 0; y < allCondidat.length; y++){
        for(var x = 0; x < allCondidat[y].length;x++){
            for( var z = 0; z < allCondidat[y][x].length; z++){//[y][x][z]-etalon
                var hidden = true;
                for(var q = 0; q < allCondidat[y].length; q++){
                    if(allCondidat[y][q].includes(allCondidat[y][x][z]) && q != x){
                       hidden = false;
                    }
                }
                // console.log('HidenSingl',hidden,y,x,allCondidat[y][x][z]);
                if( hidden == true){
                    arr[y].splice(x,1,allCondidat[y][x][z]);
                    allCondidat[y].splice(x,1,[]);
                    simpleSudoku()
                }
            }
        }
    }

}








function simpleSudoku(){
    getAllCondidat();
    getGroups();
    checkGroup();
    while(wasChenge == true){
        wasChenge = false;
        checkSinglCondidat();
        getGroups();
        checkGroup();
    }
    // getAllCondidat();
    getGroups();
    checkGroup();
}
function hardSudoku(){
    getPair();
    checkGroup();
    checkHiddenSingleCondidat();
    getTrio();
}

function checker(){
    while(wasChenge == true){
        wasChenge = false;
        checkSinglCondidat();
        getGroups();
        checkGroup();
        
    }
}


simpleSudoku();
hardSudoku();

    console.log('allCondidat', allCondidat);
    console.log('wasChenge', wasChenge);
    

    return arr
}
