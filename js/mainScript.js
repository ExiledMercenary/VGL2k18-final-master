function sideNavOpen(){
    var x = document.getElementById("sideNav");
    if(x.style.display === 'none'){
        document.getElementById("sideNav").style.display = "block";
    }else{
        document.getElementById("sideNav").style.display = "none";
    }
}
function sideNavClose(){
    document.getElementById("sideNav").style.display = "none";
}

$('.demo_iframe').challonge('gat17cod4', {subdomain: '', theme: '1', multiplier: '1.0', match_width_multiplier: '1.0', show_final_results: '0', show_standings: '1'});
