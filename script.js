let button = document.querySelector("#btn");
    let count = document.querySelector("#count");

    let counter = 0;

    count.textContent = counter;

    const handleIncrement = () => {
        counter++;
        count.textContent = Number(count.textContent) + 1;
    };