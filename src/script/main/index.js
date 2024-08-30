import toastify from 'toastify-js'

const main = () => {
    const BASE_URL = 'https://notes-api.dicoding.dev/v2'

    const getActiveNotes = async () => {
        try {
            const response = await fetch(`${BASE_URL}/notes`)
            const results = await response.json()
            const notesListElement = document.querySelector('notes-list')
            notesListElement.setNotesList(results.data)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    const getArchiveNotes = async () => {
        try {
            const response = await fetch(`${BASE_URL}/notes/archived`)
            const results = await response.json()
            const notesListArchiveElement =
                document.querySelector('notes-list-archive')
            notesListArchiveElement.setNotesList(results.data)
        } catch (error) {
            console.log(error)
        } finally {
        }
    }

    getActiveNotes()
    getArchiveNotes()

    const FormElement = document.querySelector('#form-notes')
    const TitleElement = document.querySelector('#form-title')
    const ContentElement = document.querySelector('#form-content')

    FormElement.addEventListener('submit', async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${BASE_URL}/notes`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: `${TitleElement.value}`,
                    body: `${ContentElement.value}`,
                }),
            })

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
        } finally {
            window.location.reload()
        }
    })

    const customValidationTitleHandler = (event) => {
        event.target.setCustomValidity('')

        if (event.target.validity.valueMissing) {
            event.target.setCustomValidity('Title wajib diisi')
            TitleElement.classList.add('border-red-500')
            return
        }

        if (event.target.validity.tooShort) {
            event.target.setCustomValidity(
                'Minimal panjang adalah enam karakter'
            )
            TitleElement.classList.add('border-red-500')
            return
        }

        if (event.target.validity.valid) {
            TitleElement.classList.remove('border-red-500')
            return
        }
    }

    const customValidationContentHandler = (event) => {
        event.target.setCustomValidity('')

        if (event.target.validity.valueMissing) {
            event.target.setCustomValidity('Title wajib diisi')
            ContentElement.classList.add('border-red-500')
            return
        }

        if (event.target.validity.tooShort) {
            event.target.setCustomValidity(
                'Minimal panjang adalah enam karakter'
            )
            ContentElement.classList.add('border-red-500')
            return
        }

        if (event.target.validity.valid) {
            ContentElement.classList.remove('border-red-500')
            return
        }
    }

    const errorMessage = (event) => {
        // Validate the field
        const isValid = event.target.validity.valid
        const errorMessage = event.target.validationMessage

        const connectedValidationId =
            event.target.getAttribute('aria-describedby')
        const connectedValidationEl = connectedValidationId
            ? document.getElementById(connectedValidationId)
            : null

        if (connectedValidationEl && errorMessage && !isValid) {
            connectedValidationEl.innerText = errorMessage
        } else {
            connectedValidationEl.innerText = ''
        }
    }

    TitleElement.addEventListener('change', customValidationTitleHandler)
    TitleElement.addEventListener('invalid', customValidationTitleHandler)
    TitleElement.addEventListener('blur', errorMessage)
    ContentElement.addEventListener('change', customValidationContentHandler)
    ContentElement.addEventListener('invalid', customValidationContentHandler)
    ContentElement.addEventListener('blur', errorMessage)
}

export default main
