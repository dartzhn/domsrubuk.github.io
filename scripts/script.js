let arrows = document.getElementsByClassName('arrow')
let options = document.getElementsByClassName('prmtrs__options')
function openBox(n) {
	options[n].classList.remove("close")
	if (arrows[n].getAttribute("class") == "arrow reverse") {
		options[n].classList.add("close")
		arrows[n].classList.remove("reverse")
	} else {
		arrows[n].classList.add("reverse")
	}
}

arrows[0].setAttribute("onclick", "openBox(0)")
arrows[1].setAttribute("onclick", "openBox(1)")
arrows[2].setAttribute("onclick", "openBox(2)")
arrows[3].setAttribute("onclick", "openBox(3)")

let checkboxes = document.getElementsByClassName("label__checkbox")
let items = document.getElementsByClassName("projects__content")
let button = document.getElementById("prmtrs__button")

let params = []

function addParam(n, param) {
	if (checkboxes[n].checked) {
		params.push(param)
	} else {
		while (params.indexOf(param) != -1) {
			let index = params.indexOf(param)
			params.splice(index, 1)
		}
	}
}

checkboxes[0].setAttribute("onchange", "addParam(0, 'szokolem')")
checkboxes[1].setAttribute("onchange", "addParam(1, 'smansardnoi')")
checkboxes[2].setAttribute("onchange", "addParam(2, '1etag')")
checkboxes[3].setAttribute("onchange", "addParam(3, '2etag')")
checkboxes[4].setAttribute("onchange", "addParam(4, '3etag')")
checkboxes[5].setAttribute("onchange", "addParam(5, '1spalnya')")
checkboxes[6].setAttribute("onchange", "addParam(6, '2spalnya')")
checkboxes[7].setAttribute("onchange", "addParam(7, '3spalnya')")
checkboxes[8].setAttribute("onchange", "addParam(8, '4spalnya')")
checkboxes[9].setAttribute("onchange", "addParam(9, '5plusspalnya')")
checkboxes[10].setAttribute("onchange", "addParam(10, '1garage')")
checkboxes[11].setAttribute("onchange", "addParam(11, '2garage')")
checkboxes[12].setAttribute("onchange", "addParam(12, 'netgarage')")
checkboxes[13].setAttribute("onchange", "addParam(13, 'odnoskatnaya')")
checkboxes[14].setAttribute("onchange", "addParam(14, 'dvuhskatnaya')")
checkboxes[15].setAttribute("onchange", "addParam(15, 'chetirehskatnaya')")
checkboxes[16].setAttribute("onchange", "addParam(16, 'ploskaya')")
checkboxes[17].setAttribute("onchange", "addParam(17, 'mansardnaya')")

let maxSize

button.addEventListener("click", () => {
	if (maxSize != undefined && maxSize != "По умолчанию" && maxSize > 10) {
		params.push(maxSize)
		console.log(params)
	}
	let result = Array.from(items).filter(item => {
		let counter = true
		for (let param of params) {
			if (typeof param == "number" && item.getAttribute("siz") != null) {
				if (!(param > 210)) {
					counter = (Number(item.getAttribute("siz")) < param)
				} else {
					counter = (Number(item.getAttribute("siz")) > param)
				}
				if (counter == null || counter == false) return false
			} else {
				counter = (item.getAttribute(param))
				if (counter == null) return false
			}
		}
	    return true
	})


	let notFound = document.getElementById('projects__notfound')
    if (result.length != 0) {
		notFound.style.display = 'none'
		if (params.length > 0) {
			for (let i of Array.from(items)) {
				for (let r of result) {
					i.style.display = "none"
					r.style.display = "block"
				}
			}
		} else {
			for (let i of items) {
				i.style.display = "block"
			}
		}
	} else {
		for (let i of items) {
			i.style.display = "none"
		}
		notFound.style.display = 'block'
	}
 })