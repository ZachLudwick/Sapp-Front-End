// Start download buttons

let userAgent = navigator.appVersion;
let domain = "sapp-app.tk"

let osDetails = {
    name: 'Error',
    downloadUrl: 'https://' + domain
};

if(userAgent.includes('Macintosh')) {
    osDetails.name = 'Mac'
    osDetails.downloadUrl = 'apple.com'
}

if(userAgent.includes('Windows')) {
    osDetails.name = 'Windows'
    osDetails.downloadUrl = 'windows.com'
}

if(userAgent.includes('Linux')) {
    osDetails.name = 'Linux'
    osDetails.downloadUrl = 'linux.com'
}

if(userAgent.includes('iPhone')) {
    osDetails.name = 'iPhone'
    osDetails.downloadUrl = 'iphone.com'
}

if(userAgent.includes('iPad')) {
    osDetails.name = 'iPad'
    osDetails.downloadUrl = 'ipad.com'
}

if(userAgent.includes('iPod')) {
    osDetails.name = 'iPod'
    osDetails.downloadUrl = 'ipod.com'
}
if(userAgent.includes('Android')) {
    osDetails.name = 'Android'
    osDetails.downloadUrl = 'android.com'
}

osDownloadButton(osDetails);

function osDownloadButton(osDetails) {
    console.log(osDetails.name)

    document.getElementById('download_button_group').innerHTML = '<a href=' + osDetails.downloadUrl + ' class="btn btn-large btn-light" id="btn-download-os">' +
        '<i class="bx bx-download"></i> Download for ' + osDetails.name + '</a>' +
        '              <a href="#" class="btn btn-large btn-dark">\n' +
        '                    Open Sapp in your browser\n' +
        '                </a>'

    document.getElementById('btn-download-os-footer').innerHTML = '<a href="'+ osDetails.downloadUrl +'" class="btn btn-large btn-brand">\n' +
        '                <i class="bx bx-download"></i> Download for ' + osDetails.name +
        '            </a>'

}

// End Download buttons

function mobileNav() {

    document.getElementById('nav-list').style.display = "block";
    document.getElementById('close-nav-button').style.display = "block";
    document.getElementById('open-nav-button').style.display = "none";
}

function closeMobileNav() {

    document.getElementById('nav-list').style.display = "none";
    document.getElementById('close-nav-button').style.display = "none";
    document.getElementById('open-nav-button').style.display = "block";
}

// Start backend auth

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in...
        if (user != null) {
            document.getElementById('authButton-type-filler').style.display = "none";
            document.getElementById('authButton-type-login').style.display = "none";
            document.getElementById('authButton-type-open').style.display = "block";
        }
    } else {
        // User isn't signed in.
        document.getElementById('authButton-type-filler').style.display = "none";
        document.getElementById('authButton-type-login').style.display = "block";
        document.getElementById('authButton-type-open').style.display = "none";

    }
});

function open() {

}