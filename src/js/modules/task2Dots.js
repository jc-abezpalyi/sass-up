const parentContainer = document.querySelector('.task-2')
const createDots = () => {
        for(let i=0; i<parentContainer.dataset.qty ; i++){
            parentContainer.appendChild(document.createElement('div'))
        }
       [...parentContainer.childNodes].map((el,index) => el.classList=`dot dot-${index+1}`)
}

export default createDots