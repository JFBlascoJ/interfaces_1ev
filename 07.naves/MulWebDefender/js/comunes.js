export const generaNumAleatorioMasProbable = (min, max, maxMasProbable, probabilidad) => {
    probabilidad /= 100;

    if (Math.random() < probabilidad) {
        return Math.floor(Math.random() * (maxMasProbable - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * (max - maxMasProbable) + maxMasProbable + 1);
    }
}