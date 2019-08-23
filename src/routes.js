import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const UsersUpload = React.lazy(() => import('./views/Users/UsuariosUpload'));
const Productos = React.lazy(() => import('./views/Productos/Productos'));
const Producto = React.lazy(() => import('./views/Productos/Producto'));
const ProductosUpload = React.lazy(() => import('./views/Productos/ProductosUpload'));
const Clientes = React.lazy(() => import('./views/Clientes/Clientes'));
const Cliente = React.lazy(() => import('./views/Clientes/Cliente'));
const ClientesUpload = React.lazy(() => import('./views/Clientes/ClientesUpload'));

const BuscarCliente = React.lazy(() => import('./views/Ordenes/BuscarCliente'));
const OrdenInicio = React.lazy(() => import('./views/Ordenes/OrdenInicio'));
const OrdenCarrito = React.lazy(() => import('./views/Ordenes/OrdenCarrito'));
const BuscarProducto = React.lazy(() => import('./views/Ordenes/BuscarProducto'));
const OrdenDetalle = React.lazy(() => import('./views/Ordenes/OrdenDetalle'));

const ConsultaOrden = React.lazy(() => import('./views/Aprobaciones/ConsultaOrden'));
const AprobacionOrden = React.lazy(() => import('./views/Aprobaciones/AprobacionesDesaprobaciones'));
const ListaOrdenes = React.lazy(() => import('./views/Aprobaciones/ListaOrdenes'));

const ConsultaOrdenPromo = React.lazy(() => import('./views/Promociones/ConsultaOrdenPromo'));
const AprobacionOrdenPromo = React.lazy(() => import('./views/Promociones/AprobacionesDesaprobacionesPromo'));
const ListaOrdenesPromo = React.lazy(() => import('./views/Promociones/ListaOrdenesPromo'));

const ListaOCS = React.lazy(() => import('./views/Exportacion/ListaOCS'));
const DetalleOCS = React.lazy(() => import('./views/Exportacion/DetalleOCS'));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Inicio', component: Dashboard },
  { path: '/theme', exact: true, name: 'Catálogos', component: Colors },
  { path: '/theme/colors', name: 'Cargas Masivas', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Ordenes', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Usuarios', component: Users },
  { path: '/users/Upload', exact: true,  name: 'Carga de Usuarios', component: UsersUpload },
  { path: '/users/:id', exact: true, name: 'Detalles de Usuario', component: User },
  { path: '/productos', exact: true,  name: 'Productos', component: Productos },
  { path: '/productos/Upload', exact: true,  name: 'Carga de Productos', component: ProductosUpload },
  { path: '/productos/:id', exact: true, name: 'Detalles de Producto', component: Producto },
  { path: '/clientes', exact: true,  name: 'Clientes', component: Clientes },
  { path: '/clientes/Upload', exact: true, name: 'Carga de Clientes', component: ClientesUpload },
  { path: '/clientes/:id', exact: true, name: 'Detalles del Cliente', component: Cliente },
  { path: '/ordenes/nueva-orden', exact: true, name: 'Creación de Orden', component: BuscarCliente },
  { path: '/ordenes/orden-inicio/:ordenObj', exact: true, name: 'Registro Orden de Compra', component: OrdenInicio },
  { path: '/ordenes/buscar-producto/:ordenObj', exact: true, name: 'Buscar Producto', component: BuscarProducto },
  { path: '/ordenes/orden-carrito', exact: true, name: 'Orden Carrito', component: OrdenCarrito },
  { path: '/ordenes/orden-detalle', exact: true, name: 'Detalle de la Orden', component: OrdenDetalle },
  { path: '/aprobaciones/consulta-orden', exact: true, name: 'Detalle de la Orden', component: ConsultaOrden },
  { path: '/aprobaciones/aprobacion-orden', exact: true, name: 'Detalle de la Orden', component: AprobacionOrden },
  { path: '/aprobaciones/lista-ordenes', exact: true, name: 'Detalle de la Orden', component: ListaOrdenes },
  { path: '/promociones/consulta-orden', exact: true, name: 'Detalle de la Orden', component: ConsultaOrdenPromo },
  { path: '/promociones/aprobacion-ordenPromo', exact: true, name: 'Detalle de la Orden', component: AprobacionOrdenPromo },
  { path: '/promociones/lista-ordenesPromo', exact: true, name: 'Detalle de la Orden', component: ListaOrdenesPromo },
  { path: '/exportacion/lista-ocs', exact: true, name: 'Detalle de la Orden', component: ListaOCS },
  { path: '/exportacion/detalle-ocs', exact: true, name: 'Detalle de la Orden', component: DetalleOCS },
];

export default routes;
