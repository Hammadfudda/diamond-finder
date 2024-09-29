var img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC8BiowYOm3mIK_MNw5IN7f8_52eWERRaTXFD_geeBw&s';
var img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtXVeH1_vzTQoSCbudC6eCbcC7IYPJFSiZQ&s';
var count = 0;

function flip( elem , diamond){
    if (count < 2){
    if( diamond == 'yes'){
        elem.src = img1;
    }else{
   elem.src = img2;
    }count++
    }else{
        alert("Your try is finished")
    }
}
    