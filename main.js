$(document).ready(() => {
    minhasRedes = $(".minhasRedes"); minhasRedes.hide();
    sobreMim = $(".sobreMim");
    $(".descPerfil").click(() => {
        sobreMim.show()
        minhasRedes.hide();
    });
    $(".linksPerfil").click(() => {
        sobreMim.hide();
        minhasRedes.show();
    });
});