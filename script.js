function switchTab(tabName) {
    // Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('block');
        content.classList.add('hidden');
    });

    // Tampilkan tab yang dipilih
    const activeTab = document.getElementById(`tab-${tabName}`);
    if (activeTab) {
        activeTab.classList.remove('hidden');
        activeTab.classList.add('block');
    }

    // Ubah styling tombol navbar aktif
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-emerald-500', 'text-slate-900');
        btn.classList.add('text-slate-300', 'hover:bg-slate-700');
    });

    // Tambah gaya aktif ke tombol yang diklik
    const clickedBtn = event.currentTarget;
    clickedBtn.classList.remove('text-slate-300', 'hover:bg-slate-700');
    clickedBtn.classList.add('bg-emerald-500', 'text-slate-900');
}