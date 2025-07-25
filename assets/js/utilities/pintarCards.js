const pintarCards = (
  sectionHtml,
  propiedades = [],
  cantidadCards = propiedades.length
) => {
  let html = "";

  for (let i = 0; i < cantidadCards; i++) {
    const propiedad = propiedades[i];

    //  Condicional para Fumar
    let fumarTxt = "";
    let fumarClase = "";
    let fumarIcono = "";

    if (propiedad.smoking) {
      fumarTxt = "Sí se puede fumar";
      fumarClase = "text-success";
      fumarIcono = "fa-smoking";
    } else {
      fumarTxt = "No se puede fumar";
      fumarClase = "text-danger";
      fumarIcono = "fa-smoking-ban";
    }

    // Condicional para Mascotas
    let mascotaTxt = "";
    let mascotaClase = "";
    let mascotaIcono = "";

    if (propiedad.pets) {
      mascotaTxt = "Se admiten mascotas";
      mascotaClase = "text-success";
      mascotaIcono = "fa-paw";
    } else {
      mascotaTxt = "No se admiten mascotas";
      mascotaClase = "text-danger";
      mascotaIcono = "fa-ban";
    }

    html += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
        <div class="card-body">
          <h5 class="card-title">${propiedad.title}</h5>
          <p class="card-text">${propiedad.description}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
          <p class="${fumarClase}">
            <i class="fas ${fumarIcono}"></i> ${fumarTxt}
          </p>
          <p class="${mascotaClase}">
            <i class="fas ${mascotaIcono}"></i> ${mascotaTxt}
          </p>
        </div>
      </div>
    </div>
    `;
  }

  sectionHtml.innerHTML = html;
};

export default pintarCards;