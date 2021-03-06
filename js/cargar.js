$(document).ready(function() {
    function up() {
        $(window).scrollTop(0);
    }
    // nosotros
    $('#btnNosotros').click(function() {
        up();
        $('#main').load('../views/nosotros.html');
    });
    $('#btnNosotrosR').click(function() {
        up();
        $('#main').load('../views/nosotros.html');
    });
    //     Servicios Generales
    $('#btnSG').click(function() {
        up();
        $('#main').load('../views/serviciosGenerales.html');

    });
    $('#btnSGR').click(function() {
        up();
        $('#main').load('../views/serviciosGenerales.html');

    });
    //     Salud Ocupacional
    $('#btnSO').click(function() {
        up();
        $('#main').load('../views/saludOcupacional.html');
    });
    $('#btnSOR').click(function() {
        up();
        $('#main').load('../views/saludOcupacional.html');
    });
    //     laboratorio
    $('#btnLab').click(function() {
        up();
        $('#main').load('../views/laboratorio.html');
    });
    $('#btnLabR').click(function() {
        up();
        $('#main').load('../views/laboratorio.html');
    });
    //     sede Pierola
    $('#btnPierola').click(function() {
        up();
        $('#main').load('../views/sedes/sedePierola.html');
    });
    $('#btnPierolaR').click(function() {
        up();
        $('#main').load('../views/sedes/sedePierola.html');
    });
    //     sede Sto. Dominguito
    $('#btnSD').click(function() {
        up();
        $('#main').load('../views/sedes/sedeStoDominguito.html');
    });
    $('#btnSDR').click(function() {
        up();
        $('#main').load('../views/sedes/sedeStoDominguito.html');
    });
    //     sede Huamachuco
    $('#btnH').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuamachuco.html');
    });
    $('#btnHR').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuamachuco.html');
    });
    //     sede Huancayo
    $('#btnHy').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuancayo.html');
    });
    $('#btnHyR').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuancayo.html');
    });

    // zona covid 

    // prueba rapida 
    $('#btnRapida').click(function() {
        $('#covid-container').load('../views/covid/rapida.html');
    });
    $('#btnRapidaR').click(function() {
        $('#covid-container').load('../views/covid/rapida.html');
    });
    // prueba serologica
    $('#btnSerologica').click(function() {
        $('#covid-container').load('../views/covid/serologica.html');
    });
    $('#btnSerologicaR').click(function() {
        $('#covid-container').load('../views/covid/serologica.html');
    });
    // prueba de antigeno 
    $('#btnAntigeno').click(function() {
        $('#covid-container').load('../views/covid/antigeno.html');
    });
    $('#btnAntigenoR').click(function() {
        $('#covid-container').load('../views/covid/antigeno.html');
    });
    // prueba molecular 
    $('#btnMolecular').click(function() {
        $('#covid-container').load('../views/covid/molecular.html');
    });
    $('#btnMolecularR').click(function() {
        $('#covid-container').load('../views/covid/molecular.html');
    });
})