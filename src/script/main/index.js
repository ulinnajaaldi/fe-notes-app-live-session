const main = () => {
    const blogs = [
        {
            id: 1,
            title: 'Cara Memulai Belajar Pemrograman',
            body: 'Panduan untuk pemula yang ingin memulai belajar pemrograman.',
        },
        {
            id: 2,
            title: 'Tips Efektif dalam Pengembangan Web',
            body: 'Tips dan trik untuk menjadi pengembang web yang lebih baik.',
        },
        {
            id: 3,
            title: 'Mengenal Konsep Web Component',
            body: 'Pengenalan singkat tentang Web Component dan komponen-komponennya.',
        },
        {
            id: 4,
            title: 'Mengenal Konsep React.js',
            body: 'Pengenalan singkat tentang React.js dan komponen-komponennya.',
        },
        {
            id: 5,
            title: 'Panduan Penggunaan Vue.js',
            body: 'Pengenalan singkat tentang Vue.js dan komponen-komponennya.',
        },
        {
            id: 6,
            title: 'Belajar Bahasa Pemrograman Python',
            body: 'Cara mudah memulai belajar bahasa pemrograman Python.',
        },
    ]

    const notesListElement = document.querySelector('notes-list')
    notesListElement.setNotesList(blogs)

    const FormElement = document.querySelector('#form-notes')
    const TitleElement = document.querySelector('#form-title')
    const ContentElement = document.querySelector('#form-content')

    FormElement.addEventListener('submit', (e) => {
        e.preventDefault()

        console.log({
            title: TitleElement.value,
            body: ContentElement.value,
        })
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
