import SplashView from './views/View-Splash';
import MarketListView from './views/View-List';
import MarketMapView from './views/View-Map';
import MarketSingleStall from './views/View-Single-Stall';


export const routes = [
    { path: '/list/:query?', component: MarketListView, props: true, children: [
        { path: '', component: MarketListView, name: 'ListOfStalls', props: true }
    ]},
    { path: '/map', component: MarketMapView, name: 'MapView'},
    { path: '/splash', component: SplashView, name: 'SplashView' },
    { path: '/stall/:stallName', component: MarketSingleStall, name: 'SingleStall', props: true },
    { path: '', redirect: { name: 'ListOfStalls' }}
    
]

