const parentContainer = document.querySelector('.task-3')
const createStars = () => {
        for(let i=0; i<parentContainer.dataset.qty ; i++){
            parentContainer.appendChild(document.createElement('div'))
        }
       [...parentContainer.childNodes].map((el,index) => el.classList=`star star-${index+1}`)
}

export default createStars