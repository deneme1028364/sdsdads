// Giriş ekranı 3 saniye sonra kaybolacak ve ana içerik görünecek
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('channels').style.display = 'block';
}, 3000);

// Sidebar açma/kapama
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

// Kanal seçimi
function showChannel(channel) {
    const channels = document.querySelectorAll('.channel');
    channels.forEach(channel => {
        channel.style.display = 'none';
    });

    document.getElementById('channel-' + channel).style.display = 'block';

    // Sidebar'da "Programmer By: BLODWHITE" yazısı sadece sidebar açıldığında görünsün
    if (channel === 'main') {
        document.getElementById('sidebar-title').innerText = 'Programmer by BLODWHITE';
    } else {
        document.getElementById('sidebar-title').innerText = '';
    }
}

// Kullanıcı ismi
const username = prompt('Lütfen isminizi girin:');
document.getElementById('username').innerText = username;