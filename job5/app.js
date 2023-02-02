// je vise les li
let titeles = document.querySelectorAll("#tabs .tab-title li");

for (let titele of titeles){
    titele.addEventListener("click", function(){
        // récupérer le numero de titre active
        let num = this.getAttribute("data-tabtitle");

        // masqué la div active
        document.querySelector("#tabs > div.active").classList.remove("active");

        // reactiver la div ciblé
        document.querySelector("#tab" + num).classList.add("active");

        // enlever la class de titre precedemment active
        document.querySelector("#tabs .tab-title li").classList.remove("active");

        // reactiver l'element ciblé
        this.classList.add("active");

    })
}