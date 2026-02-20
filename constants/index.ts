import { servidores, wiriless, cibersegurança, redes, suporte, cctv} from "@/public";

/**
 * An array of navigation items, each with an id, title, and href.
 * These items are used to build the main navigation menu of the application.
 */
export const navigationItems = [
   {
      id: 1,
      title: 'Inicio',
      href: '/'
   },
   {
      id: 2,
      title: 'Serviços',
      href: '/#Servicos'
   },
   {
      id: 3,
      title: 'CCTV',
      href: '/#CCTV'
   },
   {
      id: 4,
      title: 'Redes',
      href: '/#Redes'
   },
   
   {
      id: 5,
      title: 'Porquê Nós',
      href: '/#PorqueNos'
   },
   {
      id: 6,
      title: 'Sobre Nós',
      href: '/sobre'
   },
   {
      id: 7,
      title: 'Contacto',
      href: '/#Contacto&Mapa'
   }
];


export const logoMarqueeItems = [
   {
      id: 1,
      src: wiriless
   },
   {
      id: 2,
      src: servidores
   },
   {
      id: 3,
      src: cibersegurança
   },
   {
      id: 4,
      src: redes
   },
   {
      id: 5,
      src: suporte
   },
   {
      id: 6,
      src: cctv
   }
];
