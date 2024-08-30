import toastify from 'toastify-js'

class NotesItemArchive extends HTMLElement {
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
          <div class="border rounded-lg p-3 relative group bg-white min-h-20">
                    <h2 class="text-xl font-semibold">${this._note.title}</h2>
                    <p class="text-base leading-6">${this._note.body}</p>
                    <div class="mt-2 flex justify-end gap-1">
                        <button
                        id="unarchive"
                            class="bg-blue-600 rounded-md hover:bg-blue-500 p-2 transition-all duration-300"
                        >
                            <img
                                src='unarchive.svg'
                                alt='unarchive-icon'
                                class="size-4 text-white"
                            />
                        </button>
                        <button
                        id="delete"
                            class="bg-red-600 rounded-md hover:bg-red-500 p-2 transition-all duration-300"
                        >
                            <img
                                src="trash.svg"
                                alt="ico-trash"
                                class="size-4"
                            />
                        </button>
                    </div>
                </div>
          `

        this.querySelector('#unarchive').addEventListener('click', async () => {
            try {
                const response = await fetch(
                    `https://notes-api.dicoding.dev/v2/notes/${this._note.id}/unarchive`,
                    {
                        method: 'POST',
                    }
                )
                const results = await response.json()
                toastify({
                    text: results.message,

                    duration: 3000,
                }).showToast()
            } catch (error) {
                toastify({
                    text: error.message,

                    duration: 3000,
                }).showToast()
            }
            return
        })

        this.querySelector('#delete').addEventListener('click', async () => {
            try {
                const response = await fetch(
                    `https://notes-api.dicoding.dev/v2/notes/${this._note.id}`,
                    {
                        method: 'DELETE',
                    }
                )
                const results = await response.json()
                toastify({
                    text: results.message,

                    duration: 3000,
                }).showToast()
            } catch (error) {
                toastify({
                    text: error.message,

                    duration: 3000,
                }).showToast()
            }
            return
        })
    }
}

customElements.define('notes-item-archive', NotesItemArchive)
