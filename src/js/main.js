const decomposition = {
    init(){
        document.documentElement.classList.add('js-enabled');
        this.e_h1 = document.querySelector('.jump');
        this.a_letters = this.e_h1.textContent;
        this.e_h1.textContent = '';

        for (const e_letter of this.a_letters) {
            const span = document.createElement('span');
            span.appendChild(document.createTextNode(e_letter === ' ' ? '\u00A0' : e_letter));
            this.e_h1.appendChild(span);
        }
    }
}
decomposition.init();