// Code your solution in this file!

//distance from hq in blocs
function distanceFromHqInBlocks(pickuplocation){
    const headquares = 42;

    return Math.abs(pickuplocation-headquares)
}
//distance from hq in feet
function distanceFromHqInFeet(pickuplocation){
    const feet = 264;
    const pick = distanceFromHqInBlocks(pickuplocation)
    return Math.abs(pick* feet)
    //2112

}
//distance travelled
function distanceTravelledInFeet(start, destination){
    const  aBlock= 264;
    const distancetrave = Math.abs(destination-start)
    return aBlock *distancetrave;

}
//calculatesFarePrice(start, destination)

function calculatesFarePrice(start, destination){
    const distabloc = 264;
    if (distanceFromHqInFeet(start,destination) <=400){    
    return 0;

    }else if (distanceTravelledInFeet(start, destination)>=400 && distanceTravelledInFeet(start, destination)<=2000) {
    return (distanceTravelledInFeet(start ,destination) -400 ) * 0.02;
    
}
else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start, destination)<=2500){
    return 25;

}else if ((distanceTravelledInFeet(start, destination))>2500){
    return 'cannot travel that far';
}

}
