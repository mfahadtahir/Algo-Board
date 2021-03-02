import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Components/Dashboard/Default"));

// Mathematics
const ChainMatrixMultiplication = React.lazy(() =>
  import("./Screens/Maths/ChainMatrixMultiplication")
);
const CoinChangeMaking = React.lazy(() => import("./Screens/Maths/CoinChangeMaking"));
const IntegerPartition = React.lazy(() => import("./Screens/Maths/IntegerPartition"));
const RodCutting = React.lazy(() => import("./Screens/Maths/RodCutting"));

// Sets
const LongestCommonSubsequence = React.lazy(() =>
  import("./Screens/Sets/LongestCommonSubsequence")
);
const LongestIncreasingSubsequence = React.lazy(() =>
  import("./Screens/Sets/LongestIncreasingSubsequence")
);
const ShortestCommonSuperSequence = React.lazy(() =>
  import("./Screens/Sets/ShortestCommonSuperSequence")
);
const Knapsack = React.lazy(() => import("./Screens/Sets/Knapsack"));
const BalancedPartition = React.lazy(() => import("./Screens/Sets/BalancedPartition"));

// Strings
const LevenshteinDistance = React.lazy(() => import("./Screens/Strings/LevenshteinDistance"));
const WordBreak = React.lazy(() => import("./Screens/Strings/WordBreak"));

// Component Examples
const UIBasicButton = React.lazy(() => import("./Components/UIElements/Basic/Button"));
const UIBasicBadges = React.lazy(() => import("./Components/UIElements/Basic/Badges"));
const UIBasicBreadcrumbPagination = React.lazy(() =>
  import("./Components/UIElements/Basic/BreadcrumbPagination")
);

const UIBasicCollapse = React.lazy(() => import("./Components/UIElements/Basic/Collapse"));
const UIBasicTabsPills = React.lazy(() => import("./Components/UIElements/Basic/TabsPills"));
const UIBasicBasicTypography = React.lazy(() => import("./Components/UIElements/Basic/Typography"));

const FormsElements = React.lazy(() => import("./Components/Forms/FormsElements"));

const BootstrapTable = React.lazy(() => import("./Components/Tables/BootstrapTable"));

const Nvd3Chart = React.lazy(() => import("./Components/Charts/Nvd3Chart/index"));

const OtherSamplePage = React.lazy(() => import("./Components/Other/SamplePage"));

const routes = [
  { path: "/dashboard/default", exact: true, name: "Default", component: DashboardDefault },

  // Mathmatics
//   {
//     path: "/maths/chain-matrix-mul",
//     exact: true,
//     name: "Chain Matrix Multiplication",
//     component: ChainMatrixMultiplication,
//   },
//   {
//     path: "/maths/coin-change-making",
//     exact: true,
//     name: "Coin Change Making",
//     component: CoinChangeMaking,
//   },
  {
    path: "/maths/integer-partition",
    exact: true,
    name: "Integer Partition Problem",
    component: IntegerPartition,
  },
  {
    path: "/maths/rod-cutting",
    exact: true,
    name: "Rod Cutting",
    component: RodCutting,
  },

  // Sets
  {
    path: "/sets/longest-common-subsequence",
    exact: true,
    name: "Longest Common Subsequence",
    component: LongestCommonSubsequence,
  },
  {
    path: "/sets/longest-increasing-subsequence",
    exact: true,
    name: "Longest Increasing Subsequence",
    component: LongestIncreasingSubsequence,
  },
  {
    path: "/sets/shortest-common-supersequence",
    exact: true,
    name: "Shortest Common Supersequence ",
    component: ShortestCommonSuperSequence,
  },
//   {
//     path: "/sets/knapsack",
//     exact: true,
//     name: "0/1 Knapsack Problem",
//     component: Knapsack,
//   },
  {
    path: "/sets/partition",
    exact: true,
    name: "Balanced Partition",
    component: BalancedPartition,
  },
  // Strings
  {
    path: "/strings/levenshtein",
    exact: true,
    name: "Levenshtein Distance",
    component: LevenshteinDistance,
  },
  {
    path: "/strings/word-break",
    exact: true,
    name: "Word Break",
    component: WordBreak,
  },

  // Components Examples
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
