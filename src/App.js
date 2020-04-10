import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Usage from './pages/usage/usage.component';
import Acron from './pages/acron/acron.component';

import './App.css';

const supportsHistory = 'pushState' in window.history;

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    scale: 0.8
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "absolute"
};

const App = () => {
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <AnimatePresence>
        <Switch>
          <Route 
            path="/" 
            component={
              () => <Homepage 
                      pageVariants={pageVariants} 
                      pageTransition={pageTransition} 
                      pageStyle={pageStyle}
                    />
            } 
            exact 
          />
          <Route 
            path="/about" 
            component={
              () => <About 
                      pageVariants={pageVariants} 
                      pageTransition={pageTransition} 
                      pageStyle={pageStyle}
                    />
            } 
          />
          <Route 
            path="/usage" 
            component={
              () => <Usage 
                      pageVariants={pageVariants} 
                      pageTransition={pageTransition} 
                      pageStyle={pageStyle}
                    />
            } 
          />
          <Route 
            path="/app" 
            component={
              () => <Acron 
                      pageVariants={pageVariants} 
                      pageTransition={pageTransition} 
                      pageStyle={pageStyle}
                    />
            } 
          />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

// const AnimatedSwitch = withRouter(({ location }) => (
//   <TransitionGroup>
//     <CSSTransition key={location.key} classNames="toplayer toplayer2 toplayer3 toplayer4 toplayer5" timeout={1000}>
//       <div class="top-layer"></div>
//       <div class="top-layer top-layer--2"></div>
//       <div class="top-layer top-layer--3"></div>
//       <div class="top-layer top-layer--4"></div>
//       <div class="top-layer top-layer--5"></div>
//       <Switch location={location}>
//         <Route path="/" component={Homepage} exact />
//         <Route path="/about" component={About} />
//         <Route path="/usage" component={Usage} />
//         <Route path="/app" component={Acron} />
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup>
// ));

// function App() {
//   return (
//     <TransitionGroup>
//       <CSSTransition classNames="top-layer active top-layer--2 top-layer--3 top-layer--4 top-layer--5" timeout={1000}>
//         <BrowserRouter>
//               <Switch>
//                 <Route exact path='/' component={Homepage} />
//                 <Route path='/about' component={About} />
//                 <Route path='/app' component={Acron} />
//               </Switch>
//         </BrowserRouter>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// }

export default App;
