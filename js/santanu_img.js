var tmOut;
function chgSelect(){
    var areaName = new Array(
"santanu002",
);
    var area     = document.form1.slt_area.value;
    var element  = document.form1.slt_element.value;
    var time     = document.form1.slt_time.value;
    var imgName  = "img/" + area + "/" + area + "_" + element + "_" + time + ".jpg";
    
    document.pic.src = imgName;
    document.pic.alt = areaName[document.form1.slt_area.selectedIndex];
    document.pic.title = areaName[document.form1.slt_area.selectedIndex];
    document.form1.form2txt.value = imgName;
}
function chgImage(){
    var area      = document.form1.slt_area.value;
    var element   = document.form1.slt_element.value;
    
    if ( document.form1.slt_time.selectedIndex == 0 ){
            document.form1.slt_time.selectedIndex = document.form1.slt_animation_type.value;
    }
    
    document.form1.slt_time.selectedIndex--;
    chgSelect();
    tmOut = setTimeout("chgImage();",800);
}
function stpImage(){
    if (tmOut) {
        clearTimeout(tmOut);
    }
}
function nextImg(){
    if ( document.form1.slt_time.selectedIndex != 0 ){
            document.form1.slt_time.selectedIndex--;
    }
}
function prevImg(){
    if ( document.form1.slt_time.selectedIndex != 135 ){
            document.form1.slt_time.selectedIndex++;
    }
}
function newWindow(){
    winName = window.open("sat_img2.htm");
}
