while (true) {
    const enemy1 = prompt("Nombre del primer enemigo:");
    const dist1 = parseFloat(prompt("Distancia del primer enemigo:"));
    const priority1 = parseInt(prompt("Prioridad del primer enemigo:"), 10);
    
    const enemy2 = prompt("Nombre del segundo enemigo:");
    const dist2 = parseFloat(prompt("Distancia del segundo enemigo:"));
    const priority2 = parseInt(prompt("Prioridad del segundo enemigo:"), 10);
    
    if (priority1 > priority2) {
        console.log(enemy1);
    } else if (priority2 > priority1) {
        console.log(enemy2);
    } else { 
        if (dist1 < dist2) {
            console.log(enemy1);
        } else {
            console.log(enemy2);
        }
    }
}
