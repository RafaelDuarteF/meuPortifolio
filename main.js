$(document).ready(() => {
    linksOpen = false;
    redesOpen = true;
    minhasRedes = $(".minhasRedes"); minhasRedes.hide();
    $(".descPerfil").css("background", "gray");
    sobreMim = $(".sobreMim");
    $(".descPerfil").click(() => {
        sobreMim.show()
        minhasRedes.hide();
        $(".linksPerfil").css("background", "rgb(70, 70, 70)");
        $(".descPerfil").css("background", "gray");
        $(".descPerfil").css("cursor", "default");
        linksOpen = false;
        redesOpen = true;
    });
    $(".linksPerfil").click(() => {
        sobreMim.hide();
        minhasRedes.show();
        $(".descPerfil").css("background", "rgb(70, 70, 70)");
        $(".linksPerfil").css("background", "gray");
        $(".linksPerfil").css("cursor", "default");
        linksOpen = true;
        redesOpen = false;
    });
    $(".descPerfil").hover(() => {
        if(redesOpen == false){
            $(".descPerfil").css("cursor", "pointer");
        }
        else{
            $(".descPerfil").css("cursor", "default");
        }
        $(".descPerfil").css("background", "gray");
    }, () => {
        if(redesOpen == false){
            $(".descPerfil").css("background", "rgb(70, 70, 70)");
        }
        else{
            $(".descPerfil").css("background", "gray");
        }
        $(".descPerfil").css("cursor", "default");
    });
    $(".linksPerfil").hover(() => {
        if(linksOpen == false){
            $(".linksPerfil").css("cursor", "pointer");
        }
        else{
            $(".linksPerfil").css("cursor", "default");
        }
        $(".linksPerfil").css("background", "gray");
    }, () => {
        if(linksOpen == false){
            $(".linksPerfil").css("background", "rgb(70, 70, 70)");
        }
        else{
            $(".linksPerfil").css("background", "gray");
        }
        $(".linksPerfil").css("cursor", "default");
    });
    $(".btnGithub").click(() => {
        location.assign("https://github.com/RafaelDuarteF");
    });
    $(".btnFacebook").click(() => {
        location.assign("https://web.facebook.com/rafa.duartef/");
    });
});