import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

import main from './main/index.js'
import './components/notes-item.js'
import './components/notes-item-archive.js'
import './components/notes-list.js'
import './components/notes-list-archive.js'
import './components/notes-form.js'
import './components/text-title.js'
import '../../dist/output.css'

document.addEventListener('DOMContentLoaded', () => {
    main()
    Toastify()
})
