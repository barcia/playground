import BrowserDOM from 'browserdom';

const myBrowserDOM = new BrowserDOM();

const url = {
    appStore: "https://apps.apple.com/es/app/opositatest/id1182367247",
    playStore: "https://play.google.com/store/apps/details?id=com.opositatest"
}

switch(myBrowserDOM.get().os.name) {
    case 'macos':
        console.log("Es un mac");
        showFallback();
        break;

    case 'ios':
        console.log("Es un iPhone");
        location = url.appStore
        break;

    case 'android':
        console.log("Es un Android");
        location = url.playStore
        break;

    default:
        console.log("No sé lo que es");
        showFallback();
        break;
    }


function showFallback() {
    document.addEventListener("DOMContentLoaded", function() {
        const app = document.querySelector('#app');
        const linkAppStore = document.querySelector('#link-appstore');
        const linkPlayStore = document.querySelector('#link-playstore');

        linkAppStore.href = url.appStore
        linkPlayStore.href = url.playStore
        app.hidden = false;
    })
}
