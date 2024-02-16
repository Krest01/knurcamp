function dupa(milisekundy)
{
    const i = Math.random() * milisekundy;
    if (i >= 2500) {
        return true;
    }
    else{return false};
}

async function spanko(milisekundy) { 
    return new Promise((resolve, reject) => {
        if (dupa(milisekundy)){resolve("fajna dupa");}
        reject("obrzydliwe dupsko");
    });
}

async function malpiFetch(method, url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            console.log(req.responseText);
        }
    })
};

const spankoo = spanko(5000).then(value => {
    console.log(value);
})
.catch(err => {
    console.log(err);
})

malpiFetch("GET", "https://api.kanye.rest");

