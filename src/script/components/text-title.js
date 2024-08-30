class TextTitle extends HTMLElement {
    constructor() {
        super()

        this._text = this.getAttribute('text')
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <h1 class="text-center font-semibold text-3xl">${this._text}</h1>
              `
    }
}

customElements.define('text-title', TextTitle)
