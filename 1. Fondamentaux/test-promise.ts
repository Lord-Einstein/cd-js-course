async function superAsync(name: string) {
    console.log(`Init de ${name}`);

    return new Promise<void>((resolve, reject) => {
        console.log(`Start de ${name}`);

        setTimeout(() => {
            console.log(`Fin ${name}`);
            resolve();
        }, 3000);
    });
}

async function main() {
    
    const promiseYes = superAsync("Yes");
    console.log("Autre promise");
    superAsync("Noo");
    await promiseYes;

}

main();