

function mouseOver (e){
    if(e.target.getAttribute("id")== "HomePage"){
        document.getElementById("HomePage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "CatcherPage"){
        document.getElementById("CatcherPage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "PitcherPage"){
        document.getElementById("PitcherPage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "InfieldPage"){
        document.getElementById("InfieldPage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "RulesPage"){
        document.getElementById("RulesPage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "OutfieldPage"){
        document.getElementById("OutfieldPage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "OffensePage"){
        document.getElementById("OffensePage").style.fontWeight="bolder";
    }
    if(e.target.getAttribute("id")== "DefensePage"){
        document.getElementById("DefensePage").style.fontWeight="bolder";
    }
}
function mouseOut (e){
    if(e.target.getAttribute("id")== "HomePage"){
        document.getElementById("HomePage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "CatcherPage"){
        document.getElementById("CatcherPage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "PitcherPage"){
        document.getElementById("PitcherPage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "InfieldPage"){
        document.getElementById("InfieldPage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "RulesPage"){
        document.getElementById("RulesPage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "OutfieldPage"){
        document.getElementById("OutfieldPage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "OffensePage"){
        document.getElementById("OffensePage").style.fontWeight="normal";
    }
    if(e.target.getAttribute("id")== "DefensePage"){
        document.getElementById("DefensePage").style.fontWeight="normal";
    }

}
document.addEventListener( "mouseover", mouseOver);
document.addEventListener( "mouseout", mouseOut );