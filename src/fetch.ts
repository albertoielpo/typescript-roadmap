async function t() {
    // fetch("http://ielpo.net:3000/rate")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => console.error(err));

    const res = await fetch("http://ielpo.net:3000/rate", {
        method: "GET",
        headers: {
            accept: "application/json"
        }
    });
    console.log(`status code: ${res.status}`);
    const data = await res.json();
    console.log(data);
}

(async () => {
    const res = await fetch("http://ielpo.net:3000/rate", {
        method: "GET",
        headers: {
            accept: "application/json"
        }
    });
    console.log(`status code: ${res.status}`);
    const data = await res.json();
    console.log(`rate: ${data.rate}`);
    let id = 1;
    if (Number(data.rate) > 1.5) {
        id = 2;
    }

    const res2 = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        }
    );
    console.log(`status code: ${res2.status}`);
    const data2 = await res2.json();
    console.log(data2);
})();
