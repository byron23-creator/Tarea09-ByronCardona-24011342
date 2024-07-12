while (true) {
    const enemy1 = prompt("Nombre del primer enemigo:");
    const dist1 = parseFloat(prompt("Distancia del primer enemigo:"));
    
    const enemy2 = prompt("Nombre del segundo enemigo:");
    const dist2 = parseFloat(prompt("Distancia del segundo enemigo:"));
    
    if (dist1 < dist2) {
        console.log(enemy1);
    } else {
        console.log(enemy2);
    }
}
