function calendar(){
    document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let date = new Date();

    const renderCalendar = () => {
        daysContainer.innerHTML = '';
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        
        monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${currentYear}`;

        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let x = firstDayIndex; x > 0; x--) {
            daysContainer.innerHTML += `<div class="prev-date"></div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
                daysContainer.innerHTML += `<div class="today">${i}</div>`;
            } else {
                daysContainer.innerHTML += `<div>${i}</div>`;
            }
        }
    };

    prevButton.addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
}
calendar();