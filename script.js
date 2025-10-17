
const form = document.getElementById('venteForm');
const historique = document.getElementById('historique');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const produit = form.produit.value;
    const quantite = form.quantite.value;
    const prix = form.prix.value;
    const dateVente = form.dateVente.value;

    const item = document.createElement('li');
    item.textContent = `${dateVente} - ${produit} : ${quantite} pcs à ${prix} GNF`;
    historique.appendChild(item);

    form.reset();
});
