function abrirC() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaC").fadeIn();
    // Deshabilita clics y desplazamiento en el fondo
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarC() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaC").fadeOut();
    // Habilita clics y desplazamiento en el fondo
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirGit() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaGit").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarGit() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaGit").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirJava() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaJava").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarJava() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaJava").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirNsql() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaNsql").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarNsql() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaNsql").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirSql() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaSql").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarSql() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaSql").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirPhp() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaPhp").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarPhp() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaPhp").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirJs() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaJs").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarJs() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaJs").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

function abrirHC() {
    $(".fondo-semi-transparente").fadeIn();
    $("#ventanaHC").fadeIn();
    $("body").css("overflow", "hidden");
    $("a, button").prop("disabled", true);
}
function cerrarHC() {
    $(".fondo-semi-transparente").fadeOut();
    $("#ventanaHC").fadeOut();
    $("body").css("overflow", "auto");
    $("a, button").prop("disabled", false);
}

// Evento de clic en el artículo para abrir la ventana
$("#artC").on("click", function () {
    abrirC();
});
$("#artGit").on("click", function () {
    abrirGit();
});
$("#artJava").on("click", function () {
    abrirJava();
});
$("#artNsql").on("click", function () {
    abrirNsql();
});
$("#artSql").on("click", function () {
    abrirSql();
});
$("#artPhp").on("click", function () {
    abrirPhp();
});
$("#artJs").on("click", function () {
    abrirJs();
});
$("#artHC").on("click", function () {
    abrirHC();
});
