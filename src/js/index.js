$(function() {
    var vHops = [
        ['BAU', [
            ['CAM', 1],
            ['CPG', 1],
            ['LON', 1]
        ]],
        ['BEL', [
            ['MAN', 1],
            ['NTL', 1]
        ]],
        ['BHO', [
            ['BSB', 1],
            ['RJO', 1],
            ['SJC', 1]
        ]],
        ['BLU', [
            ['CUR', 1],
            ['FLO', 1],
            ['POA', 1]
        ]],
        ['BSB', [
            ['BHO', 1],
            ['MAN', 1],
            ['NTL', 1],
            ['RBP', 1]
        ]],
        ['CAM', [
            ['BAU', 1],
            ['RBP', 1],
            ['SJC', 1],
            ['SPO', 1]
        ]],
        ['CPG', [
            ['BAU', 1],
            ['CUI', 1]
        ]],
        ['CUI', [
            ['CPG', 1],
            ['MAN', 1]
        ]],
        ['CUR', [
            ['BLU', 1],
            ['FLO', 1],
            ['LON', 1],
            ['SPO', 1]
        ]],
        ['FLO', [
            ['BLU', 1],
            ['CUR', 1],
            ['POA', 1],
            ['RJO', 1]
        ]],
        ['LON', [
            ['BAU', 1],
            ['CUR', 1],
            ['SPO', 1]
        ]],
        ['MAN', [
            ['BEL', 1],
            ['BSB', 1],
            ['CUI', 1]
        ]],
        ['NTL', [
            ['BEL', 1],
            ['BSB', 1],
            ['REC', 1],
            ['SLV', 1]
        ]],
        ['POA', [
            ['BLU', 1],
            ['FLO', 1]
        ]],
        ['RBP', [
            ['BSB', 1],
            ['CAM', 1]
        ]],
        ['REC', [
            ['NTL', 1],
            ['SLV', 1]
        ]],
        ['RJO', [
            ['BHO', 1],
            ['FLO', 1],
            ['SJC', 1],
            ['SLV', 1],
            ['SPO', 1]
        ]],
        ['SJC', [
            ['BHO', 1],
            ['CAM', 1],
            ['RJO', 1],
            ['SPO', 1]
        ]],
        ['SLV', [
            ['NTL', 1],
            ['REC', 1],
            ['RJO', 1]
        ]],
        ['SPO', [
            ['COM', 1],
            ['CUR', 1],
            ['LON', 1],
            ['RJO', 1],
            ['SJC', 1]
        ]]
    ];
    //Distancia Geografica	
    var vDistaciaGeo = [
        ['BAU', [
            ['CAM', 3],
            ['CPG', 10],
            ['LON', 3]
        ]],
        ['BEL', [
            ['MAN', 18],
            ['NTL', 21]
        ]],
        ['BHO', [
            ['BSB', 9],
            ['RJO', 7],
            ['SJC', 7]
        ]],
        ['BLU', [
            ['CUR', 2],
            ['FLO', 1],
            ['POA', 7]
        ]],
        ['BSB', [
            ['BHO', 9],
            ['MAN', 22],
            ['NTL', 22],
            ['RBP', 8]
        ]],
        ['CAM', [
            ['BAU', 3],
            ['RBP', 2],
            ['SJC', 2],
            ['SPO', 1]
        ]],
        ['CPG', [
            ['BAU', 10],
            ['CUI', 8]
        ]],
        ['CUI', [
            ['CPG', 8],
            ['MAN', 20]
        ]],
        ['CUR', [
            ['BLU', 2],
            ['FLO', 2],
            ['LON', 6],
            ['SPO', 5]
        ]],
        ['FLO', [
            ['BLU', 1],
            ['CUR', 2],
            ['POA', 6],
            ['RJO', 12]
        ]],
        ['LON', [
            ['BAU', 3],
            ['CUR', 6],
            ['SPO', 7]
        ]],
        ['MAN', [
            ['BEL', 18],
            ['BSB', 22],
            ['CUI', 20]
        ]],
        ['NTL', [
            ['BEL', 21],
            ['BSB', 22],
            ['REC', 4],
            ['SLV', 15]
        ]],
        ['POA', [
            ['BLU', 7],
            ['FLO', 6]
        ]],
        ['RBP', [
            ['BSB', 8],
            ['CAM', 2]
        ]],
        ['REC', [
            ['NTL', 4],
            ['SLV', 8]
        ]],
        ['RJO', [
            ['BHO', 7],
            ['FLO', 12],
            ['SJC', 3],
            ['SLV', 20],
            ['SPO', 5]
        ]],
        ['SJC', [
            ['BHO', 7],
            ['CAM', 2],
            ['RJO', 3],
            ['SPO', 2]
        ]],
        ['SLV', [
            ['NTL', 15],
            ['REC', 8],
            ['RJO', 20]
        ]],
        ['SPO', [
            ['COM', 1],
            ['CUR', 5],
            ['LON', 7],
            ['RJO', 5],
            ['SJC', 2]
        ]]
    ];
    //Custo
    var vCusto = [
        ['BAU', [
            ['CAM', 6],
            ['CPG', 3],
            ['LON', 2]
        ]],
        ['BEL', [
            ['MAN', 2],
            ['NTL', 3]
        ]],
        ['BHO', [
            ['BSB', 6],
            ['RJO', 6],
            ['SJC', 8]
        ]],
        ['BLU', [
            ['CUR', 5],
            ['FLO', 3],
            ['POA', 2]
        ]],
        ['BSB', [
            ['BHO', 6],
            ['MAN', 6],
            ['NTL', 7],
            ['RBP', 4]
        ]],
        ['CAM', [
            ['BAU', 6],
            ['RBP', 4],
            ['SJC', 10],
            ['SPO', 7]
        ]],
        ['CPG', [
            ['BAU', 3],
            ['CUI', 2]
        ]],
        ['CUI', [
            ['CPG', 2],
            ['MAN', 3]
        ]],
        ['CUR', [
            ['BLU', 5],
            ['FLO', 5],
            ['LON', 2],
            ['SPO', 10]
        ]],
        ['FLO', [
            ['BLU', 3],
            ['CUR', 5],
            ['POA', 2],
            ['RJO', 10]
        ]],
        ['LON', [
            ['BAU', 2],
            ['CUR', 2],
            ['SPO', 2]
        ]],
        ['MAN', [
            ['BEL', 2],
            ['BSB', 6],
            ['CUI', 3]
        ]],
        ['NTL', [
            ['BEL', 3],
            ['BSB', 7],
            ['REC', 3],
            ['SLV', 4]
        ]],
        ['POA', [
            ['BLU', 2],
            ['FLO', 2]
        ]],
        ['RBP', [
            ['BSB', 4],
            ['CAM', 4]
        ]],
        ['REC', [
            ['NTL', 3],
            ['SLV', 2]
        ]],
        ['RJO', [
            ['BHO', 6],
            ['FLO', 10],
            ['SJC', 10],
            ['SLV', 6],
            ['SPO', 15]
        ]],
        ['SJC', [
            ['BHO', 8],
            ['CAM', 10],
            ['RJO', 10],
            ['SPO', 16]
        ]],
        ['SLV', [
            ['NTL', 4],
            ['REC', 2],
            ['RJO', 6]
        ]],
        ['SPO', [
            ['COM', 7],
            ['CUR', 10],
            ['LON', 2],
            ['RJO', 15],
            ['SJC', 16]
        ]]
    ];

    var vHopsAux = vHops.slice();
    var vDistaciaGeoAux = vDistaciaGeo.slice();
    var vCustoAux = vCusto.slice();

    function Validar(verticeRemv) //Valida se remoção do vertice é origem ou destino
    {
        var comboCidadesOrigem = document.getElementById("cboCidadesOrigem");
        var comboCidadesDestino = document.getElementById("cboCidadesDestino");

        if (comboCidadesOrigem.selectedIndex == verticeRemv || comboCidadesDestino.selectedIndex == verticeRemv) {
            alert('Voce nao pode remover um vertice Origem ou Destino')
            return false;
        } else {
            return true;
        }
    }


    function Remover() //Remove vertices
    {

        if (!BAU.checked || !Validar(0)) {
            document.getElementById("cboCidadesOrigem").options[0].disabled = false;
            document.getElementById("cboCidadesDestino").options[0].disabled = false;
            BAU.checked = false;
            
        } else {
            
            vHops.splice(0, 1, ['--', 1]);
            vDistaciaGeo.splice(0, 1, ['--', 1]);
            vCusto.splice(0, 1, ['--', 1]);
        }
        if (!BEL.checked || !Validar(1)) {
            document.getElementById("cboCidadesOrigem").options[1].disabled = false;
            document.getElementById("cboCidadesDestino").options[1].disabled = false;
            BEL.checked = false;
            
        } else {
            vHops.splice(1, 1, ['--', 1]);
            vDistaciaGeo.splice(1, 1, ['--', 1]);
            vCusto.splice(1, 1, ['--', 1])
        }
        if (!BHO.checked || !Validar(2)) {
            document.getElementById("cboCidadesOrigem").options[2].disabled = false;
            document.getElementById("cboCidadesDestino").options[2].disabled = false;
            BHO.checked = false;
        } else {
            vHops.splice(2, 1, ['--', 1]);
            vDistaciaGeo.splice(2, 1, ['--', 1]);
            vCusto.splice(2, 1, ['--', 1])
        }
        if (!BLU.checked || !Validar(3)) {
            document.getElementById("cboCidadesOrigem").options[3].disabled = false;
            document.getElementById("cboCidadesDestino").options[3].disabled = false;
            BLU.checked = false;
        } else {
            vHops.splice(3, 1, ['--', 1]);
            vDistaciaGeo.splice(3, 1, ['--', 1]);
            vCusto.splice(3, 1, ['--', 1])
        }
        if (!BSB.checked || !Validar(4)) {
            document.getElementById("cboCidadesOrigem").options[4].disabled = false;
            document.getElementById("cboCidadesDestino").options[4].disabled = false;
            BSB.checked = false;
        } else {
            vHops.splice(4, 1, ['--', 1]);
            vDistaciaGeo.splice(4, 1, ['--', 1]);
            vCusto.splice(4, 1, ['--', 1])
        }
        if (!CAM.checked || !Validar(5)) {
            document.getElementById("cboCidadesOrigem").options[5].disabled = false;
            document.getElementById("cboCidadesDestino").options[5].disabled = false;
            CAM.checked = false;
        } else {
            vHops.splice(5, 1, ['--', 1]);
            vDistaciaGeo.splice(5, 1, ['--', 1]);
            vCusto.splice(5, 1, ['--', 1])
        }
        if (!CPG.checked || !Validar(6)) {
            document.getElementById("cboCidadesOrigem").options[6].disabled = false;
            document.getElementById("cboCidadesDestino").options[6].disabled = false;
            CPG.checked = false;
        } else {
            vHops.splice(6, 1, ['--', 1]);
            vDistaciaGeo.splice(6, 1, ['--', 1]);
            vCusto.splice(6, 1, ['--', 1])
        }
        if (!CUI.checked || !Validar(7)) {
            document.getElementById("cboCidadesOrigem").options[7].disabled = false;
            document.getElementById("cboCidadesDestino").options[7].disabled = false;
            CUI.checked = false;
        } else {
            vHops.splice(7, 1, ['--', 1]);
            vDistaciaGeo.splice(7, 1, ['--', 1]);
            vCusto.splice(7, 1, ['--', 1])
        }
        if (!CUR.checked || !Validar(8)) {
            document.getElementById("cboCidadesOrigem").options[8].disabled = false;
            document.getElementById("cboCidadesDestino").options[8].disabled = false;
            CUR.checked = false;
        } else {
            vHops.splice(8, 1, ['--', 1]);
            vDistaciaGeo.splice(8, 1, ['--', 1]);
            vCusto.splice(8, 1, ['--', 1])
        }
        if (!FLO.checked || !Validar(9)) {
            document.getElementById("cboCidadesOrigem").options[9].disabled = false;
            document.getElementById("cboCidadesDestino").options[9].disabled = false;
            FLO.checked = false;
        } else {
            vHops.splice(9, 1, ['--', 1]);
            vDistaciaGeo.splice(9, 1, ['--', 1]);
            vCusto.splice(9, 1, ['--', 1])
        }
        if (!LON.checked || !Validar(10)) {
            document.getElementById("cboCidadesOrigem").options[10].disabled = false;
            document.getElementById("cboCidadesDestino").options[10].disabled = false;
            LON.checked = false;
        } else {
            vHops.splice(10, 1, ['--', 1]);
            vDistaciaGeo.splice(10, 1, ['--', 1]);
            vCusto.splice(10, 1, ['--', 1])
        }
        if (!MAN.checked || !Validar(11)) {
            document.getElementById("cboCidadesOrigem").options[11].disabled = false;
            document.getElementById("cboCidadesDestino").options[11].disabled = false;
            MAN.checked = false;
        } else {
            vHops.splice(11, 1, ['--', 1]);
            vDistaciaGeo.splice(11, 1, ['--', 1]);
            vCusto.splice(11, 1, ['--', 1])
        }
        if (!NTL.checked || !Validar(12)) {
            document.getElementById("cboCidadesOrigem").options[12].disabled = false;
            document.getElementById("cboCidadesDestino").options[12].disabled = false;
            NTL.checked = false;
        } else {
            vHops.splice(12, 1, ['--', 1]);
            vDistaciaGeo.splice(12, 1, ['--', 1]);
            vCusto.splice(12, 1, ['--', 1])
        }
        if (!POA.checked || !Validar(13)) {
            document.getElementById("cboCidadesOrigem").options[13].disabled = false;
            document.getElementById("cboCidadesDestino").options[13].disabled = false;
            POA.checked = false;
        } else {
            vHops.splice(13, 1, ['--', 1]);
            vDistaciaGeo.splice(13, 1, ['--', 1]);
            vCusto.splice(13, 1, ['--', 1])
        }
        if (!RBP.checked || !Validar(14)) {
            document.getElementById("cboCidadesOrigem").options[14].disabled = false;
            document.getElementById("cboCidadesDestino").options[14].disabled = false;
            RBP.checked = false;
        } else {
            vHops.splice(14, 1, ['--', 1]);
            vDistaciaGeo.splice(14, 1, ['--', 1]);
            vCusto.splice(14, 1, ['--', 1])
        }
        if (!REC.checked || !Validar(15)) {
            document.getElementById("cboCidadesOrigem").options[15].disabled = false;
            document.getElementById("cboCidadesDestino").options[15].disabled = false;
            REC.checked = false;
        } else {
            vHops.splice(15, 1, ['--', 1]);
            vDistaciaGeo.splice(15, 1, ['--', 1]);
            vCusto.splice(15, 1, ['--', 1])
        }
        if (!RJO.checked || !Validar(16)) {
            document.getElementById("cboCidadesOrigem").options[16].disabled = false;
            document.getElementById("cboCidadesDestino").options[16].disabled = false;
            RJO.checked = false;
        } else {
            vHops.splice(16, 1, ['--', 1]);
            vDistaciaGeo.splice(16, 1, ['--', 1]);
            vCusto.splice(16, 1, ['--', 1])
        }
        if (!SJC.checked || !Validar(17)) {
            document.getElementById("cboCidadesOrigem").options[17].disabled = false;
            document.getElementById("cboCidadesDestino").options[17].disabled = false;
            SJC.checked = false;
        } else {
            vHops.splice(17, 1, ['--', 1]);
            vDistaciaGeo.splice(17, 1, ['--', 1]);
            vCusto.splice(17, 1, ['--', 1])
        }
        if (!SLV.checked || !Validar(18)) {
            document.getElementById("cboCidadesOrigem").options[18].disabled = false;
            document.getElementById("cboCidadesDestino").options[18].disabled = false;
            SLV.checked = false;
        } else {
            vHops.splice(18, 1, ['--', 1]);
            vDistaciaGeo.splice(18, 1, ['--', 1]);
            vCusto.splice(18, 1, ['--', 1])
        }
        if (!SPO.checked || !Validar(19)) {
            document.getElementById("cboCidadesOrigem").options[19].disabled = false;
            document.getElementById("cboCidadesDestino").options[19].disabled = false;
            SPO.checked = false;
        } else {
            vHops.splice(19, 1, ['--', 1]);
            vDistaciaGeo.splice(19, 1, ['--', 1]);
            vCusto.splice(19, 1, ['--', 1])
        }

        Calcular();
    }

    function RemoverListaComboBox() //Inativas as opçoes do combobox
    {

        document.getElementById("cboCidadesOrigem").options[0].disabled = true;
        document.getElementById("cboCidadesOrigem").options[1].disabled = true;
        document.getElementById("cboCidadesOrigem").options[2].disabled = true;
        document.getElementById("cboCidadesOrigem").options[3].disabled = true;
        document.getElementById("cboCidadesOrigem").options[4].disabled = true;
        document.getElementById("cboCidadesOrigem").options[5].disabled = true;
        document.getElementById("cboCidadesOrigem").options[6].disabled = true;
        document.getElementById("cboCidadesOrigem").options[7].disabled = true;
        document.getElementById("cboCidadesOrigem").options[8].disabled = true;
        document.getElementById("cboCidadesOrigem").options[9].disabled = true;
        document.getElementById("cboCidadesOrigem").options[10].disabled = true;
        document.getElementById("cboCidadesOrigem").options[11].disabled = true;
        document.getElementById("cboCidadesOrigem").options[12].disabled = true;
        document.getElementById("cboCidadesOrigem").options[13].disabled = true;
        document.getElementById("cboCidadesOrigem").options[14].disabled = true;
        document.getElementById("cboCidadesOrigem").options[15].disabled = true;
        document.getElementById("cboCidadesOrigem").options[16].disabled = true;
        document.getElementById("cboCidadesOrigem").options[17].disabled = true;
        document.getElementById("cboCidadesOrigem").options[18].disabled = true;
        document.getElementById("cboCidadesOrigem").options[19].disabled = true;

        document.getElementById("cboCidadesDestino").options[0].disabled = true;
        document.getElementById("cboCidadesDestino").options[1].disabled = true;
        document.getElementById("cboCidadesDestino").options[2].disabled = true;
        document.getElementById("cboCidadesDestino").options[3].disabled = true;
        document.getElementById("cboCidadesDestino").options[4].disabled = true;
        document.getElementById("cboCidadesDestino").options[5].disabled = true;
        document.getElementById("cboCidadesDestino").options[6].disabled = true;
        document.getElementById("cboCidadesDestino").options[7].disabled = true;
        document.getElementById("cboCidadesDestino").options[8].disabled = true;
        document.getElementById("cboCidadesDestino").options[9].disabled = true;
        document.getElementById("cboCidadesDestino").options[10].disabled = true;
        document.getElementById("cboCidadesDestino").options[11].disabled = true;
        document.getElementById("cboCidadesDestino").options[12].disabled = true;
        document.getElementById("cboCidadesDestino").options[13].disabled = true;
        document.getElementById("cboCidadesDestino").options[14].disabled = true;
        document.getElementById("cboCidadesDestino").options[15].disabled = true;
        document.getElementById("cboCidadesDestino").options[16].disabled = true;
        document.getElementById("cboCidadesDestino").options[17].disabled = true;
        document.getElementById("cboCidadesDestino").options[18].disabled = true;
        document.getElementById("cboCidadesDestino").options[19].disabled = true;

        Remover();

    }


    $('#btnCalc').on('click', Calcular);
    $('.removeCheck').on('click', RemoverListaComboBox);

    function Calcular() // Executa o calculo do caminho minimo
    {

        var comboCidadesOrigem = document.getElementById("cboCidadesOrigem");
        var comboCidadesDestino = document.getElementById("cboCidadesDestino");
        var comboMetrica = document.getElementById("cboMetrica");

       
		var dijkstra = new Dijkstra();


            if (comboMetrica.selectedIndex == 0) //Hops
            {
                dijkstra.setGraph(vHops);

            } else if (comboMetrica.selectedIndex == 1) //Distância geográfica:
            {
                dijkstra.setGraph(vDistaciaGeo);

            } else //Custo
            {
                dijkstra.setGraph(vCusto);

            }
            draw(dijkstra.getPath(comboCidadesOrigem.options[comboCidadesOrigem.selectedIndex].value, comboCidadesDestino.options[comboCidadesDestino.selectedIndex].value));


            vHops = vHopsAux.slice();
            vDistaciaGeo = vDistaciaGeoAux.slice();
            vCusto = vCustoAux.slice();

    }

    function draw(results){
    	$.each(results, function (index, item){
            $('.resultado').append($('<td>').attr('data-step', index).html(item));
        });
    }
});