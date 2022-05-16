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
        console.log("Year: " + iterations)
        if(iterations == 0) return axiom
        for(let i = 0; i<iterations; i++){
            newAxiom = ""
            for(let i = 0; i < axiom.length; i++){

                newAxiom += productionRules[axiom.charAt(i)]
                console.log("Character: ", axiom.charAt(i), ", prod rule: ",productionRules[axiom.charAt(i)])
                if(newAxiom.length > 100) return newAxiom
            }
            axiom = newAxiom
            console.log(newAxiom)

        }
       // console.log(newAxiom)
        return newAxiom
    }
    display(newAxiom){
        console.log("display axiom: " + newAxiom)
        for(let i = 0; i < 100; i++){
           // console.log("char at: ",i , ": ", newAxiom.charAt(i))
            MAP.innerHTML += "<div class=\"square\" name = \"" + newAxiom.charAt(i) + "\">" + 
            newAxiom.charAt(i) + "</div>"
        }
        let landTiles = document.querySelectorAll("div[name=\"L\"")

        let waterTiles = document.querySelectorAll("div[name=\"W\"")

        let mountainTiles = document.querySelectorAll("div[name=\"M\"")

        let riverTiles = document.querySelectorAll("div[name=\"R\"")

        let desertTiles = document.querySelectorAll("div[name=\"D\"")

        for(let i = 0; i < landTiles.length; i++){
         landTiles[i].style.backgroundColor = "green"
        }
        for(let i = 0; i < waterTiles.length; i++){
            waterTiles[i].style.backgroundColor = "blue"
        }
        for(let i = 0; i < mountainTiles.length; i++){
            mountainTiles[i].style.backgroundColor = "brown"
        }
        for(let i = 0; i < riverTiles.length; i++){
            riverTiles[i].style.backgroundColor = "cyan"
        }
        for(let i = 0; i < desertTiles.length; i++){
            desertTiles[i].style.backgroundColor = "tan"
        }
    }
}

productionRules = {
    "L" : "RL",//land
    "W" : "MWW",//water
    "M" : "LML",//mountain
    "R" : "RR", //river
    "D" : "LDD"//desert
}

axiom = "WWW"
test = new LSystem(axiom,productionRules)
iterations = 0


function next(){
    MAP.innerHTML = ""
    iterations += 1
    test.display(test.calculate(axiom,productionRules,iterations))
    console.log(iterations)
}
function last(){
    MAP.innerHTML = ""
    iterations -= 1
    test.display(test.calculate(axiom,productionRules,iterations))
    console.log(iterations)
}
function submit(){
    axiom = document.getElementById("textbox").value
    console.log(axiom)

}
