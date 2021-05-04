import TopAndPlayer from '@/components/TopAndPlayer'
import Player from '@/components/Player'

// 路由配置

export const Routes = [
    {
        path: '/',
        name: 'home',
        component: TopAndPlayer
    },

    {
        path: '/play',
        name: 'play',
        component: Player
    }
]
