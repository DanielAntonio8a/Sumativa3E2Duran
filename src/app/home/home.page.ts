import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
  // Declara la propiedad newsList como un array vacío o con datos de muestra.
  newsList: any[] = [
    {
      title: 'Campistas desaparecidos',
      description: 'Campistas desaparecidos en el Monte chiliad, 5 campistas de entre 19 – 23 años se encuentran desaparecidos en una de las montañas mas grandes del estado de California, cerca de la ciudad de Hollywood.',
      imageUrl: 'https://www.dojrp.com/uploads/monthly_2019_01/large.20190116151045_1.jpg.352d6fa3b008f95193fa9c04fe450524.jpg',
    },
    {
      title: 'Biografía de iFruit Radio',
      description: 'La radio de música Pop, reguetón y Rock iFruit Radio forma parte de la empresa más grande de producción de teléfonos celulares Fruit, esta radio inicio en el sur de California, a mediados del año 2020, su fama tantos éxitos galardones musicales a llegado a ser una de las radios mas escuchadas por los jóvenes en todo el territorio Estadounidense',
      imageUrl: 'https://media.rockstargames.com/rockstargames-newsite/uploads/a7207de40ffb8ab7509d88eea74964d67417fb10.jpg',
    },  {
      title: 'Feriado de Carnaval en MIAMI',
      description: 'Controversial saber de que las playas del estado de Florida es uno de los sitios mas visitados en todo este feriado de carnaval, esto impulsa a la ciudad de MIAMI - FLORIA a ser una de las ciudades y estados mas importantes de todo el territorio estadounidense',
      imageUrl: 'https://sm.ign.com/ign_latam/news/g/gta-6s-ann/gta-6s-announced-platforms-for-2025-release-date-dont-includ_bhf2.jpg',
    },  {
      title: 'LifeInvader',
      description: 'La red social LifeInvader, esta sacando su nueva actualización que traerá parches y nuevas mejoras tanto en velocidad como en procesos de busqueda, disponible ya el 9 de enero del 2025, ',
      imageUrl: 'data:image/png;base64,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',
    },  {
      title: '¡¡¡¡¡IMPORTANTE!!!!',
      description: 'Programador se rinde por una prueba sumativa y un deber de componentes reutilizables el cual paso toda la noche programando con sus amigos. El que lea esto le tiene que poner 10/10 al que programo esto.',
      imageUrl: 'https://cdn.discordapp.com/attachments/930300541509189633/1195423009662582854/IMG_7005.jpg?ex=65b3ef6f&is=65a17a6f&hm=a737eb26557356f7da2027d70d478a5d97bd01b5601e20bcc048e75e6c77bf80&',
    },  {
      title: 'Huevos de Regalo',
      description: 'Jóvenes realizan amigo secreto entre ellos y uno de ellos decide regalar cascaras de huevos y un supan de $1 a otro estudiante, desde ese momento ya no son amigos….     **SABER MAS**',
      imageUrl: 'https://cdn.discordapp.com/attachments/930300541509189633/1195424569746526208/IMG_6252.jpg?ex=65b3f0e3&is=65a17be3&hm=cf9320d7b712495c3471786d1e8a5547d0a9251d0debff6c741a3d92ca5f40fb&',
    }, 
    // Agrega más noticias según sea necesario
  ];
}
