import SplashView from './views/View-Splash';
import MarketListView from './views/View-List';
import MarketMapView from './views/View-Map';
import MarketListOfStalls from './views/subviews/View-List-Of-Stalls';
import MarketSingleStall from './views/subviews/View-Single-Stall';


export const routes = [
    { path: '/list/:filter?', component: MarketListView, props: true, children: [
        { path: '', component: MarketListOfStalls, name: 'ListOfStalls', props: true },
        { path: '/stall/:stallName', component: MarketSingleStall, name: 'SingleStall', props: true }
    ]},
    { path: '/map', component: MarketMapView, name: 'MapView'},
    { path: '/splash', component: SplashView, name: 'SplashView' },
    { path: '', redirect: { name: 'ListOfStalls' }}
    
]

