 function atualizarBanner() {
        const banner = document.getElementById('banner-image');
        const imagemMobile = 'https://prodmminsights.blob.core.windows.net/prod-backend-landingpages-media/landingpages/imgs/fundo-2_6.png';
        const imagemDesktop = 'https://prodmminsights.blob.core.windows.net/prod-backend-landingpages-media/landingpages/background_image/fundo-2_3.png';

        if (!banner) {
            console.warn('Elemento #banner-image não foi encontrado na página.');
            return;
        }

        if (window.innerWidth < 600) {
            if (banner.src !== imagemMobile) {
                banner.src = imagemMobile;
            }
        } else {
            if (banner.src !== imagemDesktop) {
                banner.src = imagemDesktop;
            }
        }
    }

    document.addEventListener('DOMContentLoaded', atualizarBanner);
    window.addEventListener('resize', atualizarBanner);

       document.querySelectorAll('a[href="#duvidas-frequentes"]').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });
