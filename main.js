$(document).ready(() => {
    minhasRedes = $(".minhasRedes"); minhasRedes.hide();
    $(".descPerfil").css("background", "rgb(70, 70, 70)");
    sobreMim = $(".sobreMim");
    $(".descPerfil").click(() => {
        sobreMim.show()
        minhasRedes.hide();
        $(".linksPerfil").css("background", "#44D18F");
        $(".descPerfil").css("background", "rgb(70, 70, 70)");
        $(".descPerfil").css("cursor", "default");
        linksOpen = false;
        redesOpen = true;
    });
    $(".linksPerfil").click(() => {
        sobreMim.hide();
        minhasRedes.show();
        $(".descPerfil").css("background", "#44D18F");
        $(".linksPerfil").css("background", "rgb(70, 70, 70)");
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
        $(".descPerfil").css("background", "rgb(70, 70, 70)");
    }, () => {
        if(redesOpen == false){
            $(".descPerfil").css("background", "#44D18F");
        }
        else{
            $(".descPerfil").css("background", "rgb(70, 70, 70)");
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
        $(".linksPerfil").css("background", "rgb(70, 70, 70)");
    }, () => {
        if(linksOpen == false){
            $(".linksPerfil").css("background", "#44D18F");
        }
        else{
            $(".linksPerfil").css("background", "rgb(70, 70, 70)");
        }
        $(".linksPerfil").css("cursor", "default");
    });
});