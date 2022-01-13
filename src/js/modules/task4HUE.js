
const parentContainer = document.querySelector('.task-4')
const dotsHue = () => {
        for(let i=0; i<parentContainer.dataset.qty ; i++){
            parentContainer.appendChild(document.createElement('div'))
        }
       [...parentContainer.childNodes].map((el,index) => el.classList=`hue hue-color-${index+1}`)
}

export default dotsHue