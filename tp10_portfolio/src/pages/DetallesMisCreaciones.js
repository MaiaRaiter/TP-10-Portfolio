//En el detalle de Mis Creaciones, mostrar el detalle de la creación, y la posibilidad de agregar o quitarlo de favoritos. En caso de que no este en favoritos, no mostrar el quitar, caso contrario si.

import React from 'react'

export default function DetallesMisCreaciones (creacion)  {
  console.log("creacion");
 
  return (
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">{creacion.titulo}</span></h1>
    </div>
  )
}