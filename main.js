function loadAssetsElement(htmlAsset, targetElement) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', htmlAsset, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(targetElement).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadAssetsElement('Templates/footer.html','footerLocker')
loadAssetsElement('Templates/header.html','navBarra')