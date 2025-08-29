// MenuMateアプリケーション用メニューデータベース
const menuDatabase = {
    rice: [
        {name: 'ご飯（大）', price: 120, icon: '🍚', category: 'rice'},
        {name: 'ご飯（中）', price: 90, icon: '🍚', category: 'rice'},
        {name: 'ご飯（小）', price: 70, icon: '🍚', category: 'rice'},
        {name: '健康米', price: 90, icon: '🌾', category: 'rice'}
    ],
    main: [
        {name: 'お肉プレート', price: 250, icon: '🍖', category: 'plate'},
        {name: 'お魚プレート', price: 200, icon: '🐟', category: 'plate'},
        {name: 'お楽しみプレート', price: 230, icon: '🍽️', category: 'plate'},
        {name: '丼ぶり', price: 330, icon: '🍛', category: 'bowl'},
        {name: 'ミニ丼', price: 200, icon: '🥣', category: 'bowl'},
        {name: 'スペシャルカレー', price: 300, icon: '🍛', category: 'curry'},
        {name: 'カレーライス', price: 200, icon: '🍛', category: 'curry'},
        {name: 'うどん', price: 120, icon: '🍜', category: 'noodle'},
        {name: 'そば', price: 120, icon: '🍜', category: 'noodle'},
        {name: 'ラーメン', price: 250, icon: '🍜', category: 'noodle', crowded: true},
        {name: 'スペシャル麺', price: 300, icon: '🍜', category: 'noodle'},
        {name: '幕内弁当', price: 400, icon: '🍱', category: 'bento'}
    ],
    side: [
        {name: '味噌汁', price: 60, icon: '🍲', category: 'soup'},
        {name: 'サラダ', price: 100, icon: '🥗', category: 'vegetable'},
        {name: '小鉢', price: 60, icon: '🥄', category: 'small'},
        {name: 'デザート', price: 70, icon: '🍮', category: 'dessert'},
        {name: '冷奴', price: 60, icon: '🧊', category: 'cold'}
    ]
};
