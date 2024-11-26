const navigation = {
    liClassMenuElements : document.querySelectorAll('.menu'),
    aElments : document.querySelectorAll(".sub-menu a"),
    init(){
        document.documentElement.classList.add('js-enabled');
        this.addEventListeners()
    },
    addEventListeners(){
        this.liClassMenuElements.forEach(liElement =>{
            liElement.addEventListener('mouseover', (evt)=>{
                this.montreSousMenu(evt)
            });
            liElement.addEventListener('mouseout', (evt)=>{
                this.cacheSousMenu(evt)
            });
        })
        for (const aElment of this.aElments) {
            aElment.addEventListener('mouseover', (evt)=>{
                this.hoverLiens(evt)
            });
            aElment.addEventListener('mouseout', (evt) => {
                this.resetLien(evt);  // Réinitialise les couleurs après le départ de la souris
            });
        }
    },
    cacheSousMenu(evt) {
        evt.currentTarget.style.backgroundColor="";
        evt.currentTarget.classList.remove('show');
        for (const aElment of this.aElments) {
            aElment.style.backgroundColor="";
            aElment.style.color = ""
        }
    },
    montreSousMenu(evt){
        evt.currentTarget.style.backgroundColor="#fff";
        evt.currentTarget.classList.add('show');
        for (const aElment of this.aElments) {
            aElment.style.backgroundColor="#c61128";
            aElment.style.color = "#fff"
        }
    },
    hoverLiens(evt){
        evt.currentTarget.style.backgroundColor="#791724";
    },
    resetLien(evt) {
        evt.currentTarget.style.backgroundColor = "";  // Réinitialiser la couleur de fond du lien
        evt.currentTarget.style.color = "";  // Réinitialiser la couleur du texte du lien
    }
}

navigation.init();
