const parentContainer = document.querySelector('.balls-container')
const randomBalls = () => {
        for(let i=0; i<parentContainer.dataset.qty ; i++){
            parentContainer.appendChild(document.createElement('div'))
        }
       [...parentContainer.childNodes].map((el,index) => el.classList=`ball ball-${index+1}`)
}

export default randomBalls