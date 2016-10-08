"use strict";

solve(
[
"SULS | Main Site | Home Page",
"SULS | Main Site | Login Page",
"SULS | Main Site | Register Page",
"SULS | Judge Site | Login Page",
"SULS | Judge Site | Submittion Page",
"Lambda | CoreA | A23",
"SULS | Digital Site | Login Page",
"Lambda | CoreB | B24",
"Lambda | CoreA | A24",
"Lambda | CoreA | A25",
"Lambda | CoreC | C4",
"Indice | Session | Default Storage",
"Indice | Session | Default Security",
]
);

function solve (input) {
	input = input.map(el => el.split(/\s*\|\s*/));

	let arrSystems = [];
	getSystems(input);
	function getSystems (input) {
		if (input.length <= 0) {
			return;
		}

		let [system, comp, subcomp] = input[0];

		let filtered = input.filter(el =>{
			let [cSystem, cComp, cSubcomp] = el;
			return cSystem === system;
		});

		input = input.filter(el =>{
			let [cSystem, cComp, cSubcomp] = el;
			return cSystem !== system;
		});

		let obj = {};

		obj.system = system;
		
		//get components
		let comps = [];
		getComponents(filtered);
		function getComponents (input) {
			if (input.length <= 0) {
				return;
			}

			let [system, comp, subcomp] = input[0];

			let filtered = input.filter(el =>{
				let [cSystem, cComp, cSubcomp] = el;
				return cComp === comp;
			});

			let subcomps = [];
			let obj = {};
			obj.comp = comp;
			filtered.forEach( function(element, index) {
				let [cSystem, cComp, cSubcomp] = element;
				subcomps.push(cSubcomp);
			});
			obj.subcomps = subcomps;
			comps.push(obj);

			input = input.filter(el =>{
				let [cSystem, cComp, cSubcomp] = el;
				return cComp !== comp;
			});
			
			getComponents(input);
		}

		obj.components = comps;

		arrSystems.push(obj);
		
		getSystems(input);
	}

	arrSystems.sort((a, b) => {
		let compN = b.components.length - a.components.length;

		if (compN === 0) {
			return a.system > b.system;
		} else {
			return compN;
		}
	});

	arrSystems.forEach( function(system, index) {
		system.components.sort((a, b) => {
			return b.subcomps.length - a.subcomps.length;
		});
	});

	arrSystems.forEach( function(system, index) {
		console.log(system.system);
		system.components.forEach( function(comp, index) {
			console.log(`|||${comp.comp}`);
			comp.subcomps.forEach(subcomp => console.log(`||||||${subcomp}`));
		});
	});
}