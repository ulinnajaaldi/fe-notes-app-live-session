class NotesList extends HTMLElement {
    constructor() {
        super()

        this._notes = []
    }

    setNotesList(value) {
        this._notes = value
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const wrapper = document.createElement('div')
        wrapper.classList.add('grid', 'grid-cols-4', 'gap-10')

        const notesElement = this._notes.map((item) => {
            const notes = document.createElement('notes-item')
            notes.setNote(item)

            return notes
        })

        this.innerHTML = ''
        this.append(wrapper)
        wrapper.append(...notesElement)
    }
}

customElements.define('notes-list', NotesList)
