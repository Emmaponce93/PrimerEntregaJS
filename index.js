function calcularIVA(monto, tasaIVA = 0.21) {
    if (isNaN(monto) || monto <= 0) {
        console.error('no valido.');
        return;
    }

    const iva = monto * tasaIVA;
    const total = monto + iva;
//resultado en la consola, aca estube 30 min  jajaj 
    console.log(`Monto sin IVA: ${monto.toFixed(2)}€`);
    console.log(`IVA (${(tasaIVA * 100).toFixed(0)}%): ${iva.toFixed(2)}€`);
    console.log(`Total con IVA: ${total.toFixed(2)}€`);
}

// Maneja el evento de envío del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('iva-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // evita que se chingue importante mucho muy 

        const monto = parseFloat(document.getElementById('monto').value);
        calcularIVA(monto);
    });
});