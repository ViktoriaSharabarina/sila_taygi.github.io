console.log("Скрипт подключен!"); 

document.querySelectorAll('.description__link').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Клик на ссылку:", this.textContent); 
    });
});

window.sectionsData = {
    'section1': {
        title: 'Панель управлеиня',
        text: 'Во вкладке «Панель управления» отображается актуальная информация для HR–специалиста в виде 6 карточек, в каждой из которых содержится важная информация',
        image: "photo/our_site/1Панель управления.png"
    },
    'section2': {
        title: "Сотрудники",
        text: 'Раздел содержит информацию по всем сотрудникам системы, который также содержит 3 вкладки, поиск и 2 кнопки',
        image: "photo/our_site/2Сотрудники.png"
    },
    'section3': {
        title: 'Отделы',
        text: 'В этом разделе создаётся иерархическая структура компании, также можно изменять привязку сотрудников с помощью Drag-and-Drop',
        image: 'photo/our_site/3Отделы.png'
    },
    'section4': {
        title: 'ИИ-аналитика',
        text: 'Данный раздел содержит интеллектуальный анализ данных о персонале и организационной структуре',
        image: 'photo/our_site/4ИИ-аналитика.png'
    },
    'section5': {
        title: 'Заявки',
        text: 'С помощью этого раздела есть возможность управлять заявками и мониторить их',
        image: 'photo/our_site/5Заявки.png'
    },
    'section6': {
        title: 'Настройки',
        text: 'Данный раздел позволяет управлять настройками профиля и системы',
        image: 'photo/our_site/6Настройки.png'
    }
}

document.querySelectorAll('.description__link').forEach(link => {
    link.addEventListener('click', async function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const dynamicText = document.getElementById('dynamic-text');
        const dynamicImage = document.getElementById('dynamic-image');
        
        if (!window.sectionsData[sectionId]) {
            console.error(`Раздел "${sectionId}" не найден`);
            return;
        }

        dynamicText.classList.add('hidden');
        dynamicImage.classList.add('hidden');

        await new Promise(resolve => setTimeout(resolve, 300));

        const section = window.sectionsData[sectionId];
        dynamicText.innerHTML = `
            <h3>${section.title}</h3>
            <p>${section.text}</p>
        `;
        dynamicImage.src = section.image;
        dynamicImage.alt = section.title;

        dynamicText.classList.remove('hidden');
        dynamicImage.classList.remove('hidden');
    });
});