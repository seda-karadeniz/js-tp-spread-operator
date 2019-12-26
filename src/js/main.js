(function () {
  const SpreadOperator = {
    cacheDom() {
      this.heading = document.querySelector('.jump');
      this.aLetters = this.heading.textContent;
    },
    init() {
      window.document.documentElement.classList.add('js-enabled');
      this.cacheDom();
      this.removeRemoveElements(this.heading);
      for (const letter of this.aLetters) {
        const eSpan = document.createElement('span');
        eSpan.appendChild(document.createTextNode(letter === ' ' ? '\u00A0' : letter));
        this.heading.appendChild(eSpan);
      }
    },
    removeRemoveElements() {
      this.heading.textContent = "";
    }
  };
  SpreadOperator.init();
})();