describe("Algoritmo de Dijkstra", function (){
	it("Deve encontrar o caminho correto", function (){
		var graph =
		[
			[ 'A', [['B',  7], ['C',  9], ['F', 14]] 	       ],
			[ 'B', [['A',  7], ['C', 10], ['D', 15]] 		   ],
			[ 'C', [['A',  9], ['B', 10], ['D', 11], ['F', 2]] ],
			[ 'D', [['B', 15], ['C', 11], ['E',  6]]		   ],
			[ 'E', [['D',  6], ['F',  9]] 					   ],
			[ 'F', [['A', 14], ['C',  2], ['E',  9]]		   ]
		];

		var dijkstra = new Dijkstra();
		dijkstra.setGraph(graph);

		expect(dijkstra.getPath('A', 'E')).toEqual(['C', 'F', 'E']);		
	});

});