class NotesItem extends HTMLElement {
    constructor() {
        super()

        this._note = {
            id: 'SAMPLE_ID',
            title: 'SAMPLE_TITLE',
            body: 'SAMPLE_BODY',
        }
    }

    setNote(value) {
        this._note['id'] = value['id']
        this._note['title'] = value['title']
        this._note['body'] = value['body']
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.setAttribute('notes-id', this._note.id)

        this.innerHTML = `
          <div id="${this._note.id}-${this._note.title}" class="border rounded-lg p-3 relative group bg-white">
            <h2 class="text-xl font-semibold">${this._note.title}</h2>
            <p class="text-base leading-6">
               ${this._note.body}
            </p>
            <button
                class="bg-red-600 rounded-md hover:bg-red-500 p-2 transition-all duration-300 absolute top-0 right-0 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-11 z-50"
            >
                <img src="trash.svg" alt="ico-trash" />
            </button>
         </div>
          `
    }
}

customElements.define('notes-item', NotesItem)
