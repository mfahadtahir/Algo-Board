export default {
  items: [
    {
      id: "algorithams",
      title: "ALGORITHAMS",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "maths",
          title: "Mathametics",
          type: "collapse",
          icon: "feather icon-percent",
          children: [
            // {
            //   id: "chain-matrix-multiplication",
            //   title: "Chain Matrix Multiplication",
            //   type: "item",
            //   url: "/maths/chain-matrix-mul",
            // },
            {
              id: "coin-change-making",
              title: "Coin Change Making",
              type: "item",
              url: "/maths/coin-change-making",
            },
            {
              id: "integer-partition",
              title: "Integer Partition",
              type: "item",
              url: "/maths/integer-partition",
            },
            {
              id: "rod-cutting",
              title: "Rod Cutting",
              type: "item",
              url: "/maths/rod-cutting",
            },
          ],
        },
        {
          id: "sets",
          title: "Sets",
          type: "collapse",
          icon: "feather icon-grid",
          children: [
            // {
            //   id: "knapsack",
            //   title: "0/1 Knapsack Problem",
            //   type: "item",
            //   url: "/sets/knapsack",
            // },
            {
              id: "partition",
              title: "Balanced Partition",
              type: "item",
              url: "/sets/partition",
            },
            {
              id: "longest-increasing-subsequence",
              title: "Longest Increasing Subsequence",
              type: "item",
              url: "/sets/longest-increasing-subsequence",
            },
            {
              id: "longest-common-subsequence",
              title: "Longest Common Subsequence",
              type: "item",
              url: "/sets/longest-common-subsequence",
            },
            {
              id: "shortest-common-supersequence",
              title: "Shortest Common Supersequence",
              type: "item",
              url: "/sets/shortest-common-supersequence",
            },
          ],
        },
        {
          id: "strings",
          title: "Strings",
          type: "collapse",
          icon: "feather icon-type",
          children: [
            {
              id: "levenshtein",
              title: "Levenshtein Distance",
              type: "item",
              url: "/strings/levenshtein",
            },
            {
              id: "word-break",
              title: "Word Break",
              type: "item",
              url: "/strings/word-break",
            },
          ],
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
      ],
    },
    {
      id: "ui-element",
      title: "UI ELEMENT",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "basic",
          title: "Component",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "button",
              title: "Button",
              type: "item",
              url: "/basic/button",
            },
            {
              id: "badges",
              title: "Badges",
              type: "item",
              url: "/basic/badges",
            },
            {
              id: "breadcrumb-pagination",
              title: "Breadcrumb & Pagination",
              type: "item",
              url: "/basic/breadcrumb-paging",
            },
            {
              id: "collapse",
              title: "Collapse",
              type: "item",
              url: "/basic/collapse",
            },
            {
              id: "tabs-pills",
              title: "Tabs & Pills",
              type: "item",
              url: "/basic/tabs-pills",
            },
            {
              id: "typography",
              title: "Typography",
              type: "item",
              url: "/basic/typography",
            },
            {
              id: "charts",
              title: "Charts",
              type: "item",
              // icon: "feather icon-pie-chart",
              url: "/charts/nvd3",
            },
            {
              id: "form-basic",
              title: "Form Elements",
              type: "item",
              url: "/forms/form-basic",
              // icon: "feather icon-file-text",
            },
            {
              id: "bootstrap",
              title: "Table",
              type: "item",
              // icon: "feather icon-server",
              url: "/tables/bootstrap",
            },
          ],
        },
      ],
    },
  ],
};
