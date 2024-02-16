const buttons = document.querySelectorAll("button");

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const counter = this.parentNode.querySelector('span');
        let count = parseInt(counter.textContent);
        count++;
        counter.textContent = count;
    });
});

