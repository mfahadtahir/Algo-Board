import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Screens/Dashboard/Default"));
const LongestCommonSubsequence = React.lazy(() =>
  import("./Screens/Sets/LongestCommonSubsequence")
);
const LongestIncreasingSubsequence = React.lazy(() =>
  import("./Screens/Sets/LongestIncreasingSubsequence")
);

const UIBasicButton = React.lazy(() => import("./Screens/UIElements/Basic/Button"));
const UIBasicBadges = React.lazy(() => import("./Screens/UIElements/Basic/Badges"));
const UIBasicBreadcrumbPagination = React.lazy(() =>
  import("./Screens/UIElements/Basic/BreadcrumbPagination")
);

const UIBasicCollapse = React.lazy(() => import("./Screens/UIElements/Basic/Collapse"));
const UIBasicTabsPills = React.lazy(() => import("./Screens/UIElements/Basic/TabsPills"));
const UIBasicBasicTypography = React.lazy(() => import("./Screens/UIElements/Basic/Typography"));

const FormsElements = React.lazy(() => import("./Screens/Forms/FormsElements"));

const BootstrapTable = React.lazy(() => import("./Screens/Tables/BootstrapTable"));

const Nvd3Chart = React.lazy(() => import("./Screens/Charts/Nvd3Chart/index"));

const OtherSamplePage = React.lazy(() => import("./Screens/Other/SamplePage"));

const routes = [
  { path: "/dashboard/default", exact: true, name: "Default", component: DashboardDefault },
  {
    path: "/sets/lcs",
    exact: true,
    name: "Longest Common Subsequence",
    component: LongestCommonSubsequence,
  },
  {
    path: "/sets/lis",
    exact: true,
    name: "Longest Increasing Subsequence",
    component: LongestIncreasingSubsequence,
  },
  { path: "/basic/button", exact: true, name: "Basic Button", component: UIBasicButton },
  { path: "/basic/badges", exact: true, name: "Basic Badges", component: UIBasicBadges },
  {
    path: "/basic/breadcrumb-paging",
    exact: true,
    name: "Basic Breadcrumb Pagination",
    component: UIBasicBreadcrumbPagination,
  },
  { path: "/basic/collapse", exact: true, name: "Basic Collapse", component: UIBasicCollapse },
  {
    path: "/basic/tabs-pills",
    exact: true,
    name: "Basic Tabs & Pills",
    component: UIBasicTabsPills,
  },
  {
    path: "/basic/typography",
    exact: true,
    name: "Basic Typography",
    component: UIBasicBasicTypography,
  },
  { path: "/forms/form-basic", exact: true, name: "Forms Elements", component: FormsElements },
  { path: "/tables/bootstrap", exact: true, name: "Bootstrap Table", component: BootstrapTable },
  { path: "/charts/nvd3", exact: true, name: "Nvd3 Chart", component: Nvd3Chart },
  { path: "/sample-page", exact: true, name: "Sample Page", component: OtherSamplePage },
];

export default routes;
