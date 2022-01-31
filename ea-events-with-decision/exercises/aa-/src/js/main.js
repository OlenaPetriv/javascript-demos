export function demo() {
    
//TODO: Put your solution here.

const featureLink=document.querySelector ('p.city-intro>a');
function featureLinkHandler (e){
    e.preventDefault();

    let featureImage = document.querySelector ('img.feature');

    featureImage.src = e.target.href;

    featureImage.classList.remove('hidden')
}

featureLink.addEventListener ('click', featureLinkHandler);

}
