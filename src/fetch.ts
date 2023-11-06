(() => {
    fetch("http://ielpo.net:3000/rate")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
})();
