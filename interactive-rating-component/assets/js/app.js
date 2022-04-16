const rateButtons = document.querySelectorAll('.rate button')
const submitButton = document.querySelector('.submit button')

// add events to rate buttons
for (const element of rateButtons) {
  element.addEventListener('click', () => {
    const rateButtonActive = document.querySelector('.active-rate-button')

    if (rateButtonActive) {
      rateButtonActive.classList.remove('active-rate-button')
    }

    element.classList.toggle('active-rate-button')
  })
}

// add event to submit button
if (submitButton) {
  submitButton.addEventListener('click', () => {
    const rateButtonActive = document.querySelector('.active-rate-button')

    if (!rateButtonActive) {
      document.querySelector('.invalid-submit').classList.add('show')
      console.log('show')
    } else {
      window.location.href =
        'http://127.0.0.1:5500/interactive-rating-component/thanks.html?note=' +
        rateButtonActive.innerHTML
    }
  })
}

const rateNote = document.querySelector('.rate-message .rate-note')
if (rateNote) {
  const note = window.location.search.substring(6)
  rateNote.innerHTML = note
  console.log(note)
}
