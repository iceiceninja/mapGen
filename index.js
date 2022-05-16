const MAP = document.getElementById("map")


class LSystem{
    constructor(axiom, productionRules){
        self.axiom = axiom
        self.productionRules = productionRules
        // self.alphabet = alphabet
        // let newAxiom = ""
    }
    calculate(axiom, productionRules,iterations){
        let newAxiom = ""
        for(let i = 0; i<iterations; i++){
            console.log(axiom)
            for(let i = 0; i < axiom.length; i++){
                newAxiom += productionRules[axiom.charAt(i)]
            }
        }
        return newAxiom
    }
    display(newAxiom){
        for(let i = 0; i < 100; i++){
            MAP.innerHTML += "<div class=\"square\" name = \"" + newAxiom.charAt(i) + "\">" + 
            newAxiom.charAt(i) + "</div>"
        }
    }
}
productionRules = {
    "L" : "LLWLL",
    "W" : "WL",
    "M" : "LMLWM"
}

axiom = "LWL"
test = new LSystem("LMWL",productionRules)
test.display(test.calculate(axiom,productionRules,50))


landTiles = document.querySelectorAll("div[name=\"L\"")

waterTiles = document.querySelectorAll("div[name=\"W\"")

mountainTiles = document.querySelectorAll("div[name=\"M\"")
for(let i = 0; i < landTiles.length; i++){
    landTiles[i].style.backgroundColor = "green"
}
for(let i = 0; i < waterTiles.length; i++){
    waterTiles[i].style.backgroundColor = "blue"
}
for(let i = 0; i < mountainTiles.length; i++){
    mountainTiles[i].style.backgroundColor = "brown"
}
