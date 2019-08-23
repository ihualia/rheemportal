export default {
  items: [
    {
      name: 'Inicio',
      url: '/dashboard',
      icon: 'icon-speedometer',
      /*badge: {
        variant: 'info',
        text: 'NEW',
      },*/
    },
    {
      title: true,
      name: 'Catálogos',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Usuarios',
      url: '/users',
      icon: 'icon-people',
    },
    {
      name: 'Productos',
      url: '/productos',
      icon: 'cui-tags',
    },
    {
      name: 'Clientes',
      url: '/clientes',
      icon: 'icon-briefcase',
    },
    {
      title: true,
      name: 'Administración de Ventas',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Ordenes',
      url: '/ordenes/nueva-orden',
      icon: 'cui-cart',
    },
    {
      name: 'aprobaciones credito',
      url: '/aprobaciones/consulta-orden',
      icon: 'cui-cart',
    },
    {
      name: 'aprobaciones promos',
      url: '/promociones/consulta-orden',
      icon: 'cui-cart',
    },
    {
      name: 'exportacion ocs',
      url: '/exportacion/lista-ocs',
      icon: 'cui-cart',
    },
    {
      divider: true,
    }
  ],
};
