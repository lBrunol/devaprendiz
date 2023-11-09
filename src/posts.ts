const fakePosts = [
  {
    id: 1,
    type: 'Carreira',
    slug: 'falando-sobre-carreira',
    typeColor: '#2ecc71',
    date: '10 de janeiro de 2023',
    title: 'Falando sobre carreira',
    excerpt:
      'Bora falar um pouco sobre o vagas, momento do mercado e iniciação na carreira de desenvolvedor',
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium magna in ex cursus molestie vestibulum auctor purus. Morbi a diam id magna tempus tincidunt ac id odio. Suspendisse a condimentum nibh. Suspendisse potenti. Sed tristique elit ac dignissim porttitor. Suspendisse rhoncus turpis et ante dictum, et faucibus nunc vehicula. Sed at commodo magna. Nulla varius, orci sit amet bibendum vehicula, quam ligula vehicula ante, sit amet hendrerit arcu lectus nec risus. Duis id est non nulla dignissim pulvinar id vitae tortor. Praesent eu ligula sed tellus placerat lobortis non sed nibh.</p><p>Nullam quis magna et lectus tempus commodo. Aenean sed diam imperdiet, faucibus arcu sed, vehicula felis. Proin interdum viverra nunc nec efficitur. Nam ac luctus est, et hendrerit eros. Donec eu pretium metus. Aenean enim quam, suscipit ut nibh ut, tempor aliquam nunc. Donec a gravida elit.</p><p>Nunc in risus pellentesque, tincidunt nisi sit amet, porttitor sem. Vestibulum tincidunt sem odio, vel placerat nunc dignissim ut. Nullam vel ante at nisl malesuada laoreet sed a erat. Pellentesque dictum mattis sagittis. Proin maximus pellentesque sodales. Sed venenatis tempus lorem vitae consequat. Nullam faucibus vulputate diam aliquet elementum. Maecenas ex leo, consectetur et urna ac, iaculis ultrices justo. Nullam et massa vulputate ex aliquam efficitur ut imperdiet mi. In auctor volutpat lacus ac porttitor. Ut interdum tortor augue, nec gravida ligula convallis at. Nam ac rutrum velit, ac faucibus purus. Ut quis lectus augue. Aliquam gravida nulla velit, ac consectetur enim ultrices eget.</p><p>Curabitur eu velit massa. Curabitur in luctus sem, in tempus libero. In hac habitasse platea dictumst. Phasellus libero mi, convallis at egestas quis, dictum id lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed luctus sem. Quisque id maximus sapien. Vestibulum tempor risus sit amet felis fermentum, in vehicula eros sodales. Fusce tempus porttitor tortor sit amet vulputate.</p><p>Duis dignissim, urna aliquet maximus bibendum, risus diam facilisis nibh, eget faucibus mi metus vulputate neque. Praesent ullamcorper, dolor at facilisis imperdiet, tellus libero hendrerit tortor, a venenatis lacus purus quis odio. Vivamus vel vehicula leo. Duis tincidunt sed leo eget tincidunt. Curabitur in orci in nisl sollicitudin malesuada et vitae nisi. Mauris tincidunt tempor egestas. Proin faucibus, dui sed lobortis rhoncus, felis orci semper dui, at maximus tellus metus non enim. Nam finibus tristique sapien eu sagittis. Proin semper, felis vel placerat sollicitudin, urna lorem rutrum lectus, sed gravida lectus ligula quis lacus. Aenean tincidunt nisi vel convallis mollis. Mauris a est ligula. Aenean condimentum, ex vel ultrices euismod, leo erat tristique augue, a tincidunt mauris sapien tristique nisl. Nulla sed turpis sed tortor lobortis porta non non lorem. Nam commodo dapibus sollicitudin. Quisque id mollis nisl, a placerat nisl.</p>'
  },
  {
    id: 2,
    type: 'Servidores',
    typeColor: '#3498db',
    slug: 'o-poder-do-zabbix',
    date: '12 de janeiro de 2023',
    title: 'O poder do Zabbix',
    excerpt: 'Conheça uma ferramenta de monitoramento poderosíssima',
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium magna in ex cursus molestie vestibulum auctor purus. Morbi a diam id magna tempus tincidunt ac id odio. Suspendisse a condimentum nibh. Suspendisse potenti. Sed tristique elit ac dignissim porttitor. Suspendisse rhoncus turpis et ante dictum, et faucibus nunc vehicula. Sed at commodo magna. Nulla varius, orci sit amet bibendum vehicula, quam ligula vehicula ante, sit amet hendrerit arcu lectus nec risus. Duis id est non nulla dignissim pulvinar id vitae tortor. Praesent eu ligula sed tellus placerat lobortis non sed nibh.</p><p>Nullam quis magna et lectus tempus commodo. Aenean sed diam imperdiet, faucibus arcu sed, vehicula felis. Proin interdum viverra nunc nec efficitur. Nam ac luctus est, et hendrerit eros. Donec eu pretium metus. Aenean enim quam, suscipit ut nibh ut, tempor aliquam nunc. Donec a gravida elit.</p><p>Nunc in risus pellentesque, tincidunt nisi sit amet, porttitor sem. Vestibulum tincidunt sem odio, vel placerat nunc dignissim ut. Nullam vel ante at nisl malesuada laoreet sed a erat. Pellentesque dictum mattis sagittis. Proin maximus pellentesque sodales. Sed venenatis tempus lorem vitae consequat. Nullam faucibus vulputate diam aliquet elementum. Maecenas ex leo, consectetur et urna ac, iaculis ultrices justo. Nullam et massa vulputate ex aliquam efficitur ut imperdiet mi. In auctor volutpat lacus ac porttitor. Ut interdum tortor augue, nec gravida ligula convallis at. Nam ac rutrum velit, ac faucibus purus. Ut quis lectus augue. Aliquam gravida nulla velit, ac consectetur enim ultrices eget.</p><p>Curabitur eu velit massa. Curabitur in luctus sem, in tempus libero. In hac habitasse platea dictumst. Phasellus libero mi, convallis at egestas quis, dictum id lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed luctus sem. Quisque id maximus sapien. Vestibulum tempor risus sit amet felis fermentum, in vehicula eros sodales. Fusce tempus porttitor tortor sit amet vulputate.</p><p>Duis dignissim, urna aliquet maximus bibendum, risus diam facilisis nibh, eget faucibus mi metus vulputate neque. Praesent ullamcorper, dolor at facilisis imperdiet, tellus libero hendrerit tortor, a venenatis lacus purus quis odio. Vivamus vel vehicula leo. Duis tincidunt sed leo eget tincidunt. Curabitur in orci in nisl sollicitudin malesuada et vitae nisi. Mauris tincidunt tempor egestas. Proin faucibus, dui sed lobortis rhoncus, felis orci semper dui, at maximus tellus metus non enim. Nam finibus tristique sapien eu sagittis. Proin semper, felis vel placerat sollicitudin, urna lorem rutrum lectus, sed gravida lectus ligula quis lacus. Aenean tincidunt nisi vel convallis mollis. Mauris a est ligula. Aenean condimentum, ex vel ultrices euismod, leo erat tristique augue, a tincidunt mauris sapien tristique nisl. Nulla sed turpis sed tortor lobortis porta non non lorem. Nam commodo dapibus sollicitudin. Quisque id mollis nisl, a placerat nisl.</p>'
  },
  {
    id: 3,
    type: 'Ferramentas',
    typeColor: '#e74c3c',
    slug: 'microsoft-teams-premium-e-gpt',
    date: '14 de janeiro de 2023',
    title: 'Microsoft Teams Premium e GPT',
    excerpt: 'O Microsoft Teams agora conta com o GPT integrado',
    description:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium magna in ex cursus molestie vestibulum auctor purus. Morbi a diam id magna tempus tincidunt ac id odio. Suspendisse a condimentum nibh. Suspendisse potenti. Sed tristique elit ac dignissim porttitor. Suspendisse rhoncus turpis et ante dictum, et faucibus nunc vehicula. Sed at commodo magna. Nulla varius, orci sit amet bibendum vehicula, quam ligula vehicula ante, sit amet hendrerit arcu lectus nec risus. Duis id est non nulla dignissim pulvinar id vitae tortor. Praesent eu ligula sed tellus placerat lobortis non sed nibh.</p><p>Nullam quis magna et lectus tempus commodo. Aenean sed diam imperdiet, faucibus arcu sed, vehicula felis. Proin interdum viverra nunc nec efficitur. Nam ac luctus est, et hendrerit eros. Donec eu pretium metus. Aenean enim quam, suscipit ut nibh ut, tempor aliquam nunc. Donec a gravida elit.</p><p>Nunc in risus pellentesque, tincidunt nisi sit amet, porttitor sem. Vestibulum tincidunt sem odio, vel placerat nunc dignissim ut. Nullam vel ante at nisl malesuada laoreet sed a erat. Pellentesque dictum mattis sagittis. Proin maximus pellentesque sodales. Sed venenatis tempus lorem vitae consequat. Nullam faucibus vulputate diam aliquet elementum. Maecenas ex leo, consectetur et urna ac, iaculis ultrices justo. Nullam et massa vulputate ex aliquam efficitur ut imperdiet mi. In auctor volutpat lacus ac porttitor. Ut interdum tortor augue, nec gravida ligula convallis at. Nam ac rutrum velit, ac faucibus purus. Ut quis lectus augue. Aliquam gravida nulla velit, ac consectetur enim ultrices eget.</p><p>Curabitur eu velit massa. Curabitur in luctus sem, in tempus libero. In hac habitasse platea dictumst. Phasellus libero mi, convallis at egestas quis, dictum id lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed luctus sem. Quisque id maximus sapien. Vestibulum tempor risus sit amet felis fermentum, in vehicula eros sodales. Fusce tempus porttitor tortor sit amet vulputate.</p><p>Duis dignissim, urna aliquet maximus bibendum, risus diam facilisis nibh, eget faucibus mi metus vulputate neque. Praesent ullamcorper, dolor at facilisis imperdiet, tellus libero hendrerit tortor, a venenatis lacus purus quis odio. Vivamus vel vehicula leo. Duis tincidunt sed leo eget tincidunt. Curabitur in orci in nisl sollicitudin malesuada et vitae nisi. Mauris tincidunt tempor egestas. Proin faucibus, dui sed lobortis rhoncus, felis orci semper dui, at maximus tellus metus non enim. Nam finibus tristique sapien eu sagittis. Proin semper, felis vel placerat sollicitudin, urna lorem rutrum lectus, sed gravida lectus ligula quis lacus. Aenean tincidunt nisi vel convallis mollis. Mauris a est ligula. Aenean condimentum, ex vel ultrices euismod, leo erat tristique augue, a tincidunt mauris sapien tristique nisl. Nulla sed turpis sed tortor lobortis porta non non lorem. Nam commodo dapibus sollicitudin. Quisque id mollis nisl, a placerat nisl.</p>'
  }
]

export default fakePosts
