

const btn = document.getElementById('arrow-btn');

btn?.addEventListener('click', handleBtnClick)
 
function handleBtnClick(event) {
    console.log('event', event);
}
 
function changeFunc(event) {

    console.log('event', event.target.value);

}
 
 