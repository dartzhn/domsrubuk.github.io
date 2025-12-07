/*Кнопка написать нам*/
const writeUsButton = document.querySelector('.head__button')
writeUsButton.setAttribute('onclick', 'writeUsWindow.open()')
let section = document.querySelector('section')

function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal">
            <div class="modal__overlay">
                <div class="modal__window">
                    <div class="modal__header">
                        <span class="modal__title">Оставьте ваше сообщение</span>
                        <span id="modal__close" onclick="writeUsWindow.close()">&times;</span> <!--&times; = x -->
                    </div>
                    <div class="modal__body">
                        <p>
                            Напишите нам в Instagram, Whatsapp или на почту. Мы постараемся ответить на ваши вопросы в максимально короткие сроки
                        </p>
                    </div>
                    <div class="modal__footer">
                        <div id="modal__button" onclick="writeUsWindow.ok()">
                            <p>Ok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    section.appendChild(modal)
    return modal
}

function modal(options) {
    const $modal = _createModal(options)
    const animationSpeed = 200
    let closing = false
    return {
        open() {
            if (!closing) {
                $modal.classList.add('open')
            }
        },
        close () {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, animationSpeed)
            closing = false
        },
        ok() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            /*something else*/
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, animationSpeed)
            closing = false
        }
    }
}

const writeUsWindow = modal()
/*модальное окно конец*/