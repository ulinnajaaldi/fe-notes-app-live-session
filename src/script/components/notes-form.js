class NotesForm extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
             <form
        id="form-notes"
        class="flex flex-col items-center justify-center my-10 group"
      >
      <div class="w-[70vh] relative group-hover:drop-shadow-md bg-white rounded-lg transition-all duration-300 ease-in-out">
          <div
            class="border border-b-0 w-full pt-3 px-4 pb-0 rounded-lg rounded-b-none"
          >
            <label class="sr-only">Title</label>
            <input
              id="form-title"
              name="form-title"
              type="text"
              class="focus:outline-none w-full border-b text-sm pb-1 border-neutral-200"
              placeholder="Judul"
              minlength="3"
              autocomplete="off"
              required
              aria-describedby="title-error-message"
            />
            <p
              id="title-error-message"
              class="text-xs text-red-500 text-center"
            ></p>
          </div>
          <div
            class="border border-t-0 w-full py-3 px-4 rounded-lg rounded-t-none"
          >
            <label class="sr-only">Content</label>
            <textarea
              id="form-content"
              name="form-content"
              class="focus:outline-none w-full border-b text-sm pb-1 border-neutral-200"
              placeholder="Isi catatan disini.."
              rows="3"
              minlength="3"
              autocomplete="off"
              required
              aria-describedby="content-error-message"
            ></textarea>
            <p
              id="content-error-message"
              class="text-xs text-red-500 text-center"
            ></p>
          </div>
          <button
            type="submit"
            class="border rounded-full p-2 absolute bottom-0 -right-2 bg-white"
          >
            <img src="plus.svg" alt="ico-plus" />
          </button>
          </div>
      </form>
            `
    }
}

customElements.define('notes-form', NotesForm)
