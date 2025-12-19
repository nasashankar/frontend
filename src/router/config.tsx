import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const Auditions = lazy(() => import('../pages/auditions/page'));
const AuditionDetail = lazy(() => import('../pages/audition-detail/page'));
const Artists = lazy(() => import('../pages/artists/page'));
const ArtistProfile = lazy(() => import('../pages/artist-profile/page'));
const DashboardSelection = lazy(() => import('../pages/dashboard-selection/page'));
const ArtistDashboard = lazy(() => import('../pages/artist-dashboard/page'));
const DirectorDashboard = lazy(() => import('../pages/director-dashboard/page'));
const DirectorProfile = lazy(() => import('../pages/director-profile/page'));
const Shots = lazy(() => import('../pages/shots/page'));
const LiveAuditions = lazy(() => import('../pages/live-auditions/page'));
const LiveStream = lazy(() => import('../pages/live-stream/page'));
const PrivateAuditionReview = lazy(() => import('../pages/private-audition-review/page'));
const PublicAuditionGallery = lazy(() => import('../pages/public-audition-gallery/page'));
const TermsOfService = lazy(() => import('../pages/terms-of-service/page'));
const PrivacyPolicy = lazy(() => import('../pages/privacy-policy/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auditions',
    element: <Auditions />,
  },
  {
    path: '/audition/:id',
    element: <AuditionDetail />,
  },
  {
    path: '/artists',
    element: <Artists />,
  },
  {
    path: '/artist/:id',
    element: <ArtistProfile />,
  },
  {
    path: '/dashboard-selection',
    element: <DashboardSelection />,
  },
  {
    path: '/artist-dashboard',
    element: <ArtistDashboard />,
  },
  {
    path: '/director-dashboard',
    element: <DirectorDashboard />,
  },
  {
    path: '/director/:id',
    element: <DirectorProfile />,
  },
  {
    path: '/shots',
    element: <Shots />,
  },
  {
    path: '/live-auditions',
    element: <LiveAuditions />,
  },
  {
    path: '/live/:id',
    element: <LiveStream />,
  },
  {
    path: '/private-audition-review/:id',
    element: <PrivateAuditionReview />,
  },
  {
    path: '/public-audition/:id',
    element: <PublicAuditionGallery />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfService />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
