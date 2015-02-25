({
	block : 'page',
	title : 'Velo',
	head : [
		{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
		{ elem : 'css', url : '_index.css' }
	],
	scripts: [{ elem : 'js', url : '_index.js' }],
	content: [
		{
			block: 'header',
			content: [
				{
					elem:'punkt',
					mix: { block: 'header', elem: 'logo' },
					content:{
						block:'image',
						mix: { block: 'header', elem: 'logo-img' },
						alt: 'Velo',
						url: '../../img/logo.png'
					}
				},
				{
					elem:'punkt',
					mix: { block: 'header', elem: 'search' },
					content: {
						block:'search-input',
						mix:{block:'header',elem:'search-input'},
						content:[
							{
								block: 'input',
								placeholder : 'Search places',
							},
							{
								elem:'icon'
							}
						]
					}
				},
				{
					elem:'punkt',
					mix: { block: 'header', elem: 'info' },
					content: {
						block:'user',
						content:[
							{
								elem:'img',
								content:{
									block:'image',
									mix: { block: 'user', elem: 'user-img' },
									alt: 'user',
									url: '/img/user.png'
								}
							},
							{
								block:'link',
								mix: { block: 'user', elem: 'name' },
								content:'Anthon gcor',
								url: '#'
							},
							{
								block:'button',
								mix: { block: 'user', elem: 'logout' },
								content:['']
							}
						]
					}
				}
			]
		},
		{
			block: 'main',
			content: [
				{
					elem: 'side',
					elemMods:{align:'left'},
					content:[
						{
							block: 'aside',
							content:[
								{
									elem:'logo',
									mix: { block: 'header', elem: 'logo' },
									content:{
										block:'image',
										mix: { block: 'header', elem: 'logo-img' },
										alt: 'Velo',
										url: '../../img/logo.png'
									}
								},
								{
									elem:'list',
									elemMods: {position:'top'},
									content: [
											['/img/i_pen.png','/img/i_like.png','/img/i_earth.png','/img/i_attach.png'].map(function (link) {
											return{
												block:'link',
												url:'#',
												mix:{block:'aside', elem:'link'},
												content: {
													block:'image',
													mix:{block:'aside',elem:'icon'},
													url:'../../'+link
												}
											};
										})
									]
								},
								{
									elem:'list',
									elemMods: {position:'bottom'},
									content: [
											['/img/i_hdd.png','/img/i_set.png'].map(function (link) {
											return{
												block:'link',
												url:'#',
												mix:{block:'aside', elem:'link'},
												content: {
													block:'image',
													mix:{block:'aside',elem:'icon'},
													url:'../../'+link
												}
											};
										})
									]
								}
							]
						},
					]
				},
				{
					elem: 'side',
					elemMods:{align:'right'},
					mix:{block:'main',elem:'content'},
					content:[
						{
							block:'panorama',
							content: [
								{
									elem:'bg',
									content:{
										block:'image',
										mix:{block:'panorama',elem:'image'},
										url:'../../img/panorama.jpg',
										alt:'city'
									}
								},
								{
									elem:'city',
									content:[
										{
											elem:'geo',
											content:['St.Peterburg']
										},
										{
											elem:'geo-icon',
											content:[
												{
													block:'image',
													url:'../../img/i_location.png',
													alt:'city'
												}
											]
										}
									]
								},
								{
									block:'stickers',
									mix:{ block:"panorama",elem:'stickers'},
									content:[
										{type:'time',icon:'/img/i_time.png',text: 'Best time to visit',mark:'March'},
										{type:'flights',icon:'/img/i_plane.png',text: '20 flights from',mark:'350$'}
									].map(function (stiker) {
										return{
											elem:'sticker',
											content:[
												{
													elem:'icon',
													elemMods: {type: stiker.type},
													content:[
														{
															block:'image',
															url:'../..'+stiker.icon,
															alt: stiker.type
														}
													]
												},
												{
													elem:'text',
													content: stiker.text
												},
												{
													elem:'mark-text',
													content: stiker.mark
												},
												{
													elem:'bg',
													elemMods: {type: stiker.type}
												}
											]
										};
									})
								}
							]
						},
						{
							block:'places',
							content:[
								{
									elem:'header',
									content:[
										{
											elem:'sort',
											elemMods: {align:'left'},
											content:[
												{
													block:'link',
													cls:'active',
													mix: {block:'places',elem:'link'},
													url:'#',
													content:'Newest'
												},
												{
													block:'link',
													mix: {block:'places',elem:'link'},
													url:'#',
													content:'Popular'
												}
											]
										},
										{
											elem:'sort',
											elemMods: {align:'right'},
											content:[
												{
													block:'link',
													url:'#',
													content:{
														block:'image',
														mix: {block:'places',elem:'sort-icon'},
														alt:'image',
														url:'../../img/i_img.png'
													}
												},
												{
													block:'link',
													url:'#',
													content:{
														block:'image',
														mix: {block:'places',elem:'sort-icon'},
														alt:'video',
														url:'../../img/i_video.png'
													}
												}
											]
										}
									]
								},
								{
									elem:'list',
									content:[
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'},
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'},
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'},
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'},
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'},
										{image:'/img/card-image.jpg', author:'/img/card-user.jpg', name:'Anton gcor', place:'Moscow, Russia', like:'255'}
									].map(function (card) {
										return{
											block:'card',
											mix:{block:'places',elem:'card'},
											content:[
												{
													block:'image',
													mix:{block:'card',elem:'img'},
													url:'../..'+card.image
												},
												{
													block:'image',
													mix:{block:'card',elem:'author'},
													url:'../..'+card.author
												},
												{
													elem:'info',
													elemMods: {align:'left'},
													content:[
														{
															elem:'name',
															content: card.name
														},
														{
															elem:'place',
															content: card.place
														}
													]
												},
												{
													elem:'info',
													elemMods: {align:'right'},
													content:[
														{
															elem:'like',
															content:card.like
														}
													]
												}
											]
										}
									})
								}
							]
						},
						{
							block:'chat',
							content: [
								{
									elem:'title',
									content:'Recent Travellers'
								},
								{
									elem:'persons',
									content:[
										{
											elem:'list',
											content:[
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'},
												{image:'/img/user-chat.png', name:'Anton gcor'}
											].map(function (traveller) {
												return{
													block:'traveller',
													mix:{block:'chat',elem:'traveller'},
													content:[
														{
															block:'image',
															mix:{block:'traveller',elem:'img'},
															url:'../..'+traveller.image,
															alt:'img'
														},
														{
															elem:'name',
															content:traveller.name
														},
														{
															elem:'status'
														}
													]
												}
											})
										}
									]
								},
								{
									block:'search-input',
									mix:{block:'chat',elem:'search-input'},
									content:[
										{
											block: 'input',
											placeholder:'Chat with',
										},
										{
											elem:'icon'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
});